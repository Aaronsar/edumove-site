/* ---------- Block Section Types ---------- */

export interface HeadingSection {
  type: "heading";
  level: "h2" | "h3";
  text: string;
  icon?: string; // Lucide icon name e.g. "GraduationCap"
}

export interface ParagraphSection {
  type: "paragraph";
  html: string; // Rich HTML content (supports <strong>, <a>, <em>, etc.)
}

export interface CalloutSection {
  type: "callout";
  variant: "info" | "warning";
  html: string;
}

export interface TableSection {
  type: "table";
  headers: string[];
  rows: string[][];
}

export interface ListSection {
  type: "list";
  style: "bullet" | "numbered";
  items: string[]; // HTML items
}

export interface ImageSection {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}

export interface LinkCardSection {
  type: "link-card";
  title: string;
  description: string;
  href: string;
}

export interface GridSection {
  type: "grid";
  columns: 2 | 3;
  items: { title: string; description: string }[];
}

export interface StatsGridSection {
  type: "stats-grid";
  items: { value: string; label: string }[];
}

export interface FAQSection {
  type: "faq";
  items: { question: string; answer: string }[];
}

export type ArticleSection =
  | HeadingSection
  | ParagraphSection
  | CalloutSection
  | TableSection
  | ListSection
  | ImageSection
  | LinkCardSection
  | GridSection
  | StatsGridSection
  | FAQSection;

/* ---------- Database Row ---------- */

export interface HeroPill {
  icon: string;  // Lucide icon name e.g. "FileText", "GraduationCap"
  label: string;
}

export interface EdumoveArticle {
  id: number;
  slug: string;
  title: string;
  meta_title: string | null;
  meta_description: string | null;
  excerpt: string | null;
  tag: "Guide" | "Financement" | "Actualités" | "Témoignages" | "Filières";
  tag_color: string;
  sections: ArticleSection[];
  read_time: string;
  is_guide: boolean;
  hero_pills: HeroPill[];
  related_slugs: string[];
  related_formations: string[];
  related_universities: string[];
  status: "draft" | "published" | "archived";
  published_at: string | null;
  source: "manual" | "geds_import" | "static_migration";
  source_url: string | null;
  seo_score: number;
  focus_keyword: string | null;
  created_at: string;
  updated_at: string;
}
