// =============================================================================
// University Partner Data — EduMove
// =============================================================================

// ---------------------------------------------------------------------------
// Type Definitions
// ---------------------------------------------------------------------------

export type FiliereSlug =
  | "medecine"
  | "dentaire"
  | "kinesitherapie"
  | "pharmacie"
  | "veterinaire"
  | "prepa-dentaire";

export type UniversitySlug = "link" | "ucjc" | "ue";

export type CampusCity =
  | "Rome"
  | "Madrid"
  | "Malaga"
  | "Valence"
  | "Alicante"
  | "Canaries";

export type Language =
  | "Italien"
  | "Espagnol"
  | "Anglais"
  | "Francais"
  | "Espagnol+Anglais"
  | "Francais+Espagnol+Anglais";

export type AdmissionType =
  | "test-qcm"
  | "entretien"
  | "pe-4-epreuves"
  | "dossier"
  | "pe-4-epreuves-francais";

export interface AdmissionStep {
  /** Step number (1-based). */
  step: number;
  /** Short label for the step. */
  label: string;
  /** Longer description of what happens at this step. */
  description: string;
}

export interface AdmissionProcess {
  /** Ordered list of steps the student goes through. */
  steps: AdmissionStep[];
  /** Extra notes about the process (e.g. "Pharmacie skips steps 2-3"). */
  notes?: string;
}

export interface Program {
  /** Which filiere this program belongs to. */
  filiere: FiliereSlug;
  /** Campus city. */
  campus: CampusCity;
  /** Duration in years. */
  durationYears: number;
  /** Tuition per year in euros. */
  tuitionPerYear: number;
  /** Total cost over the full program in euros. */
  totalCost: number;
  /** Teaching language(s). */
  language: Language;
  /** Type of admission selection. */
  admissionType: AdmissionType;
  /** Human-readable description of the admission method. */
  admissionDescription: string;
  /** Cost of the admission test in euros (0 if none). */
  testFee: number;
  /** Minimum average grade required (e.g. "16-17/20"), or null if none. */
  minimumGrade: string | null;
  /** Required bac specialities (e.g. "2 spe sci"), or null if none. */
  requiredSpecialities: string | null;
  /** Official diploma name. */
  diploma?: string;
  /** Whether the program is full / complet for the current intake. */
  isFull?: boolean;
  /** Whether this is part of the PE (Prueba Especifica) track. */
  isPE?: boolean;
  /** Extra notes (e.g. "OPTION LA MOINS CHERE"). */
  note?: string;
}

export interface University {
  /** URL-friendly identifier. */
  slug: UniversitySlug;
  /** Full official name. */
  name: string;
  /** Short display name. */
  shortName: string;
  /** Country. */
  country: string;
  /** Country flag emoji. */
  countryFlag: string;
  /** List of campus cities. */
  campuses: CampusCity[];
  /** Primary teaching language(s). */
  languages: string;
  /** Linguistic prerequisites description. */
  linguisticPrerequisite: string;
  /** Deposit required after acceptance (euros), or null if not applicable. */
  depositAfterAcceptance: number | null;
  /** Admission test fee in euros (global — individual programs may override). */
  testFee: number;
  /** All programs offered by this university. */
  programs: Program[];
  /** Description of the admission process. */
  admissionProcess: AdmissionProcess;
}

// ---------------------------------------------------------------------------
// LINK Campus University — Rome, Italy
// ---------------------------------------------------------------------------

