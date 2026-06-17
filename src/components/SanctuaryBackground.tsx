import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { BlurView } from 'expo-blur';

export default function SanctuaryBackground() {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {/* Base Deep Midnight background */}
      <View style={[StyleSheet.absoluteFill, { backgroundColor: '#02040A' }]} />

      {/* 
        12-Point Micro-Glow Atmospheric System
        Goal: Pure fog + light. Glows disappear into each other. No visible shapes.
      */}

      {/* Sapphire Glows */}
      <View style={[styles.glowNode, { backgroundColor: '#0D1B4D', width: 600, height: 600, top: '-10%', left: '-10%', opacity: 0.14 }]} />
      <View style={[styles.glowNode, { backgroundColor: '#0D1B4D', width: 800, height: 800, top: '40%', right: '-30%', opacity: 0.10 }]} />
      <View style={[styles.glowNode, { backgroundColor: '#0D1B4D', width: 500, height: 500, bottom: '10%', left: '20%', opacity: 0.07 }]} />

      {/* Amethyst Glows */}
      <View style={[styles.glowNode, { backgroundColor: '#4B2A7B', width: 700, height: 700, top: '10%', right: '-10%', opacity: 0.12 }]} />
      <View style={[styles.glowNode, { backgroundColor: '#4B2A7B', width: 900, height: 900, bottom: '-20%', left: '-15%', opacity: 0.11 }]} />
      <View style={[styles.glowNode, { backgroundColor: '#4B2A7B', width: 450, height: 450, top: '50%', left: '40%', opacity: 0.08 }]} />

      {/* Ruby Glows */}
      <View style={[styles.glowNode, { backgroundColor: '#5A1633', width: 800, height: 800, top: '25%', left: '-25%', opacity: 0.11 }]} />
      <View style={[styles.glowNode, { backgroundColor: '#5A1633', width: 600, height: 600, bottom: '-10%', right: '10%', opacity: 0.13 }]} />
      <View style={[styles.glowNode, { backgroundColor: '#5A1633', width: 550, height: 550, top: '-5%', left: '35%', opacity: 0.06 }]} />

      {/* Emerald Glows */}
      <View style={[styles.glowNode, { backgroundColor: '#0E5A57', width: 750, height: 750, top: '35%', left: '15%', opacity: 0.07 }]} />
      <View style={[styles.glowNode, { backgroundColor: '#0E5A57', width: 500, height: 500, bottom: '25%', right: '-5%', opacity: 0.09 }]} />
      <View style={[styles.glowNode, { backgroundColor: '#0E5A57', width: 650, height: 650, top: '-20%', right: '20%', opacity: 0.08 }]} />

      {/* Extreme multi-pass master blur to crush any remaining geometric edges into raw ambient light */}
      <BlurView intensity={100} tint="dark" style={StyleSheet.absoluteFill} />
      <BlurView intensity={80} tint="dark" style={StyleSheet.absoluteFill} />
    </View>
  );
}

const styles = StyleSheet.create({
  glowNode: {
    position: 'absolute',
    borderRadius: 9999,
    ...Platform.select({
      web: {
        filter: 'blur(200px)', // Extreme blur for perfect fog
      },
      default: {},
    }),
  },
});
