import Link from "next/link";
import type { ProgramDetail } from "@/data/program-details";

const filiereGradients: Record<string, string> = {
  dentaire: "from-[#1B1D3A] to-blue-800",
  medecine: "from-[#1B1D3A] to-red-900",
  kinesitherapie: "from-[#1B1D3A] to-green-800",
  pharmacie: "from-[#1B1D3A] to-purple-900",
  veterinaire: "from-[#1B1D3A] to-amber-800",
  "prepa-dentaire": "from-[#1B1D3A] to-cyan-800",
};

const filiereIcons: Record<string, string> = {
  dentaire: "🦷", medecine: "🩺", kinesitherapie: "💪",
  pharmacie: "💊", veterinaire: "🐾", "prepa-dentaire": "📚",
};

export default function ProgramHero({ detail }: { detail: ProgramDetail }) {
  const gradient = filiereGradients[detail.filiereSlug] || "from-[#1B1D3A] to-blue-800";
  const icon = filiereIcons[detail.filiereSlug] || "🎓";

  return (
    <section className={`bg-gradient-to-r ${gradient} text-white py-16 relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full border-2 border-white/20" />
        <div className="absolute bottom-5 right-40 w-40 h-40 rounded-full border border-white/10" />
        <div className="absolute top-20 right-60 w-20 h-20 rounded-full bg-white/5" />
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <nav className="text-sm text-white/60 mb-6">
          <Link href="/" className="hover:text-white">Accueil</Link>
          <span className="mx-2">›</span>
          <Link href={`/formations/${detail.filiereSlug}`} className="hover:text-white">{detail.filiere}</Link>
          <span className="mx-2">›</span>
          <span className="text-white">{detail.universityShort} — {detail.city}</span>
        </nav>
        <div className="flex items-start gap-4 mb-4">
          <span className="text-5xl">{icon}</span>
          <span className="text-4xl">{detail.countryFlag}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-2" style={{ color: "white" }}>
          {detail.filiere} — {detail.universityShort}
        </h1>
        <p className="text-xl text-white/80 mb-2">{detail.university}</p>
        <p className="text-lg text-white/70 flex items-center gap-2">
          📍 {detail.city}, {detail.country}
        </p>
        {detail.isCheapest && (
          <span className="inline-block mt-3 bg-[#EC680A] text-white text-sm font-semibold px-4 py-1 rounded-full">
            💰 Option la moins chère
          </span>
        )}
      </div>
    </section>
  );
}
