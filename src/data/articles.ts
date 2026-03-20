export type ArticleTag = "Guide" | "Financement" | "Actualités" | "Témoignages" | "Filières";

export interface Article {
  slug: string;
  title: string;
  date: string;
  dateISO: string;
  tag: ArticleTag;
  tagColor: string;
  readTime: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  isGuide?: boolean; // lives at /guides/ instead of /blog/
  relatedSlugs: string[];
  relatedFormations: string[];
  relatedUniversities: string[];
}

export const articles: Article[] = [
  {
    slug: "reussir-test-pe-universidad-europea",
    title: "Comment réussir le test PE de l\u2019Universidad Europea ?",
    date: "19 mars 2026",
    dateISO: "2026-03-19",
    tag: "Guide",
    tagColor: "bg-[#615ca5]",
    readTime: "12 min",
    excerpt:
      "Guide complet sur la Prueba Específica : les 4 épreuves détaillées, la plateforme Langoo, le Talent Test et nos conseils pour maximiser vos chances.",
    metaTitle: "Comment réussir le test PE de l\u2019Universidad Europea ? | Edumove",
    metaDescription:
      "Test PE (Prueba Específica) de l\u2019Universidad Europea : les 4 épreuves détaillées, nos conseils de préparation et les erreurs à éviter.",
    isGuide: true,
    relatedSlugs: ["reussir-test-admission-link-campus", "financer-etudes-sante-europe"],
    relatedFormations: ["medecine", "dentaire", "veterinaire"],
    relatedUniversities: ["/universites/universidad-europea"],
  },
  {
    slug: "reussir-test-admission-link-campus",
    title: "Comment réussir le test d\u2019admission de LINK Campus University ?",
    date: "19 mars 2026",
    dateISO: "2026-03-19",
    tag: "Guide",
    tagColor: "bg-[#615ca5]",
    readTime: "10 min",
    excerpt:
      "Tout savoir sur le QCM d\u2019entrée de LINK Campus : les 5 matières, le système de notation et nos conseils pour être admis.",
    metaTitle: "Réussir le test d\u2019admission LINK Campus University | Edumove",
    metaDescription:
      "Guide complet sur le test d\u2019admission de LINK Campus University : 5 matières, notation, conseils pratiques.",
    isGuide: true,
    relatedSlugs: ["reussir-test-pe-universidad-europea", "reconnaissance-diplomes-europeens"],
    relatedFormations: ["medecine", "dentaire", "kinesitherapie", "pharmacie"],
    relatedUniversities: ["/universites/link-campus"],
  },
  {
    slug: "presenter-sa-candidature",
    title: "Comment présenter sa candidature en études de santé en Europe ?",
    date: "20 mars 2026",
    dateISO: "2026-03-20",
    tag: "Guide",
    tagColor: "bg-[#615ca5]",
    readTime: "8 min",
    excerpt:
      "Toutes les étapes pour candidater : dossier, conditions, test d\u2019admission. L\u2019accompagnement Edumove est 100 % gratuit.",
    metaTitle: "Comment présenter sa candidature ? Guide complet | Edumove",
    metaDescription:
      "Guide étape par étape pour candidater en médecine, dentaire, kiné ou pharmacie en Europe. Accompagnement Edumove gratuit.",
    isGuide: true,
    relatedSlugs: ["reussir-test-pe-universidad-europea", "reussir-test-admission-link-campus", "financer-etudes-sante-europe"],
    relatedFormations: ["medecine", "dentaire", "kinesitherapie", "pharmacie", "veterinaire"],
    relatedUniversities: ["/universites/universidad-europea", "/universites/ucjc", "/universites/link-campus"],
  },
  {
    slug: "financer-etudes-sante-europe",
    title: "Comment financer ses études de santé en Europe avec un prêt étudiant ?",
    date: "28 février 2025",
    dateISO: "2025-02-28",
    tag: "Financement",
    tagColor: "bg-[#ec680a]",
    readTime: "5 min",
    excerpt:
      "Prêt étudiant, bourses, aides : toutes les solutions pour financer vos études de santé en Europe sans avancer un centime.",
    metaTitle: "Financer ses études de santé en Europe : prêt étudiant et aides | Edumove",
    metaDescription:
      "Prêt étudiant LCL, bourses du CROUS, aides régionales : toutes les solutions pour financer des études de santé en Europe sans avance.",
    relatedSlugs: ["reconnaissance-diplomes-europeens", "avantages-kinesitherapie-europe"],
    relatedFormations: ["medecine", "dentaire", "kinesitherapie", "pharmacie", "veterinaire"],
    relatedUniversities: ["/universites/universidad-europea", "/universites/link-campus", "/universites/ucjc"],
  },
  {
    slug: "reconnaissance-diplomes-europeens",
    title: "Reconnaissance des diplômes européens en France : ce qu\u2019il faut savoir",
    date: "10 janvier 2025",
    dateISO: "2025-01-10",
    tag: "Actualités",
    tagColor: "bg-[#ec680a]",
    readTime: "6 min",
    excerpt:
      "Directive européenne, démarches au retour, inscription à l\u2019Ordre : tout comprendre sur la reconnaissance de votre diplôme de santé.",
    metaTitle: "Reconnaissance des diplômes européens en France | Edumove",
    metaDescription:
      "Comment faire reconnaître un diplôme de santé obtenu en Europe ? Directive 2005/36/CE, démarches et inscription à l\u2019Ordre.",
    relatedSlugs: ["financer-etudes-sante-europe", "temoignage-medecine-espagne"],
    relatedFormations: ["medecine", "dentaire", "kinesitherapie"],
    relatedUniversities: [],
  },
  {
    slug: "temoignage-medecine-espagne",
    title: "Témoignage : mon parcours en médecine en Espagne avec Edumove",
    date: "5 décembre 2024",
    dateISO: "2024-12-05",
    tag: "Témoignages",
    tagColor: "bg-[#615ca5]",
    readTime: "4 min",
    excerpt:
      "Clara partage son expérience : après un échec en PASS, elle a intégré médecine à l\u2019Universidad Europea de Madrid grâce à Edumove.",
    metaTitle: "Témoignage médecine en Espagne avec Edumove | Clara",
    metaDescription:
      "Clara raconte : après deux échecs en PASS, elle a intégré médecine à Madrid via Edumove. Son parcours, ses doutes, ses conseils.",
    relatedSlugs: ["reussir-test-pe-universidad-europea", "financer-etudes-sante-europe"],
    relatedFormations: ["medecine"],
    relatedUniversities: ["/universites/universidad-europea"],
  },
  {
    slug: "avantages-kinesitherapie-europe",
    title: "Les avantages d\u2019étudier la kinésithérapie en Europe",
    date: "20 novembre 2024",
    dateISO: "2024-11-20",
    tag: "Filières",
    tagColor: "bg-[#ec680a]",
    readTime: "7 min",
    excerpt:
      "Accès facilité, diplôme reconnu, pratique clinique précoce : pourquoi de plus en plus d\u2019étudiants choisissent la kiné en Europe.",
    metaTitle: "Kinésithérapie en Europe : avantages et débouchés | Edumove",
    metaDescription:
      "Pourquoi étudier la kinésithérapie en Europe ? Accès sans concours, diplôme reconnu dans l\u2019UE, stages cliniques dès la 1re année.",
    relatedSlugs: ["financer-etudes-sante-europe", "reconnaissance-diplomes-europeens"],
    relatedFormations: ["kinesitherapie"],
    relatedUniversities: ["/universites/universidad-europea", "/universites/ucjc", "/universites/link-campus"],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticleHref(article: Article): string {
  if (article.isGuide) return `/guides/${article.slug}`;
  return `/blog/${article.slug}`;
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return article.relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is Article => !!a)
    .slice(0, limit);
}

export function getArticlesByTag(tag: ArticleTag): Article[] {
  return articles.filter((a) => a.tag === tag);
}

export const allTags: ArticleTag[] = ["Guide", "Financement", "Actualités", "Témoignages", "Filières"];
