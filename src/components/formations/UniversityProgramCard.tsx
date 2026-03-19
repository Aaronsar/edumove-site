"use client";

import Link from "next/link";
import { MapPin, Clock, Globe, ArrowRight, AlertTriangle, Sparkles } from "lucide-react";
import type { Program, UniversitySlug } from "@/data/universities";

const universityAccent: Record<UniversitySlug, { bg: string; text: string; ring: string }> = {
  link: { bg: "bg-emerald-500", text: "text-emerald-600", ring: "ring-emerald-500/20" },
  ucjc: { bg: "bg-amber-500", text: "text-amber-600", ring: "ring-amber-500/20" },
  ue: { bg: "bg-blue-500", text: "text-blue-600", ring: "ring-blue-500/20" },
};

const universityInitials: Record<UniversitySlug, string> = {
  link: "LINK",
  ucjc: "UCJC",
  ue: "UE",
};

const admissionLabels: Record<string, { label: string; color: string }> = {
  "test-qcm": { label: "Test QCM", color: "bg-blue-50 text-blue-700" },
  entretien: { label: "Entretien", color: "bg-amber-50 text-amber-700" },
  "pe-4-epreuves": { label: "PE 4 épreuves", color: "bg-purple-50 text-purple-700" },
  "pe-4-epreuves-francais": { label: "PE (parcours FR)", color: "bg-purple-50 text-purple-700" },
  dossier: { label: "Sur dossier", color: "bg-green-50 text-green-700" },
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
  const accent = universityAccent[universitySlug] ?? universityAccent.link;
  const initials = universityInitials[universitySlug] ?? universitySlug.toUpperCase();
  const badge = admissionLabels[program.admissionType] ?? admissionLabels["dossier"];

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
          <div className="bg-red-600/90 text-white font-bold text-sm px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
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

      {/* Top section: university identity */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-11 h-11 rounded-xl ${accent.bg} flex items-center justify-center flex-shrink-0`}>
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

        {/* Admission badge */}
        <span className={`inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-lg ${badge.color}`}>
          {badge.label}
        </span>
      </div>

      {/* Divider */}
      <div className="mx-6 border-t border-gray-100" />

      {/* Price + details */}
      <div className="p-6 pt-4 flex-1 flex flex-col">
        {/* Price highlight */}
        {program.tuitionPerYear > 0 && (
          <div className="mb-4">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-[#1B1D3A]">
                {program.tuitionPerYear.toLocaleString("fr-FR")}
              </span>
              <span className="text-lg font-semibold text-[#1B1D3A]">&euro;</span>
              <span className="text-sm text-[#94a3b8] ml-1">/ an</span>
            </div>
            {program.totalCost > 0 && (
              <p className="text-xs text-[#94a3b8] mt-1">
                Coût total : {program.totalCost.toLocaleString("fr-FR")}&nbsp;&euro;
              </p>
            )}
          </div>
        )}

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
          {program.minimumGrade && (
            <span className="inline-flex items-center gap-1.5 bg-[#fafbff] border border-gray-100 text-[#334155] text-xs font-medium px-3 py-1.5 rounded-lg">
              Moy. {program.minimumGrade}
            </span>
          )}
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
          Voir l&apos;université
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
