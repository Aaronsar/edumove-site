"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  ChevronRight,
  CalendarDays,
  Clock,
  Video,
  CheckCircle2,
  Users,
  GraduationCap,
  Euro,
  HelpCircle,
  Phone,
  ArrowRight,
} from "lucide-react";
import ContactButton from "@/components/shared/ContactButton";

const PROGRAMME = [
  {
    icon: Euro,
    title: "Les solutions de financement",
    desc: "Prêt étudiant LCL, bourses CROUS, aides régionales... On fait le tour de toutes les options disponibles.",
  },
  {
    icon: GraduationCap,
    title: "Le remboursement différé",
    desc: "Comment fonctionne le prêt LCL : vous ne remboursez rien pendant vos études, uniquement une fois diplômé et en exercice.",
  },
  {
    icon: Users,
    title: "L'accompagnement Edumove",
    desc: "Comment Edumove vous accompagne dans la constitution de votre dossier et la mise en relation avec LCL.",
  },
  {
    icon: HelpCircle,
    title: "Session questions / réponses",
    desc: "Posez toutes vos questions en direct à notre équipe et aux représentants de LCL.",
  },
];

const POUR_QUI = [
  "Lycéens en Terminale qui envisagent des études de santé en Europe",
  "Étudiants en PASS/L.AS souhaitant explorer d'autres voies",
  "Parents qui veulent comprendre les options de financement",
  "Étudiants déjà admis qui cherchent à financer leurs études",
];

function HubSpotWebinarForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load HubSpot embed script
    const scriptId = "hs-forms-embed-26711031";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://js-eu1.hsforms.net/forms/embed/26711031.js";
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div ref={containerRef}>
      <div
        className="hs-form-frame"
        data-region="eu1"
        data-form-id="bcbeb911-e7e2-43bf-81b2-573b2ff9eabe"
        data-portal-id="26711031"
      />
    </div>
  );
}

