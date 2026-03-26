"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ChevronRight,
  GraduationCap,
  Euro,
  Users,
  Globe,
  Home,
  ArrowRight,
  Phone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ContactButton from "@/components/shared/ContactButton";

/* ---------- helpers ---------- */

const linkCls = "text-[#EC680A] underline underline-offset-2 hover:text-[#D45E09] transition-colors font-medium";

function IL({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className={linkCls}>{children}</Link>;
}

/* ---------- FAQ DATA ---------- */

interface FAQItem {
  q: string;
  a: string;                // plain-text for JSON-LD
  content?: ReactNode;      // rich JSX for rendering (with links)
}

interface FAQCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  items: FAQItem[];
}

const categories: FAQCategory[] = [
  {
    id: "diplomes",
    label: "Diplômes & reconnaissance",
    icon: GraduationCap,
    items: [
      {
        q: "Les diplômes obtenus en Europe sont-ils reconnus en France ?",
        a: "Tout à fait. Nos universités partenaires délivrent des diplômes officiels, conformes aux standards européens (ECTS). C'est la directive 2005/36/CE qui encadre la reconnaissance mutuelle des qualifications entre pays de l'UE et de l'Espace économique européen.",
        content: (
          <>
            Tout à fait. Nos <IL href="/universites/universidad-europea">universités partenaires</IL> délivrent des diplômes officiels, conformes aux standards européens (ECTS). C&apos;est la directive 2005/36/CE qui encadre la reconnaissance mutuelle des qualifications entre pays de l&apos;UE et de l&apos;Espace économique européen. On détaille tout ici : <IL href="/blog/reconnaissance-diplomes-europeens">Reconnaissance des diplômes européens en France</IL>.
          </>
        ),
      },
      {
        q: "La reconnaissance est-elle automatique ?",
        a: "Pour les diplômes relevant de la directive sectorielle (médecine, dentaire, etc.), la reconnaissance est souvent automatique si la formation respecte les standards (durée minimale, contenu). Pour les autres filières, une procédure d'équivalence peut être nécessaire. Edumove vous accompagne dans ces démarches.",
        content: (
          <>
            Pour les diplômes relevant de la directive sectorielle (<IL href="/formations/medecine">médecine</IL>, <IL href="/formations/dentaire">dentaire</IL>, etc.), la reconnaissance est souvent automatique si la formation respecte les standards (durée minimale, contenu). Pour les autres filières, une procédure d&apos;équivalence peut être nécessaire. Edumove vous accompagne dans ces démarches. En savoir plus dans notre article sur la <IL href="/blog/reconnaissance-diplomes-europeens">reconnaissance des diplômes européens</IL>.
          </>
        ),
      },
      {
        q: "Puis-je exercer en France après mes études en Europe ?",
        a: "Absolument. Une fois le diplôme reconnu, il suffit de s'inscrire à l'Ordre professionnel correspondant (médecins, chirurgiens-dentistes, kinésithérapeutes…) pour exercer en France, exactement comme un diplômé français.",
        content: (
          <>
            Absolument. Une fois le diplôme reconnu, il suffit de s&apos;inscrire à l&apos;Ordre professionnel correspondant (médecins, chirurgiens-dentistes, kinésithérapeutes…) pour exercer en France, exactement comme un diplômé français. Les démarches sont détaillées dans notre article sur la <IL href="/blog/reconnaissance-diplomes-europeens">reconnaissance des diplômes</IL>.
          </>
        ),
      },
      {
        q: "Le diplôme est-il reconnu dans d'autres pays que la France ?",
        a: "La directive européenne couvre les 27 pays de l'UE, plus la Norvège, l'Islande, le Liechtenstein (Espace économique européen) et la Suisse. Vous pouvez donc exercer dans n'importe lequel de ces pays.",
      },
    ],
  },
  {
    id: "admission",
    label: "Admission & candidature",
    icon: Users,
    items: [
      {
        q: "Quel niveau est requis pour candidater ?",
        a: "Ça dépend de la filière et de l'université visée, mais dans tous les cas il faut un baccalauréat. La bonne nouvelle : toutes les filières de bac sont acceptées dans plusieurs de nos universités partenaires. On regarde chaque dossier individuellement — notes, motivation, projet pro — pour orienter vers la formation la plus adaptée.",
        content: (
          <>
            Ça dépend de la filière et de l&apos;université visée, mais dans tous les cas il faut un baccalauréat. La bonne nouvelle : toutes les filières de bac sont acceptées dans plusieurs de nos universités partenaires. On regarde chaque dossier individuellement — notes, motivation, projet pro — pour orienter vers la formation la plus adaptée. Plus de détails dans notre <IL href="/guides/presenter-sa-candidature">guide de candidature</IL>.
          </>
        ),
      },
      {
        q: "Faut-il obligatoirement un bac scientifique ?",
        a: "Non, pas nécessairement. Certaines universités partenaires acceptent tous les types de baccalauréat. Un bac scientifique est un atout, mais un bon dossier avec une forte motivation peut compenser. Votre conseiller Edumove vous orientera en fonction de votre profil.",
        content: (
          <>
            Non, pas nécessairement. Certaines universités partenaires comme <IL href="/universites/universidad-europea">l&apos;Universidad Europea</IL> ou <IL href="/universites/ucjc">l&apos;UCJC Madrid</IL> acceptent tous les types de baccalauréat. Un bac scientifique est un atout, mais un bon dossier avec une forte motivation peut compenser. Votre conseiller Edumove vous orientera en fonction de votre profil.
          </>
        ),
      },
      {
        q: "Est-il possible de postuler à plusieurs universités en même temps ?",
        a: "Bien sûr, et c'est même recommandé. On peut candidater à plusieurs universités en parallèle pour maximiser ses chances. Votre conseiller vous aide à cibler les meilleures options selon votre profil.",
        content: (
          <>
            Bien sûr, et c&apos;est même recommandé. On peut candidater à plusieurs <IL href="/universites/universidad-europea">universités</IL> en parallèle pour maximiser ses chances. Votre conseiller vous aide à cibler les meilleures options selon votre profil. Tout est expliqué dans notre <IL href="/guides/presenter-sa-candidature">guide de candidature</IL>.
          </>
        ),
      },
      {
        q: "Y a-t-il un test d'admission à passer ?",
        a: "Cela dépend de l'université et de la filière. Certaines formations nécessitent un test d'entrée (comme le test PE à l'Universidad Europea ou le QCM de LINK Campus). Edumove vous prépare gratuitement à ces épreuves.",
        content: (
          <>
            Cela dépend de l&apos;université et de la filière. Certaines formations nécessitent un test d&apos;entrée : le <IL href="/guides/reussir-test-pe-universidad-europea">test PE à l&apos;Universidad Europea</IL> ou le <IL href="/guides/reussir-test-admission-link-campus">QCM de LINK Campus University</IL>. Edumove vous prépare gratuitement à ces épreuves.
          </>
        ),
      },
      {
        q: "À qui s'adresse Edumove ?",
        a: "Principalement les lycéens de Terminale et les étudiants en réorientation (beaucoup viennent après un ou deux échecs en PASS/LAS). Mais on accompagne aussi des profils plus atypiques — l'important c'est d'avoir un projet sérieux en santé.",
        content: (
          <>
            Principalement les lycéens de Terminale et les étudiants en réorientation (beaucoup viennent après un ou deux échecs en PASS/LAS). Mais on accompagne aussi des profils plus atypiques — l&apos;important c&apos;est d&apos;avoir un projet sérieux en santé. Pour en savoir plus : <IL href="/guides/presenter-sa-candidature">présenter votre candidature</IL>.
          </>
        ),
      },
      {
        q: "Quand faut-il contacter Edumove ?",
        a: "Le plus tôt possible. Un contact anticipé permet d'élargir le choix des universités, d'anticiper les démarches et de construire un projet cohérent et réaliste. Mais il n'est jamais trop tard — contactez-nous même si la rentrée approche.",
      },
    ],
  },
  {
    id: "accompagnement",
    label: "Accompagnement Edumove",
    icon: Users,
    items: [
      {
        q: "Quel est le rôle d'Edumove dans le projet d'études ?",
        a: "Concrètement, on gère tout le parcours avec vous : d'abord l'orientation pour trouver la bonne filière et la bonne université, puis le dossier de candidature, la préparation aux tests d'entrée, le lien avec les universités, et même la recherche de logement une fois admis.",
        content: (
          <>
            Concrètement, on gère tout le parcours avec vous : d&apos;abord l&apos;orientation pour trouver la bonne filière et la bonne université, puis le dossier de candidature, la <IL href="/guides/reussir-test-pe-universidad-europea">préparation aux tests d&apos;entrée</IL>, le lien avec les <IL href="/universites/universidad-europea">universités</IL>, et même la recherche de logement une fois admis. Le détail est dans notre <IL href="/guides/presenter-sa-candidature">guide de candidature</IL>.
          </>
        ),
      },
      {
        q: "Comment être contacté pour un premier échange ?",
        a: "Le plus simple : cliquez sur « Être recontacté » ou remplissez le formulaire sur notre site. Un conseiller vous rappelle sous 2h (entre 8h et 20h). C'est gratuit et sans engagement.",
        content: (
          <>
            Le plus simple : cliquez sur « Être recontacté » ou remplissez le formulaire sur notre <IL href="/guides/presenter-sa-candidature">page de candidature</IL>. Un conseiller vous rappelle sous 2h (entre 8h et 20h). C&apos;est gratuit et sans engagement.
          </>
        ),
      },
      {
        q: "À quoi sert le premier rendez-vous avec Edumove ?",
        a: "Ce premier échange permet de clarifier votre projet d'études, vérifier l'adéquation avec les filières proposées, expliquer les modalités d'admission, répondre à toutes vos questions — le tout sans aucun engagement de votre part.",
        content: (
          <>
            Ce premier échange permet de clarifier votre projet d&apos;études, vérifier l&apos;adéquation avec les <IL href="/formations/medecine">filières proposées</IL>, expliquer les modalités d&apos;admission, répondre à toutes vos questions — le tout sans aucun engagement de votre part.
          </>
        ),
      },
      {
        q: "Edumove m'accompagne-t-il aussi après l'admission ?",
        a: "L'accompagnement ne s'arrête pas à l'admission, loin de là. On reste disponible pour le logement, les démarches administratives (inscription définitive, assurance, carte étudiante européenne) et l'organisation du départ.",
      },
    ],
  },
  {
    id: "financement",
    label: "Financement & coûts",
    icon: Euro,
    items: [
      {
        q: "Combien coûtent les études de santé en Europe ?",
        a: "Les frais de scolarité se situent entre 5 000 € et 20 000 € par an environ, selon le pays et l'université. C'est un investissement important, mais des solutions de financement existent pour démarrer sans avance immédiate.",
        content: (
          <>
            Les frais de scolarité se situent entre 5 000 € et 20 000 € par an environ, selon le pays et l&apos;université. C&apos;est un investissement important, mais des solutions de financement existent pour démarrer sans avance immédiate. Tous les détails dans notre article <IL href="/financement">Comment financer ses études de santé en Europe</IL>.
          </>
        ),
      },
      {
        q: "Edumove finance-t-il les études ?",
        a: "Non, on n'est pas une banque. Par contre on fait le lien avec des partenaires bancaires, notamment LCL, pour mettre en place un prêt étudiant à partir de 75 000 €. Le principe : vous ne commencez à rembourser qu'une fois diplômé et en poste.",
        content: (
          <>
            Non, on n&apos;est pas une banque. Par contre on fait le lien avec des partenaires bancaires, notamment LCL, pour mettre en place un prêt étudiant à partir de 75 000 €. Le principe : vous ne commencez à rembourser qu&apos;une fois diplômé et en poste. On explique tout dans notre article sur le <IL href="/financement">financement des études</IL>.
          </>
        ),
      },
      {
        q: "Comment fonctionne le prêt étudiant ?",
        a: "Grâce au partenariat avec LCL, les étudiants accompagnés par Edumove peuvent accéder à un prêt étudiant garanti par l'État à partir de 75 000 €. Le remboursement ne commence qu'une fois diplômé et en activité professionnelle. C'est la solution la plus utilisée par nos étudiants.",
        content: (
          <>
            Grâce au partenariat avec LCL, les étudiants accompagnés par Edumove peuvent accéder à un prêt étudiant garanti par l&apos;État à partir de 75 000 €. Le remboursement ne commence qu&apos;une fois diplômé et en activité professionnelle. C&apos;est la solution la plus utilisée par nos étudiants. Tous les détails dans notre <IL href="/financement">guide financement</IL>.
          </>
        ),
      },
      {
        q: "Existe-t-il des bourses pour étudier en Europe ?",
        a: "Plusieurs pistes existent : la bourse du CROUS (elle est maintenue même pour des études en Europe), les bourses régionales, et certaines aides spécifiques des universités. Votre conseiller fait le point avec vous pour ne rien rater.",
        content: (
          <>
            Plusieurs pistes existent : la bourse du CROUS (elle est maintenue même pour des études en Europe), les bourses régionales, et certaines aides spécifiques des <IL href="/universites/universidad-europea">universités</IL>. Votre conseiller fait le point avec vous pour ne rien rater. Détails dans notre <IL href="/financement">guide financement</IL>.
          </>
        ),
      },
      {
        q: "Comment fonctionnent les solutions de financement ?",
        a: "Les solutions de financement sont étudiées au cas par cas, selon la filière, le pays, la situation de l'étudiant et le projet professionnel. Edumove joue un rôle de facilitateur et d'interface avec les partenaires bancaires, sans jamais imposer de solution.",
      },
    ],
  },
  {
    id: "formations",
    label: "Formations & universités",
    icon: Globe,
    items: [
      {
        q: "Quelles filières de santé sont proposées ?",
        a: "Cinq filières sont accessibles : médecine, dentaire, kinésithérapie, pharmacie et vétérinaire. Chacune est disponible dans une ou plusieurs de nos universités partenaires, en Espagne ou en Italie.",
        content: (
          <>
            Cinq filières sont accessibles : <IL href="/formations/medecine">médecine</IL>, <IL href="/formations/dentaire">dentaire</IL>, <IL href="/formations/kinesitherapie">kinésithérapie</IL>, <IL href="/formations/pharmacie">pharmacie</IL> et <IL href="/formations/veterinaire">vétérinaire</IL>. Chacune est disponible dans une ou plusieurs de nos universités partenaires, en Espagne ou en Italie.
          </>
        ),
      },
      {
        q: "Dans quels pays peut-on étudier avec Edumove ?",
        a: "Aujourd'hui, deux pays : l'Espagne (Universidad Europea et UCJC, toutes deux à Madrid) et l'Italie (LINK Campus University à Rome). La destination dépend de la filière choisie et des places disponibles.",
        content: (
          <>
            Aujourd&apos;hui, deux pays : l&apos;Espagne (<IL href="/universites/universidad-europea">Universidad Europea</IL> et <IL href="/universites/ucjc">UCJC</IL>, toutes deux à Madrid) et l&apos;Italie (<IL href="/universites/link-campus">LINK Campus University</IL> à Rome). La destination dépend de la filière choisie et des places disponibles.
          </>
        ),
      },
      {
        q: "Quelle est la durée des études ?",
        a: "La durée varie selon la filière : 6 ans pour la médecine, 5 ans pour le dentaire et le vétérinaire, 4 ans pour la kinésithérapie et la pharmacie. Ces durées sont conformes aux standards européens.",
        content: (
          <>
            La durée varie selon la filière : 6 ans pour la <IL href="/formations/medecine">médecine</IL>, 5 ans pour le <IL href="/formations/dentaire">dentaire</IL> et le <IL href="/formations/veterinaire">vétérinaire</IL>, 4 ans pour la <IL href="/formations/kinesitherapie">kinésithérapie</IL> et la <IL href="/formations/pharmacie">pharmacie</IL>. Ces durées sont conformes aux standards européens.
          </>
        ),
      },
      {
        q: "Dans quelle langue se déroulent les cours ?",
        a: "Cela dépend de l'université et de la filière. À l'Universidad Europea et à l'UCJC, les cours sont en espagnol (avec des programmes de mise à niveau linguistique). À LINK Campus, certaines formations sont en anglais ou en italien. Edumove vous accompagne dans la préparation linguistique.",
        content: (
          <>
            Cela dépend de l&apos;université et de la filière. À l&apos;<IL href="/universites/universidad-europea">Universidad Europea</IL> et à l&apos;<IL href="/universites/ucjc">UCJC</IL>, les cours sont en espagnol (avec des programmes de mise à niveau linguistique). À <IL href="/universites/link-campus">LINK Campus</IL>, certaines formations sont en anglais ou en italien. Edumove vous accompagne dans la préparation linguistique.
          </>
        ),
      },
      {
        q: "Y a-t-il des stages pratiques pendant les études ?",
        a: "C'est même l'un des gros points forts des formations en Europe : les stages cliniques en milieu hospitalier commencent souvent dès les premières années, bien plus tôt qu'en France.",
        content: (
          <>
            C&apos;est même l&apos;un des gros points forts des formations en Europe : les stages cliniques en milieu hospitalier commencent souvent dès les premières années, bien plus tôt qu&apos;en France. Un exemple concret avec la <IL href="/blog/avantages-kinesitherapie-europe">kinésithérapie en Europe</IL>.
          </>
        ),
      },
    ],
  },
  {
    id: "vie-etudiante",
    label: "Vie étudiante",
    icon: Home,
    items: [
      {
        q: "Comment trouver un logement à Madrid ou à Rome ?",
        a: "On vous aide à trouver un logement dans les deux villes : résidences étudiantes, colocations, appartements proches du campus. On a des contacts avec des agences locales et les retours d'expérience de nos anciens étudiants, ça facilite beaucoup les choses.",
        content: (
          <>
            On vous aide à trouver un logement dans les deux villes : résidences étudiantes, colocations, appartements proches du campus. On a des contacts avec des agences locales et les retours d&apos;expérience des anciens, ça facilite beaucoup les choses. Plus d&apos;infos dans notre <IL href="/guides/presenter-sa-candidature">guide de candidature</IL>, section « Après l&apos;admission ».
          </>
        ),
      },
      {
        q: "Quel est le coût de la vie à Madrid / Rome ?",
        a: "Le budget mensuel moyen (loyer + alimentation + transports + loisirs) se situe entre 800 € et 1 200 € selon la ville et le mode de vie. Madrid et Rome offrent un coût de la vie inférieur à Paris.",
        content: (
          <>
            Le budget mensuel moyen (loyer + alimentation + transports + loisirs) se situe entre 800 € et 1 200 € selon la ville et le mode de vie. Madrid et Rome offrent un coût de la vie inférieur à Paris. Consultez notre article sur le <IL href="/financement">financement des études en Europe</IL> pour optimiser votre budget.
          </>
        ),
      },
      {
        q: "Y a-t-il une communauté d'étudiants français à Madrid et à Rome ?",
        a: "Il y en a une vraie, oui. À Madrid comme à Rome, vous retrouverez d'autres étudiants francophones. Il y a des groupes WhatsApp, des événements d'intégration en début d'année, et un réseau d'anciens qui aide beaucoup pour s'installer.",
        content: (
          <>
            Il y en a une vraie, oui. À Madrid (<IL href="/universites/universidad-europea">Universidad Europea</IL>, <IL href="/universites/ucjc">UCJC</IL>) comme à Rome (<IL href="/universites/link-campus">LINK Campus</IL>), vous retrouverez d&apos;autres étudiants francophones. Il y a des groupes WhatsApp, des événements d&apos;intégration, et un réseau d&apos;anciens. Le <IL href="/blog/temoignage-medecine-espagne">témoignage de Clara</IL> en donne un bon aperçu.
          </>
        ),
      },
      {
        q: "Faut-il parler espagnol ou italien pour candidater ?",
        a: "Pour les formations à Madrid (Universidad Europea, UCJC), un niveau de base en espagnol suffit au départ — vous progresserez rapidement grâce à l'immersion. Pour LINK Campus à Rome, certaines formations sont en anglais (niveau B1-B2 recommandé) ou en italien. Des programmes de mise à niveau linguistique sont disponibles dans chaque université.",
        content: (
          <>
            Pour les formations à Madrid (<IL href="/universites/universidad-europea">Universidad Europea</IL>, <IL href="/universites/ucjc">UCJC</IL>), un niveau de base en espagnol suffit au départ — vous progresserez rapidement grâce à l&apos;immersion. Pour <IL href="/universites/link-campus">LINK Campus</IL> à Rome, certaines formations sont en anglais (niveau B1-B2 recommandé) ou en italien. Des programmes de mise à niveau linguistique sont disponibles dans chaque université.
          </>
        ),
      },
      {
        q: "Comment fonctionne l'assurance maladie à l'étranger ?",
        a: "En tant qu'étudiant européen, vous bénéficiez de la Carte Européenne d'Assurance Maladie (CEAM) qui couvre les soins de santé dans l'UE. Nous recommandons également une complémentaire santé adaptée aux expatriés étudiants.",
      },
    ],
  },
];

