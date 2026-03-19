"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Clock,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  XCircle,
  Lightbulb,
  MapPin,
  ArrowRight,
  Phone,
  BookOpen,
  AlertTriangle,
  GraduationCap,
  Target,
  Euro,
  FileText,
  Beaker,
  Dna,
  Calculator,
  Atom,
  Globe,
  Timer,
  Brain,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ContactButton from "@/components/shared/ContactButton";

/* ---------- DATA ---------- */
const sommaire = [
  { id: "quest-ce-que-le-test", label: "Qu\u2019est-ce que le test LINK ?" },
  { id: "matieres", label: "Les 5 mati\u00e8res" },
  { id: "notation", label: "Format et notation" },
  { id: "infos-pratiques", label: "Informations pratiques" },
  { id: "conseils", label: "Conseils pratiques" },
  { id: "filieres", label: "Fili\u00e8res concern\u00e9es" },
];

const matieresData: { name: string; icon: LucideIcon; questions: string; description: string; conseil: string }[] = [
  {
    name: "Biologie",
    icon: Dna,
    questions: "~18 questions",
    description: "Biologie cellulaire, g\u00e9n\u00e9tique, anatomie, syst\u00e8mes du corps humain. Questions de niveau Terminale.",
    conseil: "R\u00e9visez les grandes fonctions biologiques et la biologie mol\u00e9culaire du programme de Terminale.",
  },
  {
    name: "Chimie",
    icon: Beaker,
    questions: "~12 questions",
    description: "Chimie organique, r\u00e9actions chimiques, tableau p\u00e9riodique, liaisons mol\u00e9culaires.",
    conseil: "Concentrez-vous sur la chimie organique et les \u00e9quilibres chimiques.",
  },
  {
    name: "Math\u00e9matiques",
    icon: Calculator,
    questions: "~20 questions",
    description: "Alg\u00e8bre, probabilit\u00e9s, statistiques, fonctions, g\u00e9om\u00e9trie. C\u2019est la mati\u00e8re avec le plus de questions.",
    conseil: "Entra\u00eenez-vous sur les probabilit\u00e9s et les fonctions. La calculatrice n\u2019est pas autoris\u00e9e.",
  },
  {
    name: "Physique",
    icon: Atom,
    questions: "~18 questions",
    description: "M\u00e9canique, optique, \u00e9lectricit\u00e9, thermodynamique. Questions de type exercices d\u2019application.",
    conseil: "Ma\u00eetrisez les formules fondamentales et les unit\u00e9s de mesure.",
  },
  {
    name: "Culture g\u00e9n\u00e9rale",
    icon: Globe,
    questions: "~12 questions",
    description: "Questions li\u00e9es au domaine m\u00e9dical, \u00e0 l\u2019actualit\u00e9 sant\u00e9 et \u00e0 la culture scientifique g\u00e9n\u00e9rale.",
    conseil: "Suivez l\u2019actualit\u00e9 sant\u00e9 et relisez les grandes d\u00e9couvertes m\u00e9dicales.",
  },
];

const conseilsData: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: BookOpen,
    title: "R\u00e9viser le programme de Terminale",
    description: "Les questions sont de niveau bac. Reprenez vos cours de SVT, physique-chimie et maths.",
  },
  {
    icon: Timer,
    title: "G\u00e9rer votre temps",
    description: "80 questions en ~2h30, soit environ 1min50 par question. Ne restez pas bloqu\u00e9(e) trop longtemps.",
  },
  {
    icon: AlertTriangle,
    title: "Ne pas deviner au hasard",
    description: "Les mauvaises r\u00e9ponses co\u00fbtent \u20130.4 point. Mieux vaut ne pas r\u00e9pondre que deviner.",
  },
  {
    icon: Target,
    title: "Bien lire les \u00e9nonc\u00e9s",
    description: "Lisez chaque question attentivement. Certaines formulations peuvent \u00eatre pi\u00e9geuses.",
  },
  {
    icon: Brain,
    title: "Commencer par les questions faciles",
    description: "Parcourez d\u2019abord le QCM, r\u00e9pondez aux questions dont vous \u00eates s\u00fbr(e), puis revenez sur les autres.",
  },
  {
    icon: Lightbulb,
    title: "Rester calme et concentr\u00e9(e)",
    description: "Le stress peut vous faire perdre des points. Respirez et gardez votre lucidite\u0301 tout au long de l\u2019\u00e9preuve.",
  },
];

const filieresTable = [
  { filiere: "M\u00e9decine", test: true },
  { filiere: "Dentaire", test: true },
  { filiere: "Kin\u00e9sith\u00e9rapie", test: true },
  { filiere: "Pharmacie", test: false, note: "sur dossier" },
];

/* ---------- COMPONENTS ---------- */

