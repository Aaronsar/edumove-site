"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Clock,
  FileText,
  CheckCircle2,
  Sparkles,
  Globe,
  GraduationCap,
  HeadphonesIcon,
  Star,
} from "lucide-react";
import TestDetails from "@/components/universites/TestDetails";
import HubSpotEmbedModal from "@/components/shared/HubSpotEmbedModal";
import DiplomaFormEmbed from "@/components/shared/DiplomaFormEmbed";

const TEST_DATE_LABEL = "25 juin 2026";
const TEST_DATE_ISO = "2026-06-25";

// Calcul du nombre de jours restants jusqu'au test pour créer un sentiment d'urgence
function getDaysUntilTest(): number {
  const now = new Date();
  const testDate = new Date(TEST_DATE_ISO);
  const diff = Math.ceil((testDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
}

const AVANTAGES = [
  {
    icon: Globe,
    title: "Test 100% en français",
    desc: "QCM intégralement en français, pas besoin d'être bilingue italien. Vous passez le test à Paris.",
  },
  {
    icon: GraduationCap,
    title: "Diplôme reconnu en Europe",
    desc: "Le diplôme délivré par LINK Campus University est reconnu dans toute l'Union Européenne et en France.",
  },
  {
    icon: Sparkles,
    title: "Étudier à Rome",
    desc: "Vivre dans l'une des plus belles villes au monde, au cœur de la dolce vita, pendant vos études de médecine.",
  },
  {
    icon: HeadphonesIcon,
    title: "Accompagnement 100% gratuit",
    desc: "Edumove vous accompagne gratuitement : inscription au test, préparation, candidature, installation à Rome.",
  },
];

const ETAPES_CANDIDATURE = [
  {
    n: 1,
    title: "Inscription à Edumove",
    desc: "Vous remplissez le formulaire de candidature. Un conseiller dédié vous rappelle sous 24h pour faire le point sur votre projet.",
  },
  {
    n: 2,
    title: "Préparation du dossier",
    desc: "Votre conseiller monte votre dossier de candidature pour LINK Campus University : bulletins, lettre de motivation, traductions.",
  },
  {
    n: 3,
    title: "Inscription au test (200 €)",
    desc: "Vous payez les frais d'inscription au test directement à LINK Campus. Edumove vous fournit les annales et les fiches de révision.",
  },
  {
    n: 4,
    title: `Test à Paris — ${TEST_DATE_LABEL}`,
    desc: "Vous passez le QCM à Paris : 80 questions sur 5 matières en français (biologie, chimie, maths, physique, culture générale).",
  },
  {
    n: 5,
    title: "Résultats sous quelques jours",
    desc: "LINK Campus communique les résultats. Si vous êtes admis, vous recevez votre lettre d'admission officielle.",
  },
  {
    n: 6,
    title: "Installation à Rome",
    desc: "Edumove s'occupe de la déclaration de valeur au consulat, du visa, et vous aide à trouver un logement à Rome.",
  },
];

const FAQ = [
  {
    question: "Le test de LINK Campus est-il difficile ?",
    answer:
      "Le test de LINK Campus est de niveau Terminale (bac scientifique). Si vous avez un dossier solide en sciences et que vous révisez le programme de Terminale (bio, chimie, maths, physique), vous avez toutes vos chances. La culture générale est la partie où la préparation Edumove fait la différence.",
  },
  {
    question: "En quoi consiste exactement le test ?",
    answer:
      "C'est un QCM de 80 questions en français, sur 5 matières : biologie (~18 questions), chimie (~12), mathématiques (~20), physique (~18), culture générale (~12). Durée : environ 2h30. Notation : +1,5 pt par bonne réponse, –0,4 pt par mauvaise réponse, 0 pt si non répondue.",
  },
  {
    question: "Où se passe le test ?",
    answer:
      "Le test se passe à Paris, dans un centre d'examen partenaire de LINK Campus University. Pas besoin de se déplacer à Rome pour candidater.",
  },
  {
    question: "Combien coûte le test ?",
    answer:
      "Les frais d'inscription au test sont de 200 €, payables directement à LINK Campus University. L'accompagnement Edumove (préparation, candidature, suivi) est entièrement gratuit pour les étudiants et leurs familles.",
  },
  {
    question: "Faut-il parler italien pour étudier à LINK Rome ?",
    answer:
      "Non. Le test est en français, et les premières années peuvent être suivies en anglais. Vous apprenez l'italien progressivement sur place : la plupart de nos étudiants parlent couramment italien en 6 à 12 mois.",
  },
  {
    question: "Quand commencent les cours après le test ?",
    answer:
      "Si vous êtes admis au test de juin 2026, la rentrée a lieu en octobre 2026 à Rome. Vous avez donc 3 à 4 mois pour préparer votre installation (logement, visa, démarches administratives) — Edumove vous accompagne sur chaque étape.",
  },
  {
    question: "Quel est le taux de réussite au test LINK ?",
    answer:
      "Le taux de réussite varie selon les sessions, mais avec une préparation sérieuse (révision du programme de Terminale + annales fournies par Edumove), la majorité des candidats accompagnés par Edumove sont admis.",
  },
  {
    question: "Que se passe-t-il si je rate le test ?",
    answer:
      "Vous pouvez retenter à la session suivante. En parallèle, votre conseiller Edumove peut vous orienter vers d'autres options (Universidad Europea en Espagne, autre université italienne) si vous le souhaitez.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: "Test d'admission LINK Campus University — Médecine Rome",
  description:
    "Test d'admission en QCM (100% en français) pour intégrer le cursus de médecine de LINK Campus University à Rome.",
  startDate: TEST_DATE_ISO,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Paris",
    address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
  },
  organizer: {
    "@type": "CollegeOrUniversity",
    name: "Link Campus University",
    url: "https://www.unilink.it",
  },
  offers: {
    "@type": "Offer",
    price: 200,
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://candidature.edumove.fr",
  },
  url: "https://www.edumove.fr/test-link-campus",
};

export default function TestLinkLandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const daysLeft = getDaysUntilTest();

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ─── HERO LEAD-FIRST (split : pitch + form inline) ─── */}
      <section className="relative overflow-hidden bg-[#1B1D3A] text-white">
        <div aria-hidden className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-20 w-[420px] h-[420px] rounded-full bg-[#615CA5]/25 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#EC680A]/15 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-start">

            {/* ── Colonne gauche : pitch ── */}
            <div>
              {/* Badge urgence */}
              <div className="inline-flex items-center gap-2 bg-[#EC680A]/15 border border-[#EC680A]/40 rounded-full px-4 py-2 mb-6 text-sm font-semibold text-[#EC680A]">
                <CalendarDays className="w-4 h-4" />
                {daysLeft > 0 ? `Plus que ${daysLeft} jour${daysLeft > 1 ? "s" : ""} — Test du ${TEST_DATE_LABEL}` : `Test du ${TEST_DATE_LABEL}`}
              </div>

              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
                style={{ color: "#ffffff" }}
              >
                Médecine à Rome avec <span style={{ color: "#EC680A" }}>LINK Campus</span> — sans PASS, sans LAS
              </h1>

              <p className="text-base md:text-lg mb-6 text-white/85">
                Le test d&apos;admission se passe <strong className="text-white">en français à Paris</strong>. QCM de niveau Terminale, frais d&apos;inscription 200 €. Rentrée septembre 2026 à Rome.
              </p>

              {/* Bullets bénéfices */}
              <ul className="space-y-2.5 mb-8">
                {[
                  "QCM 100 % en français — pas besoin de parler italien",
                  "Diplôme reconnu dans toute l'Union Européenne",
                  "Accompagnement Edumove gratuit (préparation, candidature, installation)",
                  "Test 1 jour à Paris — rentrée 2 mois plus tard à Rome",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm md:text-[15px] text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-[#EC680A] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Infos clés en mini-grille */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: CalendarDays, label: "Date", value: TEST_DATE_LABEL.replace(" 2026", "") },
                  { icon: MapPin, label: "Lieu", value: "Paris" },
                  { icon: FileText, label: "Format", value: "QCM FR" },
                  { icon: Clock, label: "Durée", value: "2h30" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-3">
                    <item.icon className="w-4 h-4 text-[#EC680A] mb-1.5" />
                    <p className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">{item.label}</p>
                    <p className="text-sm font-bold leading-tight">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Colonne droite : carte form inline ── */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-3xl shadow-[0_25px_80px_-15px_rgba(0,0,0,0.4)] overflow-hidden">
                {/* Bandeau supérieur */}
                <div className="bg-gradient-to-br from-[#EC680A] to-[#D45E09] px-6 py-4 text-white text-center">
                  <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Inscription gratuite
                  </div>
                  <p className="text-base font-bold">Démarrez votre candidature en 2 min</p>
                </div>

                {/* Form */}
                <div className="px-6 py-6">
                  <p className="text-xs text-[#64748b] mb-4 leading-relaxed">
                    Un conseiller Edumove vous rappelle <strong className="text-[#1B1D3A]">sous 24h</strong> pour étudier votre profil et préparer votre candidature au test LINK.
                  </p>
                  <DiplomaFormEmbed form="inscription-link-k21s" />
                </div>

                {/* Bandeau de réassurance */}
                <div className="bg-[#fafbff] px-6 py-3 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-4 text-[11px] text-[#64748b] font-medium flex-wrap">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                      100 % gratuit
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                      Sans engagement
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                      Données protégées
                    </span>
                  </div>
                </div>
              </div>

              {/* Mini-rappel sous le form */}
              <p className="text-center text-xs text-white/60 mt-4">
                Déjà <strong className="text-white">500+ étudiants</strong> accompagnés vers les facs de santé en Europe
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── BANDE DE PREUVE SOCIALE / TRUST ─── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-6 md:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            {[
              { value: "500+", label: "Étudiants accompagnés" },
              { value: "100 %", label: "Accompagnement gratuit" },
              { value: "24h", label: "Réponse d'un conseiller" },
              { value: "200 €", label: "Frais test LINK" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-[#1B1D3A] tracking-tight">{stat.value}</p>
                <p className="text-xs md:text-sm text-[#64748b] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POURQUOI LINK ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#EC680A] mb-3">
            Pourquoi choisir LINK Campus
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-10 max-w-2xl">
            Un test accessible, un cursus reconnu, une ville incroyable
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AVANTAGES.map((a) => (
              <div
                key={a.title}
                className="bg-white border border-gray-200/80 border-l-4 border-l-[#615CA5] rounded-2xl p-6 hover:shadow-[0_20px_60px_-15px_rgba(97,92,165,0.15)] hover:-translate-y-1 hover:border-l-[#EC680A] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 flex items-center justify-center mb-4 shadow-md shadow-[#615CA5]/20">
                  <a.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#1B1D3A] text-base mb-2">{a.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DÉTAILS DU TEST (réutilise composant existant) ─── */}
      <TestDetails type="link" />

      {/* ─── TÉMOIGNAGE ─── */}
      <section className="py-16 md:py-20 bg-[#fafbff]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#1B1D3A] to-[#615CA5] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div aria-hidden className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#EC680A]/20 blur-3xl" />
            <div className="relative">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#EC680A] text-[#EC680A]" />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl font-medium leading-relaxed mb-6 text-white/95">
                « Le test de LINK c&apos;est un QCM qu&apos;on passe à Paris, en français. J&apos;avais révisé bio et chimie pendant un mois avec les fiches d&apos;Edumove. Le plus dur c&apos;est culture générale, faut lire un peu avant. Résultat : admis en médecine à Rome, j&apos;ai commencé l&apos;italien sur place et en 6 mois je suivais les cours. »
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#EC680A] flex items-center justify-center text-white font-bold text-lg">
                  T
                </div>
                <div>
                  <p className="font-bold">Thomas</p>
                  <p className="text-sm text-white/70">Étudiant en médecine, LINK Campus Rome</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ÉTAPES DE CANDIDATURE ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#EC680A] mb-3">
            La candidature étape par étape
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-12 max-w-2xl">
            De l&apos;inscription à votre rentrée à Rome, on s&apos;occupe de tout
          </h2>

          <div className="space-y-4">
            {ETAPES_CANDIDATURE.map((etape) => (
              <div
                key={etape.n}
                className="group flex gap-5 bg-white border border-gray-200/80 rounded-2xl p-5 md:p-6 hover:shadow-[0_20px_60px_-15px_rgba(97,92,165,0.12)] hover:border-[#EC680A]/30 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-[#615CA5]/20">
                  {etape.n}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#1B1D3A] text-base md:text-lg mb-1">{etape.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{etape.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={openModal}
              className="group inline-flex items-center gap-2 bg-[#EC680A] hover:bg-[#D45E09] text-white text-base font-semibold px-7 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#EC680A]/30 hover:gap-3 cursor-pointer"
            >
              Démarrer ma candidature gratuitement
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-[#94a3b8] mt-3">
              Réponse d&apos;un conseiller Edumove sous 24h ouvrées
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 md:py-20 bg-[#fafbff]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#EC680A] mb-3">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-10">
            Questions fréquentes sur le test LINK
          </h2>

          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-gray-200/80 overflow-hidden hover:border-[#615CA5]/30 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 list-none">
                  <span className="font-semibold text-[#1B1D3A] text-sm md:text-base pr-4">{item.question}</span>
                  <span className="shrink-0 w-7 h-7 rounded-full bg-[#615CA5]/10 flex items-center justify-center group-open:rotate-45 transition-transform">
                    <span className="text-[#615CA5] font-bold text-lg leading-none">+</span>
                  </span>
                </summary>
                <div className="px-5 pb-5 -mt-1 text-sm text-[#64748b] leading-relaxed">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1B1D3A] via-[#1B1D3A] to-[#615CA5] text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#EC680A]/15 blur-3xl" />
        <div aria-hidden className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#615CA5]/30 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 text-sm font-semibold">
            <CalendarDays className="w-4 h-4 text-[#EC680A]" />
            Test : {TEST_DATE_LABEL} — Inscriptions ouvertes
          </div>

          <h2
            className="text-3xl md:text-5xl font-bold mb-5 tracking-tight"
            style={{ color: "#ffffff" }}
          >
            Prêt à devenir médecin à Rome ?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Inscrivez-vous gratuitement à Edumove : un conseiller vous rappelle sous 24h pour préparer votre candidature au test LINK.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={openModal}
              className="group inline-flex items-center justify-center gap-2 bg-[#EC680A] hover:bg-[#D45E09] text-white text-base font-semibold px-7 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#EC680A]/30 hover:gap-3 cursor-pointer"
            >
              Je candidate maintenant
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              href="/guides/reussir-test-admission-link-campus"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/30 text-white text-base font-semibold px-7 py-4 rounded-full transition-all duration-300"
            >
              Lire le guide complet
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 text-center">
            {[
              { label: "Test en français", icon: Globe },
              { label: "Diplôme reconnu UE", icon: GraduationCap },
              { label: "Accompagnement gratuit", icon: HeadphonesIcon },
              { label: "Étude à Rome", icon: Sparkles },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 text-sm text-white/80">
                <item.icon className="w-5 h-5 text-[#EC680A]" />
                <span className="font-semibold">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-white/60 mt-8">
            <CheckCircle2 className="w-4 h-4 text-[#EC680A]" />
            <span>100% gratuit · Sans engagement · Réponse sous 24h</span>
          </div>
        </div>
      </section>

      {/* ─── MODALE HUBSPOT (CTA secondaires du reste de la page) ─── */}
      <HubSpotEmbedModal
        isOpen={isModalOpen}
        onClose={closeModal}
        form="inscription-link-k21s"
        title="Démarrer ma candidature"
        subtitle="Test LINK Campus du 25 juin 2026 — un conseiller Edumove vous rappelle sous 24h pour préparer votre candidature. 100% gratuit, sans engagement."
      />
    </main>
  );
}
