import type { ArticleSection } from "@/types/sections";

export interface SEOCheck {
  id: string;
  label: string;
  passed: boolean;
  message: string;
  category: "basic" | "content" | "links";
}

export interface SEOAnalysis {
  score: number;
  checks: SEOCheck[];
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

/** Normalize text: lowercase, remove accents, trim */
function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function countWords(text: string): number {
  return text
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
}

function extractText(sections: ArticleSection[]): string {
  return sections
    .map((s) => {
      switch (s.type) {
        case "heading":
          return s.text;
        case "paragraph":
          return stripHtml(s.html);
        case "callout":
          return stripHtml(s.html);
        case "list":
          return s.items.map(stripHtml).join(" ");
        case "table":
          return [...s.headers, ...s.rows.flat()].join(" ");
        case "faq":
          return s.items.map((i) => `${i.question} ${i.answer}`).join(" ");
        case "grid":
          return s.items.map((i) => `${i.title} ${i.description}`).join(" ");
        case "stats-grid":
          return s.items.map((i) => `${i.value} ${i.label}`).join(" ");
        default:
          return "";
      }
    })
    .join(" ");
}

function extractLinks(sections: ArticleSection[]): { internal: number; external: number } {
  let internal = 0;
  let external = 0;

  function classifyHref(href: string) {
    if (href.startsWith("/") || href.includes("edumove")) {
      internal++;
    } else if (href.startsWith("http")) {
      external++;
    }
  }

  function extractFromHtml(html: string) {
    const links = html.match(/<a[^>]*href="([^"]*)"[^>]*>/g) || [];
    for (const link of links) {
      const href = link.match(/href="([^"]*)"/)?.[1] || "";
      classifyHref(href);
    }
  }

  for (const s of sections) {
    switch (s.type) {
      case "paragraph":
      case "callout":
        extractFromHtml((s as { html: string }).html || "");
        break;
      case "list":
        extractFromHtml((s as { items: string[] }).items.join(" "));
        break;
      case "faq":
        for (const item of (s as { items: { question: string; answer: string }[] }).items) {
          extractFromHtml(item.answer);
        }
        break;
      case "link-card": {
        const href = (s as { href: string }).href || "";
        if (href) classifyHref(href);
        break;
      }
      case "table":
        for (const row of (s as { rows: string[][] }).rows) {
          for (const cell of row) {
            extractFromHtml(cell);
          }
        }
        break;
      case "grid":
        for (const item of (s as { items: { title: string; description: string }[] }).items) {
          extractFromHtml(item.description || "");
        }
        break;
    }
  }
  return { internal, external };
}

function countImages(sections: ArticleSection[]): { total: number; withAlt: number; withKeyword: number } {
  const images = sections.filter((s) => s.type === "image") as Array<{ type: "image"; src: string; alt: string }>;
  return {
    total: images.length,
    withAlt: images.filter((i) => i.alt.trim().length > 0).length,
    withKeyword: 0, // updated in analyze
  };
}

