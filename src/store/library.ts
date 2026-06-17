// Persisted user study data: bookmarks, highlights, notes, reading progress.
// Local-only (AsyncStorage). No cloud sync in V1.

import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type HighlightKey = 'yellow' | 'pink' | 'blue' | 'green' | 'purple';

export type Bookmark = {
  id: string; // verseId "Book C:V"
  book: string;
  chapter: number;
  verse: number;
  text: string;
  createdAt: number;
};

export type Note = {
  id: string;
  ref: string | null;        // "Book C:V" or null for standalone
  book: string | null;
  chapter: number | null;
  verse: number | null;
  title: string;
  body: string;
  createdAt: number;
  updatedAt: number;
};

export type RecentRead = { book: string; chapter: number; at: number };

type LibraryState = {
  bookmarks: Record<string, Bookmark>;
  highlights: Record<string, HighlightKey>; // verseId -> color key
  notes: Note[];
  recents: RecentRead[];
  lastRead: { book: string; chapter: number } | null;
  hydrated: boolean;

  toggleBookmark: (b: Omit<Bookmark, 'createdAt'>) => void;
  isBookmarked: (id: string) => boolean;

  setHighlight: (verseId: string, color: HighlightKey | null) => void;

  addNote: (n: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => string;
  updateNote: (id: string, patch: Partial<Pick<Note, 'title' | 'body'>>) => void;
  deleteNote: (id: string) => void;

  recordRead: (book: string, chapter: number) => void;
};

export const genId = (): string =>
  `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;

export const useLibrary = create<LibraryState>()(
  persist(
    (set, get) => ({
      bookmarks: {},
      highlights: {},
      notes: [],
      recents: [],
      lastRead: null,
      hydrated: false,

      toggleBookmark: (b) =>
        set((s) => {
          const next = { ...s.bookmarks };
          if (next[b.id]) delete next[b.id];
          else next[b.id] = { ...b, createdAt: Date.now() };
          return { bookmarks: next };
        }),
      isBookmarked: (id) => !!get().bookmarks[id],

      setHighlight: (verseId, color) =>
        set((s) => {
          const next = { ...s.highlights };
          if (color === null) delete next[verseId];
          else next[verseId] = color;
          return { highlights: next };
        }),

      addNote: (n) => {
        const id = genId();
        const now = Date.now();
        set((s) => ({ notes: [{ ...n, id, createdAt: now, updatedAt: now }, ...s.notes] }));
        return id;
      },
      updateNote: (id, patch) =>
        set((s) => ({
          notes: s.notes.map((nt) =>
            nt.id === id ? { ...nt, ...patch, updatedAt: Date.now() } : nt,
          ),
        })),
      deleteNote: (id) => set((s) => ({ notes: s.notes.filter((nt) => nt.id !== id) })),

      recordRead: (book, chapter) =>
        set((s) => {
          const at = Date.now();
          const recents = [
            { book, chapter, at },
            ...s.recents.filter((r) => !(r.book === book && r.chapter === chapter)),
          ].slice(0, 12);
          return { recents, lastRead: { book, chapter } };
        }),
    }),
    {
      name: 'mb:library',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ bookmarks, highlights, notes, recents, lastRead }) => ({
        bookmarks,
        highlights,
        notes,
        recents,
        lastRead,
      }),
      onRehydrateStorage: () => () => useLibrary.setState({ hydrated: true }),
    },
  ),
);
