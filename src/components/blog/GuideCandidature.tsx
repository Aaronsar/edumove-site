"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Target,
  Clock,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Lightbulb,
  ArrowRight,
  Phone,
  BookOpen,
  FileText,
  Users,
  GraduationCap,
  Heart,
  MapPin,
  Euro,
  ClipboardList,
  Shield,
  Sparkles,
  Home,
  CreditCard,
  Plane,
} from "lucide-react";
import ContactButton from "@/components/shared/ContactButton";
import StickyBar from "@/components/program/StickyBar";

/* ---------- DATA ---------- */
const sommaire = [
  { id: "pourquoi-europe", label: "Pourquoi candidater en Europe ?" },
  { id: "eligibilite", label: "Les conditions d'éligibilité" },
  { id: "etapes-candidature", label: "Les étapes de la candidature" },
  { id: "dossier-solide", label: "Constituer un dossier solide" },
  { id: "accompagnement-gratuit", label: "Accompagnement Edumove : 100 % gratuit" },
  { id: "test-admission", label: "Préparer son test d'admission" },
  { id: "apres-admission", label: "Après l'admission" },
];

const avantagesEurope = [
  {
    icon: Target,
    title: "Admission sur dossier",
    description: "Pas de numerus clausus ni de concours à la française. L'admission se fait sur dossier et/ou test d'entrée.",
  },
  {
    icon: GraduationCap,
    title: "Diplôme reconnu dans l'UE",
    description: "Grâce à la directive européenne 2005/36/CE, votre diplôme est automatiquement reconnu en France.",
  },
  {
    icon: Heart,
    title: "Places garanties",
    description: "Si vous remplissez les critères, votre place est assurée. Pas de loterie, pas d'attente interminable.",
  },
  {
    icon: Euro,
    title: "Financement possible à 100 %",
    description: "Grâce au prêt étudiant garanti par l'État, vous pouvez financer vos études sans avancer un centime.",
  },
];

const etapes = [
  {
    numero: 1,
    titre: "Prise de contact avec Edumove",
    description: "Vous nous contactez via le formulaire de candidature ou par téléphone. Un conseiller dédié vous est attribué sous 2h.",
    gratuit: true,
  },
  {
    numero: 2,
    titre: "Analyse de votre profil",
    description: "Votre conseiller étudie votre parcours (bulletins, bac, motivations) et vous oriente vers les formations les plus adaptées.",
    gratuit: true,
  },
  {
    numero: 3,
    titre: "Choix de la formation et de l'université",
    description: "Ensemble, vous définissez la filière (médecine, dentaire, kiné…) et l'université partenaire qui correspond à votre projet.",
    gratuit: true,
  },
  {
    numero: 4,
    titre: "Constitution du dossier",
    description: "Votre conseiller vous aide à rassembler et préparer tous les documents nécessaires. Il relit votre lettre de motivation.",
    gratuit: true,
  },
  {
    numero: 5,
    titre: "Inscription et test d'admission",
    description: "Edumove s'occupe de l'inscription administrative. Si un test d'entrée est requis, on vous y prépare.",
    gratuit: true,
  },
  {
    numero: 6,
    titre: "Confirmation d'admission",
    description: "Vous recevez votre lettre d'admission. Edumove vous accompagne ensuite pour le logement, le financement et le départ.",
    gratuit: true,
  },
];

const documentsRequis = [
  { nom: "Bulletins de notes", detail: "De la Première et de la Terminale (ou de l'année en cours)" },
  { nom: "Diplôme du baccalauréat", detail: "Ou attestation de réussite si pas encore obtenu" },
  { nom: "Pièce d'identité", detail: "Carte d'identité ou passeport en cours de validité" },
  { nom: "Lettre de motivation", detail: "Personnalisée pour la formation visée" },
  { nom: "CV", detail: "Parcours scolaire, expériences, activités extrascolaires" },
  { nom: "Photo d'identité", detail: "Format standard, fond blanc" },
];

