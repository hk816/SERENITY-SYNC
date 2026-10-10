# Serenity Sync 🌿

Serenity Sync is an Expo / React Native student-wellness prototype focused on mood check-ins, calming activities, breathing exercises, nature discovery, and support resources.

## Features in this prototype

- Mood selection and personalized navigation
- Guided breathing animation and links to nature sounds
- Google Maps search for nearby parks and green spaces
- Community activity form (prototype data is held in local screen state)
- Support, low-mood, and panic-support screens
- Basic profile and login UI (the login screen is a demo; it does not authenticate users)

## Tech stack

- React Native and Expo SDK 54
- TypeScript / JavaScript
- Expo Router for file-based navigation
- React Native Animated and Expo Linear Gradient

## Run locally

1. Install Node.js (LTS) and npm.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start Expo:
   ```bash
   npx expo start
   ```
4. Open the app with Expo Go or an emulator.

## Optional weather API key

The weather helper reads `EXPO_PUBLIC_OPENWEATHER_API_KEY` from your local environment. Copy `.env.example` to `.env` and add your own key if you choose to use this helper. Do not commit real API keys. Expo public environment variables are bundled into client apps, so treat such keys as public and restrict them with the provider where possible. The weather helper is not currently connected to a screen.

## Current limitations

This is a prototype. Login is not connected to an authentication service, profile edits and community activities are not persisted, and there is no backend/database configured in this source. Panic/support screens provide UI guidance and are not a substitute for emergency services or professional care.
