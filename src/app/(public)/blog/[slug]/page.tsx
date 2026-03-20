import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArticleBySlug } from "@/data/articles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import SectionRenderer from "@/components/blog/SectionRenderer";
import { createClient } from "@/lib/supabase/server";
import type { EdumoveArticle } from "@/types/sections";

/* ---------- Static article imports (fallback) ---------- */
import FinancerEtudes, {
  sommaire as financerSommaire,
} from "@/components/blog/articles/FinancerEtudes";
import ReconnaissanceDiplomes, {
  sommaire as reconnaissanceSommaire,
} from "@/components/blog/articles/ReconnaissanceDiplomes";
import TemoignageMedecine, {
  sommaire as temoignageSommaire,
} from "@/components/blog/articles/TemoignageMedecine";
import AvantagesKinesitherapie, {
  sommaire as kinesitherapieSommaire,
} from "@/components/blog/articles/AvantagesKinesitherapie";
import EchecPassAlternatives, {
  sommaire as echecPassSommaire,
} from "@/components/blog/articles/EchecPassAlternatives";
import CoutEtudesSanteEurope, {
  sommaire as coutEtudesSommaire,
} from "@/components/blog/articles/CoutEtudesSanteEurope";
import EtudesMedecineEspagne, {
  sommaire as medecineEspagneSommaire,
} from "@/components/blog/articles/EtudesMedecineEspagne";

const staticBlogSlugs = [
  "financer-etudes-sante-europe",
  "reconnaissance-diplomes-europeens",
  "temoignage-medecine-espagne",
  "avantages-kinesitherapie-europe",
  "echec-pass-alternatives",
  "cout-etudes-sante-europe",
  "etudes-medecine-espagne",
];

const contentMap: Record<
  string,
  {
    Component: React.ComponentType;
    sommaire: { id: string; label: string }[];
  }
> = {
  "financer-etudes-sante-europe": {
    Component: FinancerEtudes,
    sommaire: financerSommaire,
  },
  "reconnaissance-diplomes-europeens": {
    Component: ReconnaissanceDiplomes,
    sommaire: reconnaissanceSommaire,
  },
  "temoignage-medecine-espagne": {
    Component: TemoignageMedecine,
    sommaire: temoignageSommaire,
  },
  "avantages-kinesitherapie-europe": {
    Component: AvantagesKinesitherapie,
    sommaire: kinesitherapieSommaire,
  },
  "echec-pass-alternatives": {
    Component: EchecPassAlternatives,
    sommaire: echecPassSommaire,
  },
  "cout-etudes-sante-europe": {
    Component: CoutEtudesSanteEurope,
    sommaire: coutEtudesSommaire,
  },
  "etudes-medecine-espagne": {
    Component: EtudesMedecineEspagne,
    sommaire: medecineEspagneSommaire,
  },
};

/* ---------- Dynamic Supabase fetch ---------- */

async function getSupabaseArticle(slug: string): Promise<EdumoveArticle | null> {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("edumove_articles")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
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

/* ---------- Static params for build ---------- */

export function generateStaticParams() {
  return staticBlogSlugs.map((slug) => ({ slug }));
}

/* ---------- Metadata ---------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // Check Supabase first
  const dbArticle = await getSupabaseArticle(slug);
  if (dbArticle) {
    return {
      title: dbArticle.meta_title ?? dbArticle.title,
      description: dbArticle.meta_description ?? dbArticle.excerpt ?? "",
      openGraph: {
        title: dbArticle.title,
        description: dbArticle.excerpt ?? "",
        type: "article",
      },
    };
  }

  // Fallback to static
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article non trouv\u00e9" };
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
    },
  };
}

/* ---------- Page ---------- */

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 1. Check Supabase for dynamic article
  const dbArticle = await getSupabaseArticle(slug);

  if (dbArticle) {
    // Build sommaire from h2 headings
    const sommaire = (dbArticle.sections as Array<{ type: string; level?: string; text?: string }>)
      .filter((s) => s.type === "heading" && s.level === "h2")
      .map((s) => ({
        id: slugify(s.text ?? ""),
        label: s.text ?? "",
      }));

    // Build article object compatible with ArticleLayout
    const articleData = {
      slug: dbArticle.slug,
      title: dbArticle.title,
      date: new Date(dbArticle.published_at ?? dbArticle.created_at).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      dateISO: dbArticle.published_at ?? dbArticle.created_at,
      tag: dbArticle.tag as "Guide" | "Financement" | "Actualit\u00e9s" | "T\u00e9moignages" | "Fili\u00e8res",
      tagColor: dbArticle.tag_color,
      readTime: dbArticle.read_time,
      excerpt: dbArticle.excerpt ?? "",
      metaTitle: dbArticle.meta_title ?? dbArticle.title,
      metaDescription: dbArticle.meta_description ?? "",
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

  // 2. Fallback to static content
  const article = getArticleBySlug(slug);
  if (!article || !contentMap[slug]) notFound();

  const { Component, sommaire } = contentMap[slug];

  return (
    <main>
      <ArticleLayout article={article} sommaire={sommaire}>
        <Component />
      </ArticleLayout>
    </main>
  );
}