function SommaireBlock() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden mb-10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm font-semibold text-[#1B1D3A]"
      >
        Sommaire
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && (
        <nav className="mt-2 bg-white border border-gray-200 rounded-xl p-4 space-y-2">
          {sommaire.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block text-sm text-[#64748b] hover:text-[#EC680A] transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}

function SommaireSidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <p className="text-xs uppercase tracking-widest text-[#EC680A] font-semibold mb-4">Sommaire</p>
        <nav className="space-y-2.5 border-l-2 border-gray-200 pl-4">
          {sommaire.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block text-sm text-[#64748b] hover:text-[#EC680A] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

function Callout({ children, variant = "info" }: { children: React.ReactNode; variant?: "info" | "warning" }) {
  const isWarning = variant === "warning";
  return (
    <div
      className={`rounded-xl border-l-4 p-5 flex items-start gap-3 my-6 ${
        isWarning
          ? "bg-[#EC680A]/5 border-[#EC680A]"
          : "bg-[#615CA5]/5 border-[#615CA5]"
      }`}
    >
      <Lightbulb className={`w-5 h-5 shrink-0 mt-0.5 ${isWarning ? "text-[#EC680A]" : "text-[#615CA5]"}`} />
      <div className="text-sm text-[#334155] leading-relaxed">{children}</div>
    </div>
  );
}

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-xl md:text-2xl font-bold text-[#1B1D3A] mb-6 mt-14 scroll-mt-24 flex items-center gap-3"
    >
      {children}
    </h2>
  );
}

/* ---------- MAIN ---------- */
export default function GuideTestLINK() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[#1B1D3A] py-16 md:py-24 px-6 overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#615CA5]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EC680A]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <nav className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
            <Link href="/" className="hover:text-white/70 transition-colors">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/universites/link-campus" className="hover:text-white/70 transition-colors">LINK Campus University</Link>
            <span className="mx-2">/</span>
            <span style={{ color: "rgba(255,255,255,0.7)" }}>Guide Test d&apos;admission</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block bg-[#EC680A] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              Guide complet
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border" style={{ color: "rgba(255,255,255,0.6)", borderColor: "rgba(255,255,255,0.15)" }}>
              <Clock className="w-3.5 h-3.5" />
              10 min de lecture
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] mb-6" style={{ color: "#ffffff" }}>
            R&eacute;ussir le test d&apos;admission
            <br />
            <span style={{ color: "#EC680A" }}>de LINK Campus University</span>
          </h1>

          <p className="text-lg max-w-2xl mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Tout savoir sur le QCM scientifique : les 5 mati&egrave;res d&eacute;taill&eacute;es,
            le syst&egrave;me de notation, les informations pratiques et nos conseils pour maximiser
            vos chances d&apos;admission.
          </p>

          <div className="flex flex-wrap gap-3">
            {matieresData.map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-2 text-sm px-3.5 py-2 rounded-lg"
                style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.7)" }}
              >
                <m.icon className="w-4 h-4" style={{ color: "#EC680A" }} />
                {m.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-12">
            {/* Content */}
            <div>
              <SommaireBlock />

              {/* Intro */}
              <p className="text-[#334155] leading-relaxed mb-4">
                Le <strong>test d&apos;admission de LINK Campus University</strong> est un QCM scientifique
                en <strong>fran&ccedil;ais</strong> compos&eacute; de <strong>80 questions</strong> r&eacute;parties
                sur 5 mati&egrave;res. Il se passe <strong>en pr&eacute;sentiel &agrave; Paris</strong> et
                dure environ <strong>2h30</strong>.
              </p>
              <p className="text-[#334155] leading-relaxed mb-6">
                Ce guide d&eacute;taille chaque mati&egrave;re, le syst&egrave;me de notation et vous
                donne les <strong>conseils pratiques</strong> pour arriver pr&eacute;par&eacute;(e) le jour J.
              </p>

              {/* Qu'est-ce que le test LINK ? */}
              <SectionTitle id="quest-ce-que-le-test">
                <Target className="w-6 h-6 text-[#EC680A]" />
                Qu&apos;est-ce que le test LINK ?
              </SectionTitle>
              <p className="text-[#334155] leading-relaxed mb-4">
                Le test d&apos;admission de LINK Campus University est un <strong>QCM &eacute;crit</strong> qui
                &eacute;value vos connaissances scientifiques dans 5 mati&egrave;res cl&eacute;s. Contrairement
                au test PE de l&apos;Universidad Europea (qui se passe en ligne), le test LINK a lieu
                <strong> en pr&eacute;sentiel &agrave; Paris</strong>.
              </p>
              <p className="text-[#334155] leading-relaxed mb-8">
                Les questions sont de <strong>niveau Terminale</strong> et enti&egrave;rement
                en <strong>fran&ccedil;ais</strong>. Le test comporte un syst&egrave;me de points
                n&eacute;gatifs : il vaut mieux ne pas r&eacute;pondre que de deviner au hasard.
              </p>

              <div className="bg-white rounded-2xl border border-gray-200/80 p-6 mb-10">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-extrabold text-[#615CA5]">80</p>
                    <p className="text-xs text-[#64748b] mt-1">questions</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-extrabold text-[#615CA5]">5</p>
                    <p className="text-xs text-[#64748b] mt-1">mati&egrave;res</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-extrabold text-[#615CA5]">~2h30</p>
                    <p className="text-xs text-[#64748b] mt-1">dur&eacute;e</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-extrabold text-[#615CA5]">FR</p>
                    <p className="text-xs text-[#64748b] mt-1">en fran&ccedil;ais</p>
                  </div>
                </div>
              </div>

              {/* Les 5 matières */}
              <SectionTitle id="matieres">
                <BookOpen className="w-6 h-6 text-[#EC680A]" />
                Les 5 mati&egrave;res du test
              </SectionTitle>
              <p className="text-[#334155] leading-relaxed mb-6">
                Le QCM couvre 5 mati&egrave;res scientifiques avec un nombre de questions variable
                selon la discipline. Voici le d&eacute;tail et nos conseils pour chaque mati&egrave;re :
              </p>

              <div className="space-y-4 mb-10">
                {matieresData.map((m, i) => (
                  <div
                    key={m.name}
                    className="bg-white rounded-2xl border border-gray-200/80 border-l-4 border-l-[#615CA5] p-5 hover:shadow-[0_20px_60px_-15px_rgba(97,92,165,0.12)] transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#615CA5]/20">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1B1D3A] text-sm">{m.name}</h3>
                        <span className="inline-flex items-center gap-1 text-xs text-[#EC680A] font-medium">
                          <FileText className="w-3 h-3" />
                          {m.questions}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-[#334155] leading-relaxed mb-2">{m.description}</p>
                    <div className="flex items-start gap-2 bg-[#615CA5]/5 rounded-lg px-3 py-2">
                      <Lightbulb className="w-4 h-4 text-[#615CA5] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#615CA5] font-medium">{m.conseil}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Format et notation */}
              <SectionTitle id="notation">
                <Calculator className="w-6 h-6 text-[#EC680A]" />
                Format et syst&egrave;me de notation
              </SectionTitle>
              <p className="text-[#334155] leading-relaxed mb-6">
                Le syst&egrave;me de notation du test LINK utilise des <strong>points n&eacute;gatifs</strong>.
                Il est donc crucial d&apos;adapter votre strat&eacute;gie en cons&eacute;quence.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-2xl border border-gray-200/80 p-5 text-center">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <p className="text-2xl font-extrabold text-green-600">+1.5</p>
                  <p className="text-xs text-[#64748b] mt-1">bonne r&eacute;ponse</p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200/80 p-5 text-center">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-3">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <p className="text-2xl font-extrabold text-red-500">&ndash;0.4</p>
                  <p className="text-xs text-[#64748b] mt-1">mauvaise r&eacute;ponse</p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200/80 p-5 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-gray-400">&mdash;</span>
                  </div>
                  <p className="text-2xl font-extrabold text-gray-400">0</p>
                  <p className="text-xs text-[#64748b] mt-1">non r&eacute;pondue</p>
                </div>
              </div>

              <Callout variant="warning">
                <strong>Strat&eacute;gie :</strong> ne r&eacute;pondez que si vous &ecirc;tes raisonnablement
                s&ucirc;r(e) de votre r&eacute;ponse. Avec un co&ucirc;t de &ndash;0.4 par erreur,
                il faut presque 4 bonnes r&eacute;ponses pour compenser 1 erreur. En cas de doute,
                mieux vaut laisser la question sans r&eacute;ponse.
              </Callout>

              {/* Informations pratiques */}
              <SectionTitle id="infos-pratiques">
                <MapPin className="w-6 h-6 text-[#EC680A]" />
                Informations pratiques
              </SectionTitle>

              <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden mb-10">
                <div className="px-5 py-4 bg-[#1B1D3A]">
                  <h3 className="font-bold text-sm" style={{ color: "#ffffff" }}>
                    Prochaine session
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                  {[
                    { icon: Clock, label: "Date", value: "15 avril 2026" },
                    { icon: MapPin, label: "Lieu", value: "Paris" },
                    { icon: Euro, label: "Frais d\u2019inscription", value: "200\u00a0\u20ac" },
                    { icon: Clock, label: "Dur\u00e9e", value: "~2h30" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 px-5 py-4">
                      <item.icon className="w-5 h-5 text-[#EC680A] shrink-0" />
                      <div>
                        <p className="text-xs text-[#64748b]">{item.label}</p>
                        <p className="font-semibold text-sm text-[#1B1D3A]">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Callout>
                <strong>Bon &agrave; savoir :</strong> les r&eacute;sultats sont communiqu&eacute;s sous
                quelques jours apr&egrave;s le test. En cas d&apos;acceptation, vous recevrez les d&eacute;tails
                pour finaliser votre inscription.
              </Callout>

              {/* Conseils pratiques */}
              <SectionTitle id="conseils">
                <Lightbulb className="w-6 h-6 text-[#EC680A]" />
                Conseils pratiques
              </SectionTitle>
              <p className="text-[#334155] leading-relaxed mb-6">
                Le test se passe <strong>en pr&eacute;sentiel &agrave; Paris</strong>. Voici nos
                recommandations pour maximiser vos chances :
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {conseilsData.map((c) => (
                  <div
                    key={c.title}
                    className="bg-white rounded-2xl border border-gray-200/80 p-5 hover:shadow-[0_15px_40px_-12px_rgba(97,92,165,0.12)] transition-shadow duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 flex items-center justify-center mb-4 shadow-md shadow-[#615CA5]/20">
                      <c.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-sm text-[#1B1D3A] mb-1.5">{c.title}</h4>
                    <p className="text-xs text-[#64748b] leading-relaxed">{c.description}</p>
                  </div>
                ))}
              </div>

              {/* Filières concernées */}
              <SectionTitle id="filieres">
                <GraduationCap className="w-6 h-6 text-[#EC680A]" />
                Fili&egrave;res concern&eacute;es
              </SectionTitle>
              <p className="text-[#334155] leading-relaxed mb-6">
                Toutes les fili&egrave;res de LINK Campus University ne n&eacute;cessitent pas le test
                d&apos;admission. Voici le r&eacute;capitulatif :
              </p>

              <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden mb-10">
                <div className="px-5 py-4 bg-[#1B1D3A]">
                  <h3 className="font-bold text-sm" style={{ color: "#ffffff" }}>
                    Fili&egrave;res soumises au test
                  </h3>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50/50">
                      <th className="text-left px-5 py-3 font-semibold text-[#1B1D3A]">Fili&egrave;re</th>
                      <th className="text-left px-5 py-3 font-semibold text-[#1B1D3A]">Test requis ?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filieresTable.map((row, i) => (
                      <tr
                        key={row.filiere}
                        className={`border-t border-gray-100 hover:bg-[#615CA5]/[0.03] transition-colors ${i % 2 === 1 ? "bg-gray-50/50" : ""}`}
                      >
                        <td className="px-5 py-3 font-medium text-[#1B1D3A]">{row.filiere}</td>
                        <td className="px-5 py-3">
                          {row.test ? (
                            <span className="inline-flex items-center gap-1 bg-[#615CA5]/10 text-[#615CA5] text-xs font-bold px-2.5 py-1 rounded-full">
                              <CheckCircle className="w-3.5 h-3.5" />
                              OUI
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5">
                              <span className="inline-flex items-center gap-1 bg-gray-100 text-[#94a3b8] text-xs font-bold px-2.5 py-1 rounded-full">
                                <XCircle className="w-3.5 h-3.5" />
                                NON
                              </span>
                              {row.note && (
                                <span className="text-[10px] text-[#EC680A] font-bold uppercase">({row.note})</span>
                              )}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Lien retour LINK */}
              <div className="bg-gradient-to-r from-[#615CA5] to-[#1B1D3A] rounded-2xl p-6 md:p-8 mb-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                      LINK Campus University
                    </p>
                    <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: "#ffffff" }}>
                      D&eacute;couvrir toutes les formations de LINK Campus University
                    </h3>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                      Tarifs, campus, fili&egrave;res et d&eacute;tails d&apos;admission.
                    </p>
                  </div>
                  <Link
                    href="/universites/link-campus"
                    className="inline-flex items-center gap-2 bg-[#EC680A] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#D45E09] transition-colors shrink-0"
                  >
                    Voir la page LINK
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#1B1D3A] rounded-2xl p-8 md:p-10 text-center">
                <BookOpen className="w-8 h-8 text-[#EC680A] mx-auto mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Pr&ecirc;t &agrave; passer le test LINK ?
                </h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  D&eacute;posez votre candidature gratuitement et un conseiller Edumove vous accompagnera
                  dans la pr&eacute;paration du test.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="https://candidature.edumove.fr"
                    className="inline-flex items-center gap-2 bg-[#EC680A] text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-[#D45E09] transition-colors"
                  >
                    D&eacute;poser ma candidature
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <ContactButton className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors border border-white/20">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      &Ecirc;tre recontact&eacute;
                    </span>
                  </ContactButton>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <SommaireSidebar />
          </div>
        </div>
      </section>
    </div>
  );
}
