import type { ProgramDetail } from "@/data/program-details";

export default function ProgramCTA({ detail }: { detail: ProgramDetail }) {
  return (
    <section className="bg-[#1B1D3A] py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white italic mb-4" style={{ color: "white" }}>
          Intéressé(e) par {detail.filiere} à {detail.city} ?
        </h2>
        <p className="text-white/70 mb-8">
          Un expert EduMove vous rappelle sous 24h pour étudier votre dossier gratuitement.
        </p>
        <a
          href="#"
          className="inline-block bg-[#EC680A] hover:bg-[#D45E09] text-white font-semibold px-10 py-4 rounded-[5px] text-lg transition-colors"
        >
          Candidater pour {detail.filiere} à {detail.universityShort} →
        </a>
        <p className="text-white/50 mt-4 text-sm">+33 1 89 74 42 57</p>
      </div>
    </section>
  );
}
