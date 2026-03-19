"use client";

import {
  FileText,
  CreditCard,
  ClipboardCheck,
  BookOpen,
  Scale,
  Info,
} from "lucide-react";
import type { Program, University, UniversitySlug } from "@/data/universities";

const universityOrder: UniversitySlug[] = ["link", "ucjc", "ue"];

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

const infoRows: { key: keyof Pick<AdmissionColumn, "admissionType" | "testFee" | "minimumGrade" | "requiredSpecialities">; label: string; icon: React.ElementType }[] = [
  { key: "admissionType", label: "Type d'admission", icon: FileText },
  { key: "testFee", label: "Frais d'admission", icon: CreditCard },
  { key: "minimumGrade", label: "Moyenne minimale", icon: BookOpen },
  { key: "requiredSpecialities", label: "Spécialités requises", icon: ClipboardCheck },
];

export default function AdmissionComparison({
  programs,
}: AdmissionComparisonProps) {
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
    <section className="relative py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#EC680A] mb-3">
            Admission
          </p>
          <div className="flex items-center justify-center gap-3">
            <Scale className="w-7 h-7 text-[#615CA5]" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#615CA5" }}>
              Comparer les modes d&apos;admission
            </h2>
          </div>
        </div>

        {/* Cards grid — always equal width */}
        <div className={`grid grid-cols-1 ${columns.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"} gap-6`}>
          {columns.map((col) => {
            const slug = col.university.slug as UniversitySlug;

            return (
              <div
                key={slug}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Header */}
                <div className="bg-[#1B1D3A] px-6 py-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#615CA5] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-[11px] tracking-wide">
                      {col.university.slug === "ue" ? "UE" : col.university.shortName}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-white truncate">
                      {col.university.name}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {col.university.country}
                    </p>
                  </div>
                </div>

                {/* Info rows */}
                <div className="p-6 space-y-4 flex-1">
                  {infoRows.map(({ key, label, icon: Icon }) => {
                    const value = col[key];
                    const isPositive = value === "Aucune" || value === "0\u00A0\u20AC" || value === "Inclus";
                    return (
                      <div key={key} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#615CA5]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-[#615CA5]" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider mb-0.5">
                            {label}
                          </p>
                          <p className={`text-sm font-semibold ${isPositive ? "text-[#EC680A]" : "text-[#1B1D3A]"}`}>
                            {value}
                          </p>
                        </div>
                      </div>
                    );
                  })}

                  {/* Divider + Process */}
                  <div className="border-t border-gray-100 pt-5">
                    <p className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider mb-4">
                      Processus d&apos;admission
                    </p>

                    <div className="relative">
                      {col.university.admissionProcess.steps.map(
                        (step, idx, arr) => (
                          <div key={step.step} className="flex items-start gap-3 mb-4 last:mb-0 relative">
                            {idx < arr.length - 1 && (
                              <div
                                className="absolute left-[11px] top-7 w-px bg-[#615CA5]/20"
                                style={{ height: "calc(100% - 4px)" }}
                              />
                            )}
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EC680A] text-white text-xs font-bold flex items-center justify-center z-10">
                              {step.step}
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-sm font-semibold text-[#1B1D3A]">
                                {step.label}
                              </span>
                              <p className="text-xs text-[#94a3b8] mt-0.5 leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        )
                      )}
                    </div>

                    {col.university.admissionProcess.notes && (
                      <div className="mt-4 bg-[#EC680A]/8 border border-[#EC680A]/15 rounded-xl p-3 flex items-start gap-2">
                        <Info className="w-4 h-4 text-[#EC680A] flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-[#1B1D3A] leading-relaxed">
                          {col.university.admissionProcess.notes}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
