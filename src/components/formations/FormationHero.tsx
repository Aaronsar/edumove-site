"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ContactButton from "@/components/shared/ContactButton";
import type { Filiere } from "@/data/filieres";

interface FormationHeroProps {
  filiere: Filiere;
  stats?: {
    campusCount: number;
    durationText: string;
    priceText: string;
    uniCount: number;
    countriesText: string;
  };
}

export default function FormationHero({ filiere, stats }: FormationHeroProps) {
  return (
    <section className="relative w-full bg-[#1b1d3a] overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#615ca5]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#ec680a]/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-10 md:py-14">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-white/60 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/#formations" className="hover:text-white transition-colors">Formations</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-medium">{filiere.name}</span>
        </nav>

        {/* 2-column layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left — Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: "white" }}>
              {filiere.fullName}
            </h1>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 max-w-md">
              {filiere.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://candidature.edumove.fr" className="text-center bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-6 py-3 rounded-[5px] transition-all hover:shadow-lg hover:shadow-[#ec680a]/20">
                Déposer ma candidature
              </a>
              <ContactButton className="text-center border border-white/30 text-white font-medium px-6 py-3 rounded-[5px] hover:bg-white/10 transition-all" />
            </div>
          </div>

          {/* Right — Highlights card */}
          <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4">
              {stats && (
                <>
                  <div className="bg-white/[0.06] rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-[#ec680a]">{stats.campusCount}</p>
                    <p className="text-white/50 text-[11px] mt-1">Campus</p>
                  </div>
                  <div className="bg-white/[0.06] rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-[#ec680a]">{stats.durationText}</p>
                    <p className="text-white/50 text-[11px] mt-1">De formation</p>
                  </div>
                  <div className="bg-white/[0.06] rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-[#ec680a]">{stats.uniCount}</p>
                    <p className="text-white/50 text-[11px] mt-1">Universités</p>
                  </div>
                  <div className="bg-white/[0.06] rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-[#ec680a]">{stats.countriesText}</p>
                    <p className="text-white/50 text-[11px] mt-1">Pays</p>
                  </div>
                </>
              )}
            </div>
            {/* Key selling points */}
            <div className="mt-4 space-y-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#ec680a]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#ec680a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <span className="text-white/70 text-sm">Sans concours PASS/LAS</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#ec680a]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#ec680a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <span className="text-white/70 text-sm">Diplôme reconnu dans toute l&apos;UE</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#ec680a]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#ec680a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <span className="text-white/70 text-sm">Financement jusqu&apos;à 100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
