"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import FiliereIcon from "@/components/shared/FiliereIcon";

export interface FormationLink {
  name: string;
  filiereSlug: string;
  programSlug: string;
}

interface UniHeroProps {
  name: string;
  location: string;
  formationLinks: FormationLink[];
}

export default function UniHero({
  name,
  location,
  formationLinks,
}: UniHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#1B1D3A]">
      {/* Decorative shapes — aligné home */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#615CA5]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#EC680A]/10 blur-3xl" />
        <div className="absolute top-10 left-10 grid grid-cols-7 gap-2 opacity-[0.15]">
          {Array.from({ length: 49 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-[#EC680A]" />
          ))}
        </div>
        <div className="absolute bottom-10 right-10 grid grid-cols-5 gap-2 opacity-[0.1]">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-white" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left — Texte + nom bien visible */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="flex items-center gap-1.5 text-sm text-white/70 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Accueil
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/" className="hover:text-white transition-colors">
                Universités
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white font-medium">{name}</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="text-white/80 text-xs font-medium">Université partenaire Edumove</span>
            </div>

            {/* H1 — nom de la faculté très visible */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 tracking-tight">
              <span className="text-white">{name}</span>
            </h1>

            <p className="text-lg text-white/70 mb-6 max-w-lg">{location}</p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="https://candidature.edumove.fr"
                className="text-center bg-[#EC680A] hover:bg-[#D45E09] text-white font-semibold px-6 py-3 rounded-[5px] transition-all hover:shadow-lg hover:shadow-[#EC680A]/20"
              >
                Déposer ma candidature gratuitement
              </a>
              <a
                href="#programmes"
                className="text-center border border-white/30 text-white font-medium px-6 py-3 rounded-[5px] hover:bg-white/10 transition-all"
              >
                Voir les programmes
              </a>
            </div>
          </motion.div>

          {/* Right — Blocs formations comme la home */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="formations"
            className="scroll-mt-20"
          >
            <p className="text-[#EC680A] text-xs uppercase tracking-widest mb-4 font-semibold">
              Formations disponibles
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {formationLinks.map((f, i) => (
                <motion.div
                  key={f.programSlug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.07 }}
                >
                  <Link
                    href={`/formations/${f.filiereSlug}/${f.programSlug}`}
                    className="group flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-[#EC680A]/40 transition-all duration-200"
                  >
                    <div className="mb-2 group-hover:scale-110 transition-transform text-white">
                      <FiliereIcon slug={f.filiereSlug} className="w-7 h-7" stroke="#ec680a" />
                    </div>
                    <span className="font-semibold text-white text-sm text-center">{f.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
