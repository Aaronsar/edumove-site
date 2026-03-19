import Link from "next/link";
import { Clock, Globe, FileText } from "lucide-react";
import type { ProgramDetail } from "@/data/program-details";
import FiliereIcon from "@/components/shared/FiliereIcon";

/* Charte : violet #615CA5 pour les en-têtes filière */
const filiereColors: Record<string, string> = {
  dentaire: "from-[#615CA5] to-[#615CA5]/90",
  medecine: "from-[#615CA5] to-[#615CA5]/90",
  kinesitherapie: "from-[#615CA5] to-[#615CA5]/90",
  pharmacie: "from-[#615CA5] to-[#615CA5]/90",
  veterinaire: "from-[#615CA5] to-[#615CA5]/90",
  "prepa-dentaire": "from-[#615CA5] to-[#615CA5]/90",
};

interface ProgramLinksProps {
  universityShort: string; // "LINK", "UCJC", "UE"
  programs: ProgramDetail[];
}

export default function ProgramLinks({ universityShort, programs }: ProgramLinksProps) {
  // Group programs by filiere
  const grouped: Record<string, ProgramDetail[]> = {};
  for (const p of programs) {
    if (!grouped[p.filiereSlug]) grouped[p.filiereSlug] = [];
    grouped[p.filiereSlug].push(p);
  }

  return (
    <section id="programmes" className="relative py-16 bg-[#fafbff] overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#615CA5]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#EC680A]/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4">
        <p className="text-center text-sm uppercase tracking-widest text-[#EC680A] mb-3 font-semibold">Nos programmes</p>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "#1B1D3A" }}>
          Toutes les formations à {universityShort}
        </h2>
        <p className="text-center text-[#64748b] mb-12 max-w-xl mx-auto">
          Cliquez sur une formation pour découvrir le programme détaillé, les tarifs et le processus d&apos;admission.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(grouped).map(([filiereSlug, progs]) => (
            progs.map((prog) => (
              <Link
                key={`${prog.filiereSlug}-${prog.slug}`}
                href={`/formations/${prog.filiereSlug}/${prog.slug}`}
                className="group block bg-white rounded-2xl border-2 border-[#615CA5]/10 overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-[#EC680A]/30 transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${filiereColors[filiereSlug] || "from-gray-500 to-gray-600"} p-4 flex items-center gap-3`}>
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <FiliereIcon slug={filiereSlug} className="w-6 h-6" stroke="white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-white text-lg">{prog.filiere}</h3>
                    <p className="text-white/80 text-sm">{prog.city} · {prog.country}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-[#1B1D3A]">{prog.costPerYear}<span className="text-sm font-normal text-[#94a3b8]">/an</span></span>
                    {prog.isCheapest && <span className="bg-[#EC680A]/10 text-[#EC680A] text-xs font-bold px-2 py-1 rounded-full">Le - cher</span>}
                    {prog.isComplete && <span className="bg-[#1B1D3A]/10 text-[#1B1D3A] text-xs font-bold px-2 py-1 rounded-full">COMPLET</span>}
                  </div>
                  <div className="space-y-2 text-sm text-[#64748b]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#615CA5] shrink-0" />
                      <span>{prog.duration}</span>
                      <span className="text-[#cbd5e1]">·</span>
                      <Globe className="w-4 h-4 text-[#615CA5] shrink-0" />
                      <span>{prog.language}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#615CA5] shrink-0" />
                      <span>{prog.admission}</span>
                    </div>
                  </div>
                  <div className="mt-4 text-[#EC680A] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Voir le programme complet →
                  </div>
                </div>
              </Link>
            ))
          ))}
        </div>
      </div>
    </section>
  );
}
