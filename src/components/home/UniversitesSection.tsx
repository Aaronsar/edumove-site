import Link from "next/link";

const universites = [
  {
    name: "Universidad Europea",
    short: "UE",
    location: "Espagne — 5 campus",
    flag: "🇪🇸",
    color: "from-blue-600 to-blue-800",
    borderColor: "border-blue-500",
    description: "Madrid, Málaga, Valence, Alicante, Canaries. 6 filières santé disponibles avec diplôme reconnu dans toute l'UE.",
    tags: ["6 filières", "5 campus", "PE ou dossier"],
    slug: "universidad-europea",
  },
  {
    name: "LINK Campus University",
    short: "LINK",
    location: "Rome, Italie",
    flag: "🇮🇹",
    color: "from-emerald-600 to-emerald-800",
    borderColor: "border-emerald-500",
    description: "Test d'admission 100% en français. Cours d'italien intensif inclus. Ouvert à tous les profils bac sans prérequis.",
    tags: ["4 filières", "Test en français", "Aucun prérequis"],
    slug: "link-campus",
  },
  {
    name: "UCJC",
    short: "UCJC",
    location: "Madrid, Espagne",
    flag: "🇪🇸",
    color: "from-amber-500 to-amber-700",
    borderColor: "border-amber-500",
    description: "Admission par entretien uniquement, aucun test écrit. L'option la moins chère pour la kinésithérapie (9 420 €/an).",
    tags: ["3 filières", "Entretien seul", "Le - cher"],
    slug: "ucjc",
  },
];

export default function UniversitesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-sm uppercase tracking-widest text-[#EC680A] mb-3 font-semibold">Nos partenaires</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: "#1B1D3A" }}>
          Universités partenaires d&apos;excellence
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {universites.map((u) => (
            <Link key={u.slug} href={`/universites/${u.slug}`} className={`group block bg-white rounded-2xl border ${u.borderColor} border-l-4 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
              <div className={`bg-gradient-to-br ${u.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-3 right-3 text-4xl opacity-30">{u.flag}</div>
                <span className="text-5xl font-black opacity-20 absolute -bottom-4 -right-2">{u.short}</span>
                <p className="text-white/80 text-sm mb-1">{u.flag} {u.location}</p>
                <h3 className="text-xl font-bold" style={{ color: "white" }}>{u.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-[#334155] text-sm mb-4 leading-relaxed">{u.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {u.tags.map((t) => (
                    <span key={t} className="text-xs bg-gray-100 text-[#334155] px-3 py-1 rounded-full font-medium">{t}</span>
                  ))}
                </div>
                <span className="text-[#EC680A] font-semibold text-sm group-hover:underline">En savoir plus →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-block border-2 border-[#EC680A] text-[#EC680A] font-semibold px-8 py-3 rounded-xl hover:bg-[#EC680A] hover:text-white transition-all">
            Être contacté par un expert
          </a>
        </div>
      </div>
    </section>
  );
}
