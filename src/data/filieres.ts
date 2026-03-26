// =============================================================================
// Filiere (Field of Study) Reference Data — Edumove
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
    name: "Médecine",
    fullName: "Études de Médecine en Europe sans PASS ni LAS",
    icon: "medecine",
    description:
      "Devenez médecin en Europe avec un diplôme reconnu en France. Formations de 6 ans en Espagne et en Italie, accessibles sans concours PASS/LAS. Financement à partir de 75 000 €.",
    durationRange: "6 ans",
    keywords: [
      "études médecine europe",
      "médecine sans pass",
      "médecine espagne",
      "médecine italie",
      "devenir médecin europe",
    ],
    color: "violet",
  },
  {
    slug: "dentaire",
    name: "Dentaire",
    fullName: "Études Dentaires en Europe sans Concours",
    icon: "dentaire",
    description:
      "Devenez chirurgien-dentiste en Europe avec un diplôme reconnu dans toute l'UE. Formations de 5 à 6 ans en Espagne et en Italie, sans passer par le PASS ou le LAS.",
    durationRange: "5–6 ans",
    keywords: [
      "études dentaires europe",
      "dentaire sans concours",
      "dentaire espagne",
      "dentaire italie",
      "chirurgien-dentiste europe",
    ],
    color: "violet",
  },
  {
    slug: "kinesitherapie",
    name: "Kinésithérapie",
    fullName: "Études de Kinésithérapie en Europe sans PASS",
    icon: "kinesitherapie",
    description:
      "Devenez kinésithérapeute en Europe avec un diplôme reconnu en France. Cursus de 4 ans en Espagne et en Italie, admission sur dossier sans concours. Dès 9 420 €/an.",
    durationRange: "3–4 ans",
    keywords: [
      "études kiné europe",
      "kinésithérapie sans pass",
      "kiné espagne",
      "kiné italie",
      "devenir kiné europe",
    ],
    color: "violet",
  },
  {
    slug: "pharmacie",
    name: "Pharmacie",
    fullName: "Études de Pharmacie en Europe sans Concours",
    icon: "pharmacie",
    description:
      "Devenez pharmacien en Europe avec un diplôme reconnu dans toute l'UE. Formations de 5 ans en Espagne et en Italie, admission sur dossier sans passer par le PASS.",
    durationRange: "5 ans",
    keywords: [
      "études pharmacie europe",
      "pharmacie sans concours",
      "pharmacie espagne",
      "pharmacie italie",
      "devenir pharmacien europe",
    ],
    color: "violet",
  },
  {
    slug: "veterinaire",
    name: "Vétérinaire",
    fullName: "Études Vétérinaires en Europe sans Concours",
    icon: "veterinaire",
    description:
      "Devenez vétérinaire en Europe avec un diplôme reconnu dans toute l'UE. Formation de 5 ans à la Universidad Europea de Madrid, admission via test PE.",
    durationRange: "5 ans",
    keywords: [
      "études vétérinaires europe",
      "vétérinaire sans concours",
      "vétérinaire espagne",
      "devenir vétérinaire europe",
    ],
    color: "orange",
  },
  {
    slug: "prepa-dentaire",
    name: "Prépa Dentaire",
    fullName: "Année Préparatoire Dentaire en Espagne",
    icon: "prepa-dentaire",
    description:
      "Préparez votre entrée en cursus dentaire avec une année préparatoire à Alicante. Programme en anglais, aucun test d'entrée, accès direct au cursus de 5 ans.",
    durationRange: "1 + 5 ans",
    keywords: [
      "prépa dentaire espagne",
      "année préparatoire dentaire",
      "gateway dentaire",
      "prépa dentaire alicante",
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
