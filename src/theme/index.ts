import { Platform } from 'react-native';

export const COLORS = {
  // Backgrounds
  bgDeep: '#04060F',
  bgDark: '#080C1A',
  
  // Stained-glass atmospheric glows
  sapphire: 'rgba(29, 79, 255, 0.18)',
  amethyst: 'rgba(120, 46, 255, 0.18)',
  ruby: 'rgba(150, 28, 60, 0.16)',
  emerald: 'rgba(20, 120, 90, 0.10)',
  
  // Card glass fills
  glassMedium: 'rgba(12, 16, 35, 0.55)',
  glassStrong: 'rgba(14, 18, 38, 0.72)',
  
  // Borders
  glassBorder: 'rgba(255, 255, 255, 0.08)',
  glassBorderGold: 'rgba(230, 201, 120, 0.35)',
  
  // Typography
  goldLight: '#FFE9A0',
  goldMedium: '#E6C36A',
  goldDark: '#C89B4A',
  goldDeep: '#8A6428',
  
  ivory: '#F4EEDF',
  mutedBeige: '#A99F92',
  mutedLavender: '#948F9B',
  
  // Standard colors
  black: '#000000',
  white: '#FFFFFF',
  transparent: 'transparent',
};

export const GRADIENTS = {
  gold: [COLORS.goldLight, COLORS.goldMedium, COLORS.goldDark, COLORS.goldMedium, COLORS.goldLight] as const,
  goldGlow: ['rgba(230, 201, 120, 0.15)', 'transparent'] as const,
  whiteGlow: ['rgba(255, 255, 255, 0.06)', 'transparent'] as const,
};

export const TYPOGRAPHY = {
  serif: Platform.select({ ios: 'Georgia', default: 'serif' }) as string,
  sans: Platform.select({ ios: 'System', default: 'sans-serif' }) as string,
  
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 28,
  },
  
  letterSpacing: {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
    wider: 1,
    widest: 3,
  }
};

export const SPACING = {
  xs: 6,
  sm: 12,
  md: 18,
  lg: 24,
  xl: 32,
};

export const SHADOWS = {
  cardFloat: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.65,
    shadowRadius: 36,
    shadowOffset: { width: 0, height: 22 },
    elevation: 20,
  },
  cardHover: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.5,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 14 },
    elevation: 12,
  },
  goldGlow: {
    shadowColor: COLORS.goldMedium,
    shadowOpacity: 0.7,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 0 },
  },
  goldBloom: {
    shadowColor: COLORS.goldLight,
    shadowOpacity: 0.45,
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 0 },
  },
  heroGlow: {
    shadowColor: '#FFE599',
    shadowOpacity: 0.88,
    shadowRadius: 128, // +16% wider diffusion for perimeter wraparound
    shadowOffset: { width: 0, height: 0 },
    elevation: 35,
  },
  categoryAmbientGlow: {
    shadowColor: '#961C3C', // Deep ruby/magenta edge atmosphere
    shadowOpacity: 0.25,
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 0 },
  },
  textBloom: {
    textShadowColor: 'rgba(255, 233, 160, 0.6)',
    textShadowRadius: 15,
    textShadowOffset: { width: 0, height: 0 },
  },
  iconGlow: {
    shadowColor: COLORS.goldMedium,
    shadowOpacity: 0.35,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 0 },
  }
};
