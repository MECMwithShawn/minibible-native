import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SanctuaryBackground from './src/components/SanctuaryBackground';
import HomeScreen from './src/screens/HomeScreen';
import { COLORS } from './src/theme';

export default function App() {
  React.useEffect(() => {
    if (Platform.OS !== 'web' || typeof document === 'undefined') {
      return;
    }

    const root = document.getElementById('root');
    const previous = {
      htmlHeight: document.documentElement.style.height,
      htmlOverflow: document.documentElement.style.overflow,
      bodyHeight: document.body.style.height,
      bodyOverflow: document.body.style.overflow,
      rootHeight: root?.style.height,
      rootOverflow: root?.style.overflow,
    };

    document.documentElement.style.height = '100%';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';

    if (root) {
      root.style.height = '100%';
      root.style.overflow = 'hidden';
    }

    return () => {
      document.documentElement.style.height = previous.htmlHeight;
      document.documentElement.style.overflow = previous.htmlOverflow;
      document.body.style.height = previous.bodyHeight;
      document.body.style.overflow = previous.bodyOverflow;

      if (root) {
        root.style.height = previous.rootHeight ?? '';
        root.style.overflow = previous.rootOverflow ?? '';
      }
    };
  }, []);

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
    height: '100%',
    overflow: 'hidden',
    backgroundColor: COLORS.bgDeep,
  },
});
