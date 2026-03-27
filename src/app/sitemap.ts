import type { MetadataRoute } from "next";
import { articles, getArticleHref } from "@/data/articles";
import { filieres } from "@/data/filieres";
import { getAllProgramSlugs } from "@/data/program-details";
import { getAvailableCountries } from "@/data/country-pages";
import { getAllCitySlugs } from "@/data/city-guides";
import { createPublicAnonClient } from "@/lib/supabase/public-anon";
import { getSiteOrigin } from "@/lib/seo/site-url";

const UNIVERSITY_URL_SLUGS = ["link-campus", "ucjc", "universidad-europea"] as const;

function toLastModified(iso: string | undefined | null): Date | undefined {
  if (!iso) return undefined;
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? undefined : d;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getSiteOrigin();
  // Use a fixed date for static content to avoid resetting lastmod on every build
  const siteLastUpdated = new Date("2026-03-22T12:00:00Z");
  const now = siteLastUpdated;

  /** path (pathname) -> lastModified */
  const entries = new Map<string, Date | undefined>();

  const add = (path: string, lastModified?: Date) => {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    const existing = entries.get(normalized);
    if (!existing || (lastModified && lastModified > existing)) {
      entries.set(normalized, lastModified);
    }
  };

  // Pages fixes
  add("/", now);
  add("/a-propos", now);
  add("/financement", now);
  add("/temoignages", now);
  add("/contact", now);
  add("/questions-frequentes", now);
  add("/blog", now);
  add("/mentions-legales", now);
  add("/politique-de-confidentialite", now);
  add("/plan-du-site", now);
  add("/evenements/webinaire-financement-sante", now);

  // Vie étudiante par ville
  for (const slug of getAllCitySlugs()) {
    add(`/vie-etudiante/${slug}`, now);
  }

  // Universités
  for (const slug of UNIVERSITY_URL_SLUGS) {
    add(`/universites/${slug}`, now);
  }

  // Filières + sous-pages pays + fiches programme
  for (const f of filieres) {
    add(`/formations/${f.slug}`, now);
    for (const countrySlug of getAvailableCountries(f.slug)) {
      add(`/formations/${f.slug}/${countrySlug}`, now);
    }
  }
  for (const { filiere, slug } of getAllProgramSlugs()) {
    add(`/formations/${filiere}/${slug}`, now);
  }

  // Articles locaux (blog / guides)
  for (const article of articles) {
    add(getArticleHref(article), toLastModified(article.dateISO));
  }

  // Articles publiés Supabase (y compris ceux créés uniquement en base)
  try {
    const supabase = createPublicAnonClient();
    const { data: rows } = await supabase
      .from("edumove_articles")
      .select("slug,is_guide,published_at,updated_at")
      .eq("status", "published");

    for (const row of rows ?? []) {
      const path = row.is_guide ? `/guides/${row.slug}` : `/blog/${row.slug}`;
      const last = toLastModified(row.published_at) ?? toLastModified(row.updated_at);
      add(path, last);
    }
  } catch {
    // Pas de clés / réseau : le sitemap reste utile avec les URLs statiques
  }

  return Array.from(entries.entries()).map(([path, lastModified]) => ({
    url: `${base}${path}`,
    lastModified: lastModified ?? now,
    changeFrequency:
      path === "/"
        ? "weekly"
        : path.startsWith("/blog") || path.startsWith("/guides")
          ? "weekly"
          : path.startsWith("/formations")
            ? "monthly"
            : "monthly",
    priority:
      path === "/"
        ? 1
        : path.startsWith("/formations/") && path.split("/").length > 3
          ? 0.8
          : 0.7,
  }));
}
