# Mini Bible UI Handoff

Date: 2026-06-17  
Session state: "stop and handoff" requested

## Objective
Keep iterating toward pixel-fidelity match with the reference design at:
`http://localhost:8082/`

## Active Constraint (Do Not Touch)
- HomeScreen layout
- Daily Scripture spacing
- Header slab
- Continue Reading layout
- Category cards
- Bottom nav
- Background visuals
- Typography scale/weight treatment

## What Was Already Tuned
- `src/components/GlassCard.tsx` was iteratively softened to feel less like a solid dark rectangle and more like frosted glass:
  - Base fill reduced to: `rgba(10, 8, 24, 0.105)`
  - Default haze raised slightly: `rgba(255, 255, 255, 0.086)`
  - Outer border/shadow and edge refraction reduced (less heavy):
    - `outerContainer.shadowOpacity: 0.045`
    - `borderColor: rgba(255,255,255,0.024)`
    - `borderTopWidth: 1.1`
    - `borderTopColor: rgba(255,255,255,0.20)`
    - `borderLeftColor: rgba(255,244,210,0.048)`
  - Keep gradients/soft washes subtle and non-banded.
- `src/screens/HomeScreen.tsx` had minor Continue Reading glow/border refinements (even though not requested for this pass, these remain in working tree):
  - Softer border and lower shadow values in `readingSoftFrame`, `readingOuterAura`, and `readingRimGlow`.

## Current Workspace State
Modified files:
- `App.tsx`
- `src/components/GlassCard.tsx`
- `src/components/SanctuaryBackground.tsx`
- `src/screens/HomeScreen.tsx`
- `src/theme/index.ts`
- `screenshot.png`
- `UsersshawnDocumentsAWSAppsminibible-native.codex-latest-visual.png`
- `assets/reference_mockup.png`

## Validation Performed
- `git status --short` confirms the above files are currently changed.
- Expo web remains running on port `8082` in prior sessions.
- TypeScript check (`npx tsc --noEmit`) has passed in earlier rounds after these edits.

## What Still Needs Attention (Next Session)
- Continue GlassCard-only pass:
  - Preserve the same constraints above.
  - Aim for:
    - clearer frosted haze
    - brighter top edge refraction
    - softer internal milky glow
    - subtle gold rim light at low alpha
  - Avoid adding new visible oval/spotlight/circle layers.
  - Avoid aggressive blur increases.

## Recommended Next Steps
1. Inspect current `GlassCard.tsx` and run a very small visual tweak pass.
2. Reload `http://localhost:8082/` with cache clear.
3. Keep iterating in micro steps and verify each tweak via local screenshot/visual comparison.

## Notes for Resume
- User explicitly requested “stop and create a handoff file” after current context exploration.
- Do not revert unrelated user/app edits unless explicitly requested.
