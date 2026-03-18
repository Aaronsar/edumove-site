"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface UniHeroProps {
  flag: string;
  name: string;
  location: string;
  color: "emerald" | "amber" | "blue";
}

const gradientMap: Record<UniHeroProps["color"], string> = {
  emerald: "from-[#1B1D3A] to-emerald-800",
  amber: "from-[#1B1D3A] to-amber-800",
  blue: "from-[#1B1D3A] to-[#046BD2]",
};

export default function UniHero({ flag, name, location, color }: UniHeroProps) {
  return (
    <section
      className={`w-full bg-gradient-to-br ${gradientMap[color]} py-16 px-4`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-sm text-white/70 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link
            href="/universites"
            className="hover:text-white transition-colors"
          >
            Universit&eacute;s
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white font-medium">{name}</span>
        </nav>

        {/* Flag */}
        <div className="text-5xl mb-4">{flag}</div>

        {/* University name */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          {name}
        </h1>

        {/* Location subtitle */}
        <p className="text-lg text-white/80">{location}</p>
      </div>
    </section>
  );
}
