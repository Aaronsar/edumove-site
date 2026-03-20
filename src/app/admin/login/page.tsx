"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // Lazy init — only create Supabase client on first user interaction, not during SSR
  const supabaseRef = useRef<ReturnType<typeof createClient> | null>(null);
  function getSupabase() {
    if (!supabaseRef.current) supabaseRef.current = createClient();
    return supabaseRef.current;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error: authError } = await getSupabase().auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError("Email ou mot de passe incorrect");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#f0f1f5] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#1B1D3A] flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-2xl font-bold text-[#1B1D3A]">Edumove</span>
          </div>
          <p className="text-sm text-[#64748b]">Back-office administration</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-8">
          <h1 className="text-xl font-bold text-[#1B1D3A] mb-6">Connexion</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#334155] mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-[#f8f9fb] text-sm text-[#1B1D3A] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20 focus:border-[#615CA5] transition-all"
                placeholder="aaron@diploma-sante.fr"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#334155] mb-1.5">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-[#f8f9fb] text-sm text-[#1B1D3A] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20 focus:border-[#615CA5] transition-all"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 bg-red-50 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1B1D3A] hover:bg-[#2a2d52] text-white font-semibold text-sm py-3 rounded-xl transition-colors disabled:opacity-50"
            >
              {loading ? "Connexion..." : "Se connecter"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-[#94a3b8] mt-6">
          Edumove CMS &mdash; Admin Panel
        </p>
      </div>
    </div>
  );
}
