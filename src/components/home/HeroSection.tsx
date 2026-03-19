"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const formations = [
  { name: "Dentaire", icon: "🦷", slug: "dentaire", color: "from-blue-500 to-blue-600", duration: "5-6 ans", count: "7 universités" },
  { name: "Médecine", icon: "🩺", slug: "medecine", color: "from-red-500 to-red-600", duration: "6 ans", count: "3 universités" },
  { name: "Kinésithérapie", icon: "💪", slug: "kinesitherapie", color: "from-green-500 to-green-600", duration: "3-4 ans", count: "7 universités" },
  { name: "Pharmacie", icon: "💊", slug: "pharmacie", color: "from-purple-500 to-purple-600", duration: "5 ans", count: "3 universités" },
  { name: "Vétérinaire", icon: "🐾", slug: "veterinaire", color: "from-amber-500 to-amber-600", duration: "5 ans", count: "1 université" },
  { name: "Prépa Dentaire", icon: "📚", slug: "prepa-dentaire", color: "from-cyan-500 to-cyan-600", duration: "1+5 ans", count: "1 université" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#fafbff]">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#EC680A]/8 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#615CA5]/8 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-blue-400/5 to-transparent rounded-full blur-2xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #1B1D3A 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 shadow-sm">
            <Image src="/edumove-icon-orange.svg" alt="" width={24} height={24} />
            <span className="text-sm font-medium text-[#334155]">N°1 de l&apos;accompagnement santé en Europe</span>
            <span className="bg-[#EC680A] text-white text-xs font-bold px-2 py-0.5 rounded-full">2026</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight" style={{ color: "#1B1D3A" }}>
            Vos études de santé
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#EC680A] to-[#f59e0b] bg-clip-text text-transparent">en Europe</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none"><path d="M2 8Q75 2 150 8T298 6" stroke="#EC680A" strokeWidth="3" strokeLinecap="round" opacity="0.3" /></svg>
            </span>
            {" "}commence ici.
          </h1>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center text-lg md:text-xl text-[#64748b] max-w-2xl mx-auto mb-10 leading-relaxed">
          Orientation, admission, financement jusqu&apos;à 100% et vie étudiante.
          <br className="hidden md:block" />
          <strong className="text-[#334155]">Admis ou remboursé.</strong> Vous ne payez rien avant d&apos;être praticien.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#formations" className="text-center bg-[#EC680A] hover:bg-[#d45e09] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-xl hover:shadow-[#EC680A]/20 hover:-translate-y-0.5">
            Découvrir nos formations →
          </a>
          <a href="#" className="text-center border-2 border-[#1B1D3A] text-[#1B1D3A] font-semibold px-8 py-4 rounded-xl text-lg hover:bg-[#1B1D3A] hover:text-white transition-all">
            Être contacté
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap justify-center gap-8 md:gap-16 mb-20">
          {[
            { value: "3", label: "Universités", icon: "🏛️" },
            { value: "6", label: "Filières", icon: "📋" },
            { value: "2", label: "Pays", icon: "🌍" },
            { value: "100%", label: "Finançable", icon: "💰" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <span className="text-2xl mb-1 block">{s.icon}</span>
              <p className="text-3xl md:text-4xl font-bold text-[#1B1D3A]">{s.value}</p>
              <p className="text-sm text-[#64748b]">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <div id="formations" className="scroll-mt-20">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-[#EC680A] mb-3">Choisis ta formation</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "#1B1D3A" }}>Nos formations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {formations.map((f, i) => (
              <motion.div key={f.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}>
                <Link href={`/formations/${f.slug}`} className="group block bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${f.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{f.icon}</span>
                    <div>
                      <h3 className="font-bold text-[#1B1D3A] text-lg group-hover:text-[#EC680A] transition-colors">{f.name}</h3>
                      <p className="text-sm text-[#94a3b8]">{f.duration} · {f.count}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center text-[#EC680A] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Découvrir <span className="ml-1">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
