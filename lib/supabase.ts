console.log('[supabase] loaded from lib/supabase.ts');




// lib/supabase.ts
import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

const extra = Constants.expoConfig?.extra as any || {};

// Fallback values if config is missing
const supabaseUrl = extra.supabaseUrl || process.env.EXPO_PUBLIC_SUPABASE_URL || 'https://lkoogdveljyxwweranaf.supabase.co';
const supabaseAnonKey = extra.supabaseAnonKey || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrb29nZHZlbGp5eHd3ZXJhbmFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5NjQ1MDEsImV4cCI6MjA3MjU0MDUwMX0.gER6-spRheuIzCe_ET-ntaklbRQHkmGb75I3UJkFYKs';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase configuration missing. Please check your app.config.ts or environment variables.');
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: false, // tweak if you add auth later
      autoRefreshToken: false,
    },
  }
);
