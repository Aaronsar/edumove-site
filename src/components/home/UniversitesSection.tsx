"use client";
import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedStat({ value, isVisible }: { value: string; isVisible: boolean }) {
  const num = parseInt(value.replace(/[^0-9]/g, ""));
  const prefix = value.startsWith("+") ? "+" : "";
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible || isNaN(num)) return;
    let start = 0;
    const duration = 1500;
    const steps = 50;
    const increment = num / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isVisible, num]);

  return <>{prefix}{count}</>;
}

const universites = [
  {
    name: "Universidad Europea",
    short: "UE",
    country: "Espagne",
    campus: 5,
    filieres: 6,
    etudiants: "+300",
    since: "2019",
    cities: ["Madrid", "Málaga", "Valence", "Alicante", "Canaries"],
    highlight: "Le plus grand réseau universitaire santé en Espagne",
    slug: "universidad-europea",
    gradient: "from-[#1b1d3a] via-[#2a2d5a] to-[#615ca5]",
    photo: "/images/universites/ue-campus.jpg",
    photoAlt: "Campus Universidad Europea Madrid",
  },
  {
    name: "LINK Campus",
    short: "LINK",
    country: "Italie",
    campus: 1,
    filieres: 4,
    etudiants: "+150",
    since: "2020",
    cities: ["Rome"],
    highlight: "Test d'admission 100% en français, aucun prérequis",
    slug: "link-campus",
    gradient: "from-[#615ca5] via-[#4a4790] to-[#1b1d3a]",
    photo: "/images/universites/link-campus.png",
    photoAlt: "LINK Campus University Rome",
  },
  {
    name: "UCJC",
    short: "UCJC",
    country: "Espagne",
    campus: 1,
    filieres: 3,
    etudiants: "+80",
    since: "2021",
    cities: ["Madrid"],
    highlight: "Admission sur entretien, l'option la plus accessible",
    slug: "ucjc",
    gradient: "from-[#ec680a] via-[#e07520] to-[#d45e09]",
    photo: "/images/universites/ucjc-campus.jpg",
    photoAlt: "UCJC Madrid Campus",
  },
];

export default function UniversitesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-14 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with text left + CTA right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-2">Nos partenaires</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#1b1d3a" }}>
              Nos universités partenaires
            </h2>
          </div>
          <p className="text-[#334155] text-sm max-w-sm mt-4 md:mt-0 leading-relaxed">
            On sélectionne pour vous les meilleures universités. Excellence académique, diplôme reconnu en France, accompagnement sur mesure.
          </p>
        </div>

        {/* University cards — compact */}
        <div className="space-y-3">
          {universites.map((u, i) => (
            <motion.div
              key={u.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={`/universites/${u.slug}`}
                className="group block rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${u.gradient} px-5 py-4 md:px-6 md:py-5`}>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Globe className="w-5 h-5 text-white/80 shrink-0" />
                        <h3 className="text-base md:text-lg font-bold text-white truncate" style={{ color: "white" }}>{u.name}</h3>
                        <span className="text-white/40 text-[10px] hidden md:inline">· depuis {u.since}</span>
                      </div>
                      <p className="text-white/60 text-xs mb-2">{u.highlight}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {u.cities.map((c) => (
                          <span key={c} className="text-[10px] bg-white/10 text-white/70 px-2 py-0.5 rounded-full">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 mr-auto md:mr-0 md:ml-4">
                      {[
                        { value: u.campus.toString(), label: "Campus" },
                        { value: u.filieres.toString(), label: "Filières" },
                        { value: u.etudiants, label: "Étudiants" },
                      ].map((s, j) => (
                        <div key={j} className="text-center bg-white/10 rounded-lg px-4 py-2.5 min-w-[64px]">
                          <p className="text-xl font-bold text-white" style={{ color: "white" }}><AnimatedStat value={s.value} isVisible={isInView} /></p>
                          <p className="text-white/40 text-[9px] uppercase tracking-wide">{s.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center">
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
