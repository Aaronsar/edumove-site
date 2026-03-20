"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter } from "lucide-react";

interface ArticleRow {
  id: number;
  title: string;
  slug: string;
  status: string;
  tag: string;
  tag_color: string;
  read_time: string;
  seo_score: number;
  source: string;
  updated_at: string;
  published_at: string | null;
}

const statusLabels: Record<string, { label: string; color: string }> = {
  published: { label: "Publi\u00e9", color: "bg-green-100 text-green-700" },
  draft: { label: "Brouillon", color: "bg-orange-100 text-orange-700" },
  archived: { label: "Archiv\u00e9", color: "bg-gray-100 text-gray-500" },
};

const tagOptions = ["Tous", "Guide", "Financement", "Actualit\u00e9s", "T\u00e9moignages", "Fili\u00e8res"];
const statusOptions = ["Tous", "published", "draft", "archived"];

function SEOBadge({ score }: { score: number }) {
  const color =
    score >= 71 ? "bg-green-100 text-green-700" : score >= 41 ? "bg-orange-100 text-orange-700" : "bg-red-100 text-red-700";
  return (
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${color}`}>
      SEO {score}
    </span>
  );
}

export default function ArticlesListClient({ articles }: { articles: ArticleRow[] }) {
  const [search, setSearch] = useState("");
  const [tagFilter, setTagFilter] = useState("Tous");
  const [statusFilter, setStatusFilter] = useState("Tous");

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      if (search && !a.title.toLowerCase().includes(search.toLowerCase())) return false;
      if (tagFilter !== "Tous" && a.tag !== tagFilter) return false;
      if (statusFilter !== "Tous" && a.status !== statusFilter) return false;
      return true;
    });
  }, [articles, search, tagFilter, statusFilter]);

  return (
    <div>
      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200/80 p-4 mb-4 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un article..."
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 bg-[#f8f9fb] text-sm focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20 focus:border-[#615CA5] transition-all"
          />
        </div>
        <select
          value={tagFilter}
          onChange={(e) => setTagFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-200 bg-[#f8f9fb] text-sm text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
        >
          {tagOptions.map((t) => (
            <option key={t} value={t}>
              {t === "Tous" ? "Tous les tags" : t}
            </option>
          ))}
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-200 bg-[#f8f9fb] text-sm text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
        >
          {statusOptions.map((s) => (
            <option key={s} value={s}>
              {s === "Tous" ? "Tous les statuts" : statusLabels[s]?.label ?? s}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200/80 overflow-hidden">
        {filtered.length === 0 ? (
          <div className="px-5 py-12 text-center">
            <p className="text-sm text-[#94a3b8]">Aucun article trouv\u00e9</p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 text-left">
                <th className="px-5 py-3 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">
                  Titre
                </th>
                <th className="px-3 py-3 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider hidden md:table-cell">
                  Tag
                </th>
                <th className="px-3 py-3 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider hidden lg:table-cell">
                  SEO
                </th>
                <th className="px-3 py-3 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-3 py-3 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider hidden lg:table-cell">
                  Modifi\u00e9
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((article) => {
                const status = statusLabels[article.status] ?? {
                  label: article.status,
                  color: "bg-gray-100 text-gray-500",
                };
                return (
                  <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3">
                      <Link
                        href={`/admin/articles/${article.id}`}
                        className="text-sm font-medium text-[#1B1D3A] hover:text-[#EC680A] transition-colors line-clamp-1"
                      >
                        {article.title}
                      </Link>
                      <p className="text-xs text-[#94a3b8] mt-0.5 truncate">
                        /{article.slug}
                      </p>
                    </td>
                    <td className="px-3 py-3 hidden md:table-cell">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider text-white px-2 py-0.5 rounded-full ${article.tag_color}`}
                      >
                        {article.tag}
                      </span>
                    </td>
                    <td className="px-3 py-3 hidden lg:table-cell">
                      <SEOBadge score={article.seo_score} />
                    </td>
                    <td className="px-3 py-3">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${status.color}`}
                      >
                        {status.label}
                      </span>
                    </td>
                    <td className="px-3 py-3 hidden lg:table-cell">
                      <span className="text-xs text-[#94a3b8]">
                        {new Date(article.updated_at).toLocaleDateString("fr-FR")}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
