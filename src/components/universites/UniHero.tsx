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
  emerald: "from-[#1B1D3A] via-[#1B1D3A] to-emerald-800",
  amber: "from-[#1B1D3A] via-[#1B1D3A] to-amber-800",
  blue: "from-[#1B1D3A] via-[#1B1D3A] to-[#046BD2]",
};

export default function UniHero({ flag, name, location, color }: UniHeroProps) {
  return (
    <section className={`relative w-full overflow-hidden bg-gradient-to-br ${gradientMap[color]} py-16 px-4`}>
      {/* Subtle charte background */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[560px] h-[560px] bg-gradient-to-bl from-[#EC680A]/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-gradient-to-tr from-[#615CA5]/12 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute top-10 left-10 grid grid-cols-7 gap-1.5 opacity-[0.10]">
          {Array.from({ length: 49 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#EC680A]" />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="relative z-10 flex items-center gap-1 text-sm text-white/70 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link
            href="/universites"
            className="hover:text-white transition-colors"
          >
            Universités
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white font-medium">{name}</span>
        </nav>

        {/* Flag */}
        <div className="relative z-10 text-5xl mb-4">{flag}</div>

        {/* University name */}
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
          {name}
        </h1>

        {/* Location subtitle */}
        <p className="relative z-10 text-lg text-white/80">{location}</p>
      </div>
    </section>
  );
}
