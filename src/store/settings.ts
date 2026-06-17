// Persisted user settings (zustand + AsyncStorage).
// Drives the active theme and Reader typography. No cloud sync in V1.

import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type ThemeMode = 'auto' | 'parchment' | 'sepia' | 'night';

// Reader font scale steps map to multipliers applied to the `verse` type role.
export const FONT_STEPS = [0.85, 0.95, 1.0, 1.12, 1.26, 1.42, 1.6] as const;
export const LINE_STEPS = [0.92, 1.0, 1.12, 1.26] as const; // line-height multipliers

export type SettingsState = {
  themeMode: ThemeMode;
  fontStep: number;        // index into FONT_STEPS
  lineStep: number;        // index into LINE_STEPS
  serifReading: boolean;   // serif vs sans for verse body
  redLetter: boolean;      // show words of Christ in red
  justify: boolean;        // justified vs ragged-right paragraphs
  showProgress: boolean;   // reading progress bar in the Reader
  hydrated: boolean;

  setThemeMode: (m: ThemeMode) => void;
  setFontStep: (i: number) => void;
  setLineStep: (i: number) => void;
  toggleSerif: () => void;
  toggleRedLetter: () => void;
  toggleJustify: () => void;
  toggleProgress: () => void;
};

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      themeMode: 'auto',
      fontStep: 2,
      lineStep: 1,
      serifReading: true,
      redLetter: true,
      justify: false,
      showProgress: true,
      hydrated: false,

      setThemeMode: (themeMode) => set({ themeMode }),
      setFontStep: (i) => set({ fontStep: clamp(i, 0, FONT_STEPS.length - 1) }),
      setLineStep: (i) => set({ lineStep: clamp(i, 0, LINE_STEPS.length - 1) }),
      toggleSerif: () => set((s) => ({ serifReading: !s.serifReading })),
      toggleRedLetter: () => set((s) => ({ redLetter: !s.redLetter })),
      toggleJustify: () => set((s) => ({ justify: !s.justify })),
      toggleProgress: () => set((s) => ({ showProgress: !s.showProgress })),
    }),
    {
      name: 'mb:settings',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ hydrated, setThemeMode, setFontStep, setLineStep, toggleSerif, toggleRedLetter, toggleJustify, toggleProgress, ...rest }) => rest,
      // Flip hydrated once restored, so the UI can avoid a theme flash.
      onRehydrateStorage: () => () => useSettings.setState({ hydrated: true }),
    },
  ),
);

function clamp(n: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, n));
}
