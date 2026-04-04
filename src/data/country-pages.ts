// =============================================================================
// Country-specific SEO pages data — Edumove
// =============================================================================

import type { FiliereSlug } from "./universities";
import { universities, getProgramsByFiliere } from "./universities";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type CountrySlug = "espagne" | "italie";

export const COUNTRY_SLUGS: CountrySlug[] = ["espagne", "italie"];

export interface CountryPageData {
  countrySlug: CountrySlug;
  countryName: string;
  countryFlag: string;
  filiereSlug: FiliereSlug;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  highlights: string[];
  whyThisCountry: string;
  diplomaRecognition: string;
  /** Additional content sections for SEO depth */
  sections: Array<{ title: string; content: string }>;
  faq: Array<{ question: string; answer: string }>;
}

// ---------------------------------------------------------------------------
// Data — 5 pages Espagne + 4 pages Italie
// ---------------------------------------------------------------------------

export const countryPages: CountryPageData[] = [
  // =========================================================================
  // MÉDECINE EN ESPAGNE
  // =========================================================================
  {
    countrySlug: "espagne",
    countryName: "Espagne",
    countryFlag: "\u{1F1EA}\u{1F1F8}",
    filiereSlug: "medecine",
    h1: "\u00C9tudes de M\u00E9decine en Espagne",
    metaTitle: "\u00C9tudes de M\u00E9decine en Espagne sans concours \u2014 Edumove",
    metaDescription:
      "Faire m\u00E9decine en Espagne : 6 ans de formation sans PASS/LAS, dipl\u00F4me reconnu UE. D\u00E9couvrez nos universit\u00E9s partenaires \u00E0 Madrid (UCJC, Universidad Europea), frais, admission et financement.",
    intro:
      "Pas de PASS, pas de num\u00E9rus clausus. En Espagne, on entre en m\u00E9decine sur dossier ou test d\u2019entr\u00E9e, et le dipl\u00F4me est reconnu dans toute l\u2019UE. Madrid \u00E0 2h de Paris, soleil 300 jours par an, co\u00FBt de la vie 20% moins cher \u2014 c\u2019est pas un plan B, c\u2019est un vrai choix.",
    highlights: [
      "Pas de num\u00E9rus clausus ni de concours PASS/LAS",
      "Co\u00FBt de la vie 15 \u00E0 20% inf\u00E9rieur \u00E0 la France",
      "Madrid \u00E0 2h de Paris en avion direct",
      "Dipl\u00F4me Grado en Medicina reconnu dans toute l\u2019UE",
      "Climat m\u00E9diterran\u00E9en et qualit\u00E9 de vie exceptionnelle",
      "Financement possible jusqu\u2019\u00E0 100% avec nos partenaires bancaires",
    ],
    whyThisCountry:
      "L\u2019Espagne propose un cursus m\u00E9dical complet de 6 ans (Grado en Medicina), suivi de 3 \u00E0 5 ans de sp\u00E9cialisation via le syst\u00E8me MIR (l\u2019\u00E9quivalent espagnol de l\u2019internat). Les universit\u00E9s espagnoles combinent un enseignement th\u00E9orique de haut niveau et des stages cliniques dans des h\u00F4pitaux de r\u00E9f\u00E9rence, avec une immersion progressive d\u00E8s la 3\u00E8me ann\u00E9e. Apr\u00E8s la Belgique et la Roumanie, l\u2019Espagne est de plus en plus pl\u00E9biscit\u00E9e par les \u00E9tudiants fran\u00E7ais gr\u00E2ce \u00E0 la qualit\u00E9 de ses formations, sa proximit\u00E9 g\u00E9ographique et son cadre de vie attractif. Nos deux universit\u00E9s partenaires \u00E0 Madrid \u2014 UCJC et Universidad Europea \u2014 proposent des formations en espagnol avec un accompagnement d\u00E9di\u00E9 aux \u00E9tudiants francophones tout au long de leur parcours.",
    sections: [
      {
        title: "Comment se d\u00E9roulent les \u00E9tudes de m\u00E9decine en Espagne ?",
        content: "Le cursus m\u00E9dical espagnol dure 6 ans et se divise en deux grandes phases. Les deux premi\u00E8res ann\u00E9es sont consacr\u00E9es aux sciences fondamentales : anatomie, physiologie, biochimie, histologie et biologie cellulaire. \u00C0 partir de la 3\u00E8me ann\u00E9e, les \u00E9tudiants commencent les rotations cliniques dans les h\u00F4pitaux universitaires partenaires, o\u00F9 ils d\u00E9couvrent les diff\u00E9rentes sp\u00E9cialit\u00E9s m\u00E9dicales : cardiologie, chirurgie, p\u00E9diatrie, gyn\u00E9cologie, urgences, etc. Les 5\u00E8me et 6\u00E8me ann\u00E9es sont enti\u00E8rement d\u00E9di\u00E9es aux stages cliniques intensifs (rotatorios), permettant aux \u00E9tudiants d\u2019acqu\u00E9rir une exp\u00E9rience pratique solide avant d\u2019acc\u00E9der \u00E0 la sp\u00E9cialisation."
      },
      {
        title: "Admission : comment int\u00E9grer m\u00E9decine en Espagne ?",
        content: "L\u2019admission en m\u00E9decine en Espagne varie selon l\u2019universit\u00E9. \u00C0 l\u2019Universidad Europea, l\u2019admission se fait via la Prueba Espec\u00EDfica (PE), un examen compos\u00E9 de 4 \u00E9preuves scientifiques (biologie, chimie, math\u00E9matiques et anglais). \u00C0 l\u2019UCJC, le processus est plus simple : un entretien de motivation suffit, sans aucun test \u00E9crit. Dans les deux cas, il n\u2019y a pas de concours de type PASS/LAS. Edumove vous accompagne \u00E0 chaque \u00E9tape : pr\u00E9paration au test PE, constitution du dossier, simulation d\u2019entretien et suivi jusqu\u2019\u00E0 votre arriv\u00E9e sur le campus."
      },
      {
        title: "Co\u00FBt des \u00E9tudes et vie \u00E9tudiante \u00E0 Madrid",
        content: "Les frais de scolarit\u00E9 varient entre 15\u00A0000 et 21\u00A0500 \u20AC par an selon l\u2019universit\u00E9 et le programme choisi. Le co\u00FBt de la vie \u00E0 Madrid est en moyenne 15 \u00E0 20% inf\u00E9rieur \u00E0 Paris : comptez 400 \u00E0 600 \u20AC par mois pour un logement en colocation, 200 \u00E0 300 \u20AC pour l\u2019alimentation et 50 \u00E0 80 \u20AC pour les transports (abonnement jeune). Au total, le budget mensuel d\u2019un \u00E9tudiant \u00E0 Madrid se situe entre 700 et 1\u00A0000 \u20AC hors frais de scolarit\u00E9. Edumove propose des solutions de financement pouvant couvrir jusqu\u2019\u00E0 100% des frais de scolarit\u00E9 via nos partenaires bancaires, avec des taux pr\u00E9f\u00E9rentiels et un remboursement diff\u00E9r\u00E9 apr\u00E8s l\u2019obtention du dipl\u00F4me."
      },
    ],
    diplomaRecognition:
      "Le dipl\u00F4me de m\u00E9decine obtenu en Espagne (Grado en Medicina) est automatiquement reconnu dans tous les pays de l\u2019Union europ\u00E9enne gr\u00E2ce \u00E0 la directive 2005/36/CE relative \u00E0 la reconnaissance des qualifications professionnelles. Concr\u00E8tement, cela signifie que vous pourrez exercer en France apr\u00E8s inscription au Conseil National de l\u2019Ordre des M\u00E9decins, sans proc\u00E9dure d\u2019\u00E9quivalence suppl\u00E9mentaire. Le syst\u00E8me de cr\u00E9dits ECTS garantit la compatibilit\u00E9 de votre parcours avec les standards europ\u00E9ens.",
    faq: [
      {
        question: "Peut-on faire m\u00E9decine en Espagne sans parler espagnol ?",
        answer: "Un niveau d\u2019espagnol est n\u00E9cessaire car les cours et les stages cliniques se d\u00E9roulent en espagnol. Cependant, nos universit\u00E9s partenaires proposent des cours intensifs d\u2019espagnol en parall\u00E8le de la premi\u00E8re ann\u00E9e. De nombreux \u00E9tudiants fran\u00E7ais arrivent avec un niveau d\u00E9butant et atteignent un niveau courant en quelques mois d\u2019immersion. L\u2019UCJC accepte une simple attestation de niveau (certificat e-learning).",
      },
      {
        question: "Le dipl\u00F4me de m\u00E9decine espagnol est-il reconnu en France ?",
        answer: "Oui, le Grado en Medicina est reconnu dans toute l\u2019Union europ\u00E9enne gr\u00E2ce \u00E0 la directive 2005/36/CE et au syst\u00E8me de cr\u00E9dits ECTS. Vous pourrez exercer en France en vous inscrivant au Conseil de l\u2019Ordre des M\u00E9decins sans proc\u00E9dure d\u2019\u00E9quivalence. Des milliers de m\u00E9decins form\u00E9s en Espagne exercent d\u00E9j\u00E0 en France.",
      },
      {
        question: "Combien co\u00FBtent les \u00E9tudes de m\u00E9decine en Espagne ?",
        answer: "Les frais de scolarit\u00E9 varient entre 15\u00A0000 et 21\u00A0500 \u20AC par an dans nos universit\u00E9s partenaires priv\u00E9es \u00E0 Madrid. Sur 6 ans, le co\u00FBt total se situe entre 90\u00A0000 et 129\u00A0000 \u20AC. Edumove propose un financement jusqu\u2019\u00E0 100% via nos partenaires bancaires (pr\u00EAt \u00E9tudiant avec diff\u00E9r\u00E9 de remboursement).",
      },
      {
        question: "Quelle est la diff\u00E9rence entre l\u2019UCJC et l\u2019Universidad Europea pour m\u00E9decine ?",
        answer: "L\u2019UCJC propose une admission sur entretien uniquement (pas de test \u00E9crit), avec des frais \u00E0 partir de 15\u00A0000 \u20AC/an. L\u2019Universidad Europea utilise la Prueba Espec\u00EDfica (4 \u00E9preuves scientifiques) et co\u00FBte environ 21\u00A0500 \u20AC/an. Les deux d\u00E9livrent un dipl\u00F4me de m\u00EAme valeur, reconnu dans toute l\u2019UE. Le choix d\u00E9pend de votre profil et de votre budget.",
      },
      {
        question: "Comment Edumove accompagne les \u00E9tudiants en m\u00E9decine en Espagne ?",
        answer: "Edumove vous accompagne de A \u00E0 Z : premier \u00E9change gratuit pour \u00E9valuer votre profil, pr\u00E9paration au test PE ou \u00E0 l\u2019entretien, constitution du dossier de candidature, aide au financement (pr\u00EAt \u00E9tudiant jusqu\u2019\u00E0 75\u00A0000 \u20AC avec LCL), recherche de logement \u00E0 Madrid, et suivi personnalis\u00E9 pendant toute la dur\u00E9e de vos \u00E9tudes.",
      },
      {
        question: "Peut-on se sp\u00E9cialiser apr\u00E8s m\u00E9decine en Espagne ?",
        answer: "Oui, apr\u00E8s les 6 ans de Grado en Medicina, vous pouvez passer le MIR (examen national espagnol) pour acc\u00E9der \u00E0 une sp\u00E9cialisation de 3 \u00E0 5 ans. Vous pouvez aussi revenir en France pour passer les \u00E9preuves de sp\u00E9cialisation europ\u00E9ennes (ECN). Le dipl\u00F4me de base vous donne la flexibilit\u00E9 de vous sp\u00E9cialiser dans le pays de votre choix.",
      },
    ],
  },
  // =========================================================================
  // DENTAIRE EN ESPAGNE
  // =========================================================================
  {
    countrySlug: "espagne",
    countryName: "Espagne",
    countryFlag: "\u{1F1EA}\u{1F1F8}",
    filiereSlug: "dentaire",
    h1: "\u00C9tudes Dentaires en Espagne",
    metaTitle: "\u00C9tudes Dentaires en Espagne sans concours \u2014 Edumove",
    metaDescription:
      "Faire dentaire en Espagne : cursus de 5 ans sans PASS/LAS, stages cliniques d\u00E8s la 3e ann\u00E9e. UCJC et Universidad Europea sur 5 campus. Admission, frais et financement.",
    intro:
      "L\u2019Espagne est l\u2019une des destinations les plus pris\u00E9es par les \u00E9tudiants fran\u00E7ais pour \u00E9tudier l\u2019odontologie. Avec un cursus de 5 ans (300 cr\u00E9dits ECTS) alliant th\u00E9orie et pratique clinique intensive sur patients r\u00E9els, les universit\u00E9s espagnoles forment des chirurgiens-dentistes comp\u00E9tents et reconnus dans toute l\u2019Union europ\u00E9enne gr\u00E2ce au processus de Bologne. L\u2019admission se fait sans le concours PASS/LAS fran\u00E7ais, sur la base d\u2019un test d\u2019entr\u00E9e (Prueba Espec\u00EDfica) ou d\u2019un entretien de motivation.",
    highlights: [
      "Admission sans concours PASS/LAS : test PE ou entretien",
      "Pratique clinique sur patients r\u00E9els d\u00E8s la 3\u00E8me ann\u00E9e",
      "5 campus : Madrid, Malaga, Valence, Alicante, Canaries",
      "Dipl\u00F4me Grado en Odontolog\u00EDa reconnu dans toute l\u2019UE",
      "Cliniques dentaires universitaires \u00E9quip\u00E9es des derni\u00E8res technologies",
      "Financement possible jusqu\u2019\u00E0 100% via nos partenaires bancaires",
    ],
    whyThisCountry:
      "Les \u00E9tudes dentaires en Espagne se d\u00E9roulent sur 5 ans (10 semestres, 300 cr\u00E9dits ECTS) et sont r\u00E9put\u00E9es pour l\u2019intensit\u00E9 de la formation clinique. D\u00E8s la 3\u00E8me ann\u00E9e, les \u00E9tudiants pratiquent des soins dentaires sur patients r\u00E9els dans les cliniques universitaires, encadr\u00E9s par des praticiens exp\u00E9riment\u00E9s. L\u2019Universidad Europea dispose de cliniques dentaires \u00E9quip\u00E9es de fauteuils num\u00E9riques, de scanners intraoraux et de technologies CFAO. Cette formation pratique intensive est un atout majeur par rapport au cursus fran\u00E7ais o\u00F9 l\u2019acc\u00E8s est limit\u00E9 par le PASS/LAS. Avec 5 campus r\u00E9partis dans toute l\u2019Espagne, vous avez le choix entre Madrid, Malaga, Valence, Alicante et les Canaries, chacun offrant un cadre de vie unique.",
    sections: [
      {
        title: "Le cursus dentaire espagnol en d\u00E9tail",
        content: "Le Grado en Odontolog\u00EDa s\u2019\u00E9tale sur 5 ann\u00E9es et totalise 300 cr\u00E9dits ECTS, conform\u00E9ment aux standards du processus de Bologne. Les deux premi\u00E8res ann\u00E9es couvrent les sciences fondamentales et pr\u00E9cliniques : anatomie de la t\u00EAte et du cou, histologie buccale, mat\u00E9riaux dentaires, parodontologie de base et proth\u00E8se. \u00C0 partir de la 3\u00E8me ann\u00E9e, la formation devient majoritairement clinique. Les \u00E9tudiants r\u00E9alisent des actes sur patients r\u00E9els : d\u00E9tartrages, soins conservateurs, extractions simples, puis \u00E9voluent vers des actes plus complexes en 4\u00E8me et 5\u00E8me ann\u00E9e (endodontie, proth\u00E8ses fixes et amovibles, implantologie, orthodontie). Cette approche progressive garantit une formation compl\u00E8te et op\u00E9rationnelle d\u00E8s l\u2019obtention du dipl\u00F4me."
      },
      {
        title: "Admission et pr\u00E9requis",
        content: "\u00C0 l\u2019Universidad Europea, l\u2019admission en dentaire se fait via la Prueba Espec\u00EDfica (PE), un examen compos\u00E9 de 4 \u00E9preuves scientifiques. \u00C0 l\u2019UCJC, un entretien de motivation suffit. Un niveau B2 en espagnol est requis pour les stages cliniques, car il faut pouvoir communiquer avec les patients. Edumove vous accompagne dans la pr\u00E9paration au test et la constitution de votre dossier, et vous aide \u00E0 choisir le campus le plus adapt\u00E9 \u00E0 votre profil."
      },
      {
        title: "Budget et co\u00FBt de la vie en Espagne",
        content: "Les frais de scolarit\u00E9 pour le dentaire en Espagne varient de 9\u00A0420 \u20AC/an (UCJC Madrid) \u00E0 18\u00A0900 \u20AC/an (Universidad Europea). Le co\u00FBt de la vie d\u00E9pend du campus choisi : Madrid est la ville la plus ch\u00E8re (700-1\u00A0000 \u20AC/mois hors scolarit\u00E9), tandis que Valence, Alicante ou les Canaries offrent un budget plus l\u00E9ger (500-800 \u20AC/mois). Edumove propose un financement int\u00E9gral via nos partenaires bancaires, avec un pr\u00EAt \u00E9tudiant \u00E0 taux pr\u00E9f\u00E9rentiel et un diff\u00E9r\u00E9 de remboursement."
      },
    ],
    diplomaRecognition:
      "Le Grado en Odontolog\u00EDa est un dipl\u00F4me europ\u00E9en conforme au processus de Bologne et automatiquement reconnu dans les 49 pays signataires. En France, vous pourrez exercer en tant que chirurgien-dentiste apr\u00E8s inscription au Conseil National de l\u2019Ordre des Chirurgiens-Dentistes, sans proc\u00E9dure d\u2019\u00E9quivalence. La directive 2005/36/CE garantit cette reconnaissance mutuelle des qualifications professionnelles au sein de l\u2019espace europ\u00E9en. Les perspectives professionnelles sont excellentes : exercice lib\u00E9ral en cabinet, salariat en clinique dentaire, postes hospitaliers, ou poursuite en Master de sp\u00E9cialisation (orthodontie, implantologie, parodontologie, chirurgie orale). Le taux d\u2019insertion professionnelle des chirurgiens-dentistes d\u00E9passe 95% dans les 6 mois suivant l\u2019obtention du dipl\u00F4me.",
    faq: [
      {
        question: "Combien de temps durent les \u00E9tudes dentaires en Espagne ?",
        answer: "Le cursus dure 5 ans (10 semestres). Les stages cliniques avec patients r\u00E9els commencent d\u00E8s la 3\u00E8me ann\u00E9e, soit 3 ann\u00E9es de pratique clinique avant l\u2019obtention du dipl\u00F4me. C\u2019est l\u2019un des atouts majeurs de la formation dentaire espagnole.",
      },
      {
        question: "Quels sont les frais de scolarit\u00E9 pour le dentaire en Espagne ?",
        answer: "Les frais varient de 9\u00A0420 \u20AC/an (UCJC Madrid) \u00E0 18\u00A0900 \u20AC/an (Universidad Europea, campus variable). Sur 5 ans, le co\u00FBt total se situe entre 47\u00A0100 et 94\u00A0500 \u20AC. Edumove propose des solutions de financement couvrant jusqu\u2019\u00E0 100% des frais.",
      },
      {
        question: "Faut-il parler espagnol pour faire dentaire en Espagne ?",
        answer: "Un niveau B2 en espagnol est recommand\u00E9 car les stages cliniques n\u00E9cessitent de communiquer avec les patients. Les cours th\u00E9oriques des deux premi\u00E8res ann\u00E9es sont plus accessibles. Des cours intensifs d\u2019espagnol sont disponibles en parall\u00E8le de la formation.",
      },
      {
        question: "Quel campus choisir pour le dentaire en Espagne ?",
        answer: "L\u2019Universidad Europea propose le dentaire sur 5 campus : Madrid (le plus grand), Malaga, Valence, Alicante et les Canaries. Le choix d\u00E9pend de vos pr\u00E9f\u00E9rences de cadre de vie et de budget. Madrid offre le plus d\u2019opportunit\u00E9s, tandis que les villes c\u00F4ti\u00E8res offrent un cadre plus d\u00E9tendu et un co\u00FBt de vie plus bas.",
      },
      {
        question: "Peut-on se sp\u00E9cialiser en orthodontie ou implantologie apr\u00E8s ?",
        answer: "Oui, apr\u00E8s le Grado en Odontolog\u00EDa, vous pouvez suivre un Master de sp\u00E9cialisation en Espagne (orthodontie, implantologie, parodontologie, etc.) ou revenir en France pour une sp\u00E9cialisation. Votre dipl\u00F4me de base est reconnu dans toute l\u2019UE, ce qui vous donne une flexibilit\u00E9 totale.",
      },
      {
        question: "Le dipl\u00F4me dentaire espagnol est-il reconnu en France ?",
        answer: "Oui. Le Grado en Odontolog\u00EDa est un dipl\u00F4me conforme au processus de Bologne (300 cr\u00E9dits ECTS), automatiquement reconnu dans les 49 pays signataires. La directive europ\u00E9enne 2005/36/CE garantit la reconnaissance mutuelle : vous pouvez exercer en France en tant que chirurgien-dentiste apr\u00E8s inscription au Conseil de l\u2019Ordre, sans proc\u00E9dure d\u2019\u00E9quivalence.",
      },
      {
        question: "Quelles sont les conditions d\u2019admission en dentaire en Espagne ?",
        answer: "L\u2019admission se fait apr\u00E8s le baccalaur\u00E9at, sans passer par le concours PASS/LAS. \u00C0 l\u2019Universidad Europea, vous passez la Prueba Espec\u00EDfica (4 \u00E9preuves scientifiques). \u00C0 l\u2019UCJC, un entretien de motivation suffit. Votre dossier scolaire, votre motivation et votre projet professionnel sont \u00E9valu\u00E9s. Edumove vous accompagne dans la pr\u00E9paration.",
      },
      {
        question: "Comment financer ses \u00E9tudes dentaires en Espagne ?",
        answer: "Edumove a n\u00E9goci\u00E9 un partenariat avec le LCL pour un pr\u00EAt \u00E9tudiant \u00E0 partir de 75\u00A0000\u00A0\u20AC, couvrant scolarit\u00E9, logement et vie courante. Le remboursement est diff\u00E9r\u00E9 : vous ne remboursez qu\u2019une fois dipl\u00F4m\u00E9 et en exercice. Pendant les \u00E9tudes, seule l\u2019assurance est \u00E0 payer (5 \u00E0 15\u00A0\u20AC/mois).",
      },
      {
        question: "Quelle est la diff\u00E9rence entre le cursus dentaire en France et en Espagne ?",
        answer: "En France, l\u2019acc\u00E8s est conditionn\u00E9 par le PASS/LAS avec un taux d\u2019\u00E9chec tr\u00E8s \u00E9lev\u00E9. En Espagne, l\u2019admission se fait sur dossier et test ou entretien. La formation clinique d\u00E9marre d\u00E8s la 3\u00E8me ann\u00E9e en Espagne (contre plus tard en France), et le dipl\u00F4me est identiquement reconnu dans toute l\u2019UE gr\u00E2ce au processus de Bologne.",
      },
      {
        question: "Quelles universit\u00E9s proposent le dentaire en Espagne avec Edumove ?",
        answer: "Edumove travaille avec deux universit\u00E9s pour le dentaire en Espagne : l\u2019Universidad Europea (5 campus : Madrid, Malaga, Valence, Alicante et Canaries) et l\u2019UCJC \u2014 Universidad Camilo Jos\u00E9 Cela \u00E0 Madrid. Chaque campus a ses sp\u00E9cificit\u00E9s en termes de frais, taille des promos et cadre de vie.",
      },
    ],
  },
  // =========================================================================
  // KINÉSITHÉRAPIE EN ESPAGNE
  // =========================================================================
  {
    countrySlug: "espagne",
    countryName: "Espagne",
    countryFlag: "\u{1F1EA}\u{1F1F8}",
    filiereSlug: "kinesitherapie",
    h1: "Faire Kin\u00E9 en Espagne",
    metaTitle: "Faire Kin\u00E9 en Espagne d\u00E8s 9\u00A0420 \u20AC/an \u2014 Edumove",
    metaDescription:
      "Faire kin\u00E9 en Espagne : cursus de 4 ans d\u00E8s 9\u00A0420 \u20AC/an, formation en fran\u00E7ais disponible \u00E0 Madrid. Admission sur dossier, dipl\u00F4me reconnu UE. UCJC et Universidad Europea.",
    intro:
      "L\u2019Espagne est la destination la plus abordable pour \u00E9tudier la kin\u00E9sith\u00E9rapie en Europe, avec des frais de scolarit\u00E9 d\u00E8s 9\u00A0420 \u20AC par an. Le cursus de 4 ans (240 cr\u00E9dits ECTS) allie enseignement th\u00E9orique, travaux pratiques et stages cliniques en milieu hospitalier. Atout unique : l\u2019Universidad Europea de Madrid propose un programme enti\u00E8rement en fran\u00E7ais, sp\u00E9cialement con\u00E7u pour les \u00E9tudiants francophones. L\u2019admission se fait sur dossier ou via un test d\u2019entr\u00E9e, sans concours de type PASS/LAS.",
    highlights: [
      "La fili\u00E8re la plus abordable d\u00E8s 9\u00A0420 \u20AC/an",
      "Programme en fran\u00E7ais disponible \u00E0 Madrid (Universidad Europea)",
      "Admission sur dossier ou test PE \u2014 sans concours",
      "5 campus : Madrid, Malaga, Valence, Alicante, Canaries",
      "Stages cliniques d\u00E8s la 2\u00E8me ann\u00E9e",
      "Dipl\u00F4me Grado en Fisioterapia reconnu dans toute l\u2019UE",
    ],
    whyThisCountry:
      "La kin\u00E9sith\u00E9rapie en Espagne se distingue par son accessibilit\u00E9 financi\u00E8re et la diversit\u00E9 de ses programmes. Avec des frais d\u00E8s 9\u00A0420 \u20AC/an \u00E0 l\u2019UCJC, c\u2019est l\u2019option la moins ch\u00E8re parmi toutes nos universit\u00E9s partenaires en Europe. L\u2019Universidad Europea propose la formation sur 5 campus diff\u00E9rents, avec une particularit\u00E9 unique : un programme enti\u00E8rement en fran\u00E7ais \u00E0 Madrid, id\u00E9al pour les \u00E9tudiants qui ne ma\u00EEtrisent pas encore l\u2019espagnol. Les stages cliniques d\u00E9butent d\u00E8s la 2\u00E8me ann\u00E9e dans des centres de r\u00E9\u00E9ducation, des h\u00F4pitaux et des clubs sportifs partenaires, offrant une exp\u00E9rience pratique incomparable.",
    sections: [
      {
        title: "Le cursus de kin\u00E9sith\u00E9rapie en Espagne",
        content: "Le Grado en Fisioterapia dure 4 ans (240 ECTS). La premi\u00E8re ann\u00E9e couvre les bases scientifiques : anatomie, physiologie, biom\u00E9canique et kinesiology. D\u00E8s la 2\u00E8me ann\u00E9e, les \u00E9tudiants commencent les stages cliniques dans des h\u00F4pitaux, des centres de r\u00E9\u00E9ducation et des cliniques sportives. Les 3\u00E8me et 4\u00E8me ann\u00E9es approfondissent les techniques sp\u00E9cialis\u00E9es : th\u00E9rapie manuelle, kin\u00E9sith\u00E9rapie respiratoire, neurologique, sportive et p\u00E9diatrique. Le m\u00E9moire de fin d\u2019\u00E9tudes (TFG) cl\u00F4ture le cursus."
      },
      {
        title: "Formation en fran\u00E7ais \u00E0 Madrid : une option unique",
        content: "L\u2019Universidad Europea de Madrid propose un programme de kin\u00E9sith\u00E9rapie enti\u00E8rement en fran\u00E7ais, con\u00E7u sp\u00E9cifiquement pour les \u00E9tudiants francophones. Les cours, les examens et l\u2019encadrement se font en fran\u00E7ais, ce qui \u00E9limine la barri\u00E8re linguistique pendant les premi\u00E8res ann\u00E9es. En parall\u00E8le, vous apprenez l\u2019espagnol progressivement pour les stages cliniques. C\u2019est la seule formation de ce type en Europe, et elle attire chaque ann\u00E9e des dizaines d\u2019\u00E9tudiants fran\u00E7ais, belges et suisses."
      },
      {
        title: "Budget et financement",
        content: "Les frais de scolarit\u00E9 varient de 9\u00A0420 \u20AC/an (UCJC) \u00E0 14\u00A0580 \u20AC/an (Universidad Europea, programme en fran\u00E7ais). Sur 4 ans, le co\u00FBt total se situe entre 37\u00A0680 et 58\u00A0320 \u20AC \u2014 nettement inf\u00E9rieur aux \u00E9coles priv\u00E9es de kin\u00E9 en France. Le co\u00FBt de la vie en Espagne (\u00E0 Madrid ou dans les villes c\u00F4ti\u00E8res) reste 15 \u00E0 20% moins cher qu\u2019en France. Edumove propose un financement int\u00E9gral via nos partenaires bancaires."
      },
    ],
    diplomaRecognition:
      "Le Grado en Fisioterapia est reconnu dans toute l\u2019Union europ\u00E9enne gr\u00E2ce au syst\u00E8me ECTS et \u00E0 la directive 2005/36/CE. En France, vous pourrez exercer en tant que masseur-kin\u00E9sith\u00E9rapeute apr\u00E8s inscription au Conseil de l\u2019Ordre. La formation espagnole de 4 ans (240 ECTS) est \u00E9quivalente au cursus fran\u00E7ais en termes de volume horaire et de comp\u00E9tences acquises.",
    faq: [
      {
        question: "Peut-on faire kin\u00E9 en fran\u00E7ais en Espagne ?",
        answer: "Oui ! L\u2019Universidad Europea de Madrid propose un programme de kin\u00E9sith\u00E9rapie enti\u00E8rement en fran\u00E7ais. Les cours, examens et l\u2019encadrement sont en fran\u00E7ais, avec un apprentissage progressif de l\u2019espagnol pour les stages cliniques. C\u2019est la seule formation de ce type en Europe.",
      },
      {
        question: "Quel est le co\u00FBt des \u00E9tudes de kin\u00E9 en Espagne ?",
        answer: "Les frais d\u00E9marrent \u00E0 9\u00A0420 \u20AC/an \u00E0 l\u2019UCJC Madrid (la moins ch\u00E8re de nos universit\u00E9s partenaires). Le programme en fran\u00E7ais \u00E0 l\u2019Universidad Europea co\u00FBte environ 14\u00A0580 \u20AC/an. Sur 4 ans, le budget total est de 37\u00A0680 \u00E0 58\u00A0320 \u20AC.",
      },
      {
        question: "Comment se passe l\u2019admission en kin\u00E9 en Espagne ?",
        answer: "L\u2019admission varie : sur dossier pour le programme en fran\u00E7ais \u00E0 l\u2019UE Madrid, via la Prueba Espec\u00EDfica pour les autres campus de l\u2019UE, et par entretien \u00E0 l\u2019UCJC. Dans tous les cas, il n\u2019y a pas de concours PASS/LAS. Edumove vous guide dans le choix du campus et la pr\u00E9paration du dossier.",
      },
      {
        question: "Quels d\u00E9bouch\u00E9s apr\u00E8s kin\u00E9 en Espagne ?",
        answer: "Le dipl\u00F4me vous permet d\u2019exercer en lib\u00E9ral ou en salari\u00E9 dans toute l\u2019UE : cabinets de kin\u00E9sith\u00E9rapie, h\u00F4pitaux, centres de r\u00E9\u00E9ducation, clubs sportifs, thalassoth\u00E9rapie. La kin\u00E9sith\u00E9rapie est une profession en tension en France, avec une insertion professionnelle quasi imm\u00E9diate.",
      },
      {
        question: "Quel campus choisir pour kin\u00E9 en Espagne ?",
        answer: "Si vous ne parlez pas espagnol, le programme en fran\u00E7ais \u00E0 Madrid est id\u00E9al. Pour le meilleur rapport qualit\u00E9-prix, l\u2019UCJC Madrid \u00E0 9\u00A0420 \u20AC/an. Pour un cadre de vie c\u00F4tier, Valence, Malaga, Alicante ou les Canaries offrent des alternatives attractives avec un co\u00FBt de vie plus bas.",
      },
    ],
  },
  // =========================================================================
  // PHARMACIE EN ESPAGNE
  // =========================================================================
  {
    countrySlug: "espagne",
    countryName: "Espagne",
    countryFlag: "\u{1F1EA}\u{1F1F8}",
    filiereSlug: "pharmacie",
    h1: "\u00C9tudes de Pharmacie en Espagne",
    metaTitle: "\u00C9tudes de Pharmacie en Espagne sans concours \u2014 Edumove",
    metaDescription:
      "Faire pharmacie en Espagne : cursus de 5 ans \u00E0 Madrid sans PASS/LAS, admission sur dossier ou entretien. UCJC et Universidad Europea. Dipl\u00F4me reconnu UE, financement 100%.",
    intro:
      "L\u2019Espagne offre une voie d\u2019acc\u00E8s directe aux \u00E9tudes de pharmacie, sans passer par le concours PASS/LAS fran\u00E7ais. Le cursus de 5 ans \u00E0 Madrid forme des pharmaciens polyvalents avec un dipl\u00F4me reconnu dans toute l\u2019Union europ\u00E9enne. L\u2019admission est simplifi\u00E9e : sur dossier ou par entretien de motivation, sans test \u00E9crit dans la plupart des cas. Nos deux universit\u00E9s partenaires (UCJC et Universidad Europea) sont situ\u00E9es \u00E0 Madrid et proposent un encadrement adapt\u00E9 aux \u00E9tudiants internationaux.",
    highlights: [
      "Admission sur dossier ou entretien \u2014 sans test \u00E9crit",
      "Cursus complet de 5 ans \u00E0 Madrid",
      "Pas de num\u00E9rus clausus ni de concours PASS/LAS",
      "Stages en officine, h\u00F4pital et industrie pharmaceutique",
      "Dipl\u00F4me Grado en Farmacia reconnu dans toute l\u2019UE",
      "Financement possible jusqu\u2019\u00E0 100% via nos partenaires bancaires",
    ],
    whyThisCountry:
      "La pharmacie en Espagne se distingue par la simplicit\u00E9 de son admission et la qualit\u00E9 de sa formation. Contrairement \u00E0 la France o\u00F9 le PASS/LAS est un obstacle majeur, les universit\u00E9s espagnoles proposent une admission sur dossier ou entretien, rendant la fili\u00E8re accessible aux bacheliers motiv\u00E9s. Le cursus de 5 ans couvre l\u2019ensemble des comp\u00E9tences pharmaceutiques \u2014 chimie, pharmacologie, gal\u00E9nique, biologie clinique \u2014 avec des stages pratiques en officine, en h\u00F4pital et dans l\u2019industrie pharmaceutique. Madrid, capitale dynamique et centre \u00E9conomique de l\u2019Espagne, offre un environnement id\u00E9al pour \u00E9tudier et se construire un r\u00E9seau professionnel.",
    sections: [
      {
        title: "Le programme de pharmacie en Espagne",
        content: "Le Grado en Farmacia dure 5 ans et couvre un programme complet : chimie pharmaceutique, pharmacologie, toxicologie, biochimie clinique, technologie pharmaceutique (gal\u00E9nique), pharmacie hospitali\u00E8re et sant\u00E9 publique. Les stages pratiques commencent d\u00E8s la 3\u00E8me ann\u00E9e en laboratoire, puis se poursuivent en 4\u00E8me et 5\u00E8me ann\u00E9e en officine, en h\u00F4pital ou dans l\u2019industrie pharmaceutique. Le m\u00E9moire de fin d\u2019\u00E9tudes (Trabajo de Fin de Grado) cl\u00F4ture le cursus."
      },
      {
        title: "Admission simplifi\u00E9e",
        content: "L\u2019admission en pharmacie en Espagne est l\u2019une des plus accessibles parmi les fili\u00E8res de sant\u00E9. \u00C0 l\u2019UCJC, un entretien de motivation suffit \u2014 il n\u2019y a aucun test \u00E9crit. \u00C0 l\u2019Universidad Europea, l\u2019admission se fait sur dossier. Aucune des deux universit\u00E9s n\u2019impose de concours \u00E9liminatoire. C\u2019est une opportunit\u00E9 pour les \u00E9tudiants qui ont un bon dossier scolaire mais qui ne souhaitent pas tenter le PASS/LAS en France."
      },
      {
        title: "Co\u00FBt et vie \u00E9tudiante \u00E0 Madrid",
        content: "Les frais de scolarit\u00E9 vont de 9\u00A0420 \u20AC/an (UCJC) \u00E0 environ 15\u00A0000 \u20AC/an (Universidad Europea). Sur 5 ans, le co\u00FBt total se situe entre 47\u00A0100 et 75\u00A0000 \u20AC. Madrid offre un cadre de vie dynamique avec un co\u00FBt 15 \u00E0 20% inf\u00E9rieur \u00E0 Paris. Les pharmacies espagnoles recrutent activement, ce qui offre des perspectives de jobs \u00E9tudiants en parall\u00E8le des \u00E9tudes."
      },
    ],
    diplomaRecognition:
      "Le Grado en Farmacia est automatiquement reconnu dans tous les pays de l\u2019Union europ\u00E9enne gr\u00E2ce \u00E0 la directive 2005/36/CE. Vous pourrez exercer en France en tant que pharmacien d\u2019officine, pharmacien hospitalier ou dans l\u2019industrie pharmaceutique, apr\u00E8s inscription au Conseil National de l\u2019Ordre des Pharmaciens.",
    faq: [
      {
        question: "Faut-il un test pour entrer en pharmacie en Espagne ?",
        answer: "Non, l\u2019admission se fait sur dossier (\u00E0 l\u2019Universidad Europea) ou via un entretien de motivation (\u00E0 l\u2019UCJC). Il n\u2019y a pas de test \u00E9crit ni de concours \u00E9liminatoire, ce qui rend la fili\u00E8re tr\u00E8s accessible.",
      },
      {
        question: "Combien co\u00FBtent les \u00E9tudes de pharmacie en Espagne ?",
        answer: "Les frais varient de 9\u00A0420 \u20AC/an (UCJC) \u00E0 environ 15\u00A0000 \u20AC/an (Universidad Europea). Sur 5 ans, le co\u00FBt total est de 47\u00A0100 \u00E0 75\u00A0000 \u20AC. Edumove propose un financement jusqu\u2019\u00E0 100% via nos partenaires bancaires.",
      },
      {
        question: "Peut-on exercer en France avec un dipl\u00F4me de pharmacie espagnol ?",
        answer: "Oui, le Grado en Farmacia est reconnu dans toute l\u2019UE. Vous pouvez exercer en France comme pharmacien d\u2019officine, hospitalier ou dans l\u2019industrie apr\u00E8s inscription au Conseil de l\u2019Ordre. Aucune proc\u00E9dure d\u2019\u00E9quivalence n\u2019est n\u00E9cessaire.",
      },
      {
        question: "Quels sont les d\u00E9bouch\u00E9s apr\u00E8s pharmacie en Espagne ?",
        answer: "Le dipl\u00F4me ouvre sur de nombreux d\u00E9bouch\u00E9s : pharmacie d\u2019officine (lib\u00E9ral ou salari\u00E9), pharmacie hospitali\u00E8re, industrie pharmaceutique (R&D, production, affaires r\u00E9glementaires), biologie m\u00E9dicale, cosm\u00E9tique, et sant\u00E9 publique. La pharmacie est une profession en demande dans toute l\u2019Europe.",
      },
      {
        question: "Faut-il parler espagnol pour \u00E9tudier la pharmacie en Espagne ?",
        answer: "Un niveau de base en espagnol est suffisant pour d\u00E9buter. Les premi\u00E8res ann\u00E9es sont principalement th\u00E9oriques et l\u2019espagnol s\u2019acquiert rapidement en immersion. Pour les stages en officine (4\u00E8me-5\u00E8me ann\u00E9e), un niveau conversationnel est n\u00E9cessaire pour conseiller les patients.",
      },
    ],
  },
  // =========================================================================
  // VÉTÉRINAIRE EN ESPAGNE
  // =========================================================================
  {
    countrySlug: "espagne",
    countryName: "Espagne",
    countryFlag: "\u{1F1EA}\u{1F1F8}",
    filiereSlug: "veterinaire",
    h1: "\u00C9tudes V\u00E9t\u00E9rinaires en Espagne",
    metaTitle: "\u00C9tudes V\u00E9t\u00E9rinaires en Espagne \u2014 Alternative au concours v\u00E9to | Edumove",
    metaDescription:
      "Faire v\u00E9t\u00E9rinaire en Espagne : cursus de 5 ans \u00E0 Madrid (Universidad Europea), admission via Prueba Espec\u00EDfica. Alternative au concours v\u00E9to fran\u00E7ais. Dipl\u00F4me reconnu UE.",
    intro:
      "Le concours d\u2019entr\u00E9e en \u00E9cole v\u00E9t\u00E9rinaire en France est l\u2019un des plus s\u00E9lectifs de l\u2019enseignement sup\u00E9rieur, avec un taux d\u2019admission extr\u00EAmement faible. L\u2019Espagne offre une alternative s\u00E9rieuse et reconnue : l\u2019Universidad Europea de Madrid propose un cursus v\u00E9t\u00E9rinaire complet de 5 ans, avec une admission via la Prueba Espec\u00EDfica (PE) compos\u00E9e de 4 \u00E9preuves scientifiques. Le dipl\u00F4me obtenu (Grado en Veterinaria) est reconnu dans toute l\u2019Union europ\u00E9enne.",
    highlights: [
      "Alternative au concours v\u00E9to fran\u00E7ais ultra-s\u00E9lectif",
      "Cursus de 5 ans \u00E0 l\u2019Universidad Europea de Madrid",
      "Admission via Prueba Espec\u00EDfica (4 \u00E9preuves scientifiques)",
      "Stages cliniques dans des cliniques v\u00E9t\u00E9rinaires et exploitations",
      "Dipl\u00F4me Grado en Veterinaria reconnu dans toute l\u2019UE",
      "Financement possible jusqu\u2019\u00E0 100% via nos partenaires bancaires",
    ],
    whyThisCountry:
      "En France, seules 4 \u00E9coles v\u00E9t\u00E9rinaires nationales (ENV) existent, avec un concours d\u2019entr\u00E9e parmi les plus s\u00E9lectifs. L\u2019Espagne propose une alternative de qualit\u00E9 avec l\u2019Universidad Europea de Madrid. Le cursus de 5 ans combine sciences fondamentales, sciences cliniques et stages pratiques dans des cliniques v\u00E9t\u00E9rinaires, des \u00E9levages et des exploitations agricoles partenaires. L\u2019admission se fait via la Prueba Espec\u00EDfica (PE), un examen accessible et bien pr\u00E9par\u00E9 par Edumove, qui \u00E9value vos connaissances en biologie, chimie, math\u00E9matiques et anglais. C\u2019est une opportunit\u00E9 concr\u00E8te pour les passionn\u00E9s d\u2019animaux qui n\u2019ont pas r\u00E9ussi ou ne souhaitent pas tenter le concours fran\u00E7ais.",
    sections: [
      {
        title: "Le cursus v\u00E9t\u00E9rinaire en Espagne",
        content: "Le Grado en Veterinaria dure 5 ans et couvre l\u2019ensemble des comp\u00E9tences v\u00E9t\u00E9rinaires. Les deux premi\u00E8res ann\u00E9es sont consacr\u00E9es aux sciences fondamentales : anatomie animale, physiologie, biochimie, microbiologie et parasitologie. \u00C0 partir de la 3\u00E8me ann\u00E9e, la formation devient clinique avec des rotations dans les diff\u00E9rentes sp\u00E9cialit\u00E9s : m\u00E9decine interne, chirurgie, reproduction, animaux de compagnie, \u00E9quins et animaux de production. Les stages en clinique v\u00E9t\u00E9rinaire et en exploitation agricole permettent une immersion professionnelle compl\u00E8te."
      },
      {
        title: "Admission : la Prueba Espec\u00EDfica (PE)",
        content: "L\u2019admission \u00E0 l\u2019Universidad Europea se fait via la Prueba Espec\u00EDfica, un examen compos\u00E9 de 4 \u00E9preuves : biologie, chimie, math\u00E9matiques et anglais. Cet examen est bien moins s\u00E9lectif que le concours v\u00E9to fran\u00E7ais. Edumove vous pr\u00E9pare sp\u00E9cifiquement \u00E0 ce test : cours de pr\u00E9paration, annales comment\u00E9es, simulations d\u2019examen et suivi personnalis\u00E9. Le taux de r\u00E9ussite de nos \u00E9tudiants accompagn\u00E9s est tr\u00E8s \u00E9lev\u00E9."
      },
      {
        title: "Budget et co\u00FBt de la formation",
        content: "Les frais de scolarit\u00E9 pour le v\u00E9t\u00E9rinaire \u00E0 l\u2019Universidad Europea de Madrid sont d\u2019environ 17\u00A0340 \u20AC par an. Sur 5 ans, le co\u00FBt total est d\u2019environ 86\u00A0700 \u20AC. C\u2019est un investissement important, mais comparable aux \u00E9coles v\u00E9t\u00E9rinaires priv\u00E9es dans d\u2019autres pays europ\u00E9ens. Edumove propose un financement int\u00E9gral via nos partenaires bancaires, avec un pr\u00EAt \u00E9tudiant \u00E0 taux pr\u00E9f\u00E9rentiel pouvant aller jusqu\u2019\u00E0 75\u00A0000 \u20AC. Le co\u00FBt de la vie \u00E0 Madrid (700-1\u00A0000 \u20AC/mois) reste inf\u00E9rieur \u00E0 Paris ou Lyon."
      },
    ],
    diplomaRecognition:
      "Le Grado en Veterinaria est un dipl\u00F4me europ\u00E9en automatiquement reconnu dans tous les pays de l\u2019UE gr\u00E2ce \u00E0 la directive 2005/36/CE. Vous pourrez exercer en France en tant que v\u00E9t\u00E9rinaire apr\u00E8s inscription au Conseil National de l\u2019Ordre des V\u00E9t\u00E9rinaires, sans aucune proc\u00E9dure d\u2019\u00E9quivalence. De nombreux v\u00E9t\u00E9rinaires form\u00E9s en Espagne exercent d\u00E9j\u00E0 avec succ\u00E8s en France.",
    faq: [
      {
        question: "Comment entrer en \u00E9cole v\u00E9t\u00E9rinaire en Espagne ?",
        answer: "L\u2019admission se fait via la Prueba Espec\u00EDfica (PE), un examen compos\u00E9 de 4 \u00E9preuves scientifiques (biologie, chimie, maths, anglais). C\u2019est bien moins s\u00E9lectif que le concours v\u00E9to fran\u00E7ais (ENV). Edumove vous pr\u00E9pare sp\u00E9cifiquement \u00E0 ce test avec un taux de r\u00E9ussite \u00E9lev\u00E9.",
      },
      {
        question: "Combien co\u00FBtent les \u00E9tudes v\u00E9t\u00E9rinaires en Espagne ?",
        answer: "Les frais sont d\u2019environ 17\u00A0340 \u20AC par an \u00E0 l\u2019Universidad Europea de Madrid, soit environ 86\u00A0700 \u20AC sur 5 ans. Edumove propose un financement pouvant couvrir jusqu\u2019\u00E0 100% via un pr\u00EAt \u00E9tudiant \u00E0 taux pr\u00E9f\u00E9rentiel.",
      },
      {
        question: "O\u00F9 peut-on faire v\u00E9t\u00E9rinaire en Espagne avec Edumove ?",
        answer: "La formation v\u00E9t\u00E9rinaire est propos\u00E9e exclusivement \u00E0 l\u2019Universidad Europea de Madrid. C\u2019est la seule universit\u00E9 partenaire pour cette fili\u00E8re, avec un campus moderne \u00E9quip\u00E9 d\u2019un h\u00F4pital v\u00E9t\u00E9rinaire universitaire.",
      },
      {
        question: "Le dipl\u00F4me v\u00E9t\u00E9rinaire espagnol est-il reconnu en France ?",
        answer: "Oui, le Grado en Veterinaria est automatiquement reconnu dans toute l\u2019UE. Vous pourrez exercer en France apr\u00E8s inscription au Conseil de l\u2019Ordre des V\u00E9t\u00E9rinaires, sans \u00E9quivalence ni examen suppl\u00E9mentaire. De nombreux v\u00E9t\u00E9rinaires form\u00E9s en Espagne exercent d\u00E9j\u00E0 en France.",
      },
      {
        question: "Quels d\u00E9bouch\u00E9s apr\u00E8s v\u00E9t\u00E9rinaire en Espagne ?",
        answer: "Le dipl\u00F4me ouvre sur de nombreux d\u00E9bouch\u00E9s : clinique v\u00E9t\u00E9rinaire (animaux de compagnie), m\u00E9decine \u00E9quine, animaux de production (\u00E9levage), industrie agroalimentaire, recherche, sant\u00E9 publique v\u00E9t\u00E9rinaire, et organisations internationales (OIE, FAO). La profession est en demande croissante en France et en Europe.",
      },
    ],
  },
  // =========================================================================
  // MÉDECINE EN ITALIE
  // =========================================================================
  {
    countrySlug: "italie",
    countryName: "Italie",
    countryFlag: "\u{1F1EE}\u{1F1F9}",
    filiereSlug: "medecine",
    h1: "\u00C9tudes de M\u00E9decine en Italie",
    metaTitle: "\u00C9tudes de M\u00E9decine en Italie \u2014 LINK Campus Rome | Edumove",
    metaDescription:
      "Faire m\u00E9decine en Italie : 6 ans \u00E0 Rome (LINK Campus University), test d\u2019admission en fran\u00E7ais, cours d\u2019italien inclus. Dipl\u00F4me reconnu UE. 19\u00A0800 \u20AC/an.",
    intro:
      "Rome, 6 ans de m\u00E9decine, un test d\u2019entr\u00E9e en fran\u00E7ais et un dipl\u00F4me reconnu dans toute l\u2019UE. LINK Campus University propose un cursus m\u00E9dical complet avec un avantage que peu d\u2019universit\u00E9s offrent : le QCM d\u2019admission se passe int\u00E9gralement en fran\u00E7ais (tu peux m\u00EAme le passer \u00E0 Paris). Pas besoin de parler italien avant d\u2019arriver \u2014 un cours intensif est inclus d\u00E8s la premi\u00E8re ann\u00E9e. Rome \u00E0 2h de Paris, la dolce vita en prime.",
    highlights: [
      "Test d\u2019admission en fran\u00E7ais (QCM 5 mati\u00E8res)",
      "Cours d\u2019italien intensif inclus en 1\u00E8re ann\u00E9e",
      "Possibilit\u00E9 de passer le test \u00E0 Paris",
      "Dipl\u00F4me reconnu dans toute l\u2019Union europ\u00E9enne",
      "Rome \u00E0 2h d\u2019avion de Paris (FCO)",
      "Financement possible jusqu\u2019\u00E0 100% via nos partenaires bancaires",
    ],
    whyThisCountry:
      "LINK Campus University \u00E0 Rome propose un cursus m\u00E9dical de 6 ans en italien, avec un atout majeur : le test d\u2019admission est int\u00E9gralement en fran\u00E7ais. C\u2019est un vrai game-changer pour les \u00E9tudiants francophones qui veulent \u00E9viter les barri\u00E8res linguistiques \u00E0 l\u2019entr\u00E9e. Un programme d\u2019italien intensif est int\u00E9gr\u00E9 d\u00E8s la premi\u00E8re ann\u00E9e, ce qui permet d\u2019arriver sans aucun pr\u00E9requis en italien. L\u2019universit\u00E9 est \u00E0 taille humaine, avec un suivi personnalis\u00E9 des \u00E9tudiants internationaux et des stages cliniques dans les h\u00F4pitaux romains.",
    sections: [
      {
        title: "Le cursus m\u00E9dical \u00E0 LINK Campus Rome",
        content: "Le cursus dure 6 ans et suit le mod\u00E8le europ\u00E9en standard. Les deux premi\u00E8res ann\u00E9es couvrent les sciences fondamentales : anatomie, physiologie, biochimie, histologie et biologie cellulaire, accompagn\u00E9es du cours d\u2019italien intensif. \u00C0 partir de la 3\u00E8me ann\u00E9e, place \u00E0 la clinique : s\u00E9miologie, pathologie m\u00E9dicale, chirurgie, puis rotations hospitali\u00E8res en 4\u00E8me et 5\u00E8me ann\u00E9e. La 6\u00E8me ann\u00E9e est enti\u00E8rement consacr\u00E9e aux stages cliniques rotatifs (tirocinio) dans les h\u00F4pitaux partenaires de Rome. L\u2019enseignement est en italien, mais ne t\u2019inqui\u00E8te pas : apr\u00E8s un an d\u2019immersion et le cours intensif, tu seras \u00E0 l\u2019aise."
      },
      {
        title: "Admission : un QCM en fran\u00E7ais, c\u2019est rare",
        content: "C\u2019est le gros avantage de LINK Campus : le test d\u2019admission est un QCM compos\u00E9 de 5 mati\u00E8res (biologie, chimie, physique, logique et culture g\u00E9n\u00E9rale), et il est int\u00E9gralement en fran\u00E7ais. Tu peux m\u00EAme le passer \u00E0 Paris, sans avoir \u00E0 te d\u00E9placer \u00E0 Rome. Pas de pi\u00E8ge linguistique, pas de stress suppl\u00E9mentaire \u2014 tu es \u00E9valu\u00E9 sur tes connaissances scientifiques, point. Edumove te pr\u00E9pare sp\u00E9cifiquement \u00E0 ce QCM : cours de pr\u00E9paration, annales, simulations. Le taux de r\u00E9ussite de nos \u00E9tudiants accompagn\u00E9s est excellent."
      },
      {
        title: "Budget : combien co\u00FBte m\u00E9decine \u00E0 Rome ?",
        content: "Les frais de scolarit\u00E9 sont de 19\u00A0800 \u20AC par an. Sur 6 ans, le co\u00FBt total est de 118\u00A0800 \u20AC. C\u2019est un investissement cons\u00E9quent, mais comparable aux autres formations m\u00E9dicales priv\u00E9es en Europe. Le co\u00FBt de la vie \u00E0 Rome est raisonnable : compte 400 \u00E0 650 \u20AC pour un logement en colocation, 200 \u00E0 300 \u20AC pour l\u2019alimentation et environ 35 \u20AC par mois pour les transports (abonnement \u00E9tudiant). Budget mensuel total hors scolarit\u00E9 : 700 \u00E0 1\u00A0000 \u20AC. Edumove propose des solutions de financement couvrant jusqu\u2019\u00E0 100% des frais via nos partenaires bancaires."
      },
    ],
    diplomaRecognition:
      "Le dipl\u00F4me de m\u00E9decine obtenu \u00E0 LINK Campus University (Laurea Magistrale in Medicina e Chirurgia) est automatiquement reconnu dans tous les pays de l\u2019Union europ\u00E9enne gr\u00E2ce \u00E0 la directive 2005/36/CE. Tu pourras exercer en France apr\u00E8s inscription au Conseil National de l\u2019Ordre des M\u00E9decins, sans proc\u00E9dure d\u2019\u00E9quivalence. Le syst\u00E8me ECTS garantit la compatibilit\u00E9 totale de ton parcours.",
    faq: [
      {
        question: "Le test d\u2019admission est vraiment en fran\u00E7ais ?",
        answer: "Oui, \u00E0 100%. Le QCM d\u2019entr\u00E9e de LINK Campus est r\u00E9dig\u00E9 int\u00E9gralement en fran\u00E7ais. Il couvre 5 mati\u00E8res : biologie, chimie, physique, logique et culture g\u00E9n\u00E9rale. Tu peux m\u00EAme le passer \u00E0 Paris sans te d\u00E9placer \u00E0 Rome. C\u2019est un avantage unique par rapport aux autres universit\u00E9s europ\u00E9ennes.",
      },
      {
        question: "Faut-il parler italien pour \u00E9tudier la m\u00E9decine en Italie ?",
        answer: "Non, pas au d\u00E9part. LINK Campus inclut un cours d\u2019italien intensif d\u00E8s la premi\u00E8re ann\u00E9e, sp\u00E9cialement con\u00E7u pour les \u00E9tudiants internationaux. La plupart des \u00E9tudiants fran\u00E7ais arrivent sans parler un mot d\u2019italien et atteignent un niveau courant en quelques mois d\u2019immersion \u00E0 Rome.",
      },
      {
        question: "Combien co\u00FBtent les \u00E9tudes de m\u00E9decine \u00E0 Rome ?",
        answer: "Les frais sont de 19\u00A0800 \u20AC par an \u00E0 LINK Campus, soit 118\u00A0800 \u20AC sur 6 ans. Le co\u00FBt de la vie \u00E0 Rome est raisonnable (700-1\u00A0000 \u20AC/mois hors scolarit\u00E9). Edumove propose un financement couvrant jusqu\u2019\u00E0 100% des frais via nos partenaires bancaires.",
      },
      {
        question: "Le dipl\u00F4me de m\u00E9decine italien est-il reconnu en France ?",
        answer: "Oui, la Laurea Magistrale in Medicina e Chirurgia est reconnue dans toute l\u2019UE gr\u00E2ce \u00E0 la directive 2005/36/CE. Tu peux exercer en France en t\u2019inscrivant au Conseil de l\u2019Ordre des M\u00E9decins, sans \u00E9quivalence ni examen suppl\u00E9mentaire.",
      },
      {
        question: "Peut-on passer le test d\u2019admission \u00E0 Paris ?",
        answer: "Oui ! LINK Campus organise des sessions de test \u00E0 Paris, ce qui t\u2019\u00E9vite de devoir te d\u00E9placer \u00E0 Rome uniquement pour l\u2019examen d\u2019entr\u00E9e. Edumove t\u2019informe des dates et te pr\u00E9pare sp\u00E9cifiquement au format du QCM.",
      },
    ],
  },
  // =========================================================================
  // DENTAIRE EN ITALIE
  // =========================================================================
  {
    countrySlug: "italie",
    countryName: "Italie",
    countryFlag: "\u{1F1EE}\u{1F1F9}",
    filiereSlug: "dentaire",
    h1: "\u00C9tudes Dentaires en Italie",
    metaTitle: "\u00C9tudes Dentaires en Italie \u00E0 19\u00A0800 \u20AC/an \u2014 LINK Campus Rome | Edumove",
    metaDescription:
      "Faire dentaire en Italie : 6 ans \u00E0 Rome (LINK Campus), test en fran\u00E7ais, 19\u00A0800 \u20AC/an. Cours d\u2019italien inclus. Dipl\u00F4me reconnu UE. Admission QCM \u00E0 Paris.",
    intro:
      "Dentaire \u00E0 19\u00A0800 \u20AC par an, test d\u2019admission en fran\u00E7ais, \u00E0 Rome. LINK Campus University propose un cursus d\u2019odontologie de 6 ans avec un dipl\u00F4me reconnu dans toute l\u2019UE. Le QCM d\u2019entr\u00E9e est en fran\u00E7ais (passable \u00E0 Paris), et un cours d\u2019italien intensif est inclus d\u00E8s le d\u00E9but. Pas de PASS, pas de LAS \u2014 juste tes connaissances scientifiques.",
    highlights: [
      "Frais de scolarit\u00E9 \u00E0 19\u00A0800 \u20AC/an",
      "Test d\u2019admission QCM int\u00E9gralement en fran\u00E7ais",
      "Cours d\u2019italien intensif inclus en 1\u00E8re ann\u00E9e",
      "Possibilit\u00E9 de passer le test \u00E0 Paris",
      "Dipl\u00F4me reconnu dans toute l\u2019Union europ\u00E9enne",
      "Financement possible jusqu\u2019\u00E0 100% via nos partenaires bancaires",
    ],
    whyThisCountry:
      "LINK Campus University \u00E0 Rome offre un cursus dentaire de 6 ans \u00E0 19\u00A0800 \u20AC par an. L\u2019admission se fait via un QCM en fran\u00E7ais \u2014 m\u00EAme format que pour m\u00E9decine \u2014 ce qui \u00E9limine le stress de la barri\u00E8re linguistique \u00E0 l\u2019entr\u00E9e. L\u2019universit\u00E9 est \u00E0 taille humaine, avec un encadrement rapproch\u00E9 et des stages cliniques dans les structures hospitali\u00E8res romaines.",
    sections: [
      {
        title: "Le cursus dentaire \u00E0 LINK Campus Rome",
        content: "Le cursus d\u2019odontologie dure 6 ans. La premi\u00E8re ann\u00E9e combine sciences fondamentales (anatomie, physiologie, biochimie, biologie cellulaire) et cours d\u2019italien intensif. La 2\u00E8me ann\u00E9e approfondit les sciences pr\u00E9cliniques : mat\u00E9riaux dentaires, anatomie de la t\u00EAte et du cou, histologie buccale. \u00C0 partir de la 3\u00E8me ann\u00E9e, la formation devient clinique : soins conservateurs, endodontie, parodontologie. Les 4\u00E8me et 5\u00E8me ann\u00E9es sont consacr\u00E9es \u00E0 la pratique avanc\u00E9e sur patients r\u00E9els : proth\u00E8ses, chirurgie orale, p\u00E9dodontie. La 6\u00E8me ann\u00E9e consolide les comp\u00E9tences cliniques et conclut avec la th\u00E8se de fin d\u2019\u00E9tudes."
      },
      {
        title: "Admission : QCM en fran\u00E7ais, passable \u00E0 Paris",
        content: "L\u2019admission se fait via un QCM de 5 mati\u00E8res : biologie, chimie, physique, logique et culture g\u00E9n\u00E9rale. Tout est en fran\u00E7ais. Tu peux le passer \u00E0 Paris ou \u00E0 Rome, au choix. Aucun pr\u00E9requis en italien n\u2019est demand\u00E9 \u00E0 l\u2019entr\u00E9e : le cours intensif d\u2019italien est l\u00E0 pour \u00E7a. Edumove te pr\u00E9pare au QCM avec des cours cibl\u00E9s, des annales et des simulations. On ne te l\u00E2che pas tant que tu n\u2019es pas admis."
      },
      {
        title: "Budget : dentaire \u00E0 Rome, combien \u00E7a co\u00FBte ?",
        content: "Les frais de scolarit\u00E9 sont de 19\u00A0800 \u20AC par an. Sur 6 ans, \u00E7a fait 118\u00A0800 \u20AC au total. Le co\u00FBt de la vie \u00E0 Rome est comparable \u00E0 celui d\u2019une ville moyenne fran\u00E7aise : 400-650 \u20AC pour un logement en colocation, 200-300 \u20AC pour manger, 35 \u20AC de transports. Total mensuel hors scolarit\u00E9 : 700-1\u00A0000 \u20AC. Avec le financement Edumove, les frais de scolarit\u00E9 peuvent \u00EAtre couverts jusqu\u2019\u00E0 100%."
      },
    ],
    diplomaRecognition:
      "Le dipl\u00F4me d\u2019odontologie de LINK Campus (Laurea Magistrale in Odontoiatria e Protesi Dentaria) est automatiquement reconnu dans tous les pays de l\u2019Union europ\u00E9enne gr\u00E2ce \u00E0 la directive 2005/36/CE. Tu pourras exercer en France en tant que chirurgien-dentiste apr\u00E8s inscription au Conseil de l\u2019Ordre, sans aucune proc\u00E9dure d\u2019\u00E9quivalence.",
    faq: [
      {
        question: "Combien co\u00FBte le dentaire \u00E0 LINK Campus ?",
        answer: "Les frais de scolarit\u00E9 sont de 19\u00A0800 \u20AC par an, soit 118\u00A0800 \u20AC sur 6 ans. LINK Campus est une universit\u00E9 priv\u00E9e \u00E0 taille humaine \u00E0 Rome. Le dipl\u00F4me est reconnu dans toute l\u2019UE. Edumove propose un financement couvrant jusqu\u2019\u00E0 100% des frais.",
      },
      {
        question: "Le test d\u2019entr\u00E9e pour dentaire est le m\u00EAme que pour m\u00E9decine ?",
        answer: "Oui, c\u2019est le m\u00EAme format de QCM en fran\u00E7ais (biologie, chimie, physique, logique, culture g\u00E9n\u00E9rale). Tu choisis ta fili\u00E8re au moment de l\u2019inscription, mais le test est commun. Tu peux le passer \u00E0 Paris ou \u00E0 Rome.",
      },
      {
        question: "Combien de temps durent les \u00E9tudes dentaires en Italie ?",
        answer: "Le cursus dure 6 ans \u00E0 LINK Campus. Les stages cliniques avec patients r\u00E9els commencent en 3\u00E8me ann\u00E9e, ce qui te donne 4 ans de pratique avant le dipl\u00F4me. La premi\u00E8re ann\u00E9e inclut le cours d\u2019italien intensif.",
      },
      {
        question: "Peut-on exercer en France avec un dipl\u00F4me dentaire italien ?",
        answer: "Oui, sans aucune restriction. La directive 2005/36/CE garantit la reconnaissance automatique du dipl\u00F4me dans toute l\u2019UE. Tu t\u2019inscris au Conseil de l\u2019Ordre des Chirurgiens-Dentistes en France et tu exerces, point.",
      },
      {
        question: "Faut-il parler italien pour entrer en dentaire \u00E0 LINK ?",
        answer: "Non. Le test d\u2019admission est en fran\u00E7ais et aucun niveau d\u2019italien n\u2019est demand\u00E9 \u00E0 l\u2019entr\u00E9e. Un cours d\u2019italien intensif est inclus d\u00E8s la 1\u00E8re ann\u00E9e. En quelques mois d\u2019immersion \u00E0 Rome, tu seras \u00E0 l\u2019aise pour suivre les cours en italien.",
      },
    ],
  },
  // =========================================================================
  // KINÉSITHÉRAPIE EN ITALIE
  // =========================================================================
  {
    countrySlug: "italie",
    countryName: "Italie",
    countryFlag: "\u{1F1EE}\u{1F1F9}",
    filiereSlug: "kinesitherapie",
    h1: "Faire Kin\u00E9 en Italie",
    metaTitle: "Faire Kin\u00E9 en Italie \u00E0 7\u00A0900 \u20AC/an \u2014 3 ans \u00E0 Rome | Edumove",
    metaDescription:
      "Kin\u00E9sith\u00E9rapie en Italie : cursus de 3 ans \u00E0 Rome (LINK Campus), 7\u00A0900 \u20AC/an. Test en fran\u00E7ais, cours d\u2019italien inclus. Dipl\u00F4me reconnu UE.",
    intro:
      "3 ans, 7\u00A0900 \u20AC par an, test en fran\u00E7ais, \u00E0 Rome. LINK Campus University propose le cursus de kin\u00E9sith\u00E9rapie le plus court et le plus accessible d\u2019Europe. En 3 ans tu d\u00E9croches un dipl\u00F4me reconnu dans toute l\u2019UE. L\u2019admission se fait via un QCM en fran\u00E7ais (passable \u00E0 Paris), et un cours d\u2019italien intensif est inclus d\u00E8s la premi\u00E8re ann\u00E9e. Pour ceux qui r\u00EAvent de devenir kin\u00E9 sans passer par le PASS/LAS, c\u2019est une option en b\u00E9ton.",
    highlights: [
      "Cursus en 3 ans seulement (vs 4-5 ans ailleurs)",
      "Frais de scolarit\u00E9 \u00E0 7\u00A0900 \u20AC/an",
      "Test d\u2019admission QCM int\u00E9gralement en fran\u00E7ais",
      "Cours d\u2019italien intensif inclus en 1\u00E8re ann\u00E9e",
      "Dipl\u00F4me reconnu dans toute l\u2019Union europ\u00E9enne",
      "Financement possible jusqu\u2019\u00E0 100% via nos partenaires bancaires",
    ],
    whyThisCountry:
      "LINK Campus University \u00E0 Rome propose un cursus de kin\u00E9sith\u00E9rapie en 3 ans \u2014 c\u2019est un an de moins que la plupart des formations europ\u00E9ennes. \u00C0 7\u00A0900 \u20AC par an, le co\u00FBt total sur 3 ans (23\u00A0700 \u20AC) est bien inf\u00E9rieur \u00E0 ce que tu paierais en Espagne sur 4 ans. L\u2019admission se fait via le m\u00EAme QCM en fran\u00E7ais que pour m\u00E9decine et dentaire. C\u2019est la combinaison parfaite : formation courte, tarif accessible, test sans barri\u00E8re linguistique, et un dipl\u00F4me qui te permet d\u2019exercer partout en Europe.",
    sections: [
      {
        title: "Le cursus kin\u00E9 en 3 ans \u00E0 LINK Campus",
        content: "Le cursus de kin\u00E9sith\u00E9rapie \u00E0 LINK Campus dure 3 ans. La premi\u00E8re ann\u00E9e combine les sciences fondamentales (anatomie, physiologie, biom\u00E9canique, biochimie) avec le cours d\u2019italien intensif. D\u00E8s la 2\u00E8me ann\u00E9e, tu attaques la clinique : techniques de r\u00E9\u00E9ducation, th\u00E9rapie manuelle, kin\u00E9sith\u00E9rapie respiratoire et neurologique, avec des stages pratiques en centres de r\u00E9\u00E9ducation et h\u00F4pitaux romains. La 3\u00E8me ann\u00E9e est consacr\u00E9e \u00E0 la sp\u00E9cialisation (kin\u00E9 sportive, p\u00E9diatrique, g\u00E9riatrique) et au m\u00E9moire de fin d\u2019\u00E9tudes. Format intensif mais efficace."
      },
      {
        title: "Admission : QCM en fran\u00E7ais, z\u00E9ro barri\u00E8re",
        content: "L\u2019admission se fait via le QCM commun \u00E0 toutes les fili\u00E8res sant\u00E9 de LINK Campus : 5 mati\u00E8res (biologie, chimie, physique, logique, culture g\u00E9n\u00E9rale), int\u00E9gralement en fran\u00E7ais. Tu peux le passer \u00E0 Paris. Aucun pr\u00E9requis en italien. Edumove assure la pr\u00E9paration compl\u00E8te : cours, annales, simulations et suivi personnalis\u00E9 jusqu\u2019\u00E0 l\u2019admission. L\u2019objectif c\u2019est que tu sois pr\u00EAt le jour J, pas que tu stresses dans ton coin."
      },
      {
        title: "Budget : kin\u00E9 \u00E0 Rome, les vrais chiffres",
        content: "Frais de scolarit\u00E9 : 7\u00A0900 \u20AC par an, soit 23\u00A0700 \u20AC sur 3 ans. C\u2019est le co\u00FBt total de ta formation \u2014 compare avec les 37\u00A0000 \u00E0 58\u00A0000 \u20AC pour 4 ans de kin\u00E9 en Espagne. Le co\u00FBt de la vie \u00E0 Rome : 400-650 \u20AC de logement en colocation, 200-300 \u20AC d\u2019alimentation, 35 \u20AC de transports. Budget mensuel hors scolarit\u00E9 : 700-1\u00A0000 \u20AC. Vol Paris-Rome : environ 2h, billets d\u00E8s 30 \u20AC avec les low-cost. Edumove propose un financement couvrant jusqu\u2019\u00E0 100% des frais."
      },
    ],
    diplomaRecognition:
      "Le dipl\u00F4me de kin\u00E9sith\u00E9rapie obtenu \u00E0 LINK Campus (Laurea in Fisioterapia) est reconnu dans tous les pays de l\u2019Union europ\u00E9enne gr\u00E2ce \u00E0 la directive 2005/36/CE et au syst\u00E8me ECTS. Tu pourras exercer en France en tant que masseur-kin\u00E9sith\u00E9rapeute apr\u00E8s inscription au Conseil de l\u2019Ordre. La kin\u00E9 est une profession en tension en France \u2014 l\u2019insertion professionnelle est quasi imm\u00E9diate.",
    faq: [
      {
        question: "Pourquoi le cursus kin\u00E9 ne dure que 3 ans en Italie ?",
        answer: "En Italie, le cursus de kin\u00E9sith\u00E9rapie (Laurea in Fisioterapia) dure 3 ans car il est plus intensif et concentr\u00E9. C\u2019est le format standard italien, reconnu par l\u2019UE. Le volume horaire et les cr\u00E9dits ECTS sont \u00E9quivalents aux formations de 4 ans dans d\u2019autres pays. Moins long, m\u00EAme qualit\u00E9.",
      },
      {
        question: "Le dipl\u00F4me kin\u00E9 italien en 3 ans est-il reconnu en France ?",
        answer: "Oui, le dipl\u00F4me est reconnu dans toute l\u2019UE via la directive 2005/36/CE. Tu peux exercer en France apr\u00E8s inscription au Conseil de l\u2019Ordre des Masseurs-Kin\u00E9sith\u00E9rapeutes. La dur\u00E9e de 3 ans ne pose aucun probl\u00E8me de reconnaissance \u2014 c\u2019est le standard italien.",
      },
      {
        question: "Combien co\u00FBte le cursus kin\u00E9 complet \u00E0 Rome ?",
        answer: "\u00C0 7\u00A0900 \u20AC par an sur 3 ans, le co\u00FBt total de la formation est de 23\u00A0700 \u20AC. C\u2019est nettement moins que la kin\u00E9 en Espagne (37\u00A0000-58\u00A0000 \u20AC sur 4 ans) ou en France dans le priv\u00E9. Edumove propose un financement couvrant jusqu\u2019\u00E0 100%.",
      },
      {
        question: "Comment se passe le test d\u2019admission pour kin\u00E9 \u00E0 LINK ?",
        answer: "C\u2019est un QCM en fran\u00E7ais, identique pour toutes les fili\u00E8res sant\u00E9 de LINK : biologie, chimie, physique, logique, culture g\u00E9n\u00E9rale. Passable \u00E0 Paris. Edumove te pr\u00E9pare avec des cours sp\u00E9cifiques et des simulations.",
      },
      {
        question: "Quels d\u00E9bouch\u00E9s apr\u00E8s kin\u00E9 en Italie ?",
        answer: "Le dipl\u00F4me te permet d\u2019exercer dans toute l\u2019UE : cabinets lib\u00E9raux, h\u00F4pitaux, centres de r\u00E9\u00E9ducation, clubs sportifs, thalassoth\u00E9rapie. En France, la kin\u00E9 est une profession en tension \u2014 tu trouveras du travail rapidement, surtout hors des grandes villes.",
      },
    ],
  },
  // =========================================================================
  // PHARMACIE EN ITALIE
  // =========================================================================
  {
    countrySlug: "italie",
    countryName: "Italie",
    countryFlag: "\u{1F1EE}\u{1F1F9}",
    filiereSlug: "pharmacie",
    h1: "\u00C9tudes de Pharmacie en Italie",
    metaTitle: "\u00C9tudes de Pharmacie en Italie \u00E0 7\u00A0900 \u20AC/an \u2014 LINK Campus Rome | Edumove",
    metaDescription:
      "Faire pharmacie en Italie : 5 ans \u00E0 Rome (LINK Campus), admission sur dossier, 7\u00A0900 \u20AC/an. Pas de test d\u2019entr\u00E9e. Cours d\u2019italien inclus. Dipl\u00F4me reconnu UE.",
    intro:
      "Pharmacie en Italie, c\u2019est la fili\u00E8re la plus simple d\u2019acc\u00E8s chez LINK Campus : admission sur dossier, sans aucun test. 5 ans \u00E0 Rome, 7\u00A0900 \u20AC par an, cours d\u2019italien intensif inclus, dipl\u00F4me reconnu dans toute l\u2019UE. Si tu as un bon dossier scolaire et que le PASS/LAS te fait fuir, c\u2019est une porte d\u2019entr\u00E9e directe vers la pharmacie sans prise de t\u00EAte.",
    highlights: [
      "Admission sur dossier uniquement \u2014 pas de test d\u2019entr\u00E9e",
      "Frais de scolarit\u00E9 \u00E0 7\u00A0900 \u20AC/an",
      "Cours d\u2019italien intensif inclus en 1\u00E8re ann\u00E9e",
      "Cursus complet de 5 ans \u00E0 Rome",
      "Dipl\u00F4me reconnu dans toute l\u2019Union europ\u00E9enne",
      "Financement possible jusqu\u2019\u00E0 100% via nos partenaires bancaires",
    ],
    whyThisCountry:
      "Pharmacie \u00E0 LINK Campus est la seule fili\u00E8re o\u00F9 l\u2019admission se fait uniquement sur dossier, sans aucun test \u00E9crit. C\u2019est aussi le tarif le plus bas de toutes les formations LINK (7\u00A0900 \u20AC/an). Le cursus de 5 ans couvre l\u2019ensemble des comp\u00E9tences pharmaceutiques, avec des stages en officine, en h\u00F4pital et dans l\u2019industrie. Comme pour les autres fili\u00E8res, un cours d\u2019italien intensif est inclus d\u00E8s la premi\u00E8re ann\u00E9e. Id\u00E9al pour les \u00E9tudiants qui ont un bon dossier scolaire mais qui ne souhaitent pas passer de test d\u2019entr\u00E9e.",
    sections: [
      {
        title: "Le programme de pharmacie \u00E0 LINK Campus",
        content: "Le cursus dure 5 ans et couvre toutes les branches de la pharmacie : chimie pharmaceutique, pharmacologie, toxicologie, biochimie clinique, gal\u00E9nique (technologie pharmaceutique), pharmacie hospitali\u00E8re et sant\u00E9 publique. La premi\u00E8re ann\u00E9e associe sciences fondamentales et cours d\u2019italien intensif. Les stages pratiques d\u00E9butent en 3\u00E8me ann\u00E9e en laboratoire, puis se poursuivent en officine, en h\u00F4pital ou dans l\u2019industrie pharmaceutique en 4\u00E8me et 5\u00E8me ann\u00E9e. Le m\u00E9moire de fin d\u2019\u00E9tudes cl\u00F4ture la formation."
      },
      {
        title: "Admission sur dossier : la fili\u00E8re z\u00E9ro stress",
        content: "C\u2019est la particularit\u00E9 de la pharmacie \u00E0 LINK Campus : pas de QCM, pas de test \u00E9crit, pas d\u2019oral. L\u2019admission se fait sur dossier scolaire. C\u2019est la seule fili\u00E8re sant\u00E9 de LINK qui fonctionne ainsi \u2014 m\u00E9decine, dentaire et kin\u00E9 passent par le QCM en fran\u00E7ais. Si tu as un dossier correct et une motivation r\u00E9elle pour la pharmacie, c\u2019est la voie la plus directe. Edumove t\u2019aide \u00E0 monter un dossier solide et te suit jusqu\u2019\u00E0 la confirmation d\u2019inscription."
      },
      {
        title: "Budget : pharmacie \u00E0 Rome, les chiffres",
        content: "Frais de scolarit\u00E9 : 7\u00A0900 \u20AC par an, soit 39\u00A0500 \u20AC sur 5 ans. C\u2019est comparable aux frais de pharmacie en Espagne chez UCJC (9\u00A0420 \u20AC/an sur 5 ans = 47\u00A0100 \u20AC), mais 7\u00A0600 \u20AC moins cher au total. Le co\u00FBt de la vie \u00E0 Rome : 400-650 \u20AC de logement en colocation, 200-300 \u20AC pour l\u2019alimentation, 35 \u20AC de transports. Budget mensuel hors scolarit\u00E9 : 700-1\u00A0000 \u20AC. Rome est \u00E0 2h de Paris en avion, avec des billets r\u00E9guli\u00E8rement \u00E0 30-50 \u20AC sur les low-cost. Edumove propose un financement couvrant jusqu\u2019\u00E0 100% des frais."
      },
    ],
    diplomaRecognition:
      "Le dipl\u00F4me de pharmacie obtenu \u00E0 LINK Campus (Laurea Magistrale in Farmacia) est automatiquement reconnu dans tous les pays de l\u2019Union europ\u00E9enne gr\u00E2ce \u00E0 la directive 2005/36/CE. Tu pourras exercer en France en tant que pharmacien d\u2019officine, hospitalier ou dans l\u2019industrie, apr\u00E8s inscription au Conseil de l\u2019Ordre des Pharmaciens.",
    faq: [
      {
        question: "Il n\u2019y a vraiment pas de test pour pharmacie \u00E0 LINK ?",
        answer: "Non, pharmacie est la seule fili\u00E8re sant\u00E9 de LINK Campus o\u00F9 l\u2019admission se fait uniquement sur dossier scolaire. Pas de QCM, pas d\u2019oral, pas de test. C\u2019est l\u2019option z\u00E9ro stress si tu as un bon dossier.",
      },
      {
        question: "Combien co\u00FBtent les \u00E9tudes de pharmacie \u00E0 Rome ?",
        answer: "7\u00A0900 \u20AC par an \u00E0 LINK Campus, soit 39\u00A0500 \u20AC sur 5 ans. C\u2019est moins cher que la pharmacie en Espagne (47\u00A0100-75\u00A0000 \u20AC). Edumove propose un financement pouvant couvrir jusqu\u2019\u00E0 100% des frais de scolarit\u00E9.",
      },
      {
        question: "Peut-on exercer en France avec un dipl\u00F4me de pharmacie italien ?",
        answer: "Oui, la Laurea Magistrale in Farmacia est reconnue dans toute l\u2019UE via la directive 2005/36/CE. Tu t\u2019inscris au Conseil de l\u2019Ordre des Pharmaciens en France et tu peux exercer en officine, \u00E0 l\u2019h\u00F4pital ou dans l\u2019industrie, sans \u00E9quivalence.",
      },
      {
        question: "Faut-il parler italien pour \u00E9tudier la pharmacie \u00E0 LINK ?",
        answer: "Non. Comme pour les autres fili\u00E8res, un cours d\u2019italien intensif est inclus d\u00E8s la 1\u00E8re ann\u00E9e. Tu arrives sans parler italien, et en quelques mois d\u2019immersion \u00E0 Rome, tu seras \u00E0 l\u2019aise pour suivre les cours.",
      },
      {
        question: "Quels d\u00E9bouch\u00E9s apr\u00E8s pharmacie en Italie ?",
        answer: "Le dipl\u00F4me ouvre sur tous les m\u00E9tiers de la pharmacie : officine (lib\u00E9ral ou salari\u00E9), pharmacie hospitali\u00E8re, industrie pharmaceutique (R&D, production, affaires r\u00E9glementaires), cosm\u00E9tique, biologie m\u00E9dicale, sant\u00E9 publique. La pharmacie est en demande dans toute l\u2019Europe.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getCountryPageData(
  filiereSlug: FiliereSlug,
  countrySlug: CountrySlug
): CountryPageData | undefined {
  return countryPages.find(
    (p) => p.filiereSlug === filiereSlug && p.countrySlug === countrySlug
  );
}

export function getAvailableCountries(filiereSlug: FiliereSlug): CountrySlug[] {
  return countryPages
    .filter((p) => p.filiereSlug === filiereSlug)
    .map((p) => p.countrySlug);
}

export function isCountrySlug(slug: string): slug is CountrySlug {
  return COUNTRY_SLUGS.includes(slug as CountrySlug);
}

export function getProgramsByFiliereAndCountry(
  filiereSlug: FiliereSlug,
  countrySlug: CountrySlug
) {
  const countryName = countrySlug === "espagne" ? "Espagne" : "Italie";
  return getProgramsByFiliere(filiereSlug).filter(
    (p) => p.university.country === countryName
  );
}

export function getOtherFilieresByCountry(
  currentFiliereSlug: FiliereSlug,
  countrySlug: CountrySlug
): CountryPageData[] {
  return countryPages.filter(
    (p) => p.countrySlug === countrySlug && p.filiereSlug !== currentFiliereSlug
  );
}
