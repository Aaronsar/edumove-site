"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Quote, GraduationCap, ArrowRight } from "lucide-react";
import ContactButton from "@/components/shared/ContactButton";
import StickyBar from "@/components/program/StickyBar";
import FinancingBanner from "@/components/shared/FinancingBanner";

interface Testimonial {
  name: string;
  initials: string;
  quote: string;
  context: string;
  formation: string;
  university: string;
  type: "student" | "parent";
  color: string;
  uniSlug?: string;
}

const ALL_TESTIMONIALS: Testimonial[] = [
  // ── Universidad Europea ──
  {
    name: "Léa B.",
    initials: "LB",
    quote: "Deux tentatives en PASS, deux échecs. J'étais dégoutée. Ma mère a trouvé Edumove sur Instagram, j'ai appelé, et 3 mois après j'étais inscrite à l'Universidad Europea. Ça fait un an et demi, mes notes sont bonnes, je me suis fait des amis… j'y crois enfin.",
    context: "Étudiante en 2e année de médecine — UE Madrid",
    formation: "Médecine",
    university: "Universidad Europea",
    type: "student",
    color: "bg-[#615ca5]",
    uniSlug: "universidad-europea",
  },
  {
    name: "Inès K.",
    initials: "IK",
    quote: "Le test PE me faisait flipper, j'avais lu plein de trucs sur internet. Au final mon conseiller m'a envoyé des annales, on a fait des sessions de révision ensemble, et le jour J c'était dur mais faisable. J'ai eu ma place en médecine à Madrid, campus Villaviciosa. Ça fait 2 ans et j'en reviens toujours pas.",
    context: "Étudiante en 2e année de médecine — UE Madrid",
    formation: "Médecine",
    university: "Universidad Europea",
    type: "student",
    color: "bg-[#615ca5]",
    uniSlug: "universidad-europea",
  },
  {
    name: "Philippe G.",
    initials: "PG",
    quote: "Mon fils voulait Madrid, ma femme préférait un truc plus calme. Le conseiller nous a fait un comparatif honnête — budget, ambiance, taille des promos. On a choisi Malaga et franchement c'était le bon call. Il est à 10 min de la plage, il bosse bien, et nous on dort tranquille.",
    context: "Parent d'un étudiant en dentaire — UE Malaga",
    formation: "Dentaire",
    university: "Universidad Europea",
    type: "parent",
    color: "bg-[#ec680a]",
    uniSlug: "universidad-europea",
  },
  {
    name: "Raphaël C.",
    initials: "RC",
    quote: "J'avais pas trouvé de place en véto en France, même avec 14 de moyenne. À l'UE Valence les cours sont en anglais, les labos sont neufs, et on est 40 par promo. C'est un autre monde. Et Valence en tant que ville pour un étudiant, franchement c'est le rêve.",
    context: "Étudiant en 1re année de vétérinaire — UE Valence",
    formation: "Vétérinaire",
    university: "Universidad Europea",
    type: "student",
    color: "bg-[#615ca5]",
    uniSlug: "universidad-europea",
  },
  // ── UCJC ──
  {
    name: "Camille V.",
    initials: "CV",
    quote: "Ce qui m'a décidé pour l'UCJC c'est qu'il y a pas de test écrit, juste un entretien. J'étais stressée mais c'était plus une discussion qu'un oral. En kiné les stages commencent dès la première année, et pour le prix c'est clairement l'option la plus accessible.",
    context: "Étudiante en 2e année de kinésithérapie — UCJC",
    formation: "Kinésithérapie",
    university: "UCJC",
    type: "student",
    color: "bg-[#615ca5]",
    uniSlug: "ucjc",
  },
  {
    name: "Nathalie L.",
    initials: "NL",
    quote: "Après le PASS raté, on était au fond du trou avec ma fille. Elle pleurait tous les soirs. On a contacté Edumove un dimanche, le lundi un conseiller nous rappelait. Trois semaines après elle avait sa place à l'UCJC. Aujourd'hui elle sourit quand elle part en cours. C'est tout ce qu'on voulait.",
    context: "Mère d'une étudiante en dentaire — UCJC",
    formation: "Dentaire",
    university: "UCJC",
    type: "parent",
    color: "bg-[#ec680a]",
    uniSlug: "ucjc",
  },
  {
    name: "Mehdi A.",
    initials: "MA",
    quote: "J'avais pas un gros dossier, 11 de moyenne au bac. En France c'était même pas la peine d'essayer dentaire. L'UCJC m'a accepté sur entretien, et la fac est en plein Madrid. Les cours sont en espagnol mais on progresse vite. Je regrette zéro.",
    context: "Étudiant en 1re année de dentaire — UCJC",
    formation: "Dentaire",
    university: "UCJC",
    type: "student",
    color: "bg-[#615ca5]",
    uniSlug: "ucjc",
  },
  // ── LINK Campus ──
  {
    name: "Lucas P.",
    initials: "LP",
    quote: "J'avais 12 de moyenne au bac, en France c'était mort pour médecine. Un pote m'a parlé d'Edumove, j'ai tenté. Ça fait 3 ans que je suis à Rome maintenant, je bosse dur mais j'adore ce que je fais. Le test d'entrée c'était stressant mais ils m'avaient bien préparé.",
    context: "Étudiant en 3e année de médecine — LINK Campus, Rome",
    formation: "Médecine",
    university: "LINK Campus",
    type: "student",
    color: "bg-[#ec680a]",
    uniSlug: "link-campus",
  },
  {
    name: "Antoine F.",
    initials: "AF",
    quote: "Le test de LINK c'est un QCM qu'on passe à Paris, en français. J'avais révisé bio et chimie pendant un mois avec les fiches d'Edumove. Le plus dur c'est culture générale, faut lire un peu avant. Résultat : admis en médecine à Rome, j'ai commencé l'italien sur place et en 6 mois je suivais les cours.",
    context: "Étudiant en 2e année de médecine — LINK Campus, Rome",
    formation: "Médecine",
    university: "LINK Campus",
    type: "student",
    color: "bg-[#615ca5]",
    uniSlug: "link-campus",
  },
  {
    name: "Catherine B.",
    initials: "CB",
    quote: "Notre fils voulait faire pharmacie mais en France les places sont rares. À LINK il a été admis sur dossier, sans test. La déclaration de valeur au consulat, l'inscription, le logement à Rome… on a rien eu à gérer nous-mêmes, le conseiller s'est occupé de tout.",
    context: "Mère d'un étudiant en pharmacie — LINK Campus",
    formation: "Pharmacie",
    university: "LINK Campus",
    type: "parent",
    color: "bg-[#ec680a]",
    uniSlug: "link-campus",
  },
  {
    name: "Emma D.",
    initials: "ED",
    quote: "Vivre à Rome en tant qu'étudiant c'est quelque chose. La fac est à taille humaine, les profs connaissent ton prénom. En kiné on fait beaucoup de pratique, les stages en hôpital commencent tôt. Et le week-end t'es au Trastevere avec tes potes. Honnêtement je changerais pour rien.",
    context: "Étudiante en 3e année de kinésithérapie — LINK Campus",
    formation: "Kinésithérapie",
    university: "LINK Campus",
    type: "student",
    color: "bg-[#615ca5]",
    uniSlug: "link-campus",
  },
  // ── Autres (carousel par défaut) ──
  {
    name: "Marie D.",
    initials: "MD",
    quote: "On était un peu perdus au début, on connaissait personne qui avait fait ça. Le conseiller nous a tout expliqué, il a géré le dossier, trouvé l'appart à Madrid… Aujourd'hui notre fils est en 2e année de dentaire là-bas et il adore. Franchement on referait ce choix sans hésiter.",
    context: "Parent d'un étudiant en dentaire à Madrid",
    formation: "Dentaire",
    university: "Madrid",
    type: "parent",
    color: "bg-[#615ca5]",
  },
  {
    name: "Sophie M.",
    initials: "SM",
    quote: "La question du financement nous bloquait complètement. 6 ans d'études à l'étranger, on voyait pas comment faire. Ils nous ont mis en relation avec LCL, le prêt a été accepté en 3 semaines et notre fille ne remboursera qu'une fois en poste. Ça nous a enlevé un poids énorme.",
    context: "Mère d'une étudiante en pharmacie",
    formation: "Pharmacie",
    university: "",
    type: "parent",
    color: "bg-[#615CA5]",
  },
  {
    name: "Thomas R.",
    initials: "TR",
    quote: "Honnêtement j'avais des doutes au début, faire kiné en Espagne ça faisait un peu « plan B ». Maintenant que je suis à l'UCJC depuis 2 ans, je vois que la formation est top, les stages commencent tôt et Madrid c'est une ville géniale pour un étudiant.",
    context: "Étudiant en kinésithérapie — UCJC Madrid",
    formation: "Kinésithérapie",
    university: "UCJC",
    type: "student",
    color: "bg-[#EC680A]",
    uniSlug: "ucjc",
  },
];

