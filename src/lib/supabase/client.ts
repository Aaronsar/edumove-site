"use client";

import { createBrowserClient } from "@supabase/ssr";

let cachedClient: ReturnType<typeof createBrowserClient> | null = null;

export function createClient() {
  if (cachedClient) return cachedClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    // Return a safe placeholder that won't crash during SSR/build when env vars are missing.
    // All methods return a consistent error shape. Auth calls will fail gracefully.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler: ProxyHandler<any> = {
      get(_target, prop) {
        // Recursively return proxies for chained property access (e.g. supabase.auth.signIn)
        if (prop === "then") return undefined; // Prevent being treated as a thenable
        return new Proxy(() => ({ data: null, error: { message: "Supabase not configured" } }), handler);
      },
      apply() {
        return { data: null, error: { message: "Supabase not configured" } };
      },
    };
    return new Proxy({} as ReturnType<typeof createBrowserClient>, handler);
  }

  cachedClient = createBrowserClient(url, key);
  return cachedClient;
}
