import Link from "next/link";
import { getProgramsByFiliere } from "@/data/program-details";
import type { ProgramDetail } from "@/data/program-details";

const filiereIcons: Record<string, string> = {
  dentaire: "🦷", medecine: "🩺", kinesitherapie: "💪",
  pharmacie: "💊", veterinaire: "🐾", "prepa-dentaire": "📚",
};

const filiereColors: Record<string, string> = {
  dentaire: "from-blue-500 to-blue-600",
  medecine: "from-red-500 to-red-600",
  kinesitherapie: "from-green-500 to-green-600",
  pharmacie: "from-purple-500 to-purple-600",
  veterinaire: "from-amber-500 to-amber-600",
  "prepa-dentaire": "from-cyan-500 to-cyan-600",
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
    <section className="py-16 bg-[#fafbff]">
      <div className="max-w-6xl mx-auto px-4">
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
                className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${filiereColors[filiereSlug] || "from-gray-500 to-gray-600"} p-4 flex items-center gap-3`}>
                  <span className="text-3xl">{filiereIcons[filiereSlug] || "🎓"}</span>
                  <div>
                    <h3 className="font-bold text-white text-lg" style={{ color: "white" }}>{prog.filiere}</h3>
                    <p className="text-white/80 text-sm">{prog.city} {prog.countryFlag}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-[#1B1D3A]">{prog.costPerYear}<span className="text-sm font-normal text-[#94a3b8]">/an</span></span>
                    {prog.isCheapest && <span className="bg-[#EC680A]/10 text-[#EC680A] text-xs font-bold px-2 py-1 rounded-full">Le - cher</span>}
                    {prog.isComplete && <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">COMPLET</span>}
                  </div>
                  <div className="space-y-1 text-sm text-[#64748b]">
                    <p>⏱ {prog.duration} · 🌍 {prog.language}</p>
                    <p>📋 {prog.admission}</p>
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