export default function WebinarFinancementPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO + FORMULAIRE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#1b1d3a] overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#615ca5]/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#ec680a]/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-10 md:py-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Webinaire</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left — Info */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#ec680a]/20 text-[#ec680a] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                <Video className="w-3.5 h-3.5" />
                Webinaire gratuit en ligne
              </div>

              {/* Logos */}
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="/edumove-icon-orange.svg"
                  alt="Edumove"
                  width={32}
                  height={32}
                  className="h-7 w-auto"
                />
                <span className="text-white/40 text-lg font-light">
                  &times;
                </span>
                <Image
                  src="/lcl-logo.svg"
                  alt="LCL"
                  width={60}
                  height={24}
                  className="h-6 w-auto rounded"
                />
              </div>

              <h1
                className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4"
                style={{ color: "#ffffff" }}
              >
                Comment financer ses études de Santé en Europe ?
                <span className="block text-[#ec680a] mt-1">
                  On vous explique tout !
                </span>
              </h1>

              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 max-w-md">
                Avec la participation exceptionnelle de la{" "}
                <strong className="text-white/80">LCL</strong>, partenaire
                officiel d&apos;Edumove, découvrez toutes les solutions pour
                financer vos études de santé en Europe.
              </p>

              {/* Date & Time */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center gap-2.5 bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3">
                  <CalendarDays className="w-5 h-5 text-[#ec680a]" />
                  <div>
                    <p className="text-white font-semibold text-sm">
                      Mercredi 15 avril 2026
                    </p>
                    <p className="text-white/50 text-xs">
                      Inscrivez-vous pour recevoir le lien
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3">
                  <Clock className="w-5 h-5 text-[#ec680a]" />
                  <div>
                    <p className="text-white font-semibold text-sm">18h30</p>
                    <p className="text-white/50 text-xs">
                      Durée : environ 45 min
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Formulaire */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/20">
              <h2 className="text-xl font-bold text-[#1B1D3A] mb-1">
                Inscrivez-vous gratuitement
              </h2>
              <p className="text-sm text-[#64748b] mb-6">
                Recevez le lien de connexion par email avant le webinaire.
              </p>

              {/* Formulaire HubSpot */}
              <div id="webinar-form">
                <HubSpotWebinarForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. AU PROGRAMME
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-2">
            Au programme du webinaire
          </h2>
          <p className="text-[#64748b] mb-10 max-w-2xl">
            45 minutes pour tout comprendre sur le financement de vos études de
            santé en Europe.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMME.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ec680a]/10 to-[#615CA5]/10 border border-[#ec680a]/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#ec680a]" />
                    </div>
                    <h3 className="font-bold text-[#1B1D3A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. POUR QUI ?
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-[#fafbff]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-6">
                Ce webinaire est fait pour vous si...
              </h2>
              <div className="space-y-4">
                {POUR_QUI.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#e2e2ef]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#ec680a] shrink-0 mt-0.5" />
                    <span className="text-[#334155] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Partenaire LCL */}
            <div className="bg-white rounded-2xl border border-[#e2e2ef] p-8">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/lcl-logo.svg"
                  alt="LCL"
                  width={80}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="text-xs font-semibold text-[#615CA5] bg-[#615CA5]/10 px-3 py-1 rounded-full">
                  Partenaire officiel
                </span>
              </div>
              <h3 className="font-bold text-[#1B1D3A] text-lg mb-3">
                LCL, partenaire officiel d&apos;Edumove
              </h3>
              <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                LCL accompagne les étudiants Edumove avec un prêt étudiant
                pouvant aller jusqu&apos;à 75 000 euros, avec un remboursement
                différé après l&apos;obtention du diplôme. Un représentant LCL
                sera présent lors du webinaire pour répondre à toutes vos
                questions.
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#fafbff] rounded-xl p-3 text-center border border-[#e2e2ef]">
                  <p className="text-lg font-bold text-[#ec680a]">75 000 &euro;</p>
                  <p className="text-[10px] text-[#64748b] mt-0.5">
                    Montant max.
                  </p>
                </div>
                <div className="bg-[#fafbff] rounded-xl p-3 text-center border border-[#e2e2ef]">
                  <p className="text-lg font-bold text-[#ec680a]">0 &euro;</p>
                  <p className="text-[10px] text-[#64748b] mt-0.5">
                    Pendant les études
                  </p>
                </div>
                <div className="bg-[#fafbff] rounded-xl p-3 text-center border border-[#e2e2ef]">
                  <p className="text-lg font-bold text-[#ec680a]">100%</p>
                  <p className="text-[10px] text-[#64748b] mt-0.5">
                    Finançable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. RAPPEL INSCRIPTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#1B1D3A] to-[#2a2d52] rounded-2xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 bg-[#ec680a]/20 text-[#ec680a] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <CalendarDays className="w-3.5 h-3.5" />
              Mercredi 15 avril 2026 - 18h30
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: "#ffffff" }}
            >
              Ne manquez pas ce webinaire !
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Inscription gratuite. Places limitées. Recevez le lien de
              connexion directement dans votre boîte mail.
            </p>
            <a
              href="#webinar-form"
              className="inline-block bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-8 py-3.5 rounded-[5px] transition-all hover:shadow-xl hover:shadow-[#ec680a]/20"
            >
              Je m&apos;inscris gratuitement
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. CTA FINAL
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-10 md:py-16 bg-[#1B1D3A] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec680a] via-[#615ca5] to-[#ec680a]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: "#ffffff" }}
          >
            Des questions sur le financement ?
          </h2>
          <p className="text-gray-300 mb-8">
            Un expert Edumove vous rappelle sous 24h pour étudier votre dossier
            gratuitement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://candidature.edumove.fr"
              className="inline-block bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-8 py-3.5 rounded-[5px] transition-all hover:shadow-xl hover:shadow-[#ec680a]/20"
            >
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
          JSON-LD Event Schema
      ══════════════════════════════════════════════════════════════════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationEvent",
            name: "Comment financer ses études de Santé en Europe ? On vous explique tout !",
            description:
              "Webinaire gratuit organisé par Edumove avec la participation de LCL pour comprendre comment financer ses études de santé en Europe.",
            startDate: "2026-04-15T18:30:00+02:00",
            endDate: "2026-04-15T19:15:00+02:00",
            eventAttendanceMode:
              "https://schema.org/OnlineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
            isAccessibleForFree: true,
            organizer: {
              "@type": "Organization",
              name: "Edumove",
              url: "https://www.edumove.fr",
            },
            performer: {
              "@type": "Organization",
              name: "LCL",
            },
            location: {
              "@type": "VirtualLocation",
              url: "https://www.edumove.fr/evenements/webinaire-financement-sante",
            },
          }),
        }}
      />
    </>
  );
}
