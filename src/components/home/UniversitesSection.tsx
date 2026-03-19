import Link from "next/link";

const universites = [
  {
    name: "Universidad Europea",
    short: "UE",
    location: "Espagne — 5 campus",
    flag: "🇪🇸",
    description: "Madrid, Málaga, Valence, Alicante, Canaries. 6 filières santé disponibles avec diplôme reconnu dans toute l'UE.",
    tags: ["6 filières", "5 campus", "PE ou dossier"],
    slug: "universidad-europea",
    cities: "Madrid · Málaga · Valence · Alicante · Canaries",
  },
  {
    name: "LINK Campus University",
    short: "LINK",
    location: "Rome, Italie",
    flag: "🇮🇹",
    description: "Test d'admission 100% en français. Cours d'italien intensif inclus. Ouvert à tous les profils bac sans prérequis.",
    tags: ["4 filières", "Test en français", "Aucun prérequis"],
    slug: "link-campus",
    cities: "Rome",
  },
  {
    name: "UCJC",
    short: "UCJC",
    location: "Madrid, Espagne",
    flag: "🇪🇸",
    description: "Admission par entretien uniquement, aucun test écrit. L'option la moins chère pour la kinésithérapie (9 420 €/an).",
    tags: ["3 filières", "Entretien seul", "Le - cher"],
    slug: "ucjc",
    cities: "Madrid",
  },
];

export default function UniversitesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-sm uppercase tracking-widest text-[#EC680A] mb-3 font-semibold">Nos partenaires</p>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: "#615CA5" }}>
          Universités partenaires d&apos;excellence
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {universites.map((u) => (
            <Link
              key={u.slug}
              href={`/universites/${u.slug}`}
              className="group flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header compact */}
              <div className="bg-[#1b1d3a] px-5 py-4 relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-xs">{u.flag} {u.location}</p>
                    <h3 className="text-white font-bold text-lg leading-tight" style={{ color: "white" }}>{u.name}</h3>
                  </div>
                  <span className="text-white/10 font-black text-3xl">{u.short}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[#334155] text-sm leading-relaxed mb-4">{u.description}</p>

                {u.cities && (
                  <p className="text-xs text-[#615ca5] font-medium mb-3">
                    <svg className="w-3.5 h-3.5 inline mr-1 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                    {u.cities}
                  </p>
                )}

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {u.tags.map((t) => (
                    <span key={t} className="text-xs bg-[#615ca5]/8 text-[#615ca5] px-2.5 py-1 rounded-full font-medium">{t}</span>
                  ))}
                </div>

                <span className="mt-auto text-[#EC680A] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  En savoir plus
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-block border border-[#EC680A] text-[#EC680A] font-medium px-6 py-2.5 rounded-[5px] text-sm hover:bg-[#EC680A] hover:text-white transition-all">
            Être contacté par un expert
          </a>
        </div>
      </div>
    </section>
  );
}
