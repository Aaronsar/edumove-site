import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { FileText, FilePlus, Library, TrendingUp } from "lucide-react";

async function getStats() {
  const supabase = await createClient();

  const { count: totalCount } = await supabase
    .from("edumove_articles")
    .select("*", { count: "exact", head: true });

  const { count: publishedCount } = await supabase
    .from("edumove_articles")
    .select("*", { count: "exact", head: true })
    .eq("status", "published");

  const { count: draftCount } = await supabase
    .from("edumove_articles")
    .select("*", { count: "exact", head: true })
    .eq("status", "draft");

  const { count: gedsCount } = await supabase
    .from("edumove_articles")
    .select("*", { count: "exact", head: true })
    .eq("source", "geds_import");

  const { data: recentArticles } = await supabase
    .from("edumove_articles")
    .select("id, title, slug, status, tag, updated_at")
    .order("updated_at", { ascending: false })
    .limit(5);

  return {
    total: totalCount ?? 0,
    published: publishedCount ?? 0,
    drafts: draftCount ?? 0,
    geds: gedsCount ?? 0,
    recent: recentArticles ?? [],
  };
}

export default async function AdminDashboardPage() {
  // Auth guard
  const supabaseAuth = await createClient();
  const { data: { user } } = await supabaseAuth.auth.getUser();
  if (!user) redirect("/admin/login");

  const stats = await getStats();

  const cards = [
    { label: "Articles publi\u00e9s", value: stats.published, icon: FileText, color: "text-green-600 bg-green-50" },
    { label: "Brouillons", value: stats.drafts, icon: FilePlus, color: "text-[#EC680A] bg-orange-50" },
    { label: "Total articles", value: stats.total, icon: TrendingUp, color: "text-[#615CA5] bg-purple-50" },
    { label: "Import\u00e9s GEDS", value: stats.geds, icon: Library, color: "text-blue-600 bg-blue-50" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1B1D3A]">Dashboard</h1>
        <p className="text-sm text-[#64748b] mt-1">
          Bienvenue dans le back-office Edumove
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((card) => (
          <div
            key={card.label}
            className="bg-white rounded-xl border border-gray-200/80 p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${card.color}`}>
                <card.icon className="w-4.5 h-4.5" />
              </div>
            </div>
            <p className="text-2xl font-bold text-[#1B1D3A]">{card.value}</p>
            <p className="text-xs text-[#94a3b8] mt-0.5">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link
          href="/admin/articles/new"
          className="flex items-center gap-4 bg-[#1B1D3A] hover:bg-[#2a2d52] text-white rounded-xl p-5 transition-colors group"
        >
          <div className="w-10 h-10 rounded-lg bg-[#EC680A] flex items-center justify-center shrink-0">
            <FilePlus className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-sm">Cr\u00e9er un article</p>
            <p className="text-xs text-white/50">
              Nouvel article avec l&apos;\u00e9diteur par blocs
            </p>
          </div>
        </Link>
        <Link
          href="/admin/import"
          className="flex items-center gap-4 bg-white hover:bg-gray-50 border border-gray-200/80 rounded-xl p-5 transition-colors group"
        >
          <div className="w-10 h-10 rounded-lg bg-[#615CA5]/10 flex items-center justify-center shrink-0">
            <Library className="w-5 h-5 text-[#615CA5]" />
          </div>
          <div>
            <p className="font-semibold text-sm text-[#1B1D3A]">
              Biblioth\u00e8que GEDS
            </p>
            <p className="text-xs text-[#94a3b8]">
              Consulter les 193 articles GEDS pour inspiration
            </p>
          </div>
        </Link>
      </div>

      {/* Recent articles */}
      <div className="bg-white rounded-xl border border-gray-200/80">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-semibold text-sm text-[#1B1D3A]">
            Derniers articles modifi\u00e9s
          </h2>
          <Link
            href="/admin/articles"
            className="text-xs text-[#615CA5] hover:text-[#4e4a8a] font-medium"
          >
            Voir tout &rarr;
          </Link>
        </div>
        {stats.recent.length === 0 ? (
          <div className="px-5 py-10 text-center">
            <p className="text-sm text-[#94a3b8]">Aucun article pour le moment</p>
            <Link
              href="/admin/articles/new"
              className="text-sm text-[#EC680A] hover:text-[#D45E09] font-medium mt-2 inline-block"
            >
              Cr\u00e9er votre premier article &rarr;
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {stats.recent.map((article) => (
              <Link
                key={article.id}
                href={`/admin/articles/${article.id}`}
                className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`inline-block w-2 h-2 rounded-full shrink-0 ${
                      article.status === "published"
                        ? "bg-green-500"
                        : article.status === "draft"
                        ? "bg-orange-400"
                        : "bg-gray-300"
                    }`}
                  />
                  <span className="text-sm text-[#1B1D3A] truncate font-medium">
                    {article.title}
                  </span>
                </div>
                <span className="text-xs text-[#94a3b8] shrink-0 ml-4">
                  {article.tag}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
