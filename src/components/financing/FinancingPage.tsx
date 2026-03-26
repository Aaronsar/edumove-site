"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, CheckCircle2, GraduationCap, Euro, Clock, Shield, Banknote, Users, FileText, Handshake, ArrowRight, Phone } from "lucide-react";
import ContactButton from "@/components/shared/ContactButton";
import StickyBar from "@/components/program/StickyBar";

const STEPS = [
  {
    num: "01",
    title: "Évaluation gratuite",
    desc: "Un conseiller Edumove évalue votre dossier et vous présente les options de financement adaptées à votre profil et à la formation choisie.",
    icon: Users,
  },
  {
    num: "02",
    title: "Constitution du dossier",
    desc: "Edumove prépare votre dossier de prêt et vous met en relation directe avec notre partenaire LCL. Nous nous occupons de toute la partie administrative.",
    icon: FileText,
  },
  {
    num: "03",
    title: "Accord de prêt",
    desc: "Vous recevez votre accord de prêt avec un taux préférentiel négocié par Edumove. Le remboursement est différé : vous ne payez rien pendant vos études.",
    icon: Handshake,
  },
  {
    num: "04",
    title: "Remboursement après diplôme",
    desc: "Vous commencez à rembourser uniquement quand vous exercez en tant que professionnel de santé (médecin, dentiste, kiné, pharmacien, vétérinaire). Pas avant.",
    icon: GraduationCap,
  },
];

const HIGHLIGHTS = [
  "Remboursement différé jusqu'à la fin des études",
  "Taux préférentiel négocié par Edumove",
  "Financement jusqu'à 75 000 €",
  "Couvre scolarité + logement + vie courante",
  "Accompagnement personnalisé pour le dossier",
  "Compatible avec les bourses CROUS et aides régionales",
];

const FORMATIONS = [
  { name: "Médecine", slug: "medecine", range: "15 000 — 21 500 €/an", duration: "6 ans", total: "90 000 — 129 000 €" },
  { name: "Dentaire", slug: "dentaire", range: "9 420 — 18 900 €/an", duration: "5 ans", total: "47 100 — 94 500 €" },
  { name: "Kinésithérapie", slug: "kinesitherapie", range: "9 420 — 14 580 €/an", duration: "4 ans", total: "37 680 — 58 320 €" },
  { name: "Pharmacie", slug: "pharmacie", range: "9 420 — 15 000 €/an", duration: "5 ans", total: "47 100 — 75 000 €" },
  { name: "Vétérinaire", slug: "veterinaire", range: "~17 340 €/an", duration: "5 ans", total: "~86 700 €" },
];

const AIDES = [
  { title: "Bourse CROUS", desc: "Maintenue pour les études dans l'UE. De 1 000 à 5 000 € par an selon l'échelon.", amount: "1 000 — 5 000 €/an" },
  { title: "Aide à la mobilité internationale", desc: "Versée par le CROUS pour les étudiants boursiers effectuant un séjour à l'étranger.", amount: "~400 €/mois" },
  { title: "Aide au mérite", desc: "Pour les bacheliers ayant obtenu une mention Très Bien au baccalauréat.", amount: "~900 €/an" },
  { title: "Aides régionales", desc: "De nombreuses régions et départements proposent des aides à la mobilité ou des bourses complémentaires.", amount: "Variable" },
];

const BUDGET_MADRID = [
  { label: "Logement (colocation)", range: "400 — 600 €" },
  { label: "Alimentation", range: "200 — 300 €" },
  { label: "Transports", range: "50 — 80 €" },
  { label: "Loisirs / sorties", range: "100 — 150 €" },
];

const BUDGET_ROME = [
  { label: "Logement (colocation)", range: "350 — 550 €" },
  { label: "Alimentation", range: "200 — 280 €" },
  { label: "Transports", range: "35 — 50 €" },
  { label: "Loisirs / sorties", range: "80 — 120 €" },
];

