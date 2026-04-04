"use client";

import Link from "next/link";
import { ChevronRight, GraduationCap, CheckCircle2 } from "lucide-react";
import ContactButton from "@/components/shared/ContactButton";
import ProgramsList from "./ProgramsList";
import FormationCTA from "./FormationCTA";
import CountryLinksSection from "./CountryLinksSection";
import StickyBar from "@/components/program/StickyBar";
import FinancingBanner from "@/components/shared/FinancingBanner";
import type { CountryPageData } from "@/data/country-pages";
import type { Filiere } from "@/data/filieres";
import type { Program, University } from "@/data/universities";

/* ── Auto-link university & city names in text ── */
const LINK_MAP: Array<{ pattern: RegExp; href: string }> = [
  { pattern: /Universidad Europea/g, href: "/universites/universidad-europea" },
  { pattern: /UCJC/g, href: "/universites/ucjc" },
  { pattern: /LINK Campus/g, href: "/universites/link-campus" },
];

function linkify(text: string): React.ReactNode[] {
  // Build a combined regex
  const combined = new RegExp(
    LINK_MAP.map((l) => `(${l.pattern.source})`).join("|"),
    "g"
  );
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = combined.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    // Find which pattern matched
    const matchedText = match[0];
    const linkDef = LINK_MAP.find((l) => new RegExp(l.pattern.source).test(matchedText));
    if (linkDef) {
      parts.push(
        <Link
          key={`${match.index}-${matchedText}`}
          href={linkDef.href}
          className="text-[#615CA5] hover:text-[#ec680a] underline underline-offset-2 font-medium transition-colors"
        >
          {matchedText}
        </Link>
      );
    } else {
      parts.push(matchedText);
    }
    lastIndex = match.index + matchedText.length;
  }
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : [text];
}

interface ProgramItem {
  university: University;
  program: Program;
}

interface CountryFilierePageProps {
  data: CountryPageData;
  filiere: Filiere;
  programs: ProgramItem[];
  cheapestTotalCost: number | null;
}

