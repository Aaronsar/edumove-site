"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Globe,
  Brain,
  MessageCircle,
  Target,
  Clock,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  XCircle,
  Lightbulb,
  Monitor,
  Volume2,
  Wifi,
  MapPin,
  ArrowRight,
  Phone,
  BookOpen,
  PenLine,
  AlertTriangle,
  GraduationCap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ContactButton from "@/components/shared/ContactButton";

/* ---------- DATA ---------- */
const sommaire = [
  { id: "quest-ce-que-le-pe", label: "Qu'est-ce que le test PE ?" },
  { id: "test-langue", label: "Test de langue (Langoo)" },
  { id: "talent-test", label: "Test de comp\u00e9tences (Talent Test)" },
  { id: "lettre-motivation", label: "Lettre de motivation" },
  { id: "entretien", label: "Entretien avec le directeur" },
  { id: "conseils", label: "Conseils pratiques" },
  { id: "filieres", label: "Fili\u00e8res concern\u00e9es" },
];

const epreuves: { name: string; description: string; icon: LucideIcon; duree: string }[] = [
  {
    name: "Test de langue (Langoo)",
    description: "\u00c9valuation du niveau de langue via la plateforme Langoo.",
    icon: Globe,
    duree: "~50 min",
  },
  {
    name: "Test de comp\u00e9tences (Talent Test)",
    description: "79 questions psychom\u00e9triques sur les aptitudes cognitives.",
    icon: Brain,
    duree: "~20 min",
  },
  {
    name: "Lettre de motivation",
    description: "4 questions ouvertes sur votre parcours et vos motivations.",
    icon: PenLine,
    duree: "Pas de limite",
  },
  {
    name: "Entretien directeur",
    description: "Entretien en visio avec le directeur de la formation (Master uniquement).",
    icon: MessageCircle,
    duree: "~15 min",
  },
];

const langooSections = [
  { name: "Reading", description: "Compr\u00e9hension de textes courts" },
  { name: "Grammar", description: "Structures grammaticales" },
  { name: "Vocabulary", description: "Choix lexicaux en contexte" },
  { name: "Listening", description: "\u00c9coute et compr\u00e9hension orale" },
];

const lettreQuestions = [
  "Pourquoi avez-vous choisi cette fili\u00e8re ?",
  "Pourquoi l'Universidad Europea ?",
  "Quelles sont vos qualit\u00e9s pour r\u00e9ussir ?",
  "Quel est votre projet professionnel ?",
];

const conseilsData: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Monitor,
    title: "PC Windows uniquement",
    description: "La plateforme ne fonctionne pas correctement sur Mac ni sur tablette. Utilisez un ordinateur Windows.",
  },
  {
    icon: MapPin,
    title: "Endroit calme",
    description: "Installez-vous dans un lieu sans bruit ni distraction, seul(e) dans la pi\u00e8ce.",
  },
  {
    icon: Volume2,
    title: "Casque audio branch\u00e9",
    description: "Un casque filaire est recommand\u00e9 pour la partie Listening du test de langue.",
  },
  {
    icon: Monitor,
    title: "Un seul onglet ouvert",
    description: "Fermez tous les autres onglets et applications. Le test d\u00e9tecte les changements de fen\u00eatre.",
  },
  {
    icon: Wifi,
    title: "Connexion stable",
    description: "Privil\u00e9giez une connexion filaire ou un WiFi fiable. Une coupure peut invalider le test.",
  },
  {
    icon: AlertTriangle,
    title: "Ne fermez jamais l'onglet",
    description: "Si vous fermez l'onglet du test par erreur, vous ne pourrez pas le reprendre.",
  },
];

