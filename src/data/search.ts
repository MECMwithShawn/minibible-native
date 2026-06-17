// Full-text search over the bundled BSB. Builds a flat verse index lazily on
// first query (kept out of startup cost), then linear-scans with scoring.

import { BOOK_NAMES } from './books';
import { __BIBLE_RAW, Verse, verseId } from './bible';

type FlatVerse = { book: string; chapter: number; verse: number; text: string; lower: string };

let INDEX: FlatVerse[] | null = null;

function buildIndex(): FlatVerse[] {
  const out: FlatVerse[] = [];
  for (const book of BOOK_NAMES) {
    const chapters = __BIBLE_RAW[book];
    for (const ch of Object.keys(chapters)) {
      const verses = chapters[ch];
      for (const v of Object.keys(verses)) {
        const text = verses[v];
        out.push({ book, chapter: Number(ch), verse: Number(v), text, lower: text.toLowerCase() });
      }
    }
  }
  return out;
}

export function ensureIndex(): void {
  if (!INDEX) INDEX = buildIndex();
}

export type SearchResult = Verse & { score: number };

export type SearchOptions = {
  books?: string[];        // restrict to these book names
  limit?: number;
};

export function search(query: string, opts: SearchOptions = {}): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  ensureIndex();
  const idx = INDEX!;
  const terms = q.split(/\s+/).filter(Boolean);
  const bookFilter = opts.books && opts.books.length ? new Set(opts.books) : null;
  const limit = opts.limit ?? 200;

  const results: SearchResult[] = [];
  for (let i = 0; i < idx.length; i++) {
    const fv = idx[i];
    if (bookFilter && !bookFilter.has(fv.book)) continue;
    let ok = true;
    for (const term of terms) {
      if (!fv.lower.includes(term)) {
        ok = false;
        break;
      }
    }
    if (!ok) continue;

    // Score: exact phrase > word-boundary > substring; earlier hit ranks higher.
    let score = 1;
    const pos = fv.lower.indexOf(q);
    if (pos >= 0) {
      score = 100 - Math.min(pos, 60);
      if (new RegExp(`\\b${escapeRe(q)}\\b`).test(fv.lower)) score += 50;
    }
    results.push({
      book: fv.book,
      chapter: fv.chapter,
      verse: fv.verse,
      text: fv.text,
      red: false,
      id: verseId(fv.book, fv.chapter, fv.verse),
      score,
    });
    if (results.length > limit * 4) break; // cap scan work on common words
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit);
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
