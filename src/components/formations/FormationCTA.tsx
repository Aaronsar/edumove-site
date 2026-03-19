"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

interface FormationCTAProps {
  filiereName: string;
}

export default function FormationCTA({ filiereName }: FormationCTAProps) {
  return (
    <section className="relative bg-[#1B1D3A] overflow-hidden">
      {/* Orange accent line at top */}
      <div className="h-1 bg-[#EC680A]" />

      {/* Decorative floating graduation cap SVG */}
      <div className="absolute right-8 top-8 opacity-[0.06] pointer-events-none hidden md:block">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Graduation cap */}
          <polygon
            points="100,30 20,75 100,120 180,75"
            fill="white"
          />
          <polygon
            points="100,120 20,75 20,110 100,155 180,110 180,75"
            fill="white"
            opacity="0.6"
          />
          {/* Tassel */}
          <line
            x1="160"
            y1="75"
            x2="160"
            y2="135"
            stroke="white"
            strokeWidth="3"
          />
          <circle cx="160" cy="140" r="6" fill="white" />
          <line
            x1="160"
            y1="146"
            x2="160"
            y2="170"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Decorative floating circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-6 left-[10%] w-20 h-20 rounded-full bg-white/[0.02]" />
        <div className="absolute bottom-6 left-[30%] w-12 h-12 rounded-full bg-white/[0.03]" />
        <div className="absolute top-12 right-[40%] w-8 h-8 rounded-full bg-[#EC680A]/10" />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 relative z-10 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Intéressé(e) par {filiereName}&nbsp;?
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
          Un expert EduMove vous rappelle sous 24h pour étudier votre dossier
          gratuitement.
        </p>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2.5 bg-[#EC680A] text-white font-semibold px-10 py-4 rounded-lg hover:bg-[#D45E09] transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Être contacté
          <ArrowRight className="w-5 h-5" />
        </Link>

        {/* Phone number */}
        <div className="mt-6 flex items-center justify-center gap-2 text-white/50">
          <Phone className="w-4 h-4" />
          <span className="text-sm">Ou appelez-nous : 01 86 95 48 29</span>
        </div>
      </div>
    </section>
  );
}
