// Daily verse selection — LOCAL, deterministic, offline-first. No AI.
//
// V1: pick from the bundled DAILY_VERSES by day-of-year so the verse is stable
// for the whole day and identical across devices, with zero network.
//
// Future (documented, not built): a server "verse pack" can be fetched and
// cached (30–90 days) in AsyncStorage; getDailyVerse() would prefer the cache
// and silently fall back to this bundle when offline/unavailable.

import { DAILY_VERSES, DailyVerse } from './dailyVerses';

export function dayOfYear(d: Date): number {
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime();
  return Math.floor(diff / 86_400_000);
}

/** Stable key like "2026-06-16" for cache lookups. */
export function dayKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate(),
  ).padStart(2, '0')}`;
}

export function getDailyVerse(date: Date = new Date()): DailyVerse {
  const i = dayOfYear(date) % DAILY_VERSES.length;
  return DAILY_VERSES[i];
}

export type { DailyVerse };
