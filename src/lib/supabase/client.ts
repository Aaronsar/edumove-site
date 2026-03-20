"use client";

import { createBrowserClient } from "@supabase/ssr";

// Public credentials — the anon key is designed to be client-facing.
// Hardcoded as fallback because NEXT_PUBLIC_* env vars are inlined at BUILD time
// and may be missing if the first Vercel build ran before they were configured.
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://jhopwqpbaiyjfoggvcaf.supabase.co";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impob3B3cXBiYWl5amZvZ2d2Y2FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNTI2OTEsImV4cCI6MjA4ODYyODY5MX0.rz3TJZryPxEf3P5kQgpzQkwN9aF8_F4eo4F03CEYVPs";

let cachedClient: ReturnType<typeof createBrowserClient> | null = null;

export function createClient() {
  if (cachedClient) return cachedClient;
  cachedClient = createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return cachedClient;
}
