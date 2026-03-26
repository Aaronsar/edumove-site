"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
  Loader2,
  ChevronDown,
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

const PORTAL_ID = "26711031";
const FORM_ID = "bcbeb911-e7e2-43bf-81b2-573b2ff9eabe";
const SUBMIT_URL = `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`;

const CLASSE_OPTIONS = [
  "Troisième",
  "Seconde",
  "Première",
  "Terminale",
  "PASS",
  "LSPS 1",
  "LSPS 2",
  "LSPS 3",
  "LAS 1",
  "LAS 2",
  "LAS 3",
  "Études médicales",
  "Études Sup.",
  "Autre",
];

const inputClass =
  "w-full px-3.5 py-2.5 border-[1.5px] border-[#E2E8F0] rounded-xl text-sm text-[#1B1D3A] bg-[#F8FAFC] placeholder:text-[#94A3B8] outline-none transition-all focus:border-[#EC680A] focus:ring-[3px] focus:ring-[#EC680A]/10 focus:bg-white";

const labelClass = "block text-[13px] font-semibold text-[#1B1D3A] mb-1";

type FormState = "idle" | "submitting" | "success" | "error";

function WebinarForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [classe, setClasse] = useState("");
  const [departement, setDepartement] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: [
            { objectTypeId: "0-1", name: "firstname", value: firstname },
            { objectTypeId: "0-1", name: "lastname", value: lastname },
            { objectTypeId: "0-1", name: "email", value: email },
            { objectTypeId: "0-1", name: "phone", value: phone },
            { objectTypeId: "0-1", name: "classe_actuelle", value: classe },
            { objectTypeId: "0-1", name: "dpartement_ex__75", value: departement },
          ],
          context: {
            pageUri: window.location.href,
            pageName: document.title,
          },
        }),
      });

      if (res.ok) {
        setFormState("success");
      } else {
        const data = await res.json().catch(() => null);
        setErrorMsg(data?.message || "Une erreur est survenue. Veuillez réessayer.");
        setFormState("error");
      }
    } catch {
      setErrorMsg("Erreur de connexion. Veuillez réessayer.");
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-6">
        <CheckCircle2 className="w-12 h-12 text-green-500" />
        <p className="text-lg font-semibold text-[#1B1D3A]">Inscription confirmée !</p>
        <p className="text-sm text-[#64748b] text-center">
          Vous recevrez le lien de connexion par email avant le webinaire.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      {/* Prénom + Nom */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>
            Prénom <span className="text-[#EC680A]">*</span>
          </label>
          <input
            type="text"
            required
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="Votre prénom"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>
            Nom <span className="text-[#EC680A]">*</span>
          </label>
          <input
            type="text"
            required
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Votre nom"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className={labelClass}>
          E-mail <span className="text-[#EC680A]">*</span>
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          className={inputClass}
        />
      </div>

      {/* Téléphone */}
      <div>
        <label className={labelClass}>Téléphone</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+33 6 12 34 56 78"
          className={inputClass}
        />
      </div>

      {/* Classe + Département on same row */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>
            Classe actuelle <span className="text-[#EC680A]">*</span>
          </label>
          <div className="relative">
            <select
              required
              value={classe}
              onChange={(e) => setClasse(e.target.value)}
              className={`${inputClass} appearance-none cursor-pointer ${!classe ? "text-[#94A3B8]" : ""}`}
            >
              <option value="" disabled>
                Classe
              </option>
              {CLASSE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8] pointer-events-none" />
          </div>
        </div>
        <div>
          <label className={labelClass}>
            Département <span className="text-[#EC680A]">*</span>
          </label>
          <input
            type="text"
            required
            value={departement}
            onChange={(e) => setDepartement(e.target.value)}
            placeholder="Ex : 75"
            maxLength={3}
            className={inputClass}
          />
        </div>
      </div>

      {/* Error */}
      {formState === "error" && (
        <p className="text-[#EF4444] text-xs font-medium">{errorMsg}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="w-full flex items-center justify-center gap-2 bg-[#EC680A] hover:bg-[#D45E09] disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-semibold py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-[#EC680A]/20 hover:-translate-y-0.5 active:translate-y-0"
      >
        {formState === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Inscription en cours…
          </>
        ) : (
          "Je m\u2019inscris au webinaire"
        )}
      </button>

      <p className="text-[11px] text-[#94A3B8] text-center leading-relaxed">
        En vous inscrivant, vous acceptez d&apos;être recontacté par Edumove.
      </p>
    </form>
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

          <div className="grid md:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">
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
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/20 w-full md:w-[420px] md:ml-auto">
              <h2 className="text-xl font-bold text-[#1B1D3A] mb-1">
                Inscrivez-vous gratuitement
              </h2>
              <p className="text-sm text-[#64748b] mb-6">
                Recevez le lien de connexion par email avant le webinaire.
              </p>

              {/* Formulaire d'inscription */}
              <div id="webinar-form">
                <WebinarForm />
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
