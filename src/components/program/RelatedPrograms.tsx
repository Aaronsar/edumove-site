import Link from "next/link";
import { Clock, Globe, ArrowRight } from "lucide-react";
import type { ProgramDetail } from "@/data/program-details";
import { getProgramsByUniversity } from "@/data/program-details";
import FiliereIcon from "@/components/shared/FiliereIcon";

export default function RelatedPrograms({ detail }: { detail: ProgramDetail }) {
  const others = getProgramsByUniversity(detail.universityShort).filter(
    (p) => !(p.filiereSlug === detail.filiereSlug && p.slug === detail.slug)
  );

  if (others.length === 0) return null;

  return (
    <section className="relative py-16 bg-[#fafbff] overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#615CA5]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#EC680A]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <p className="text-center text-sm uppercase tracking-widest text-[#EC680A] mb-3 font-semibold">
          Autres formations
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#1B1D3A]">
          Découvrez les autres formations à {detail.universityShort}
        </h2>
        <p className="text-center text-[#64748b] mb-12 max-w-xl mx-auto">
          Explorez toutes nos formations disponibles à {detail.university}.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((prog) => (
            <Link
              key={`${prog.filiereSlug}-${prog.slug}`}
              href={`/formations/${prog.filiereSlug}/${prog.slug}`}
              className="group relative block bg-white rounded-2xl border border-gray-200/80 overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(97,92,165,0.15)] hover:-translate-y-1.5 hover:border-[#EC680A]/30 transition-all duration-300"
            >
              {prog.isCheapest && (
                <span className="absolute top-4 right-4 z-10 bg-[#EC680A] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  Le - cher
                </span>
              )}

              <div className="p-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 flex items-center justify-center shrink-0 shadow-md shadow-[#615CA5]/20">
                    <FiliereIcon slug={prog.filiereSlug} className="w-6 h-6" stroke="white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-[#1B1D3A] text-lg leading-tight">{prog.filiere}</h3>
                    <p className="text-[#94a3b8] text-sm">{prog.city} &middot; {prog.country}</p>
                  </div>
                </div>

                <div className="mb-5">
                  <span className="text-2xl font-extrabold text-[#EC680A]">{prog.costPerYear}</span>
                  <span className="text-sm font-normal text-[#94a3b8] ml-0.5">/an</span>
                </div>

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

                <div className="flex items-center gap-1.5 text-[#EC680A] font-semibold text-sm pt-5 border-t border-gray-100">
                  Voir le programme complet
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
