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
        
        {/* Semi-transparent background fill */}
        <View style={[StyleSheet.absoluteFill, styles.cardFill, { borderRadius: radius }]} />
        
        {/* Continuous atmospheric diagonal wash (Seamless) */}
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.10)', 'rgba(15, 15, 25, 0.0)', 'rgba(0, 0, 0, 0.35)']}
          locations={[0, 0.5, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[StyleSheet.absoluteFill, { borderRadius: radius }]}
        />
        
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
    // Reduced shadow opacity for a softer drop
    shadowColor: '#000000',
    shadowOpacity: 0.52,
    shadowRadius: 35,
    shadowOffset: { width: 0, height: 25 },
    elevation: 25,
  },
  borderContainer: {
    borderWidth: 1,
    borderTopWidth: 1.2, // Softer top highlight rim
    borderBottomWidth: 1.2, // Softer bottom shadow rim
    overflow: 'hidden',
  },
  cardFill: {
    backgroundColor: 'rgba(15, 15, 25, 0.45)',
  },
  content: {
    position: 'relative',
    zIndex: 1,
  },
});