/* ---------- JSON-LD FAQ Schema ---------- */

function FAQJsonLd() {
  const allItems = categories.flatMap((cat) => cat.items);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ---------- COMPONENTS ---------- */

function FAQAccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all ${
        isOpen ? "border-[#EC680A]/60 shadow-sm" : "border-gray-200"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50/50 transition-colors"
      >
        <span className="font-semibold text-[#1B1D3A] text-sm pr-4">
          {faq.q}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm transition-all ${
            isOpen
              ? "bg-[#EC680A] text-white"
              : "bg-gray-100 text-[#334155]"
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="px-5 pb-5">
          <p className="text-[#334155] text-sm leading-relaxed">
            {faq.content ?? faq.a}
          </p>
        </div>
      )}
    </div>
  );
}

/* ---------- MAIN ---------- */

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (key: string) => {
    setOpenItem(openItem === key ? null : key);
  };

  return (
    <div className="bg-white min-h-screen">
      <FAQJsonLd />

      {/* Hero */}
      <section className="relative bg-[#1B1D3A] overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#615CA5]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EC680A]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <nav
            className="flex items-center gap-1.5 text-sm mb-6"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <Link
              href="/"
              className="hover:text-white/70 transition-colors"
            >
              Accueil
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span
              style={{ color: "rgba(255,255,255,0.7)" }}
              className="font-medium"
            >
              Questions fréquentes
            </span>
          </nav>
          <p className="text-[#EC680A] text-xs uppercase tracking-widest font-semibold mb-3">
            FAQ
          </p>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: "#ffffff" }}
          >
            Questions fréquentes
          </h1>
          <p
            className="text-lg max-w-xl"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Retrouvez les réponses à toutes vos questions sur les études de
            santé en Europe et l&apos;accompagnement Edumove.
          </p>
        </div>
      </section>

      {/* All categories with questions */}
      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-14">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id}>
                <h2 className="text-xl md:text-2xl font-bold text-[#1B1D3A] mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-[#EC680A]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#EC680A]" />
                  </span>
                  {cat.label}
                </h2>
                <div className="space-y-3">
                  {cat.items.map((faq, i) => {
                    const key = `${cat.id}-${i}`;
                    return (
                      <FAQAccordionItem
                        key={key}
                        faq={faq}
                        isOpen={openItem === key}
                        onToggle={() => toggleItem(key)}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* CTA */}
          <div className="bg-[#1B1D3A] rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#ffffff" }}>
              Vous n&apos;avez pas trouvé votre réponse ?
            </h2>
            <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
              Contactez-nous directement — un conseiller Edumove vous répond
              sous 2h.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="https://candidature.edumove.fr"
                className="inline-flex items-center gap-2 bg-[#EC680A] text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-[#D45E09] transition-colors"
              >
                Déposer ma candidature
                <ArrowRight className="w-4 h-4" />
              </Link>
              <ContactButton className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors border border-white/20">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Être recontacté
                </span>
              </ContactButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
