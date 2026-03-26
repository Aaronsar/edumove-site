export interface YearProgram {
  year: string;
  theme: string;
  description: string;
  subjects: string[];
}

export interface StudentLife {
  city: string;
  highlights: string[];
  airport: string;
  flightTime: string;
}

export interface ProgramDetail {
  slug: string;
  filiere: string;
  filiereSlug: string;
  university: string;
  universityShort: string;
  universitySlug: string;
  city: string;
  country: string;
  countryFlag: string;
  presentation: string;
  language: string;
  duration: string;
  costPerYear: string;
  totalCost: string;
  admission: string;
  averageMin: string;
  speRequired: string;
  diploma: string;
  program: YearProgram[];
  admissionSteps: string[];
  studentLife: StudentLife;
  isCheapest?: boolean;
  isComplete?: boolean;
  heroImages?: string[];
}

const defaultAdmissionSteps = [
  "Vous remplissez le formulaire — un conseiller vous rappelle sous 24h pour faire le point",
  "On étudie votre dossier ensemble et on évalue la faisabilité",
  "Votre conseiller monte le dossier d'admission avec vous et l'envoie à l'université",
  "Préparation au test d'entrée et à l'entretien : on vous coache jusqu'au jour J",
  "Admission confirmée + mise en place du financement (prêt LCL à partir de 75 000 €)",
  "Rentrée : on vous aide aussi pour le logement, les papiers et l'installation sur place",
];

/* Vie étudiante — contenu enrichi depuis site edumove 2026.docx */
const madridLife: StudentLife = {
  city: "Madrid",
  highlights: [
    "Le campus de Villaviciosa de Odón est spacieux, moderne et sécurisé — idéal pour se concentrer sur des études exigeantes.",
    "Même si le campus est en périphérie, Madrid centre est accessible rapidement en transports en commun (bus, cercanías).",
    "L'aéroport Madrid-Barajas (MAD) est à 30-40 min du campus.",
    "Paris-Madrid en vol direct : 1h50 à 2h05, avec des dizaines de vols par jour.",
  ],
  airport: "Aéroport Madrid-Barajas (MAD) à 30-40 minutes du campus",
  flightTime: "Vol direct Paris-Madrid : 1h50 à 2h05",
};

const malagaLife: StudentLife = {
  city: "Málaga",
  highlights: [
    "Málaga, c'est le soleil toute l'année et la mer à côté — difficile de trouver mieux pour la qualité de vie étudiante.",
    "Le campus est neuf, pensé pour les études de santé, avec des équipements récents.",
    "L'aéroport Málaga-Costa del Sol (AGP) est à 10-15 min seulement.",
    "Vol direct depuis Paris en 2h20. Les familles viennent facilement le week-end.",
    "Le coût de la vie est nettement plus bas qu'en France (logement, courses, sorties).",
  ],
  airport: "Aéroport Málaga-Costa del Sol (AGP) à 10-15 minutes",
  flightTime: "Vol direct Paris-Málaga : environ 2h20",
};

const valenceLife: StudentLife = {
  city: "Valence",
  highlights: [
    "Valence combine le dynamisme d'une grande ville avec un rythme de vie plus calme que Madrid — parfait pour étudier sereinement.",
    "Campus moderne avec un encadrement académique rigoureux et des installations récentes.",
    "Aéroport de Valence (VLC) accessible en 15-20 min.",
    "Vol direct depuis Paris : 1h45 à 2h, ce qui permet de rentrer facilement en France.",
  ],
  airport: "Aéroport de Valence (VLC) à 15-20 minutes",
  flightTime: "Vol direct Paris-Valence : 1h45 à 2h00",
};

const alicanteLife: StudentLife = {
  city: "Alicante",
  highlights: [
    "Alicante, sur la Costa Blanca : une ville à taille humaine avec du soleil quasi permanent et la plage à deux pas.",
    "Le campus est récent, bien équipé pour les formations santé.",
    "Aéroport d'Alicante-Elche (ALC) à 15-20 min en voiture.",
    "Paris-Alicante en vol direct : environ 2h05, avec beaucoup de créneaux disponibles.",
    "Côté budget, les loyers et le quotidien sont plus abordables qu'en France.",
  ],
  airport: "Aéroport d'Alicante-Elche (ALC) à 15-20 minutes",
  flightTime: "Vol direct Paris-Alicante : environ 2h05",
};

const canariesLife: StudentLife = {
  city: "Canaries",
  highlights: [
    "Un climat subtropical permanent — il fait entre 18 et 28°C toute l'année.",
    "Campus moderne avec les équipements nécessaires aux études de santé.",
    "Un cadre de vie différent du continent, plus calme, entouré de nature.",
    "Les prix sont généralement plus bas que sur le continent espagnol.",
  ],
  airport: "Aéroports internationaux bien desservis depuis la France",
  flightTime: "Vol direct Paris-Canaries : environ 4h",
};

const romeLife: StudentLife = {
  city: "Rome",
  highlights: [
    "Étudier à Rome, c'est vivre dans une des villes les plus riches culturellement au monde — et ça change une vie étudiante.",
    "Le campus est bien situé, facile d'accès en transports en commun.",
    "Aéroport Rome-Fiumicino (FCO) à 30-35 min en voiture.",
    "Paris-Rome en vol direct : environ 2h. On rentre en France très facilement.",
    "Un cours d'italien intensif est inclus la première année — pas besoin de parler italien avant d'arriver.",
  ],
  airport: "Aéroport Rome-Fiumicino (FCO) à 30 minutes du centre",
  flightTime: "Vol direct Paris-Rome : environ 2h",
};

const ucjcMadridLife: StudentLife = {
  city: "Madrid",
  highlights: [
    "Le campus UCJC à Villafranca del Castillo est moderne, avec des cliniques dentaires de pointe intégrées — on y pratique dès les premières années.",
    "Madrid centre est accessible en transports, avec toute la vie culturelle et sociale que ça implique.",
    "Aéroport Madrid-Barajas (MAD) : comptez 45-60 min depuis le campus.",
    "Des dizaines de vols directs Paris-Madrid chaque jour, en environ 2h.",
  ],
  airport: "Aéroport Madrid-Barajas (MAD) à 45-60 minutes du campus",
  flightTime: "Vol direct Paris-Madrid : environ 2h",
};

// ============================================================
// DENTAIRE
// ============================================================