const FAQ = [
  {
    question: "Qui peut bénéficier du prêt étudiant LCL ?",
    answer: "Tout étudiant admis dans l'une de nos universités partenaires (UCJC, Universidad Europea ou LINK Campus) peut bénéficier du prêt étudiant LCL via Edumove. Il n'y a pas de condition de revenus des parents. Le prêt est accordé sur la base de votre admission et de votre projet d'études.",
  },
  {
    question: "Quand commence le remboursement du prêt ?",
    answer: "Le remboursement est entièrement différé. Vous ne commencez à rembourser qu'après l'obtention de votre diplôme, lorsque vous exercez en tant que professionnel de santé (médecin, dentiste, kinésithérapeute, pharmacien ou vétérinaire). Pendant toute la durée de vos études, vous ne payez rien.",
  },
  {
    question: "Quel est le taux d'intérêt du prêt ?",
    answer: "Edumove a négocié un taux préférentiel avec LCL, inférieur aux taux standards du marché pour les prêts étudiants. Le taux exact dépend de votre profil et de la durée du prêt. Votre conseiller Edumove vous présentera les conditions détaillées lors de l'évaluation de votre dossier.",
  },
  {
    question: "Peut-on cumuler le prêt LCL avec les bourses CROUS ?",
    answer: "Oui, le prêt étudiant LCL est parfaitement cumulable avec la bourse CROUS (maintenue pour les études dans l'UE), l'aide à la mobilité internationale, l'aide au mérite et les aides régionales. Edumove vous accompagne pour identifier et obtenir toutes les aides auxquelles vous avez droit.",
  },
  {
    question: "Que se passe-t-il si je change de filière en cours d'études ?",
    answer: "Le prêt reste valide tant que vous poursuivez des études de santé dans l'une de nos universités partenaires. Si vous changez de filière (par exemple de médecine à dentaire), le prêt est maintenu. Edumove vous accompagne dans cette transition et adapte votre plan de financement.",
  },
  {
    question: "Comment Edumove m'accompagne dans le financement ?",
    answer: "Edumove s'occupe de tout : évaluation gratuite de votre dossier, constitution du dossier de prêt, mise en relation directe avec LCL, suivi de la demande jusqu'à l'accord, et identification de toutes les aides complémentaires (bourses, aides régionales). Vous n'avez aucune démarche bancaire à faire seul.",
  },
];

