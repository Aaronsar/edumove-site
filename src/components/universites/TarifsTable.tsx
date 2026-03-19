"use client";

import type { Program } from "@/data/universities";

const filiereLabels: Record<string, string> = {
  medecine: "M\u00e9decine",
  dentaire: "Dentaire",
  kinesitherapie: "Kin\u00e9sith\u00e9rapie",
  pharmacie: "Pharmacie",
  veterinaire: "V\u00e9t\u00e9rinaire",
  "prepa-dentaire": "Pr\u00e9pa Dentaire",
};

function formatEuro(amount: number): string {
  if (amount === 0) return "\u2014";
  return amount.toLocaleString("fr-FR") + "\u00a0\u20ac";
}

interface TarifsTableProps {
  programs: Program[];
  showCampus?: boolean;
}

export default function TarifsTable({
  programs,
  showCampus = false,
}: TarifsTableProps) {
  // Determine the cheapest total cost per filiere (excluding full programs)
  const cheapestByFiliere: Record<string, number> = {};
  for (const p of programs) {
    if (p.isFull) continue;
    const current = cheapestByFiliere[p.filiere];
    if (current === undefined || p.totalCost < current) {
      cheapestByFiliere[p.filiere] = p.totalCost;
    }
  }

  const showMoyenne = programs.some((p) => p.minimumGrade);

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold italic text-[#1B1D3A] mb-6">
          Tarifs et fili&egrave;res
        </h2>
        <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="bg-[#1B1D3A] text-white">
                <th className="text-left px-4 py-3 font-semibold">
                  Fili&egrave;re
                </th>
                {showCampus && (
                  <th className="text-left px-4 py-3 font-semibold">Campus</th>
                )}
                <th className="text-left px-4 py-3 font-semibold">
                  Dur&eacute;e
                </th>
                <th className="text-left px-4 py-3 font-semibold">
                  Tarif/an
                </th>
                <th className="text-left px-4 py-3 font-semibold">Langue</th>
                <th className="text-left px-4 py-3 font-semibold">
                  Admission
                </th>
                {showMoyenne && (
                  <th className="text-left px-4 py-3 font-semibold">Moyenne</th>
                )}
              </tr>
            </thead>
            <tbody>
              {programs.map((p, i) => {
                const isCheapest =
                  !p.isFull &&
                  p.totalCost === cheapestByFiliere[p.filiere] &&
                  programs.filter(
                    (x) =>
                      x.filiere === p.filiere && !x.isFull
                  ).length > 1;

                return (
                  <tr
                    key={`${p.filiere}-${p.campus}-${i}`}
                    className={`
                      border-t border-gray-200
                      ${p.isFull ? "bg-gray-100 text-gray-400" : ""}
                      ${!p.isFull && i % 2 === 1 ? "bg-gray-50" : ""}
                      ${isCheapest ? "bg-[#EC680A]/10" : ""}
                    `}
                  >
                    <td className="px-4 py-3 font-medium">
                      <div className="flex items-center gap-2">
                        {filiereLabels[p.filiere] ?? p.filiere}
                        {p.isFull && (
                          <span className="inline-block bg-[#1B1D3A] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                            Complet
                          </span>
                        )}
                        {p.note && !p.isFull && (
                          <span className="inline-block bg-[#EC680A]/15 text-[#D45E09] text-[10px] font-bold px-2 py-0.5 rounded">
                            {p.note}
                          </span>
                        )}
                      </div>
                    </td>
                    {showCampus && (
                      <td className="px-4 py-3">{p.campus}</td>
                    )}
                    <td className="px-4 py-3">
                      {p.durationYears > 0 ? `${p.durationYears} ans` : "\u2014"}
                    </td>
                    <td className="px-4 py-3 font-bold">
                      {formatEuro(p.tuitionPerYear)}
                    </td>
                    <td className="px-4 py-3">{p.language}</td>
                    <td className="px-4 py-3">{p.admissionDescription}</td>
                    {showMoyenne && (
                      <td className="px-4 py-3">
                        {p.minimumGrade ?? "\u2014"}
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
