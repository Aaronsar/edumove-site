"use client";

import { MapPin, Clock, Euro, GraduationCap, Globe } from "lucide-react";
import type { Program, University } from "@/data/universities";
import type { Filiere } from "@/data/filieres";

interface StatsBarProps {
  programs: { university: University; program: Program }[];
  filiere: Filiere;
}

export default function StatsBar({ programs, filiere }: StatsBarProps) {
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
      ? `A partir de ${minPrice.toLocaleString("fr-FR")}\u00A0\u20AC/an`
      : "N/A";

  // Number of unique universities
  const uniqueUnis = new Set(programs.map((p) => p.university.slug));
  const uniCount = uniqueUnis.size;

  // Countries
  const countries = new Set(programs.map((p) => p.university.country));
  const countriesText = Array.from(countries).join(", ");

  const stats = [
    {
      icon: <MapPin className="w-5 h-5 text-[#EC680A]" />,
      value: `${campusCount} campus`,
      label: "disponibles",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#EC680A]" />,
      value: durationText,
      label: "de formation",
    },
    {
      icon: <Euro className="w-5 h-5 text-[#EC680A]" />,
      value: priceText,
      label: "frais de scolarite",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-[#EC680A]" />,
      value: `${uniCount} universite${uniCount > 1 ? "s" : ""}`,
      label: "partenaires",
    },
    {
      icon: <Globe className="w-5 h-5 text-[#EC680A]" />,
      value: countriesText,
      label: countries.size > 1 ? "pays" : "pays",
    },
  ];

  return (
    <div className="bg-white shadow-sm rounded-2xl -mt-8 relative z-10 mx-auto max-w-5xl px-4 py-6 sm:mx-4 md:mx-auto">
      <div className="flex flex-wrap justify-around items-start gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center min-w-[120px] flex-1"
          >
            <div className="mb-2">{stat.icon}</div>
            <span className="text-sm md:text-base font-semibold text-gray-900">
              {stat.value}
            </span>
            <span className="text-xs text-gray-500">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
