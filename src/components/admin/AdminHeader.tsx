"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { LogOut } from "lucide-react";

export default function AdminHeader({ email }: { email?: string }) {
  const router = useRouter();
  const supabaseRef = useRef<ReturnType<typeof createClient> | null>(null);
  function getSupabase() {
    if (!supabaseRef.current) supabaseRef.current = createClient();
    return supabaseRef.current;
  }

  async function handleLogout() {
    await getSupabase().auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="h-14 bg-white border-b border-gray-200 px-6 flex items-center justify-between shrink-0">
      <div />
      <div className="flex items-center gap-4">
        {email && (
          <span className="text-xs text-[#64748b]">{email}</span>
        )}
        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 text-xs text-[#94a3b8] hover:text-red-500 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          D\u00e9connexion
        </button>
      </div>
    </header>
  );
}
