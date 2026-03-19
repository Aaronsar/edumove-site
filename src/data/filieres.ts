// =============================================================================
// Filiere (Field of Study) Reference Data — EduMove
// =============================================================================

import type { FiliereSlug } from "./universities";

export interface Filiere {
  /** URL-friendly identifier matching the FiliereSlug type. */
  slug: FiliereSlug;
  /** Display name in French. */
  name: string;
  /** Longer descriptive name. */
  fullName: string;
  /** Icon slug for FiliereIcon (replaces emoji). */
  icon: string;
  /** Short description (1-2 sentences) for cards / hero sections. */
  description: string;
  /** Typical duration range across partner universities (e.g. "3-6 ans"). */
  durationRange: string;
  /** Keywords useful for search / SEO. */
  keywords: string[];
  /** Colour used in the UI for badges, borders, etc. (Tailwind class name). */
  color: string;
}

export const filieres: Filiere[] = [
  {
    slug: "medecine",
    name: "M\u00E9decine",
    fullName: "\u00C9tudes de M\u00E9decine",
    icon: "medecine",
    description:
      "Devenez m\u00E9decin en Europe avec un dipl\u00F4me reconnu dans toute l\u2019Union europ\u00E9enne. Formations de 6 ans accessibles sans concours PASS/LAS.",
    durationRange: "6 ans",
    keywords: [
      "m\u00E9decine",
      "m\u00E9decin",
      "chirurgie",
      "sant\u00E9",
      "PASS",
      "LAS",
    ],
    color: "violet",
  },
  {
    slug: "dentaire",
    name: "Dentaire",
    fullName: "\u00C9tudes d\u2019Odontologie / Dentaire",
    icon: "dentaire",
    description:
      "Acc\u00E9dez aux \u00E9tudes dentaires en Espagne ou en Italie sans concours. Formations de 5 \u00E0 6 ans avec dipl\u00F4me reconnu UE.",
    durationRange: "5\u20136 ans",
    keywords: [
      "dentaire",
      "odontologie",
      "dentiste",
      "chirurgien-dentiste",
    ],
    color: "violet",
  },
  {
    slug: "kinesitherapie",
    name: "Kin\u00E9sith\u00E9rapie",
    fullName: "\u00C9tudes de Kin\u00E9sith\u00E9rapie / Physioth\u00E9rapie",
    icon: "kinesitherapie",
    description:
      "Formez-vous \u00E0 la kin\u00E9sith\u00E9rapie en Europe. Cursus de 3 \u00E0 4 ans, option la moins ch\u00E8re d\u00E8s 9\u00A0420\u00A0\u20AC/an.",
    durationRange: "3\u20134 ans",
    keywords: [
      "kin\u00E9sith\u00E9rapie",
      "kin\u00E9",
      "physioth\u00E9rapie",
      "r\u00E9\u00E9ducation",
    ],
    color: "violet",
  },
  {
    slug: "pharmacie",
    name: "Pharmacie",
    fullName: "\u00C9tudes de Pharmacie",
    icon: "pharmacie",
    description:
      "Poursuivez des \u00E9tudes de pharmacie en Italie ou en Espagne. Admission sur dossier ou entretien, sans concours.",
    durationRange: "5 ans",
    keywords: [
      "pharmacie",
      "pharmacien",
      "m\u00E9dicaments",
      "officine",
    ],
    color: "violet",
  },
  {
    slug: "veterinaire",
    name: "V\u00E9t\u00E9rinaire",
    fullName: "\u00C9tudes V\u00E9t\u00E9rinaires",
    icon: "veterinaire",
    description:
      "Int\u00E9grez une formation v\u00E9t\u00E9rinaire \u00E0 Madrid avec l\u2019Universidad Europea. 5 ans, admission via PE.",
    durationRange: "5 ans",
    keywords: [
      "v\u00E9t\u00E9rinaire",
      "v\u00E9to",
      "animaux",
      "sciences animales",
    ],
    color: "orange",
  },
  {
    slug: "prepa-dentaire",
    name: "Pr\u00E9pa Dentaire",
    fullName: "Ann\u00E9e pr\u00E9paratoire Dentaire",
    icon: "prepa-dentaire",
    description:
      "Ann\u00E9e pr\u00E9paratoire en anglais \u00E0 Alicante avant d\u2019int\u00E9grer le cursus dentaire de 5 ans. Aucun test d\u2019entr\u00E9e, B2 anglais requis.",
    durationRange: "1 + 5 ans",
    keywords: [
      "pr\u00E9pa",
      "pr\u00E9paratoire",
      "dentaire",
      "gateway",
      "foundation",
    ],
    color: "violet",
  },
];

/** Look up a filiere by its slug. */
export function getFiliereBySlug(slug: FiliereSlug): Filiere | undefined {
  return filieres.find((f) => f.slug === slug);
}

/** All filiere slugs for iteration / routing. */
export const allFiliereSlugs: FiliereSlug[] = filieres.map((f) => f.slug);
