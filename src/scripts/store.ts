/*
  Where her work lives.

  Every change is saved to this browser straight away (localStorage), so nothing
  is lost if the connection drops. When a GitHub token is set up on the Settings
  page, each question is also saved as a Markdown file in a private GitHub repo
  (notes/q01.md, notes/q02.md, ...). Those files are readable on github.com and
  are what make the notes last across devices and browser clean-ups.
*/

export type Rating = '' | 'got' | 'partly' | 'review';

export interface Note {
  answer: string;
  notes: string;
  hintsShown: number;
  checks: number[];
  revealed: boolean;
  rating: Rating;
  researched: boolean; // opened a research tool or wrote research notes
  steps: number[]; // step cards she moved past with "Next"
  updated: string; // ISO time of the last edit
  sha?: string; // GitHub blob sha of the last synced copy
  dirty?: boolean; // edited since the last successful sync
}

export interface Settings {
  owner: string;
  repo: string;
  branch: string;
  token: string;
}

export type SyncState =
  | { kind: 'local' } // no GitHub set up
  | { kind: 'saving' }
  | { kind: 'synced'; at: string }
  | { kind: 'error'; message: string };

const NOTE_KEY = (id: number) => `civics:note:${id}`;
const SETTINGS_KEY = 'civics:settings';

export const DEFAULT_SETTINGS: Settings = {
  owner: 'stphnwlsh',
  repo: 'civics-study-notes',
  branch: 'main',
  token: '',
};

/* ───────── browser storage (always wrapped: it can be blocked) ───────── */

function read<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage full or blocked: GitHub sync still works */
  }
}

export function emptyNote(): Note {
  return { answer: '', notes: '', hintsShown: 0, checks: [], revealed: false, rating: '', researched: false, steps: [], updated: '' };
}

export function getNote(id: number): Note {
  return { ...emptyNote(), ...(read<Note>(NOTE_KEY(id)) ?? {}) };
}

function putNote(id: number, note: Note) {
  write(NOTE_KEY(id), note);
}

export function getSettings(): Settings {
  return { ...DEFAULT_SETTINGS, ...(read<Settings>(SETTINGS_KEY) ?? {}) };
}

export function saveSettings(s: Settings) {
  write(SETTINGS_KEY, s);
}

export function syncEnabled(s = getSettings()) {
  return Boolean(s.token && s.owner && s.repo);
}

/* ───────── status of a question, for lists and progress ───────── */

export type Status = 'new' | 'started' | 'answered' | 'mastered';

export function statusOf(n: Note): Status {
  if (n.rating === 'got') return 'mastered';
  if (n.answer.trim().length >= 40) return 'answered';
  if (n.answer.trim() || n.notes.trim() || n.hintsShown > 0 || n.revealed) return 'started';
  return 'new';
}

/* ───────── Markdown file format ───────── */

export function pad(id: number) {
  return String(id).padStart(2, '0');
}

export function filePath(id: number) {
  return `notes/q${pad(id)}.md`;
}

export function toMarkdown(id: number, question: string, n: Note): string {
  const fm = [
    '---',
    `question: ${id}`,
    `status: ${statusOf(n)}`,
    `rating: ${n.rating || 'none'}`,
    `hints_shown: ${n.hintsShown}`,
    `checks: ${JSON.stringify(n.checks)}`,
    `revealed: ${n.revealed}`,
    `researched: ${n.researched}`,
    `steps: ${JSON.stringify(n.steps)}`,
    `updated: ${n.updated}`,
    '---',
  ].join('\n');
  return `${fm}\n\n# ${id}. ${question}\n\n## My answer\n\n${n.answer.trim()}\n\n## Research notes\n\n${n.notes.trim()}\n`;
}