const dentaireUEMadrid: ProgramDetail = {
  slug: "ue-madrid",
  filiere: "Études Dentaires",
  filiereSlug: "dentaire",
  university: "Universidad Europea",
  universityShort: "UE",
  universitySlug: "universidad-europea",
  city: "Madrid",
  country: "Espagne",
  countryFlag: "",
  presentation:
    "Les études de Grado en Odontología à l'Université Européenne de Madrid offrent une formation solide et reconnue dans toute l'Union Européenne. Le cursus s'étend sur 5 ans dans un environnement moderne et sécurisé. Les étudiants bénéficient d'un encadrement clinique intensif dans la Clinique Universitaire Odontologique sur le campus, garantissant une préparation pratique de haut niveau. Votre diplôme sera reconnu en France sans équivalence.",
  language: "Espagnol / Anglais",
  duration: "5 ans",
  costPerYear: "20 820 €",
  totalCost: "104 100 €",
  admission: "PE — 4 épreuves",
  averageMin: "15-16/20",
  speRequired: "2 spécialités scientifiques requises",
  diploma: "Grado en Odontología (reconnu UE)",
  program: [
    { year: "1ère année", theme: "Sciences Fondamentales", description: "Acquisition des bases biologiques et médicales indispensables.", subjects: ["Anatomie Humaine et Physiologie", "Biochimie, Génétique et Biologie Moléculaire", "Biologie Cellulaire et Histologie", "Anatomie Odontologique et Introduction à la Clinique", "Épidémiologie, Santé Publique et Bio-statistiques", "Psychologie et Compétences en Communication"] },
    { year: "2ème année", theme: "Pathologie et Matériaux", description: "Étude des maladies et outils spécifiques à la dentisterie, pratique pré-clinique.", subjects: ["Pathologie Générale (médicale et chirurgicale)", "Pharmacologie", "Microbiologie Générale et Odontologique", "Biomatériaux et Équipements Odontologiques", "Radiologie et Technologie de l'Image en Odontologie", "Odontologie Préventive et Communautaire"] },
    { year: "3ème année", theme: "Pré-clinique et Disciplines Spécifiques I", description: "Transition vers l'environnement simulé et début des grandes disciplines dentaires.", subjects: ["Odontologie Conservatrice I (Soins, obturations)", "Prothèses I", "Orthodontie I", "Médecine Buccale", "Dysfonction Craniomandibulaire et Douleur Orofaciale", "Répercussion Orale des Maladies Systémiques"] },
    { year: "4ème année", theme: "Clinique avec Patients", description: "Pratique clinique avec de vrais patients dans les cliniques universitaires (plus de 900 heures).", subjects: ["Chirurgie Buccale II (avec pratique clinique)", "Parodontie", "Odontologie Pédiatrique (Pédodontie)", "Prothèses II", "Clinique Intégrée (gestion complète des cas)", "Endodontie"] },
    { year: "5ème année", theme: "Clinique Intégrée et Professionnalisation", description: "Intégration des compétences cliniques et préparation à l'exercice professionnel.", subjects: ["Clinique Intégrée (24 ECTS, gestion globale des patients)", "Chirurgie Maxillo-Faciale", "Clinique Intégrée avec Patients Spéciaux", "Cadre Légal et Déontologie Professionnelle", "Travail de Fin de Diplôme (TFG)", "Implantologie, Odontologie Digitale et Esthétique"] },
  ],
  heroImages: ["/images/universites/ue/ue-hospital-1.jpg", "/images/universites/ue/ue-salud-grado.jpg", "/images/universites/ue/ue-hospital-simulation.jpg", "/images/universites/ue/ue-campus-club.jpg"],
  admissionSteps: defaultAdmissionSteps,
  studentLife: madridLife,
};

const dentaireUEMalaga: ProgramDetail = {
  slug: "ue-malaga",
  filiere: "Études Dentaires",
  filiereSlug: "dentaire",
  university: "Universidad Europea",
  universityShort: "UE",
  universitySlug: "universidad-europea",
  city: "Málaga",
  country: "Espagne",
  countryFlag: "",
  presentation:
    "L'Universidad Europea de Málaga s'apprête à ouvrir son programme de Grado en Odontología dans un nouveau campus ultramoderne. Ce programme bénéficiera de l'expertise du réseau UEM, garantissant une formation de haute qualité reconnue en Europe. Le campus intégrera une Clinique Universitaire Odontologique de pointe, offrant une pratique clinique intensive et précoce.",
  language: "Espagnol / Anglais",
  duration: "5 ans",
  costPerYear: "19 200 €",
  totalCost: "96 000 €",
  admission: "PE — 4 épreuves",
  averageMin: "15-16/20",
  speRequired: "2 spécialités scientifiques requises",
  diploma: "Grado en Odontología (reconnu UE)",
  program: [
    { year: "1ère année", theme: "Sciences de la Santé et Introduction", description: "Fondations scientifiques et familiarisation avec le domaine.", subjects: ["Anatomie Humaine, Histologie", "Physiologie, Biochimie", "Anatomie Dentaire, Matériaux Dentaires I", "Compétences de Communication et d'Apprentissage"] },
    { year: "2ème année", theme: "Sciences Cliniques Fondamentales", description: "Processus pathologiques et outils spécifiques.", subjects: ["Pathologie Générale, Microbiologie", "Pharmacologie", "Radiologie, Santé Publique et Prévention", "Pratique Pré-clinique (Laboratoire de simulation)"] },
    { year: "3ème année", theme: "Disciplines Cliniques Initiales", description: "Début des disciplines clés et augmentation de la pratique simulée.", subjects: ["Odontologie Conservatrice, Endodontie", "Parodontologie, Prothèse Dentaire", "Clinique Intégrée I", "Début des Pratiques Cliniques (observation/assistance)"] },
    { year: "4ème année", theme: "Clinique avec Patients et Spécialités", description: "Immersion clinique intense, gestion de patients réels supervisée.", subjects: ["Chirurgie Orale I, Orthodontie", "Odontologie Pédiatrique (Pédodontie)", "Clinique Intégrée II (cas complexes)", "Plus de 1000 heures de pratique clinique"] },
    { year: "5ème année", theme: "Intégration et Professionnalisation", description: "Synthèse, gestion de cas avancés et préparation au marché du travail.", subjects: ["Clinique Intégrée III (Gestion multidisciplinaire)", "Implantologie, Esthétique Dentaire", "Déontologie, Droit et Gestion de Clinique", "Travail de Fin de Diplôme (TFG)"] },
  ],
  heroImages: ["/images/universites/ue/ue-hospital-2.jpg", "/images/universites/ue/ue-hospital-1.jpg", "/images/universites/ue/ue-salud-grado.jpg", "/images/universites/ue/ue-hospital-simulation.jpg"],
  admissionSteps: defaultAdmissionSteps,
  studentLife: malagaLife,
};

