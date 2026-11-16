/*
  The light game layer: stars per question, a civic rank from total stars,
  and a sticker for each finished unit. Everything is worked out from the
  saved notes, so there is nothing extra to store or sync.
*/
import type { Note } from './store';

/** Up to three stars per question. */
export function starsFor(n: Note, pointCount: number) {
  const wrote = n.answer.trim().split(/\s+/).filter(Boolean).length >= 20;
  const checked = pointCount > 0 && n.checks.length >= Math.ceil(pointCount * 0.6);
  const nailed = n.rating === 'got';
  return { wrote, checked, nailed, count: Number(wrote) + Number(checked) + Number(nailed) };
}

export const STAR_LABELS = ['Wrote an answer (20+ words)', 'Ticked most of the self-check', 'Rated it "Nailed it"'];

/** Ranks climb the ladder of American civic life. */
export const RANKS = [
  { at: 0, title: 'Registered Voter', icon: '🗳️' },
  { at: 8, title: 'Poll Worker', icon: '📋' },
  { at: 20, title: 'Campaign Volunteer', icon: '📣' },
  { at: 36, title: 'City Council Member', icon: '🏛️' },
  { at: 55, title: 'State Legislator', icon: '📜' },
  { at: 78, title: 'Governor', icon: '⭐' },
  { at: 100, title: 'U.S. Senator', icon: '🦅' },
  { at: 122, title: 'Supreme Court Justice', icon: '⚖️' },
];

export function rankFor(stars: number) {
  let i = 0;
  while (i + 1 < RANKS.length && stars >= RANKS[i + 1].at) i++;
  const next = RANKS[i + 1];
  return { ...RANKS[i], level: i + 1, next, toNext: next ? next.at - stars : 0, from: RANKS[i].at };
}