export default function CountryFilierePage({
  data,
  filiere,
  programs,
  cheapestTotalCost,
}: CountryFilierePageProps) {
  const sorted = [...programs].sort((a, b) => {
    if (a.program.isFull && !b.program.isFull) return 1;
    if (!a.program.isFull && b.program.isFull) return -1;
    return a.program.tuitionPerYear - b.program.tuitionPerYear;
  });

  const availablePrograms = programs.filter((p) => !p.program.isFull);
  const uniqueCampuses = new Set(programs.map((p) => p.program.campus));
  const uniqueUnis = new Set(programs.map((p) => p.university.slug));
  const durations = availablePrograms.map((p) => p.program.durationYears).filter((d) => d > 0);
  const minDuration = durations.length > 0 ? Math.min(...durations) : 0;
  const maxDuration = durations.length > 0 ? Math.max(...durations) : 0;
  const durationText = durations.length === 0 ? "N/A" : minDuration === maxDuration ? `${minDuration} ans` : `${minDuration}-${maxDuration} ans`;

  return (
    <main className="min-h-screen bg-white">
      {/* ── HERO ── */}
      <section className="relative w-full bg-[#1b1d3a] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#615ca5]/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#ec680a]/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-10 md:py-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-white/60 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/#formations" className="hover:text-white transition-colors">Formations</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href={`/formations/${filiere.slug}`} className="hover:text-white transition-colors">{filiere.name}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">{data.countryFlag} {data.countryName}</span>
          </nav>

          {/* 2-column layout */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left — Content */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">{data.countryFlag}</span>
                <span className="bg-[#ec680a]/20 text-[#ec680a] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {data.countryName}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: "#ffffff" }}>
                {data.h1}
              </h1>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 max-w-md [&_a]:text-white/80 [&_a]:hover:text-white [&_a]:underline">
                {linkify(data.intro)}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://candidature.edumove.fr" className="text-center bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-6 py-3 rounded-[5px] transition-all hover:shadow-lg hover:shadow-[#ec680a]/20">
                  Déposer ma candidature
                </a>
                <ContactButton className="text-center border border-white/30 text-white font-medium px-6 py-3 rounded-[5px] hover:bg-white/10 transition-all" />
              </div>
            </div>

            {/* Right — Stats */}
            <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/[0.06] rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-[#ec680a]">{uniqueCampuses.size}</p>
                  <p className="text-white/50 text-[11px] mt-1">Campus</p>
                </div>
                <div className="bg-white/[0.06] rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-[#ec680a]">{durationText}</p>
                  <p className="text-white/50 text-[11px] mt-1">De formation</p>
                </div>
                <div className="bg-white/[0.06] rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-[#ec680a]">{uniqueUnis.size}</p>
                  <p className="text-white/50 text-[11px] mt-1">Universités</p>
                </div>
                <div className="bg-white/[0.06] rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-[#ec680a]">{programs.length}</p>
                  <p className="text-white/50 text-[11px] mt-1">Programmes</p>
                </div>
              </div>
              {/* Selling points */}
              <div className="mt-4 space-y-2.5">
                {data.highlights.slice(0, 3).map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#ec680a]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#ec680a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </div>
                    <span className="text-white/70 text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POURQUOI SECTION ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-start gap-4">
            <div className="w-1 h-16 rounded-full bg-gradient-to-b from-[#EC680A] to-[#615CA5] shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-4">
                Pourquoi étudier {filiere.name.toLowerCase()} en {data.countryName} ?
              </h2>
              <p className="text-[#334155] leading-relaxed text-lg mb-6">
                {linkify(data.whyThisCountry)}
              </p>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {data.highlights.map((highlight, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#fafbff] rounded-xl p-4 border border-[#e2e2ef]">
                <CheckCircle2 className="w-5 h-5 text-[#ec680a] shrink-0 mt-0.5" />
                <span className="text-[#334155] text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTIONS DÉTAILLÉES ── */}
      {data.sections && data.sections.length > 0 && (
        <section className="py-12 md:py-16 bg-[#fafbff]">
          <div className="max-w-6xl mx-auto px-6 space-y-10">
            {data.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl md:text-2xl font-bold text-[#1B1D3A] mb-4">
                  {section.title}
                </h2>
                <p className="text-[#334155] leading-relaxed text-base">
                  {linkify(section.content)}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── PROGRAMMES ── */}
      <ProgramsList programs={programs} cheapestTotalCost={cheapestTotalCost} hideCountryFilter />

      {/* ── FINANCEMENT ── */}
      <FinancingBanner />

      {/* ── RECONNAISSANCE DIPLÔME ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#615CA5]/5 to-[#EC680A]/5 border border-[#615CA5]/15 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#615CA5]/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-[#615CA5]" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#1B1D3A] mb-3">
                  Reconnaissance du diplôme
                </h2>
                <p className="text-[#334155] leading-relaxed">
                  {linkify(data.diplomaRecognition)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      {data.faq.length > 0 && (
        <section className="py-12 md:py-16 bg-[#fafbff]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-8">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {data.faq.map((item, i) => (
                <details key={i} className="group bg-white rounded-xl border border-[#e2e2ef] overflow-hidden">
                  <summary className="px-6 py-4 cursor-pointer flex items-center justify-between font-semibold text-[#1B1D3A] hover:text-[#ec680a] transition-colors">
                    {item.question}
                    <ChevronRight className="w-4 h-4 transition-transform group-open:rotate-90 shrink-0 ml-4" />
                  </summary>
                  <div className="px-6 pb-4 text-[#334155] leading-relaxed">
                    {linkify(item.answer)}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── MAILLAGE INTERNE ── */}
      <CountryLinksSection
        currentFiliere={filiere}
        countryData={data}
      />

      {/* ── CTA ── */}
      <FormationCTA filiereName={`${filiere.name} en ${data.countryName}`} />

      {/* ── STICKY BAR ── */}
      <StickyBar />

      {/* ── JSON-LD Breadcrumb ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://edumove.fr/" },
              { "@type": "ListItem", position: 2, name: filiere.name, item: `https://edumove.fr/formations/${filiere.slug}` },
              { "@type": "ListItem", position: 3, name: `${filiere.name} en ${data.countryName}`, item: `https://edumove.fr/formations/${filiere.slug}/${data.countrySlug}` },
            ],
          }),
        }}
      />

      {/* ── JSON-LD FAQ ── */}
      {data.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: data.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      )}
    </main>
  );
}
