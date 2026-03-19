"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Program, University } from "@/data/universities";
import UniversityProgramCard from "./UniversityProgramCard";

/* ---------- Country flag + name mapping ---------- */

const countryDisplay: Record<string, { flag: string; name: string }> = {
  Italie: { flag: "\u{1F1EE}\u{1F1F9}", name: "ITALIE" },
  Espagne: { flag: "\u{1F1EA}\u{1F1F8}", name: "ESPAGNE" },
  Portugal: { flag: "\u{1F1F5}\u{1F1F9}", name: "PORTUGAL" },
  Roumanie: { flag: "\u{1F1F7}\u{1F1F4}", name: "ROUMANIE" },
};

/* ---------- Types ---------- */

interface ProgramItem {
  university: University;
  program: Program;
}

interface CountryGroup {
  country: string;
  items: ProgramItem[];
}

interface ProgramsListProps {
  programs: ProgramItem[];
  cheapestTotalCost: number | null;
}

/* ---------- Horizontal scroll row per country ---------- */

function CountryRow({
  group,
  cheapestTotalCost,
}: {
  group: CountryGroup;
  cheapestTotalCost: number | null;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const display = countryDisplay[group.country] ?? {
    flag: "\u{1F30D}",
    name: group.country.toUpperCase(),
  };

  // Sort: non-full first, then by cheapest tuition per year
  const sorted = [...group.items].sort((a, b) => {
    if (a.program.isFull && !b.program.isFull) return 1;
    if (!a.program.isFull && b.program.isFull) return -1;
    return a.program.tuitionPerYear - b.program.tuitionPerYear;
  });

  return (
    <div className="mb-12">
      {/* Country banner */}
      <div className="bg-[#EC680A] rounded-xl px-6 py-4 flex items-center gap-4 mb-6 shadow-md">
        {/* Flag in white circle */}
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
          <span className="text-3xl leading-none">{display.flag}</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
          {display.name}
        </h3>
        <span className="ml-auto text-white/80 text-sm font-medium">
          {sorted.length} programme{sorted.length > 1 ? "s" : ""}
        </span>
      </div>

      {/* Scrollable row with arrows */}
      <div className="relative group">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Défiler à gauche"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Cards container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {sorted.map((item, index) => {
            const isCheapest =
              cheapestTotalCost !== null &&
              !item.program.isFull &&
              item.program.totalCost === cheapestTotalCost;

            return (
              <div
                key={`${item.university.slug}-${item.program.campus}-${index}`}
                className="flex-shrink-0 w-[300px] snap-start"
              >
                <UniversityProgramCard
                  program={item.program}
                  universityName={item.university.shortName}
                  universitySlug={item.university.slug}
                  universityColor={item.university.slug}
                  isCheapest={isCheapest}
                />
              </div>
            );
          })}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Défiler à droite"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}

/* ---------- Main component ---------- */

export default function ProgramsList({
  programs,
  cheapestTotalCost,
}: ProgramsListProps) {
  // Group programs by country
  const countryMap = new Map<string, ProgramItem[]>();
  for (const item of programs) {
    const country = item.university.country;
    const existing = countryMap.get(country);
    if (existing) {
      existing.push(item);
    } else {
      countryMap.set(country, [item]);
    }
  }

  const countryGroups: CountryGroup[] = Array.from(countryMap.entries()).map(
    ([country, items]) => ({ country, items })
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-2">
        Toutes les options disponibles
      </h2>
      <p className="text-gray-500 mb-10">
        Comparez les programmes par pays et par université
      </p>

      {countryGroups.map((group) => (
        <CountryRow
          key={group.country}
          group={group}
          cheapestTotalCost={cheapestTotalCost}
        />
      ))}
    </section>
  );
}
