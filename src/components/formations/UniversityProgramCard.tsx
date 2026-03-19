"use client";

import Link from "next/link";
import {
  MapPin,
  Clock,
  Euro,
  Globe,
  ArrowRight,
  AlertTriangle,
  Award,
} from "lucide-react";
import type { Program, UniversitySlug } from "@/data/universities";

/* ---------- colour mapping per university ---------- */

const universityStripeColors: Record<UniversitySlug, string> = {
  link: "bg-emerald-500",
  ucjc: "bg-amber-500",
  ue: "bg-blue-500",
};

const universityLogoBg: Record<UniversitySlug, string> = {
  link: "bg-emerald-500",
  ucjc: "bg-amber-500",
  ue: "bg-blue-500",
};

const universityInitials: Record<UniversitySlug, string> = {
  link: "LINK",
  ucjc: "UCJC",
  ue: "UE",
};

const admissionBadgeStyles: Record<
  string,
  { bg: string; text: string; label: string }
> = {
  "test-qcm": {
    bg: "bg-blue-50",
    text: "text-blue-700",
    label: "Test QCM",
  },
  entretien: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    label: "Entretien",
  },
  "pe-4-epreuves": {
    bg: "bg-purple-50",
    text: "text-purple-700",
    label: "PE 4 épreuves",
  },
  "pe-4-epreuves-francais": {
    bg: "bg-purple-50",
    text: "text-purple-700",
    label: "PE 4 épreuves",
  },
  dossier: {
    bg: "bg-green-50",
    text: "text-green-700",
    label: "Sur dossier",
  },
};

interface UniversityProgramCardProps {
  program: Program;
  universityName: string;
  universitySlug: UniversitySlug;
  universityColor: string;
  isCheapest?: boolean;
}

export default function UniversityProgramCard({
  program,
  universityName,
  universitySlug,
  isCheapest,
}: UniversityProgramCardProps) {
  const stripeColor = universityStripeColors[universitySlug];
  const logoBg = universityLogoBg[universitySlug];
  const initials = universityInitials[universitySlug];
  const badge =
    admissionBadgeStyles[program.admissionType] ??
    admissionBadgeStyles["dossier"];

  return (
    <div
      className={`relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col ${
        program.isFull ? "opacity-80" : ""
      }`}
    >
      {/* Top colored stripe */}
      <div className={`h-1 ${stripeColor}`} />

      {/* COMPLET diagonal overlay */}
      {program.isFull && (
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="absolute inset-0 bg-red-50/50" />
          <div className="bg-red-600 text-white font-bold text-base px-8 py-2 rotate-[-12deg] shadow-lg flex items-center gap-2 z-30">
            <AlertTriangle className="w-4 h-4" />
            COMPLET
          </div>
        </div>
      )}

      {/* MOINS CHER badge */}
      {isCheapest && !program.isFull && (
        <div className="absolute top-4 right-3 z-10">
          <span className="bg-[#EC680A] text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <Award className="w-3 h-3" />
            MOINS CHER
          </span>
        </div>
      )}

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        {/* University logo + name */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-12 h-12 rounded-full ${logoBg} flex items-center justify-center flex-shrink-0`}
          >
            <span className="text-white font-bold text-xs tracking-wide">
              {initials}
            </span>
          </div>
          <div>
            <h3 className="text-base font-bold text-[#1B1D3A] leading-tight">
              {universityName}
            </h3>
            {/* Campus city with MapPin */}
            <div className="flex items-center gap-1 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-[#EC680A]" />
              <span className="text-sm text-gray-500">{program.campus}</span>
            </div>
          </div>
        </div>

        {/* Grey subtitle */}
        <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-3">
          Programme {program.filiere.replace("-", " ")}
        </p>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-3" />

        {/* Key info in 2-col grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-4 flex-1">
          {/* Duration */}
          {program.durationYears > 0 && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span className="text-sm text-gray-600">
                {program.durationYears} an{program.durationYears > 1 ? "s" : ""}
              </span>
            </div>
          )}

          {/* Price */}
          {program.tuitionPerYear > 0 && (
            <div className="flex items-center gap-2">
              <Euro className="w-4 h-4 text-[#EC680A] flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-base font-bold text-[#1B1D3A]">
                  {program.tuitionPerYear.toLocaleString("fr-FR")}&nbsp;&euro;
                </span>
                <span className="text-[10px] text-gray-400 leading-tight">
                  par an
                </span>
              </div>
            </div>
          )}

          {/* Language */}
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span className="text-sm text-gray-600">{program.language}</span>
          </div>

          {/* Admission badge */}
          <div className="flex items-center">
            <span
              className={`inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-full ${badge.bg} ${badge.text}`}
            >
              {badge.label}
            </span>
          </div>
        </div>

        {/* Total cost */}
        {program.totalCost > 0 && (
          <p className="text-xs text-gray-400 mb-3">
            Coût total : {program.totalCost.toLocaleString("fr-FR")}&nbsp;&euro;
          </p>
        )}

        {/* Note */}
        {program.note && !program.isFull && (
          <p className="text-xs text-gray-500 italic mb-3">{program.note}</p>
        )}

        {/* Bottom link */}
        <Link
          href={`/universites/${universitySlug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#EC680A] hover:text-[#D45E09] transition-colors mt-auto pt-2"
        >
          Voir l&apos;université
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
