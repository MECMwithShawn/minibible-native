import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';

export default function SanctuaryBackground() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <View style={[StyleSheet.absoluteFill, { backgroundColor: '#03020A' }]} />
      <Svg width={width} height={height} style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient id="tealHaze" cx="18%" cy="16%" r="72%" fx="18%" fy="16%">
            <Stop offset="0%" stopColor="#0C3A68" stopOpacity="0.56" />
            <Stop offset="100%" stopColor="#03020A" stopOpacity="0" />
          </RadialGradient>

          <RadialGradient id="wineHaze" cx="82%" cy="62%" r="76%" fx="82%" fy="62%">
            <Stop offset="0%" stopColor="#74195E" stopOpacity="0.58" />
            <Stop offset="100%" stopColor="#03020A" stopOpacity="0" />
          </RadialGradient>

          <RadialGradient id="lowerWarmth" cx="34%" cy="88%" r="62%" fx="34%" fy="88%">
            <Stop offset="0%" stopColor="#2B1438" stopOpacity="0.46" />
            <Stop offset="100%" stopColor="#03020A" stopOpacity="0" />
          </RadialGradient>

          <RadialGradient id="deepIndigo" cx="78%" cy="7%" r="60%" fx="78%" fy="7%">
            <Stop offset="0%" stopColor="#25136A" stopOpacity="0.78" />
            <Stop offset="100%" stopColor="#03020A" stopOpacity="0" />
          </RadialGradient>

          <RadialGradient id="centerSmoke" cx="45%" cy="42%" r="82%" fx="45%" fy="42%">
            <Stop offset="0%" stopColor="#0B0A1A" stopOpacity="0.62" />
            <Stop offset="100%" stopColor="#03020A" stopOpacity="0" />
          </RadialGradient>

          <RadialGradient id="cathedralViolet" cx="18%" cy="68%" r="72%" fx="18%" fy="68%">
            <Stop offset="0%" stopColor="#3A1B65" stopOpacity="0.50" />
            <Stop offset="100%" stopColor="#03020A" stopOpacity="0" />
          </RadialGradient>

          <RadialGradient id="headerBloom" cx="50%" cy="0%" r="58%" fx="50%" fy="0%">
            <Stop offset="0%" stopColor="#D8D6FF" stopOpacity="0.18" />
            <Stop offset="42%" stopColor="#352B72" stopOpacity="0.16" />
            <Stop offset="100%" stopColor="#03020A" stopOpacity="0" />
          </RadialGradient>
        </Defs>

        <Rect x="0" y="0" width={width} height={height} fill="#03020A" />
        <Rect x="0" y="0" width={width} height={height} fill="url(#tealHaze)" />
        <Rect x="0" y="0" width={width} height={height} fill="url(#wineHaze)" />
        <Rect x="0" y="0" width={width} height={height} fill="url(#lowerWarmth)" />
        <Rect x="0" y="0" width={width} height={height} fill="url(#deepIndigo)" />
        <Rect x="0" y="0" width={width} height={height} fill="url(#centerSmoke)" />
        <Rect x="0" y="0" width={width} height={height} fill="url(#cathedralViolet)" />
        <Rect x="0" y="0" width={width} height={height} fill="url(#headerBloom)" />
      </Svg>
    </View>
  );
}
