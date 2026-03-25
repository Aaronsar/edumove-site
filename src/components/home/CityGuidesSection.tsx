"use client";

import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const cities = [
  {
    name: "Madrid",
    slug: "madrid",
    country: "Espagne",
    flag: "\u{1F1EA}\u{1F1F8}",
    description: "Capitale dynamique, 2h de Paris, 2 universites partenaires",
    color: "from-[#1b1d3a] to-[#615ca5]",
  },
  {
    name: "Rome",
    slug: "rome",
    country: "Italie",
    flag: "\u{1F1EE}\u{1F1F9}",
    description: "LINK Campus University, test d'admission 100% en francais",
    color: "from-[#615ca5] to-[#1b1d3a]",
  },
  {
    name: "Valence",
    slug: "valence",
    country: "Espagne",
    flag: "\u{1F1EA}\u{1F1F8}",
    description: "Campus UE en bord de mer, cadre de vie exceptionnel",
    color: "from-[#ec680a] to-[#d45e09]",
  },
  {
    name: "Malaga",
    slug: "malaga",
    country: "Espagne",
    flag: "\u{1F1EA}\u{1F1F8}",
    description: "Campus UE sur la Costa del Sol, promos a taille humaine",
    color: "from-[#1b1d3a] to-[#ec680a]",
  },
];

export default function CityGuidesSection() {
  return (
    <section className="py-14 bg-[#fafbff]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-2">
              Vie etudiante
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{ color: "#1b1d3a" }}
            >
              Nos guides par ville
            </h2>
          </div>
          <p className="text-[#334155] text-sm max-w-sm mt-4 md:mt-0 leading-relaxed">
            Logement, transports, budget, bons plans : tout ce qu&apos;il faut
            savoir avant de partir.
          </p>
        </div>

        {/* City cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cities.map((city, i) => (
            <motion.div
              key={city.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={`/vie-etudiante/${city.slug}`}
                className="group block rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full"
              >
                <div
                  className={`bg-gradient-to-br ${city.color} p-5 flex flex-col h-full min-h-[160px]`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-white/70" />
                    <span className="text-white font-bold text-lg">
                      {city.name}
                    </span>
                    <span className="text-sm">{city.flag}</span>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed flex-1">
                    {city.description}
                  </p>
                  <div className="flex items-center gap-1 mt-4 text-white/50 group-hover:text-white text-xs font-semibold transition-colors">
                    Decouvrir le guide
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
