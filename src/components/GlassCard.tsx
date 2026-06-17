import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

interface GlassCardProps {
  children: React.ReactNode;
  radius?: number;
  borderStyle?: 'normal' | 'gold';
  style?: ViewStyle;
  intensity?: number;
}

export default function GlassCard({
  children,
  radius = 20,
  borderStyle = 'normal',
  style,
  intensity = 80,
}: GlassCardProps) {
  // Softer rim lighting, less contrast
  const borderColor = borderStyle === 'gold' 
    ? 'rgba(230, 201, 120, 0.30)' 
    : 'rgba(255, 233, 160, 0.18)';

  return (
    <View style={[styles.outerContainer, { borderRadius: radius }, style]}>
      {/* Container with softer gold rim border */}
      <View style={[styles.borderContainer, { borderRadius: radius, borderColor }]}>
        
        {/* Backdrop layer */}
        <BlurView intensity={intensity} tint="dark" style={[StyleSheet.absoluteFill, { borderRadius: radius }]} />
        
        {/* Semi-transparent background fill (Dark surface) */}
        <View style={[StyleSheet.absoluteFill, styles.cardFill, { borderRadius: radius }]} />
        
        {/* 3% internal white haze */}
        <View style={[StyleSheet.absoluteFill, styles.innerHaze, { borderRadius: radius }]} />
        
        {/* 6% White Top/Corner Highlight (Subtle corner luminosity) */}
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.06)', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.4, y: 0.4 }}
          style={[StyleSheet.absoluteFill, { borderRadius: radius }]}
        />

        {/* 4% Gold Edge Bloom (Warm environmental light bleeding down the surface) */}
        <LinearGradient
          colors={['rgba(255, 233, 160, 0.04)', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.7 }}
          style={[StyleSheet.absoluteFill, { borderRadius: radius }]}
        />
        
        {/* Edge Refraction Highlight (Reduced visibility by 15%) */}
        <View style={[StyleSheet.absoluteFill, styles.edgeRefraction, { borderRadius: radius }]} />
        
        {/* Card content */}
        <View style={styles.content}>
          {children}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: 'transparent',
    shadowColor: '#000000',
    shadowOpacity: 0.52,
    shadowRadius: 35,
    shadowOffset: { width: 0, height: 25 },
    elevation: 25,
  },
  borderContainer: {
    overflow: 'hidden',
  },
  cardFill: {
    backgroundColor: 'rgba(15, 15, 25, 0.15)', // Maintain deep transparency
  },
  innerHaze: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)', // Exactly 3% white haze
  },
  edgeRefraction: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.04)', // Reduced rim opacity
    borderTopWidth: 1.5,
    borderTopColor: 'rgba(255, 255, 255, 0.18)', // Subdued top highlight
    borderBottomWidth: 1.5,
    borderBottomColor: 'transparent',
  },
  content: {
    position: 'relative',
    zIndex: 1,
  },
});
