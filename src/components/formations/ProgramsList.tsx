"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Program, University } from "@/data/universities";
import UniversityProgramCard from "./UniversityProgramCard";

interface ProgramItem {
  university: University;
  program: Program;
}

interface ProgramsListProps {
  programs: ProgramItem[];
  cheapestTotalCost: number | null;
  hideCountryFilter?: boolean;
}

const countryMeta: Record<string, { flag: string; label: string }> = {
  Italie: { flag: "\u{1F1EE}\u{1F1F9}", label: "Italie" },
  Espagne: { flag: "\u{1F1EA}\u{1F1F8}", label: "Espagne" },
  Portugal: { flag: "\u{1F1F5}\u{1F1F9}", label: "Portugal" },
  Roumanie: { flag: "\u{1F1F7}\u{1F1F4}", label: "Roumanie" },
};

export default function ProgramsList({
  programs,
  cheapestTotalCost,
  hideCountryFilter = false,
}: ProgramsListProps) {
  const countries = Array.from(new Set(programs.map((p) => p.university.country)));
  const [activeCountry, setActiveCountry] = useState<string | null>(null);

  const filtered = activeCountry
    ? programs.filter((p) => p.university.country === activeCountry)
    : programs;

  const sorted = [...filtered].sort((a, b) => {
    if (a.program.isFull && !b.program.isFull) return 1;
    if (!a.program.isFull && b.program.isFull) return -1;
    return a.program.tuitionPerYear - b.program.tuitionPerYear;
  });

  return (
    <section className="relative py-12 md:py-20 bg-[#fafbff] overflow-hidden">
      {/* Decorative blurs like home */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#EC680A]/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#615CA5]/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <p className="text-sm font-semibold uppercase tracking-widest text-[#EC680A] mb-3">
          Programmes disponibles
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3" style={{ color: "#615CA5" }}>
          Comparez les programmes
        </h2>
        <p className="text-[#64748b] mb-8 max-w-lg">
          Filtrez par pays et trouvez le programme qui vous correspond.
        </p>

        {/* Country filter pills */}
        {!hideCountryFilter && (
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveCountry(null)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCountry === null
                  ? "bg-[#1B1D3A] text-white shadow-lg shadow-[#1B1D3A]/20"
                  : "bg-white text-[#334155] border border-gray-200 hover:border-[#EC680A]/40 hover:text-[#EC680A]"
              }`}
            >
              Tous ({programs.length})
            </button>
            {countries.map((country) => {
              const meta = countryMeta[country] ?? { flag: "\u{1F30D}", label: country };
              const count = programs.filter((p) => p.university.country === country).length;
              return (
                <button
                  key={country}
                  onClick={() => setActiveCountry(activeCountry === country ? null : country)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCountry === country
                      ? "bg-[#EC680A] text-white shadow-lg shadow-[#EC680A]/20"
                      : "bg-white text-[#334155] border border-gray-200 hover:border-[#EC680A]/40 hover:text-[#EC680A]"
                  }`}
                >
                  {meta.flag} {meta.label} ({count})
                </button>
              );
            })}
          </div>
        )}

        {/* Cards grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {sorted.map((item, index) => {
              const isCheapest =
                cheapestTotalCost !== null &&
                !item.program.isFull &&
                item.program.totalCost === cheapestTotalCost;

              return (
                <motion.div
                  key={`${item.university.slug}-${item.program.campus}-${item.program.filiere}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                >
                  <UniversityProgramCard
                    program={item.program}
                    universityName={item.university.shortName}
                    universitySlug={item.university.slug}
                    universityCountry={item.university.country}
                    isCheapest={isCheapest}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {sorted.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-[#64748b]">Aucun programme trouvé pour ce filtre.</p>
          </div>
        )}
      </div>
    </section>
  );
}
