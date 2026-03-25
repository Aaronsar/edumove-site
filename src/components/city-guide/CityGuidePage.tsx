"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight, MapPin, Plane, Home, Train, UtensilsCrossed, Landmark,
  Sun, Euro, ArrowRight, ExternalLink, CheckCircle2, GraduationCap,
} from "lucide-react";
import ContactButton from "@/components/shared/ContactButton";
import StickyBar from "@/components/program/StickyBar";
import FinancingBanner from "@/components/shared/FinancingBanner";
import type { CityGuide } from "@/data/city-guides";
import { cityGuides } from "@/data/city-guides";

const categoryMeta: Record<string, { label: string; color: string }> = {
  manger: { label: "Manger", color: "bg-[#EC680A]/10 text-[#EC680A]" },
  sortir: { label: "Sortir", color: "bg-[#615CA5]/10 text-[#615CA5]" },
  culture: { label: "Culture", color: "bg-[#1B1D3A]/10 text-[#1B1D3A]" },
  sport: { label: "Sport & Nature", color: "bg-green-100 text-green-700" },
};

/* ── Mini simulateur de trajet ── */
function TravelSimulator({ city }: { city: CityGuide }) {
  const [selected, setSelected] = useState(city.trajets[0]?.from ?? "Paris");
  const trajet = city.trajets.find((t) => t.from === selected) ?? city.trajets[0];

  return (
    <section className="py-12 md:py-16 bg-[#fafbff]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-2">
          Venir à {city.name} depuis la France
        </h2>
        <p className="text-[#64748b] mb-8">Sélectionnez votre ville de départ pour voir les infos de vol.</p>

        {/* Ville selector */}
        <div className="flex flex-wrap gap-2 mb-8">
          {city.trajets.map((t) => (
            <button
              key={t.from}
              onClick={() => setSelected(t.from)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                selected === t.from
                  ? "bg-[#1B1D3A] text-white shadow-lg shadow-[#1B1D3A]/20"
                  : "bg-white text-[#334155] border border-gray-200 hover:border-[#EC680A]/40 hover:text-[#EC680A]"
              }`}
            >
              {t.from}
            </button>
          ))}
        </div>

        {/* Résultat */}
        {trajet && (
          <div className="bg-white rounded-2xl border border-[#e2e2ef] overflow-hidden max-w-2xl">
            {/* Header visuel */}
            <div className="bg-gradient-to-r from-[#1B1D3A] to-[#2a2d52] p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs">Départ</p>
                    <p className="font-bold" style={{ color: "#ffffff" }}>{trajet.from}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-px w-8 bg-white/20" />
                  <Plane className="w-5 h-5 text-[#EC680A]" />
                  <div className="h-px w-8 bg-white/20" />
                </div>

                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-white/60 text-xs text-right">Arrivée</p>
                    <p className="font-bold" style={{ color: "#ffffff" }}>{city.name}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#EC680A]/20 flex items-center justify-center">
                    <span className="text-lg">{city.countryFlag}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Détails */}
            <div className="p-5 space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-[#EC680A]">{trajet.duration}</p>
                  <p className="text-xs text-[#64748b] mt-1">Temps de vol</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1B1D3A]">{trajet.price}</p>
                  <p className="text-xs text-[#64748b] mt-1">Prix A/R</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#615CA5]">{trajet.freq}</p>
                  <p className="text-xs text-[#64748b] mt-1">Fréquence</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#64748b]">Aéroport d'arrivée</span>
                  <span className="font-medium text-[#1B1D3A]">{city.airport.name} ({city.airport.code})</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#64748b]">Distance campus</span>
                  <span className="font-medium text-[#1B1D3A]">{city.airport.distance}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#64748b]">Compagnies</span>
                  <span className="font-medium text-[#1B1D3A]">{city.airlines.slice(0, 3).join(", ")}</span>
                </div>
              </div>

              <a
                href={`https://www.skyscanner.fr/transport/vols/${trajet.from.toLowerCase()}/${city.slug === "rome" ? "rome" : city.slug}/`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center justify-center gap-2 w-full bg-[#EC680A] hover:bg-[#D45E09] text-white text-sm font-semibold py-3 rounded-xl transition-colors mt-2"
              >
                Rechercher un vol {trajet.from} → {city.name}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default function CityGuidePage({ city }: { city: CityGuide }) {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          1. HERO — Photo monument + overlay
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full h-[380px] md:h-[440px] overflow-hidden">
        <Image
          src={city.heroImage}
          alt={`Vue de ${city.name}`}
          width={1400}
          height={600}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1D3A] via-[#1B1D3A]/70 to-[#1B1D3A]/30" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="flex items-center gap-1.5 text-sm text-white/60 mb-4 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/60">Vie étudiante</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">{city.countryFlag} {city.name}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold mb-3" style={{ color: "#ffffff" }}>
            {city.h1}
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-2xl mb-5">
            {city.intro}
          </p>

          <div className="flex flex-wrap gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
              <p className="text-lg font-bold text-[#ec680a]">{city.universities.length}</p>
              <p className="text-[10px] text-white/50">Universités</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
              <p className="text-lg font-bold text-[#ec680a]">{city.flightFromParis}</p>
              <p className="text-[10px] text-white/50">Vol Paris</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
              <p className="text-lg font-bold text-[#ec680a]">{city.budgetTotal.split(" ")[0]}€</p>
              <p className="text-[10px] text-white/50">Budget min/mois</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. UNIVERSITÉS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-2">
            Nos universités à {city.name}
          </h2>
          <p className="text-[#64748b] mb-8">
            {city.universities.length === 1 ? "Notre université partenaire" : "Nos universités partenaires"} pour les études de santé à {city.name}.
          </p>

          <div className={`grid ${city.universities.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1 max-w-2xl"} gap-6`}>
            {city.universities.map((uni) => (
              <Link key={uni.slug} href={`/universites/${uni.slug}`} className="group bg-[#fafbff] rounded-2xl border border-[#e2e2ef] hover:border-[#615CA5]/30 p-6 transition-all hover:shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#615CA5] flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{uni.shortName}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors">{uni.name}</h3>
                    <p className="text-xs text-[#64748b]">{city.countryFlag} {city.name}, {city.country}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {uni.programs.map((p) => (
                    <span key={p} className="text-xs font-medium text-[#615CA5] bg-[#615CA5]/10 px-2.5 py-1 rounded-full">{p}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-[#EC680A] group-hover:gap-2 transition-all">
                  Découvrir <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. COÛT DE LA VIE
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-[#fafbff]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-8">
            Coût de la vie à {city.name}
          </h2>

          <div className="bg-white rounded-2xl border border-[#e2e2ef] overflow-hidden max-w-xl">
            <div className="p-6 space-y-3">
              {city.budget.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <span className="text-sm text-[#334155]">{item.label}</span>
                  <span className="text-sm font-semibold text-[#1B1D3A]">{item.range}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-2 border-t-2 border-[#1B1D3A]/10">
                <span className="font-bold text-[#1B1D3A]">Total mensuel</span>
                <span className="font-bold text-[#ec680a]">{city.budgetTotal}</span>
              </div>
            </div>
          </div>

          <Link href="/financement" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#615CA5] hover:text-[#EC680A] transition-colors">
            Découvrir nos solutions de financement <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. QUARTIERS ÉTUDIANTS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-2">
            Se loger à {city.name}
          </h2>
          <p className="text-[#64748b] mb-8">Les meilleurs quartiers pour les étudiants.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {city.quartiers.map((q, i) => (
              <div key={i} className="bg-[#fafbff] rounded-xl border border-[#e2e2ef] p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-[#615CA5]" />
                    <h3 className="font-bold text-[#1B1D3A]">{q.name}</h3>
                  </div>
                  <span className="text-xs font-semibold text-[#EC680A] bg-[#EC680A]/10 px-2.5 py-1 rounded-full">
                    {q.loyer}
                  </span>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. TRANSPORTS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-[#fafbff]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-8">
            Se déplacer à {city.name}
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {city.transports.map((t, i) => (
              <div key={i} className="bg-white rounded-xl border border-[#e2e2ef] p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Train className="w-4 h-4 text-[#615CA5]" />
                    <h3 className="font-bold text-[#1B1D3A]">{t.type}</h3>
                  </div>
                  <span className="text-xs font-bold text-[#EC680A]">{t.price}</span>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed mb-2">{t.details}</p>
                {t.link && (
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#615CA5] hover:text-[#EC680A] transition-colors"
                  >
                    Site officiel <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. BONS PLANS & RESTAURANTS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-8">
            Bons plans à {city.name}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {city.bonsPlans.map((bp, i) => {
              const meta = categoryMeta[bp.category];
              return (
                <div key={i} className="bg-[#fafbff] rounded-xl border border-[#e2e2ef] p-5">
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${meta.color}`}>
                    {meta.label}
                  </span>
                  <h3 className="font-bold text-[#1B1D3A] mt-2 mb-1">{bp.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{bp.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          7. SIMULATEUR TRAJET
      ══════════════════════════════════════════════════════════════════ */}
      <TravelSimulator city={city} />

      {/* ══════════════════════════════════════════════════════════════════
          8. HIGHLIGHTS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-8">
            Pourquoi {city.name} ?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {city.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#fafbff] rounded-xl p-4 border border-[#e2e2ef]">
                <CheckCircle2 className="w-5 h-5 text-[#ec680a] shrink-0 mt-0.5" />
                <span className="text-[#334155] text-sm">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          9. FAQ
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-[#fafbff]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-8">
            Questions fréquentes sur {city.name}
          </h2>
          <div className="space-y-4">
            {city.faq.map((item, i) => (
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

      {/* ══════════════════════════════════════════════════════════════════
          10. MAILLAGE — AUTRES VILLES
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-8">
            Découvrir les autres villes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cityGuides
              .filter((c) => c.slug !== city.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/vie-etudiante/${c.slug}`}
                  className="group relative rounded-xl overflow-hidden h-44"
                >
                  <Image
                    src={c.heroImage}
                    alt={`Vue de ${c.name}`}
                    width={500}
                    height={250}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1D3A]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{c.countryFlag}</span>
                      <h3 className="font-bold text-lg" style={{ color: "#ffffff" }}>{c.name}</h3>
                    </div>
                    <p className="text-white/60 text-xs">{c.universities.length} univ. &middot; dès {c.budgetTotal.split(" ")[0]}€/mois &middot; vol {c.flightFromParis}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          11. MAILLAGE — FORMATIONS + ARTICLES
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-[#fafbff]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Formations */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-6">
            Nos formations {city.country === "Espagne" ? "en Espagne" : "en Italie"}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {city.country === "Espagne" ? (
              <>
                <Link href="/formations/medecine/espagne" className="group flex items-center justify-between bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 px-5 py-4 transition-all hover:shadow-md">
                  <span className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors">Médecine en Espagne</span>
                  <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#EC680A] transition-colors" />
                </Link>
                <Link href="/formations/dentaire/espagne" className="group flex items-center justify-between bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 px-5 py-4 transition-all hover:shadow-md">
                  <span className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors">Dentaire en Espagne</span>
                  <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#EC680A] transition-colors" />
                </Link>
                <Link href="/formations/kinesitherapie/espagne" className="group flex items-center justify-between bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 px-5 py-4 transition-all hover:shadow-md">
                  <span className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors">Kiné en Espagne</span>
                  <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#EC680A] transition-colors" />
                </Link>
                <Link href="/formations/pharmacie/espagne" className="group flex items-center justify-between bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 px-5 py-4 transition-all hover:shadow-md">
                  <span className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors">Pharmacie en Espagne</span>
                  <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#EC680A] transition-colors" />
                </Link>
                <Link href="/formations/veterinaire/espagne" className="group flex items-center justify-between bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 px-5 py-4 transition-all hover:shadow-md">
                  <span className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors">Vétérinaire en Espagne</span>
                  <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#EC680A] transition-colors" />
                </Link>
              </>
            ) : (
              <>
                <Link href="/formations/medecine" className="group flex items-center justify-between bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 px-5 py-4 transition-all hover:shadow-md">
                  <span className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors">Médecine en Europe</span>
                  <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#EC680A] transition-colors" />
                </Link>
                <Link href="/formations/dentaire" className="group flex items-center justify-between bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 px-5 py-4 transition-all hover:shadow-md">
                  <span className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors">Dentaire en Europe</span>
                  <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#EC680A] transition-colors" />
                </Link>
                <Link href="/formations/kinesitherapie" className="group flex items-center justify-between bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 px-5 py-4 transition-all hover:shadow-md">
                  <span className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors">Kinésithérapie en Europe</span>
                  <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#EC680A] transition-colors" />
                </Link>
                <Link href="/formations/pharmacie" className="group flex items-center justify-between bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 px-5 py-4 transition-all hover:shadow-md">
                  <span className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors">Pharmacie en Europe</span>
                  <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#EC680A] transition-colors" />
                </Link>
              </>
            )}
          </div>

          {/* Articles & Guides */}
          <h3 className="text-lg font-bold text-[#1B1D3A] mb-4">Articles et guides utiles</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/blog/cout-etudes-sante-europe" className="group bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 p-5 transition-all hover:shadow-md">
              <span className="text-xs font-semibold text-[#EC680A] bg-[#EC680A]/10 px-2 py-0.5 rounded-full">Financement</span>
              <h4 className="font-bold text-[#1B1D3A] text-sm mt-2 group-hover:text-[#615CA5] transition-colors leading-snug">Coût des études de santé en Europe</h4>
              <span className="inline-flex items-center gap-1 mt-2 text-xs text-[#64748b] group-hover:text-[#EC680A] transition-colors">Lire <ArrowRight className="w-3 h-3" /></span>
            </Link>
            <Link href="/blog/echec-pass-alternatives" className="group bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 p-5 transition-all hover:shadow-md">
              <span className="text-xs font-semibold text-[#615CA5] bg-[#615CA5]/10 px-2 py-0.5 rounded-full">Actualités</span>
              <h4 className="font-bold text-[#1B1D3A] text-sm mt-2 group-hover:text-[#615CA5] transition-colors leading-snug">Échec au PASS : les alternatives</h4>
              <span className="inline-flex items-center gap-1 mt-2 text-xs text-[#64748b] group-hover:text-[#EC680A] transition-colors">Lire <ArrowRight className="w-3 h-3" /></span>
            </Link>
            <Link href="/blog/reconnaissance-diplomes-europeens" className="group bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 p-5 transition-all hover:shadow-md">
              <span className="text-xs font-semibold text-[#615CA5] bg-[#615CA5]/10 px-2 py-0.5 rounded-full">Guide</span>
              <h4 className="font-bold text-[#1B1D3A] text-sm mt-2 group-hover:text-[#615CA5] transition-colors leading-snug">Reconnaissance des diplômes</h4>
              <span className="inline-flex items-center gap-1 mt-2 text-xs text-[#64748b] group-hover:text-[#EC680A] transition-colors">Lire <ArrowRight className="w-3 h-3" /></span>
            </Link>
            <Link href="/temoignages" className="group bg-white rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 p-5 transition-all hover:shadow-md">
              <span className="text-xs font-semibold text-[#EC680A] bg-[#EC680A]/10 px-2 py-0.5 rounded-full">Témoignages</span>
              <h4 className="font-bold text-[#1B1D3A] text-sm mt-2 group-hover:text-[#615CA5] transition-colors leading-snug">Ils ont fait le choix de l'Europe</h4>
              <span className="inline-flex items-center gap-1 mt-2 text-xs text-[#64748b] group-hover:text-[#EC680A] transition-colors">Lire <ArrowRight className="w-3 h-3" /></span>
            </Link>
          </div>

          {/* Liens externes utiles */}
          <div className="mt-8 pt-6 border-t border-[#e2e2ef]">
            <h3 className="text-sm font-semibold text-[#615CA5] uppercase tracking-wider mb-3">Liens utiles</h3>
            <div className="flex flex-wrap gap-3">
              {city.country === "Espagne" ? (
                <>
                  <a href="https://www.idealista.com/" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1 text-sm text-[#334155] hover:text-[#EC680A] transition-colors">
                    Idealista (logement) <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[#e2e2ef]">&middot;</span>
                  <a href="https://www.crtm.es/" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1 text-sm text-[#334155] hover:text-[#EC680A] transition-colors">
                    Transports Madrid (CRTM) <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[#e2e2ef]">&middot;</span>
                  <a href="https://www.spain.info/fr/" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1 text-sm text-[#334155] hover:text-[#EC680A] transition-colors">
                    Office du tourisme Espagne <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[#e2e2ef]">&middot;</span>
                  <a href="https://www.skyscanner.fr/" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1 text-sm text-[#334155] hover:text-[#EC680A] transition-colors">
                    Skyscanner (vols) <ExternalLink className="w-3 h-3" />
                  </a>
                </>
              ) : (
                <>
                  <a href="https://www.immobiliare.it/" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1 text-sm text-[#334155] hover:text-[#EC680A] transition-colors">
                    Immobiliare (logement) <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[#e2e2ef]">&middot;</span>
                  <a href="https://www.atac.roma.it/" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1 text-sm text-[#334155] hover:text-[#EC680A] transition-colors">
                    Transports Rome (ATAC) <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[#e2e2ef]">&middot;</span>
                  <a href="https://www.italia.it/fr" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1 text-sm text-[#334155] hover:text-[#EC680A] transition-colors">
                    Office du tourisme Italie <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[#e2e2ef]">&middot;</span>
                  <a href="https://www.skyscanner.fr/" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1 text-sm text-[#334155] hover:text-[#EC680A] transition-colors">
                    Skyscanner (vols) <ExternalLink className="w-3 h-3" />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          12. FINANCEMENT + CTA + STICKY
      ══════════════════════════════════════════════════════════════════ */}
      <FinancingBanner />

      <section className="relative py-10 md:py-16 bg-[#1B1D3A] overflow-hidden" data-program-cta>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec680a] via-[#615ca5] to-[#ec680a]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#ffffff" }}>
            Prêt à étudier à {city.name} ?
          </h2>
          <p className="text-gray-300 mb-8">
            Un expert Edumove vous rappelle pour étudier votre projet gratuitement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://candidature.edumove.fr" className="inline-block bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-8 py-3.5 rounded-[5px] transition-all hover:shadow-xl hover:shadow-[#ec680a]/20">
              Déposer ma candidature
            </a>
            <ContactButton className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-8 py-3.5 rounded-[5px] hover:bg-white/10 transition-all">
              Être contacté
            </ContactButton>
          </div>
          <p className="text-gray-400 mt-4 text-sm">+33 1 89 74 42 57</p>
        </div>
      </section>

      <StickyBar />

      {/* JSON-LD FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: city.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
    </>
  );
}