const dentaireUEValence: ProgramDetail = {
  slug: "ue-valence",
  filiere: "Études Dentaires",
  filiereSlug: "dentaire",
  university: "Universidad Europea",
  universityShort: "UE",
  universitySlug: "universidad-europea",
  city: "Valence",
  country: "Espagne",
  countryFlag: "",
  presentation:
    "Les études de Grado en Odontología à l'Universidad Europea de Valencia offrent une formation complète et reconnue. Le diplôme est reconnu en France sans problème. Le cursus met l'accent sur l'acquisition rapide de compétences pratiques grâce à sa propre Clinique Universitaire Odontologique.",
  language: "Espagnol / Anglais",
  duration: "5 ans",
  costPerYear: "20 821 €",
  totalCost: "104 105 €",
  admission: "PE — 4 épreuves",
  averageMin: "15-16/20",
  speRequired: "2 spécialités scientifiques requises",
  diploma: "Grado en Odontología (reconnu UE)",
  program: [
    { year: "1ère année", theme: "Fondamentaux Biomédicaux", description: "Sciences de base pour comprendre le corps humain.", subjects: ["Anatomie, Physiologie, Histologie", "Biochimie, Biologie Cellulaire, Génétique", "Introduction aux Sciences de la Santé"] },
    { year: "2ème année", theme: "Maladies et Matériaux", description: "Pathologie, pharmacologie et outils de la profession.", subjects: ["Pathologie Générale et Microbiologie", "Pharmacologie et Anesthésie", "Biomatériaux Dentaires et Équipement", "Radiologie et Imagerie en Odontologie"] },
    { year: "3ème année", theme: "Pratique Pré-clinique", description: "Début de la pratique simulée et des matières cliniques spécifiques.", subjects: ["Odontologie Préventive et Santé Publique", "Odontologie Restauratrice I / Conservatrice", "Prothèses I, Parodontologie I, Orthodontie I", "Introduction à la Pratique Clinique"] },
    { year: "4ème année", theme: "Pratique Clinique Avancée", description: "Forte augmentation des heures de pratique clinique avec de vrais patients.", subjects: ["Odontologie Restauratrice II / Endodontie", "Chirurgie Buccale et Pathologie Médico-chirurgicale", "Odontopédiatrie, Prothèses II", "Pratiques Cliniques pour Adultes et Enfants"] },
    { year: "5ème année", theme: "Clinique Intégrée et Professionnalisation", description: "Gestion de cas complexes et préparation à l'exercice.", subjects: ["Clinique Intégrée (soins multidisciplinaires)", "Orthodontie Avancée, Implantologie", "Médecine et Urgences dans la Clinique Dentaire", "TFG, Déontologie et Gestion de Clinique"] },
  ],
  heroImages: ["/images/universites/ue/ue-hospital-simulation.jpg", "/images/universites/ue/ue-hospital-3.jpg", "/images/universites/ue/ue-campus-club.jpg", "/images/universites/ue/ue-hospital-1.jpg"],
  admissionSteps: defaultAdmissionSteps,
  studentLife: valenceLife,
};

const dentaireUEAlicante: ProgramDetail = {
  slug: "ue-alicante",
  filiere: "Études Dentaires",
  filiereSlug: "dentaire",
  university: "Universidad Europea",
  universityShort: "UE",
  universitySlug: "universidad-europea",
  city: "Alicante",
  country: "Espagne",
  countryFlag: "",
  presentation:
    "L'Universidad Europea de Alicante est un centre universitaire dynamique sur la Costa Blanca, offrant le programme de Grado en Odontología dans des installations modernes. Le campus intègre une Clinique Universitaire Odontologique de pointe pour une pratique clinique intensive et précoce.",
  language: "Espagnol / Anglais",
  duration: "5 ans",
  costPerYear: "20 821 €",
  totalCost: "104 105 €",
  admission: "PE — 4 épreuves",
  averageMin: "15-16/20",
  speRequired: "2 spécialités scientifiques requises",
  diploma: "Grado en Odontología (reconnu UE)",
  heroImages: ["/images/universites/ue/ue-salud-grado.jpg", "/images/universites/ue/ue-hospital-4.jpg", "/images/universites/ue/ue-hospital-1.jpg", "/images/universites/ue/ue-hospital-simulation.jpg"],
  program: dentaireUEMalaga.program,
  admissionSteps: defaultAdmissionSteps,
  studentLife: alicanteLife,
};

const dentaireUECanaries: ProgramDetail = {
  slug: "ue-canaries",
  filiere: "Études Dentaires",
  filiereSlug: "dentaire",
  university: "Universidad Europea",
  universityShort: "UE",
  universitySlug: "universidad-europea",
  city: "Canaries",
  country: "Espagne",
  countryFlag: "",
  presentation:
    "Le programme de Grado en Odontología aux Canaries offre une formation d'excellence dans un cadre insulaire unique. Le diplôme est reconnu dans toute l'UE. Le cursus combine théorie et pratique clinique intensive.",
  language: "Espagnol",
  duration: "5 ans",
  costPerYear: "20 820 €",
  totalCost: "104 100 €",
  admission: "PE — 4 épreuves",
  averageMin: "15-16/20",
  speRequired: "2 spécialités scientifiques requises",
  diploma: "Grado en Odontología (reconnu UE)",
  heroImages: ["/images/universites/ue/ue-campus-club.jpg", "/images/universites/ue/ue-hospital-5.jpg", "/images/universites/ue/ue-salud-grado.jpg", "/images/universites/ue/ue-hospital-2.jpg"],
  program: dentaireUEMalaga.program,
  admissionSteps: defaultAdmissionSteps,
  studentLife: canariesLife,
};

const dentaireUCJC: ProgramDetail = {
  slug: "ucjc-madrid",
  filiere: "Études Dentaires",
  filiereSlug: "dentaire",
  university: "UCJC — Universidad Camilo José Cela",
  universityShort: "UCJC",
  universitySlug: "ucjc",
  city: "Madrid",
  country: "Espagne",
  countryFlag: "",
  presentation:
    "L'UCJC propose un programme de dentaire en 5 ans entièrement en espagnol, avec une admission simplifiée par entretien uniquement (pas de test écrit). Le campus moderne de Madrid offre un environnement professionnalisant. L'entretien peut se faire en visio.",
  language: "Espagnol",
  duration: "5 ans",
  costPerYear: "18 420 €",
  totalCost: "92 100 €",
  admission: "Entretien uniquement",
  averageMin: "Aucune",
  speRequired: "2 spécialités scientifiques requises",
  diploma: "Grado en Odontología (reconnu UE)",
  program: [
    { year: "1ère année", theme: "Sciences Fondamentales", description: "Bases biologiques et médicales.", subjects: ["Anatomie Humaine, Physiologie", "Biochimie, Biologie Cellulaire", "Anatomie Odontologique", "Introduction aux Sciences de la Santé"] },
    { year: "2ème année", theme: "Pathologie et Diagnostic", description: "Étude des maladies et outils diagnostiques.", subjects: ["Pathologie Générale, Microbiologie", "Pharmacologie, Radiologie", "Biomatériaux Dentaires", "Pratique Pré-clinique en Laboratoire"] },
    { year: "3ème année", theme: "Disciplines Cliniques", description: "Début de la pratique sur simulateurs et cas cliniques.", subjects: ["Odontologie Conservatrice, Endodontie", "Prothèse Dentaire, Orthodontie I", "Parodontologie I", "Pratique Clinique Simulée"] },
    { year: "4ème année", theme: "Clinique Avancée", description: "Pratique sur patients réels supervisée.", subjects: ["Chirurgie Orale, Pédodontie", "Prothèses Avancées, Parodontologie II", "Clinique Intégrée I", "Stages Cliniques Hospitaliers"] },
    { year: "5ème année", theme: "Professionnalisation", description: "Synthèse clinique et préparation professionnelle.", subjects: ["Clinique Intégrée II (cas complexes)", "Implantologie, Esthétique Dentaire", "Déontologie et Gestion de Cabinet", "Travail de Fin de Diplôme (TFG)"] },
  ],
  admissionSteps: defaultAdmissionSteps,
  studentLife: ucjcMadridLife,
};

