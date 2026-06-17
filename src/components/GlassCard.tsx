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
  fillColor?: string;
  hazeColor?: string;
}

export default function GlassCard({
  children,
  radius = 20,
  borderStyle = 'normal',
  style,
  intensity = 80,
  fillColor = 'rgba(12, 10, 28, 0.35)',
  hazeColor = 'rgba(255, 255, 255, 0.04)',
}: GlassCardProps) {
  const borderColor = borderStyle === 'gold' 
    ? 'rgba(230, 201, 120, 0.30)' 
    : 'rgba(255, 233, 160, 0.14)';

  return (
    <View style={[styles.outerContainer, { borderRadius: radius }, style]}>
      {/* Container with subtle rim border */}
      <View style={[styles.borderContainer, { borderRadius: radius, borderColor }]}>
        
        {/* Backdrop blur layer — lets atmosphere bleed through */}
        <BlurView intensity={intensity} tint="dark" style={[StyleSheet.absoluteFill, { borderRadius: radius }]} />
        
        {/* Semi-transparent smoked fill — NOT opaque */}
        <View style={[StyleSheet.absoluteFill, { borderRadius: radius, backgroundColor: fillColor }]} />
        
        {/* Internal white haze — frosted look */}
        <View style={[StyleSheet.absoluteFill, { borderRadius: radius, backgroundColor: hazeColor }]} />
        
        {/* Top-left corner luminosity */}
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.08)', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.5, y: 0.5 }}
          style={[StyleSheet.absoluteFill, { borderRadius: radius }]}
        />

        {/* Gold edge bloom from ambient light */}
        <LinearGradient
          colors={['rgba(255, 233, 160, 0.05)', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.6 }}
          style={[StyleSheet.absoluteFill, { borderRadius: radius }]}
        />
        
        {/* Edge refraction highlight */}
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
    shadowOpacity: 0.5,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 20 },
    elevation: 20,
  },
  borderContainer: {
    overflow: 'hidden',
  },
  edgeRefraction: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.06)',
    borderTopWidth: 1.5,
    borderTopColor: 'rgba(255, 255, 255, 0.15)',
    borderBottomWidth: 1.5,
    borderBottomColor: 'transparent',
  },
  content: {
    position: 'relative',
    zIndex: 1,
  },
});
