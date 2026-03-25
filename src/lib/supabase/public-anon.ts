import { createClient } from "@supabase/supabase-js";

/** Même URL / clé anon que le client serveur — sans cookies, pour routes comme sitemap. */
const SUPABASE_URL = "https://jhopwqpbaiyjfoggvcaf.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impob3B3cXBiYWl5amZvZ2d2Y2FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNTI2OTEsImV4cCI6MjA4ODYyODY5MX0.rz3TJZryPxEf3P5kQgpzQkwN9aF8_F4eo4F03CEYVPs";

/**
 * Client Supabase sans session (lecture publique RLS).
 * À utiliser là où `cookies()` n’est pas fiable (sitemap, cron, etc.).
 */
export function createPublicAnonClient() {
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
