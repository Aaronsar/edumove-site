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
    highlight: "Le plus grand réseau",
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
    highlight: "Test 100% en français",
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
    highlight: "Le moins cher",
  },
];

export default function UniversitesSection() {
  return (
    <section className="py-16 bg-[#f7f7fb]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-2">Nos partenaires</p>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#615CA5" }}>
            3 universités d&apos;excellence en Europe
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {universites.map((u) => (
            <Link
              key={u.slug}
              href={`/universites/${u.slug}`}
              className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top badge */}
              <div className="bg-[#615ca5] px-4 py-2 flex items-center justify-between">
                <span className="text-white text-xs font-semibold">{u.highlight}</span>
                <span className="text-white/60 text-lg">{u.flag}</span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-[#1b1d3a] text-lg mb-1">{u.name}</h3>
                <p className="text-[#615ca5] text-xs font-medium mb-3 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                  {u.cities}
                </p>
                <p className="text-[#334155] text-sm leading-relaxed mb-4 flex-1">{u.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {u.tags.map((t) => (
                    <span key={t} className="text-[10px] bg-[#1b1d3a]/5 text-[#1b1d3a] px-2 py-0.5 rounded font-medium">{t}</span>
                  ))}
                </div>
                <span className="text-[#ec680a] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                  Découvrir →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
