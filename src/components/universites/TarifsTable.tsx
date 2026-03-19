"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
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
  const [expanded, setExpanded] = useState(false);
  const PREVIEW_COUNT = 3;
  const canCollapse = programs.length > PREVIEW_COUNT;
  const visiblePrograms = canCollapse && !expanded ? programs.slice(0, PREVIEW_COUNT) : programs;

  const cheapestByFiliere: Record<string, number> = {};
  for (const p of programs) {
    if (p.isFull) continue;
    const current = cheapestByFiliere[p.filiere];
    if (current === undefined || p.totalCost < current) {
      cheapestByFiliere[p.filiere] = p.totalCost;
    }
  }

  return (
    <section className="py-10 md:py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold italic text-[#1B1D3A] mb-6">
          Tarifs et fili&egrave;res
        </h2>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-xl shadow-sm border border-gray-200">
          <table className="w-full text-sm">
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
              </tr>
            </thead>
            <tbody>
              {visiblePrograms.map((p, i) => {
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
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden flex flex-col gap-3">
          {visiblePrograms.map((p, i) => {
            const isCheapest =
              !p.isFull &&
              p.totalCost === cheapestByFiliere[p.filiere] &&
              programs.filter(
                (x) => x.filiere === p.filiere && !x.isFull
              ).length > 1;

            return (
              <div
                key={`${p.filiere}-${p.campus}-${i}`}
                className={`rounded-xl border p-4 ${
                  p.isFull
                    ? "bg-gray-50 border-gray-200 opacity-60"
                    : isCheapest
                    ? "bg-[#EC680A]/5 border-[#EC680A]/30"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold text-[#1B1D3A] text-base">
                    {filiereLabels[p.filiere] ?? p.filiere}
                  </span>
                  {p.isFull && (
                    <span className="bg-[#1B1D3A] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      Complet
                    </span>
                  )}
                  {p.note && !p.isFull && (
                    <span className="bg-[#EC680A]/15 text-[#D45E09] text-[10px] font-bold px-2 py-0.5 rounded">
                      {p.note}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                  {showCampus && (
                    <>
                      <span className="text-gray-500">Campus</span>
                      <span className="font-medium text-[#1B1D3A]">{p.campus}</span>
                    </>
                  )}
                  <span className="text-gray-500">Dur&eacute;e</span>
                  <span className="font-medium text-[#1B1D3A]">
                    {p.durationYears > 0 ? `${p.durationYears} ans` : "\u2014"}
                  </span>
                  <span className="text-gray-500">Tarif/an</span>
                  <span className="font-bold text-[#EC680A]">
                    {formatEuro(p.tuitionPerYear)}
                  </span>
                  <span className="text-gray-500">Langue</span>
                  <span className="font-medium text-[#1B1D3A]">{p.language}</span>
                  <span className="text-gray-500">Admission</span>
                  <span className="font-medium text-[#1B1D3A]">{p.admissionDescription}</span>
                </div>
              </div>
            );
          })}
        </div>

        {canCollapse && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 mx-auto flex items-center gap-2 text-sm font-semibold text-[#615CA5] hover:text-[#EC680A] transition-colors"
          >
            {expanded ? (
              <>
                Voir moins
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Voir toutes les formations ({programs.length})
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </section>
  );
}
