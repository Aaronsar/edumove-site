"use client";

import { createBrowserClient } from "@supabase/ssr";

// Public credentials — the anon key is designed to be client-facing (read-only, RLS-protected).
// Hardcoded directly because Vercel env vars may have incorrect values that override fallbacks.
const SUPABASE_URL = "https://jhopwqpbaiyjfoggvcaf.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impob3B3cXBiYWl5amZvZ2d2Y2FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNTI2OTEsImV4cCI6MjA4ODYyODY5MX0.rz3TJZryPxEf3P5kQgpzQkwN9aF8_F4eo4F03CEYVPs";

let cachedClient: ReturnType<typeof createBrowserClient> | null = null;

export function createClient() {
  if (cachedClient) return cachedClient;
  cachedClient = createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return cachedClient;
}