const FILTERS = ["Tous", "Médecine", "Dentaire", "Kinésithérapie", "Pharmacie", "Vétérinaire"];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl border border-[#e2e2ef] p-6 flex flex-col h-full hover:shadow-md transition-shadow">
      {/* Quote icon */}
      <Quote className="w-8 h-8 text-[#EC680A]/20 mb-3 shrink-0" />

      {/* Quote */}
      <p className="text-[#334155] text-sm leading-relaxed mb-6 flex-1">
        &laquo; {t.quote} &raquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center shrink-0`}>
          <span className="text-white text-xs font-bold">{t.initials}</span>
        </div>
        <div className="min-w-0">
          <p className="font-bold text-[#1B1D3A] text-sm">{t.name}</p>
          <p className="text-xs text-[#64748b] truncate">{t.context}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        <span className="text-[10px] font-semibold text-[#615CA5] bg-[#615CA5]/10 px-2 py-0.5 rounded-full">
          {t.formation}
        </span>
        {t.uniSlug && (
          <Link
            href={`/universites/${t.uniSlug}`}
            className="text-[10px] font-semibold text-[#EC680A] bg-[#EC680A]/10 px-2 py-0.5 rounded-full hover:bg-[#EC680A]/20 transition-colors"
          >
            {t.university}
          </Link>
        )}
        <span className="text-[10px] font-medium text-[#64748b] bg-gray-100 px-2 py-0.5 rounded-full">
          {t.type === "parent" ? "Parent" : "Étudiant"}
        </span>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  const [filter, setFilter] = useState("Tous");

  const filtered = filter === "Tous"
    ? ALL_TESTIMONIALS
    : ALL_TESTIMONIALS.filter((t) => t.formation === filter);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full bg-[#1b1d3a] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#615ca5]/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#ec680a]/10 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-10 md:py-14">
          <nav className="flex items-center gap-1.5 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Témoignages</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: "#ffffff" }}>
              Avis Edumove : ils ont fait le choix de l'Europe
            </h1>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
              Étudiants et parents témoignent de leur expérience avec Edumove. Médecine, dentaire, kinésithérapie, pharmacie, vétérinaire — découvrez leurs parcours en Espagne et en Italie.
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-white/[0.06] rounded-xl px-5 py-3 text-center">
                <p className="text-2xl font-bold text-[#ec680a]">{ALL_TESTIMONIALS.length}</p>
                <p className="text-white/50 text-[11px]">Témoignages</p>
              </div>
              <div className="bg-white/[0.06] rounded-xl px-5 py-3 text-center">
                <p className="text-2xl font-bold text-[#ec680a]">3</p>
                <p className="text-white/50 text-[11px]">Universités</p>
              </div>
              <div className="bg-white/[0.06] rounded-xl px-5 py-3 text-center">
                <p className="text-2xl font-bold text-[#ec680a]">5</p>
                <p className="text-white/50 text-[11px]">Filières</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section className="py-12 md:py-16 bg-[#fafbff]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  filter === f
                    ? "bg-[#1B1D3A] text-white shadow-lg shadow-[#1B1D3A]/20"
                    : "bg-white text-[#334155] border border-gray-200 hover:border-[#EC680A]/40 hover:text-[#EC680A]"
                }`}
              >
                {f} {f === "Tous" ? `(${ALL_TESTIMONIALS.length})` : `(${ALL_TESTIMONIALS.filter((t) => t.formation === f).length})`}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-[#64748b]">Aucun témoignage trouvé pour ce filtre.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── BLOG ARTICLE CTA ── */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/blog/temoignage-medecine-espagne" className="group block">
            <div className="bg-gradient-to-br from-[#615CA5]/5 to-[#EC680A]/5 border border-[#615CA5]/15 rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#615CA5]/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-[#615CA5]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#EC680A] uppercase tracking-wider mb-1">Témoignage complet</p>
                  <h3 className="text-lg font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors mb-1">
                    Clara, 22 ans — 3e année de médecine à Madrid
                  </h3>
                  <p className="text-sm text-[#64748b]">
                    De l'échec au PASS à l'admission à l'Universidad Europea : découvrez le parcours complet de Clara.
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-[#615CA5] group-hover:text-[#EC680A] transition-colors">
                    Lire son témoignage <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── FINANCING ── */}
      <FinancingBanner />

      {/* ── CTA ── */}
      <section className="relative py-10 md:py-16 bg-[#1B1D3A] overflow-hidden" data-program-cta>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec680a] via-[#615ca5] to-[#ec680a]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#ffffff" }}>
            Prêt à écrire votre propre histoire ?
          </h2>
          <p className="text-gray-300 mb-8">
            Rejoignez les +2 000 étudiants accompagnés par Edumove. Un expert vous rappelle sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://candidature.edumove.fr" className="inline-block bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-8 py-3.5 rounded-[5px] transition-all hover:shadow-xl hover:shadow-[#ec680a]/20">
              Déposer ma candidature
            </a>
            <ContactButton className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-8 py-3.5 rounded-[5px] hover:bg-white/10 transition-all">
              Être contacté
            </ContactButton>
          </div>
          <p className="text-gray-400 mt-4 text-sm">+33 1 89 74 42 57</p>
        </div>
      </section>

      <StickyBar />

      {/* AggregateRating JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Edumove",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "14",
              bestRating: "5",
            },
          }),
        }}
      />
    </>
  );
}
