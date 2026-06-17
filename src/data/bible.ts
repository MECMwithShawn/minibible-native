// Typed accessors over the bundled BSB text + red-letter map.
// Shape on disk: { [book]: { [chapter]: { [verse]: text } } }.

import { BOOK_INDEX, BOOK_NAMES } from './books';
import bsb from './bsb/bsb.json';
import redLetterRaw from './bsb/redLetters.json';

type RawBible = Record<string, Record<string, Record<string, string>>>;
const BIBLE = bsb as unknown as RawBible;

// Red-letter map: { meta, verses: { "Book C:V": {...} } } -> fast Set of ids.
const RED: Set<string> = new Set(
  Object.keys((redLetterRaw as { verses?: Record<string, unknown> }).verses ?? {}),
);

export type Verse = {
  book: string;
  chapter: number;
  verse: number;
  text: string;
  red: boolean;
  id: string; // "Book C:V"
};

export function verseId(book: string, chapter: number, verse: number): string {
  return `${book} ${chapter}:${verse}`;
}

export function chapterCount(book: string): number {
  const b = BIBLE[book];
  return b ? Object.keys(b).length : 0;
}

export function verseCount(book: string, chapter: number): number {
  const c = BIBLE[book]?.[String(chapter)];
  return c ? Object.keys(c).length : 0;
}

export function getChapter(book: string, chapter: number): Verse[] {
  const c = BIBLE[book]?.[String(chapter)];
  if (!c) return [];
  return Object.keys(c)
    .map(Number)
    .sort((a, b) => a - b)
    .map((n) => {
      const id = verseId(book, chapter, n);
      return { book, chapter, verse: n, text: c[String(n)], red: RED.has(id), id };
    });
}

export function getVerse(book: string, chapter: number, verse: number): Verse | null {
  const text = BIBLE[book]?.[String(chapter)]?.[String(verse)];
  if (text === undefined) return null;
  const id = verseId(book, chapter, verse);
  return { book, chapter, verse, text, red: RED.has(id), id };
}

export function hasBook(book: string): boolean {
  return book in BIBLE;
}

/** Next/previous chapter across book boundaries. */
export function stepChapter(
  book: string,
  chapter: number,
  dir: 1 | -1,
): { book: string; chapter: number } | null {
  const target = chapter + dir;
  if (target >= 1 && target <= chapterCount(book)) return { book, chapter: target };
  const bi = BOOK_INDEX[book];
  if (bi === undefined) return null;
  const nb = BOOK_NAMES[bi + dir];
  if (!nb) return null;
  return { book: nb, chapter: dir === 1 ? 1 : chapterCount(nb) };
}

export { BIBLE as __BIBLE_RAW };
