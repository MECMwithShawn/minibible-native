// Reference parsing/formatting. Accepts "John 3:16", "1 Cor 13:4", "Gen 1".
import { BOOKS } from './books';

const ABBR_TO_NAME: Record<string, string> = (() => {
  const m: Record<string, string> = {};
  for (const b of BOOKS) {
    m[norm(b.name)] = b.name;
    m[norm(b.abbr)] = b.name;
  }
  // a few common alternates
  m[norm('Psalm')] = 'Psalms';
  m[norm('Song of Songs')] = 'Song of Solomon';
  m[norm('Songs')] = 'Song of Solomon';
  return m;
})();

function norm(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]/g, '');
}

export type ParsedRef = { book: string; chapter: number; verse?: number };

/** Parse a free-text reference. Returns null if the book is unknown. */
export function parseRef(input: string): ParsedRef | null {
  const m = input.trim().match(/^(.*?)\s*(\d+)(?::(\d+))?\s*$/);
  if (!m) {
    const book = ABBR_TO_NAME[norm(input)];
    return book ? { book, chapter: 1 } : null;
  }
  const [, rawBook, ch, vs] = m;
  const book = ABBR_TO_NAME[norm(rawBook)];
  if (!book) return null;
  return { book, chapter: Number(ch), verse: vs ? Number(vs) : undefined };
}

export function formatRef(book: string, chapter: number, verse?: number): string {
  return verse ? `${book} ${chapter}:${verse}` : `${book} ${chapter}`;
}