export function fromMarkdown(md: string): Partial<Note> {
  const out: Partial<Note> = {};
  const fm = md.match(/^---\n([\s\S]*?)\n---/);
  if (fm) {
    for (const line of fm[1].split('\n')) {
      const m = line.match(/^(\w+):\s*(.*)$/);
      if (!m) continue;
      const [, k, v] = m;
      try {
        if (k === 'rating') out.rating = (v === 'none' ? '' : v) as Rating;
        if (k === 'hints_shown') out.hintsShown = Number(v) || 0;
        if (k === 'checks') out.checks = JSON.parse(v);
        if (k === 'revealed') out.revealed = v === 'true';
        if (k === 'researched') out.researched = v === 'true';
        if (k === 'steps') out.steps = JSON.parse(v);
        if (k === 'updated') out.updated = v;
      } catch {
        /* ignore a hand-edited line we can't read */
      }
    }
  }
  const answer = md.split(/\n## My answer\n/)[1];
  if (answer !== undefined) {
    out.answer = answer.split(/\n## Research notes\n/)[0].trim();
    const notes = answer.split(/\n## Research notes\n/)[1];
    out.notes = (notes ?? '').trim();
  }
  return out;
}

/* ───────── GitHub contents API ───────── */

function b64encode(text: string) {
  const bytes = new TextEncoder().encode(text);
  let bin = '';
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin);
}

function b64decode(b64: string) {
  const bin = atob(b64.replace(/\n/g, ''));
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

async function gh(s: Settings, path: string, init: RequestInit = {}) {
  const res = await fetch(`https://api.github.com/repos/${s.owner}/${s.repo}${path}`, {
    ...init,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${s.token}`,
      'X-GitHub-Api-Version': '2022-11-28',
      ...(init.body ? { 'Content-Type': 'application/json' } : {}),
    },
    cache: 'no-store',
  });
  return res;
}

function explain(status: number) {
  if (status === 401) return 'GitHub did not accept the token. It may have expired: make a new one in Settings.';
  if (status === 403) return 'The token is not allowed to write to the notes repo. Check its permissions in Settings.';
  if (status === 404) return 'GitHub could not find the notes repo. Check the owner and repo name in Settings.';
  return `GitHub answered with an error (${status}). Your work is still saved on this device.`;
}

/** Checks the settings work: the repo exists and the token can write to it. */
export async function testConnection(s: Settings): Promise<{ ok: boolean; message: string }> {
  try {
    const res = await gh(s, '');
    if (!res.ok) return { ok: false, message: explain(res.status) };
    const repo = await res.json();
    if (!repo.permissions?.push) {
      return { ok: false, message: 'The token can read the repo but not write to it. Give it "Contents: Read and write".' };
    }
    return {
      ok: true,
      message: `Connected to ${repo.full_name}${repo.private ? ' (private)' : ' — note: this repo is public'}.`,
    };
  } catch {
    return { ok: false, message: 'Could not reach GitHub. Check the internet connection.' };
  }
}

async function fetchRemote(s: Settings, id: number): Promise<{ note: Partial<Note>; sha: string } | null> {
  const res = await gh(s, `/contents/${filePath(id)}?ref=${encodeURIComponent(s.branch)}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(explain(res.status));
  const body = await res.json();
  return { note: fromMarkdown(b64decode(body.content)), sha: body.sha };
}

async function pushRemote(s: Settings, id: number, question: string, n: Note, sha?: string): Promise<string> {
  const res = await gh(s, `/contents/${filePath(id)}`, {
    method: 'PUT',
    keepalive: true,
    body: JSON.stringify({
      message: `Update notes for question ${id}`,
      content: b64encode(toMarkdown(id, question, n)),
      branch: s.branch,
      ...(sha ? { sha } : {}),
    }),
  });
  if (res.status === 409 || res.status === 422) {
    // The file changed on GitHub since we last looked. The edit here is newer, so keep it.
    const latest = await fetchRemote(s, id);
    if (latest && latest.sha !== sha) return pushRemote(s, id, question, n, latest.sha);
  }
  if (!res.ok) throw new Error(explain(res.status));
  const body = await res.json();
  return body.content.sha as string;
}

/* ───────── the note controller used by each question page ───────── */

type Listener = (state: SyncState) => void;

export function createNoteController(id: number, question: string, onSync: Listener) {
  let note = getNote(id);
  let timer: number | undefined;
  let inFlight: Promise<void> | null = null;

  const emit = (st: SyncState) => onSync(st);
  emit(syncEnabled() ? (note.dirty ? { kind: 'saving' } : { kind: 'synced', at: note.updated }) : { kind: 'local' });

  async function push() {
    const s = getSettings();
    if (!syncEnabled(s)) return emit({ kind: 'local' });
    emit({ kind: 'saving' });
    try {
      const snapshot = { ...note };
      const sha = await pushRemote(s, id, question, snapshot, note.sha);
      note.sha = sha;
      if (note.updated === snapshot.updated) note.dirty = false;
      putNote(id, note);
      emit({ kind: 'synced', at: new Date().toISOString() });
    } catch (e) {
      emit({ kind: 'error', message: (e as Error).message });
    }
  }

  function schedule(delay = 1500) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      inFlight = (inFlight ?? Promise.resolve()).then(push);
    }, delay);
  }

  return {
    get: () => note,

    update(patch: Partial<Note>) {
      note = { ...note, ...patch, updated: new Date().toISOString(), dirty: true };
      markStudyDay();
      putNote(id, note);
      if (syncEnabled()) {
        emit({ kind: 'saving' });
        schedule();
      } else emit({ kind: 'local' });
    },

    /** Pulls the GitHub copy; the newer of the two versions wins. Returns true if the page should re-render. */
    async pull(): Promise<boolean> {
      const s = getSettings();
      if (!syncEnabled(s)) return false;
      try {
        const remote = await fetchRemote(s, id);
        if (!remote) {
          if (note.updated) schedule(0); // first save of something written before sync was set up
          else emit({ kind: 'synced', at: '' });
          return false;
        }
        const remoteTime = remote.note.updated ?? '';
        if (!note.dirty && remoteTime >= (note.updated || '')) {
          note = { ...note, ...remote.note, sha: remote.sha, dirty: false };
          putNote(id, note);
          emit({ kind: 'synced', at: note.updated });
          return true;
        }
        note.sha = remote.sha;
        putNote(id, note);
        if (note.dirty) schedule(0);
        else emit({ kind: 'synced', at: note.updated });
        return false;
      } catch (e) {
        emit({ kind: 'error', message: (e as Error).message });
        return false;
      }
    },

    flush() {
      if (timer !== undefined && note.dirty && syncEnabled()) {
        window.clearTimeout(timer);
        void push();
      }
    },
  };
}

/* ───────── sync everything (home and settings pages) ───────── */

export async function syncAll(
  questions: { id: number; q: string }[],
  onProgress?: (msg: string) => void,
): Promise<{ ok: boolean; message: string }> {
  const s = getSettings();
  if (!syncEnabled(s)) return { ok: false, message: 'GitHub saving is not set up yet.' };
  try {
    const res = await gh(s, `/contents/notes?ref=${encodeURIComponent(s.branch)}`);
    const listing: { name: string; sha: string }[] = res.status === 404 ? [] : res.ok ? await res.json() : [];
    if (!res.ok && res.status !== 404) return { ok: false, message: explain(res.status) };
    const remoteSha = new Map(listing.map((f) => [f.name, f.sha]));
    let pulled = 0;
    let pushed = 0;
    for (const { id, q } of questions) {
      const local = getNote(id);
      const name = `q${pad(id)}.md`;
      const sha = remoteSha.get(name);
      if (sha && sha !== local.sha && !local.dirty) {
        onProgress?.(`Getting question ${id}…`);
        const remote = await fetchRemote(s, id);
        if (remote) {
          putNote(id, { ...local, ...remote.note, sha: remote.sha, dirty: false });
          pulled++;
        }
      } else if (local.dirty || (!sha && local.updated)) {
        onProgress?.(`Saving question ${id}…`);
        const newSha = await pushRemote(s, id, q, local, sha);
        putNote(id, { ...local, sha: newSha, dirty: false });
        pushed++;
      }
    }
    const parts = [];
    if (pulled) parts.push(`${pulled} updated from GitHub`);
    if (pushed) parts.push(`${pushed} saved to GitHub`);
    return { ok: true, message: parts.length ? `Synced: ${parts.join(', ')}.` : 'Everything is already up to date.' };
  } catch (e) {
    return { ok: false, message: (e as Error).message };
  }
}

/* ───────── backup file ───────── */

export function exportAll(ids: number[]) {
  const data: Record<number, Note> = {};
  for (const id of ids) {
    const n = getNote(id);
    if (n.updated) data[id] = { ...n, sha: undefined, dirty: undefined };
  }
  return JSON.stringify({ app: 'civics-study', exported: new Date().toISOString(), notes: data }, null, 2);
}

export function importAll(json: string): number {
  const parsed = JSON.parse(json);
  if (parsed?.app !== 'civics-study' || typeof parsed.notes !== 'object') throw new Error('That file is not a Civics Study backup.');
  let count = 0;
  for (const [id, n] of Object.entries(parsed.notes as Record<string, Note>)) {
    const current = getNote(Number(id));
    if (!current.updated || (n.updated && n.updated > current.updated)) {
      putNote(Number(id), { ...emptyNote(), ...n, dirty: true });
      count++;
    }
  }
  return count;
}

export function formatTime(iso: string) {
  if (!iso) return '';
  const d = new Date(iso);
  const sameDay = d.toDateString() === new Date().toDateString();
  return sameDay
    ? d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
    : d.toLocaleDateString([], { month: 'short', day: 'numeric' });
}

/* ───────── study days, for the streak ───────── */

const DAYS_KEY = 'civics:days';

function localDay(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function markStudyDay() {
  const days = new Set(read<string[]>(DAYS_KEY) ?? []);
  days.add(localDay());
  write(DAYS_KEY, [...days].sort().slice(-400));
}

/** Days in a row with some studying, ending today (or yesterday, so the streak survives until tonight). */
export function streak(extraDays: string[] = []): number {
  const days = new Set([...(read<string[]>(DAYS_KEY) ?? []), ...extraDays]);
  const d = new Date();
  if (!days.has(localDay(d))) d.setDate(d.getDate() - 1);
  let n = 0;
  while (days.has(localDay(d))) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

export function dayOf(iso: string) {
  return iso ? localDay(new Date(iso)) : '';
}
