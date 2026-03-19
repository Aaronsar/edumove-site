import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import type { ProgramDetail } from "@/data/program-details";

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

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-16" style={{ color: "#ffffff" }}>
        <nav className="flex items-center gap-1.5 text-sm mb-6" style={{ color: "#ffffff" }}>
          <Link href="/" className="hover:opacity-90 transition-opacity" style={{ color: "#ffffff" }}>Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5" style={{ color: "#ffffff" }} />
          <Link href={`/formations/${detail.filiereSlug}`} className="hover:opacity-90 transition-opacity" style={{ color: "#ffffff" }}>{detail.filiere}</Link>
          <ChevronRight className="w-3.5 h-3.5" style={{ color: "inherit" }} />
          <span className="font-medium" style={{ color: "#ffffff" }}>{detail.universityShort} — {detail.city}</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left — text */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight" style={{ color: "#ffffff" }}>
              {detail.filiere} <span className="text-[#EC680A]">—</span> {detail.universityShort}
            </h1>
            <p className="text-xl mb-2" style={{ color: "#ffffff" }}>{detail.university}</p>
            <p className="text-lg flex items-center gap-2" style={{ color: "#ffffff" }}>
              <MapPin className="w-5 h-5 text-[#EC680A]" />
              {detail.city}, {detail.country}
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-3 mt-6">
              {detail.isCheapest && (
                <span className="inline-flex items-center bg-[#EC680A] text-white text-sm font-semibold px-4 py-2.5 rounded-full">
                  Option la moins chère
                </span>
              )}
              <a
                href="https://candidature.edumove.fr"
                className="group inline-flex items-center gap-2 bg-[#EC680A] hover:bg-[#D45E09] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#EC680A]/25 hover:gap-3"
              >
              Déposer ma candidature gratuitement
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Right — hero image mosaic */}
          {detail.heroImages && detail.heroImages.length >= 4 && (
            <div className="hidden md:grid grid-cols-2 gap-3 w-80 lg:w-[400px] shrink-0">
              {detail.heroImages.slice(0, 4).map((src, i) => (
                <div key={i} className={`overflow-hidden shadow-lg ${
                  i === 0 ? "rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-lg" :
                  i === 1 ? "rounded-tl-lg rounded-tr-3xl rounded-bl-lg rounded-br-lg" :
                  i === 2 ? "rounded-tl-lg rounded-tr-lg rounded-bl-3xl rounded-br-lg" :
                  "rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-3xl"
                }`}>
                  <Image src={src} alt={`Campus ${detail.university}`} width={400} height={267} className="w-full h-full object-cover aspect-[3/2]" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