const linkCampusUniversity: University = {
  slug: "link",
  name: "LINK Campus University",
  shortName: "LINK",
  country: "Italie",
  countryFlag: "\u{1F1EE}\u{1F1F9}",
  campuses: ["Rome"],
  languages: "Italien (cours d\u2019italien intensif inclus 1\u00E8re ann\u00E9e)",
  linguisticPrerequisite: "Aucun",
  depositAfterAcceptance: null,
  testFee: 200,
  programs: [
    {
      filiere: "medecine",
      campus: "Rome",
      durationYears: 6,
      tuitionPerYear: 19_800,
      totalCost: 118_800,
      language: "Italien",
      admissionType: "test-qcm",
      admissionDescription:
        "Test QCM en fran\u00E7ais portant sur 5 mati\u00E8res",
      testFee: 200,
      minimumGrade: null,
      requiredSpecialities: null,
      diploma: "Laurea in Medicina e Chirurgia (reconnu UE)",
    },
    {
      filiere: "dentaire",
      campus: "Rome",
      durationYears: 6,
      tuitionPerYear: 19_800,
      totalCost: 118_800,
      language: "Italien",
      admissionType: "test-qcm",
      admissionDescription:
        "Test QCM en fran\u00E7ais portant sur 5 mati\u00E8res",
      testFee: 200,
      minimumGrade: null,
      requiredSpecialities: null,
      diploma: "Laurea in Odontoiatria (reconnu UE)",
    },
    {
      filiere: "kinesitherapie",
      campus: "Rome",
      durationYears: 3,
      tuitionPerYear: 11_900,
      totalCost: 35_700,
      language: "Italien",
      admissionType: "test-qcm",
      admissionDescription:
        "Test QCM en fran\u00E7ais portant sur 5 mati\u00E8res",
      testFee: 200,
      minimumGrade: null,
      requiredSpecialities: null,
      diploma: "Laurea in Fisioterapia (reconnu UE)",
    },
    {
      filiere: "pharmacie",
      campus: "Rome",
      durationYears: 5,
      tuitionPerYear: 7_900,
      totalCost: 39_500,
      language: "Italien",
      admissionType: "dossier",
      admissionDescription: "Admission sur dossier (pas de test)",
      testFee: 0,
      minimumGrade: null,
      requiredSpecialities: null,
      diploma: "Laurea in Farmacia (reconnu UE)",
    },
  ],
  admissionProcess: {
    steps: [
      {
        step: 1,
        label: "Candidature",
        description:
          "Remplir le formulaire de candidature et fournir une pi\u00E8ce d\u2019identit\u00E9.",
      },
      {
        step: 2,
        label: "Paiement du test",
        description: "R\u00E9gler les frais du test d\u2019admission (200\u00A0\u20AC).",
      },
      {
        step: 3,
        label: "Test \u00E0 Paris",
        description:
          "Passer le test QCM portant sur 5 mati\u00E8res \u00E0 Paris (15/04/2026).",
      },
      {
        step: 4,
        label: "R\u00E9sultats",
        description:
          "R\u00E9ception des r\u00E9sultats sous quelques jours.",
      },
      {
        step: 5,
        label: "Inscription",
        description:
          "Validation de l\u2019inscription et paiement du 1er acompte.",
      },
    ],
    notes:
      "Pharmacie : pas de test, admission sur dossier (les \u00E9tapes 2 et 3 sont saut\u00E9es).",
  },
};

// ---------------------------------------------------------------------------
// UCJC — Madrid, Spain
// ---------------------------------------------------------------------------

