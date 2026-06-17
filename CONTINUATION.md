# Context & Continuation

This file serves as a memory checkpoint for any AI or developer resuming work on the **MiniBible Sacred Light** project.

## Current State (UI Polish Phase)
We are currently operating on the `sacred-light-polish-pass` branch, attempting to bridge the final 8% gap between the coded layout and the high-fidelity Figma concept.

The screenshot-to-code prototype is now treated as a **visual reference board only**. It validates the palette, typography, hierarchy, card proportions, gold accents, ambient glow approach, and the Daily Scripture `outer card -> inner scripture panel -> verse` stack. Do not copy its single-component/Tailwind/local-state/inline-SVG implementation into this app architecture.

**What is working perfectly:**
* The core Cathedral layout, typography, and gold aesthetic.
* The structure of the frosted glass (`GlassCard.tsx`).
* The absolute clipping of `GlassCard` inner layers (Blur, Fills, Gradients) which correctly inherit border radii to prevent square bleeds.
* The elimination of distinct geometric light artifacts inside the cards (the `ShimmerSweep` component was removed because it caused a visible lighting split).

**The Lighting Architecture:**
1. **Background Atmosphere:** Handled entirely by `SanctuaryBackground.tsx`. It uses 12 specific micro-glow nodes (Sapphire, Amethyst, Ruby, Emerald) pushed through a dual-pass `BlurView` (`intensity={100}`, `intensity={80}`) to create a completely shapeless fog.
2. **Card Depth:** Handled by a single continuous diagonal `LinearGradient` in `GlassCard.tsx` (top-left white wash to bottom-right black wash), completely avoiding any "spotlight" ovals.
3. **Hero Lighting:** Controlled via `theme.ts` (`SHADOWS.heroGlow` and `SHADOWS.goldBloom`). The Continue Reading card is the primary light source on the screen.

## Sacred Light Design Principle
Do not chase stronger blur. The premium feel comes from:

* Layered surfaces.
* Atmospheric lighting behind the surface.
* Very subtle translucency.
* Gold bloom and edge warmth.
* Elegant serif typography and clear devotional hierarchy.

The effect is not pure glassmorphism. It is a dark devotional surface system: dark card + subtle transparency + ambient color behind the card + gold bloom + typography.

Prefer the current React Native architecture:

* Theme system.
* Reusable `GlassCard`.
* `SanctuaryBackground`.
* Zustand-backed app state.
* Bible data and reader flow.
* Prayer/devotional features.

Avoid transplanting generated prototype patterns:

* Single monolithic component.
* Local-only React state for app flows.
* Hardcoded scripture/category data.
* Inline SVG icon systems.
* Tailwind/web-only class styling.

The generated header uses web-style `backdrop-blur` treatment that does not translate cleanly to React Native / Expo. Keep the current floating frosted header direction: subtle smoked fill, high `BlurView` intensity where useful, and restrained translucency.

## Known Challenges & Next Steps
If you are picking up this session to complete the final polish pass, focus exclusively on the following user-identified nuances:

1. **Atmosphere Saturation:** The background fog is currently too heavily weighted toward Navy/Black. The Amethyst, Magenta, Sapphire, and Emerald micro-glows in `SanctuaryBackground` need a slight opacity boost so their colors subconsciously bleed through the glass.
2. **Scripture Card Luminous Haze:** The Scripture Card still feels slightly too dark inside. It needs an internal ambient illumination (without introducing geometric ovals or bands).
3. **Continue Reading Dominance:** The Continue Reading card needs a 15-20% boost in its hero treatment (bookmark glow, perimeter glow, progress bar luminosity) so the user's eye goes there *before* the Scripture Card.

## Rules of Engagement
* **DO NOT** introduce local absolute views with `shadowRadius` inside the cards to create light. It triggers React Native rendering artifacts (ovals/circles). Rely on `LinearGradient` or master background blur.
* Do all visual tweaks on the `sacred-light-polish-pass` branch. If a tweak regresses the design, revert it immediately and rely on this baseline.
