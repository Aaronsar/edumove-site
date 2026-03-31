"use client";

import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Lock,
  GraduationCap,
  Stethoscope,
  Bone,
  Heart,
  Pill,
  Dog,
  Euro,
  Building2,
  CheckCircle2,
  Users,
  ArrowRight,
  Phone,
  Maximize,
  Clock,
  Calendar,
  MapPin,
  Star,
  TrendingUp,
  Shield,
  BookOpen,
  Home,
  Briefcase,
  HandCoins,
  Award,
  Mail,
  Globe,
  MessageCircle,
  FileText,
  HelpCircle,
  XCircle,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════
   PASSWORD GATE
   ═══════════════════════════════════════════════════════════════════════ */

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (pw === "webinaire1504") {
      sessionStorage.setItem("pres-auth", "1");
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  }

  return (
    <div className="min-h-screen bg-[#1B1D3A] flex items-center justify-center px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#615ca5]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#ec680a]/10 rounded-full blur-3xl" />
      </div>
      <form onSubmit={handleSubmit} className="relative z-10 text-center max-w-sm w-full">
        <div className="w-16 h-16 rounded-2xl bg-[#EC680A] flex items-center justify-center mx-auto mb-6">
          <span className="text-white font-bold text-2xl">E</span>
        </div>
        <h1 className="text-white text-2xl font-bold mb-2">Presentation protegee</h1>
        <p className="text-white/50 text-sm mb-8">Entrez le mot de passe pour acceder aux slides</p>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="Mot de passe"
              autoFocus
              className={`w-full pl-10 pr-4 py-3 bg-white/10 border ${error ? "border-red-500" : "border-white/20"} rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#EC680A] focus:ring-2 focus:ring-[#EC680A]/20 transition-all`}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-[#EC680A] hover:bg-[#D45E09] text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-[#EC680A]/20"
          >
            Entrer
          </button>
        </div>
        {error && <p className="text-red-400 text-sm mt-3">Mot de passe incorrect</p>}
      </form>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   SLIDE COMPONENTS (16 slides — all white/light backgrounds)
   ═══════════════════════════════════════════════════════════════════════ */

/* ── Slide 1: Cover ── */
function SlideCover() {
  return (
    <div className="h-full bg-gradient-to-br from-[#eeedf5] via-[#f9f5f0] to-[#fdecd8] flex flex-col items-center justify-center relative overflow-hidden px-8">
      {/* Colorful background blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#EC680A]/12 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#615CA5]/12 rounded-full blur-[120px]" />
      <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-[#EC680A]/6 rounded-full blur-[80px]" />
      {/* Dot grids */}
      <div className="absolute top-[12%] left-[4%] grid grid-cols-5 gap-2.5 opacity-25">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={`tl-${i}`} className="w-2 h-2 rounded-full bg-[#EC680A]" />
        ))}
      </div>
      <div className="absolute bottom-[12%] right-[4%] grid grid-cols-5 gap-2.5 opacity-20">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={`br-${i}`} className="w-2 h-2 rounded-full bg-[#615CA5]" />
        ))}
      </div>
      {/* Orange top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#EC680A] via-[#EC680A] to-[#615CA5]" />

      <div className="relative z-10 text-center max-w-3xl">
        {/* Logos */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <img src="/edumove-icon-orange.svg" alt="Edumove" className="h-14 w-14" />
          <span className="text-[#1B1D3A]/20 text-2xl font-light">&times;</span>
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-12" />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-[#1B1D3A]">
          Financer ses etudes<br />
          <span className="text-[#EC680A]">de sante en Europe</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#64748b] text-lg mb-10">
          Accompagnement complet. Financement jusqu&apos;a 100%.
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-10 mb-10">
          {[
            { value: "3", label: "Universites" },
            { value: "5", label: "Filieres" },
            { value: "100%", label: "Financable" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-[#EC680A] text-3xl md:text-4xl font-extrabold">{stat.value}</p>
              <p className="text-[#94a3b8] text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* LCL badge */}
        <div className="inline-flex items-center gap-3 bg-[#1B1D3A] px-6 py-3 rounded-full">
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-5 brightness-200" />
          <div className="h-4 w-px bg-white/15" />
          <span className="text-white/70 text-xs font-medium">Partenaire financier officiel</span>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 2: Programme ── */
function SlideProgramme() {
  const items = [
    { icon: Star, label: "Qui est Edumove ?" },
    { icon: TrendingUp, label: "Le constat PASS/LAS en France" },
    { icon: GraduationCap, label: "L'alternative europeenne" },
    { icon: Euro, label: "Combien ca coute ?" },
    { icon: Building2, label: "Le pret etudiant du LCL", highlight: true },
    { icon: HandCoins, label: "Les aides cumulables" },
    { icon: Heart, label: "L'accompagnement Edumove" },
    { icon: HelpCircle, label: "Questions / Reponses" },
  ];
  return (
    <div className="h-full bg-white flex items-center justify-center px-8">
      <div className="max-w-3xl w-full">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3">AU PROGRAMME</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-8">1 heure pour tout comprendre</h2>
        <div className="space-y-2.5">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 p-3.5 rounded-xl transition-all ${
                item.highlight
                  ? "bg-[#1B1D3A] text-white"
                  : "bg-[#f5f5fb] border border-gray-100"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold ${
                  item.highlight ? "bg-[#EC680A] text-white" : "bg-white text-[#1B1D3A] border border-gray-100"
                }`}
              >
                {i + 1}
              </div>
              <item.icon className={`w-4.5 h-4.5 ${item.highlight ? "text-[#EC680A]" : "text-[#615CA5]"}`} />
              <span className={`flex-1 font-medium text-sm ${item.highlight ? "text-white" : "text-[#1B1D3A]"}`}>
                {item.label}
              </span>
              {item.highlight && (
                <span className="text-xs font-medium text-[#EC680A] bg-[#EC680A]/10 px-2 py-0.5 rounded-full">LCL</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Slide 3: Qui sommes-nous ── */
function SlideQuiSommesNous() {
  return (
    <div className="h-full bg-white flex items-center justify-center px-8 relative overflow-hidden">
      <div className="absolute bottom-[8%] left-[3%] grid grid-cols-4 gap-2 opacity-25">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={`d-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#EC680A]" />
        ))}
      </div>

      <div className="max-w-4xl w-full">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3">QUI SOMMES-NOUS</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-3">
          Edumove, N&deg;1 de l&apos;accompagnement<br />en etudes de sante en Europe
        </h2>
        <p className="text-[#64748b] text-sm mb-8 max-w-2xl">
          Depuis 2019, Edumove accompagne les etudiants francais vers des etudes de sante en Espagne et en Italie.
          Notre mission : rendre accessible le diplome de sante a tous les etudiants motives, quel que soit leur resultat au PASS.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { value: "+500", label: "Etudiants accompagnes" },
            { value: "3", label: "Universites partenaires" },
            { value: "5", label: "Filieres de sante" },
            { value: "2019", label: "Annee de creation" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-5 text-center border border-gray-100">
              <p className="text-[#EC680A] text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-[#334155] text-xs">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* What we do */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { icon: GraduationCap, title: "Orientation", desc: "Analyse du profil, choix de la filiere et de l'universite adaptee a chaque etudiant" },
            { icon: BookOpen, title: "Preparation", desc: "Cours de preparation aux tests d'admission, annales, simulations d'entretien" },
            { icon: Globe, title: "Installation", desc: "Aide au logement, demarches administratives, integration sur place" },
          ].map((item, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-5 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[#615CA5]/10 flex items-center justify-center mb-3">
                <item.icon className="w-5 h-5 text-[#615CA5]" />
              </div>
              <p className="text-[#1B1D3A] font-semibold text-sm mb-1">{item.title}</p>
              <p className="text-[#64748b] text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="bg-[#1B1D3A] rounded-2xl p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EC680A] flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Accompagnement 100% gratuit</p>
              <p className="text-white/50 text-xs">De l&apos;orientation a l&apos;installation, sans frais supplementaires</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-[#EC680A] px-4 py-2 rounded-xl shrink-0">
            <span className="text-white font-semibold text-xs">Espagne &amp; Italie</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 4: Constat PASS ── */
function SlideConstat() {
  return (
    <div className="h-full bg-white flex items-center justify-center px-8 relative overflow-hidden">
      <div className="absolute bottom-[10%] left-[3%] grid grid-cols-4 gap-2 opacity-30">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={`bl-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#1B1D3A]" />
        ))}
      </div>

      <div className="max-w-4xl w-full">
        <div className="flex items-start justify-between mb-10">
          <div className="max-w-md">
            <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3">LE CONSTAT</p>
            <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-3">Le PASS/LAS en France</h2>
            <p className="text-[#64748b] text-sm leading-relaxed">
              Un concours unique qui elimine des etudiants brillants. Aucune garantie d&apos;acces au diplome, quelle que soit la motivation.
            </p>
          </div>
          <div className="bg-[#1B1D3A] rounded-2xl px-8 py-5 text-center shrink-0">
            <p className="text-[#EC680A] text-5xl font-extrabold leading-none">80%</p>
            <p className="text-white/60 text-sm mt-2">n&apos;accedent pas au diplome</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5 mb-8">
          {[
            { value: "60 000+", label: "Etudiants inscrits en PASS chaque annee" },
            { value: "80%", label: "Elimines des la premiere annee" },
            { value: "2 ans", label: "Perdus en moyenne par les recales" },
            { value: "0%", label: "Garantie de resultat malgre l'investissement" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-5 text-center border border-gray-100">
              <p className="text-[#EC680A] text-2xl font-bold mb-2">{stat.value}</p>
              <p className="text-[#334155] text-xs leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#1B1D3A] rounded-2xl p-6 flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-lg mb-1">Il existe une alternative.</p>
            <p className="text-white/50 text-sm">Etudes de sante en Europe — admission sur dossier, diplome reconnu en France.</p>
          </div>
          <div className="flex items-center gap-2 bg-[#EC680A] px-5 py-2.5 rounded-xl shrink-0">
            <span className="text-white font-semibold text-sm">Decouvrir &rarr;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 5: L'alternative europeenne ── */
function SlideAlternative() {
  const unis = [
    { name: "Universidad Europea", flag: "\uD83C\uDDEA\uD83C\uDDF8", location: "5 campus en Espagne", desc: "Madrid, Malaga, Valence, Alicante, Canaries", since: "Depuis 2019", students: "+300" },
    { name: "UCJC Madrid", flag: "\uD83C\uDDEA\uD83C\uDDF8", location: "Madrid", desc: "Admission sur entretien, la plus accessible", since: "Depuis 2021", students: "+100" },
    { name: "LINK Campus", flag: "\uD83C\uDDEE\uD83C\uDDF9", location: "Rome", desc: "Test d'admission 100% en francais", since: "Depuis 2020", students: "+150" },
  ];
  return (
    <div className="h-full bg-white flex items-center justify-center px-8">
      <div className="max-w-4xl w-full">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3">L&apos;ALTERNATIVE</p>
            <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold">Nos universites partenaires</h2>
          </div>
          <p className="text-[#64748b] text-sm max-w-xs text-right">
            Admission sur dossier ou test. Diplome reconnu en France (Directive 2005/36/CE).
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {unis.map((u, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{u.flag}</span>
                <div>
                  <p className="font-bold text-[#1B1D3A] text-sm">{u.name}</p>
                  <p className="text-[#94a3b8] text-xs">{u.since}</p>
                </div>
              </div>
              <p className="text-[#334155] text-xs mb-2">
                <MapPin className="w-3 h-3 inline mr-1" />{u.location}
              </p>
              <p className="text-[#615CA5] text-xs font-medium mb-3">{u.desc}</p>
              <div className="bg-white rounded-lg px-3 py-1.5 inline-flex items-center gap-1.5 border border-gray-100">
                <Users className="w-3 h-3 text-[#EC680A]" />
                <span className="text-[#1B1D3A] text-xs font-semibold">{u.students} etudiants</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner with stats */}
        <div className="bg-[#f5f5fb] rounded-2xl p-5 flex items-center justify-between border border-gray-100">
          <div className="flex items-center gap-8">
            {[
              { value: "3", label: "Universites" },
              { value: "5", label: "Filieres de sante" },
              { value: "2", label: "Pays europeens" },
              { value: "+500", label: "Etudiants accompagnes" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-[#EC680A] text-xl font-bold">{stat.value}</p>
                <p className="text-[#64748b] text-[10px]">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-[#EC680A] px-4 py-2 rounded-xl shrink-0">
            <span className="text-white font-semibold text-xs">100% financable</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 6: Les filieres ── */
function SlideFilieres() {
  const filieres = [
    {
      icon: Stethoscope,
      name: "Medecine",
      duree: "6 ans",
      desc: "Formation complete en medecine generale. Possibilite de se specialiser ensuite en France via les ECN.",
      debouches: "Generaliste, specialiste, chirurgien",
    },
    {
      icon: Bone,
      name: "Dentaire",
      duree: "5-6 ans",
      desc: "Pratique clinique des la 3eme annee sur de vrais patients. Diplome reconnu dans toute l'UE.",
      debouches: "Chirurgien-dentiste, orthodontiste",
    },
    {
      icon: Heart,
      name: "Kinesitherapie",
      duree: "3-4 ans",
      desc: "Formation axee sur la pratique. Stages cliniques integres et equipements de pointe.",
      debouches: "Kine liberal, sport, reeducation",
    },
    {
      icon: Pill,
      name: "Pharmacie",
      duree: "5 ans",
      desc: "Sciences pharmaceutiques, chimie medicale et stages en officine. Diplome europeen reconnu.",
      debouches: "Officine, industrie, hopital",
    },
    {
      icon: Dog,
      name: "Veterinaire",
      duree: "5 ans",
      desc: "Medecine veterinaire complete avec acces a des cliniques universitaires modernes.",
      debouches: "Cabinet, industrie, recherche",
    },
  ];
  return (
    <div className="h-full bg-white flex items-center justify-center px-8">
      <div className="max-w-4xl w-full">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3">LES FILIERES</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-2">5 filieres de sante accessibles</h2>
        <p className="text-[#64748b] text-sm mb-8">Toutes reconnues en France via la Directive europeenne 2005/36/CE</p>

        <div className="grid grid-cols-5 gap-3 mb-6">
          {filieres.map((f, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-4 border border-gray-100 flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-[#615CA5]/10 flex items-center justify-center mb-3">
                <f.icon className="w-5 h-5 text-[#615CA5]" />
              </div>
              <p className="text-[#1B1D3A] font-bold text-sm mb-0.5">{f.name}</p>
              <p className="text-[#EC680A] text-xs font-semibold mb-2">{f.duree}</p>
              <p className="text-[#64748b] text-[10px] leading-relaxed mb-3 flex-1">{f.desc}</p>
              <div className="bg-white rounded-lg px-2 py-1.5 border border-gray-100">
                <p className="text-[#334155] text-[10px]"><span className="font-semibold">Debouches :</span> {f.debouches}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="bg-[#1B1D3A] rounded-2xl p-5 flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-sm">Toutes les filieres sont 100% financables</p>
            <p className="text-white/50 text-xs">Pret etudiant du LCL + aides cumulables</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-[#EC680A] font-bold text-lg">100%</p>
              <p className="text-white/40 text-[10px]">Financable</p>
            </div>
            <div className="text-center">
              <p className="text-[#EC680A] font-bold text-lg">UE</p>
              <p className="text-white/40 text-[10px]">Reconnu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 7: Tarifs ── */
function SlideTarifs() {
  const data = [
    { filiere: "Medecine", ucjc: "15 000", ue: "21 500", link: "19 800", duree: "6 ans" },
    { filiere: "Dentaire", ucjc: "9 420", ue: "18 900", link: "19 800", duree: "5-6 ans" },
    { filiere: "Kine", ucjc: "9 420", ue: "14 580", link: "7 900", duree: "3-4 ans" },
    { filiere: "Pharmacie", ucjc: "9 420", ue: "15 000", link: "7 900", duree: "5 ans" },
    { filiere: "Veterinaire", ucjc: "\u2014", ue: "17 340", link: "\u2014", duree: "5 ans" },
  ];
  return (
    <div className="h-full bg-[#f5f5fb] flex items-center justify-center px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#EC680A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#615CA5]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl w-full relative z-10">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3">LES FRAIS</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-2">Combien coutent les etudes ?</h2>
        <p className="text-[#64748b] text-sm mb-8">Frais de scolarite annuels par universite et par filiere</p>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#1B1D3A] text-white">
                <th className="px-5 py-4 text-left text-sm font-semibold">Filiere</th>
                <th className="px-5 py-4 text-center text-sm font-semibold">{"\uD83C\uDDEA\uD83C\uDDF8"} UCJC</th>
                <th className="px-5 py-4 text-center text-sm font-semibold">{"\uD83C\uDDEA\uD83C\uDDF8"} UE</th>
                <th className="px-5 py-4 text-center text-sm font-semibold">{"\uD83C\uDDEE\uD83C\uDDF9"} LINK</th>
                <th className="px-5 py-4 text-center text-sm font-semibold">Duree</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? "" : "bg-[#fafbff]"}`}>
                  <td className="px-5 py-3.5 font-semibold text-[#1B1D3A] text-sm">{row.filiere}</td>
                  <td className="px-5 py-3.5 text-center text-sm text-[#334155]">{row.ucjc === "\u2014" ? <span className="text-gray-300">{"\u2014"}</span> : `${row.ucjc} \u20AC`}</td>
                  <td className="px-5 py-3.5 text-center text-sm text-[#334155]">{row.ue} {"\u20AC"}</td>
                  <td className="px-5 py-3.5 text-center text-sm text-[#334155]">{row.link === "\u2014" ? <span className="text-gray-300">{"\u2014"}</span> : `${row.link} \u20AC`}</td>
                  <td className="px-5 py-3.5 text-center text-sm text-[#615CA5] font-medium">{row.duree}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
            <p className="text-[#EC680A] text-xl font-bold">des 7 900 {"\u20AC"}</p>
            <p className="text-[#64748b] text-xs mt-1">Tarif le plus bas / an</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
            <p className="text-[#615CA5] text-xl font-bold">100%</p>
            <p className="text-[#64748b] text-xs mt-1">Financable via le pret du LCL</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
            <p className="text-[#1B1D3A] text-xl font-bold">0 {"\u20AC"} d&apos;acompte</p>
            <p className="text-[#64748b] text-xs mt-1">Remboursement apres le diplome</p>
          </div>
        </div>
        <p className="text-center text-[#94a3b8] text-xs mt-4">Tarifs 2026 — Tous les frais sont eligibles au pret etudiant du LCL</p>
      </div>
    </div>
  );
}

/* ── Slide 8: Comparaison (ACCESSIBILITE) ── */
function SlideComparaison() {
  return (
    <div className="h-full bg-white flex items-center justify-center px-8">
      <div className="max-w-4xl w-full">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3">COMPARATIF</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-2">Acceder au diplome de sante</h2>
        <p className="text-[#64748b] text-sm mb-8">PASS en France vs Etudes en Europe : la question n&apos;est pas le prix, c&apos;est l&apos;acces</p>
        <div className="grid md:grid-cols-2 gap-6">
          {/* France */}
          <div className="bg-[#f5f5fb] border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">{"\uD83C\uDDEB\uD83C\uDDF7"}</span>
              <h3 className="text-[#1B1D3A] font-bold text-lg">PASS en France</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Concours ultra-selectif (80% d'echec)",
                "Aucune garantie d'obtenir le diplome",
                "2 annees perdues en cas d'echec",
                "Stress intense, impact sur la sante mentale",
                "Nombre de places tres limite (numerus apertus)",
                "Redoublement interdit depuis la reforme",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#334155]">
                  <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 bg-red-50 border border-red-200 rounded-xl p-3 text-center">
              <p className="text-red-700 font-bold text-lg">Acces non garanti</p>
              <p className="text-red-500 text-xs">Meme avec d&apos;excellentes notes au bac</p>
            </div>
          </div>
          {/* Europe */}
          <div className="bg-[#f5f5fb] border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">{"\uD83C\uDDEA\uD83C\uDDFA"}</span>
              <h3 className="text-[#1B1D3A] font-bold text-lg">Europe avec Edumove</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Admission sur dossier ou test (pas de concours)",
                "Diplome garanti si l'etudiant travaille",
                "Pas de temps perdu \u2014 progression chaque annee",
                "Diplome reconnu en France (Directive UE)",
                "Pratique clinique des les premieres annees",
                "Financement 100% possible avec le LCL",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#334155]">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 bg-green-50 border border-green-200 rounded-xl p-3 text-center">
              <p className="text-green-700 font-bold text-lg">Acces garanti</p>
              <p className="text-green-600 text-xs">Admission sur dossier, diplome accessible a tous</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 9: LCL Intro avec photos equipe ── */
function SlideLCLIntro() {
  const team = [
    { name: "Jean-Christophe Thomas", role: "Directeur d'Agence", photo: "/lcl-jc.jpg" },
    { name: "Meriem Guendouz", role: "Conseillere Particuliers", photo: "/lcl-meriem.jpg" },
    { name: "Laura Munoz", role: "Conseillere en Patrimoine", photo: "/lcl-laura.jpg" },
  ];
  return (
    <div className="h-full bg-white flex items-center justify-center px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#615CA5]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#EC680A]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl w-full text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-12" />
          <span className="text-[#334155] text-lg">&times;</span>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#EC680A] flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-[#1B1D3A] font-bold text-xl">Edumove</span>
          </div>
        </div>
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3">PARTENARIAT EXCLUSIF</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-4">Financer vos etudes de sante en Europe</h2>
        <p className="text-[#64748b] text-sm max-w-xl mx-auto mb-8">
          Le LCL accompagne les etudiants Edumove avec une offre de pret etudiant specialement concue pour les etudes de sante a l&apos;etranger. Un partenariat unique en France.
        </p>

        {/* Key partnership stats */}
        <div className="flex justify-center gap-5 mb-8">
          {[
            { value: "75 000 \u20AC", label: "Montant financ\u00e9" },
            { value: "0 \u20AC", label: "Pendant les etudes" },
            { value: "2,01%", label: "TAEG" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-xl px-6 py-4 text-center border border-gray-100">
              <p className="text-[#EC680A] font-bold text-lg">{stat.value}</p>
              <p className="text-[#64748b] text-[11px]">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="text-[#64748b] text-xs uppercase tracking-widest mb-5">Votre equipe dediee</p>
        <div className="flex justify-center gap-8">
          {team.map((person, i) => (
            <div key={i} className="text-center">
              <img
                src={person.photo}
                alt={person.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-3 border-[#EC680A]/30 shadow-lg"
              />
              <p className="text-[#1B1D3A] font-semibold text-sm">{person.name}</p>
              <p className="text-[#94a3b8] text-xs">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Slide 10: Le pret LCL (WHITE BG) ── */
function SlideLCLPret() {
  return (
    <div className="h-full bg-white flex items-center justify-center px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#EC680A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#615CA5]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl w-full relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-6" />
          <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em]">LE PRET ETUDIANT SANTE</p>
        </div>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-8">Un pret pense pour vous</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { value: "75 000 \u20AC", label: "Montant financ\u00e9", sub: "jusqu'\u00e0" },
            { value: "2,01%", label: "TAEG", sub: "Taux pr\u00e9f\u00e9rentiel" },
            { value: "0 \u20AC", label: "\u00C0 rembourser pendant les \u00e9tudes", sub: "Diff\u00e9r\u00e9 total" },
            { value: "120 mois", label: "Dur\u00e9e de remboursement", sub: "jusqu'\u00e0 10 ans" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#f5f5fb] border border-gray-100 rounded-2xl p-5 text-center">
              <p className="text-[#EC680A] text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-[#1B1D3A] text-xs font-medium mb-0.5">{stat.label}</p>
              <p className="text-[#94a3b8] text-[10px]">{stat.sub}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: CheckCircle2, title: "Scolarite 100% financee", desc: "Le pret couvre l'integralite des frais de scolarite, quelle que soit la filiere ou l'universite." },
            { icon: Home, title: "Vie courante incluse", desc: "Logement, alimentation, transports, assurance : tout est integre dans le montant du pret." },
            { icon: Calendar, title: "0 \u20AC a payer pendant les etudes", desc: "Differe total : vous ne commencez a rembourser qu'apres l'obtention de votre diplome." },
            { icon: TrendingUp, title: "Taux \u00e0 2,01% TAEG", desc: "Taux pr\u00e9f\u00e9rentiel n\u00e9goci\u00e9 par Edumove. Remboursement jusqu'\u00e0 120 mois." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[#f5f5fb] border border-gray-100 rounded-2xl p-4">
              <div className="w-9 h-9 rounded-lg bg-[#EC680A]/10 flex items-center justify-center shrink-0">
                <item.icon className="w-4.5 h-4.5 text-[#EC680A]" />
              </div>
              <div>
                <p className="text-[#1B1D3A] font-semibold text-sm mb-0.5">{item.title}</p>
                <p className="text-[#64748b] text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Slide 11: Conditions du pret ── */
function SlideConditions() {
  return (
    <div className="h-full bg-white flex items-center justify-center px-8 relative overflow-hidden">
      <div className="absolute top-[5%] right-[3%] grid grid-cols-4 gap-2 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={`d-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#615CA5]" />
        ))}
      </div>

      <div className="max-w-4xl w-full">
        <div className="flex items-center gap-3 mb-3">
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-6" />
          <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em]">CONDITIONS DU PRET</p>
        </div>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-3">Un pret accessible a tous</h2>
        <p className="text-[#64748b] text-sm mb-8">Des conditions pensees pour les familles, sans barriere financiere</p>

        <div className="grid md:grid-cols-2 gap-5 mb-6">
          {[
            {
              icon: Shield,
              title: "Aucune condition de revenus",
              desc: "Pas de condition sur les revenus parentaux pour l'obtention du pret. Tous les profils sont eligibles.",
              highlight: "Tous eligibles",
            },
            {
              icon: Clock,
              title: "Remboursement differe total",
              desc: "Vous ne remboursez qu'apres votre diplome, une fois en activite professionnelle. 0 \u20AC a payer pendant les etudes.",
              highlight: "0 \u20AC pendant les etudes",
            },
            {
              icon: HandCoins,
              title: "Couverture totale",
              desc: "Le pret couvre les frais de scolarite ET le cout de la vie : logement, alimentation, transports, assurance.",
              highlight: "Scolarite + vie courante",
            },
            {
              icon: Award,
              title: "Flexibilite du pret",
              desc: "En cas de changement de filiere au sein des universites partenaires, le pret reste valide. Pas de penalite.",
              highlight: "Changement de filiere OK",
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#EC680A]/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#EC680A]" />
                </div>
                <div>
                  <p className="text-[#1B1D3A] font-bold text-sm">{item.title}</p>
                  <span className="text-[#EC680A] text-[10px] font-semibold bg-[#EC680A]/10 px-2 py-0.5 rounded-full">{item.highlight}</span>
                </div>
              </div>
              <p className="text-[#64748b] text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-[#1B1D3A] rounded-2xl p-5">
          <p className="text-white/40 text-[10px] uppercase tracking-widest mb-4 text-center">Comment ca marche ?</p>
          <div className="flex items-center justify-between gap-2">
            {[
              { step: "1", label: "Admission confirmee" },
              { step: "2", label: "Dossier de pret avec Edumove" },
              { step: "3", label: "Rendez-vous avec le LCL" },
              { step: "4", label: "Pret accorde" },
              { step: "5", label: "Fonds debloques" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-8 h-8 rounded-full bg-[#EC680A] flex items-center justify-center">
                    <span className="text-white font-bold text-xs">{s.step}</span>
                  </div>
                  <span className="text-white/70 text-[10px] font-medium text-center max-w-[100px]">{s.label}</span>
                </div>
                {i < 4 && (
                  <div className="flex items-center mt-[-16px]">
                    <div className="w-6 h-px bg-[#EC680A]/40" />
                    <ArrowRight className="w-3 h-3 text-[#EC680A]/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 12: Simulations ── */
function SlideLCLSimulation() {
  const cases = [
    {
      name: "Lucas",
      emoji: "\uD83D\uDC68\u200D\u2695\uFE0F",
      filiere: "Dentaire \u2014 UCJC Madrid",
      frais: "9 420",
      duree: "5 ans",
      total: "47 100",
      salaire: "6 000 - 7 000 \u20AC/mois",
      mensualite: "~500 \u20AC/mois",
      ratio: "7-8% du salaire net",
    },
    {
      name: "Sarah",
      emoji: "\uD83D\uDC69\u200D\u2695\uFE0F",
      filiere: "Medecine \u2014 UE Madrid",
      frais: "21 500",
      duree: "6 ans",
      total: "129 000",
      salaire: "4 000 - 6 000 \u20AC/mois",
      mensualite: "~700 \u20AC/mois",
      ratio: "12-17% du salaire net",
    },
  ];
  return (
    <div className="h-full bg-white flex items-center justify-center px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#615CA5]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl w-full relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-5" />
          <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em]">SIMULATIONS CONCRETES</p>
        </div>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-2">Combien ca coute vraiment ?</h2>
        <p className="text-[#64748b] text-sm mb-8">Deux profils reels, deux situations differentes</p>
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-[#1B1D3A] flex items-center justify-center">
                  <span className="text-xl">{c.emoji}</span>
                </div>
                <div>
                  <p className="text-[#1B1D3A] font-bold">{c.name}</p>
                  <p className="text-[#615CA5] text-xs font-medium">{c.filiere}</p>
                </div>
              </div>
              <div className="space-y-2.5 mb-5">
                <div className="flex justify-between text-sm"><span className="text-[#64748b]">Frais / an</span><span className="text-[#1B1D3A] font-semibold">{c.frais} {"\u20AC"}</span></div>
                <div className="flex justify-between text-sm"><span className="text-[#64748b]">Duree</span><span className="text-[#1B1D3A] font-semibold">{c.duree}</span></div>
                <div className="flex justify-between text-sm"><span className="text-[#64748b]">Cout total scolarite</span><span className="text-[#EC680A] font-bold">{c.total} {"\u20AC"}</span></div>
                <div className="h-px bg-gray-200 my-1" />
                <div className="flex justify-between text-sm"><span className="text-[#64748b]">Salaire apres diplome</span><span className="text-[#1B1D3A] font-semibold">{c.salaire}</span></div>
                <div className="flex justify-between text-sm"><span className="text-[#64748b]">Mensualite estimee</span><span className="text-[#1B1D3A] font-semibold">{c.mensualite}</span></div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
                <p className="text-green-700 font-bold text-sm">{c.ratio}</p>
                <p className="text-green-600 text-xs">du salaire net pour rembourser</p>
              </div>
            </div>
          ))}
        </div>
        {/* Bottom callout */}
        <div className="mt-6 bg-[#1B1D3A] rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
            </div>
            <p className="text-white text-sm font-medium">Un investissement rentable — rembourse en quelques annees d&apos;exercice</p>
          </div>
          <p className="text-white/40 text-xs">Simulations indicatives</p>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 13: Aides cumulables (WHITE bg) ── */
function SlideAides() {
  const aides = [
    { name: "Bourse CROUS", amount: "1 000 - 5 000 \u20AC/an", desc: "Selon les revenus de la famille, compatible avec les etudes en Europe", icon: GraduationCap },
    { name: "Aide a la mobilite internationale", amount: "~400 \u20AC/mois", desc: "Pour les boursiers partant etudier a l'etranger (4 mois max)", icon: MapPin },
    { name: "Aide au merite", amount: "~900 \u20AC/an", desc: "Pour les bacheliers mention Tres Bien, cumulable avec la bourse CROUS", icon: Award },
    { name: "Aides regionales", amount: "Variable", desc: "Certaines regions proposent des aides specifiques pour les etudes a l'etranger", icon: Home },
    { name: "CAF / APL", amount: "Variable", desc: "Aides au logement possibles selon le pays et la convention du logement", icon: Building2 },
  ];
  return (
    <div className="h-full bg-white flex items-center justify-center px-8">
      <div className="max-w-4xl w-full">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3">CUMULABLE AVEC LE PRET DU LCL</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-8">Les autres aides disponibles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {aides.map((aide, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-5 border border-gray-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#615CA5]/10 flex items-center justify-center shrink-0">
                <aide.icon className="w-5 h-5 text-[#615CA5]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-[#1B1D3A] font-semibold text-sm">{aide.name}</p>
                  <span className="text-[#EC680A] text-xs font-bold bg-[#EC680A]/10 px-2 py-0.5 rounded-full">{aide.amount}</span>
                </div>
                <p className="text-[#64748b] text-xs leading-relaxed">{aide.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#1B1D3A] rounded-2xl p-5 mt-6 text-center">
          <p className="text-white font-semibold text-sm">Toutes ces aides sont cumulables avec le pret du LCL</p>
          <p className="text-white/50 text-xs mt-1">Edumove vous aide a identifier les aides auxquelles vous avez droit</p>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 14: Temoignage (WHITE bg) ── */
function SlideTemoignage() {
  return (
    <div className="h-full bg-white flex items-center justify-center px-8 relative overflow-hidden">
      <div className="absolute top-[10%] right-[5%] grid grid-cols-4 gap-2 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={`d-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#615CA5]" />
        ))}
      </div>
      <div className="absolute bottom-[10%] left-[3%] grid grid-cols-4 gap-2 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={`d2-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#EC680A]" />
        ))}
      </div>

      <div className="max-w-3xl w-full relative z-10 text-center">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-6">TEMOIGNAGE</p>

        {/* Quote */}
        <div className="relative mb-6">
          <span className="absolute -top-8 -left-4 text-[#EC680A]/10 text-[120px] font-serif leading-none select-none">&ldquo;</span>
          <div className="w-16 h-16 rounded-full bg-[#EC680A] flex items-center justify-center mx-auto mb-6 ring-4 ring-[#EC680A]/20">
            <span className="text-white font-bold text-2xl">L</span>
          </div>
          <blockquote className="text-[#1B1D3A] text-xl md:text-2xl font-medium leading-relaxed mb-6 italic relative z-10">
            &laquo; Le jour ou j&apos;ai dit oui a Edumove, c&apos;est le jour ou tout a change. Aujourd&apos;hui je suis en 3eme annee de dentaire a Madrid, je pratique sur de vrais patients, et je ne regrette absolument rien. &raquo;
          </blockquote>
        </div>

        <p className="text-[#1B1D3A] font-semibold text-lg">Lola</p>
        <p className="text-[#64748b] text-sm mb-8">3eme annee de Dentaire — Universidad Europea de Madrid</p>

        {/* Timeline journey */}
        <div className="bg-[#f5f5fb] border border-gray-100 rounded-2xl p-5">
          <p className="text-[#64748b] text-[10px] uppercase tracking-widest mb-4">Son parcours</p>
          <div className="flex items-center justify-center gap-3">
            {[
              { label: "Bac S mention Bien", icon: "\uD83C\uDF93" },
              { label: "PASS recalee", icon: "\u274C" },
              { label: "Test PE reussi", icon: "\u2705" },
              { label: "Dentaire a Madrid", icon: "\uD83E\uDDB7" },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-1.5">
                  <span className="text-xl">{step.icon}</span>
                  <span className="text-[#1B1D3A] text-xs font-medium">{step.label}</span>
                </div>
                {i < 3 && (
                  <div className="flex items-center">
                    <div className="w-8 h-px bg-[#EC680A]/30" />
                    <ArrowRight className="w-3 h-3 text-[#EC680A]/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="grid grid-cols-3 gap-3 mt-5">
          {[
            { value: "0 \u20AC", label: "Paye pendant ses etudes" },
            { value: "100%", label: "Finance par le LCL" },
            { value: "6 500 \u20AC", label: "Salaire attendu/mois" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-xl p-3 border border-gray-100 text-center">
              <p className="text-[#EC680A] font-bold text-sm">{stat.value}</p>
              <p className="text-[#64748b] text-[10px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Slide 15: Accompagnement Edumove ── */
function SlideAccompagnement() {
  const steps = [
    { num: "1", title: "Premier echange gratuit", desc: "Un conseiller analyse votre profil et votre projet d'etudes de sante", icon: Phone },
    { num: "2", title: "Preparation aux tests", desc: "Cours illimites, annales, simulations (PE ou QCM LINK) avec suivi personnalise", icon: BookOpen },
    { num: "3", title: "Dossier de candidature", desc: "Constitution complete du dossier, suivi jusqu'a l'admission confirmee", icon: FileText },
    { num: "4", title: "Financement", desc: "Montage du dossier de pret avec le LCL, aide aux bourses et identification des aides", icon: Euro },
    { num: "5", title: "Installation sur place", desc: "Aide au logement, traduction de documents, demarches administratives, conseils pratiques", icon: Home },
    { num: "6", title: "Suivi continu", desc: "Accompagnement tout au long du cursus, support en cas de difficulte, communaute etudiante", icon: Heart },
  ];
  return (
    <div className="h-full bg-white flex items-center justify-center px-8">
      <div className="max-w-4xl w-full">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3">DE A A Z</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-3">L&apos;accompagnement Edumove</h2>
        <p className="text-[#64748b] text-sm mb-8">100% gratuit — de l&apos;orientation a l&apos;installation</p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-5 border border-gray-100 relative">
              <div className="absolute -top-3 -left-2 w-7 h-7 rounded-full bg-[#EC680A] flex items-center justify-center">
                <span className="text-white font-bold text-xs">{step.num}</span>
              </div>
              <step.icon className="w-6 h-6 text-[#615CA5] mb-3" />
              <p className="text-[#1B1D3A] font-semibold text-sm mb-1">{step.title}</p>
              <p className="text-[#64748b] text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#1B1D3A] rounded-2xl p-6 flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-lg mb-1">Un accompagnement complet, 100% gratuit</p>
            <p className="text-white/50 text-sm">Edumove ne facture aucun frais supplementaire aux etudiants</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#EC680A] flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 16: Merci / Contact ── */
function SlideMerci() {
  return (
    <div className="h-full bg-white flex items-center justify-center px-8 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#EC680A]/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#615CA5]/8 rounded-full blur-[120px]" />
      <div className="absolute top-[12%] left-[4%] grid grid-cols-4 gap-2.5 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={`tl-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#EC680A]" />
        ))}
      </div>
      <div className="absolute bottom-[12%] right-[4%] grid grid-cols-4 gap-2.5 opacity-15">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={`br-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#615CA5]" />
        ))}
      </div>

      <div className="max-w-3xl w-full text-center relative z-10">
        {/* Logos */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <img src="/edumove-icon-orange.svg" alt="Edumove" className="h-12 w-12" />
          <span className="text-[#1B1D3A]/20 text-xl font-light">&times;</span>
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-10" />
        </div>

        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-4">MERCI</p>
        <h2 className="text-[#1B1D3A] text-4xl md:text-5xl font-extrabold mb-3">Merci pour votre attention !</h2>
        <p className="text-[#64748b] text-base mb-10 max-w-lg mx-auto">
          Vous avez des questions ? C&apos;est le moment ! Notre equipe est la pour y repondre.
        </p>

        {/* Contact cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-[#f5f5fb] rounded-2xl p-5 border border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-[#EC680A]/10 flex items-center justify-center mx-auto mb-3">
              <Phone className="w-5 h-5 text-[#EC680A]" />
            </div>
            <p className="text-[#1B1D3A] font-bold text-sm mb-1">Telephone</p>
            <p className="text-[#EC680A] font-semibold text-lg">01 89 74 42 57</p>
          </div>
          <div className="bg-[#f5f5fb] rounded-2xl p-5 border border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-[#615CA5]/10 flex items-center justify-center mx-auto mb-3">
              <Mail className="w-5 h-5 text-[#615CA5]" />
            </div>
            <p className="text-[#1B1D3A] font-bold text-sm mb-1">Email</p>
            <p className="text-[#615CA5] font-semibold text-sm">admissions@edumove.fr</p>
          </div>
          <div className="bg-[#f5f5fb] rounded-2xl p-5 border border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-[#EC680A]/10 flex items-center justify-center mx-auto mb-3">
              <Globe className="w-5 h-5 text-[#EC680A]" />
            </div>
            <p className="text-[#1B1D3A] font-bold text-sm mb-1">Candidature</p>
            <p className="text-[#EC680A] font-semibold text-sm">candidature.edumove.fr</p>
          </div>
        </div>

        {/* Q&A banner */}
        <div className="bg-[#1B1D3A] rounded-2xl p-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <MessageCircle className="w-6 h-6 text-[#EC680A]" />
            <p className="text-white font-bold text-xl">Questions &amp; Reponses</p>
          </div>
          <p className="text-white/60 text-sm mb-4">N&apos;hesitez pas a poser vos questions dans le chat ou a lever la main</p>
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/70 text-xs">En direct</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-white/40 text-xs">Edumove &amp; LCL a votre ecoute</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN PRESENTATION
   ═══════════════════════════════════════════════════════════════════════ */

const SLIDES = [
  SlideCover,           // 1
  SlideProgramme,       // 2
  SlideQuiSommesNous,   // 3
  SlideConstat,         // 4
  SlideAlternative,     // 5
  SlideFilieres,        // 6
  SlideTarifs,          // 7
  SlideComparaison,     // 8
  SlideLCLIntro,        // 9
  SlideLCLPret,         // 10
  SlideConditions,      // 11
  SlideLCLSimulation,   // 12
  SlideAides,           // 13
  SlideTemoignage,      // 14
  SlideAccompagnement,  // 15
  SlideMerci,           // 16
];

export default function WebinarPresentation() {
  const [authed, setAuthed] = useState(false);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    if (sessionStorage.getItem("pres-auth") === "1") setAuthed(true);
  }, []);

  const goTo = useCallback((idx: number) => {
    if (idx === current || animating) return;
    setDirection(idx > current ? "right" : "left");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setTimeout(() => setAnimating(false), 50);
    }, 200);
  }, [current, animating]);

  const animNext = useCallback(() => goTo(Math.min(current + 1, SLIDES.length - 1)), [current, goTo]);
  const animPrev = useCallback(() => goTo(Math.max(current - 1, 0)), [current, goTo]);

  useEffect(() => {
    if (!authed) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); animNext(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); animPrev(); }
      if (e.key === "f" || e.key === "F") {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [authed, animNext, animPrev]);

  if (!authed) return <PasswordGate onUnlock={() => setAuthed(true)} />;

  const SlideComponent = SLIDES[current];

  return (
    <div className="h-screen w-screen overflow-hidden relative select-none bg-white" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>
      {/* Persistent header — logos only (hidden on cover) */}
      {current > 0 && (
        <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-center gap-4 pt-4 pb-2 pointer-events-none">
          <img src="/edumove-icon-orange.svg" alt="Edumove" className="h-9 w-9" />
          <span className="text-[#1B1D3A]/20 text-sm font-light mix-blend-multiply">&times;</span>
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-8" />
        </div>
      )}

      {/* Slide with animation */}
      <div
        className={`h-full w-full ${current > 0 ? "pt-16" : ""} transition-all duration-300 ease-out`}
        style={{
          opacity: animating ? 0 : 1,
          transform: animating
            ? `translateX(${direction === "right" ? "40px" : "-40px"})`
            : "translateX(0)",
        }}
      >
        <SlideComponent />
      </div>

      {/* Click zones */}
      <div className="absolute inset-y-0 left-0 w-1/5 cursor-pointer z-30" onClick={animPrev} />
      <div className="absolute inset-y-0 right-0 w-1/5 cursor-pointer z-30" onClick={animNext} />

      {/* Navigation arrows */}
      {current > 0 && (
        <button onClick={animPrev} className="absolute left-5 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-[#1B1D3A]/10 backdrop-blur-md border border-gray-200 flex items-center justify-center hover:bg-[#1B1D3A]/20 transition-all group">
          <ChevronLeft className="w-5 h-5 text-[#1B1D3A]/40 group-hover:text-[#1B1D3A]/70 transition-colors" />
        </button>
      )}
      {current < SLIDES.length - 1 && (
        <button onClick={animNext} className="absolute right-5 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-[#1B1D3A]/10 backdrop-blur-md border border-gray-200 flex items-center justify-center hover:bg-[#1B1D3A]/20 transition-all group">
          <ChevronRight className="w-5 h-5 text-[#1B1D3A]/40 group-hover:text-[#1B1D3A]/70 transition-colors" />
        </button>
      )}

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-40">
        <div className="flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-md border-t border-gray-100">
          {/* Slide dots */}
          <div className="flex items-center gap-1.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-[#EC680A]" : "w-2 bg-[#1B1D3A]/15 hover:bg-[#1B1D3A]/30"
                }`}
              />
            ))}
          </div>
          <div className="flex-1" />
          <span className="text-[#1B1D3A]/40 text-xs font-medium tabular-nums">{current + 1} / {SLIDES.length}</span>
          <button
            onClick={() => {
              if (document.fullscreenElement) document.exitFullscreen();
              else document.documentElement.requestFullscreen();
            }}
            className="w-8 h-8 rounded-lg bg-[#1B1D3A]/5 border border-gray-100 flex items-center justify-center hover:bg-[#1B1D3A]/10 transition-all"
            title="Plein ecran (F)"
          >
            <Maximize className="w-3.5 h-3.5 text-[#1B1D3A]/40" />
          </button>
        </div>
      </div>
    </div>
  );
}
