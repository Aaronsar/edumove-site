"use client";

import type { Program, University } from "@/data/universities";
import UniversityProgramCard from "./UniversityProgramCard";

interface ProgramsListProps {
  programs: { university: University; program: Program }[];
  cheapestTotalCost: number | null;
}

export default function ProgramsList({
  programs,
  cheapestTotalCost,
}: ProgramsListProps) {
  // Sort: non-full first, then by cheapest tuition per year
  const sorted = [...programs].sort((a, b) => {
    // Full programs go last
    if (a.program.isFull && !b.program.isFull) return 1;
    if (!a.program.isFull && b.program.isFull) return -1;
    // Among available programs, cheapest first
    return a.program.tuitionPerYear - b.program.tuitionPerYear;
  });

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Toutes les options disponibles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((item, index) => {
          const isCheapest =
            cheapestTotalCost !== null &&
            !item.program.isFull &&
            item.program.totalCost === cheapestTotalCost;

          return (
            <UniversityProgramCard
              key={`${item.university.slug}-${item.program.campus}-${index}`}
              program={item.program}
              universityName={item.university.shortName}
              universitySlug={item.university.slug}
              universityColor={item.university.slug}
              isCheapest={isCheapest}
            />
          );
        })}
      </div>
    </section>
  );
}
