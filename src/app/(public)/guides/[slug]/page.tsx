import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleLayout from "@/components/blog/ArticleLayout";
import SectionRenderer from "@/components/blog/SectionRenderer";
import { createClient } from "@/lib/supabase/server";
import type { EdumoveArticle } from "@/types/sections";

export const revalidate = 60;

async function getGuideArticle(slug: string): Promise<EdumoveArticle | null> {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("edumove_articles")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .eq("is_guide", true)
      .single();
    return data as EdumoveArticle | null;
  } catch {
    return null;
  }
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getGuideArticle(slug);
  if (!article) return { title: "Guide non trouvé" };
  return {
    title: article.meta_title ?? article.title,
    description: article.meta_description ?? article.excerpt ?? "",
    openGraph: {
      title: article.title,
      description: article.excerpt ?? "",
      type: "article",
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dbArticle = await getGuideArticle(slug);

  if (!dbArticle) notFound();

  const sommaire = (dbArticle.sections as Array<{ type: string; level?: string; text?: string }>)
    .filter((s) => s.type === "heading" && s.level === "h2")
    .map((s) => ({
      id: slugify(s.text ?? ""),
      label: s.text ?? "",
    }));

  const articleData = {
    slug: dbArticle.slug,
    title: dbArticle.title,
    date: new Date(dbArticle.published_at ?? dbArticle.created_at).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    dateISO: dbArticle.published_at ?? dbArticle.created_at,
    tag: dbArticle.tag as "Guide" | "Financement" | "Actualités" | "Témoignages" | "Filières",
    tagColor: dbArticle.tag_color,
    readTime: dbArticle.read_time,
    excerpt: dbArticle.excerpt ?? "",
    metaTitle: dbArticle.meta_title ?? dbArticle.title,
    metaDescription: dbArticle.meta_description ?? "",
    isGuide: true,
    heroPills: (dbArticle.hero_pills as { icon: string; label: string }[]) ?? [],
    relatedSlugs: dbArticle.related_slugs ?? [],
    relatedFormations: dbArticle.related_formations ?? [],
    relatedUniversities: dbArticle.related_universities ?? [],
  };

  return (
    <main>
      <ArticleLayout article={articleData} sommaire={sommaire}>
        <SectionRenderer sections={dbArticle.sections} />
      </ArticleLayout>
    </main>
  );
}
