"use client";

import { MapPin, Clock, Euro, GraduationCap, Globe } from "lucide-react";
import type { Program, University } from "@/data/universities";

interface StatsBarProps {
  programs: { university: University; program: Program }[];
}

export default function StatsBar({ programs }: StatsBarProps) {
  const availablePrograms = programs.filter((p) => !p.program.isFull);

  // Number of unique campuses
  const uniqueCampuses = new Set(programs.map((p) => p.program.campus));
  const campusCount = uniqueCampuses.size;

  // Duration range
  const durations = availablePrograms
    .map((p) => p.program.durationYears)
    .filter((d) => d > 0);
  const minDuration = durations.length > 0 ? Math.min(...durations) : 0;
  const maxDuration = durations.length > 0 ? Math.max(...durations) : 0;
  const durationText =
    durations.length === 0
      ? "N/A"
      : minDuration === maxDuration
        ? `${minDuration} ans`
        : `${minDuration}-${maxDuration} ans`;

  // Price range (cheapest available)
  const prices = availablePrograms
    .map((p) => p.program.tuitionPerYear)
    .filter((price) => price > 0);
  const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
  const priceText =
    minPrice > 0
      ? `${minPrice.toLocaleString("fr-FR")}\u00A0\u20AC/an`
      : "N/A";

  // Number of unique universities
  const uniqueUnis = new Set(programs.map((p) => p.university.slug));
  const uniCount = uniqueUnis.size;

  // Countries
  const countries = new Set(programs.map((p) => p.university.country));
  const countriesText = Array.from(countries).join(", ");

  const stats = [
    {
      icon: <MapPin className="w-5 h-5 text-white" />,
      value: `${campusCount} campus`,
      label: "Disponibles",
    },
    {
      icon: <Clock className="w-5 h-5 text-white" />,
      value: durationText,
      label: "De formation",
    },
    {
      icon: <Euro className="w-5 h-5 text-white" />,
      value: `Dès ${priceText}`,
      label: "Frais de scolarité",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      value: `${uniCount} université${uniCount > 1 ? "s" : ""}`,
      label: "Partenaires",
    },
    {
      icon: <Globe className="w-5 h-5 text-white" />,
      value: countriesText,
      label: countries.size > 1 ? "Pays" : "Pays",
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-2xl -mt-8 relative z-10 mx-auto max-w-6xl px-6 py-7 sm:mx-4 md:mx-auto border border-gray-100">
      <div className="flex flex-wrap justify-around items-start gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-3">
            {/* Divider before each stat except the first */}
            {i > 0 && (
              <div className="hidden sm:block w-px h-12 bg-gray-200 mr-3" />
            )}
            <div className="flex items-center gap-3 min-w-[140px]">
              {/* Colored icon circle */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EC680A] flex items-center justify-center shadow-sm">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-[#1B1D3A] leading-tight">
                  {stat.value}
                </span>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-400">
                  {stat.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
