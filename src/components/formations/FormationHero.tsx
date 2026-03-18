"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Filiere } from "@/data/filieres";

const gradientMap: Record<string, string> = {
  red: "from-[#1B1D3A] to-red-900",
  blue: "from-[#1B1D3A] to-[#046BD2]",
  green: "from-[#1B1D3A] to-green-800",
  purple: "from-[#1B1D3A] to-purple-900",
  amber: "from-[#1B1D3A] to-amber-800",
  cyan: "from-[#1B1D3A] to-cyan-800",
};

interface FormationHeroProps {
  filiere: Filiere;
}

export default function FormationHero({ filiere }: FormationHeroProps) {
  const gradient = gradientMap[filiere.color] ?? "from-[#1B1D3A] to-gray-900";

  return (
    <section
      className={`relative w-full bg-gradient-to-br ${gradient} py-16 min-h-[300px] flex items-center`}
    >
      <div className="max-w-5xl mx-auto px-4 w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-white/70 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href="/formations"
            className="hover:text-white transition-colors"
          >
            Formations
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-medium">{filiere.name}</span>
        </nav>

        {/* Icon */}
        <span className="text-6xl block mb-4" role="img" aria-label={filiere.name}>
          {filiere.icon}
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {filiere.fullName}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
          {filiere.description}
        </p>
      </div>
    </section>
  );
}
