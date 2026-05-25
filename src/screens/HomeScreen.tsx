import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Screen from '../components/Screen';
import { colors, spacing, typography } from '../theme';

export default function HomeScreen() {
  return (
    <Screen centered>
      <Text style={styles.title}>React Native Starter Template</Text>
      <Text style={styles.subtitle}>
        Expo, TypeScript, and React Navigation are configured and ready to extend.
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: typography.title,
    fontWeight: '700',
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 24,
    maxWidth: 320,
    textAlign: 'center',
  },
});
