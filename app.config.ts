import { ExpoConfig } from "expo/config";

export default (): ExpoConfig => ({
  name: "JasonApp",
  slug: "jason-app",
  scheme: "jasonapp",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/images/icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  extra: {
    supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL || "https://lkoogdveljyxwweranaf.supabase.co",
    supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrb29nZHZlbGp5eHd3ZXJhbmFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5NjQ1MDEsImV4cCI6MjA3MjU0MDUwMX0.gER6-spRheuIzCe_ET-ntaklbRQHkmGb75I3UJkFYKs",
    supabaseFunctionsBase: process.env.EXPO_PUBLIC_SUPABASE_FUNCTIONS_BASE || "https://lkoogdveljyxwweranaf.functions.supabase.co",
    devToken: process.env.EXPO_PUBLIC_DEV_TOKEN,
    vapiBase: process.env.EXPO_PUBLIC_VAPI_BASE,
    vapiApiKey: process.env.EXPO_PUBLIC_VAPI_API_KEY,
    vapiAssistantId: process.env.EXPO_PUBLIC_VAPI_ASSISTANT_ID,
    demoUrl: process.env.EXPO_PUBLIC_DEMO_URL || "https://example.com/demo",
  },
  web: {
    favicon: "./assets/images/favicon.png"
  },
  plugins: [
    "expo-router",
    "expo-location",
  ],
  ios: {
    supportsTablet: true,
    infoPlist: {
      NSLocationWhenInUseUsageDescription:
        "We use your location to find nearby restaurants and improve reservation suggestions.",
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
    permissions: [
      "ACCESS_FINE_LOCATION",
      "ACCESS_COARSE_LOCATION",
    ],
  },
});
