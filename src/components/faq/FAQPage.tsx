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
        a: "Oui. Les universités partenaires d'Edumove délivrent des diplômes officiels et reconnus dans l'Union européenne, conformes aux standards européens (ECTS). La directive européenne 2005/36/CE permet la reconnaissance mutuelle des qualifications au sein de l'UE et de l'Espace économique européen.",
        content: (
          <>
            Oui. Les <IL href="/universites/universidad-europea">universités partenaires d&apos;Edumove</IL> délivrent des diplômes officiels et reconnus dans l&apos;Union européenne, conformes aux standards européens (ECTS). La directive européenne 2005/36/CE permet la reconnaissance mutuelle des qualifications au sein de l&apos;UE et de l&apos;Espace économique européen. Consultez notre article dédié : <IL href="/blog/reconnaissance-diplomes-europeens">Reconnaissance des diplômes européens en France</IL>.
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
        a: "Oui. Une fois votre diplôme reconnu, vous pouvez vous inscrire à l'Ordre professionnel correspondant (Ordre des médecins, des chirurgiens-dentistes, des kinésithérapeutes, etc.) et exercer en France dans les mêmes conditions qu'un diplômé français.",
        content: (
          <>
            Oui. Une fois votre diplôme reconnu, vous pouvez vous inscrire à l&apos;Ordre professionnel correspondant (Ordre des médecins, des chirurgiens-dentistes, des kinésithérapeutes, etc.) et exercer en France dans les mêmes conditions qu&apos;un diplômé français. Découvrez toutes les démarches dans notre article sur la <IL href="/blog/reconnaissance-diplomes-europeens">reconnaissance des diplômes</IL>.
          </>
        ),
      },
      {
        q: "Le diplôme est-il reconnu dans d'autres pays que la France ?",
        a: "Oui. Grâce à la directive européenne, votre diplôme est reconnu dans l'ensemble des 27 pays de l'Union européenne ainsi que dans l'Espace économique européen (Norvège, Islande, Liechtenstein) et en Suisse.",
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
        a: "Le niveau requis varie selon la filière et l'université. De manière générale, un baccalauréat (toutes filières) est nécessaire. Edumove étudie chaque dossier au cas par cas — parcours scolaire, motivation, projet professionnel — et oriente l'étudiant vers les formations les plus adaptées.",
        content: (
          <>
            Le niveau requis varie selon la filière et l&apos;université. De manière générale, un baccalauréat (toutes filières) est nécessaire. Edumove étudie chaque dossier au cas par cas — parcours scolaire, motivation, projet professionnel — et oriente l&apos;étudiant vers les formations les plus adaptées. Consultez notre <IL href="/guides/presenter-sa-candidature">guide complet pour présenter sa candidature</IL>.
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
        a: "Oui. Edumove accompagne les étudiants dans des candidatures multiples, afin de sécuriser leur admission et maximiser leurs chances d'intégration dans une université partenaire.",
        content: (
          <>
            Oui. Edumove accompagne les étudiants dans des candidatures multiples auprès de nos <IL href="/universites/universidad-europea">universités partenaires</IL>, afin de sécuriser leur admission et maximiser leurs chances d&apos;intégration. Découvrez comment dans notre <IL href="/guides/presenter-sa-candidature">guide de candidature</IL>.
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
        a: "Edumove s'adresse aux lycéens de Terminale, aux étudiants en réorientation (après un échec en PASS/LAS par exemple), et à tous les candidats souhaitant poursuivre des études de santé en Europe dans un cadre structuré et accompagné.",
        content: (
          <>
            Edumove s&apos;adresse aux lycéens de Terminale, aux étudiants en réorientation (après un échec en PASS/LAS par exemple), et à tous les candidats souhaitant poursuivre des études de santé en Europe. Découvrez <IL href="/a-propos">qui nous sommes</IL> et comment nous vous accompagnons.
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
        a: "Edumove propose un accompagnement complet pour les études de santé en Europe : orientation personnalisée, constitution du dossier, candidatures, préparation aux tests d'admission, relation avec les universités partenaires, aide au logement et suivi des démarches jusqu'à l'admission et au-delà.",
        content: (
          <>
            Edumove propose un accompagnement complet pour les études de santé en Europe : orientation personnalisée, constitution du dossier, candidatures, <IL href="/guides/reussir-test-pe-universidad-europea">préparation aux tests d&apos;admission</IL>, relation avec les <IL href="/universites/universidad-europea">universités partenaires</IL>, aide au logement et suivi des démarches jusqu&apos;à l&apos;admission et au-delà. En savoir plus <IL href="/a-propos">à propos d&apos;Edumove</IL>.
          </>
        ),
      },
      {
        q: "Comment être contacté pour un premier échange ?",
        a: "Il suffit de remplir le formulaire de candidature sur notre site ou de cliquer sur « Être recontacté ». Un conseiller Edumove vous rappelle sous 2h (entre 8h et 20h) pour un premier échange gratuit et sans engagement.",
        content: (
          <>
            Il suffit de remplir le <IL href="https://candidature.edumove.fr">formulaire de candidature</IL> sur notre site ou de cliquer sur « Être recontacté ». Un conseiller Edumove vous rappelle sous 2h (entre 8h et 20h) pour un premier échange gratuit et sans engagement. Consultez notre <IL href="/guides/presenter-sa-candidature">guide de candidature</IL> pour en savoir plus.
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
        a: "Oui. L'accompagnement Edumove ne s'arrête pas à l'admission. Nous vous aidons aussi pour la recherche de logement, les démarches administratives (inscription définitive, assurance, carte étudiante européenne) et l'organisation de votre départ.",
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
        a: "Les frais de scolarité varient selon le pays, l'université et le statut de l'établissement. Ils se situent généralement entre 5 000 € et 20 000 € par an. Edumove accompagne les étudiants dans la mise en place de solutions de financement permettant de démarrer ses études sans avance immédiate.",
        content: (
          <>
            Les frais de scolarité varient selon le pays, l&apos;université et le statut de l&apos;établissement. Ils se situent généralement entre 5 000 € et 20 000 € par an. Edumove accompagne les étudiants dans la mise en place de solutions de financement. Retrouvez tous les détails dans notre article <IL href="/blog/financer-etudes-sante-europe">Comment financer ses études de santé en Europe</IL>.
          </>
        ),
      },
      {
        q: "Edumove finance-t-il les études ?",
        a: "Edumove n'est pas un organisme de financement, mais accompagne les étudiants et leurs familles dans la mise en place de solutions de financement adaptées, en lien avec des partenaires bancaires reconnus (notamment LCL). Les étudiants peuvent financer leurs études jusqu'à 75 000 €, avec des dispositifs permettant de commencer le remboursement une fois diplômés.",
        content: (
          <>
            Edumove n&apos;est pas un organisme de financement, mais accompagne les étudiants et leurs familles dans la mise en place de solutions de financement adaptées, en lien avec des partenaires bancaires reconnus (notamment LCL). Les étudiants peuvent financer leurs études jusqu&apos;à 75 000 €, avec des dispositifs permettant de commencer le remboursement une fois diplômés. En savoir plus sur le <IL href="/blog/financer-etudes-sante-europe">financement des études</IL>.
          </>
        ),
      },
      {
        q: "Comment fonctionne le prêt étudiant ?",
        a: "Grâce au partenariat avec LCL, les étudiants accompagnés par Edumove peuvent accéder à un prêt étudiant garanti par l'État allant jusqu'à 75 000 €. Le remboursement ne commence qu'une fois diplômé et en activité professionnelle. C'est la solution la plus utilisée par nos étudiants.",
        content: (
          <>
            Grâce au partenariat avec LCL, les étudiants accompagnés par Edumove peuvent accéder à un prêt étudiant garanti par l&apos;État allant jusqu&apos;à 75 000 €. Le remboursement ne commence qu&apos;une fois diplômé et en activité professionnelle. C&apos;est la solution la plus utilisée par nos étudiants. Tous les détails dans notre <IL href="/blog/financer-etudes-sante-europe">guide financement</IL>.
          </>
        ),
      },
      {
        q: "Existe-t-il des bourses pour étudier en Europe ?",
        a: "Oui. Selon votre situation, vous pouvez bénéficier de la bourse du CROUS (maintenue pour les études en Europe), de bourses régionales, ou d'aides spécifiques des universités partenaires. Votre conseiller Edumove vous aide à identifier toutes les aides disponibles.",
        content: (
          <>
            Oui. Selon votre situation, vous pouvez bénéficier de la bourse du CROUS (maintenue pour les études en Europe), de bourses régionales, ou d&apos;aides spécifiques des <IL href="/universites/universidad-europea">universités partenaires</IL>. Votre conseiller Edumove vous aide à identifier toutes les <IL href="/blog/financer-etudes-sante-europe">aides disponibles</IL>.
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
        a: "Edumove accompagne les étudiants dans 5 filières de santé : médecine, dentaire, kinésithérapie, pharmacie et vétérinaire. Chaque filière est disponible dans une ou plusieurs universités partenaires.",
        content: (
          <>
            Edumove accompagne les étudiants dans 5 filières de santé : <IL href="/formations/medecine">médecine</IL>, <IL href="/formations/dentaire">dentaire</IL>, <IL href="/formations/kinesitherapie">kinésithérapie</IL>, <IL href="/formations/pharmacie">pharmacie</IL> et <IL href="/formations/veterinaire">vétérinaire</IL>. Chaque filière est disponible dans une ou plusieurs universités partenaires.
          </>
        ),
      },
      {
        q: "Dans quels pays peut-on étudier avec Edumove ?",
        a: "Edumove travaille avec des universités partenaires en Espagne (Universidad Europea à Madrid, UCJC à Madrid) et en Italie (LINK Campus University à Rome). Les destinations dépendent des filières et des places disponibles.",
        content: (
          <>
            Edumove travaille avec des universités partenaires en Espagne (<IL href="/universites/universidad-europea">Universidad Europea</IL> à Madrid, <IL href="/universites/ucjc">UCJC</IL> à Madrid) et en Italie (<IL href="/universites/link-campus">LINK Campus University</IL> à Rome). Les destinations dépendent des filières et des places disponibles.
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
        a: "Oui. Toutes les formations incluent des stages cliniques en milieu hospitalier, souvent dès les premières années. C'est un atout majeur des formations en Europe par rapport au système français, où la pratique arrive plus tardivement.",
        content: (
          <>
            Oui. Toutes les formations incluent des stages cliniques en milieu hospitalier, souvent dès les premières années. C&apos;est un atout majeur des formations en Europe par rapport au système français. Découvrez par exemple les <IL href="/blog/avantages-kinesitherapie-europe">avantages de la kinésithérapie en Europe</IL>.
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
        a: "Edumove vous accompagne dans la recherche de logement à Madrid comme à Rome : résidences étudiantes, colocations ou appartements à proximité du campus. Nous avons des contacts avec des agences locales dans chaque ville et des retours d'expérience de nos anciens étudiants.",
        content: (
          <>
            Edumove vous accompagne dans la recherche de logement à Madrid comme à Rome : résidences étudiantes, colocations ou appartements à proximité du campus. Retrouvez toutes les infos pratiques dans notre <IL href="/guides/presenter-sa-candidature">guide de candidature</IL>, section « Après l&apos;admission ».
          </>
        ),
      },
      {
        q: "Quel est le coût de la vie à Madrid / Rome ?",
        a: "Le budget mensuel moyen (loyer + alimentation + transports + loisirs) se situe entre 800 € et 1 200 € selon la ville et le mode de vie. Madrid et Rome offrent un coût de la vie inférieur à Paris.",
        content: (
          <>
            Le budget mensuel moyen (loyer + alimentation + transports + loisirs) se situe entre 800 € et 1 200 € selon la ville et le mode de vie. Madrid et Rome offrent un coût de la vie inférieur à Paris. Consultez notre article sur le <IL href="/blog/financer-etudes-sante-europe">financement des études en Europe</IL> pour optimiser votre budget.
          </>
        ),
      },
      {
        q: "Y a-t-il une communauté d'étudiants français à Madrid et à Rome ?",
        a: "Oui. Que ce soit à Madrid (Universidad Europea, UCJC) ou à Rome (LINK Campus), les universités partenaires d'Edumove accueillent chaque année de nombreux étudiants francophones. Des groupes WhatsApp, des événements d'intégration et un réseau d'anciens facilitent l'adaptation et créent une vraie communauté sur chaque campus.",
        content: (
          <>
            Oui. Que ce soit à Madrid (<IL href="/universites/universidad-europea">Universidad Europea</IL>, <IL href="/universites/ucjc">UCJC</IL>) ou à Rome (<IL href="/universites/link-campus">LINK Campus</IL>), nos universités partenaires accueillent chaque année de nombreux étudiants francophones. Découvrez le <IL href="/blog/temoignage-medecine-espagne">témoignage de Clara, étudiante en médecine à Madrid</IL>.
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
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
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