const ucjcUniversity: University = {
  slug: "ucjc",
  name: "Universidad Camilo Jos\u00E9 Cela",
  shortName: "UCJC",
  country: "Espagne",
  countryFlag: "\u{1F1EA}\u{1F1F8}",
  campuses: ["Madrid"],
  languages: "Espagnol",
  linguisticPrerequisite:
    "Attestation d\u2019espagnol appr\u00E9ci\u00E9e (certificat e-learning accept\u00E9)",
  depositAfterAcceptance: null,
  testFee: 0,
  programs: [
    {
      filiere: "medecine",
      campus: "Madrid",
      durationYears: 0,
      tuitionPerYear: 0,
      totalCost: 0,
      language: "Espagnol",
      admissionType: "entretien",
      admissionDescription: "COMPLET pour 2026-2027",
      testFee: 0,
      minimumGrade: null,
      requiredSpecialities: null,
      isFull: true,
    },
    {
      filiere: "dentaire",
      campus: "Madrid",
      durationYears: 5,
      tuitionPerYear: 18_420,
      totalCost: 92_100,
      language: "Espagnol",
      admissionType: "entretien",
      admissionDescription: "Entretien seul (visio ou pr\u00E9sentiel)",
      testFee: 0,
      minimumGrade: null,
      requiredSpecialities: "2 sp\u00E9cialit\u00E9s scientifiques requises",
    },
    {
      filiere: "pharmacie",
      campus: "Madrid",
      durationYears: 5,
      tuitionPerYear: 10_140,
      totalCost: 50_700,
      language: "Espagnol",
      admissionType: "entretien",
      admissionDescription: "Entretien seul (visio ou pr\u00E9sentiel)",
      testFee: 0,
      minimumGrade: null,
      requiredSpecialities: null,
    },
    {
      filiere: "kinesitherapie",
      campus: "Madrid",
      durationYears: 4,
      tuitionPerYear: 9_420,
      totalCost: 37_680,
      language: "Espagnol",
      admissionType: "entretien",
      admissionDescription: "Entretien seul (visio ou pr\u00E9sentiel)",
      testFee: 0,
      minimumGrade: null,
      requiredSpecialities: null,
      note: "OPTION LA MOINS CH\u00C8RE",
    },
  ],
  admissionProcess: {
    steps: [
      {
        step: 1,
        label: "Candidature",
        description:
          "Remplir le formulaire, joindre une lettre de motivation et une pi\u00E8ce d\u2019identit\u00E9.",
      },
      {
        step: 2,
        label: "Entretien",
        description:
          "Entretien en visio ou en pr\u00E9sentiel portant sur la motivation et le projet professionnel.",
      },
      {
        step: 3,
        label: "R\u00E9sultats",
        description: "R\u00E9ponse sous 1 semaine.",
      },
      {
        step: 4,
        label: "Paiement",
        description:
          "1 semaine pour r\u00E9gler le 1er versement.",
      },
      {
        step: 5,
        label: "Inscription",
        description:
          "Validation du bac et inscription d\u00E9finitive.",
      },
    ],
    notes: "Aucun test \u00E9crit.",
  },
};

// ---------------------------------------------------------------------------
// Universidad Europea (UE) — Spain (5 campuses)
// ---------------------------------------------------------------------------

