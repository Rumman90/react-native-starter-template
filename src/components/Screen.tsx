import type { PropsWithChildren } from 'react';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { colors, spacing } from '../theme';

type ScreenProps = PropsWithChildren<{
  centered?: boolean;
}>;

export default function Screen({ centered = false, children }: ScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, centered && styles.centered]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
