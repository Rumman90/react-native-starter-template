# React Native Starter Template

A simple, clean, beginner-friendly React Native starter template.

It is intentionally light: one screen, one navigator, a shared screen wrapper, and a small theme file. The idea is to give you a clean starting point without locking the app into a larger architecture too early.

## What's Included

- Expo 51 and React Native 0.74.5
- TypeScript with strict mode enabled
- React Navigation with a native stack navigator
- A root Expo entrypoint in `index.ts`
- A reusable `Screen` wrapper for safe-area layout
- Basic theme tokens for colors, spacing, and type sizes
- A `typecheck` script wired into `npm test`

## Folder Structure

```
src/
 ├─ components/
 ├─ screens/
 ├─ navigation/
 ├─ theme/
 └─ App.tsx
```

## Requirements

- Node.js 18.17 or newer
- npm

## Getting Started

```bash
npm install
npm start
```

Then open the app in Expo Go, an iOS simulator, or an Android emulator.

You can also launch a platform directly:

```bash
npm run ios
npm run android
```

## Validation

```bash
npm test
```

The test command currently runs TypeScript validation. Add unit, component, or end-to-end tests as the template grows.

## License

This project is licensed under the [MIT License](LICENSE).
