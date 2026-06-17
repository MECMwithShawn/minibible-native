// Recent search queries (persisted, capped).
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type SearchHistoryState = {
  recents: string[];
  add: (q: string) => void;
  clear: () => void;
};

export const useSearchHistory = create<SearchHistoryState>()(
  persist(
    (set) => ({
      recents: [],
      add: (q) =>
        set((s) => {
          const t = q.trim();
          if (!t) return s;
          return { recents: [t, ...s.recents.filter((r) => r.toLowerCase() !== t.toLowerCase())].slice(0, 10) };
        }),
      clear: () => set({ recents: [] }),
    }),
    { name: 'mb:searchHistory', storage: createJSONStorage(() => AsyncStorage) },
  ),
);
