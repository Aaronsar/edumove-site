"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { CountryPageData } from "@/data/country-pages";
import { getOtherFilieresByCountry } from "@/data/country-pages";
import type { Filiere } from "@/data/filieres";

interface CountryLinksSectionProps {
  currentFiliere: Filiere;
  countryData: CountryPageData;
}

export default function CountryLinksSection({
  currentFiliere,
  countryData,
}: CountryLinksSectionProps) {
  const otherFilieres = getOtherFilieresByCountry(
    currentFiliere.slug,
    countryData.countrySlug
  );

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back to parent */}
        <div className="mb-8">
          <Link
            href={`/formations/${currentFiliere.slug}`}
            className="inline-flex items-center gap-2 text-[#615CA5] hover:text-[#ec680a] font-semibold transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Voir tous les programmes de {currentFiliere.name} en Europe
          </Link>
        </div>

        {/* Cross-filiere links */}
        {otherFilieres.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-[#1B1D3A] mb-4">
              Autres formations en {countryData.countryName}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {otherFilieres.map((other) => (
                <Link
                  key={other.filiereSlug}
                  href={`/formations/${other.filiereSlug}/${other.countrySlug}`}
                  className="group flex items-center justify-between bg-[#fafbff] hover:bg-[#615CA5]/5 border border-[#e2e2ef] hover:border-[#615CA5]/30 rounded-xl px-5 py-4 transition-all"
                >
                  <span className="font-semibold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors">
                    {other.h1}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#64748b] group-hover:text-[#ec680a] transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