const universidadEuropea: University = {
  slug: "ue",
  name: "Universidad Europea",
  shortName: "Universidad Europea",
  country: "Espagne",
  countryFlag: "\u{1F1EA}\u{1F1F8}",
  campuses: ["Madrid", "Malaga", "Valence", "Alicante", "Canaries"],
  languages: "Espagnol, Anglais, Fran\u00E7ais (Kin\u00E9 Madrid)",
  linguisticPrerequisite:
    "Pas de pr\u00E9requis sauf Pr\u00E9pa Dentaire (B2 anglais requis)",
  depositAfterAcceptance: 2_500,
  testFee: 0,
  programs: [
    // --- M\u00E9decine PE -----------------------------------------------------------
    {
      filiere: "medecine",
      campus: "Madrid",
      durationYears: 6,
      tuitionPerYear: 21_480,
      totalCost: 128_880,
      language: "Espagnol",
      admissionType: "pe-4-epreuves",
      admissionDescription: "PE 4 \u00E9preuves",
      testFee: 0,
      minimumGrade: "16-17/20",
      requiredSpecialities: "2 sp\u00E9cialit\u00E9s scientifiques",
      isPE: true,
    },
    {
      filiere: "medecine",
      campus: "Canaries",
      durationYears: 6,
      tuitionPerYear: 21_480,
      totalCost: 128_880,
      language: "Espagnol",
      admissionType: "pe-4-epreuves",
      admissionDescription: "PE 4 \u00E9preuves",
      testFee: 0,
      minimumGrade: "16-17/20",
      requiredSpecialities: "2 sp\u00E9cialit\u00E9s scientifiques",
      isPE: true,
    },

    // --- Dentaire PE -------------------------------------------------------------
    {
      filiere: "dentaire",
      campus: "Madrid",
      durationYears: 5,
      tuitionPerYear: 20_820,
      totalCost: 104_100,
      language: "Espagnol+Anglais",
      admissionType: "pe-4-epreuves",
      admissionDescription: "PE 4 \u00E9preuves",
      testFee: 0,
      minimumGrade: "15-16/20",
      requiredSpecialities: "2 sp\u00E9cialit\u00E9s scientifiques",
      isPE: true,
    },
    {
      filiere: "dentaire",
      campus: "Malaga",
      durationYears: 5,
      tuitionPerYear: 19_200,
      totalCost: 96_000,
      language: "Espagnol+Anglais",
      admissionType: "pe-4-epreuves",
      admissionDescription: "PE 4 \u00E9preuves",
      testFee: 0,
      minimumGrade: "15-16/20",
      requiredSpecialities: "2 sp\u00E9cialit\u00E9s scientifiques",
      isPE: true,
    },
    {
      filiere: "dentaire",
      campus: "Valence",
      durationYears: 5,
      tuitionPerYear: 20_821,
      totalCost: 104_105,
      language: "Espagnol+Anglais",
      admissionType: "pe-4-epreuves",
      admissionDescription: "PE 4 \u00E9preuves",
      testFee: 0,
      minimumGrade: "15-16/20",
      requiredSpecialities: "2 sp\u00E9cialit\u00E9s scientifiques",
      isPE: true,
    },
    {
      filiere: "dentaire",
      campus: "Alicante",
      durationYears: 5,
      tuitionPerYear: 20_821,
      totalCost: 104_105,
      language: "Espagnol+Anglais",
      admissionType: "pe-4-epreuves",
      admissionDescription: "PE 4 \u00E9preuves",
      testFee: 0,
      minimumGrade: "15-16/20",
      requiredSpecialities: "2 sp\u00E9cialit\u00E9s scientifiques",
      isPE: true,
    },
    {
      filiere: "dentaire",
      campus: "Canaries",
      durationYears: 5,
      tuitionPerYear: 20_820,
      totalCost: 104_100,
      language: "Espagnol",
      admissionType: "pe-4-epreuves",
      admissionDescription: "PE 4 \u00E9preuves",
      testFee: 0,
      minimumGrade: "15-16/20",
      requiredSpecialities: "2 sp\u00E9cialit\u00E9s scientifiques",
      isPE: true,
    },

    // --- Kin\u00E9sith\u00E9rapie (Hors PE sauf FR Madrid) ---------------------------------
    {
      filiere: "kinesitherapie",
      campus: "Madrid",
      durationYears: 4,
      tuitionPerYear: 10_020,
      totalCost: 40_080,
      language: "Francais+Espagnol+Anglais",
      admissionType: "pe-4-epreuves-francais",
      admissionDescription:
        "Parcours fran\u00E7ais : PE 4 \u00E9preuves ; autres langues : pas de test",
      testFee: 0,
      minimumGrade: "13-14/20",
      requiredSpecialities: null,
      isPE: false,
      note: "Parcours fran\u00E7ais soumis au PE",
    },
    {
      filiere: "kinesitherapie",
      campus: "Malaga",
      durationYears: 4,
      tuitionPerYear: 10_020,
      totalCost: 40_080,
      language: "Espagnol",
      admissionType: "dossier",
      admissionDescription: "Pas de test, admission sur dossier",
      testFee: 0,
      minimumGrade: "13-14/20",
      requiredSpecialities: null,
      isPE: false,
    },
    {
      filiere: "kinesitherapie",
      campus: "Valence",
      durationYears: 4,
      tuitionPerYear: 10_080,
      totalCost: 40_320,
      language: "Espagnol",
      admissionType: "dossier",
      admissionDescription: "Pas de test, admission sur dossier",
      testFee: 0,
      minimumGrade: "13-14/20",
      requiredSpecialities: null,
      isPE: false,
    },
    {
      filiere: "kinesitherapie",
      campus: "Alicante",
      durationYears: 4,
      tuitionPerYear: 10_080,
      totalCost: 40_320,
      language: "Espagnol",
      admissionType: "dossier",
      admissionDescription: "Pas de test, admission sur dossier",
      testFee: 0,
      minimumGrade: "13-14/20",
      requiredSpecialities: null,
      isPE: false,
    },
    {
      filiere: "kinesitherapie",
      campus: "Canaries",
      durationYears: 4,
      tuitionPerYear: 10_020,
      totalCost: 40_080,
      language: "Espagnol",
      admissionType: "dossier",
      admissionDescription: "Pas de test, admission sur dossier",
      testFee: 0,
      minimumGrade: "13-14/20",
      requiredSpecialities: null,
      isPE: false,
    },

    // --- Pharmacie (Hors PE) ---------------------------------------------------
    {
      filiere: "pharmacie",
      campus: "Madrid",
      durationYears: 5,
      tuitionPerYear: 12_120,
      totalCost: 60_600,
      language: "Espagnol",
      admissionType: "dossier",
      admissionDescription: "Pas de test, admission sur dossier",
      testFee: 0,
      minimumGrade: null,
      requiredSpecialities: null,
      isPE: false,
    },

    // --- V\u00E9t\u00E9rinaire (PE) ------------------------------------------------------
    {
      filiere: "veterinaire",
      campus: "Madrid",
      durationYears: 5,
      tuitionPerYear: 19_500,
      totalCost: 97_500,
      language: "Espagnol",
      admissionType: "pe-4-epreuves",
      admissionDescription: "PE 4 \u00E9preuves",
      testFee: 0,
      minimumGrade: "14-15/20",
      requiredSpecialities: "2 sp\u00E9cialit\u00E9s scientifiques",
      isPE: true,
    },

    // --- Pr\u00E9pa Dentaire (Hors PE) -----------------------------------------------
    {
      filiere: "prepa-dentaire",
      campus: "Alicante",
      durationYears: 6, // 1 an pr\u00E9pa + 5 ans dentaire
      tuitionPerYear: 17_000,
      totalCost: 102_000,
      language: "Anglais",
      admissionType: "dossier",
      admissionDescription: "Pas de test, admission sur dossier",
      testFee: 0,
      minimumGrade: null,
      requiredSpecialities: null,
      isPE: false,
      note: "1 an de pr\u00E9pa + 5 ans de dentaire. B2 anglais requis.",
    },
  ],
  admissionProcess: {
    steps: [
      {
        step: 1,
        label: "Candidature",
        description:
          "Envoi des bulletins scolaires, pi\u00E8ce d\u2019identit\u00E9 et rapport technique.",
      },
      {
        step: 2,
        label: "Paiement du test",
        description: "R\u00E9gler les frais d\u2019inscription au test PE.",
      },
      {
        step: 3,
        label: "Test PE",
        description:
          "Passer les 4 \u00E9preuves en ligne ou en pr\u00E9sentiel.",
      },
      {
        step: 4,
        label: "R\u00E9sultats",
        description:
          "R\u00E9ception des r\u00E9sultats sous 48\u00A0h par e-mail.",
      },
      {
        step: 5,
        label: "Acompte",
        description:
          "Versement de l\u2019acompte de 2\u00A0500\u00A0\u20AC sous 2 jours.",
      },
    ],
    notes:
      "Fili\u00E8res Hors PE : les \u00E9tapes 2 et 3 sont remplac\u00E9es par une admission sur dossier.",
  },
};

