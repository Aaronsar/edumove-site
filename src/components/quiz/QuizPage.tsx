"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  MapPin,
  GraduationCap,
  Sun,
  Languages,
  Users,
  Heart,
  Sparkles,
} from "lucide-react";
import ContactButton from "@/components/shared/ContactButton";
import StickyBar from "@/components/program/StickyBar";

/* ═══════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════ */
type UniKey = "ue-madrid" | "ue-valence" | "ue-malaga" | "ucjc" | "link-rome";

interface Answer {
  label: string;
  scores: Partial<Record<UniKey, number>>;
}

interface Question {
  id: string;
  question: string;
  subtitle: string;
  icon: React.ElementType;
  answers: Answer[];
}

interface UniResult {
  key: UniKey;
  name: string;
  city: string;
  country: string;
  filieres: string;
  why: string;
  href: string;
  uniHref: string;
  emoji: string;
}

/* ═══════════════════════════════════════════════════════
   DATA: UNIVERSITIES
   ═══════════════════════════════════════════════════════ */
const UNIVERSITIES: Record<UniKey, UniResult> = {
  "ue-madrid": {
    key: "ue-madrid",
    name: "Universidad Europea — Madrid",
    city: "Madrid",
    country: "Espagne",
    filieres: "Médecine, dentaire, kinésithérapie, pharmacie, vétérinaire",
    why: "Le campus le plus complet avec toutes les filières de santé. Madrid offre une vie étudiante dynamique, un réseau de transports excellent et une communauté française importante.",
    href: "/vie-etudiante/madrid",
    uniHref: "/universites/universidad-europea",
    emoji: "🏙️",
  },
  "ue-valence": {
    key: "ue-valence",
    name: "Universidad Europea — Valence",
    city: "Valence",
    country: "Espagne",
    filieres: "Dentaire, vétérinaire",
    why: "Une ville à taille humaine entre mer et montagne. Campus moderne, promos plus petites et cadre de vie exceptionnel pour se concentrer sur ses études.",
    href: "/vie-etudiante/valence",
    uniHref: "/universites/universidad-europea",
    emoji: "🌊",
  },
  "ue-malaga": {
    key: "ue-malaga",
    name: "Universidad Europea — Malaga",
    city: "Malaga",
    country: "Espagne",
    filieres: "Dentaire",
    why: "Le climat le plus doux d'Europe, un coût de la vie très accessible et un campus récent spécialisé en dentaire. Idéal pour ceux qui veulent allier études et qualité de vie.",
    href: "/vie-etudiante/malaga",
    uniHref: "/universites/universidad-europea",
    emoji: "☀️",
  },
  ucjc: {
    key: "ucjc",
    name: "UCJC — Madrid",
    city: "Madrid",
    country: "Espagne",
    filieres: "Médecine, dentaire, kinésithérapie",
    why: "Des frais de scolarité parmi les plus accessibles en Espagne, un processus d'admission sur entretien (sans test écrit) et des stages dès la première année. En plein Madrid.",
    href: "/vie-etudiante/madrid",
    uniHref: "/universites/ucjc",
    emoji: "💡",
  },
  "link-rome": {
    key: "link-rome",
    name: "LINK Campus University — Rome",
    city: "Rome",
    country: "Italie",
    filieres: "Médecine, kinésithérapie, pharmacie",
    why: "Une fac à taille humaine dans l'une des plus belles villes du monde. Cours en anglais et italien, promos réduites, et une vie culturelle incomparable.",
    href: "/vie-etudiante/rome",
    uniHref: "/universites/link-campus",
    emoji: "🏛️",
  },
};

/* ═══════════════════════════════════════════════════════
   DATA: QUESTIONS
   ═══════════════════════════════════════════════════════ */