const dentaireLINK: ProgramDetail = {
  slug: "link-rome",
  filiere: "Études Dentaires",
  filiereSlug: "dentaire",
  university: "LINK Campus University",
  universityShort: "LINK",
  universitySlug: "link-campus",
  city: "Rome",
  country: "Italie",
  countryFlag: "",
  heroImages: ["/images/universites/link/link-campus-6.jpg", "/images/universites/link/link-campus-18.jpg", "/images/universites/link/link-campus-35.jpg", "/images/universites/link/link-campus-80.jpg"],
  presentation:
    "LINK Campus University propose un cursus de dentaire en 6 ans à Rome. Le test d'admission est intégralement en français (QCM 5 matières). Aucun prérequis linguistique : un cours d'italien intensif est inclus dès la 1ère année. Ouvert à tous les profils bac.",
  language: "Italien (cours intensif inclus)",
  duration: "6 ans",
  costPerYear: "19 800 €",
  totalCost: "118 800 €",
  admission: "Test QCM en français (200 €)",
  averageMin: "Aucune",
  speRequired: "Aucune spécialité requise",
  diploma: "Laurea in Odontoiatria (reconnu UE)",
  program: [
    { year: "1ère année", theme: "Sciences Fondamentales + Italien", description: "Bases scientifiques et cours d'italien intensif.", subjects: ["Anatomie Humaine, Physiologie", "Biochimie, Biologie Cellulaire", "Cours d'Italien Intensif", "Introduction à l'Odontologie"] },
    { year: "2ème année", theme: "Pathologie et Matériaux", description: "Étude des pathologies et introduction aux matériaux dentaires.", subjects: ["Pathologie Générale, Microbiologie", "Pharmacologie", "Biomatériaux Dentaires, Radiologie", "Odontologie Préventive"] },
    { year: "3ème année", theme: "Pré-clinique", description: "Pratique simulée et disciplines dentaires spécifiques.", subjects: ["Odontologie Conservatrice", "Prothèse Dentaire I", "Parodontologie, Orthodontie I", "Médecine Buccale"] },
    { year: "4ème année", theme: "Clinique I", description: "Premiers contacts avec les patients réels.", subjects: ["Chirurgie Orale", "Pédodontie, Endodontie", "Prothèse II, Clinique Intégrée I", "Stages Cliniques"] },
    { year: "5ème année", theme: "Clinique Avancée", description: "Pratique clinique intensive et spécialisation.", subjects: ["Clinique Intégrée II", "Implantologie", "Orthodontie Avancée", "Stages Cliniques Avancés"] },
    { year: "6ème année", theme: "Professionnalisation", description: "Consolidation et préparation à l'exercice.", subjects: ["Clinique Intégrée III (cas complexes)", "Chirurgie Maxillo-Faciale", "Déontologie et Gestion", "Thèse de Fin d'Études (Tesi di Laurea)"] },
  ],
  admissionSteps: defaultAdmissionSteps,
  studentLife: romeLife,
};

// ============================================================
// MÉDECINE
// ============================================================

const medecineUEMadrid: ProgramDetail = {
  slug: "ue-madrid",
  filiere: "Études de Médecine",
  filiereSlug: "medecine",
  university: "Universidad Europea",
  universityShort: "UE",
  universitySlug: "universidad-europea",
  city: "Madrid",
  country: "Espagne",
  countryFlag: "",
  presentation:
    "Les études de Grado en Medicina à l'Université Européenne de Madrid offrent une formation prestigieuse dont le diplôme est reconnu dans toute l'UE. Le cursus de 6 ans est dispensé dans des installations ultramodernes, incluant un Hôpital Simulé et des laboratoires spécialisés. Les étudiants sont plongés très tôt dans la pratique clinique.",
  language: "Espagnol",
  duration: "6 ans",
  costPerYear: "21 480 €",
  totalCost: "128 880 €",
  admission: "PE — 4 épreuves",
  averageMin: "16-17/20",
  speRequired: "2 spécialités scientifiques requises",
  diploma: "Grado en Medicina (reconnu UE)",
  program: [
    { year: "1ère année", theme: "Sciences Biomédicales Fondamentales", description: "Fonctionnement normal du corps.", subjects: ["Anatomie Humaine (systèmes et topographique)", "Physiologie, Histologie, Biologie Cellulaire", "Bases de la Médecine Clinique et Communication", "Biochimie, Bioéthique"] },
    { year: "2ème année", theme: "Mécanismes de la Maladie", description: "Processus pathologiques et traitements.", subjects: ["Anatomie Pathologique", "Pharmacologie Générale et Clinique", "Microbiologie, Immunologie, Parasitologie", "Diagnostic et Radiologie"] },
    { year: "3ème année", theme: "Propédeutique et Pathologie", description: "Compétences de diagnostic clinique.", subjects: ["Séméiologie Clinique", "Pathologie Générale et Introduction Chirurgie", "Neurologie, Dermatologie", "Environnement Hospitalier et Pratiques Simultanées"] },
    { year: "4ème année", theme: "Pathologies Spécialisées I + Stages", description: "Étude par systèmes d'organes et premiers stages hospitaliers.", subjects: ["Pathologie Locomoteur (Traumatologie, Rhumatologie)", "Pathologie Cardiovasculaire et Respiratoire", "Urologie, Néphrologie, Endocrinologie", "Stages Cliniques Rotatifs I"] },
    { year: "5ème année", theme: "Pathologies Spécialisées II + Stages", description: "Spécialités complexes et multidisciplinaires.", subjects: ["Gynécologie et Obstétrique", "Pédiatrie, Psychiatrie", "Ophtalmologie, ORL", "Stages Cliniques Rotatifs II"] },
    { year: "6ème année", theme: "Clinique Intégrée et Examen Final", description: "Consolidation et préparation au MIR ou EDN.", subjects: ["Médecine Légale et Toxicologie", "Urgences Médicales et Soins Intensifs", "Stages Cliniques Tutélés (pratique supervisée)", "Travail de Fin de Diplôme (TFG)"] },
  ],
  heroImages: ["/images/universites/ue/ue-hospital-6.jpg", "/images/universites/ue/ue-hospital-1.jpg", "/images/universites/ue/ue-campus-club.jpg", "/images/universites/ue/ue-salud-grado.jpg"],
  admissionSteps: defaultAdmissionSteps,
  studentLife: madridLife,
};

