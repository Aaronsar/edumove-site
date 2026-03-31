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
   SLIDE COMPONENTS
   ═══════════════════════════════════════════════════════════════════════ */

/* ── Slide 1: Cover ── */
function SlideCover() {
  return (
    <div className="h-full bg-[#1B1D3A] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Dot grid decorations like the main site */}
      <div className="absolute top-[8%] left-[3%] grid grid-cols-6 gap-2.5 opacity-40">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={`tl-${i}`} className="w-2 h-2 rounded-full bg-[#EC680A]" />
        ))}
      </div>
      <div className="absolute bottom-[8%] right-[3%] grid grid-cols-6 gap-2.5 opacity-40">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={`br-${i}`} className="w-2 h-2 rounded-full bg-[#EC680A]" />
        ))}
      </div>
      <div className="absolute top-[50%] right-[8%] grid grid-cols-4 gap-2 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={`mr-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#615CA5]" />
        ))}
      </div>

      {/* Background orbs */}
      <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] bg-[#615ca5]/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] bg-[#ec680a]/10 rounded-full blur-[100px]" />

      {/* Orange top line like main site */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#ec680a] to-transparent" />

      <div className="relative z-10 text-center max-w-4xl px-8">
        {/* Big logos */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <img src="/edumove-icon-orange.svg" alt="Edumove" className="h-16 w-16" />
          <span className="text-white/30 text-2xl font-light">×</span>
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-14 brightness-200" />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
          <span className="text-[#EC680A]">Financer</span>{" "}
          <span className="text-white">ses études</span><br />
          <span className="text-white">de santé en </span>
          <span className="text-[#EC680A]">Europe</span>
        </h1>

        {/* Gradient line */}
        <div className="h-1 w-32 bg-gradient-to-r from-[#ec680a] via-[#615ca5] to-[#ec680a] rounded-full mx-auto mb-8" />

        {/* Tagline */}
        <p className="text-white/70 text-lg md:text-xl font-medium mb-10">On vous explique tout !</p>

        {/* Stats like the main site hero */}
        <div className="flex items-center justify-center gap-10 mb-8">
          {[
            { value: "3", label: "Universités" },
            { value: "5", label: "Filières" },
            { value: "100%", label: "Finançable" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-[#EC680A] text-3xl md:text-4xl font-extrabold">{stat.value}</p>
              <p className="text-white/40 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Partner badge */}
        <div className="inline-flex items-center gap-3 bg-white/[0.06] backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full">
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-5 brightness-200" />
          <div className="h-4 w-px bg-white/15" />
          <span className="text-white/50 text-xs font-medium">Partenaire financier officiel</span>
        </div>
      </div>

      {/* Bottom instruction */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2 animate-bounce z-10" style={{ animationDuration: "2s" }}>
        <ChevronRight className="w-4 h-4 text-white/20" />
        <span className="text-white/20 text-xs">Appuyez sur une touche pour commencer</span>
      </div>
    </div>
  );
}

/* ── Slide 2: Programme ── */
function SlideProgramme() {
  const items = [
    { icon: TrendingUp, label: "Le constat PASS/LAS en France", time: "8 min" },
    { icon: GraduationCap, label: "L'alternative européenne", time: "8 min" },
    { icon: Euro, label: "Combien ça coûte vraiment ?", time: "7 min" },
    { icon: Building2, label: "Le prêt étudiant du LCL", time: "20 min", highlight: true },
    { icon: HandCoins, label: "Les aides cumulables", time: "3 min" },
    { icon: Users, label: "Témoignage étudiant", time: "5 min" },
    { icon: Star, label: "L'accompagnement Edumove", time: "5 min" },
  ];
  return (
    <div className="h-full bg-white flex items-center justify-center px-8">
      <div className="max-w-3xl w-full">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3">Au programme</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-10">60 minutes pour tout comprendre</h2>
        <div className="space-y-3">
          {items.map((item, i) => {
            const isBlue = i % 2 === 1;
            return (
              <div key={i} className={`flex items-center gap-4 p-4 rounded-xl transition-all ${isBlue ? "bg-[#1B1D3A] text-white" : "bg-[#f5f5fb]"}`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${isBlue ? "bg-[#EC680A] text-white" : "bg-white text-[#1B1D3A]"}`}>
                  {i + 1}
                </div>
                <item.icon className={`w-5 h-5 ${isBlue ? "text-[#EC680A]" : "text-[#615CA5]"}`} />
                <span className={`flex-1 font-medium ${isBlue ? "text-white" : "text-[#1B1D3A]"}`}>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Slide 3: Constat PASS ── */
function SlideConstat() {
  return (
    <div className="h-full bg-white flex items-center justify-center px-8 relative overflow-hidden">
      {/* Dot grid decoration like main site */}
      <div className="absolute bottom-[10%] left-[3%] grid grid-cols-4 gap-2 opacity-30">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={`bl-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#1B1D3A]" />
        ))}
      </div>

      <div className="max-w-4xl w-full">
        {/* Header like site sections: label + title + description */}
        <div className="flex items-start justify-between mb-10">
          <div className="max-w-md">
            <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3">Le constat</p>
            <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-3">Le PASS/LAS en France</h2>
            <p className="text-[#64748b] text-sm leading-relaxed">Chaque année, des dizaines de milliers d'étudiants brillants sont éliminés par un concours unique, sans garantie de résultat.</p>
          </div>
          <div className="bg-[#1B1D3A] rounded-2xl px-8 py-5 text-center shrink-0">
            <p className="text-[#EC680A] text-5xl font-extrabold leading-none">80%</p>
            <p className="text-white/60 text-sm mt-2">d'échec en 1ère année</p>
          </div>
        </div>

        {/* Stats in clean row — like site cards */}
        <div className="grid grid-cols-4 gap-5 mb-8">
          {[
            { value: "60 000+", label: "Étudiants inscrits en PASS chaque année" },
            { value: "2 ans", label: "Perdus en moyenne par les recalés" },
            { value: "8 000 €", label: "Coût moyen d'une prépa privée" },
            { value: "~20 000 €", label: "Coût réel par an (prépa + logement)" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-5 text-center border border-gray-100">
              <p className="text-[#EC680A] text-2xl font-bold mb-2">{stat.value}</p>
              <p className="text-[#334155] text-xs leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="bg-[#1B1D3A] rounded-2xl p-6 flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-lg mb-1">Il existe une alternative.</p>
            <p className="text-white/50 text-sm">Études de santé en Europe, diplôme reconnu, financement accessible.</p>
          </div>
          <div className="flex items-center gap-2 bg-[#EC680A] px-5 py-2.5 rounded-xl shrink-0">
            <span className="text-white font-semibold text-sm">Découvrir →</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 4: Alternative européenne ── */
function SlideAlternative() {
  const unis = [
    { name: "Universidad Europea", flag: "🇪🇸", location: "5 campus en Espagne", color: "#EC680A", desc: "Madrid, Malaga, Valence, Alicante, Canaries", since: "Depuis 2019" },
    { name: "UCJC Madrid", flag: "🇪🇸", location: "Madrid", color: "#615CA5", desc: "Admission sur entretien, la plus accessible", since: "Depuis 2021" },
    { name: "LINK Campus", flag: "🇮🇹", location: "Rome", color: "#1B1D3A", desc: "Test d'admission 100% en français", since: "Depuis 2020" },
  ];
  const filieres = [
    { icon: Stethoscope, name: "Médecine", duration: "6 ans" },
    { icon: Bone, name: "Dentaire", duration: "5-6 ans" },
    { icon: Heart, name: "Kinésithérapie", duration: "3-4 ans" },
    { icon: Pill, name: "Pharmacie", duration: "5 ans" },
    { icon: Dog, name: "Vétérinaire", duration: "5 ans" },
  ];
  return (
    <div className="h-full bg-white flex items-center justify-center px-8">
      <div className="max-w-4xl w-full">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3">L'alternative</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-8">Études de santé en Europe avec Edumove</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {unis.map((u, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{u.flag}</span>
                <div>
                  <p className="font-bold text-[#1B1D3A] text-sm">{u.name}</p>
                  <p className="text-[#94a3b8] text-xs">{u.since}</p>
                </div>
              </div>
              <p className="text-[#334155] text-xs mb-2"><MapPin className="w-3 h-3 inline mr-1" />{u.location}</p>
              <p className="text-[#615CA5] text-xs font-medium">{u.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {filieres.map((f, i) => (
            <div key={i} className="flex items-center gap-2 bg-[#1B1D3A] text-white px-4 py-2.5 rounded-full">
              <f.icon className="w-4 h-4 text-[#EC680A]" />
              <span className="text-sm font-medium">{f.name}</span>
              <span className="text-white/40 text-xs">({f.duration})</span>
            </div>
          ))}
        </div>
        <p className="text-center text-[#615CA5] text-sm font-medium mt-6">
          Tous les diplômes sont reconnus en France (Directive 2005/36/CE)
        </p>
      </div>
    </div>
  );
}

/* ── Slide 5: Tarifs ── */
function SlideTarifs() {
  const data = [
    { filiere: "Médecine", ucjc: "15 000", ue: "21 500", link: "19 800", duree: "6 ans" },
    { filiere: "Dentaire", ucjc: "9 420", ue: "18 900", link: "19 800", duree: "5-6 ans" },
    { filiere: "Kiné", ucjc: "9 420", ue: "14 580", link: "7 900", duree: "3-4 ans" },
    { filiere: "Pharmacie", ucjc: "9 420", ue: "15 000", link: "7 900", duree: "5 ans" },
    { filiere: "Vétérinaire", ucjc: "—", ue: "17 340", link: "—", duree: "5 ans" },
  ];
  return (
    <div className="h-full bg-[#f5f5fb] flex items-center justify-center px-8 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#EC680A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#615CA5]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl w-full relative z-10">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3">Les frais</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-2">Combien coûtent les études ?</h2>
        <p className="text-[#64748b] text-sm mb-8">Frais de scolarité annuels par université et par filière</p>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#1B1D3A] text-white">
                <th className="px-5 py-4 text-left text-sm font-semibold">Filière</th>
                <th className="px-5 py-4 text-center text-sm font-semibold">🇪🇸 UCJC</th>
                <th className="px-5 py-4 text-center text-sm font-semibold">🇪🇸 UE</th>
                <th className="px-5 py-4 text-center text-sm font-semibold">🇮🇹 LINK</th>
                <th className="px-5 py-4 text-center text-sm font-semibold">Durée</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? "" : "bg-[#fafbff]"}`}>
                  <td className="px-5 py-3.5 font-semibold text-[#1B1D3A] text-sm">{row.filiere}</td>
                  <td className="px-5 py-3.5 text-center text-sm text-[#334155]">{row.ucjc === "—" ? <span className="text-gray-300">—</span> : `${row.ucjc} €`}</td>
                  <td className="px-5 py-3.5 text-center text-sm text-[#334155]">{row.ue} €</td>
                  <td className="px-5 py-3.5 text-center text-sm text-[#334155]">{row.link === "—" ? <span className="text-gray-300">—</span> : `${row.link} €`}</td>
                  <td className="px-5 py-3.5 text-center text-sm text-[#615CA5] font-medium">{row.duree}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Info cards below table */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
            <p className="text-[#EC680A] text-xl font-bold">dès 7 900 €</p>
            <p className="text-[#64748b] text-xs mt-1">Tarif le plus bas / an</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
            <p className="text-[#615CA5] text-xl font-bold">100%</p>
            <p className="text-[#64748b] text-xs mt-1">Finançable via le prêt LCL</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
            <p className="text-[#1B1D3A] text-xl font-bold">0 € d'acompte</p>
            <p className="text-[#64748b] text-xs mt-1">Remboursement après le diplôme</p>
          </div>
        </div>
        <p className="text-center text-[#94a3b8] text-xs mt-4">Tarifs 2026 — Tous les frais sont éligibles au prêt étudiant du LCL</p>
      </div>
    </div>
  );
}

/* ── Slide 6: Comparaison PASS vs Europe ── */
function SlideComparaison() {
  return (
    <div className="h-full bg-white flex items-center justify-center px-8">
      <div className="max-w-4xl w-full">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3">Comparatif</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-8">PASS en France vs Études en Europe</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* France */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">🇫🇷</span>
              <h3 className="text-[#1B1D3A] font-bold text-lg">PASS en France</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Concours ultra-sélectif (80% d'échec)",
                "Prépa privée : 5 000 - 8 000 €/an",
                "Loyer Paris : 800 - 1 000 €/mois",
                "2 ans perdus si échec (en moyenne)",
                "Stress intense, impact sur la santé mentale",
                "Aucune garantie de résultat",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#334155]">
                  <span className="text-red-500 mt-0.5">✕</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 bg-red-100 rounded-xl p-3 text-center">
              <p className="text-red-700 font-bold text-lg">~20 000 €/an</p>
              <p className="text-red-600 text-xs">Coût réel (prépa + logement + fac)</p>
            </div>
          </div>
          {/* Europe */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">🇪🇺</span>
              <h3 className="text-[#1B1D3A] font-bold text-lg">Europe avec Edumove</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Admission sur dossier ou test (pas de concours)",
                "Frais : dès 7 900 €/an (LINK) ou 9 420 €/an (UCJC)",
                "Vie 15-20% moins chère qu'à Paris",
                "Pas de temps perdu — tu avances chaque année",
                "Diplôme reconnu en France (Directive UE)",
                "Financement 100% possible avec le LCL",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#334155]">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 bg-green-100 rounded-xl p-3 text-center">
              <p className="text-green-700 font-bold text-lg">dès 9 420 €/an</p>
              <p className="text-green-600 text-xs">Tout compris, financement différé disponible</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 7: LCL Présentation ── */
function SlideLCLIntro() {
  const team = [
    { name: "Jean-Christophe Thomas", role: "Directeur d'Agence", initials: "JC" },
    { name: "Meriem Guendouz", role: "Conseillère Particuliers", initials: "MG" },
    { name: "Laura Munoz", role: "Conseillère en Patrimoine", initials: "LM" },
  ];
  return (
    <div className="h-full bg-gradient-to-br from-[#f8f9fb] to-white flex items-center justify-center px-8 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#615CA5]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#EC680A]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#1B1D3A]/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#1B1D3A]/5 rounded-full" />

      <div className="max-w-4xl w-full text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-12" />
          <span className="text-[#334155] text-lg">×</span>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#EC680A] flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-[#1B1D3A] font-bold text-xl">Edumove</span>
          </div>
        </div>
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3">Partenariat exclusif</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-4">Financer vos études de santé en Europe</h2>
        <p className="text-[#64748b] text-sm max-w-xl mx-auto mb-8">
          Le LCL accompagne les étudiants Edumove avec une offre de prêt étudiant spécialement conçue pour les études de santé à l'étranger. Un partenariat unique en France.
        </p>

        {/* Key partnership stats */}
        <div className="flex justify-center gap-6 mb-8">
          {[
            { value: "75 000 €", label: "Minimum garanti" },
            { value: "0 €", label: "Pendant les études" },
            { value: "Préférentiel", label: "Taux exclusif" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#1B1D3A] rounded-xl px-5 py-3 text-center">
              <p className="text-[#EC680A] font-bold text-lg">{stat.value}</p>
              <p className="text-white/60 text-[11px]">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="text-[#64748b] text-xs uppercase tracking-widest mb-4">Votre équipe dédiée</p>
        <div className="flex justify-center gap-8">
          {team.map((person, i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#1B1D3A] flex items-center justify-center mx-auto mb-3 border-2 border-[#EC680A]/30">
                <span className="text-white font-bold text-xl">{person.initials}</span>
              </div>
              <p className="text-[#1B1D3A] font-semibold text-sm">{person.name}</p>
              <p className="text-[#94a3b8] text-xs">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Slide 8: LCL Prêt en détail ── */
function SlideLCLPret() {
  return (
    <div className="h-full bg-[#1B1D3A] flex items-center justify-center px-8 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ec680a]/10 rounded-full blur-3xl" />
      <div className="max-w-4xl w-full relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-6 brightness-200" />
          <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em]">Le prêt étudiant santé</p>
        </div>
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-10">Un prêt pensé pour vous</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { value: "75 000 €", label: "Minimum garanti", sub: "à partir de" },
            { value: "0 €", label: "À rembourser pendant les études", sub: "Différé total" },
            { value: "100%", label: "Des frais couverts", sub: "Scolarité + vie courante" },
            { value: "Préférentiel", label: "Taux négocié par Edumove", sub: "Inférieur au marché" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center">
              <p className="text-[#EC680A] text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-white/80 text-xs font-medium mb-0.5">{stat.label}</p>
              <p className="text-white/40 text-[10px]">{stat.sub}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: Shield, title: "Aucune condition de revenus", desc: "Pas de condition sur les revenus parentaux pour l'obtention du prêt." },
            { icon: TrendingUp, title: "Remboursement différé", desc: "Vous ne remboursez qu'après votre diplôme, une fois en activité professionnelle." },
            { icon: HandCoins, title: "Couverture totale", desc: "Le prêt couvre les frais de scolarité ET le coût de la vie (logement, alimentation, transports)." },
            { icon: Award, title: "Flexibilité", desc: "En cas de changement de filière au sein des universités partenaires, le prêt reste valide." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/[0.04] border border-white/10 rounded-xl p-4">
              <div className="w-9 h-9 rounded-lg bg-[#EC680A]/20 flex items-center justify-center shrink-0">
                <item.icon className="w-4.5 h-4.5 text-[#EC680A]" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-0.5">{item.title}</p>
                <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Slide 9: LCL Simulation ── */
function SlideLCLSimulation() {
  const cases = [
    {
      name: "Lucas",
      emoji: "👨‍⚕️",
      filiere: "Dentaire — UCJC Madrid",
      frais: "9 420",
      duree: "5 ans",
      total: "47 100",
      salaire: "6 000 - 7 000 €/mois",
      mensualite: "~500 €/mois",
      ratio: "7-8% du salaire net",
    },
    {
      name: "Sarah",
      emoji: "👩‍⚕️",
      filiere: "Médecine — UE Madrid",
      frais: "21 500",
      duree: "6 ans",
      total: "129 000",
      salaire: "4 000 - 6 000 €/mois",
      mensualite: "~700 €/mois",
      ratio: "12-17% du salaire net",
    },
  ];
  return (
    <div className="h-full bg-white flex items-center justify-center px-8 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#615CA5]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl w-full relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-5" />
          <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em]">Simulations concrètes</p>
        </div>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-2">Combien ça coûte vraiment ?</h2>
        <p className="text-[#64748b] text-sm mb-8">Deux profils réels, deux situations différentes</p>
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
                <div className="flex justify-between text-sm"><span className="text-[#64748b]">Frais / an</span><span className="text-[#1B1D3A] font-semibold">{c.frais} €</span></div>
                <div className="flex justify-between text-sm"><span className="text-[#64748b]">Durée</span><span className="text-[#1B1D3A] font-semibold">{c.duree}</span></div>
                <div className="flex justify-between text-sm"><span className="text-[#64748b]">Coût total scolarité</span><span className="text-[#EC680A] font-bold">{c.total} €</span></div>
                <div className="h-px bg-gray-200 my-1" />
                <div className="flex justify-between text-sm"><span className="text-[#64748b]">Salaire après diplôme</span><span className="text-[#1B1D3A] font-semibold">{c.salaire}</span></div>
                <div className="flex justify-between text-sm"><span className="text-[#64748b]">Mensualité estimée</span><span className="text-[#1B1D3A] font-semibold">{c.mensualite}</span></div>
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
            <p className="text-white text-sm font-medium">Un investissement rentable — remboursé en quelques années d'exercice</p>
          </div>
          <p className="text-white/40 text-xs">Simulations indicatives</p>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 10: Aides cumulables ── */
function SlideAides() {
  const aides = [
    { name: "Bourse CROUS", amount: "1 000 - 5 000 €/an", desc: "Selon les revenus de la famille, compatible avec les études en Europe", icon: GraduationCap },
    { name: "Aide à la mobilité internationale", amount: "~400 €/mois", desc: "Pour les boursiers partant étudier à l'étranger (4 mois max)", icon: MapPin },
    { name: "Aide au mérite", amount: "~900 €/an", desc: "Pour les bacheliers mention Très Bien, cumulable avec la bourse CROUS", icon: Award },
    { name: "Aides régionales", amount: "Variable", desc: "Certaines régions proposent des aides spécifiques pour les études à l'étranger", icon: Home },
    { name: "CAF / APL", amount: "Variable", desc: "Aides au logement possibles selon le pays et la convention du logement", icon: Building2 },
  ];
  return (
    <div className="h-full bg-[#f5f5fb] flex items-center justify-center px-8">
      <div className="max-w-4xl w-full">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3">Cumulable avec le prêt LCL</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-8">Les autres aides disponibles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {aides.map((aide, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-4">
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
        <div className="bg-[#1B1D3A] rounded-xl p-5 mt-6 text-center">
          <p className="text-white font-semibold text-sm">Toutes ces aides sont cumulables avec le prêt du LCL</p>
          <p className="text-white/50 text-xs mt-1">Edumove vous aide à identifier les aides auxquelles vous avez droit</p>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 11: Témoignage ── */
function SlideTemoignage() {
  return (
    <div className="h-full bg-[#1B1D3A] flex items-center justify-center px-8 relative overflow-hidden">
      {/* Rich background decorations */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#615ca5]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-[#ec680a]/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="max-w-3xl w-full relative z-10 text-center">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-6">Témoignage</p>

        {/* Large decorative quote */}
        <div className="relative">
          <span className="absolute -top-8 -left-4 text-[#EC680A]/15 text-[120px] font-serif leading-none select-none">&ldquo;</span>
          <div className="w-16 h-16 rounded-full bg-[#EC680A] flex items-center justify-center mx-auto mb-6 ring-4 ring-[#EC680A]/20">
            <span className="text-white font-bold text-2xl">L</span>
          </div>
          <blockquote className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-6 italic relative z-10">
            &laquo; Le jour où j'ai dit oui à Edumove, c'est le jour où tout a changé. Aujourd'hui je suis en 3ème année de dentaire à Madrid, je pratique sur de vrais patients, et je ne regrette absolument rien. &raquo;
          </blockquote>
          <span className="absolute -bottom-12 -right-4 text-[#EC680A]/15 text-[120px] font-serif leading-none select-none rotate-180">&ldquo;</span>
        </div>

        <p className="text-white font-semibold text-lg">Lola</p>
        <p className="text-white/50 text-sm mb-8">3ème année de Dentaire — Universidad Europea de Madrid</p>

        {/* Timeline journey - more visual */}
        <div className="bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl p-5">
          <p className="text-white/40 text-[10px] uppercase tracking-widest mb-4">Son parcours</p>
          <div className="flex items-center justify-center gap-3">
            {[
              { label: "Bac S mention Bien", icon: "🎓" },
              { label: "PASS recalée", icon: "❌" },
              { label: "Test PE réussi", icon: "✅" },
              { label: "Dentaire à Madrid", icon: "🦷" },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-1.5">
                  <span className="text-xl">{step.icon}</span>
                  <span className="text-white/70 text-xs font-medium">{step.label}</span>
                </div>
                {i < 3 && (
                  <div className="flex items-center">
                    <div className="w-8 h-px bg-gradient-to-r from-[#EC680A]/50 to-[#EC680A]/20" />
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

/* ── Slide 12: Accompagnement Edumove ── */
function SlideAccompagnement() {
  const steps = [
    { num: "1", title: "Premier échange gratuit", desc: "Un conseiller analyse votre profil et votre projet", icon: Phone },
    { num: "2", title: "Préparation aux tests", desc: "Cours illimités, annales, simulations (PE ou QCM LINK)", icon: BookOpen },
    { num: "3", title: "Dossier de candidature", desc: "Constitution complète du dossier, suivi jusqu'à l'admission", icon: Briefcase },
    { num: "4", title: "Financement", desc: "Montage du dossier de prêt avec le LCL, aide aux bourses", icon: Euro },
    { num: "5", title: "Installation", desc: "Aide au logement, traduction de documents, conseils pratiques", icon: Home },
    { num: "6", title: "Suivi pendant les études", desc: "Accompagnement continu tout au long de votre cursus", icon: Heart },
  ];
  return (
    <div className="h-full bg-white flex items-center justify-center px-8">
      <div className="max-w-4xl w-full">
        <p className="text-[#EC680A] font-semibold text-sm uppercase tracking-[0.15em] mb-3">De A à Z</p>
        <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-3">L'accompagnement Edumove</h2>
        <p className="text-[#64748b] text-sm mb-8">100% gratuit — de l'orientation à l'installation</p>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-[#f5f5fb] rounded-xl p-5 border border-gray-100 relative">
              <div className="absolute -top-3 -left-2 w-7 h-7 rounded-full bg-[#EC680A] flex items-center justify-center">
                <span className="text-white font-bold text-xs">{step.num}</span>
              </div>
              <step.icon className="w-6 h-6 text-[#615CA5] mb-3" />
              <p className="text-[#1B1D3A] font-semibold text-sm mb-1">{step.title}</p>
              <p className="text-[#64748b] text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#EC680A] rounded-2xl p-6 text-center">
          <p className="text-white font-bold text-xl mb-2">Prêt à vous lancer ?</p>
          <p className="text-white/80 text-sm mb-1">Contactez Edumove pour un premier échange gratuit</p>
          <p className="text-white font-semibold text-lg mt-3 flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" /> 01 89 74 42 57
          </p>
          <p className="text-white/60 text-sm mt-1">candidature.edumove.fr</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN PRESENTATION
   ═══════════════════════════════════════════════════════════════════════ */

const SLIDES = [
  SlideCover,
  SlideProgramme,
  SlideConstat,
  SlideAlternative,
  SlideTarifs,
  SlideComparaison,
  SlideLCLIntro,
  SlideLCLPret,
  SlideLCLSimulation,
  SlideAides,
  SlideTemoignage,
  SlideAccompagnement,
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
    <div className="h-screen w-screen overflow-hidden relative select-none bg-[#1B1D3A]" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>
      {/* Persistent header — logos + badge */}
      <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-center gap-5 pt-5 pb-3 pointer-events-none">
        <img src="/edumove-icon-orange.svg" alt="Edumove" className="h-10 w-10" />
        <span className="text-white/30 text-base mix-blend-difference font-light">×</span>
        <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-9" />
      </div>

      {/* Slide with animation */}
      <div
        className="h-full w-full pt-16 transition-all duration-300 ease-out"
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

      {/* Navigation arrows — always visible, subtle */}
      {current > 0 && (
        <button onClick={animPrev} className="absolute left-5 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-black/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-black/30 transition-all group">
          <ChevronLeft className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
        </button>
      )}
      {current < SLIDES.length - 1 && (
        <button onClick={animNext} className="absolute right-5 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-black/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-black/30 transition-all group">
          <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
        </button>
      )}

      {/* Bottom bar — glassmorphism */}
      <div className="absolute bottom-0 left-0 right-0 z-40">
        <div className="flex items-center gap-4 px-8 py-4 bg-black/20 backdrop-blur-md border-t border-white/5">
          {/* Slide dots */}
          <div className="flex items-center gap-1.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-[#EC680A]" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          <div className="flex-1" />
          <span className="text-white/40 text-xs font-medium tabular-nums">{current + 1} / {SLIDES.length}</span>
          <button
            onClick={() => {
              if (document.fullscreenElement) document.exitFullscreen();
              else document.documentElement.requestFullscreen();
            }}
            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 transition-all"
            title="Plein écran (F)"
          >
            <Maximize className="w-3.5 h-3.5 text-white/50" />
          </button>
        </div>
      </div>
    </div>
  );
}
