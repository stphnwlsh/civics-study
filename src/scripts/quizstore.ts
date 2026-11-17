/*
  Quiz results.

  Every finished round is saved in this browser straight away. When GitHub saving is set up,
  the full history is also kept in the private notes repo as quiz/results.md: a table that reads
  nicely on github.com, with the raw data in a JSON block at the bottom that the site reads back.
  Rounds are merged by id, so two devices never wipe out each other's history.
*/
import { read, write, gh, b64encode, b64decode, explain, getSettings, syncEnabled, markStudyDay } from './store';
import { QUIZ_LEVELS } from '../data/quiz.js';
import { TOPICS } from '../data/questions.js';

export interface Attempt {
  id: string; // unique per round
  at: string; // ISO time it finished
  score: number;
  total: number;
  byTopic: Record<string, [number, number]>; // unit key -> [right, asked]
  missed: number[]; // study question ids behind the missed ones
}

interface QuizState {
  attempts: Attempt[];
  sha?: string;
  dirty?: boolean;
  lastRound?: string[]; // question text from the last round, so the next one feels fresh
}

const KEY = 'civics:quiz';
const FILE = 'quiz/results.md';

function load(): QuizState {
  return { attempts: [], ...(read<QuizState>(KEY) ?? {}) };
}
function save(s: QuizState) {
  write(KEY, s);
}

export function getAttempts(): Attempt[] {
  return [...load().attempts].sort((a, b) => a.at.localeCompare(b.at));
}

export function lastRound(): string[] {
  return load().lastRound ?? [];
}
export function setLastRound(qs: string[]) {
  save({ ...load(), lastRound: qs });
}

export function saveAttempt(a: Attempt) {
  const s = load();
  save({ ...s, attempts: [...s.attempts.filter((x) => x.id !== a.id), a], dirty: true });
  markStudyDay();
}

export function levelFor(score: number, total = 20) {
  const scaled = Math.round((score / total) * 20);
  return QUIZ_LEVELS.find((l) => scaled >= l.at) ?? null;
}

export function bestScore(attempts = getAttempts()) {
  return attempts.reduce((m, a) => Math.max(m, a.score), 0);
}

/* ───────── the file in the notes repo ───────── */

const topicName = (k: string) => (TOPICS as Record<string, { name: string }>)[k]?.name ?? k;

function weakest(a: Attempt) {
  const rows = Object.entries(a.byTopic).filter(([, [, n]]) => n > 0);
  rows.sort((x, y) => x[1][0] / x[1][1] - y[1][0] / y[1][1]);
  const [k, [r, n]] = rows[0] ?? ['', [0, 0]];
  return k && r < n ? `${topicName(k)} (${r}/${n})` : 'none missed';
}

function toMarkdown(attempts: Attempt[]) {
  const rows = [...attempts]
    .sort((a, b) => b.at.localeCompare(a.at))
    .map((a) => {
      const lvl = levelFor(a.score, a.total);
      const d = new Date(a.at).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });
      return `| ${d} | ${a.score}/${a.total} | ${lvl ? `${lvl.icon} ${lvl.name}` : 'Keep practicing'} | ${weakest(a)} |`;
    });
  return [
    '# Final quiz results',
    '',
    `Rounds taken: ${attempts.length}. Best score: ${bestScore(attempts)}/20.`,
    '',
    '| When | Score | Level | Weakest topic |',
    '| --- | --- | --- | --- |',
    ...rows,
    '',
    '<!-- The site reads the block below. Editing it by hand can lose results. -->',
    '```json',
    JSON.stringify({ app: 'civics-study', attempts }, null, 1),
    '```',
    '',
  ].join('\n');
}

function fromMarkdown(md: string): Attempt[] {
  const m = md.match(/```json\n([\s\S]*?)\n```/);
  if (!m) return [];
  try {
    const data = JSON.parse(m[1]);
    return Array.isArray(data?.attempts) ? data.attempts : [];
  } catch {
    return [];
  }
}

function merge(a: Attempt[], b: Attempt[]) {
  const byId = new Map<string, Attempt>();
  for (const x of [...a, ...b]) byId.set(x.id, x);
  return [...byId.values()].sort((x, y) => x.at.localeCompare(y.at));
}

/** Pulls results from other devices and pushes new rounds. Safe to call often. */
export async function syncQuiz(): Promise<{ ok: boolean; message: string }> {
  const s = getSettings();
  if (!syncEnabled(s)) return { ok: false, message: 'Saved on this device.' };
  try {
    for (let tries = 0; tries < 3; tries++) {
      const local = load();
      const res = await gh(s, `/contents/${FILE}?ref=${encodeURIComponent(s.branch)}`);
      if (!res.ok && res.status !== 404) return { ok: false, message: explain(res.status) };
      const remote = res.ok ? await res.json() : null;
      const remoteAttempts = remote ? fromMarkdown(b64decode(remote.content)) : [];
      const merged = merge(remoteAttempts, local.attempts);
      const remoteIds = new Set(remoteAttempts.map((a) => a.id));
      const needsPush = merged.some((a) => !remoteIds.has(a.id));

      if (!needsPush) {
        save({ ...local, attempts: merged, sha: remote?.sha, dirty: false });
        return { ok: true, message: 'Saved to GitHub.' };
      }
      const put = await gh(s, `/contents/${FILE}`, {
        method: 'PUT',
        keepalive: true,
        body: JSON.stringify({
          message: `Quiz results: ${merged.length} round${merged.length === 1 ? '' : 's'}`,
          content: b64encode(toMarkdown(merged)),
          branch: s.branch,
          ...(remote?.sha ? { sha: remote.sha } : {}),
        }),
      });
      if (put.status === 409 || put.status === 422) continue; // changed on another device: merge again
      if (!put.ok) return { ok: false, message: explain(put.status) };
      const body = await put.json();
      const now = load();
      const all = merge(merged, now.attempts);
      save({ ...now, attempts: all, sha: body.content.sha, dirty: all.length !== merged.length });
      return { ok: true, message: 'Saved to GitHub.' };
    }
    return { ok: false, message: 'GitHub kept changing. Your results are saved on this device and will sync next time.' };
  } catch {
    return { ok: false, message: 'Could not reach GitHub. Your results are saved on this device.' };
  }
}
