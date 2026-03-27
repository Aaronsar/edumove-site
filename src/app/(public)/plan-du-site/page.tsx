import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Plan du site | Edumove",
  description:
    "Retrouvez toutes les pages du site Edumove : formations, universités, financement, blog, guides et plus.",
  alternates: { canonical: "/plan-du-site" },
};

const sections = [
  {
    title: "Pages principales",
    links: [
      { name: "Accueil", href: "/" },
      { name: "Financement", href: "/financement" },
      { name: "Questions fréquentes", href: "/questions-frequentes" },
      { name: "Témoignages", href: "/temoignages" },
      { name: "À propos", href: "/a-propos" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Événements",
    links: [
      {
        name: "Webinaire — Comment financer ses études de santé en Europe ?",
        href: "/evenements/webinaire-financement-sante",
      },
    ],
  },
  {
    title: "Formations",
    links: [
      { name: "Médecine", href: "/formations/medecine" },
      { name: "Dentaire", href: "/formations/dentaire" },
      { name: "Kinésithérapie", href: "/formations/kinesitherapie" },
      { name: "Pharmacie", href: "/formations/pharmacie" },
      { name: "Vétérinaire", href: "/formations/veterinaire" },
      { name: "Prépa Dentaire", href: "/formations/prepa-dentaire" },
    ],
  },
  {
    title: "Formations en Espagne",
    links: [
      { name: "Médecine en Espagne", href: "/formations/medecine/espagne" },
      { name: "Dentaire en Espagne", href: "/formations/dentaire/espagne" },
      {
        name: "Kinésithérapie en Espagne",
        href: "/formations/kinesitherapie/espagne",
      },
      { name: "Pharmacie en Espagne", href: "/formations/pharmacie/espagne" },
      {
        name: "Vétérinaire en Espagne",
        href: "/formations/veterinaire/espagne",
      },
      {
        name: "Prépa Dentaire en Espagne",
        href: "/formations/prepa-dentaire/espagne",
      },
    ],
  },
  {
    title: "Formations en Italie",
    links: [
      { name: "Dentaire en Italie", href: "/formations/dentaire/italie" },
      {
        name: "Kinésithérapie en Italie",
        href: "/formations/kinesitherapie/italie",
      },
      { name: "Pharmacie en Italie", href: "/formations/pharmacie/italie" },
    ],
  },
  {
    title: "Médecine — par université",
    links: [
      {
        name: "Médecine — Universidad Europea Madrid",
        href: "/formations/medecine/ue-madrid",
      },
      {
        name: "Médecine — UCJC Madrid",
        href: "/formations/medecine/ucjc-madrid",
      },
      {
        name: "Médecine — LINK Campus Rome",
        href: "/formations/medecine/link-rome",
      },
    ],
  },
  {
    title: "Dentaire — par université",
    links: [
      {
        name: "Dentaire — Universidad Europea Madrid",
        href: "/formations/dentaire/ue-madrid",
      },
      {
        name: "Dentaire — UCJC Madrid",
        href: "/formations/dentaire/ucjc-madrid",
      },
      {
        name: "Dentaire — LINK Campus Rome",
        href: "/formations/dentaire/link-rome",
      },
    ],
  },
  {
    title: "Kinésithérapie — par université",
    links: [
      {
        name: "Kinésithérapie — UE Madrid",
        href: "/formations/kinesitherapie/ue-madrid",
      },
      {
        name: "Kinésithérapie — UE Malaga",
        href: "/formations/kinesitherapie/ue-malaga",
      },
      {
        name: "Kinésithérapie — UE Valence",
        href: "/formations/kinesitherapie/ue-valence",
      },
      {
        name: "Kinésithérapie — UE Alicante",
        href: "/formations/kinesitherapie/ue-alicante",
      },
      {
        name: "Kinésithérapie — UE Canaries",
        href: "/formations/kinesitherapie/ue-canaries",
      },
      {
        name: "Kinésithérapie — UCJC Madrid",
        href: "/formations/kinesitherapie/ucjc-madrid",
      },
      {
        name: "Kinésithérapie — LINK Campus Rome",
        href: "/formations/kinesitherapie/link-rome",
      },
    ],
  },
  {
    title: "Pharmacie — par université",
    links: [
      {
        name: "Pharmacie — Universidad Europea Madrid",
        href: "/formations/pharmacie/ue-madrid",
      },
      {
        name: "Pharmacie — UCJC Madrid",
        href: "/formations/pharmacie/ucjc-madrid",
      },
      {
        name: "Pharmacie — LINK Campus Rome",
        href: "/formations/pharmacie/link-rome",
      },
    ],
  },
  {
    title: "Vétérinaire — par université",
    links: [
      {
        name: "Vétérinaire — Universidad Europea Madrid",
        href: "/formations/veterinaire/ue-madrid",
      },
      {
        name: "Vétérinaire — UE Alicante",
        href: "/formations/veterinaire/ue-alicante",
      },
    ],
  },
  {
    title: "Universités partenaires",
    links: [
      { name: "Universidad Europea", href: "/universites/universidad-europea" },
      { name: "UCJC Madrid", href: "/universites/ucjc" },
      { name: "LINK Campus University", href: "/universites/link-campus" },
    ],
  },
  {
    title: "Vie étudiante",
    links: [
      { name: "Vie étudiante à Madrid", href: "/vie-etudiante/madrid" },
      { name: "Vie étudiante à Rome", href: "/vie-etudiante/rome" },
      { name: "Vie étudiante à Valence", href: "/vie-etudiante/valence" },
      { name: "Vie étudiante à Malaga", href: "/vie-etudiante/malaga" },
    ],
  },
  {
    title: "Guides",
    links: [
      {
        name: "Réussir le test PE — Universidad Europea",
        href: "/guides/reussir-test-pe-universidad-europea",
      },
      {
        name: "Réussir le test d'admission — LINK Campus",
        href: "/guides/reussir-test-admission-link-campus",
      },
      {
        name: "Présenter sa candidature",
        href: "/guides/presenter-sa-candidature",
      },
    ],
  },
  {
    title: "Articles de blog",
    links: [
      {
        name: "Combien coûtent les études de santé en Europe ?",
        href: "/blog/cout-etudes-sante-europe",
      },
      {
        name: "Comment financer ses études de santé en Europe ?",
        href: "/blog/financer-etudes-sante-europe",
      },
      {
        name: "Études de médecine en Espagne",
        href: "/blog/etudes-medecine-espagne",
      },
      {
        name: "Études dentaires en Espagne",
        href: "/blog/etudes-dentaire-espagne",
      },
      {
        name: "Échec au PASS : les alternatives",
        href: "/blog/echec-pass-alternatives",
      },
      {
        name: "Reconnaissance des diplômes européens",
        href: "/blog/reconnaissance-diplomes-europeens",
      },
      {
        name: "Témoignage : mon parcours en médecine en Espagne",
        href: "/blog/temoignage-medecine-espagne",
      },
      {
        name: "Avantages de la kinésithérapie en Europe",
        href: "/blog/avantages-kinesitherapie-europe",
      },
    ],
  },
  {
    title: "Informations légales",
    links: [
      { name: "Mentions légales", href: "/mentions-legales" },
      {
        name: "Politique de confidentialité",
        href: "/politique-de-confidentialite",
      },
    ],
  },
];

export default function PlanDuSitePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full bg-[#1b1d3a] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#615ca5]/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#ec680a]/10 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-10 md:py-14">
          <nav className="flex items-center gap-1.5 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Plan du site</span>
          </nav>
          <h1
            className="text-3xl md:text-4xl font-bold leading-tight mb-4"
            style={{ color: "#ffffff" }}
          >
            Plan du site
          </h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl">
            Retrouvez toutes les pages du site Edumove pour explorer nos
            formations, universités, solutions de financement et ressources.
          </p>
        </div>
      </section>

      {/* Sitemap */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#EC680A] mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#334155] hover:text-[#615CA5] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
