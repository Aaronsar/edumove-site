"use client";

const ANIM_STYLES = `
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes countUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.anim-fade-up {
  animation: fadeUp 0.5s ease-out both;
}
.anim-fade-in {
  animation: fadeIn 0.4s ease-out both;
}
.anim-scale-in {
  animation: scaleIn 0.4s ease-out both;
}
`;

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
        <img src="/edumove-icon-orange.svg" alt="Edumove" className="w-16 h-16 mx-auto mb-6" />
        <h1 className="text-white text-2xl font-bold mb-2">Présentation protégée</h1>
        <p className="text-white/50 text-sm mb-8">Entrez le mot de passe pour accéder aux slides</p>
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
      {/* Top label */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-center gap-1.5 pt-4 pb-2 pointer-events-none">
        <div className="w-2 h-2 rounded-full bg-[#EC680A]" />
        <span className="text-[#1B1D3A]/50 text-xs font-medium tracking-wide">Webinaire Edumove</span>
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        {/* Logos */}
        <div className="flex items-center justify-center gap-8 mb-12 anim-fade-in" style={{ animationDelay: '0.1s' }}>
          <img src="/edumove-icon-orange.svg" alt="Edumove" className="h-20 w-20" />
          <span className="text-[#1B1D3A]/20 text-3xl font-light">&times;</span>
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-16" />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-[#1B1D3A] anim-fade-up" style={{ animationDelay: '0.2s' }}>
          Financer ses études<br />
          <span className="text-[#EC680A]">de santé en Europe</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#64748b] text-lg mb-10 anim-fade-up" style={{ animationDelay: '0.3s' }}>
          Accompagnement complet. Financement jusqu&apos;à 100%.
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-10 mb-10 anim-fade-up" style={{ animationDelay: '0.4s' }}>
          {[
            { value: "3", label: "Universités" },
            { value: "5", label: "Filières" },
            { value: "100%", label: "Finançable" },
          ].map((stat, i) => (
            <div key={i} className="text-center anim-fade-up" style={{ animationDelay: `${0.4 + i * 0.08}s` }}>
              <p className="text-[#EC680A] text-3xl md:text-4xl font-extrabold">{stat.value}</p>
              <p className="text-[#94a3b8] text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* LCL badge */}
        <div className="inline-flex items-center gap-3 bg-[#1B1D3A] px-7 py-3.5 rounded-full anim-scale-in" style={{ animationDelay: '0.5s' }}>
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-6 brightness-200" />
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
    { icon: GraduationCap, label: "L'alternative européenne" },
    { icon: Euro, label: "Combien ça coûte ?" },
    { icon: Building2, label: "Le prêt étudiant du LCL", highlight: true },
    { icon: HandCoins, label: "Les aides cumulables" },
    { icon: Heart, label: "L'accompagnement Edumove" },
    { icon: HelpCircle, label: "Questions / Réponses" },
  ];
  return (
    <div className="h-full bg-gradient-to-br from-[#eeedf5] via-[#f9f5f0] to-[#fdecd8] flex items-center justify-center px-8 pt-16">
      <div className="max-w-4xl w-full">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3 anim-fade-up" style={{ animationDelay: '0.1s' }}>AU PROGRAMME</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-8 anim-fade-up" style={{ animationDelay: '0.2s' }}>1 heure pour tout comprendre</h2>
        <div className="grid grid-cols-2 gap-2.5">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 p-3.5 rounded-xl transition-all anim-scale-in ${
                item.highlight
                  ? "bg-[#1B1D3A] text-white"
                  : "bg-[#f5f5fb] border border-gray-100"
              }`}
              style={{ animationDelay: `${0.3 + i * 0.08}s` }}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                  item.highlight ? "bg-[#EC680A] text-white" : "bg-white text-[#1B1D3A] border border-gray-100"
                }`}
              >
                {i + 1}
              </div>
              <item.icon className={`w-4.5 h-4.5 shrink-0 ${item.highlight ? "text-[#EC680A]" : "text-[#615CA5]"}`} />
              <span className={`flex-1 font-medium text-sm ${item.highlight ? "text-white" : "text-[#1B1D3A]"}`}>
                {item.label}
              </span>
              {item.highlight && (
                <span className="text-xs font-medium text-[#EC680A] bg-[#EC680A]/10 px-2 py-0.5 rounded-full shrink-0">LCL</span>
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
    <div className="h-full bg-gradient-to-br from-[#eeedf5] via-[#f9f5f0] to-[#fdecd8] flex items-center justify-center px-8 pt-16 relative overflow-hidden">
      <div className="absolute bottom-[8%] left-[3%] grid grid-cols-4 gap-2 opacity-25">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={`d-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#EC680A]" />
        ))}
      </div>

      <div className="max-w-4xl w-full">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-2 anim-fade-up" style={{ animationDelay: '0.1s' }}>QUI SOMMES-NOUS</p>
        <h2 className="text-[#1B1D3A] text-2xl md:text-3xl font-bold mb-2 anim-fade-up" style={{ animationDelay: '0.2s' }}>
          Edumove, N&deg;1 de l&apos;accompagnement en études de santé en Europe
        </h2>
        <p className="text-[#64748b] text-sm mb-4 max-w-2xl anim-fade-up" style={{ animationDelay: '0.3s' }}>
          Depuis 2019, Edumove accompagne les étudiants français vers des études de santé en Espagne et en Italie.
          Notre mission : rendre accessible le diplôme de santé à tous les étudiants motivés, quel que soit leur résultat au PASS.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-3 mb-4 anim-fade-up" style={{ animationDelay: '0.35s' }}>
          {[
            { value: "+500", label: "Étudiants accompagnés" },
            { value: "3", label: "Universités partenaires" },
            { value: "5", label: "Filières de santé" },
            { value: "2019", label: "Année de création" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-4 text-center border border-gray-100 anim-scale-in" style={{ animationDelay: `${0.35 + i * 0.08}s` }}>
              <p className="text-[#EC680A] text-xl font-bold mb-0.5">{stat.value}</p>
              <p className="text-[#334155] text-xs">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* What we do */}
        <div className="grid md:grid-cols-3 gap-3 mb-4 anim-fade-up" style={{ animationDelay: '0.5s' }}>
          {[
            { icon: GraduationCap, title: "Orientation", desc: "Analyse du profil, choix de la filière et de l'université adaptée à chaque étudiant" },
            { icon: BookOpen, title: "Préparation", desc: "Cours de préparation aux tests d'admission, annales, simulations d'entretien" },
            { icon: Globe, title: "Installation", desc: "Aide au logement, démarches administratives, intégration sur place" },
          ].map((item, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-4 border border-gray-100 anim-scale-in" style={{ animationDelay: `${0.5 + i * 0.08}s` }}>
              <div className="w-8 h-8 rounded-lg bg-[#615CA5]/10 flex items-center justify-center mb-2">
                <item.icon className="w-4 h-4 text-[#615CA5]" />
              </div>
              <p className="text-[#1B1D3A] font-semibold text-sm mb-0.5">{item.title}</p>
              <p className="text-[#64748b] text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="bg-[#1B1D3A] rounded-2xl p-4 flex items-center justify-between anim-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-3">
            <img src="/edumove-icon-orange.svg" alt="Edumove" className="w-9 h-9 rounded-lg" />
            <div>
              <p className="text-white font-bold text-sm">Accompagnement 100% gratuit</p>
              <p className="text-white/50 text-xs">De l&apos;orientation à l&apos;installation, sans frais supplémentaires</p>
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
    <div className="h-full bg-gradient-to-br from-[#eeedf5] via-[#f9f5f0] to-[#fdecd8] flex items-center justify-center px-8 pt-16 relative overflow-hidden">
      <div className="absolute bottom-[10%] left-[3%] grid grid-cols-4 gap-2 opacity-30">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={`bl-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#1B1D3A]" />
        ))}
      </div>

      <div className="max-w-4xl w-full">
        <div className="flex items-start justify-between mb-10">
          <div className="max-w-md">
            <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3 anim-fade-up" style={{ animationDelay: '0.1s' }}>LE CONSTAT</p>
            <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-3 anim-fade-up" style={{ animationDelay: '0.2s' }}>Le PASS/LAS en France</h2>
            <p className="text-[#64748b] text-sm leading-relaxed anim-fade-up" style={{ animationDelay: '0.3s' }}>
              Un concours unique qui élimine des étudiants brillants. Aucune garantie d&apos;accès au diplôme, quelle que soit la motivation.
            </p>
          </div>
          <div className="bg-[#1B1D3A] rounded-2xl px-8 py-5 text-center shrink-0 anim-scale-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-[#EC680A] text-5xl font-extrabold leading-none">80%</p>
            <p className="text-white/60 text-sm mt-2">n&apos;accèdent pas au diplôme</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5 mb-8 anim-fade-up" style={{ animationDelay: '0.4s' }}>
          {[
            { value: "60 000+", label: "Étudiants inscrits en PASS chaque année" },
            { value: "80%", label: "Éliminés dès la première année" },
            { value: "2 ans", label: "Perdus en moyenne par les recalés" },
            { value: "0%", label: "Garantie de résultat malgré l'investissement" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-5 text-center border border-gray-100 anim-scale-in" style={{ animationDelay: `${0.4 + i * 0.08}s` }}>
              <p className="text-[#EC680A] text-2xl font-bold mb-2">{stat.value}</p>
              <p className="text-[#334155] text-xs leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#1B1D3A] rounded-2xl p-6 flex items-center justify-between anim-fade-up" style={{ animationDelay: '0.6s' }}>
          <div>
            <p className="text-white font-bold text-lg mb-1">Il existe une alternative.</p>
            <p className="text-white/50 text-sm">Études de santé en Europe — admission sur dossier, diplôme reconnu en France.</p>
          </div>
          <div className="flex items-center gap-2 bg-[#EC680A] px-5 py-2.5 rounded-xl shrink-0">
            <span className="text-white font-semibold text-sm">Découvrir &rarr;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 5: L'alternative européenne ── */
function SlideAlternative() {
  const unis = [
    { name: "Universidad Europea", flag: "\uD83C\uDDEA\uD83C\uDDF8", location: "5 campus en Espagne", desc: "Madrid, Malaga, Valence, Alicante, Canaries", since: "Depuis 2019", students: "+300" },
    { name: "UCJC Madrid", flag: "\uD83C\uDDEA\uD83C\uDDF8", location: "Madrid", desc: "Admission sur entretien, la plus accessible", since: "Depuis 2021", students: "+100" },
    { name: "LINK Campus", flag: "\uD83C\uDDEE\uD83C\uDDF9", location: "Rome", desc: "Test d'admission 100% en français", since: "Depuis 2020", students: "+150" },
  ];
  return (
    <div className="h-full bg-gradient-to-br from-[#eeedf5] via-[#f9f5f0] to-[#fdecd8] flex items-center justify-center px-8 pt-16">
      <div className="max-w-4xl w-full">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3 anim-fade-up" style={{ animationDelay: '0.1s' }}>L&apos;ALTERNATIVE</p>
            <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold anim-fade-up" style={{ animationDelay: '0.2s' }}>Nos universités partenaires</h2>
          </div>
          <p className="text-[#64748b] text-sm max-w-xs text-right anim-fade-up" style={{ animationDelay: '0.3s' }}>
            Admission sur dossier ou test. Diplôme reconnu en France (Directive 2005/36/CE).
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {unis.map((u, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-5 border border-gray-100 anim-scale-in" style={{ animationDelay: `${0.3 + i * 0.08}s` }}>
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
                <span className="text-[#1B1D3A] text-xs font-semibold">{u.students} étudiants</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner with stats */}
        <div className="bg-[#f5f5fb] rounded-2xl p-5 flex items-center justify-between border border-gray-100 anim-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-8">
            {[
              { value: "3", label: "Universités" },
              { value: "5", label: "Filières de santé" },
              { value: "2", label: "Pays européens" },
              { value: "+500", label: "Étudiants accompagnés" },
            ].map((stat, i) => (
              <div key={i} className="text-center anim-fade-up" style={{ animationDelay: `${0.5 + i * 0.06}s` }}>
                <p className="text-[#EC680A] text-xl font-bold">{stat.value}</p>
                <p className="text-[#64748b] text-[10px]">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-[#EC680A] px-4 py-2 rounded-xl shrink-0">
            <span className="text-white font-semibold text-xs">100% finançable</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 6: Les filières ── */
function SlideFilieres() {
  const filieres = [
    {
      icon: Stethoscope,
      name: "Médecine",
      duree: "6 ans",
      desc: "Formation complète en médecine générale. Possibilité de se spécialiser ensuite en France via les ECN.",
      debouches: "Généraliste, spécialiste, chirurgien",
    },
    {
      icon: Bone,
      name: "Dentaire",
      duree: "5-6 ans",
      desc: "Pratique clinique dès la 3ème année sur de vrais patients. Diplôme reconnu dans toute l'UE.",
      debouches: "Chirurgien-dentiste, orthodontiste",
    },
    {
      icon: Heart,
      name: "Kinésithérapie",
      duree: "3-4 ans",
      desc: "Formation axée sur la pratique. Stages cliniques intégrés et équipements de pointe.",
      debouches: "Kiné libéral, sport, rééducation",
    },
    {
      icon: Pill,
      name: "Pharmacie",
      duree: "5 ans",
      desc: "Sciences pharmaceutiques, chimie médicale et stages en officine. Diplôme européen reconnu.",
      debouches: "Officine, industrie, hôpital",
    },
    {
      icon: Dog,
      name: "Vétérinaire",
      duree: "5 ans",
      desc: "Médecine vétérinaire complète avec accès à des cliniques universitaires modernes.",
      debouches: "Cabinet, industrie, recherche",
    },
  ];
  return (
    <div className="h-full bg-gradient-to-br from-[#eeedf5] via-[#f9f5f0] to-[#fdecd8] flex items-center justify-center px-8 pt-16">
      <div className="max-w-4xl w-full">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3 anim-fade-up" style={{ animationDelay: '0.1s' }}>LES FILIÈRES</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-2 anim-fade-up" style={{ animationDelay: '0.2s' }}>5 filières de santé accessibles</h2>
        <p className="text-[#64748b] text-sm mb-8 anim-fade-up" style={{ animationDelay: '0.3s' }}>Toutes reconnues en France via la Directive européenne 2005/36/CE</p>

        <div className="grid grid-cols-5 gap-3 mb-6">
          {filieres.map((f, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-4 border border-gray-100 flex flex-col anim-scale-in" style={{ animationDelay: `${0.3 + i * 0.08}s` }}>
              <div className="w-10 h-10 rounded-xl bg-[#615CA5]/10 flex items-center justify-center mb-3">
                <f.icon className="w-5 h-5 text-[#615CA5]" />
              </div>
              <p className="text-[#1B1D3A] font-bold text-sm mb-0.5">{f.name}</p>
              <p className="text-[#EC680A] text-xs font-semibold mb-2">{f.duree}</p>
              <p className="text-[#64748b] text-[10px] leading-relaxed mb-3 flex-1">{f.desc}</p>
              <div className="bg-white rounded-lg px-2 py-1.5 border border-gray-100">
                <p className="text-[#334155] text-[10px]"><span className="font-semibold">Débouchés :</span> {f.debouches}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="bg-[#1B1D3A] rounded-2xl p-5 flex items-center justify-between anim-fade-up" style={{ animationDelay: '0.6s' }}>
          <div>
            <p className="text-white font-bold text-sm">Toutes les filières sont 100% finançables</p>
            <p className="text-white/50 text-xs">Prêt étudiant du LCL + aides cumulables</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-[#EC680A] font-bold text-lg">100%</p>
              <p className="text-white/40 text-[10px]">Finançable</p>
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
    { filiere: "Médecine", ucjc: "15 000", ue: "21 500", link: "19 800", duree: "6 ans" },
    { filiere: "Dentaire", ucjc: "9 420", ue: "18 900", link: "19 800", duree: "5-6 ans" },
    { filiere: "Kiné", ucjc: "9 420", ue: "14 580", link: "7 900", duree: "3-4 ans" },
    { filiere: "Pharmacie", ucjc: "9 420", ue: "15 000", link: "7 900", duree: "5 ans" },
    { filiere: "Vétérinaire", ucjc: "\u2014", ue: "17 340", link: "\u2014", duree: "5 ans" },
  ];
  return (
    <div className="h-full bg-gradient-to-br from-[#eeedf5] via-[#f9f5f0] to-[#fdecd8] flex items-center justify-center px-8 pt-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#EC680A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#615CA5]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl w-full relative z-10">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3 anim-fade-up" style={{ animationDelay: '0.1s' }}>LES FRAIS</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-2 anim-fade-up" style={{ animationDelay: '0.2s' }}>Combien coûtent les études ?</h2>
        <p className="text-[#64748b] text-sm mb-8 anim-fade-up" style={{ animationDelay: '0.3s' }}>Frais de scolarité annuels par université et par filière</p>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden anim-scale-in" style={{ animationDelay: '0.35s' }}>
          <table className="w-full">
            <thead>
              <tr className="bg-[#1B1D3A] text-white">
                <th className="px-5 py-4 text-left text-sm font-semibold">Filière</th>
                <th className="px-5 py-4 text-center text-sm font-semibold">{"\uD83C\uDDEA\uD83C\uDDF8"} UCJC</th>
                <th className="px-5 py-4 text-center text-sm font-semibold">{"\uD83C\uDDEA\uD83C\uDDF8"} UE</th>
                <th className="px-5 py-4 text-center text-sm font-semibold">{"\uD83C\uDDEE\uD83C\uDDF9"} LINK</th>
                <th className="px-5 py-4 text-center text-sm font-semibold">Durée</th>
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
        <div className="grid grid-cols-3 gap-4 mt-6 anim-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-center anim-scale-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-[#EC680A] text-xl font-bold">dès 7 900 {"\u20AC"}</p>
            <p className="text-[#64748b] text-xs mt-1">Tarif le plus bas / an</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-center anim-scale-in" style={{ animationDelay: '0.58s' }}>
            <p className="text-[#615CA5] text-xl font-bold">100%</p>
            <p className="text-[#64748b] text-xs mt-1">Finançable via le prêt du LCL</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-center anim-scale-in" style={{ animationDelay: '0.66s' }}>
            <p className="text-[#1B1D3A] text-xl font-bold">0 {"\u20AC"} d&apos;acompte</p>
            <p className="text-[#64748b] text-xs mt-1">Remboursement après le diplôme</p>
          </div>
        </div>
        <p className="text-center text-[#94a3b8] text-xs mt-4 anim-fade-in" style={{ animationDelay: '0.7s' }}>Tarifs 2026 — Tous les frais sont éligibles au prêt étudiant du LCL</p>
      </div>
    </div>
  );
}

/* ── Slide 8: Comparaison (ACCESSIBILITÉ) ── */
function SlideComparaison() {
  return (
    <div className="h-full bg-gradient-to-br from-[#eeedf5] via-[#f9f5f0] to-[#fdecd8] flex items-center justify-center px-8 pt-16">
      <div className="max-w-4xl w-full">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3 anim-fade-up" style={{ animationDelay: '0.1s' }}>COMPARATIF</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-2 anim-fade-up" style={{ animationDelay: '0.2s' }}>Accéder au diplôme de santé</h2>
        <p className="text-[#64748b] text-sm mb-8 anim-fade-up" style={{ animationDelay: '0.3s' }}>PASS en France vs Études en Europe : la question n&apos;est pas le prix, c&apos;est l&apos;accès</p>
        <div className="grid md:grid-cols-2 gap-6">
          {/* France */}
          <div className="bg-[#f5f5fb] border border-gray-200 rounded-2xl p-6 anim-scale-in" style={{ animationDelay: '0.35s' }}>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">{"\uD83C\uDDEB\uD83C\uDDF7"}</span>
              <h3 className="text-[#1B1D3A] font-bold text-lg">PASS en France</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Concours ultra-sélectif (80% d'échec)",
                "Aucune garantie d'obtenir le diplôme",
                "2 années perdues en cas d'échec",
                "Stress intense, impact sur la santé mentale",
                "Nombre de places très limité (numerus apertus)",
                "Redoublement interdit depuis la réforme",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#334155]">
                  <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 bg-red-50 border border-red-200 rounded-xl p-3 text-center">
              <p className="text-red-700 font-bold text-lg">Accès non garanti</p>
              <p className="text-red-500 text-xs">Même avec d&apos;excellentes notes au bac</p>
            </div>
          </div>
          {/* Europe */}
          <div className="bg-[#f5f5fb] border border-gray-200 rounded-2xl p-6 anim-scale-in" style={{ animationDelay: '0.43s' }}>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">{"\uD83C\uDDEA\uD83C\uDDFA"}</span>
              <h3 className="text-[#1B1D3A] font-bold text-lg">Europe avec Edumove</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Admission sur dossier ou test (pas de concours)",
                "Diplôme garanti si l'étudiant travaille",
                "Pas de temps perdu \u2014 progression chaque année",
                "Diplôme reconnu en France (Directive UE)",
                "Pratique clinique dès les premières années",
                "Financement 100% possible avec le LCL",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#334155]">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 bg-green-50 border border-green-200 rounded-xl p-3 text-center">
              <p className="text-green-700 font-bold text-lg">Accès garanti</p>
              <p className="text-green-600 text-xs">Admission sur dossier, diplôme accessible à tous</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 9: LCL Intro avec photos équipe ── */
function SlideLCLIntro() {
  const team = [
    { name: "Jean-Christophe Thomas", role: "Directeur d'Agence", photo: "/lcl-jc.jpg" },
    { name: "Meriem Guendouz", role: "Conseillère Particuliers", photo: "/lcl-laura.jpg" },
    { name: "Laura Munoz", role: "Conseillère en Patrimoine", photo: "/lcl-meriem.jpg" },
  ];
  return (
    <div className="h-full bg-gradient-to-br from-[#eeedf5] via-[#f9f5f0] to-[#fdecd8] flex items-center justify-center px-8 pt-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#615CA5]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#EC680A]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl w-full text-center relative z-10">
        <div className="flex items-center justify-center gap-6 mb-6 anim-fade-in" style={{ animationDelay: '0.1s' }}>
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-16" />
          <span className="text-[#334155] text-2xl">&times;</span>
          <div className="flex items-center gap-3">
            <img src="/edumove-icon-orange.svg" alt="Edumove" className="w-14 h-14 rounded-xl" />
            <span className="text-[#1B1D3A] font-bold text-2xl">Edumove</span>
          </div>
        </div>
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3 anim-fade-up" style={{ animationDelay: '0.2s' }}>PARTENARIAT EXCLUSIF</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-4 anim-fade-up" style={{ animationDelay: '0.3s' }}>Financer vos études de santé en Europe</h2>
        <p className="text-[#64748b] text-sm max-w-xl mx-auto mb-8 anim-fade-up" style={{ animationDelay: '0.4s' }}>
          Le LCL accompagne les étudiants Edumove avec une offre de prêt étudiant spécialement conçue pour les études de santé à l&apos;étranger. Un partenariat unique en France.
        </p>

        {/* Key partnership stats */}
        <div className="flex justify-center gap-5 mb-8 anim-fade-up" style={{ animationDelay: '0.45s' }}>
          {[
            { value: "75 000 \u20AC", label: "Minimum garanti" },
            { value: "0 \u20AC", label: "Pendant les études" },
            { value: "2,01%", label: "TAEG" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-xl px-6 py-4 text-center border border-gray-100 anim-scale-in" style={{ animationDelay: `${0.45 + i * 0.08}s` }}>
              <p className="text-[#EC680A] font-bold text-lg">{stat.value}</p>
              <p className="text-[#64748b] text-[11px]">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="text-[#64748b] text-xs uppercase tracking-widest mb-5 anim-fade-up" style={{ animationDelay: '0.55s' }}>Votre équipe dédiée</p>
        <div className="flex justify-center gap-8">
          {team.map((person, i) => (
            <div key={i} className="text-center anim-scale-in" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
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

/* ── Slide 10: Le prêt LCL (WHITE BG) ── */
function SlideLCLPret() {
  return (
    <div className="h-full bg-gradient-to-br from-[#eeedf5] via-[#f9f5f0] to-[#fdecd8] flex items-center justify-center px-8 pt-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#EC680A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#615CA5]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl w-full relative z-10">
        <div className="flex items-center gap-3 mb-3 anim-fade-in" style={{ animationDelay: '0.1s' }}>
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-6" />
          <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em]">LE PRÊT ÉTUDIANT SANTÉ</p>
        </div>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-8 anim-fade-up" style={{ animationDelay: '0.2s' }}>Un prêt pensé pour vous</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { value: "75 000 \u20AC", label: "Minimum garanti", sub: "\u00e0 partir de" },
            { value: "2,01%", label: "TAEG", sub: "Taux pr\u00e9f\u00e9rentiel" },
            { value: "0 \u20AC", label: "\u00C0 rembourser pendant les \u00e9tudes", sub: "Diff\u00e9r\u00e9 total" },
            { value: "120 mois", label: "Dur\u00e9e de remboursement", sub: "jusqu'\u00e0 10 ans" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#f5f5fb] border border-gray-100 rounded-2xl p-5 text-center anim-scale-in" style={{ animationDelay: `${0.3 + i * 0.08}s` }}>
              <p className="text-[#EC680A] text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-[#1B1D3A] text-xs font-medium mb-0.5">{stat.label}</p>
              <p className="text-[#94a3b8] text-[10px]">{stat.sub}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4 anim-fade-up" style={{ animationDelay: '0.5s' }}>
          {[
            { icon: CheckCircle2, title: "Scolarité 100% financée", desc: "Le prêt couvre l'intégralité des frais de scolarité, quelle que soit la filière ou l'université." },
            { icon: Home, title: "Vie courante incluse", desc: "Logement, alimentation, transports, assurance : tout est intégré dans le montant du prêt." },
            { icon: Calendar, title: "0 \u20AC à payer pendant les études", desc: "Différé total : vous ne commencez à rembourser qu'après l'obtention de votre diplôme." },
            { icon: TrendingUp, title: "Taux \u00e0 2,01% TAEG", desc: "Taux pr\u00e9f\u00e9rentiel n\u00e9goci\u00e9 par Edumove. Remboursement jusqu'\u00e0 120 mois." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[#f5f5fb] border border-gray-100 rounded-2xl p-4 anim-scale-in" style={{ animationDelay: `${0.5 + i * 0.08}s` }}>
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

/* ── Slide 11: Conditions du prêt ── */
function SlideConditions() {
  return (
    <div className="h-full bg-gradient-to-br from-[#eeedf5] via-[#f9f5f0] to-[#fdecd8] flex items-center justify-center px-8 pt-16 relative overflow-hidden">
      <div className="absolute top-[5%] right-[3%] grid grid-cols-4 gap-2 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={`d-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#615CA5]" />
        ))}
      </div>

      <div className="max-w-4xl w-full">
        <div className="flex items-center gap-3 mb-3 anim-fade-in" style={{ animationDelay: '0.1s' }}>
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-6" />
          <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em]">CONDITIONS DU PRÊT</p>
        </div>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-3 anim-fade-up" style={{ animationDelay: '0.2s' }}>Un prêt accessible à tous</h2>
        <p className="text-[#64748b] text-sm mb-8 anim-fade-up" style={{ animationDelay: '0.3s' }}>Des conditions pensées pour les familles, sans barrière financière</p>

        <div className="grid md:grid-cols-2 gap-5 mb-6">
          {[
            {
              icon: Shield,
              title: "Aucune condition de revenus",
              desc: "Pas de condition sur les revenus parentaux pour l'obtention du prêt. Tous les profils sont éligibles.",
              highlight: "Tous éligibles",
            },
            {
              icon: Clock,
              title: "Remboursement différé total",
              desc: "Vous ne remboursez qu'après votre diplôme, une fois en activité professionnelle. 0 \u20AC à payer pendant les études.",
              highlight: "0 \u20AC pendant les études",
            },
            {
              icon: HandCoins,
              title: "Couverture totale",
              desc: "Le prêt couvre les frais de scolarité ET le coût de la vie : logement, alimentation, transports, assurance.",
              highlight: "Scolarité + vie courante",
            },
            {
              icon: Award,
              title: "Flexibilité du prêt",
              desc: "En cas de changement de filière au sein des universités partenaires, le prêt reste valide. Pas de pénalité.",
              highlight: "Changement de filière OK",
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-6 border border-gray-100 anim-scale-in" style={{ animationDelay: `${0.35 + i * 0.08}s` }}>
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
        <div className="bg-[#1B1D3A] rounded-2xl p-5 anim-fade-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-white/40 text-[10px] uppercase tracking-widest mb-4 text-center">Comment ça marche ?</p>
          <div className="flex items-center justify-between gap-2">
            {[
              { step: "1", label: "Admission confirmée" },
              { step: "2", label: "Dossier de prêt avec Edumove" },
              { step: "3", label: "Rendez-vous avec le LCL" },
              { step: "4", label: "Prêt accordé" },
              { step: "5", label: "Fonds débloqués" },
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
      filiere: "Dentaire \u2014 UCJC à Madrid",
      frais: "9 420",
      duree: "5 ans",
      totalScolarite: "47 100",
      vieCourante: "~25 000",
      totalFinance: "~72 000",
      pretLCL: "75 000",
      differe: "5 ans",
      salaire: "6 000 - 7 000",
      mensualite: "~500",
      dureeRemb: "120 mois",
      ratio: "7-8%",
      retour: "~6 ans",
    },
    {
      name: "Sarah",
      emoji: "\uD83D\uDC69\u200D\u2695\uFE0F",
      filiere: "Médecine \u2014 UE Madrid",
      frais: "21 500",
      duree: "6 ans",
      totalScolarite: "129 000",
      vieCourante: "~30 000",
      totalFinance: "~159 000",
      pretLCL: "75 000",
      differe: "6 ans",
      salaire: "4 000 - 6 000",
      mensualite: "~700",
      dureeRemb: "120 mois",
      ratio: "12-17%",
      retour: "~8 ans",
    },
  ];
  return (
    <div className="h-full bg-gradient-to-br from-[#eeedf5] via-[#f9f5f0] to-[#fdecd8] flex items-center justify-center px-8 pt-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#615CA5]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl w-full relative z-10">
        <div className="flex items-center gap-3 mb-3 anim-fade-in" style={{ animationDelay: '0.1s' }}>
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-5" />
          <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em]">SIMULATIONS CONCRÈTES</p>
        </div>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-2 anim-fade-up" style={{ animationDelay: '0.2s' }}>Combien ça coûte vraiment ?</h2>
        <p className="text-[#64748b] text-sm mb-6 anim-fade-up" style={{ animationDelay: '0.3s' }}>Deux profils réels avec le prêt du LCL à 2,01% TAEG</p>
        <div className="grid md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-5 border border-gray-100 anim-scale-in" style={{ animationDelay: `${0.35 + i * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-[#1B1D3A] flex items-center justify-center">
                  <span className="text-lg">{c.emoji}</span>
                </div>
                <div>
                  <p className="text-[#1B1D3A] font-bold text-sm">{c.name}</p>
                  <p className="text-[#615CA5] text-xs font-medium">{c.filiere}</p>
                </div>
              </div>

              {/* Coûts */}
              <p className="text-[#94a3b8] text-[10px] uppercase tracking-wider mb-2">Coût des études</p>
              <div className="space-y-1.5 mb-3">
                <div className="flex justify-between text-xs"><span className="text-[#64748b]">Scolarité ({c.frais} {"\u20AC"}/an × {c.duree})</span><span className="text-[#1B1D3A] font-semibold">{c.totalScolarite} {"\u20AC"}</span></div>
                <div className="flex justify-between text-xs"><span className="text-[#64748b]">Vie courante estimée</span><span className="text-[#1B1D3A] font-semibold">{c.vieCourante} {"\u20AC"}</span></div>
              </div>

              {/* Prêt LCL */}
              <div className="bg-[#1B1D3A] rounded-xl p-3 mb-3">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-white/60 text-xs">Prêt du LCL</span>
                  <span className="text-[#EC680A] font-bold text-sm">à partir de {c.pretLCL} {"\u20AC"}</span>
                </div>
                <div className="flex gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EC680A]" />
                    <span className="text-white/50 text-[10px]">Différé {c.differe}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EC680A]" />
                    <span className="text-white/50 text-[10px]">2,01% TAEG</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EC680A]" />
                    <span className="text-white/50 text-[10px]">0 {"\u20AC"} pendant les études</span>
                  </div>
                </div>
              </div>

              {/* Après diplôme */}
              <p className="text-[#94a3b8] text-[10px] uppercase tracking-wider mb-2">Après le diplôme</p>
              <div className="space-y-1.5 mb-3">
                <div className="flex justify-between text-xs"><span className="text-[#64748b]">Salaire net estimé</span><span className="text-[#1B1D3A] font-semibold">{c.salaire} {"\u20AC"}/mois</span></div>
                <div className="flex justify-between text-xs"><span className="text-[#64748b]">Mensualité de remboursement</span><span className="text-[#1B1D3A] font-semibold">{c.mensualite} {"\u20AC"}/mois</span></div>
              </div>

              {/* Résultat */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-2.5 flex items-center justify-between">
                <div>
                  <p className="text-green-700 font-bold text-xs">{c.ratio} du salaire</p>
                  <p className="text-green-600 text-[10px]">pour rembourser</p>
                </div>
                <div className="text-right">
                  <p className="text-green-700 font-bold text-xs">Rentabilisé en {c.retour}</p>
                  <p className="text-green-600 text-[10px]">d&apos;exercice</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Bottom callout */}
        <div className="mt-4 bg-[#1B1D3A] rounded-xl p-3.5 flex items-center justify-between anim-fade-up" style={{ animationDelay: '0.55s' }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <p className="text-white text-sm font-medium">Un investissement rentable</p>
              <p className="text-white/40 text-xs">Le prêt se rembourse facilement une fois en activité</p>
            </div>
          </div>
          <p className="text-white/30 text-[10px]">*Simulations indicatives basées sur le taux de 2,01% TAEG</p>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 13: Aides cumulables (WHITE bg) ── */
function SlideAides() {
  const aides = [
    { name: "Bourse CROUS", amount: "1 000 - 5 000 \u20AC/an", desc: "Selon les revenus de la famille, compatible avec les études en Europe", icon: GraduationCap },
    { name: "Aide à la mobilité internationale", amount: "~400 \u20AC/mois", desc: "Pour les boursiers partant étudier à l'étranger (4 mois max)", icon: MapPin },
    { name: "Aide au mérite", amount: "~900 \u20AC/an", desc: "Pour les bacheliers mention Très Bien, cumulable avec la bourse CROUS", icon: Award },
    { name: "Aides régionales", amount: "Variable", desc: "Certaines régions proposent des aides spécifiques pour les études à l'étranger", icon: Home },
    { name: "CAF / APL", amount: "Variable", desc: "Aides au logement possibles selon le pays et la convention du logement", icon: Building2 },
  ];
  return (
    <div className="h-full bg-gradient-to-br from-[#eeedf5] via-[#f9f5f0] to-[#fdecd8] flex items-center justify-center px-8 pt-16">
      <div className="max-w-4xl w-full">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3 anim-fade-up" style={{ animationDelay: '0.1s' }}>CUMULABLE AVEC LE PRÊT DU LCL</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-8 anim-fade-up" style={{ animationDelay: '0.2s' }}>Les autres aides disponibles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {aides.map((aide, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-5 border border-gray-100 flex items-start gap-4 anim-scale-in" style={{ animationDelay: `${0.3 + i * 0.08}s` }}>
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
        <div className="bg-[#1B1D3A] rounded-2xl p-5 mt-6 text-center anim-fade-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-white font-semibold text-sm">Toutes ces aides sont cumulables avec le prêt du LCL</p>
          <p className="text-white/50 text-xs mt-1">Edumove vous aide à identifier les aides auxquelles vous avez droit</p>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 14: Témoignage (WHITE bg) ── */
function SlideTemoignage() {
  return (
    <div className="h-full bg-gradient-to-br from-[#eeedf5] via-[#f9f5f0] to-[#fdecd8] flex items-center justify-center px-8 pt-16 relative overflow-hidden">
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
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-6 anim-fade-up" style={{ animationDelay: '0.1s' }}>TÉMOIGNAGE</p>

        {/* Quote */}
        <div className="relative mb-6">
          <span className="absolute -top-8 -left-4 text-[#EC680A]/10 text-[120px] font-serif leading-none select-none">&ldquo;</span>
          <div className="w-16 h-16 rounded-full bg-[#EC680A] flex items-center justify-center mx-auto mb-6 ring-4 ring-[#EC680A]/20 anim-scale-in" style={{ animationDelay: '0.15s' }}>
            <span className="text-white font-bold text-2xl">L</span>
          </div>
          <blockquote className="text-[#1B1D3A] text-xl md:text-2xl font-medium leading-relaxed mb-6 italic relative z-10 anim-fade-up" style={{ animationDelay: '0.25s' }}>
            &laquo; Le jour où j&apos;ai dit oui à Edumove, c&apos;est le jour où tout a changé. Aujourd&apos;hui je suis en 3ème année de dentaire à Madrid, je pratique sur de vrais patients, et je ne regrette absolument rien. &raquo;
          </blockquote>
        </div>

        <p className="text-[#1B1D3A] font-semibold text-lg anim-fade-up" style={{ animationDelay: '0.35s' }}>Lola</p>
        <p className="text-[#64748b] text-sm mb-8 anim-fade-up" style={{ animationDelay: '0.4s' }}>3ème année de Dentaire — Universidad Europea de Madrid</p>

        {/* Timeline journey */}
        <div className="bg-[#f5f5fb] border border-gray-100 rounded-2xl p-5 anim-fade-up" style={{ animationDelay: '0.45s' }}>
          <p className="text-[#64748b] text-[10px] uppercase tracking-widest mb-4">Son parcours</p>
          <div className="flex items-center justify-center gap-3">
            {[
              { label: "Bac S mention Bien", icon: "\uD83C\uDF93" },
              { label: "PASS recalée", icon: "\u274C" },
              { label: "Test PE réussi", icon: "\u2705" },
              { label: "Dentaire à Madrid", icon: "\uD83E\uDDB7" },
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
            { value: "0 \u20AC", label: "Payé pendant ses études" },
            { value: "100%", label: "Financé par le LCL" },
            { value: "6 500 \u20AC", label: "Salaire attendu/mois" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-xl p-3 border border-gray-100 text-center anim-scale-in" style={{ animationDelay: `${0.5 + i * 0.08}s` }}>
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
    { num: "1", title: "Premier échange gratuit", desc: "Un conseiller analyse votre profil et votre projet d'études de santé", icon: Phone },
    { num: "2", title: "Préparation aux tests", desc: "Cours illimités, annales, simulations (PE ou QCM LINK) avec suivi personnalisé", icon: BookOpen },
    { num: "3", title: "Dossier de candidature", desc: "Constitution complète du dossier, suivi jusqu'à l'admission confirmée", icon: FileText },
    { num: "4", title: "Financement", desc: "Montage du dossier de prêt avec le LCL, aide aux bourses et identification des aides", icon: Euro },
    { num: "5", title: "Installation sur place", desc: "Aide au logement, traduction de documents, démarches administratives, conseils pratiques", icon: Home },
    { num: "6", title: "Suivi continu", desc: "Accompagnement tout au long du cursus, support en cas de difficulté, communauté étudiante", icon: Heart },
  ];
  return (
    <div className="h-full bg-gradient-to-br from-[#eeedf5] via-[#f9f5f0] to-[#fdecd8] flex items-center justify-center px-8 pt-16">
      <div className="max-w-4xl w-full">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3 anim-fade-up" style={{ animationDelay: '0.1s' }}>DE A À Z</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-3 anim-fade-up" style={{ animationDelay: '0.2s' }}>L&apos;accompagnement Edumove</h2>
        <p className="text-[#64748b] text-sm mb-8 anim-fade-up" style={{ animationDelay: '0.3s' }}>100% gratuit — de l&apos;orientation à l&apos;installation</p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-5 border border-gray-100 relative anim-scale-in" style={{ animationDelay: `${0.3 + i * 0.08}s` }}>
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
        <div className="bg-[#1B1D3A] rounded-2xl p-6 flex items-center justify-between anim-fade-up" style={{ animationDelay: '0.7s' }}>
          <div>
            <p className="text-white font-bold text-lg mb-1">Un accompagnement complet, 100% gratuit</p>
            <p className="text-white/50 text-sm">Edumove ne facture aucun frais supplémentaire aux étudiants</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <img src="/edumove-icon-orange.svg" alt="Edumove" className="w-10 h-10 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 16: Merci / Contact ── */
function SlideMerci() {
  return (
    <div className="h-full bg-gradient-to-br from-[#eeedf5] via-[#f9f5f0] to-[#fdecd8] flex items-center justify-center px-8 pt-16 relative overflow-hidden">
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
        <div className="flex items-center justify-center gap-6 mb-8 anim-fade-in" style={{ animationDelay: '0.1s' }}>
          <img src="/edumove-icon-orange.svg" alt="Edumove" className="h-12 w-12" />
          <span className="text-[#1B1D3A]/20 text-xl font-light">&times;</span>
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-10" />
        </div>

        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-4 anim-fade-up" style={{ animationDelay: '0.2s' }}>MERCI</p>
        <h2 className="text-[#1B1D3A] text-4xl md:text-5xl font-extrabold mb-3 anim-fade-up" style={{ animationDelay: '0.3s' }}>Merci pour votre attention !</h2>
        <p className="text-[#64748b] text-base mb-10 max-w-lg mx-auto anim-fade-up" style={{ animationDelay: '0.4s' }}>
          Vous avez des questions ? C&apos;est le moment ! Notre équipe est là pour y répondre.
        </p>

        {/* Contact cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-[#f5f5fb] rounded-2xl p-5 border border-gray-100 anim-scale-in" style={{ animationDelay: '0.45s' }}>
            <div className="w-10 h-10 rounded-xl bg-[#EC680A]/10 flex items-center justify-center mx-auto mb-3">
              <Phone className="w-5 h-5 text-[#EC680A]" />
            </div>
            <p className="text-[#1B1D3A] font-bold text-sm mb-1">Téléphone</p>
            <p className="text-[#EC680A] font-semibold text-lg">01 89 74 42 57</p>
          </div>
          <div className="bg-[#f5f5fb] rounded-2xl p-5 border border-gray-100 anim-scale-in" style={{ animationDelay: '0.53s' }}>
            <div className="w-10 h-10 rounded-xl bg-[#615CA5]/10 flex items-center justify-center mx-auto mb-3">
              <Mail className="w-5 h-5 text-[#615CA5]" />
            </div>
            <p className="text-[#1B1D3A] font-bold text-sm mb-1">Email</p>
            <p className="text-[#615CA5] font-semibold text-sm">admissions@edumove.fr</p>
          </div>
          <div className="bg-[#f5f5fb] rounded-2xl p-5 border border-gray-100 anim-scale-in" style={{ animationDelay: '0.61s' }}>
            <div className="w-10 h-10 rounded-xl bg-[#EC680A]/10 flex items-center justify-center mx-auto mb-3">
              <Globe className="w-5 h-5 text-[#EC680A]" />
            </div>
            <p className="text-[#1B1D3A] font-bold text-sm mb-1">Candidature</p>
            <p className="text-[#EC680A] font-semibold text-sm">candidature.edumove.fr</p>
          </div>
        </div>

        {/* Q&A banner */}
        <div className="bg-[#1B1D3A] rounded-2xl p-6 anim-fade-up" style={{ animationDelay: '0.65s' }}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <MessageCircle className="w-6 h-6 text-[#EC680A]" />
            <p className="text-white font-bold text-xl">Questions &amp; Réponses</p>
          </div>
          <p className="text-white/60 text-sm mb-4">N&apos;hésitez pas à poser vos questions dans le chat ou à lever la main</p>
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/70 text-xs">En direct</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-white/40 text-xs">Edumove &amp; LCL à votre écoute</span>
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
  SlideTemoignage,      // 13
  SlideAccompagnement,  // 14
  SlideMerci,           // 15
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
      <style>{ANIM_STYLES}</style>
      {/* Slide with animation */}
      <div
        key={current}
        className="h-full w-full transition-all duration-300 ease-out relative"
        style={{
          opacity: animating ? 0 : 1,
          transform: animating
            ? `translateX(${direction === "right" ? "40px" : "-40px"})`
            : "translateX(0)",
        }}
      >
        <SlideComponent />
        {/* Logos overlay on slide background (hidden on cover) */}
        {current > 0 && (
          <div className="absolute top-0 left-0 right-0 z-20 flex flex-col items-center pointer-events-none bg-gradient-to-b from-[#eeedf5]/90 via-[#eeedf5]/50 to-transparent">
            <div className="flex items-center justify-center gap-6 pt-4 pb-2">
              <img src="/edumove-icon-orange.svg" alt="Edumove" className="h-14 w-14" />
              <span className="text-[#1B1D3A]/15 text-lg font-light">×</span>
              <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-12" />
            </div>
            <div className="flex items-center gap-1.5 pb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#EC680A]" />
              <span className="text-[#1B1D3A]/40 text-[10px] font-medium tracking-wider uppercase">Webinaire Edumove</span>
            </div>
          </div>
        )}
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
            title="Plein écran (F)"
          >
            <Maximize className="w-3.5 h-3.5 text-[#1B1D3A]/40" />
          </button>
        </div>
      </div>
    </div>
  );
}
