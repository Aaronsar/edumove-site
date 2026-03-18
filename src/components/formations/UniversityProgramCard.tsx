"use client";

import Link from "next/link";
import {
  MapPin,
  Clock,
  Euro,
  Globe,
  ChevronRight,
  AlertTriangle,
  Award,
  GraduationCap,
} from "lucide-react";
import type { Program, UniversitySlug } from "@/data/universities";

const universityBorderColors: Record<UniversitySlug, string> = {
  link: "border-l-emerald-500",
  ucjc: "border-l-amber-500",
  ue: "border-l-blue-500",
};

const admissionBadgeStyles: Record<string, { bg: string; text: string; label: string }> = {
  "test-qcm": {
    bg: "bg-blue-100",
    text: "text-blue-700",
    label: "Test QCM",
  },
  entretien: {
    bg: "bg-amber-100",
    text: "text-amber-700",
    label: "Entretien",
  },
  "pe-4-epreuves": {
    bg: "bg-purple-100",
    text: "text-purple-700",
    label: "PE 4 epreuves",
  },
  "pe-4-epreuves-francais": {
    bg: "bg-purple-100",
    text: "text-purple-700",
    label: "PE 4 epreuves",
  },
  dossier: {
    bg: "bg-green-100",
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
  universityColor,
  isCheapest,
}: UniversityProgramCardProps) {
  const borderColor = universityBorderColors[universitySlug];
  const badge = admissionBadgeStyles[program.admissionType] ?? admissionBadgeStyles["dossier"];

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 overflow-hidden ${
        program.isFull ? "opacity-75" : ""
      }`}
    >
      {/* Full overlay */}
      {program.isFull && (
        <div className="absolute inset-0 bg-red-50/60 z-10 flex items-center justify-center rounded-2xl">
          <div className="bg-red-600 text-white font-bold text-lg px-6 py-2 rounded-lg rotate-[-12deg] shadow-lg flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            COMPLET
          </div>
        </div>
      )}

      {/* Cheapest badge */}
      {isCheapest && !program.isFull && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-[#EC680A] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Award className="w-3.5 h-3.5" />
            MOINS CHER
          </span>
        </div>
      )}

      {/* Card content */}
      <div className={`border-l-4 ${borderColor} p-5`}>
        {/* University name */}
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          {universityName}
        </h3>

        {/* Info grid */}
        <div className="space-y-2.5 mb-4">
          {/* Campus */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span>{program.campus}</span>
          </div>

          {/* Duration */}
          {program.durationYears > 0 && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span>
                {program.durationYears} an{program.durationYears > 1 ? "s" : ""}
              </span>
            </div>
          )}

          {/* Price */}
          {program.tuitionPerYear > 0 && (
            <div className="flex items-center gap-2 text-sm">
              <Euro className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <div>
                <span className="font-bold text-gray-900">
                  {program.tuitionPerYear.toLocaleString("fr-FR")}&nbsp;&euro;/an
                </span>
                <span className="text-gray-400 ml-2 text-xs">
                  (total : {program.totalCost.toLocaleString("fr-FR")}&nbsp;&euro;)
                </span>
              </div>
            </div>
          )}

          {/* Language */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Globe className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span>{program.language}</span>
          </div>
        </div>

        {/* Admission badge */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span
            className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full ${badge.bg} ${badge.text}`}
          >
            {badge.label}
          </span>
        </div>

        {/* Moyenne / Specialites */}
        <div className="space-y-1.5 mb-4 text-sm">
          <div className="flex items-start gap-2">
            <GraduationCap className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-gray-500">Moyenne min. : </span>
              {program.minimumGrade ? (
                <span className="font-medium text-gray-700">
                  {program.minimumGrade}
                </span>
              ) : (
                <span className="text-green-600 font-medium">Aucune</span>
              )}
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Award className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-gray-500">Spe requises : </span>
              {program.requiredSpecialities ? (
                <span className="font-medium text-gray-700">
                  {program.requiredSpecialities}
                </span>
              ) : (
                <span className="text-green-600 font-medium">
                  Aucune spe requise
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Note */}
        {program.note && !program.isFull && (
          <p className="text-xs text-gray-500 italic mb-3">{program.note}</p>
        )}

        {/* Link */}
        <Link
          href={`/universites/${universitySlug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-[#EC680A] hover:text-[#D45E09] transition-colors"
        >
          Voir l&apos;universite
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