export function analyzeSEO(params: {
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  focusKeyword: string;
  sections: ArticleSection[];
}): SEOAnalysis {
  const { title, metaTitle, metaDescription, slug, focusKeyword, sections } = params;
  const checks: SEOCheck[] = [];
  const kw = normalize(focusKeyword);
  const fullText = normalize(extractText(sections));
  const wordCount = countWords(fullText);
  const links = extractLinks(sections);
  const images = countImages(sections);

  // Count images with keyword
  const imagesWithKw = kw
    ? sections.filter(
        (s) => s.type === "image" && normalize((s as { alt: string }).alt).includes(kw)
      ).length
    : 0;

  const headings = sections.filter((s) => s.type === "heading") as Array<{
    type: "heading";
    level: string;
    text: string;
  }>;
  const h2s = headings.filter((h) => h.level === "h2");
  const h3s = headings.filter((h) => h.level === "h3");

  // Find first paragraph text
  const firstParagraph = sections.find((s) => s.type === "paragraph");
  const firstParaText = firstParagraph
    ? normalize(stripHtml((firstParagraph as { html: string }).html))
    : "";
  const first150Words = firstParaText.split(/\s+/).slice(0, 150).join(" ");

  // Keyword density
  const kwOccurrences = kw ? (fullText.match(new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi")) || []).length : 0;
  const density = wordCount > 0 ? (kwOccurrences / wordCount) * 100 : 0;

  // === BASIC CHECKS ===

  // 1. Keyword in SEO title
  checks.push({
    id: "kw-in-title",
    label: "Mot-cl\u00e9 dans le titre SEO",
    passed: kw ? normalize(metaTitle).includes(kw) : false,
    message: kw
      ? normalize(metaTitle).includes(kw)
        ? `Le mot-cl\u00e9 "${focusKeyword}" apparait dans le titre SEO`
        : `Ajoutez "${focusKeyword}" dans votre titre SEO`
      : "D\u00e9finissez un mot-cl\u00e9 focus",
    category: "basic",
  });

  // 2. Keyword at start of title
  checks.push({
    id: "kw-start-title",
    label: "Mot-cl\u00e9 au d\u00e9but du titre",
    passed: kw ? normalize(metaTitle).startsWith(kw) || normalize(metaTitle).indexOf(kw) < 20 : false,
    message: kw
      ? normalize(metaTitle).indexOf(kw) < 20
        ? `Le mot-cl\u00e9 est bien plac\u00e9 dans le titre`
        : `Placez "${focusKeyword}" plus t\u00f4t dans le titre`
      : "D\u00e9finissez un mot-cl\u00e9 focus",
    category: "basic",
  });

  // 3. Keyword in meta description
  checks.push({
    id: "kw-in-meta",
    label: "Mot-cl\u00e9 dans la meta description",
    passed: kw ? normalize(metaDescription).includes(kw) : false,
    message: kw
      ? normalize(metaDescription).includes(kw)
        ? `Le mot-cl\u00e9 apparait dans la meta description`
        : `Ajoutez "${focusKeyword}" dans la meta description`
      : "D\u00e9finissez un mot-cl\u00e9 focus",
    category: "basic",
  });

  // 4. Keyword in slug
  const slugNormalized = normalize(slug.replace(/-/g, " "));
  checks.push({
    id: "kw-in-slug",
    label: "Mot-cl\u00e9 dans l\u2019URL",
    passed: kw ? slugNormalized.includes(kw.replace(/\s+/g, " ")) : false,
    message: kw
      ? slugNormalized.includes(kw.replace(/\s+/g, " "))
        ? `L\u2019URL contient le mot-cl\u00e9`
        : `Ajoutez "${focusKeyword}" dans le slug`
      : "D\u00e9finissez un mot-cl\u00e9 focus",
    category: "basic",
  });

  // 5. Title length
  const titleLen = metaTitle.length;
  checks.push({
    id: "title-length",
    label: "Longueur du titre SEO",
    passed: titleLen >= 30 && titleLen <= 60,
    message:
      titleLen < 30
        ? `Titre trop court (${titleLen}/60 caract\u00e8res)`
        : titleLen > 60
        ? `Titre trop long (${titleLen}/60 caract\u00e8res)`
        : `Longueur du titre optimale (${titleLen}/60)`,
    category: "basic",
  });

  // 6. Meta description length
  const metaLen = metaDescription.length;
  checks.push({
    id: "meta-length",
    label: "Longueur de la meta description",
    passed: metaLen >= 120 && metaLen <= 160,
    message:
      metaLen < 120
        ? `Meta description trop courte (${metaLen}/160 caract\u00e8res)`
        : metaLen > 160
        ? `Meta description trop longue (${metaLen}/160 caract\u00e8res)`
        : `Longueur de la meta description optimale (${metaLen}/160)`,
    category: "basic",
  });

  // === CONTENT CHECKS ===

  // 7. Keyword in first paragraph
  checks.push({
    id: "kw-first-para",
    label: "Mot-cl\u00e9 dans le premier paragraphe",
    passed: kw ? first150Words.includes(kw) : false,
    message: kw
      ? first150Words.includes(kw)
        ? `Le mot-cl\u00e9 apparait dans les 150 premiers mots`
        : `Ajoutez "${focusKeyword}" dans l\u2019introduction`
      : "D\u00e9finissez un mot-cl\u00e9 focus",
    category: "content",
  });

  // 8. Keyword in H2
  const kwInH2 = kw ? h2s.some((h) => normalize(h.text).includes(kw)) : false;
  checks.push({
    id: "kw-in-h2",
    label: "Mot-cl\u00e9 dans un H2",
    passed: kwInH2,
    message: kw
      ? kwInH2
        ? `Le mot-cl\u00e9 apparait dans un sous-titre H2`
        : `Ajoutez "${focusKeyword}" dans au moins un H2`
      : "D\u00e9finissez un mot-cl\u00e9 focus",
    category: "content",
  });

  // 9. Keyword density
  checks.push({
    id: "kw-density",
    label: "Densit\u00e9 du mot-cl\u00e9",
    passed: kw ? density >= 0.5 && density <= 2.5 : false,
    message: kw
      ? density < 0.5
        ? `Densit\u00e9 trop faible (${density.toFixed(1)}%). Ajoutez "${focusKeyword}" davantage`
        : density > 2.5
        ? `Densit\u00e9 trop \u00e9lev\u00e9e (${density.toFixed(1)}%). R\u00e9duisez l\u2019usage de "${focusKeyword}"`
        : `Densit\u00e9 optimale (${density.toFixed(1)}%)`
      : "D\u00e9finissez un mot-cl\u00e9 focus",
    category: "content",
  });

  // 10. Content length
  checks.push({
    id: "content-length",
    label: "Longueur du contenu",
    passed: wordCount >= 600,
    message:
      wordCount < 300
        ? `Contenu trop court (${wordCount} mots). Visez au moins 600 mots`
        : wordCount < 600
        ? `Contenu un peu court (${wordCount} mots). Visez 600+ mots`
        : `Longueur de contenu suffisante (${wordCount} mots)`,
    category: "content",
  });

  // 11. Headings present
  checks.push({
    id: "headings-present",
    label: "Sous-titres H2/H3 pr\u00e9sents",
    passed: h2s.length + h3s.length >= 2,
    message:
      h2s.length + h3s.length >= 2
        ? `${h2s.length} H2 et ${h3s.length} H3 trouv\u00e9s`
        : `Ajoutez au moins 2 sous-titres H2/H3 pour structurer le contenu`,
    category: "content",
  });

  // === LINKS & MEDIA CHECKS ===

  // 12. Internal links
  checks.push({
    id: "internal-links",
    label: "Liens internes",
    passed: links.internal >= 2,
    message:
      links.internal >= 2
        ? `${links.internal} liens internes trouv\u00e9s`
        : `Ajoutez au moins 2 liens internes (${links.internal} trouv\u00e9(s))`,
    category: "links",
  });

  // 13. External links
  checks.push({
    id: "external-links",
    label: "Liens externes",
    passed: links.external >= 1,
    message:
      links.external >= 1
        ? `${links.external} lien(s) externe(s) trouv\u00e9(s)`
        : `Ajoutez au moins 1 lien vers une source externe`,
    category: "links",
  });

  // 14. Images with keyword alt
  checks.push({
    id: "images-kw-alt",
    label: "Images avec alt contenant le mot-cl\u00e9",
    passed: images.total === 0 || imagesWithKw > 0,
    message:
      images.total === 0
        ? `Aucune image trouv\u00e9e (optionnel)`
        : imagesWithKw > 0
        ? `${imagesWithKw} image(s) avec le mot-cl\u00e9 dans l\u2019alt`
        : `Ajoutez le mot-cl\u00e9 dans l\u2019alt text d\u2019au moins une image`,
    category: "links",
  });

  // 15. All images have alt
  checks.push({
    id: "images-all-alt",
    label: "Alt text sur toutes les images",
    passed: images.total === 0 || images.withAlt === images.total,
    message:
      images.total === 0
        ? `Aucune image (optionnel)`
        : images.withAlt === images.total
        ? `Toutes les images ont un alt text`
        : `${images.total - images.withAlt} image(s) sans alt text`,
    category: "links",
  });

  // Calculate score
  const passedCount = checks.filter((c) => c.passed).length;
  const score = Math.round((passedCount / checks.length) * 100);

  return { score, checks };
}
