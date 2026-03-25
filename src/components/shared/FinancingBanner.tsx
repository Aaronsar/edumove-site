"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Euro } from "lucide-react";

export default function FinancingBanner() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Link href="/financement" className="group block">
          <div className="relative bg-gradient-to-br from-[#1B1D3A] to-[#2a2d52] rounded-2xl p-6 md:p-8 overflow-hidden hover:shadow-xl transition-shadow">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#615CA5]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#EC680A]/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Left */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EC680A]/20 flex items-center justify-center shrink-0">
                  <Euro className="w-6 h-6 text-[#EC680A]" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: "#ffffff" }}>
                    Besoin de financer vos études ?
                  </h3>
                  <p className="text-white/60 text-sm max-w-md">
                    Jusqu'à 75 000 € avec notre partenaire LCL. Remboursement uniquement après l'obtention de votre diplôme.
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="hidden md:flex items-center gap-2">
                  <Image src="/edumove-icon-orange.svg" alt="Edumove" width={24} height={24} className="h-5 w-auto" />
                  <span className="text-white/30 text-sm">&times;</span>
                  <Image src="/lcl-logo.svg" alt="LCL" width={40} height={16} className="h-4 w-auto rounded" />
                </div>
                <span className="inline-flex items-center gap-2 bg-[#EC680A] hover:bg-[#D45E09] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors group-hover:shadow-lg group-hover:shadow-[#EC680A]/20">
                  Découvrir le financement
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