const medecineUECanaries: ProgramDetail = {
  slug: "ue-canaries",
  filiere: "Études de Médecine",
  filiereSlug: "medecine",
  university: "Universidad Europea",
  universityShort: "UE",
  universitySlug: "universidad-europea",
  city: "Canaries",
  country: "Espagne",
  countryFlag: "",
  presentation:
    "Le programme de Grado en Medicina aux Canaries offre une formation d'excellence dans un cadre insulaire unique. Le cursus de 6 ans suit les standards européens les plus élevés avec une forte composante clinique.",
  language: "Espagnol",
  duration: "6 ans",
  costPerYear: "21 480 €",
  totalCost: "128 880 €",
  admission: "PE — 4 épreuves",
  averageMin: "16-17/20",
  speRequired: "2 spécialités scientifiques requises",
  diploma: "Grado en Medicina (reconnu UE)",
  heroImages: ["/images/universites/ue/ue-hospital-7.jpg", "/images/universites/ue/ue-hospital-simulation.jpg", "/images/universites/ue/ue-hospital-1.jpg", "/images/universites/ue/ue-campus-club.jpg"],
  program: medecineUEMadrid.program,
  admissionSteps: defaultAdmissionSteps,
  studentLife: canariesLife,
};

const medecineLINK: ProgramDetail = {
  slug: "link-rome",
  filiere: "Études de Médecine",
  filiereSlug: "medecine",
  university: "LINK Campus University",
  universityShort: "LINK",
  universitySlug: "link-campus",
  city: "Rome",
  country: "Italie",
  countryFlag: "",
  heroImages: ["/images/universites/link/link-campus-15.jpg", "/images/universites/link/link-campus-6.jpg", "/images/universites/link/link-campus-80.jpg", "/images/universites/link/link-campus-35.jpg"],
  presentation:
    "Le cursus de médecine à LINK dure 6 ans. Les cours sont en italien avec un programme d'italien intensif la 1ère année. Le diplôme est reconnu dans toute l'Union européenne. Le test d'admission est intégralement en français.",
  language: "Italien (cours intensif inclus)",
  duration: "6 ans",
  costPerYear: "19 800 €",
  totalCost: "118 800 €",
  admission: "Test QCM en français (200 €)",
  averageMin: "Aucune",
  speRequired: "Aucune spécialité requise",
  diploma: "Laurea in Medicina e Chirurgia (reconnu UE)",
  program: [
    { year: "1ère année", theme: "Sciences Fondamentales + Italien", description: "Bases scientifiques et cours d'italien intensif.", subjects: ["Anatomie Humaine, Physiologie", "Biochimie, Biologie Cellulaire, Histologie", "Cours d'Italien Intensif", "Introduction à la Médecine"] },
    { year: "2ème année", theme: "Pathologie et Pharmacologie", description: "Processus de maladie et traitements.", subjects: ["Pathologie Générale, Microbiologie", "Pharmacologie, Immunologie", "Diagnostic et Imagerie", "Sémiologie"] },
    { year: "3ème année", theme: "Clinique I", description: "Début des disciplines cliniques.", subjects: ["Médecine Interne I", "Chirurgie Générale I", "Neurologie, Dermatologie", "Stages Cliniques I"] },
    { year: "4ème année", theme: "Clinique II", description: "Spécialités médicales et chirurgicales.", subjects: ["Cardiologie, Pneumologie", "Urologie, Néphrologie", "Traumatologie, Rhumatologie", "Stages Cliniques Rotatifs II"] },
    { year: "5ème année", theme: "Clinique III", description: "Spécialités avancées.", subjects: ["Gynécologie, Obstétrique", "Pédiatrie, Psychiatrie", "Ophtalmologie, ORL", "Stages Cliniques Rotatifs III"] },
    { year: "6ème année", theme: "Intégration et Thèse", description: "Consolidation et préparation à l'exercice.", subjects: ["Médecine Légale, Urgences", "Soins Intensifs", "Stages Tutélés", "Thèse de Fin d'Études (Tesi di Laurea)"] },
  ],
  admissionSteps: defaultAdmissionSteps,
  studentLife: romeLife,
};

// ============================================================
// KINÉSITHÉRAPIE
// ============================================================

const kineProgram4ans: YearProgram[] = [
  { year: "1ère année", theme: "Sciences Fondamentales et Anatomie", description: "Bases biologiques et fonctionnement du corps.", subjects: ["Anatomie Humaine et Physiologie", "Biochimie, Biologie Cellulaire, Histologie", "Biomécanique et Évaluation Fonctionnelle", "Éthique Professionnelle et Législation"] },
  { year: "2ème année", theme: "Techniques Fondamentales et Pathologie", description: "Méthodes de traitement et pathologies.", subjects: ["Cinéthérapie (Thérapie par le mouvement)", "Pathologie Générale et Spécialisée", "Techniques Physiques (Hydrothérapie, Massothérapie)", "Évaluation Clinique et Diagnostic Kinésithérapique"] },
  { year: "3ème année", theme: "Kinésithérapie Spécialisée + Stages", description: "Applications thérapeutiques spécialisées.", subjects: ["Kinésithérapie Traumatologique et Orthopédique", "Kinésithérapie Neurologique", "Kinésithérapie Cardiovasculaire et Respiratoire", "Stages Cliniques Externes I"] },
  { year: "4ème année", theme: "Intégration Clinique et Recherche", description: "Consolidation, stages finaux et TFG.", subjects: ["Kinésithérapie du Sport, Pédiatrique et Gériatrique", "Stages Cliniques Externes II (Pratiques Tutelées)", "Méthodologie de Recherche", "Travail de Fin de Diplôme (TFG)"] },
];

