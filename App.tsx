import React, { useState } from 'react';
import { View, Image, Pressable, StyleSheet, Platform, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SanctuaryBackground from './src/components/SanctuaryBackground';
import HomeScreen from './src/screens/HomeScreen';
import { COLORS } from './src/theme';

export default function App() {
  const [splitMode, setSplitMode] = useState(true);

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

        {splitMode ? (
          <View style={styles.splitWrapper}>
            <View style={styles.pane}>
              <Image
                source={require('./assets/reference_mockup.png')}
                style={styles.mockupImage}
                resizeMode="contain"
              />
            </View>

            <View style={[styles.pane, styles.activePane]}>
              <View style={styles.activeFrame}>
                <SanctuaryBackground />
                <HomeScreen />
              </View>
            </View>

            <Pressable style={styles.toggleButton} onPress={() => setSplitMode(false)}>
              <Text style={styles.toggleText}>Exit Split Mode</Text>
            </Pressable>
          </View>
        ) : (
          <>
            {/* Layered stained-glass ambient lighting background */}
            <SanctuaryBackground />

            {/* Main interactive screen (Home) */}
            <HomeScreen />
          </>
        )}
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
  splitWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#090514',
  },
  pane: {
    flex: 1,
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    borderRightWidth: 1,
    borderRightColor: '#222222',
  },
  activePane: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#090514',
  },
  activeFrame: {
    width: '100%',
    maxWidth: 430,
    height: '98.5%',
    maxHeight: 906,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(255, 233, 160, 0.16)',
    backgroundColor: COLORS.bgDeep,
  },
  mockupImage: {
    width: '100%',
    height: '100%',
  },
  toggleButton: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.35)',
  },
  toggleText: {
    color: '#D4AF37',
    fontSize: 13,
  },
});
