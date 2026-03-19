"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const universites = [
  {
    name: "Universidad Europea",
    short: "UE",
    country: "Espagne",
    flag: "🇪🇸",
    campus: 5,
    filieres: 6,
    etudiants: "+300",
    since: "2019",
    cities: ["Madrid", "Málaga", "Valence", "Alicante", "Canaries"],
    highlight: "Le plus grand réseau universitaire santé en Espagne",
    slug: "universidad-europea",
    gradient: "from-[#1b1d3a] via-[#2a2d5a] to-[#615ca5]",
  },
  {
    name: "LINK Campus",
    short: "LINK",
    country: "Italie",
    flag: "🇮🇹",
    campus: 1,
    filieres: 4,
    etudiants: "+150",
    since: "2020",
    cities: ["Rome"],
    highlight: "Test d'admission 100% en français, aucun prérequis",
    slug: "link-campus",
    gradient: "from-[#615ca5] via-[#4a4790] to-[#1b1d3a]",
  },
  {
    name: "UCJC",
    short: "UCJC",
    country: "Espagne",
    flag: "🇪🇸",
    campus: 1,
    filieres: 3,
    etudiants: "+80",
    since: "2021",
    cities: ["Madrid"],
    highlight: "Admission sur entretien, l'option la plus accessible",
    slug: "ucjc",
    gradient: "from-[#ec680a] via-[#e07520] to-[#d45e09]",
  },
];

export default function UniversitesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with text left + CTA right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-2">Nos universités</p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight" style={{ color: "#1b1d3a" }}>
              Des universités d&apos;excellence,
              <br />
              <span className="text-[#615ca5]">reconnues à travers l&apos;Europe.</span>
            </h2>
          </div>
          <p className="text-[#334155] text-sm max-w-sm mt-4 md:mt-0 leading-relaxed">
            On sélectionne pour vous les meilleures universités. Excellence académique, diplôme reconnu en France, accompagnement sur mesure.
          </p>
        </div>

        {/* University cards — modern layout */}
        <div className="space-y-5">
          {universites.map((u, i) => (
            <motion.div
              key={u.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/universites/${u.slug}`}
                className="group block rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${u.gradient} p-6 md:p-8`}>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Left — Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{u.flag}</span>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white" style={{ color: "white" }}>{u.name}</h3>
                          <p className="text-white/50 text-xs">{u.country} · Partenaire depuis {u.since}</p>
                        </div>
                      </div>
                      <p className="text-white/70 text-sm mb-4 max-w-md">{u.highlight}</p>
                      <div className="flex flex-wrap gap-2">
                        {u.cities.map((c) => (
                          <span key={c} className="text-xs bg-white/10 text-white/80 px-3 py-1 rounded-full backdrop-blur-sm">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right — Stats */}
                    <div className="flex gap-4 md:gap-6">
                      {[
                        { value: u.campus.toString(), label: "Campus" },
                        { value: u.filieres.toString(), label: "Filières" },
                        { value: u.etudiants, label: "Étudiants" },
                      ].map((s, j) => (
                        <div key={j} className="text-center bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[70px]">
                          <p className="text-xl md:text-2xl font-bold text-white" style={{ color: "white" }}>{s.value}</p>
                          <p className="text-white/50 text-[10px] uppercase tracking-wide">{s.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#ec680a] transition-colors">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