const kineUEMadrid: ProgramDetail = {
  slug: "ue-madrid", filiere: "Études de Kinésithérapie", filiereSlug: "kinesitherapie",
  university: "Universidad Europea", universityShort: "UE", universitySlug: "universidad-europea",
  city: "Madrid", country: "Espagne", countryFlag: "",
  presentation: "Les études de Grado en Fisioterapia à l'UEM offrent une formation reconnue pour son approche pratique et son excellence clinique. Le cursus de 4 ans bénéficie d'installations de pointe. La 1ère année est en français, puis les cours passent en espagnol.",
  language: "Français / Espagnol / Anglais", duration: "4 ans",
  costPerYear: "10 020 €", totalCost: "40 080 €",
  admission: "PE 4 épreuves (cursus français)", averageMin: "13-14/20",
  speRequired: "Aucune spécialité requise", diploma: "Grado en Fisioterapia (reconnu UE)",
  heroImages: ["/images/universites/ue/ue-hospital-1.jpg", "/images/universites/ue/ue-hospital-8.jpg", "/images/universites/ue/ue-salud-grado.jpg", "/images/universites/ue/ue-campus-club.jpg"],
  program: kineProgram4ans, admissionSteps: defaultAdmissionSteps, studentLife: ucjcMadridLife,
};

const kineUEMalaga: ProgramDetail = {
  slug: "ue-malaga", filiere: "Études de Kinésithérapie", filiereSlug: "kinesitherapie",
  university: "Universidad Europea", universityShort: "UE", universitySlug: "universidad-europea",
  city: "Málaga", country: "Espagne", countryFlag: "",
  presentation: "Les études de Grado en Fisioterapia à Málaga seront lancées dans un campus flambant neuf. Le programme reconnu en France s'étend sur 4 ans avec une pratique intensive dès la 1ère année.",
  language: "Espagnol", duration: "4 ans",
  costPerYear: "10 020 €", totalCost: "40 080 €",
  admission: "Sur dossier (Hors PE)", averageMin: "13-14/20",
  speRequired: "Aucune spécialité requise", diploma: "Grado en Fisioterapia (reconnu UE)",
  heroImages: ["/images/universites/ue/ue-hospital-2.jpg", "/images/universites/ue/ue-hospital-simulation.jpg", "/images/universites/ue/ue-hospital-1.jpg", "/images/universites/ue/ue-salud-grado.jpg"],
  program: kineProgram4ans, admissionSteps: defaultAdmissionSteps, studentLife: malagaLife,
};

const kineUEValence: ProgramDetail = {
  slug: "ue-valence", filiere: "Études de Kinésithérapie", filiereSlug: "kinesitherapie",
  university: "Universidad Europea", universityShort: "UE", universitySlug: "universidad-europea",
  city: "Valence", country: "Espagne", countryFlag: "",
  presentation: "Les études de Grado en Fisioterapia à l'UEV offrent une formation reconnue et axée sur l'excellence clinique. Le cursus de 4 ans bénéficie d'installations de pointe pour la rééducation et l'analyse du mouvement.",
  language: "Espagnol", duration: "4 ans",
  costPerYear: "10 080 €", totalCost: "40 320 €",
  admission: "Sur dossier (Hors PE)", averageMin: "13-14/20",
  speRequired: "Aucune spécialité requise", diploma: "Grado en Fisioterapia (reconnu UE)",
  heroImages: ["/images/universites/ue/ue-hospital-3.jpg", "/images/universites/ue/ue-campus-club.jpg", "/images/universites/ue/ue-hospital-simulation.jpg", "/images/universites/ue/ue-hospital-1.jpg"],
  program: kineProgram4ans, admissionSteps: defaultAdmissionSteps, studentLife: valenceLife,
};

const kineUEAlicante: ProgramDetail = {
  slug: "ue-alicante", filiere: "Études de Kinésithérapie", filiereSlug: "kinesitherapie",
  university: "Universidad Europea", universityShort: "UE", universitySlug: "universidad-europea",
  city: "Alicante", country: "Espagne", countryFlag: "",
  presentation: "Le programme de kinésithérapie à Alicante offre 4 ans de formation intensive sur la Costa Blanca. Admission sur dossier, sans test d'entrée.",
  language: "Espagnol", duration: "4 ans",
  costPerYear: "10 080 €", totalCost: "40 320 €",
  admission: "Sur dossier (Hors PE)", averageMin: "13-14/20",
  speRequired: "Aucune spécialité requise", diploma: "Grado en Fisioterapia (reconnu UE)",
  heroImages: ["/images/universites/ue/ue-salud-grado.jpg", "/images/universites/ue/ue-hospital-4.jpg", "/images/universites/ue/ue-hospital-1.jpg", "/images/universites/ue/ue-campus-club.jpg"],
  program: kineProgram4ans, admissionSteps: defaultAdmissionSteps, studentLife: alicanteLife,
};

const kineUECanaries: ProgramDetail = {
  slug: "ue-canaries", filiere: "Études de Kinésithérapie", filiereSlug: "kinesitherapie",
  university: "Universidad Europea", universityShort: "UE", universitySlug: "universidad-europea",
  city: "Canaries", country: "Espagne", countryFlag: "",
  presentation: "Le programme de kinésithérapie aux Canaries offre une formation d'excellence dans un cadre insulaire unique. Admission sur dossier.",
  language: "Espagnol", duration: "4 ans",
  costPerYear: "10 020 €", totalCost: "40 080 €",
  admission: "Sur dossier (Hors PE)", averageMin: "13-14/20",
  speRequired: "Aucune spécialité requise", diploma: "Grado en Fisioterapia (reconnu UE)",
  heroImages: ["/images/universites/ue/ue-hospital-5.jpg", "/images/universites/ue/ue-hospital-1.jpg", "/images/universites/ue/ue-salud-grado.jpg", "/images/universites/ue/ue-hospital-simulation.jpg"],
  program: kineProgram4ans, admissionSteps: defaultAdmissionSteps, studentLife: canariesLife,
};

const kineUCJC: ProgramDetail = {
  slug: "ucjc-madrid", filiere: "Études de Kinésithérapie", filiereSlug: "kinesitherapie",
  university: "UCJC — Universidad Camilo José Cela", universityShort: "UCJC", universitySlug: "ucjc",
  city: "Madrid", country: "Espagne", countryFlag: "",
  presentation: "La kiné UCJC est l'option la moins chère de toutes nos universités (9 420 €/an, soit 37 680 € total sur 4 ans). Aucun test, aucune moyenne requise. Idéal pour les profils non-scientifiques ou avec une moyenne modeste.",
  language: "Espagnol", duration: "4 ans",
  costPerYear: "9 420 €", totalCost: "37 680 €",
  admission: "Entretien uniquement", averageMin: "Aucune",
  speRequired: "Aucune spécialité requise", diploma: "Grado en Fisioterapia (reconnu UE)",
  program: kineProgram4ans, admissionSteps: defaultAdmissionSteps, studentLife: ucjcMadridLife,
  isCheapest: true,
};