const QUESTIONS: Question[] = [
  {
    id: "filiere",
    question: "Quelle filière t'attire le plus ?",
    subtitle: "Choisis celle qui te fait le plus vibrer",
    icon: GraduationCap,
    answers: [
      {
        label: "Médecine",
        scores: { "ue-madrid": 3, ucjc: 3, "link-rome": 3 },
      },
      {
        label: "Dentaire",
        scores: { "ue-madrid": 2, "ue-valence": 3, "ue-malaga": 3, ucjc: 2 },
      },
      {
        label: "Kinésithérapie",
        scores: { "ue-madrid": 2, ucjc: 3, "link-rome": 3 },
      },
      {
        label: "Pharmacie",
        scores: { "ue-madrid": 3, "link-rome": 3 },
      },
      {
        label: "Vétérinaire",
        scores: { "ue-madrid": 3, "ue-valence": 3 },
      },
    ],
  },
  {
    id: "cadre",
    question: "Quel cadre de vie te correspond ?",
    subtitle: "Là où tu te sens bien, tu travailles mieux",
    icon: Sun,
    answers: [
      {
        label: "Grande ville animée",
        scores: { "ue-madrid": 3, ucjc: 3 },
      },
      {
        label: "Ville à taille humaine en bord de mer",
        scores: { "ue-valence": 3, "ue-malaga": 3 },
      },
      {
        label: "Ville historique et culturelle",
        scores: { "link-rome": 3 },
      },
      {
        label: "Soleil et coût de la vie bas",
        scores: { "ue-malaga": 3, "ue-valence": 2 },
      },
    ],
  },
  {
    id: "langue",
    question: "Quelle langue d'études tu préfères ?",
    subtitle: "Les cours sont dispensés dans ces langues",
    icon: Languages,
    answers: [
      {
        label: "Espagnol (j'apprends vite !)",
        scores: { "ue-madrid": 3, "ue-valence": 3, "ue-malaga": 3, ucjc: 3 },
      },
      {
        label: "Anglais",
        scores: { "link-rome": 3, "ue-madrid": 1 },
      },
      {
        label: "Italien",
        scores: { "link-rome": 3 },
      },
      {
        label: "Peu importe, je m'adapterai",
        scores: { "ue-madrid": 1, ucjc: 1, "link-rome": 1, "ue-valence": 1, "ue-malaga": 1 },
      },
    ],
  },
  {
    id: "profil",
    question: "Comment tu décrirais ton dossier scolaire ?",
    subtitle: "Sois honnête, toutes les réponses sont bonnes",
    icon: Users,
    answers: [
      {
        label: "Très bon (mention TB/B)",
        scores: { "ue-madrid": 2, "link-rome": 2, "ue-valence": 2 },
      },
      {
        label: "Correct (mention AB)",
        scores: { "ue-madrid": 2, ucjc: 3, "ue-valence": 2, "ue-malaga": 2 },
      },
      {
        label: "Moyen mais très motivé",
        scores: { ucjc: 3, "ue-malaga": 2 },
      },
      {
        label: "En réorientation (ex PASS/LAS)",
        scores: { "ue-madrid": 2, ucjc: 3, "link-rome": 2 },
      },
    ],
  },
  {
    id: "budget",
    question: "Quel budget annuel tu envisages ?",
    subtitle: "Frais de scolarité uniquement — le financement LCL couvre tout",
    icon: Heart,
    answers: [
      {
        label: "Le moins cher possible",
        scores: { ucjc: 3, "ue-malaga": 2, "link-rome": 2 },
      },
      {
        label: "10 000 — 15 000 €/an",
        scores: { "ue-valence": 3, "ue-malaga": 3, ucjc: 2, "link-rome": 2 },
      },
      {
        label: "15 000 — 20 000 €/an",
        scores: { "ue-madrid": 3, "ue-valence": 2 },
      },
      {
        label: "Le budget n'est pas un critère",
        scores: { "ue-madrid": 2, "ue-valence": 1, "link-rome": 1, ucjc: 1, "ue-malaga": 1 },
      },
    ],
  },
  {
    id: "priorite",
    question: "Qu'est-ce qui compte le plus pour toi ?",
    subtitle: "Le petit truc en plus qui fait la différence",
    icon: Sparkles,
    answers: [
      {
        label: "Petites promos et suivi perso",
        scores: { "ue-valence": 3, "link-rome": 3, "ue-malaga": 2 },
      },
      {
        label: "Stages cliniques dès le début",
        scores: { ucjc: 3, "ue-madrid": 2 },
      },
      {
        label: "Vie étudiante et sorties",
        scores: { "ue-madrid": 3, ucjc: 2, "link-rome": 2 },
      },
      {
        label: "Admission sans test écrit",
        scores: { ucjc: 3, "link-rome": 1 },
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function QuizPage() {
  // step: 0 = intro, 1..6 = questions, 7 = gate CTA, 8 = result
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [hsReady, setHsReady] = useState(false);

  const totalQuestions = QUESTIONS.length;
  const isIntro = step === 0;
  const isGate = step === totalQuestions + 1;
  const isResult = step === totalQuestions + 2;
  const currentQ = !isIntro && !isGate && !isResult ? QUESTIONS[step - 1] : null;

  /* ── Listen for HubSpot form submission ── */
  const onHsMessage = useCallback(
    (event: MessageEvent) => {
      if (
        event.data?.type === "hsFormCallback" &&
        event.data?.eventName === "onFormSubmitted"
      ) {
        setTimeout(() => {
          setShowModal(false);
          setStep(totalQuestions + 2);
        }, 800);
      }
    },
    [totalQuestions]
  );

  useEffect(() => {
    window.addEventListener("message", onHsMessage);
    return () => window.removeEventListener("message", onHsMessage);
  }, [onHsMessage]);

  /* ── Create HubSpot form when modal opens ── */
  useEffect(() => {
    if (!showModal || !hsReady) return;

    const target = document.getElementById("hs-quiz-form");
    if (target) target.innerHTML = "";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const hbspt = (window as any).hbspt;
    if (hbspt?.forms?.create) {
      hbspt.forms.create({
        region: "eu1",
        portalId: "26711031",
        formId: "8b744f4d-2684-4277-9814-1690fe263712",
        target: "#hs-quiz-form",
      });
    }
  }, [showModal, hsReady]);

  /* ── Scoring ── */
  function computeResult(): UniResult {
    const scores: Record<UniKey, number> = {
      "ue-madrid": 0,
      "ue-valence": 0,
      "ue-malaga": 0,
      ucjc: 0,
      "link-rome": 0,
    };

    answers.forEach((ansIdx, qIdx) => {
      const q = QUESTIONS[qIdx];
      if (!q) return;
      const a = q.answers[ansIdx];
      if (!a) return;
      for (const [key, val] of Object.entries(a.scores)) {
        scores[key as UniKey] += val;
      }
    });

    const best = (Object.entries(scores) as [UniKey, number][]).sort(
      (a, b) => b[1] - a[1]
    )[0][0];

    return UNIVERSITIES[best];
  }

  function handleAnswer(idx: number) {
    setSelectedAnswer(idx);
    setTimeout(() => {
      setAnswers((prev) => [...prev, idx]);
      setStep((s) => s + 1);
      setSelectedAnswer(null);
    }, 300);
  }

  function handleBack() {
    if (step <= 1) return;
    setAnswers((prev) => prev.slice(0, -1));
    setStep((s) => s - 1);
  }

  function handleRestart() {
    setAnswers([]);
    setStep(0);
    setSelectedAnswer(null);
  }

  const result = isResult ? computeResult() : null;

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
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Quiz orientation</span>
          </nav>
          <div className="max-w-2xl">
            <h1
              className="text-3xl md:text-4xl font-bold leading-tight mb-4"
              style={{ color: "#ffffff" }}
            >
              Quelle faculté en Europe est faite pour vous ?
            </h1>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              6 questions, 1 minute — découvrez l&apos;université qui correspond
              le mieux à votre profil et à votre projet.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUIZ BODY ── */}
      <section className="py-12 md:py-16 bg-[#fafbff] min-h-[60vh]">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {/* ── INTRO ── */}
            {isIntro && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#EC680A]/10 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-[#EC680A]" />
                </div>
                <h2 className="text-2xl font-bold text-[#1B1D3A] mb-3">
                  Trouvez votre fac idéale en 1 minute
                </h2>
                <p className="text-[#64748b] text-sm mb-8 max-w-md mx-auto">
                  Répondez à 6 questions sur vos envies, votre profil et vos
                  priorités. On vous recommande la faculté qui vous correspond le
                  mieux parmi nos universités partenaires.
                </p>
                <button
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-8 py-3.5 rounded-[5px] transition-all hover:shadow-xl hover:shadow-[#ec680a]/20"
                >
                  Commencer le quiz
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {/* ── QUESTION ── */}
            {currentQ && (
              <motion.div
                key={currentQ.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
              >
                {/* Progress */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#64748b] font-medium">
                    Question {step}/{totalQuestions}
                  </span>
                  <span className="text-xs text-[#64748b]">
                    {Math.round((step / totalQuestions) * 100)}%
                  </span>
                </div>
                <div className="h-2 bg-[#e2e2ef] rounded-full overflow-hidden mb-8">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#615CA5] to-[#EC680A]"
                    initial={{ width: `${((step - 1) / totalQuestions) * 100}%` }}
                    animate={{ width: `${(step / totalQuestions) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Question */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#615CA5]/10 flex items-center justify-center shrink-0">
                    <currentQ.icon className="w-5 h-5 text-[#615CA5]" />
                  </div>
                  <h2 className="text-xl font-bold text-[#1B1D3A]">
                    {currentQ.question}
                  </h2>
                </div>
                <p className="text-sm text-[#64748b] mb-6 ml-[52px]">
                  {currentQ.subtitle}
                </p>

                {/* Answers */}
                <div className="space-y-3">
                  {currentQ.answers.map((a, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      disabled={selectedAnswer !== null}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                        selectedAnswer === i
                          ? "border-[#EC680A] bg-[#EC680A]/5 shadow-md"
                          : "border-[#e2e2ef] bg-white hover:border-[#615CA5]/40 hover:shadow-sm"
                      }`}
                    >
                      <span className="font-medium text-[#1B1D3A] text-sm">
                        {a.label}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Back */}
                {step > 1 && (
                  <button
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 mt-6 text-sm text-[#64748b] hover:text-[#1B1D3A] transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Question précédente
                  </button>
                )}
              </motion.div>
            )}

            {/* ── GATE CTA ── */}
            {isGate && (
              <motion.div
                key="gate"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                {/* Full progress bar */}
                <div className="h-2 bg-[#e2e2ef] rounded-full overflow-hidden mb-10">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-[#615CA5] to-[#EC680A]" />
                </div>

                <div className="w-20 h-20 rounded-2xl bg-[#615CA5]/10 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-[#615CA5]" />
                </div>
                <h2 className="text-2xl font-bold text-[#1B1D3A] mb-3">
                  Votre résultat est prêt !
                </h2>
                <p className="text-[#64748b] text-sm mb-8 max-w-md mx-auto">
                  Renseignez vos coordonnées pour découvrir quelle faculté
                  correspond le mieux à votre profil. Un conseiller Edumove
                  pourra aussi vous recontacter si vous le souhaitez.
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center gap-2 bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-8 py-4 rounded-[5px] transition-all hover:shadow-xl hover:shadow-[#ec680a]/20 text-base"
                >
                  Découvrir mon résultat
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}

            {/* ── RESULT ── */}
            {result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center mb-8">
                  <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-2">
                    Votre résultat
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A]">
                    La fac faite pour vous
                  </h2>
                </div>

                <div className="bg-white rounded-2xl border-2 border-[#EC680A]/30 p-6 md:p-8 shadow-lg shadow-[#EC680A]/5">
                  <div className="flex items-start gap-4 mb-5">
                    <span className="text-4xl">{result.emoji}</span>
                    <div>
                      <h3 className="text-xl font-bold text-[#1B1D3A]">
                        {result.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#EC680A]" />
                        <span className="text-sm text-[#64748b]">
                          {result.city}, {result.country}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[#334155] leading-relaxed mb-4">
                    {result.why}
                  </p>

                  <div className="bg-[#fafbff] rounded-xl p-4 mb-6">
                    <p className="text-xs font-semibold text-[#615CA5] uppercase tracking-wider mb-1">
                      Filières disponibles
                    </p>
                    <p className="text-sm text-[#334155]">{result.filieres}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://candidature.edumove.fr"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-6 py-3.5 rounded-[5px] transition-all hover:shadow-xl hover:shadow-[#ec680a]/20"
                    >
                      Déposer ma candidature
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <ContactButton className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-[#1B1D3A]/20 text-[#1B1D3A] font-medium px-6 py-3.5 rounded-[5px] hover:bg-[#1B1D3A]/5 transition-all">
                      Être contacté
                    </ContactButton>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <Link
                    href={result.uniHref}
                    className="flex-1 text-center text-sm font-medium text-[#615CA5] hover:text-[#EC680A] bg-white border border-[#e2e2ef] rounded-xl py-3 px-4 transition-colors"
                  >
                    Découvrir {result.name.split("—")[0].trim()} &rarr;
                  </Link>
                  <Link
                    href={result.href}
                    className="flex-1 text-center text-sm font-medium text-[#615CA5] hover:text-[#EC680A] bg-white border border-[#e2e2ef] rounded-xl py-3 px-4 transition-colors"
                  >
                    Vie étudiante à {result.city} &rarr;
                  </Link>
                </div>

                {/* Restart */}
                <div className="text-center mt-8">
                  <button
                    onClick={handleRestart}
                    className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#1B1D3A] transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Refaire le quiz
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── SEO TEXT ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1B1D3A] mb-4">
            Comment choisir sa faculté de santé en Europe ?
          </h2>
          <div className="space-y-4 text-[#334155] text-sm leading-relaxed">
            <p>
              Le choix de l&apos;université est une étape clé pour réussir ses
              études de santé en Europe. Chaque faculté a ses spécificités :
              filières proposées, langue d&apos;enseignement, coût de la vie,
              taille des promotions et modalités d&apos;admission.
            </p>
            <p>
              En Espagne, l&apos;Universidad Europea propose le plus large choix
              de formations sur ses campus de Madrid, Valence et Malaga.
              L&apos;UCJC à Madrid se distingue par son admission sur entretien
              et ses frais plus accessibles. En Italie, LINK Campus University à
              Rome offre des formations en anglais dans un cadre historique
              unique.
            </p>
            <p>
              Ce quiz gratuit vous aide à identifier l&apos;université qui
              correspond le mieux à votre profil, vos envies et votre budget.
              Tous les diplômes délivrés par nos universités partenaires sont
              reconnus en France via le{" "}
              <Link
                href="/nos-resultats"
                className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
              >
                processus de Bologne
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <StickyBar />

      {/* ── HubSpot Script ── */}
      <Script
        src="https://js-eu1.hsforms.net/forms/embed/26711031.js"
        strategy="lazyOnload"
        onLoad={() => setHsReady(true)}
      />

      {/* ── HubSpot Modal ── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            >
              {/* Close */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-[#334155] transition-colors z-10"
              >
                &times;
              </button>

              <div className="p-6 md:p-8">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#EC680A]/10 flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-6 h-6 text-[#EC680A]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B1D3A]">
                    Plus qu&apos;une étape !
                  </h3>
                  <p className="text-sm text-[#64748b] mt-1">
                    Renseignez vos coordonnées pour accéder à votre résultat.
                  </p>
                </div>

                {/* HubSpot form container */}
                <div id="hs-quiz-form" className="min-h-[200px]" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
