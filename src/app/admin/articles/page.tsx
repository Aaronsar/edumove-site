import Link from "next/link";
import { Plus } from "lucide-react";
import ArticlesListClient from "@/components/admin/ArticlesList";

async function getArticles() {
  try {
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("edumove_articles")
      .select("id, title, slug, status, tag, tag_color, read_time, seo_score, source, updated_at, published_at")
      .order("updated_at", { ascending: false });

    if (error) {
      console.error("Error fetching articles:", error);
      return [];
    }
    return data ?? [];
  } catch {
    return [];
  }
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
