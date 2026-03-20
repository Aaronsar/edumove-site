"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { parseWordPressContent } from "@/lib/import/parseWordPressContent";
import { Library, Search, Eye, Sparkles, Loader2, ChevronLeft, ChevronRight } from "lucide-react";

interface GEDSPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  categories: number[];
}

const categoryNames: Record<number, string> = {};

const GEDS_API = "https://www.geds.fr/wp-json/wp/v2/posts";

export default function ImportPage() {
  const router = useRouter();
  const supabaseRef = useRef<ReturnType<typeof createClient> | null>(null);
  function getSupabase() {
    if (!supabaseRef.current) supabaseRef.current = createClient();
    return supabaseRef.current;
  }
  const supabase = getSupabase();
  const [posts, setPosts] = useState<GEDSPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedPost, setSelectedPost] = useState<GEDSPost | null>(null);
  const [generating, setGenerating] = useState(false);

  async function loadPosts(pageNum: number) {
    setLoading(true);
    setError("");
    try {
      const searchParam = search ? `&search=${encodeURIComponent(search)}` : "";
      const res = await fetch(
        `${GEDS_API}?per_page=20&page=${pageNum}&_embed${searchParam}`
      );
      if (!res.ok) throw new Error(`Erreur ${res.status}`);
      const total = res.headers.get("X-WP-TotalPages");
      setTotalPages(total ? parseInt(total) : 1);
      const data: GEDSPost[] = await res.json();
      setPosts(data);

      // Load categories
      const catRes = await fetch("https://www.geds.fr/wp-json/wp/v2/categories?per_page=100");
      if (catRes.ok) {
        const cats = await catRes.json();
        cats.forEach((c: { id: number; name: string }) => {
          categoryNames[c.id] = c.name;
        });
      }
    } catch (err) {
      setError("Impossible de charger les articles GEDS. V\u00e9rifiez la connexion.");
    }
    setLoading(false);
  }

  useEffect(() => {
    loadPosts(1);
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setPage(1);
    loadPosts(1);
  }

  function handlePageChange(newPage: number) {
    setPage(newPage);
    loadPosts(newPage);
  }

  function stripHtml(html: string) {
    return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").trim();
  }

  async function handleGenerate(post: GEDSPost) {
    setGenerating(true);

    // Parse the WordPress content into our section format
    const sections = parseWordPressContent(post.content.rendered);

    // Create a draft article inspired by the GEDS post
    const title = stripHtml(post.title.rendered);
    const slug = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const { data, error: insertError } = await supabase
      .from("edumove_articles")
      .insert({
        slug,
        title,
        meta_title: title + " | Edumove",
        meta_description: stripHtml(post.excerpt.rendered).slice(0, 160),
        excerpt: stripHtml(post.excerpt.rendered).slice(0, 250),
        tag: "Guide",
        tag_color: "bg-[#615ca5]",
        sections,
        read_time: "5 min",
        is_guide: false,
        status: "draft",
        source: "geds_import",
        source_url: post.link,
        related_slugs: [],
        related_formations: [],
        related_universities: [],
      })
      .select("id")
      .single();

    setGenerating(false);

    if (insertError) {
      alert(`Erreur : ${insertError.message}`);
      return;
    }

    if (data) {
      router.push(`/admin/articles/${data.id}`);
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1B1D3A] flex items-center gap-2">
          <Library className="w-6 h-6 text-[#615CA5]" />
          Biblioth\u00e8que GEDS
        </h1>
        <p className="text-sm text-[#64748b] mt-1">
          Parcourez les 193 articles de GEDS pour vous inspirer et cr\u00e9er des articles Edumove
        </p>
      </div>

      {/* Search */}
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher dans les articles GEDS..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20 focus:border-[#615CA5]"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2.5 bg-[#1B1D3A] text-white text-sm font-semibold rounded-xl hover:bg-[#2a2d52] transition-colors"
          >
            Rechercher
          </button>
        </div>
      </form>

      {error && (
        <div className="bg-red-50 text-red-600 text-sm rounded-xl px-4 py-3 mb-4">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-6 h-6 text-[#615CA5] animate-spin" />
          <span className="ml-2 text-sm text-[#64748b]">Chargement...</span>
        </div>
      ) : (
        <>
          {/* Post detail modal */}
          {selectedPost && (
            <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={() => setSelectedPost(null)}>
              <div
                className="bg-white rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-lg font-bold text-[#1B1D3A]">
                    {stripHtml(selectedPost.title.rendered)}
                  </h2>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="text-[#94a3b8] hover:text-[#334155] text-sm"
                  >
                    Fermer &times;
                  </button>
                </div>
                <div
                  className="prose prose-sm max-w-none text-[#334155] mb-6"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content.rendered }}
                />
                <div className="flex gap-2 sticky bottom-0 bg-white pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleGenerate(selectedPost)}
                    disabled={generating}
                    className="flex items-center gap-2 bg-[#EC680A] hover:bg-[#D45E09] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors disabled:opacity-50"
                  >
                    {generating ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Sparkles className="w-4 h-4" />
                    )}
                    {generating ? "G\u00e9n\u00e9ration..." : "Cr\u00e9er un article sur ce sujet"}
                  </button>
                  <a
                    href={selectedPost.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white border border-gray-200 text-sm font-medium text-[#334155] px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Voir sur GEDS
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Posts grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl border border-gray-200/80 p-5 hover:border-[#615CA5]/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-semibold text-sm text-[#1B1D3A] line-clamp-2">
                    {stripHtml(post.title.rendered)}
                  </h3>
                  <span className="text-[10px] text-[#94a3b8] shrink-0">
                    {new Date(post.date).toLocaleDateString("fr-FR")}
                  </span>
                </div>
                <p className="text-xs text-[#64748b] line-clamp-3 mb-4">
                  {stripHtml(post.excerpt.rendered)}
                </p>
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  {post.categories.map((catId) => (
                    <span
                      key={catId}
                      className="text-[10px] font-medium bg-[#615CA5]/10 text-[#615CA5] px-2 py-0.5 rounded-full"
                    >
                      {categoryNames[catId] ?? `Cat ${catId}`}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="flex items-center gap-1 text-xs text-[#615CA5] hover:text-[#4e4a8a] font-medium"
                  >
                    <Eye className="w-3 h-3" /> Lire
                  </button>
                  <button
                    onClick={() => handleGenerate(post)}
                    disabled={generating}
                    className="flex items-center gap-1 text-xs text-[#EC680A] hover:text-[#D45E09] font-medium"
                  >
                    <Sparkles className="w-3 h-3" /> Cr\u00e9er un article
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page <= 1}
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-30 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-sm text-[#64748b]">
                Page {page} / {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page >= totalPages}
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-30 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