const peTable = [
  { filiere: "M\u00e9decine", pe: true },
  { filiere: "Dentaire", pe: true },
  { filiere: "V\u00e9t\u00e9rinaire", pe: true },
  { filiere: "Kin\u00e9 FR Madrid", pe: true, note: "exception" },
  { filiere: "Kin\u00e9 (autres campus)", pe: false },
  { filiere: "Pharmacie", pe: false },
  { filiere: "Pr\u00e9pa Dentaire", pe: false },
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
export default function GuideTestPE() {
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
            <Link href="/universites/universidad-europea" className="hover:text-white/70 transition-colors">Universidad Europea</Link>
            <span className="mx-2">/</span>
            <span style={{ color: "rgba(255,255,255,0.7)" }}>Guide Test PE</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block bg-[#EC680A] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              Guide complet
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border" style={{ color: "rgba(255,255,255,0.6)", borderColor: "rgba(255,255,255,0.15)" }}>
              <Clock className="w-3.5 h-3.5" />
              12 min de lecture
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] mb-6" style={{ color: "#ffffff" }}>
            R&eacute;ussir le test d&apos;entr&eacute;e PE
            <br />
            <span style={{ color: "#EC680A" }}>de l&apos;Universidad Europea</span>
          </h1>

          <p className="text-lg max-w-2xl mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Tout savoir sur la Prueba Espec&iacute;fica : les 4 &eacute;preuves d&eacute;taill&eacute;es,
            la plateforme Langoo, le Talent Test, la lettre de motivation et nos conseils pour maximiser vos chances d&apos;admission.
          </p>

          <div className="flex flex-wrap gap-4">
            {[
              { icon: Globe, label: "Test de langue" },
              { icon: Brain, label: "Talent Test" },
              { icon: PenLine, label: "Lettre de motivation" },
              { icon: MessageCircle, label: "Entretien" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-sm px-3.5 py-2 rounded-lg"
                style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.7)" }}
              >
                <item.icon className="w-4 h-4" style={{ color: "#EC680A" }} />
                {item.label}
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
                Le <strong>test PE (Prueba Espec&iacute;fica)</strong> est l&apos;&eacute;tape d&apos;admission obligatoire pour
                int&eacute;grer les fili&egrave;res sant&eacute; de l&apos;Universidad Europea soumises &agrave; un
                concours d&apos;entr&eacute;e. Il se compose de <strong>4 &eacute;preuves</strong> pass&eacute;es en ligne
                sur la plateforme de l&apos;universit&eacute;.
              </p>
              <p className="text-[#334155] leading-relaxed mb-6">
                Ce guide d&eacute;taille chaque &eacute;preuve et vous donne les <strong>conseils pratiques</strong> pour
                arriver serein(e) le jour J.
              </p>

              {/* Qu'est-ce que le test PE ? */}
              <SectionTitle id="quest-ce-que-le-pe">
                <Target className="w-6 h-6 text-[#EC680A]" />
                Qu&apos;est-ce que le test PE ?
              </SectionTitle>
              <p className="text-[#334155] leading-relaxed mb-8">
                La Prueba Espec&iacute;fica (PE) est le test d&apos;entr&eacute;e propre &agrave; l&apos;Universidad Europea.
                Il &eacute;value votre niveau de langue, vos aptitudes cognitives et votre motivation.
                Les r&eacute;sultats sont communiqu&eacute;s <strong>sous 48h</strong> et, en cas d&apos;acceptation,
                vous disposez de <strong>2 jours pour verser l&apos;acompte de 2 500 &euro;</strong>.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {epreuves.map((e, i) => (
                  <div
                    key={e.name}
                    className="bg-white rounded-2xl border border-gray-200/80 border-l-4 border-l-[#615CA5] p-5 hover:shadow-[0_20px_60px_-15px_rgba(97,92,165,0.12)] transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#615CA5]/20">
                        {i + 1}
                      </div>
                      <e.icon className="w-5 h-5 text-[#615CA5]" />
                    </div>
                    <h3 className="font-bold text-[#1B1D3A] text-sm mb-1">{e.name}</h3>
                    <p className="text-xs text-[#64748b] mb-2">{e.description}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-[#EC680A] font-medium">
                      <Clock className="w-3 h-3" />
                      {e.duree}
                    </span>
                  </div>
                ))}
              </div>

              {/* Test de langue */}
              <SectionTitle id="test-langue">
                <Globe className="w-6 h-6 text-[#EC680A]" />
                Test de langue (Langoo)
              </SectionTitle>
              <p className="text-[#334155] leading-relaxed mb-4">
                Le test de langue est r&eacute;alis&eacute; sur la <strong>plateforme Langoo</strong>, int&eacute;gr&eacute;e
                au portail d&apos;admission de l&apos;universit&eacute;. Il dure environ <strong>50 minutes</strong> et
                &eacute;value votre niveau dans la langue de la formation (espagnol ou anglais selon la fili&egrave;re).
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {langooSections.map((s) => (
                  <div key={s.name} className="bg-[#fafbff] border border-gray-200/80 rounded-xl px-4 py-3">
                    <p className="font-semibold text-sm text-[#1B1D3A]">{s.name}</p>
                    <p className="text-xs text-[#64748b]">{s.description}</p>
                  </div>
                ))}
              </div>

              <Callout>
                <strong>Conseil :</strong> entra&icirc;nez-vous avant le test sur des ressources en ligne
                (exercices de grammaire, &eacute;coute de podcasts dans la langue cible). Le niveau attendu
                est B1-B2 selon la fili&egrave;re.
              </Callout>

              {/* Talent Test */}
              <SectionTitle id="talent-test">
                <Brain className="w-6 h-6 text-[#EC680A]" />
                Test de comp&eacute;tences (Talent Test)
              </SectionTitle>
              <p className="text-[#334155] leading-relaxed mb-4">
                Le Talent Test comprend <strong>79 questions psychom&eacute;triques</strong> &agrave; compl&eacute;ter en
                environ <strong>20 minutes</strong>. Il &eacute;value vos aptitudes cognitives, votre logique et
                votre profil comportemental.
              </p>

              <Callout variant="warning">
                <strong>Important :</strong> il n&apos;y a <strong>pas de bonne ni de mauvaise r&eacute;ponse</strong>.
                R&eacute;pondez spontan&eacute;ment et honn&ecirc;tement. L&apos;universit&eacute; cherche &agrave; cerner
                votre profil, pas &agrave; vous pi&eacute;ger.
              </Callout>

              {/* Lettre de motivation */}
              <SectionTitle id="lettre-motivation">
                <PenLine className="w-6 h-6 text-[#EC680A]" />
                Lettre de motivation
              </SectionTitle>
              <p className="text-[#334155] leading-relaxed mb-4">
                Vous devrez r&eacute;pondre &agrave; <strong>4 questions ouvertes</strong> directement sur la plateforme.
                Il n&apos;y a pas de limite de temps pour cette &eacute;preuve. Prenez le temps de structurer
                vos r&eacute;ponses.
              </p>

              <div className="space-y-3 mb-6">
                {lettreQuestions.map((q, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#fafbff] border border-gray-200/80 rounded-xl px-4 py-3">
                    <span className="w-6 h-6 rounded-full bg-[#615CA5] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-[#334155]">{q}</p>
                  </div>
                ))}
              </div>

              <Callout>
                <strong>Conseil :</strong> pr&eacute;parez vos r&eacute;ponses &agrave; l&apos;avance dans un document
                &agrave; part, puis copiez-collez le jour J. Montrez que vous connaissez l&apos;universit&eacute; et
                que vous avez un vrai projet.
              </Callout>

              {/* Entretien */}
              <SectionTitle id="entretien">
                <MessageCircle className="w-6 h-6 text-[#EC680A]" />
                Entretien avec le directeur
              </SectionTitle>
              <p className="text-[#334155] leading-relaxed mb-4">
                L&apos;entretien avec le directeur de la formation concerne <strong>uniquement les candidats en Master</strong>.
                Il se d&eacute;roule en visio et dure environ 15 minutes. Attendez-vous &agrave; des questions sur
                votre parcours, vos motivations et votre projet professionnel.
              </p>

              <Callout>
                <strong>Conseil :</strong> pr&eacute;parez une pr&eacute;sentation de 2 minutes de votre parcours
                et ayez des questions &agrave; poser au directeur sur la formation.
              </Callout>

              {/* Conseils pratiques */}
              <SectionTitle id="conseils">
                <Lightbulb className="w-6 h-6 text-[#EC680A]" />
                Conseils pratiques
              </SectionTitle>
              <p className="text-[#334155] leading-relaxed mb-6">
                Le test PE se passe <strong>en ligne</strong>. Pour &eacute;viter tout probl&egrave;me technique,
                suivez ces recommandations :
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
                Fili&egrave;res concern&eacute;es par le PE
              </SectionTitle>
              <p className="text-[#334155] leading-relaxed mb-6">
                Toutes les fili&egrave;res de l&apos;Universidad Europea ne n&eacute;cessitent pas le test PE.
                Voici le r&eacute;capitulatif :
              </p>

              <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden mb-10">
                <div className="px-5 py-4 bg-[#1B1D3A]">
                  <h3 className="font-bold text-sm" style={{ color: "#ffffff" }}>
                    Fili&egrave;res soumises au PE
                  </h3>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50/50">
                      <th className="text-left px-5 py-3 font-semibold text-[#1B1D3A]">Fili&egrave;re</th>
                      <th className="text-left px-5 py-3 font-semibold text-[#1B1D3A]">PE requis ?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {peTable.map((row, i) => (
                      <tr
                        key={row.filiere}
                        className={`border-t border-gray-100 hover:bg-[#615CA5]/[0.03] transition-colors ${i % 2 === 1 ? "bg-gray-50/50" : ""}`}
                      >
                        <td className="px-5 py-3 font-medium text-[#1B1D3A]">{row.filiere}</td>
                        <td className="px-5 py-3">
                          {row.pe ? (
                            <span className="inline-flex items-center gap-1.5">
                              <span className="inline-flex items-center gap-1 bg-[#615CA5]/10 text-[#615CA5] text-xs font-bold px-2.5 py-1 rounded-full">
                                <CheckCircle className="w-3.5 h-3.5" />
                                OUI
                              </span>
                              {row.note && (
                                <span className="text-[10px] text-[#EC680A] font-bold uppercase">({row.note})</span>
                              )}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 bg-gray-100 text-[#94a3b8] text-xs font-bold px-2.5 py-1 rounded-full">
                              <XCircle className="w-3.5 h-3.5" />
                              NON
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Lien retour UE */}
              <div className="bg-gradient-to-r from-[#615CA5] to-[#1B1D3A] rounded-2xl p-6 md:p-8 mb-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                      Universidad Europea
                    </p>
                    <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: "#ffffff" }}>
                      D&eacute;couvrir toutes les formations de l&apos;Universidad Europea
                    </h3>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                      Tarifs, campus, sessions d&apos;admission et fili&egrave;res disponibles.
                    </p>
                  </div>
                  <Link
                    href="/universites/universidad-europea"
                    className="inline-flex items-center gap-2 bg-[#EC680A] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#D45E09] transition-colors shrink-0"
                  >
                    Voir la page UE
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#1B1D3A] rounded-2xl p-8 md:p-10 text-center">
                <BookOpen className="w-8 h-8 text-[#EC680A] mx-auto mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#ffffff" }}>
                  Le test PE vous attend&nbsp;?
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
