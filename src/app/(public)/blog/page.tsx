import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogContent from "@/components/blog/BlogContent";
import { articles as staticArticles, type Article } from "@/data/articles";
import { createPublicAnonClient } from "@/lib/supabase/public-anon";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog — Articles et guides | Edumove",
  description:
    "Retrouvez tous nos articles, guides pratiques et témoignages pour réussir vos études de santé en Europe.",
};

const tagColorMap: Record<string, string> = {
  Guide: "bg-[#615ca5]",
  Financement: "bg-[#ec680a]",
  "Actualités": "bg-[#0ea5e9]",
  "Témoignages": "bg-[#22c55e]",
  "Filières": "bg-[#615ca5]",
};

async function getDbArticles(): Promise<Article[]> {
  try {
    const supabase = createPublicAnonClient();
    const { data } = await supabase
      .from("edumove_articles")
      .select("slug, title, tag, tag_color, read_time, excerpt, meta_title, meta_description, published_at, is_guide, hero_pills, related_slugs, related_formations, related_universities, status")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (!data || data.length === 0) return [];

    return data.map((a) => ({
      slug: a.slug,
      title: a.title,
      date: a.published_at
        ? new Date(a.published_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })
        : "",
      dateISO: a.published_at || new Date().toISOString(),
      tag: (a.tag || "Guide") as Article["tag"],
      tagColor: a.tag_color || tagColorMap[a.tag] || "bg-[#615ca5]",
      readTime: a.read_time || "5 min",
      excerpt: a.excerpt || a.meta_description || "",
      metaTitle: a.meta_title || a.title,
      metaDescription: a.meta_description || "",
      isGuide: a.is_guide || false,
      heroPills: a.hero_pills || [],
      relatedSlugs: a.related_slugs || [],
      relatedFormations: a.related_formations || [],
      relatedUniversities: a.related_universities || [],
    }));
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const dbArticles = await getDbArticles();

  // Merge: DB articles first (newest), then static articles (excluding duplicates)
  const dbSlugs = new Set(dbArticles.map((a) => a.slug));
  const allArticles = [
    ...dbArticles,
    ...staticArticles.filter((a) => !dbSlugs.has(a.slug)),
  ];

  return (
    <main>
      <BlogHero />
      <BlogContent articles={allArticles} />
    </main>
  );
}
