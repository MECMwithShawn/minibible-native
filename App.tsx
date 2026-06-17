import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SanctuaryBackground from './src/components/SanctuaryBackground';
import HomeScreen from './src/screens/HomeScreen';
import { COLORS } from './src/theme';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        
        {/* Layered stained-glass ambient lighting background */}
        <SanctuaryBackground />
        
        {/* Main interactive screen (Home) */}
        <HomeScreen />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgDeep,
  },
});
