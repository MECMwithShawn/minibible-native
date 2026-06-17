import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated, Easing, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GRADIENTS } from '../theme';

interface ShimmerSweepProps {
  style?: ViewStyle;
  duration?: number;
}

export default function ShimmerSweep({ style, duration = 6000 }: ShimmerSweepProps) {
  const shimmerAnim = useRef(new Animated.Value(-1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 1.5,
          duration: duration,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.delay(1000),
      ])
    ).start();
  }, [shimmerAnim, duration]);

  const translateX = shimmerAnim.interpolate({
    inputRange: [-1, 1.5],
    outputRange: [-300, 300],
  });

  return (
    <Animated.View style={[StyleSheet.absoluteFill, { transform: [{ translateX }] }, style]}>
      <LinearGradient
        colors={['transparent', 'rgba(230, 201, 120, 0.12)', 'rgba(230, 201, 120, 0.22)', 'rgba(230, 201, 120, 0.12)', 'transparent']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