const kineLINK: ProgramDetail = {
  slug: "link-rome", filiere: "Études de Kinésithérapie", filiereSlug: "kinesitherapie",
  university: "LINK Campus University", universityShort: "LINK", universitySlug: "link-campus",
  city: "Rome", country: "Italie", countryFlag: "",
  heroImages: ["/images/universites/link/link-campus-35.jpg", "/images/universites/link/link-campus-18.jpg", "/images/universites/link/link-campus-6.jpg", "/images/universites/link/link-campus-15.jpg"],
  presentation: "3 ans seulement contre 5 en France ! Le cursus pratique dès la 1ère année avec stages cliniques. Le diplôme est reconnu en France. Test d'admission en français, aucun prérequis linguistique.",
  language: "Italien (cours intensif inclus)", duration: "3 ans",
  costPerYear: "11 900 €", totalCost: "35 700 €",
  admission: "Test QCM en français (200 €)", averageMin: "Aucune",
  speRequired: "Aucune spécialité requise", diploma: "Laurea in Fisioterapia (reconnu UE)",
  program: [
    { year: "1ère année", theme: "Sciences Fondamentales + Italien", description: "Bases scientifiques et cours d'italien intensif.", subjects: ["Anatomie, Physiologie, Biomécanique", "Biochimie, Biologie Cellulaire", "Cours d'Italien Intensif", "Introduction à la Kinésithérapie"] },
    { year: "2ème année", theme: "Techniques et Pathologie", description: "Méthodes de rééducation et pathologies.", subjects: ["Cinéthérapie et Techniques Manuelles", "Pathologie Orthopédique et Neurologique", "Électrothérapie, Hydrothérapie", "Stages Cliniques I"] },
    { year: "3ème année", theme: "Clinique et Professionnalisation", description: "Pratique intensive et fin d'études.", subjects: ["Kinésithérapie Sportive et Gériatrique", "Stages Cliniques II (Pratiques Tutelées)", "Méthodologie de Recherche", "Thèse de Fin d'Études"] },
  ],
  admissionSteps: defaultAdmissionSteps, studentLife: romeLife,
};

// ============================================================
// PHARMACIE
// ============================================================

const pharmacieProgram5ans: YearProgram[] = [
  { year: "1ère année", theme: "Sciences Fondamentales et Biologiques", description: "Bases chimiques et biologiques du pharmacien.", subjects: ["Chimie Générale et Chimie Organique", "Anatomie Humaine et Physiologie", "Biologie Cellulaire, Biostatistique", "Introduction à la Pharmacie et Santé Publique"] },
  { year: "2ème année", theme: "Chimie Pharmaceutique et Pharmacologie", description: "Principes actifs et leurs effets.", subjects: ["Chimie Pharmaceutique (Médicaments)", "Pharmacologie Générale et Pharmacognosie", "Microbiologie et Immunologie", "Techniques Analytiques et Contrôle Qualité"] },
  { year: "3ème année", theme: "Technologie et Toxicologie", description: "Fabrication des médicaments et étude des risques.", subjects: ["Technologie Pharmaceutique et Formulation", "Toxicologie Générale et Clinique", "Parasitologie et Pharmacothérapie", "Pratique Pharmaceutique (Dispensation)"] },
  { year: "4ème année", theme: "Santé Publique et Clinique", description: "Rôle du pharmacien dans la santé communautaire.", subjects: ["Santé Publique et Législation Pharmaceutique", "Pharmacothérapie Spéciale", "Analyse Clinique et Bromatologie", "Stages Cliniques I"] },
  { year: "5ème année", theme: "Pratique Professionnelle", description: "Stages finaux et spécialisation.", subjects: ["Pratiques Tutelées (Stages obligatoires)", "Gestion d'Entreprise Pharmaceutique et Marketing", "Dermopharmacie et Cosmétique", "Travail de Fin de Diplôme (TFG)"] },
];

const pharmacieUEMadrid: ProgramDetail = {
  slug: "ue-madrid", filiere: "Études de Pharmacie", filiereSlug: "pharmacie",
  university: "Universidad Europea", universityShort: "UE", universitySlug: "universidad-europea",
  city: "Madrid", country: "Espagne", countryFlag: "",
  presentation: "Les études de Grado en Farmacia à l'UEM offrent une formation solide en sciences de la santé. Le cursus de 5 ans est dispensé sur le campus de Villaviciosa de Odón. Admission sur dossier, sans test d'entrée.",
  language: "Espagnol", duration: "5 ans",
  costPerYear: "12 120 €", totalCost: "60 600 €",
  admission: "Sur dossier (Hors PE)", averageMin: "Aucune",
  speRequired: "Aucune spécialité requise", diploma: "Grado en Farmacia (reconnu UE)",
  heroImages: ["/images/universites/ue/ue-hospital-6.jpg", "/images/universites/ue/ue-campus-club.jpg", "/images/universites/ue/ue-hospital-1.jpg", "/images/universites/ue/ue-salud-grado.jpg"],
  program: pharmacieProgram5ans, admissionSteps: defaultAdmissionSteps, studentLife: madridLife,
};

const pharmacieUCJC: ProgramDetail = {
  slug: "ucjc-madrid", filiere: "Études de Pharmacie", filiereSlug: "pharmacie",
  university: "UCJC — Universidad Camilo José Cela", universityShort: "UCJC", universitySlug: "ucjc",
  city: "Madrid", country: "Espagne", countryFlag: "",
  presentation: "L'UCJC propose un programme de pharmacie en 5 ans en espagnol. Admission par entretien uniquement, sans test écrit. Processus le plus simple des 3 universités.",
  language: "Espagnol", duration: "5 ans",
  costPerYear: "10 140 €", totalCost: "50 700 €",
  admission: "Entretien uniquement", averageMin: "Aucune",
  speRequired: "Aucune spécialité requise", diploma: "Grado en Farmacia (reconnu UE)",
  program: pharmacieProgram5ans, admissionSteps: defaultAdmissionSteps, studentLife: ucjcMadridLife,
};

const pharmacieLINK: ProgramDetail = {
  slug: "link-rome", filiere: "Études de Pharmacie", filiereSlug: "pharmacie",
  university: "LINK Campus University", universityShort: "LINK", universitySlug: "link-campus",
  city: "Rome", country: "Italie", countryFlag: "",
  heroImages: ["/images/universites/link/link-campus-80.jpg", "/images/universites/link/link-campus-35.jpg", "/images/universites/link/link-campus-15.jpg", "/images/universites/link/link-campus-18.jpg"],
  presentation: "Pharmacie est la seule filière LINK sans test d'admission. L'admission se fait uniquement sur dossier. C'est aussi le tarif le plus bas de toutes les filières LINK (7 900 €/an). Idéal pour les étudiants ne souhaitant pas passer de test.",
  language: "Italien (cours intensif inclus)", duration: "5 ans",
  costPerYear: "7 900 €", totalCost: "39 500 €",
  admission: "Sur dossier (pas de test)", averageMin: "Aucune",
  speRequired: "Aucune spécialité requise", diploma: "Laurea in Farmacia (reconnu UE)",
  program: pharmacieProgram5ans, admissionSteps: defaultAdmissionSteps, studentLife: romeLife,
  isCheapest: true,
};

