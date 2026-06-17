import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { BlurView } from 'expo-blur';

export default function SanctuaryBackground() {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {/* Base Deep Midnight background — richer amethyst-violet base */}
      <View style={[StyleSheet.absoluteFill, { backgroundColor: '#0D0828' }]} />

      {/* 
        12-Point Micro-Glow Atmospheric System
        Goal: Rich purple/violet atmosphere visible through cards. Not just black.
      */}

      {/* Sapphire Glows — pushed stronger for visible blue atmosphere */}
      <View style={[styles.glowNode, { backgroundColor: '#1A2B6B', width: 600, height: 600, top: '-10%', left: '-10%', opacity: 0.30 }]} />
      <View style={[styles.glowNode, { backgroundColor: '#1A2B6B', width: 800, height: 800, top: '40%', right: '-30%', opacity: 0.25 }]} />
      <View style={[styles.glowNode, { backgroundColor: '#152060', width: 500, height: 500, bottom: '10%', left: '20%', opacity: 0.22 }]} />

      {/* Amethyst Glows — dominant atmosphere color, richer and brighter */}
      <View style={[styles.glowNode, { backgroundColor: '#6B35A8', width: 700, height: 700, top: '5%', right: '-10%', opacity: 0.35 }]} />
      <View style={[styles.glowNode, { backgroundColor: '#5C2D91', width: 900, height: 900, bottom: '-15%', left: '-15%', opacity: 0.32 }]} />
      <View style={[styles.glowNode, { backgroundColor: '#7B3FBB', width: 550, height: 550, top: '45%', left: '30%', opacity: 0.28 }]} />

      {/* Ruby Glows — warm depth accents */}
      <View style={[styles.glowNode, { backgroundColor: '#6B1E3F', width: 800, height: 800, top: '20%', left: '-25%', opacity: 0.26 }]} />
      <View style={[styles.glowNode, { backgroundColor: '#7A2248', width: 600, height: 600, bottom: '-10%', right: '5%', opacity: 0.28 }]} />
      <View style={[styles.glowNode, { backgroundColor: '#5A1633', width: 550, height: 550, top: '-5%', left: '35%', opacity: 0.18 }]} />

      {/* Emerald Glows — subtle cool counterpoint */}
      <View style={[styles.glowNode, { backgroundColor: '#0E5A57', width: 750, height: 750, top: '35%', left: '15%', opacity: 0.12 }]} />
      <View style={[styles.glowNode, { backgroundColor: '#0E5A57', width: 500, height: 500, bottom: '25%', right: '-5%', opacity: 0.14 }]} />
      <View style={[styles.glowNode, { backgroundColor: '#0E5A57', width: 650, height: 650, top: '-20%', right: '20%', opacity: 0.10 }]} />

      {/* Multi-pass blur to dissolve shapes into pure fog */}
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