// ---------------------------------------------------------------------------
// Aggregated export
// ---------------------------------------------------------------------------

export const universities: University[] = [
  linkCampusUniversity,
  ucjcUniversity,
  universidadEuropea,
];

/** Look up a university by its slug. */
export function getUniversityBySlug(
  slug: UniversitySlug
): University | undefined {
  return universities.find((u) => u.slug === slug);
}

/** Get every program across all universities for a given filiere. */
export function getProgramsByFiliere(filiere: FiliereSlug): {
  university: University;
  program: Program;
}[] {
  const results: { university: University; program: Program }[] = [];
  for (const uni of universities) {
    for (const prog of uni.programs) {
      if (prog.filiere === filiere) {
        results.push({ university: uni, program: prog });
      }
    }
  }
  return results;
}

/** Get every program offered on a specific campus across all universities. */
export function getProgramsByCampus(campus: CampusCity): {
  university: University;
  program: Program;
}[] {
  const results: { university: University; program: Program }[] = [];
  for (const uni of universities) {
    for (const prog of uni.programs) {
      if (prog.campus === campus) {
        results.push({ university: uni, program: prog });
      }
    }
  }
  return results;
}

/** Return the cheapest program for a given filiere (by total cost). */
export function getCheapestProgram(filiere: FiliereSlug):
  | { university: University; program: Program }
  | undefined {
  const all = getProgramsByFiliere(filiere).filter((p) => !p.program.isFull);
  if (all.length === 0) return undefined;
  return all.reduce((cheapest, current) =>
    current.program.totalCost < cheapest.program.totalCost ? current : cheapest
  );
}
