// Canonical book metadata. `name` matches the BSB JSON keys exactly.
// Chapter counts are derived from the data at load (see bible.ts) — this list
// owns order, abbreviation, testament, and grouping for the book picker.

export type Testament = 'OT' | 'NT';
export type BookGroup =
  | 'Law'
  | 'History'
  | 'Poetry'
  | 'Prophets'
  | 'Gospels'
  | 'Acts'
  | 'Letters'
  | 'Revelation';

export type BookMeta = {
  name: string;
  abbr: string;
  testament: Testament;
  group: BookGroup;
};

export const BOOKS: BookMeta[] = [
  { name: 'Genesis', abbr: 'Gen', testament: 'OT', group: 'Law' },
  { name: 'Exodus', abbr: 'Exo', testament: 'OT', group: 'Law' },
  { name: 'Leviticus', abbr: 'Lev', testament: 'OT', group: 'Law' },
  { name: 'Numbers', abbr: 'Num', testament: 'OT', group: 'Law' },
  { name: 'Deuteronomy', abbr: 'Deu', testament: 'OT', group: 'Law' },
  { name: 'Joshua', abbr: 'Jos', testament: 'OT', group: 'History' },
  { name: 'Judges', abbr: 'Jdg', testament: 'OT', group: 'History' },
  { name: 'Ruth', abbr: 'Rth', testament: 'OT', group: 'History' },
  { name: '1 Samuel', abbr: '1Sa', testament: 'OT', group: 'History' },
  { name: '2 Samuel', abbr: '2Sa', testament: 'OT', group: 'History' },
  { name: '1 Kings', abbr: '1Ki', testament: 'OT', group: 'History' },
  { name: '2 Kings', abbr: '2Ki', testament: 'OT', group: 'History' },
  { name: '1 Chronicles', abbr: '1Ch', testament: 'OT', group: 'History' },
  { name: '2 Chronicles', abbr: '2Ch', testament: 'OT', group: 'History' },
  { name: 'Ezra', abbr: 'Ezr', testament: 'OT', group: 'History' },
  { name: 'Nehemiah', abbr: 'Neh', testament: 'OT', group: 'History' },
  { name: 'Esther', abbr: 'Est', testament: 'OT', group: 'History' },
  { name: 'Job', abbr: 'Job', testament: 'OT', group: 'Poetry' },
  { name: 'Psalms', abbr: 'Psa', testament: 'OT', group: 'Poetry' },
  { name: 'Proverbs', abbr: 'Pro', testament: 'OT', group: 'Poetry' },
  { name: 'Ecclesiastes', abbr: 'Ecc', testament: 'OT', group: 'Poetry' },
  { name: 'Song of Solomon', abbr: 'Sng', testament: 'OT', group: 'Poetry' },
  { name: 'Isaiah', abbr: 'Isa', testament: 'OT', group: 'Prophets' },
  { name: 'Jeremiah', abbr: 'Jer', testament: 'OT', group: 'Prophets' },
  { name: 'Lamentations', abbr: 'Lam', testament: 'OT', group: 'Prophets' },
  { name: 'Ezekiel', abbr: 'Eze', testament: 'OT', group: 'Prophets' },
  { name: 'Daniel', abbr: 'Dan', testament: 'OT', group: 'Prophets' },
  { name: 'Hosea', abbr: 'Hos', testament: 'OT', group: 'Prophets' },
  { name: 'Joel', abbr: 'Joe', testament: 'OT', group: 'Prophets' },
  { name: 'Amos', abbr: 'Amo', testament: 'OT', group: 'Prophets' },
  { name: 'Obadiah', abbr: 'Oba', testament: 'OT', group: 'Prophets' },
  { name: 'Jonah', abbr: 'Jon', testament: 'OT', group: 'Prophets' },
  { name: 'Micah', abbr: 'Mic', testament: 'OT', group: 'Prophets' },
  { name: 'Nahum', abbr: 'Nah', testament: 'OT', group: 'Prophets' },
  { name: 'Habakkuk', abbr: 'Hab', testament: 'OT', group: 'Prophets' },
  { name: 'Zephaniah', abbr: 'Zep', testament: 'OT', group: 'Prophets' },
  { name: 'Haggai', abbr: 'Hag', testament: 'OT', group: 'Prophets' },
  { name: 'Zechariah', abbr: 'Zec', testament: 'OT', group: 'Prophets' },
  { name: 'Malachi', abbr: 'Mal', testament: 'OT', group: 'Prophets' },
  { name: 'Matthew', abbr: 'Mat', testament: 'NT', group: 'Gospels' },
  { name: 'Mark', abbr: 'Mrk', testament: 'NT', group: 'Gospels' },
  { name: 'Luke', abbr: 'Luk', testament: 'NT', group: 'Gospels' },
  { name: 'John', abbr: 'Jhn', testament: 'NT', group: 'Gospels' },
  { name: 'Acts', abbr: 'Act', testament: 'NT', group: 'Acts' },
  { name: 'Romans', abbr: 'Rom', testament: 'NT', group: 'Letters' },
  { name: '1 Corinthians', abbr: '1Co', testament: 'NT', group: 'Letters' },
  { name: '2 Corinthians', abbr: '2Co', testament: 'NT', group: 'Letters' },
  { name: 'Galatians', abbr: 'Gal', testament: 'NT', group: 'Letters' },
  { name: 'Ephesians', abbr: 'Eph', testament: 'NT', group: 'Letters' },
  { name: 'Philippians', abbr: 'Php', testament: 'NT', group: 'Letters' },
  { name: 'Colossians', abbr: 'Col', testament: 'NT', group: 'Letters' },
  { name: '1 Thessalonians', abbr: '1Th', testament: 'NT', group: 'Letters' },
  { name: '2 Thessalonians', abbr: '2Th', testament: 'NT', group: 'Letters' },
  { name: '1 Timothy', abbr: '1Ti', testament: 'NT', group: 'Letters' },
  { name: '2 Timothy', abbr: '2Ti', testament: 'NT', group: 'Letters' },
  { name: 'Titus', abbr: 'Tit', testament: 'NT', group: 'Letters' },
  { name: 'Philemon', abbr: 'Phm', testament: 'NT', group: 'Letters' },
  { name: 'Hebrews', abbr: 'Heb', testament: 'NT', group: 'Letters' },
  { name: 'James', abbr: 'Jas', testament: 'NT', group: 'Letters' },
  { name: '1 Peter', abbr: '1Pe', testament: 'NT', group: 'Letters' },
  { name: '2 Peter', abbr: '2Pe', testament: 'NT', group: 'Letters' },
  { name: '1 John', abbr: '1Jn', testament: 'NT', group: 'Letters' },
  { name: '2 John', abbr: '2Jn', testament: 'NT', group: 'Letters' },
  { name: '3 John', abbr: '3Jn', testament: 'NT', group: 'Letters' },
  { name: 'Jude', abbr: 'Jud', testament: 'NT', group: 'Letters' },
  { name: 'Revelation', abbr: 'Rev', testament: 'NT', group: 'Revelation' },
];

export const BOOK_NAMES = BOOKS.map((b) => b.name);
export const BOOK_INDEX: Record<string, number> = Object.fromEntries(
  BOOKS.map((b, i) => [b.name, i]),
);

export function bookMeta(name: string): BookMeta | undefined {
  const i = BOOK_INDEX[name];
  return i === undefined ? undefined : BOOKS[i];
}
