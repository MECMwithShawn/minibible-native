# MiniBible (Sacred Light UI)

A premium, highly atmospheric React Native application built with Expo. The goal of this project is to perfectly recreate a high-fidelity "Cathedral/Sanctuary" design concept characterized by intense atmospheric fog lighting, frosted glassmorphism, and warm gold typography.

## Current Focus
The application is currently in the **UI Polish Phase** (~92% fidelity match to the original concept). We have meticulously reconstructed the lighting environment to avoid mechanical artifacts and embrace subconscious, shapeless atmospheric glow.

## Tech Stack
* **Framework:** React Native / Expo
* **Language:** TypeScript
* **Core UI:** `expo-blur`, `expo-linear-gradient`
* **Icons:** `@expo/vector-icons` (MaterialCommunityIcons)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/MECMwithShawn/minibible-native.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server (Web is optimized for fast UI testing):
   ```bash
   npm run web
   ```
   *Note: For the highest fidelity blur and shadow rendering, iOS/Android simulators are recommended for final verification.*

## Project Structure
* `/src/components/SanctuaryBackground.tsx` - The master lighting engine driving the background fog.
* `/src/components/GlassCard.tsx` - The core frosted glass wrapper used for all layout elements.
* `/src/theme/index.ts` - Master design tokens (Colors, Typography, advanced Shadow Blooms).
* `/src/screens/HomeScreen.tsx` - The primary Cathedral UI layout.

---
*For AI Agents and future sessions, please refer to [CONTINUATION.md](./CONTINUATION.md) to resume context.*