export default function FinancingPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#1b1d3a] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#615ca5]/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#ec680a]/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-10 md:py-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Financement</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/edumove-icon-orange.svg" alt="Edumove" width={32} height={32} className="h-7 w-auto" />
                <span className="text-white/40 text-lg font-light">&times;</span>
                <Image src="/lcl-logo-officiel.svg" alt="LCL" width={60} height={24} className="h-6 w-auto rounded" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: "#ffffff" }}>
                Financez vos études de santé en Europe
              </h1>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 max-w-md">
                Grâce à notre partenariat avec LCL, vous pouvez financer jusqu'à 100% de vos études. Vous ne remboursez qu'une fois diplômé et en exercice.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://candidature.edumove.fr" className="text-center bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-6 py-3 rounded-[5px] transition-all hover:shadow-lg hover:shadow-[#ec680a]/20">
                  Déposer ma candidature
                </a>
                <ContactButton className="text-center border border-white/30 text-white font-medium px-6 py-3 rounded-[5px] hover:bg-white/10 transition-all" />
              </div>
            </div>

            {/* Right — Stats */}
            <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/[0.06] rounded-xl p-4 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#ec680a]">75 000 €</p>
                  <p className="text-white/50 text-[11px] mt-1">Montant maximum</p>
                </div>
                <div className="bg-white/[0.06] rounded-xl p-4 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#ec680a]">0 €</p>
                  <p className="text-white/50 text-[11px] mt-1">Pendant les études</p>
                </div>
                <div className="bg-white/[0.06] rounded-xl p-4 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#ec680a]">100%</p>
                  <p className="text-white/50 text-[11px] mt-1">Finançable</p>
                </div>
              </div>
              <div className="mt-4 space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#ec680a]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#ec680a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </div>
                  <span className="text-white/70 text-sm">Remboursement différé après diplôme</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#ec680a]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#ec680a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </div>
                  <span className="text-white/70 text-sm">Taux préférentiel négocié par Edumove</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#ec680a]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#ec680a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </div>
                  <span className="text-white/70 text-sm">Compatible bourses CROUS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. COMMENT ÇA MARCHE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-2">
            Comment financer vos études ?
          </h2>
          <p className="text-[#64748b] mb-10 max-w-2xl">
            Un processus simple en 4 étapes. Edumove s'occupe de tout, vous n'avez qu'à vous concentrer sur vos études.
          </p>

          {/* Timeline */}
          <div className="grid md:grid-cols-4 gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative">
                  {/* Connector line (hidden on last) */}
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] right-[-16px] h-0.5 bg-gradient-to-r from-[#ec680a]/30 to-[#615CA5]/30" />
                  )}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ec680a]/10 to-[#615CA5]/10 border border-[#ec680a]/20 flex items-center justify-center mb-4 relative">
                      <Icon className="w-7 h-7 text-[#ec680a]" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#1B1D3A] text-white text-xs font-bold flex items-center justify-center">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="font-bold text-[#1B1D3A] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. POURQUOI C'EST AVANTAGEUX
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-[#fafbff]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-8">
            Pourquoi choisir le financement Edumove &times; LCL ?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HIGHLIGHTS.map((h, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#e2e2ef]">
                <CheckCircle2 className="w-5 h-5 text-[#ec680a] shrink-0 mt-0.5" />
                <span className="text-[#334155] text-sm">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. COMBIEN COÛTENT LES ÉTUDES
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-2">
            Combien coûtent les études de santé en Europe ?
          </h2>
          <p className="text-[#64748b] mb-8">
            Tous ces frais sont couverts par le prêt étudiant LCL.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#1B1D3A]/10">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#1B1D3A]">Formation</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#1B1D3A]">Frais / an</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#1B1D3A]">Durée</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#1B1D3A]">Coût total</th>
                </tr>
              </thead>
              <tbody>
                {FORMATIONS.map((f, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-[#fafbff] transition-colors">
                    <td className="py-3 px-4">
                      <Link href={`/formations/${f.slug}`} className="text-[#615CA5] hover:text-[#ec680a] font-semibold transition-colors">
                        {f.name}
                        <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-sm text-[#334155]">{f.range}</td>
                    <td className="py-3 px-4 text-sm text-[#334155]">{f.duration}</td>
                    <td className="py-3 px-4 text-sm font-semibold text-[#1B1D3A]">{f.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. AUTRES AIDES DISPONIBLES
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-[#fafbff]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-2">
            Autres aides disponibles
          </h2>
          <p className="text-[#64748b] mb-8">
            Ces aides sont cumulables avec le prêt étudiant LCL.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {AIDES.map((aide, i) => (
              <div key={i} className="bg-white rounded-xl border border-[#e2e2ef] p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#1B1D3A]">{aide.title}</h3>
                  <span className="text-xs font-semibold text-[#ec680a] bg-[#ec680a]/10 px-3 py-1 rounded-full">
                    {aide.amount}
                  </span>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed">{aide.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. BUDGET ÉTUDIANT MENSUEL
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-8">
            Budget étudiant mensuel
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Madrid */}
            <div className="bg-[#fafbff] rounded-2xl border border-[#e2e2ef] overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=400&fit=crop&q=80"
                  alt="Palais Royal de Madrid"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1D3A]/60 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="text-2xl">🇪🇸</span>
                  <h3 className="font-bold text-lg" style={{ color: "#ffffff" }}>Madrid</h3>
                </div>
              </div>
              <div className="p-6 space-y-3">
                {BUDGET_MADRID.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm text-[#334155]">{item.label}</span>
                    <span className="text-sm font-semibold text-[#1B1D3A]">{item.range}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-2 border-t-2 border-[#1B1D3A]/10">
                  <span className="font-bold text-[#1B1D3A]">Total mensuel</span>
                  <span className="font-bold text-[#ec680a]">750 — 1 130 €</span>
                </div>
              </div>
            </div>

            {/* Rome */}
            <div className="bg-[#fafbff] rounded-2xl border border-[#e2e2ef] overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=400&fit=crop&q=80"
                  alt="Colisée de Rome"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1D3A]/60 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="text-2xl">🇮🇹</span>
                  <h3 className="font-bold text-lg" style={{ color: "#ffffff" }}>Rome</h3>
                </div>
              </div>
              <div className="p-6 space-y-3">
                {BUDGET_ROME.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm text-[#334155]">{item.label}</span>
                    <span className="text-sm font-semibold text-[#1B1D3A]">{item.range}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-2 border-t-2 border-[#1B1D3A]/10">
                  <span className="font-bold text-[#1B1D3A]">Total mensuel</span>
                  <span className="font-bold text-[#ec680a]">665 — 1 000 €</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          7. MAILLAGE INTERNE — FORMATIONS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-2">
            Nos formations finançables
          </h2>
          <p className="text-[#64748b] mb-8">
            Toutes nos formations sont éligibles au prêt étudiant LCL avec remboursement différé.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FORMATIONS.map((f, i) => (
              <Link
                key={i}
                href={`/formations/${f.slug}`}
                className="group flex items-center justify-between bg-[#fafbff] hover:bg-[#615CA5]/5 border border-[#e2e2ef] hover:border-[#615CA5]/30 rounded-xl px-5 py-4 transition-all"
              >
                <div>
                  <span className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors block">
                    {f.name}
                  </span>
                  <span className="text-xs text-[#64748b]">{f.duration} &middot; dès {f.range.split(" — ")[0]}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#ec680a] transition-colors shrink-0" />
              </Link>
            ))}
            <Link
              href="/formations/medecine/espagne"
              className="group flex items-center justify-between bg-[#fafbff] hover:bg-[#615CA5]/5 border border-[#e2e2ef] hover:border-[#615CA5]/30 rounded-xl px-5 py-4 transition-all"
            >
              <div>
                <span className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors block">
                  Études en Espagne
                </span>
                <span className="text-xs text-[#64748b]">Toutes les filières en Espagne</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#ec680a] transition-colors shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          7b. MAILLAGE INTERNE — UNIVERSITÉS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-[#fafbff] border-t border-[#e2e2ef]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-8">
            Nos universités partenaires
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/universites/universidad-europea" className="group bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 p-6 transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-[#615CA5] flex items-center justify-center mb-3">
                <span className="text-white font-bold text-sm">UE</span>
              </div>
              <h3 className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors mb-1">Universidad Europea</h3>
              <p className="text-sm text-[#64748b]">5 campus en Espagne &middot; 10 programmes</p>
            </Link>
            <Link href="/universites/ucjc" className="group bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 p-6 transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-[#615CA5] flex items-center justify-center mb-3">
                <span className="text-white font-bold text-sm">UCJC</span>
              </div>
              <h3 className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors mb-1">UCJC Madrid</h3>
              <p className="text-sm text-[#64748b]">Madrid &middot; 4 programmes &middot; Admission sur entretien</p>
            </Link>
            <Link href="/universites/link-campus" className="group bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 p-6 transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-[#615CA5] flex items-center justify-center mb-3">
                <span className="text-white font-bold text-sm">LINK</span>
              </div>
              <h3 className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors mb-1">LINK Campus University</h3>
              <p className="text-sm text-[#64748b]">Rome, Italie &middot; 4 programmes &middot; Test QCM</p>
            </Link>
          </div>

          {/* Articles liés — cartes */}
          <div className="mt-10">
            <p className="text-sm font-semibold text-[#615CA5] uppercase tracking-wider mb-4">Articles liés</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/blog/cout-etudes-sante-europe" className="group bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 p-5 transition-all hover:shadow-md">
                <span className="text-xs font-semibold text-[#EC680A] bg-[#EC680A]/10 px-2 py-0.5 rounded-full">Financement</span>
                <h4 className="font-bold text-[#1B1D3A] text-sm mt-2 group-hover:text-[#615CA5] transition-colors leading-snug">Coût des études de santé en Europe</h4>
                <span className="inline-flex items-center gap-1 mt-2 text-xs text-[#64748b] group-hover:text-[#EC680A] transition-colors">
                  Lire <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
              <Link href="/blog/reconnaissance-diplomes-europeens" className="group bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 p-5 transition-all hover:shadow-md">
                <span className="text-xs font-semibold text-[#615CA5] bg-[#615CA5]/10 px-2 py-0.5 rounded-full">Guide</span>
                <h4 className="font-bold text-[#1B1D3A] text-sm mt-2 group-hover:text-[#615CA5] transition-colors leading-snug">Reconnaissance des diplômes européens</h4>
                <span className="inline-flex items-center gap-1 mt-2 text-xs text-[#64748b] group-hover:text-[#EC680A] transition-colors">
                  Lire <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
              <Link href="/blog/financer-etudes-sante-europe" className="group bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 p-5 transition-all hover:shadow-md">
                <span className="text-xs font-semibold text-[#EC680A] bg-[#EC680A]/10 px-2 py-0.5 rounded-full">Financement</span>
                <h4 className="font-bold text-[#1B1D3A] text-sm mt-2 group-hover:text-[#615CA5] transition-colors leading-snug">Guide complet du financement</h4>
                <span className="inline-flex items-center gap-1 mt-2 text-xs text-[#64748b] group-hover:text-[#EC680A] transition-colors">
                  Lire <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
              <Link href="/blog/echec-pass-alternatives" className="group bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 p-5 transition-all hover:shadow-md">
                <span className="text-xs font-semibold text-[#615CA5] bg-[#615CA5]/10 px-2 py-0.5 rounded-full">Actualités</span>
                <h4 className="font-bold text-[#1B1D3A] text-sm mt-2 group-hover:text-[#615CA5] transition-colors leading-snug">Échec au PASS : les alternatives</h4>
                <span className="inline-flex items-center gap-1 mt-2 text-xs text-[#64748b] group-hover:text-[#EC680A] transition-colors">
                  Lire <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          8. FAQ
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-[#fafbff]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-8">
            Questions fréquentes sur le financement
          </h2>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <details key={i} className="group bg-white rounded-xl border border-[#e2e2ef] overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer flex items-center justify-between font-semibold text-[#1B1D3A] hover:text-[#ec680a] transition-colors">
                  {item.question}
                  <ChevronRight className="w-4 h-4 transition-transform group-open:rotate-90 shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-4 text-[#334155] leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          8. CTA FINAL
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-10 md:py-16 bg-[#1B1D3A] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec680a] via-[#615ca5] to-[#ec680a]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#ffffff" }}>
            Prêt à financer vos études ?
          </h2>
          <p className="text-gray-300 mb-8">
            Un expert Edumove vous rappelle sous 24h pour étudier votre dossier de financement gratuitement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://candidature.edumove.fr" className="inline-block bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-8 py-3.5 rounded-[5px] transition-all hover:shadow-xl hover:shadow-[#ec680a]/20">
              Déposer ma candidature
            </a>
            <ContactButton className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-8 py-3.5 rounded-[5px] hover:bg-white/10 transition-all">
              <Phone className="w-4 h-4" />
              Être contacté
            </ContactButton>
          </div>
          <p className="text-gray-400 mt-4 text-sm">+33 1 89 74 42 57</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          9. STICKY BAR
      ══════════════════════════════════════════════════════════════════════ */}
      <StickyBar
        headline="Intéressé par un financement ?"
        hideResponseTime
        contactOnly
      />

      {/* ══════════════════════════════════════════════════════════════════════
          JSON-LD FAQ
      ══════════════════════════════════════════════════════════════════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