// ============================================================
// VÉTÉRINAIRE
// ============================================================

const veterinaireUEMadrid: ProgramDetail = {
  slug: "ue-madrid", filiere: "Études Vétérinaires", filiereSlug: "veterinaire",
  university: "Universidad Europea", universityShort: "UE", universitySlug: "universidad-europea",
  city: "Madrid", country: "Espagne", countryFlag: "",
  presentation: "Le programme de vétérinaire est disponible uniquement à Madrid. Le cursus de 5 ans combine sciences fondamentales et pratique clinique avec des animaux. Admission via le test PE (4 épreuves).",
  language: "Espagnol", duration: "5 ans",
  costPerYear: "19 500 €", totalCost: "97 500 €",
  admission: "PE — 4 épreuves", averageMin: "14-15/20",
  speRequired: "2 spécialités scientifiques requises", diploma: "Grado en Veterinaria (reconnu UE)",
  program: [
    { year: "1ère année", theme: "Sciences Fondamentales", description: "Bases biologiques et anatomie animale.", subjects: ["Anatomie et Physiologie Animale", "Biochimie, Biologie Cellulaire", "Zoologie et Ethnologie", "Éthique et Législation Vétérinaire"] },
    { year: "2ème année", theme: "Pathologie et Diagnostic", description: "Maladies animales et outils diagnostiques.", subjects: ["Pathologie Générale, Microbiologie", "Pharmacologie Vétérinaire", "Parasitologie, Immunologie", "Diagnostic par Imagerie"] },
    { year: "3ème année", theme: "Clinique I", description: "Début de la pratique clinique.", subjects: ["Médecine Interne des Petits Animaux", "Chirurgie Vétérinaire I", "Reproduction Animale", "Stages Cliniques I"] },
    { year: "4ème année", theme: "Clinique II et Spécialités", description: "Pratique avancée et spécialisation.", subjects: ["Médecine des Grands Animaux", "Chirurgie Vétérinaire II", "Santé Publique Vétérinaire", "Stages Cliniques II"] },
    { year: "5ème année", theme: "Professionnalisation", description: "Consolidation et préparation à l'exercice.", subjects: ["Clinique Intégrée (cas complexes)", "Stages Tutelés en Clinique et Élevage", "Déontologie et Gestion de Cabinet", "Travail de Fin de Diplôme (TFG)"] },
  ],
  heroImages: ["/images/universites/ue/ue-hospital-7.jpg", "/images/universites/ue/ue-hospital-1.jpg", "/images/universites/ue/ue-hospital-simulation.jpg", "/images/universites/ue/ue-campus-club.jpg"],
  admissionSteps: defaultAdmissionSteps, studentLife: madridLife,
};

// ============================================================
// PRÉPA DENTAIRE
// ============================================================

const prepaDentaireUEAlicante: ProgramDetail = {
  slug: "ue-alicante", filiere: "Année Préparatoire Dentaire", filiereSlug: "prepa-dentaire",
  university: "Universidad Europea", universityShort: "UE", universitySlug: "universidad-europea",
  city: "Alicante", country: "Espagne", countryFlag: "",
  presentation: "Une année préparatoire en anglais à Alicante avant d'intégrer le cursus dentaire de 5 ans. Aucun test d'entrée, juste un niveau B2 en anglais requis. Après la prépa, intégration en Dentaire Alicante à 20 821 €/an.",
  language: "Anglais (B2 requis)", duration: "1 an + 5 ans dentaire",
  costPerYear: "17 000 €", totalCost: "17 000 € (prépa) + 104 105 € (dentaire)",
  admission: "Sur dossier (pas de test)", averageMin: "Aucune",
  speRequired: "Aucune — B2 anglais requis", diploma: "Certificat préparatoire + Grado en Odontología",
  program: [
    { year: "Année préparatoire", theme: "Fondamentaux Scientifiques et Linguistiques", description: "Mise à niveau scientifique et préparation au cursus dentaire.", subjects: ["Biologie et Chimie (mise à niveau)", "Anglais Académique et Scientifique", "Introduction aux Sciences Dentaires", "Anatomie et Physiologie de Base", "Méthodologie Universitaire", "Projet de Recherche Introductif"] },
  ],
  heroImages: ["/images/universites/ue/ue-hospital-8.jpg", "/images/universites/ue/ue-salud-grado.jpg", "/images/universites/ue/ue-campus-club.jpg", "/images/universites/ue/ue-hospital-1.jpg"],
  admissionSteps: defaultAdmissionSteps, studentLife: alicanteLife,
};

// ============================================================
// EXPORT
// ============================================================

export const programDetails: ProgramDetail[] = [
  // Dentaire
  dentaireUEMadrid, dentaireUEMalaga, dentaireUEValence, dentaireUEAlicante,
  dentaireUECanaries, dentaireUCJC, dentaireLINK,
  // Médecine
  medecineUEMadrid, medecineUECanaries, medecineLINK,
  // Kinésithérapie
  kineUEMadrid, kineUEMalaga, kineUEValence, kineUEAlicante,
  kineUECanaries, kineUCJC, kineLINK,
  // Pharmacie
  pharmacieUEMadrid, pharmacieUCJC, pharmacieLINK,
  // Vétérinaire
  veterinaireUEMadrid,
  // Prépa Dentaire
  prepaDentaireUEAlicante,
];

export function getProgramDetail(filiere: string, slug: string): ProgramDetail | undefined {
  return programDetails.find((p) => p.filiereSlug === filiere && p.slug === slug);
}

export function getProgramsByFiliere(filiere: string): ProgramDetail[] {
  return programDetails.filter((p) => p.filiereSlug === filiere);
}

export function getProgramsByUniversity(universityShort: string): ProgramDetail[] {
  return programDetails.filter((p) => p.universityShort === universityShort);
}

export function getAllProgramSlugs(): Array<{ filiere: string; slug: string }> {
  return programDetails.map((p) => ({ filiere: p.filiereSlug, slug: p.slug }));
}

/** Map university slug (link|ucjc|ue) + city to program-detail slug for URL building */
const uniShortMap: Record<string, string> = {
  link: "LINK",
  ucjc: "UCJC",
  ue: "UE",
};

function normalizeCity(city: string): string {
  return city
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function getProgramSlugForHref(
  filiereSlug: string,
  universitySlug: string,
  campus: string
): string | null {
  const short = uniShortMap[universitySlug];
  if (!short) return null;
  const campusNorm = normalizeCity(campus);
  const found = programDetails.find(
    (p) =>
      p.filiereSlug === filiereSlug &&
      p.universityShort === short &&
      normalizeCity(p.city) === campusNorm
  );
  return found?.slug ?? null;
}
