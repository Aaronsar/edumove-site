"use client";

import type { Program, University, UniversitySlug } from "@/data/universities";

interface AdmissionComparisonProps {
  programs: { university: University; program: Program }[];
}

const universityColors: Record<UniversitySlug, string> = {
  link: "border-t-emerald-500",
  ucjc: "border-t-amber-500",
  ue: "border-t-blue-500",
};

const universityOrder: UniversitySlug[] = ["link", "ucjc", "ue"];

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
      return "Test QCM en francais";
    case "entretien":
      return "Entretien (visio ou presentiel)";
    case "pe-4-epreuves":
      return "PE 4 epreuves";
    case "pe-4-epreuves-francais":
      return "PE 4 epreuves (parcours FR)";
    case "dossier":
      return "Sur dossier";
    default:
      return type;
  }
}

export default function AdmissionComparison({
  programs,
}: AdmissionComparisonProps) {
  // Group programs by university
  const byUniversity = new Map<UniversitySlug, { university: University; programs: Program[] }>();

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

    // Take the first non-full program's admission info, or the first one available
    const representativeProgram =
      entry.programs.find((p) => !p.isFull) ?? entry.programs[0];

    // Collect all unique admission types for this filiere at this uni
    const admissionTypes = [...new Set(entry.programs.map((p) => p.admissionType))];
    const admissionLabel = admissionTypes.map(getAdmissionTypeLabel).join(" / ");

    // Test fee
    const testFee = entry.university.testFee > 0
      ? `${entry.university.testFee}\u00A0\u20AC`
      : representativeProgram.testFee > 0
        ? `${representativeProgram.testFee}\u00A0\u20AC`
        : slug === "ue"
          ? "Inclus"
          : "0\u00A0\u20AC";

    // Minimum grade - aggregate from all programs
    const grades = entry.programs
      .map((p) => p.minimumGrade)
      .filter((g): g is string => g !== null);
    const uniqueGrades = [...new Set(grades)];
    const minimumGrade = uniqueGrades.length > 0 ? uniqueGrades.join(" / ") : "Aucune";

    // Required specialities - aggregate
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
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold italic text-[#1B1D3A] mb-8">
        Comparer les modes d&apos;admission
      </h2>

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
          const borderColor = universityColors[col.university.slug as UniversitySlug];

          return (
            <div
              key={col.university.slug}
              className={`bg-white rounded-2xl p-6 shadow-sm border-t-4 ${borderColor}`}
            >
              {/* University header */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#1B1D3A]">
                  {col.university.shortName}
                </h3>
                <p className="text-sm text-gray-500">
                  {col.university.countryFlag} {col.university.country}
                </p>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    Type d&apos;admission
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    {col.admissionType}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    Frais d&apos;admission
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    {col.testFee}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    Moyenne minimale
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      col.minimumGrade === "Aucune"
                        ? "text-green-600"
                        : "text-gray-800"
                    }`}
                  >
                    {col.minimumGrade}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    Specialites requises
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      col.requiredSpecialities === "Aucune"
                        ? "text-green-600"
                        : "text-gray-800"
                    }`}
                  >
                    {col.requiredSpecialities}
                  </p>
                </div>

                {/* Admission process steps */}
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Processus
                  </p>
                  <ol className="space-y-2">
                    {col.university.admissionProcess.steps.map((step) => (
                      <li key={step.step} className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#EC680A]/10 text-[#EC680A] text-xs font-bold flex items-center justify-center mt-0.5">
                          {step.step}
                        </span>
                        <div>
                          <span className="text-sm font-medium text-gray-700">
                            {step.label}
                          </span>
                          <p className="text-xs text-gray-500">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  {col.university.admissionProcess.notes && (
                    <p className="text-xs text-gray-400 italic mt-2">
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
