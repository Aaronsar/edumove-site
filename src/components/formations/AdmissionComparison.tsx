"use client";

import {
  FileText,
  CreditCard,
  ClipboardCheck,
  BookOpen,
  Scale,
} from "lucide-react";
import type { Program, University, UniversitySlug } from "@/data/universities";

/* ---------- Colour mapping per university ---------- */

const universityBannerBg: Record<UniversitySlug, string> = {
  link: "bg-emerald-500",
  ucjc: "bg-amber-500",
  ue: "bg-blue-500",
};

const universityAccent: Record<UniversitySlug, string> = {
  link: "text-emerald-500",
  ucjc: "text-amber-500",
  ue: "text-blue-500",
};

const universityDotBg: Record<UniversitySlug, string> = {
  link: "bg-emerald-500",
  ucjc: "bg-amber-500",
  ue: "bg-blue-500",
};

const universityOrder: UniversitySlug[] = ["link", "ucjc", "ue"];

/* ---------- Types & helpers ---------- */

interface AdmissionComparisonProps {
  programs: { university: University; program: Program }[];
}

interface AdmissionColumn {
  university: University;
  programs: Program[];
  admissionType: string;
  testFee: string;
  minimumGrade: string;
  requiredSpecialities: string;
}

function getAdmissionTypeLabel(type: string): string {
  switch (type) {
    case "test-qcm":
      return "Test QCM en français";
    case "entretien":
      return "Entretien (visio ou présentiel)";
    case "pe-4-epreuves":
      return "PE 4 épreuves";
    case "pe-4-epreuves-francais":
      return "PE 4 épreuves (parcours FR)";
    case "dossier":
      return "Sur dossier";
    default:
      return type;
  }
}

/* ---------- Component ---------- */

export default function AdmissionComparison({
  programs,
}: AdmissionComparisonProps) {
  // Group programs by university
  const byUniversity = new Map<
    UniversitySlug,
    { university: University; programs: Program[] }
  >();

  for (const item of programs) {
    const existing = byUniversity.get(item.university.slug);
    if (existing) {
      existing.programs.push(item.program);
    } else {
      byUniversity.set(item.university.slug, {
        university: item.university,
        programs: [item.program],
      });
    }
  }

  // Build columns in order
  const columns: AdmissionColumn[] = [];

  for (const slug of universityOrder) {
    const entry = byUniversity.get(slug);
    if (!entry) continue;

    const representativeProgram =
      entry.programs.find((p) => !p.isFull) ?? entry.programs[0];

    const admissionTypes = [
      ...new Set(entry.programs.map((p) => p.admissionType)),
    ];
    const admissionLabel = admissionTypes
      .map(getAdmissionTypeLabel)
      .join(" / ");

    const testFee =
      entry.university.testFee > 0
        ? `${entry.university.testFee}\u00A0\u20AC`
        : representativeProgram.testFee > 0
          ? `${representativeProgram.testFee}\u00A0\u20AC`
          : slug === "ue"
            ? "Inclus"
            : "0\u00A0\u20AC";

    const grades = entry.programs
      .map((p) => p.minimumGrade)
      .filter((g): g is string => g !== null);
    const uniqueGrades = [...new Set(grades)];
    const minimumGrade =
      uniqueGrades.length > 0 ? uniqueGrades.join(" / ") : "Aucune";

    const specs = entry.programs
      .map((p) => p.requiredSpecialities)
      .filter((s): s is string => s !== null);
    const uniqueSpecs = [...new Set(specs)];
    const requiredSpecialities =
      uniqueSpecs.length > 0 ? uniqueSpecs.join(" / ") : "Aucune";

    columns.push({
      university: entry.university,
      programs: entry.programs,
      admissionType: admissionLabel,
      testFee,
      minimumGrade,
      requiredSpecialities,
    });
  }

  if (columns.length === 0) return null;

  return (
    <section className="relative max-w-6xl mx-auto px-4 py-14">
      {/* Gradient divider */}
      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#ec680a]/30 to-transparent" />

      {/* Section header */}
      <div className="mb-10">
        <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-2">Admission</p>
        <div className="flex items-center gap-3">
          <Scale className="w-7 h-7 text-[#615CA5]" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A]" style={{ color: "#1b1d3a" }}>
            Comparer les modes d&apos;admission
          </h2>
        </div>
      </div>

      {/* Cards grid */}
      <div
        className={`grid grid-cols-1 ${
          columns.length === 2
            ? "md:grid-cols-2"
            : columns.length >= 3
              ? "md:grid-cols-2 lg:grid-cols-3"
              : ""
        } gap-6`}
      >
        {columns.map((col) => {
          const slug = col.university.slug as UniversitySlug;
          const bannerBg = universityBannerBg[slug];
          const accent = universityAccent[slug];
          const dotBg = universityDotBg[slug];

          return (
            <div
              key={slug}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Colored top banner (60px) */}
              <div
                className={`${bannerBg} px-6 py-4 flex items-center gap-3`}
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {col.university.shortName}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {col.university.name}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {col.university.countryFlag} {col.university.country}
                  </p>
                </div>
              </div>

              {/* Info list with icons */}
              <div className="p-6 space-y-5">
                {/* Admission type */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <FileText className={`w-5 h-5 ${accent}`} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                      Type d&apos;admission
                    </p>
                    <p className="text-sm font-semibold text-[#1B1D3A]">
                      {col.admissionType}
                    </p>
                  </div>
                </div>

                {/* Test fee */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <CreditCard className={`w-5 h-5 ${accent}`} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                      Frais d&apos;admission
                    </p>
                    <p className="text-sm font-semibold text-[#1B1D3A]">
                      {col.testFee}
                    </p>
                  </div>
                </div>

                {/* Minimum grade */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <BookOpen className={`w-5 h-5 ${accent}`} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                      Moyenne minimale
                    </p>
                    <p
                      className={`text-sm font-semibold ${
                        col.minimumGrade === "Aucune"
                          ? "text-green-600"
                          : "text-[#1B1D3A]"
                      }`}
                    >
                      {col.minimumGrade}
                    </p>
                  </div>
                </div>

                {/* Required specialities */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <ClipboardCheck className={`w-5 h-5 ${accent}`} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                      Spécialités requises
                    </p>
                    <p
                      className={`text-sm font-semibold ${
                        col.requiredSpecialities === "Aucune"
                          ? "text-green-600"
                          : "text-[#1B1D3A]"
                      }`}
                    >
                      {col.requiredSpecialities}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-4">
                    Processus d&apos;admission
                  </p>

                  {/* Steps with connecting dotted line */}
                  <div className="relative">
                    {col.university.admissionProcess.steps.map(
                      (step, idx, arr) => (
                        <div key={step.step} className="flex items-start gap-3 mb-4 last:mb-0 relative">
                          {/* Dotted line connector */}
                          {idx < arr.length - 1 && (
                            <div
                              className="absolute left-[11px] top-7 w-0.5 border-l-2 border-dotted border-gray-200"
                              style={{ height: "calc(100% - 4px)" }}
                            />
                          )}
                          {/* Step number dot */}
                          <div
                            className={`flex-shrink-0 w-6 h-6 rounded-full ${dotBg} text-white text-xs font-bold flex items-center justify-center z-10`}
                          >
                            {step.step}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-semibold text-[#1B1D3A]">
                              {step.label}
                            </span>
                            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  {col.university.admissionProcess.notes && (
                    <p className="text-xs text-gray-400 italic mt-3 pl-9">
                      {col.university.admissionProcess.notes}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