const inclus = [
  { icon: Users, label: "Conseiller personnel dédié" },
  { icon: ClipboardList, label: "Aide à la constitution du dossier" },
  { icon: FileText, label: "Relecture lettre de motivation" },
  { icon: BookOpen, label: "Préparation aux tests d'admission" },
  { icon: Shield, label: "Suivi administratif complet" },
  { icon: Home, label: "Aide à la recherche de logement" },
  { icon: CreditCard, label: "Accompagnement financement" },
  { icon: Plane, label: "Aide à l'organisation du départ" },
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
export default function GuideCandidature() {
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
            <Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span style={{ color: "rgba(255,255,255,0.7)" }}>Présenter sa candidature</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block bg-[#EC680A] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              Guide complet
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border" style={{ color: "rgba(255,255,255,0.6)", borderColor: "rgba(255,255,255,0.15)" }}>
              <Clock className="w-3.5 h-3.5" />
              8 min de lecture
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] mb-6" style={{ color: "#ffffff" }}>
            Comment pr&eacute;senter
            <br />
            <span style={{ color: "#EC680A" }}>sa candidature ?</span>
          </h1>

          <p className="text-lg max-w-2xl mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            De la prise de contact jusqu&apos;à la confirmation d&apos;admission : toutes les étapes pour candidater
            en études de santé en Europe. <strong style={{ color: "rgba(255,255,255,0.85)" }}>L&apos;accompagnement Edumove est 100&nbsp;% gratuit.</strong>
          </p>

          <div className="flex flex-wrap gap-4">
            {[
              { icon: FileText, label: "Dossier" },
              { icon: ClipboardList, label: "Étapes" },
              { icon: Sparkles, label: "100 % gratuit" },
              { icon: GraduationCap, label: "Admission" },
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
                Vous envisagez des études de santé en Europe mais vous ne savez pas par où commencer ? Ce guide vous accompagne <strong>étape par étape</strong>, de la prise de contact jusqu&apos;à votre départ. Et bonne nouvelle : <strong>l&apos;accompagnement Edumove est entièrement gratuit</strong>. Vous ne payez rien, jamais.
              </p>
              <p className="text-[#334155] leading-relaxed mb-6">
                Que vous visiez la <Link href="/formations/medecine" className="text-[#615CA5] font-medium hover:text-[#EC680A] underline underline-offset-2 transition-colors">médecine</Link>, le <Link href="/formations/dentaire" className="text-[#615CA5] font-medium hover:text-[#EC680A] underline underline-offset-2 transition-colors">dentaire</Link>, la <Link href="/formations/kinesitherapie" className="text-[#615CA5] font-medium hover:text-[#EC680A] underline underline-offset-2 transition-colors">kinésithérapie</Link>, la <Link href="/formations/pharmacie" className="text-[#615CA5] font-medium hover:text-[#EC680A] underline underline-offset-2 transition-colors">pharmacie</Link> ou le <Link href="/formations/veterinaire" className="text-[#615CA5] font-medium hover:text-[#EC680A] underline underline-offset-2 transition-colors">vétérinaire</Link>, le processus est le même.
              </p>

              <Callout variant="warning">
                <strong>Important :</strong> l&apos;accompagnement Edumove est <strong>100&nbsp;% gratuit</strong> pour les étudiants et leurs familles. Nous sommes rémunérés par les universités partenaires, pas par vous. Vous n&apos;aurez <strong>jamais rien à payer</strong> pour nos services.
              </Callout>

              {/* Section 1 — Pourquoi candidater en Europe ? */}
              <SectionTitle id="pourquoi-europe">
                <Target className="w-6 h-6 text-[#EC680A]" />
                Pourquoi candidater en Europe ?
              </SectionTitle>
              <p className="text-[#334155] leading-relaxed mb-4">
                En France, les études de santé passent par le PASS ou la LAS — des parcours ultra-sélectifs avec un taux d&apos;échec qui dépasse les <strong>80&nbsp;%</strong>. Beaucoup d&apos;étudiants passent deux, voire trois ans en première année, sans garantie de succès.
              </p>
              <p className="text-[#334155] leading-relaxed mb-6">
                En Europe, le modèle est différent. L&apos;admission se fait <strong>sur dossier et/ou test d&apos;entrée</strong>, sans numerus clausus. Et le diplôme obtenu est <strong>reconnu en France et dans toute l&apos;Union européenne</strong> grâce à la directive 2005/36/CE.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {avantagesEurope.map((a) => (
                  <div
                    key={a.title}
                    className="bg-white rounded-2xl border border-gray-200/80 p-5 hover:shadow-[0_15px_40px_-12px_rgba(97,92,165,0.12)] transition-shadow duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 flex items-center justify-center mb-4 shadow-md shadow-[#615CA5]/20">
                      <a.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-sm text-[#1B1D3A] mb-1.5">{a.title}</h4>
                    <p className="text-xs text-[#64748b] leading-relaxed">{a.description}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#334155] leading-relaxed mb-4">
                Pour en savoir plus sur la reconnaissance des diplômes, consultez notre article dédié : <Link href="/blog/reconnaissance-diplomes-europeens" className="text-[#615CA5] font-medium hover:text-[#EC680A] underline underline-offset-2 transition-colors">Reconnaissance des diplômes européens en France</Link>.
              </p>

              {/* Section 2 — Conditions d'éligibilité */}
              <SectionTitle id="eligibilite">
                <CheckCircle className="w-6 h-6 text-[#EC680A]" />
                Les conditions d&apos;éligibilité
              </SectionTitle>
              <p className="text-[#334155] leading-relaxed mb-4">
                Les conditions varient selon les universités, mais voici les critères généraux :
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { label: "Baccalauréat obtenu (ou en cours d'obtention)", detail: "Toutes les filières du bac sont acceptées dans la plupart des universités partenaires. Un bac scientifique est un atout, mais n'est pas toujours obligatoire." },
                  { label: "Aucune moyenne minimale imposée", detail: "Contrairement à ce qu'on peut lire, certaines universités n'imposent aucune moyenne minimale. Votre dossier est évalué dans sa globalité." },
                  { label: "Niveau de langue", detail: "Pour les formations en espagnol, un niveau de base suffit au départ — vous progresserez rapidement sur place. Pour les formations en anglais, un niveau B1-B2 est recommandé." },
                  { label: "Motivation et projet professionnel", detail: "C'est le critère le plus important. Les universités veulent des étudiants motivés, avec un projet clair et cohérent." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#fafbff] border border-gray-200/80 rounded-xl px-4 py-3">
                    <CheckCircle className="w-5 h-5 text-[#615CA5] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-[#1B1D3A]">{item.label}</p>
                      <p className="text-xs text-[#64748b] mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Callout>
                <strong>Pas sûr(e) d&apos;être éligible ?</strong> Contactez-nous gratuitement — votre conseiller Edumove analysera votre profil et vous dira exactement quelles formations sont accessibles pour vous.
              </Callout>

              {/* Section 3 — Les étapes de la candidature */}
              <SectionTitle id="etapes-candidature">
                <ClipboardList className="w-6 h-6 text-[#EC680A]" />
                Les étapes de la candidature
              </SectionTitle>
              <p className="text-[#334155] leading-relaxed mb-6">
                Le processus de candidature est simple et entièrement accompagné par Edumove. Voici les <strong>6 étapes</strong> clés :
              </p>

              <div className="space-y-4 mb-10">
                {etapes.map((e) => (
                  <div
                    key={e.numero}
                    className="flex items-start gap-4 bg-white rounded-2xl border border-gray-200/80 p-5 hover:shadow-[0_15px_40px_-12px_rgba(97,92,165,0.12)] transition-shadow duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#615CA5]/20 shrink-0">
                      {e.numero}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-sm text-[#1B1D3A]">{e.titre}</h4>
                        {e.gratuit && (
                          <span className="text-[10px] font-bold uppercase text-[#EC680A] bg-[#EC680A]/10 px-2 py-0.5 rounded-full">
                            Gratuit
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#64748b] leading-relaxed">{e.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Callout variant="warning">
                <strong>Rappel :</strong> chaque étape est <strong>accompagnée gratuitement par Edumove</strong>. Vous n&apos;êtes jamais seul(e) dans le processus. Votre conseiller est disponible par téléphone, WhatsApp et email.
              </Callout>

              {/* Section 4 — Constituer un dossier solide */}
              <SectionTitle id="dossier-solide">
                <FileText className="w-6 h-6 text-[#EC680A]" />
                Constituer un dossier solide
              </SectionTitle>
              <p className="text-[#334155] leading-relaxed mb-6">
                Votre dossier de candidature est la première impression que l&apos;université aura de vous. Voici les documents à préparer :
              </p>

              <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden mb-6">
                <div className="px-5 py-4 bg-[#1B1D3A]">
                  <h3 className="font-bold text-sm" style={{ color: "#ffffff" }}>
                    Documents requis
                  </h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {documentsRequis.map((doc, i) => (
                    <div key={i} className={`flex items-start gap-3 px-5 py-3.5 ${i % 2 === 1 ? "bg-gray-50/50" : ""}`}>
                      <CheckCircle className="w-4 h-4 text-[#615CA5] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-[#1B1D3A]">{doc.nom}</p>
                        <p className="text-xs text-[#64748b]">{doc.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[#334155] leading-relaxed mb-4">
                <strong>Conseils pour vous démarquer :</strong>
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Personnalisez votre lettre de motivation pour chaque université — montrez que vous connaissez la formation.",
                  "Mettez en avant vos expériences extra-scolaires (bénévolat, stages, sport…) : elles témoignent de votre engagement.",
                  "Soignez la présentation : un dossier clair et bien organisé fait toujours bonne impression.",
                  "Votre conseiller Edumove relit et corrige votre dossier avant envoi — profitez-en, c'est gratuit.",
                ].map((conseil, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#334155]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EC680A] shrink-0 mt-2" />
                    {conseil}
                  </li>
                ))}
              </ul>

              {/* Section 5 — Accompagnement gratuit */}
              <SectionTitle id="accompagnement-gratuit">
                <Sparkles className="w-6 h-6 text-[#EC680A]" />
                L&apos;accompagnement Edumove&nbsp;: 100&nbsp;% gratuit
              </SectionTitle>

              <div className="bg-gradient-to-br from-[#EC680A]/5 to-[#615CA5]/5 border-2 border-[#EC680A]/20 rounded-2xl p-6 md:p-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EC680A] flex items-center justify-center">
                    <Euro className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-[#1B1D3A]">0&nbsp;€</p>
                    <p className="text-sm text-[#64748b]">pour l&apos;étudiant, toujours</p>
                  </div>
                </div>
                <p className="text-[#334155] leading-relaxed mb-4">
                  <strong>Edumove ne vous facture rien.</strong> Ni frais de dossier, ni frais d&apos;accompagnement, ni commission cachée. Notre modèle économique est simple : nous sommes rémunérés directement par les universités partenaires pour chaque étudiant que nous orientons. C&apos;est l&apos;université qui nous paie, <strong>pas vous</strong>.
                </p>
                <p className="text-[#334155] leading-relaxed">
                  Concrètement, cela signifie que vous bénéficiez d&apos;un accompagnement complet — du premier contact jusqu&apos;à votre installation sur place — <strong>sans jamais sortir votre carte bancaire</strong>. C&apos;est notre engagement depuis le premier jour.
                </p>
              </div>

              <Callout variant="warning">
                <strong>Vous ne payez rien, jamais.</strong> L&apos;accompagnement Edumove est et restera toujours gratuit pour les étudiants. Si quelqu&apos;un vous demande de payer pour un service d&apos;orientation vers des études en Europe, ce n&apos;est pas Edumove.
              </Callout>

              <p className="text-[#334155] leading-relaxed mt-6 mb-4">
                Voici tout ce qui est <strong>inclus gratuitement</strong> dans l&apos;accompagnement Edumove :
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {inclus.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 bg-[#fafbff] border border-gray-200/80 rounded-xl px-4 py-3">
                    <div className="w-8 h-8 rounded-lg bg-[#615CA5]/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-[#615CA5]" />
                    </div>
                    <p className="text-sm font-medium text-[#1B1D3A]">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Section 6 — Préparer son test d'admission */}
              <SectionTitle id="test-admission">
                <BookOpen className="w-6 h-6 text-[#EC680A]" />
                Préparer son test d&apos;admission
              </SectionTitle>
              <p className="text-[#334155] leading-relaxed mb-4">
                Selon l&apos;université et la filière choisies, un test d&apos;admission peut être requis. Votre conseiller Edumove vous y prépare <strong>gratuitement</strong>.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <Link
                  href="/guides/reussir-test-pe-universidad-europea"
                  className="group bg-white rounded-2xl border border-gray-200/80 p-5 hover:shadow-lg hover:border-[#EC680A]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#615CA5] px-2.5 py-1 rounded-full">Guide</span>
                  </div>
                  <h4 className="font-bold text-sm text-[#1B1D3A] group-hover:text-[#EC680A] transition-colors mb-1">
                    Réussir le test PE — Universidad Europea
                  </h4>
                  <p className="text-xs text-[#64748b]">
                    4 épreuves détaillées, plateforme Langoo, Talent Test et conseils pratiques.
                  </p>
                </Link>
                <Link
                  href="/guides/reussir-test-admission-link-campus"
                  className="group bg-white rounded-2xl border border-gray-200/80 p-5 hover:shadow-lg hover:border-[#EC680A]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#615CA5] px-2.5 py-1 rounded-full">Guide</span>
                  </div>
                  <h4 className="font-bold text-sm text-[#1B1D3A] group-hover:text-[#EC680A] transition-colors mb-1">
                    Réussir le test d&apos;admission — LINK Campus
                  </h4>
                  <p className="text-xs text-[#64748b]">
                    QCM scientifique, 5 matières, système de notation et astuces.
                  </p>
                </Link>
              </div>

              <Callout>
                <strong>Conseil :</strong> commencez à préparer votre test dès que votre dossier est déposé. Edumove vous fournit des ressources et un planning de révision adapté à votre profil — <strong>toujours gratuitement</strong>.
              </Callout>

              {/* Section 7 — Après l'admission */}
              <SectionTitle id="apres-admission">
                <Plane className="w-6 h-6 text-[#EC680A]" />
                Après l&apos;admission : les prochaines étapes
              </SectionTitle>
              <p className="text-[#334155] leading-relaxed mb-4">
                Félicitations, vous êtes admis(e) ! Mais le chemin ne s&apos;arrête pas là. Edumove continue de vous accompagner <strong>gratuitement</strong> pour préparer votre départ :
              </p>

              <div className="space-y-3 mb-6">
                {[
                  {
                    icon: Home,
                    title: "Logement",
                    description: "Votre conseiller vous aide à trouver un logement à proximité du campus : résidence étudiante, colocation ou appartement.",
                  },
                  {
                    icon: CreditCard,
                    title: "Financement",
                    description: "Grâce au prêt étudiant garanti par l'État (jusqu'à 75 000 € avec LCL), vous pouvez financer la totalité de vos études sans avancer un centime.",
                  },
                  {
                    icon: FileText,
                    title: "Inscription administrative",
                    description: "Edumove s'occupe des formalités : inscription définitive, pièces justificatives, assurance, carte étudiante européenne.",
                  },
                  {
                    icon: Plane,
                    title: "Départ et installation",
                    description: "Conseils pratiques pour votre arrivée : transports, vie quotidienne, groupes d'étudiants francophones, événements d'intégration.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-2xl border border-gray-200/80 p-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 flex items-center justify-center shadow-md shadow-[#615CA5]/20 shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#1B1D3A] mb-1">{item.title}</h4>
                      <p className="text-xs text-[#64748b] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[#334155] leading-relaxed mb-4">
                Pour tout savoir sur le financement, consultez notre article : <Link href="/blog/financer-etudes-sante-europe" className="text-[#615CA5] font-medium hover:text-[#EC680A] underline underline-offset-2 transition-colors">Comment financer ses études de santé en Europe avec un prêt étudiant ?</Link>
              </p>

              {/* Bandeau universités */}
              <div className="bg-gradient-to-r from-[#615CA5] to-[#1B1D3A] rounded-2xl p-6 md:p-8 mb-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                      Nos universités partenaires
                    </p>
                    <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: "#ffffff" }}>
                      Découvrez les universités où candidater
                    </h3>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                      <Link href="/universites/universidad-europea" className="underline underline-offset-2 hover:text-white transition-colors">Universidad Europea</Link>
                      {" · "}
                      <Link href="/universites/ucjc" className="underline underline-offset-2 hover:text-white transition-colors">UCJC Madrid</Link>
                      {" · "}
                      <Link href="/universites/link-campus" className="underline underline-offset-2 hover:text-white transition-colors">LINK Campus University</Link>
                    </p>
                  </div>
                  <Link
                    href="https://candidature.edumove.fr"
                    className="inline-flex items-center gap-2 bg-[#EC680A] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#D45E09] transition-colors shrink-0"
                  >
                    Candidater
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#1B1D3A] rounded-2xl p-8 md:p-10 text-center">
                <Sparkles className="w-8 h-8 text-[#EC680A] mx-auto mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Prêt(e) à candidater ?
                </h3>
                <p className="text-white/60 text-sm mb-2 max-w-md mx-auto">
                  Déposez votre candidature et un conseiller Edumove vous rappelle sous 2h pour lancer votre projet.
                </p>
                <p className="text-[#EC680A] text-sm font-bold mb-6">
                  C&apos;est 100&nbsp;% gratuit.
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

            {/* Sidebar */}
            <SommaireSidebar />
          </div>
        </div>
      </section>

      <StickyBar />
    </div>
  );
}
