"use client";

import Link from "next/link";
import { MapPin, Clock, Globe, ArrowRight, AlertTriangle, Sparkles } from "lucide-react";
import type { Program, UniversitySlug } from "@/data/universities";

const universityInitials: Record<UniversitySlug, string> = {
  link: "LINK",
  ucjc: "UCJC",
  ue: "UE",
};

const admissionLabels: Record<string, string> = {
  "test-qcm": "Test QCM",
  entretien: "Entretien",
  "pe-4-epreuves": "PE 4 épreuves",
  "pe-4-epreuves-francais": "PE (parcours FR)",
  dossier: "Sur dossier",
};

interface UniversityProgramCardProps {
  program: Program;
  universityName: string;
  universitySlug: UniversitySlug;
  universityColor: string;
  universityCountry: string;
  universityCountryFlag: string;
  isCheapest?: boolean;
}

export default function UniversityProgramCard({
  program,
  universityName,
  universitySlug,
  universityCountry,
  universityCountryFlag,
  isCheapest,
}: UniversityProgramCardProps) {
  const initials = universityInitials[universitySlug] ?? universitySlug.toUpperCase();
  const badgeLabel = admissionLabels[program.admissionType] ?? "Sur dossier";

  const slugMap: Record<UniversitySlug, string> = {
    link: "link-campus",
    ucjc: "ucjc",
    ue: "universidad-europea",
  };

  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col h-full ${
        program.isFull
          ? "opacity-60 border-gray-200"
          : isCheapest
            ? "border-[#EC680A]/30 shadow-md hover:shadow-xl hover:-translate-y-1.5 ring-2 ring-[#EC680A]/10"
            : "border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#615CA5]/20"
      }`}
    >
      {/* COMPLET overlay */}
      {program.isFull && (
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="bg-[#1B1D3A]/85 text-white font-bold text-sm px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <AlertTriangle className="w-4 h-4" />
            COMPLET 2026-2027
          </div>
        </div>
      )}

      {/* Cheapest badge */}
      {isCheapest && !program.isFull && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-[#EC680A] text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            Le moins cher
          </span>
        </div>
      )}

      {/* Top section */}
      <div className="p-6 pb-4">
        {/* University identity */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-[#615CA5] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xs tracking-wide">{initials}</span>
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-bold text-[#1B1D3A] leading-tight truncate">{universityName}</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-[#EC680A] flex-shrink-0" />
              <span className="text-sm text-[#64748b]">{program.campus}</span>
              <span className="text-[#64748b] text-xs">·</span>
              <span className="text-sm text-[#64748b]">{universityCountryFlag} {universityCountry}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="mx-6 border-t border-gray-100" />

      {/* Details */}
      <div className="p-6 pt-4 flex-1 flex flex-col">
        {/* Info chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {program.durationYears > 0 && (
            <span className="inline-flex items-center gap-1.5 bg-[#fafbff] border border-gray-100 text-[#334155] text-xs font-medium px-3 py-1.5 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-[#615CA5]" />
              {program.durationYears} an{program.durationYears > 1 ? "s" : ""}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 bg-[#fafbff] border border-gray-100 text-[#334155] text-xs font-medium px-3 py-1.5 rounded-lg">
            <Globe className="w-3.5 h-3.5 text-[#615CA5]" />
            {program.language}
          </span>
        </div>

        {/* Note */}
        {program.note && !program.isFull && (
          <p className="text-xs text-[#EC680A] font-medium mb-3">{program.note}</p>
        )}

        {/* CTA link */}
        <Link
          href={`/universites/${slugMap[universitySlug]}`}
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#EC680A] hover:text-[#D45E09] transition-colors group-hover:gap-2.5"
        >
          Découvrir le programme
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
