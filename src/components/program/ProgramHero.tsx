import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import type { ProgramDetail } from "@/data/program-details";
import FiliereIcon from "@/components/shared/FiliereIcon";

export default function ProgramHero({ detail }: { detail: ProgramDetail }) {
  return (
    <section className="relative w-full overflow-hidden bg-[#1B1D3A] text-white">
      {/* Decorative shapes — aligné UniHero / home */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#615CA5]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#EC680A]/10 blur-3xl" />
        <div className="absolute top-10 left-10 grid grid-cols-7 gap-2 opacity-[0.15]">
          {Array.from({ length: 49 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-[#EC680A]" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-20">
        <nav className="flex items-center gap-1.5 text-sm text-white/70 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/formations/${detail.filiereSlug}`} className="hover:text-white transition-colors">{detail.filiere}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-medium">{detail.universityShort} — {detail.city}</span>
        </nav>

        <div className="flex items-start gap-4 mb-4">
          <div className="text-white">
            <FiliereIcon slug={detail.filiereSlug} className="w-12 h-12 md:w-14 md:h-14" stroke="#ec680a" />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight text-white">
          {detail.filiere} — {detail.universityShort}
        </h1>
        <p className="text-xl text-white/80 mb-2">{detail.university}</p>
        <p className="text-lg text-white/70 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[#EC680A]" />
          {detail.city}, {detail.country}
        </p>
        {detail.isCheapest && (
          <span className="inline-block mt-4 bg-[#EC680A] text-white text-sm font-semibold px-4 py-1.5 rounded-full">
            Option la moins chère
          </span>
        )}
      </div>
    </section>
  );
}
