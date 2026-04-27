import type { ProgramDetail } from "@/data/program-details";

/**
 * Injects Course JSON-LD structured data for a study program.
 * Eligible for Google's "Course info" rich results / carousel.
 * Docs: https://developers.google.com/search/docs/appearance/structured-data/course
 */

const SITE_URL = "https://www.edumove.fr";

// Map university short names to canonical names + websites for the provider field
const UNIVERSITY_INFO: Record<string, { name: string; url: string; sameAs: string }> = {
  UE: {
    name: "Universidad Europea",
    url: "https://universidadeuropea.com",
    sameAs: "https://en.wikipedia.org/wiki/Universidad_Europea_de_Madrid",
  },
  UCJC: {
    name: "Universidad Camilo José Cela",
    url: "https://www.ucjc.edu",
    sameAs: "https://en.wikipedia.org/wiki/Camilo_Jos%C3%A9_Cela_University",
  },
  LINK: {
    name: "Link Campus University",
    url: "https://www.unilink.it",
    sameAs: "https://en.wikipedia.org/wiki/Link_Campus_University",
  },
};

function parsePriceToNumber(price: string): number | null {
  // "104 100 €" → 104100  ; "20 820 €" → 20820
  const digits = price.replace(/[^\d]/g, "");
  if (!digits) return null;
  const n = parseInt(digits, 10);
  return Number.isFinite(n) ? n : null;
}

function parseDurationToISO(duration: string): string | null {
  // "5 ans" → "P5Y" ; "6 ans" → "P6Y"
  const match = duration.match(/(\d+)\s*ans?/i);
  if (!match) return null;
  return `P${match[1]}Y`;
}

function parseLanguagesToBcp47(language: string): string[] {
  // "Espagnol / Anglais" → ["es", "en"]
  const map: Record<string, string> = {
    espagnol: "es",
    anglais: "en",
    italien: "it",
    français: "fr",
    francais: "fr",
  };
  return language
    .toLowerCase()
    .split(/[\/,&+]/)
    .map((s) => s.trim())
    .map((s) => map[s])
    .filter((x): x is string => Boolean(x));
}

export default function CourseJsonLd({ detail }: { detail: ProgramDetail }) {
  const provider = UNIVERSITY_INFO[detail.universityShort] ?? {
    name: detail.university,
    url: SITE_URL,
    sameAs: SITE_URL,
  };

  const totalPrice = parsePriceToNumber(detail.totalCost);
  const yearlyPrice = parsePriceToNumber(detail.costPerYear);
  const isoDuration = parseDurationToISO(detail.duration);
  const languages = parseLanguagesToBcp47(detail.language);
  const primaryLanguage = languages[0] ?? "es";

  const courseUrl = `${SITE_URL}/formations/${detail.filiereSlug}/${detail.slug}`;
  const courseName = `${detail.filiere} – ${detail.universityShort} ${detail.city}`;

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: courseName,
    description: detail.presentation,
    url: courseUrl,
    provider: {
      "@type": "CollegeOrUniversity",
      name: provider.name,
      url: provider.url,
      sameAs: provider.sameAs,
    },
    inLanguage: languages.length > 0 ? languages : ["es"],
    educationalLevel: "Higher Education",
    educationalCredentialAwarded: detail.diploma,
    coursePrerequisites: detail.speRequired,
    about: detail.filiere,
    teaches: detail.filiere,
    ...(isoDuration ? { timeRequired: isoDuration } : {}),
  };

  // hasCourseInstance is required for Google rich results
  jsonLd.hasCourseInstance = {
    "@type": "CourseInstance",
    courseMode: "InPerson",
    inLanguage: primaryLanguage,
    ...(isoDuration ? { courseWorkload: isoDuration } : {}),
    location: {
      "@type": "Place",
      name: `${provider.name} – ${detail.city}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: detail.city,
        addressCountry: detail.country === "Espagne" ? "ES" : detail.country === "Italie" ? "IT" : detail.country,
      },
    },
  };

  // offers: full program total cost + per-year breakdown
  if (totalPrice !== null) {
    const offers: Record<string, unknown>[] = [
      {
        "@type": "Offer",
        category: "Tuition",
        price: totalPrice,
        priceCurrency: "EUR",
        url: courseUrl,
        description: `Coût total estimé du cursus complet (${detail.duration})`,
      },
    ];
    if (yearlyPrice !== null) {
      offers.push({
        "@type": "Offer",
        category: "Tuition",
        price: yearlyPrice,
        priceCurrency: "EUR",
        url: courseUrl,
        description: "Frais de scolarité annuels",
      });
    }
    jsonLd.offers = offers;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
