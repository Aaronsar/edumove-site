import { createClient } from "@supabase/supabase-js";

/**
 * Client Supabase pour les routes /admin (server-side uniquement).
 *
 * Utilise la `SUPABASE_SERVICE_ROLE_KEY` si elle est configurée en environnement
 * (bypass RLS, accès total). Sinon, fallback sur la clé anon (RLS s'applique,
 * seuls les articles `status='published'` seront visibles via la policy publique).
 *
 * IMPORTANT : ne JAMAIS exposer ce client côté client / browser. L'auth admin
 * est déjà vérifiée dans le layout `(dashboard)/layout.tsx` qui redirige vers
 * `/admin/login` si pas de session.
 */
const SUPABASE_URL = "https://jhopwqpbaiyjfoggvcaf.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impob3B3cXBiYWl5amZvZ2d2Y2FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNTI2OTEsImV4cCI6MjA4ODYyODY5MX0.rz3TJZryPxEf3P5kQgpzQkwN9aF8_F4eo4F03CEYVPs";

export function createAdminClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const key = serviceRoleKey || SUPABASE_ANON_KEY;
  return createClient(SUPABASE_URL, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
