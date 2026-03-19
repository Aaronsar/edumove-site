"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, Globe, FileText, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import type { ProgramDetail } from "@/data/program-details";
import FiliereIcon from "@/components/shared/FiliereIcon";

interface ProgramLinksProps {
  universityShort: string; // "LINK", "UCJC", "UE"
  programs: ProgramDetail[];
}

export default function ProgramLinks({ universityShort, programs }: ProgramLinksProps) {
  const [expanded, setExpanded] = useState(false);
  const PREVIEW_COUNT = 3;

  // Flatten all programs
  const allPrograms = programs;

  return (
    <section id="programmes" className="relative py-16 bg-[#fafbff] overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#615CA5]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#EC680A]/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4">
        <p className="text-center text-sm uppercase tracking-widest text-[#EC680A] mb-3 font-semibold">Nos programmes</p>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "#1B1D3A" }}>
          Toutes les formations &agrave; {universityShort}
        </h2>
        <p className="text-center text-[#64748b] mb-12 max-w-xl mx-auto">
          Cliquez sur une formation pour d&eacute;couvrir le programme d&eacute;taill&eacute;, les tarifs et le processus d&apos;admission.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(expanded ? allPrograms : allPrograms.slice(0, PREVIEW_COUNT)).map((prog) => (
              <Link
                key={`${prog.filiereSlug}-${prog.slug}`}
                href={`/formations/${prog.filiereSlug}/${prog.slug}`}
                className="group relative block bg-white rounded-2xl border border-gray-200/80 overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(97,92,165,0.15)] hover:-translate-y-1.5 hover:border-[#EC680A]/30 transition-all duration-300"
              >
                {/* Badge */}
                {prog.isCheapest && (
                  <span className="absolute top-4 right-4 z-10 bg-[#EC680A] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    Le - cher
                  </span>
                )}
                {prog.isComplete && (
                  <span className="absolute top-4 right-4 z-10 bg-[#1B1D3A] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase">
                    Complet
                  </span>
                )}

                <div className="p-6">
                  {/* Header: icon + name */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 flex items-center justify-center shrink-0 shadow-md shadow-[#615CA5]/20">
                      <FiliereIcon slug={prog.filiereSlug} className="w-6 h-6" stroke="white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-[#1B1D3A] text-lg leading-tight">{prog.filiere}</h3>
                      <p className="text-[#94a3b8] text-sm">{prog.city} &middot; {prog.country}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-5">
                    <span className="text-2xl font-extrabold text-[#EC680A]">{prog.costPerYear}</span>
                    <span className="text-sm font-normal text-[#94a3b8] ml-0.5">/an</span>
                  </div>

                  {/* Info pills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="inline-flex items-center gap-1.5 bg-[#615CA5]/8 text-[#615CA5] text-xs font-medium px-3 py-1.5 rounded-lg">
                      <Clock className="w-3.5 h-3.5" />
                      {prog.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-[#615CA5]/8 text-[#615CA5] text-xs font-medium px-3 py-1.5 rounded-lg">
                      <Globe className="w-3.5 h-3.5" />
                      {prog.language}
                    </span>
                  </div>

                  {/* Admission */}
                  <div className="flex items-center gap-2 text-sm text-[#64748b] mb-5 pb-5 border-b border-gray-100">
                    <FileText className="w-4 h-4 text-[#615CA5] shrink-0" />
                    <span>{prog.admission}</span>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-1.5 text-[#EC680A] font-semibold text-sm">
                    Voir le programme complet
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
          ))}
        </div>

        {allPrograms.length > PREVIEW_COUNT && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 mx-auto flex items-center gap-2 text-sm font-semibold text-[#615CA5] hover:text-[#EC680A] transition-colors"
          >
            {expanded ? (
              <>
                Voir moins
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Voir toutes les formations ({allPrograms.length})
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </section>
  );
}
