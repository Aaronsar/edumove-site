import Link from "next/link";
import { Plus } from "lucide-react";
import ArticlesListClient from "@/components/admin/ArticlesList";

// Force SSR à chaque requête (jamais de cache statique) — l'admin a besoin de données fraîches
export const dynamic = "force-dynamic";

async function getArticles() {
  // Client admin (service role si dispo, fallback anon).
  // L'auth est déjà vérifiée par le layout (dashboard) via cookies — pas besoin de re-vérifier
  // RLS ici. Évite les soucis de session SSR / JWT expiré qui faisaient retourner [] silencieusement.
  const { createAdminClient } = await import("@/lib/supabase/admin");
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("edumove_articles")
    .select("id, title, slug, status, tag, tag_color, read_time, seo_score, source, updated_at, published_at, scheduled_at")
    .order("published_at", { ascending: false, nullsFirst: false });

  if (error) {
    console.error("[admin/articles] Supabase error:", error);
    return [];
  }
  return data ?? [];
}

export default async function AdminArticlesPage() {
  const articles = await getArticles();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1B1D3A]">Articles</h1>
          <p className="text-sm text-[#64748b] mt-1">
            {articles.length} article{articles.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Link
          href="/admin/articles/new"
          className="flex items-center gap-2 bg-[#EC680A] hover:bg-[#D45E09] text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
        >
          <Plus className="w-4 h-4" />
          Nouvel article
        </Link>
      </div>

      <ArticlesListClient articles={articles} />
    </div>
  );
}
