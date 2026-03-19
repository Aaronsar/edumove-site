"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const formations = [
  { name: "Dentaire", slug: "dentaire", icon: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M7 3C5.5 3 3.5 4 3.5 7c0 3 1 5.5 2 7.5s2 4 3 5c.7.7 1.5.8 2 .3.4-.4.5-1.2.5-2.3 0-1.5.3-2.5 1-2.5s1 1 1 2.5c0 1.1.1 1.9.5 2.3.5.5 1.3.4 2-.3 1-1 2-3 3-5s2-4.5 2-7.5c0-3-2-4-3.5-4-1.2 0-2.5.8-3.5 2-.3.4-.8.4-1 0C11.5 3.8 10.2 3 7 3z" /></svg> },
  { name: "Médecine", slug: "medecine", icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg> },
  { name: "Kinésithérapie", slug: "kinesitherapie", icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg> },
  { name: "Pharmacie", slug: "pharmacie", icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg> },
  { name: "Vétérinaire", slug: "veterinaire", icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" /></svg> },
];

export default function HeroSection() {
  return (
    <>
      {/* HERO — Full width dark navy */}
      <section className="relative bg-[#1b1d3a] overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#615ca5]/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#ec680a]/10 blur-3xl" />
          <div className="absolute top-10 left-10 grid grid-cols-7 gap-2 opacity-[0.15]">
            {Array.from({ length: 49 }).map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-[#ec680a]" />)}
          </div>
          <div className="absolute bottom-10 right-10 grid grid-cols-5 gap-2 opacity-[0.1]">
            {Array.from({ length: 25 }).map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-white" />)}
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left — Text */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <Image src="/edumove-icon-orange.svg" alt="" width={20} height={20} />
                <span className="text-white/80 text-xs font-medium">N°1 de l&apos;accompagnement santé en Europe</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5" style={{ color: "white" }}>
                Envole-toi vers les{" "}
                <span className="text-[#ec680a]">meilleures universités</span>{" "}
                de santé d&apos;Europe
              </h1>

              <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
                Admis ou remboursé. Financement jusqu&apos;à 100%. Vous ne payez rien avant d&apos;être praticien.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#" className="text-center bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-6 py-3 rounded-[5px] transition-all hover:shadow-lg hover:shadow-[#ec680a]/20">
                  Être contacté gratuitement
                </a>
                <a href="#formations" className="text-center border border-white/30 text-white font-medium px-6 py-3 rounded-[5px] hover:bg-white/10 transition-all">
                  En savoir plus
                </a>
              </div>

              {/* Stats inline */}
              <div className="flex gap-8 mt-10">
                {[
                  { value: "3", label: "Universités" },
                  { value: "5", label: "Filières" },
                  { value: "100%", label: "Finançable" },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-2xl md:text-3xl font-bold text-[#ec680a]">{s.value}</p>
                    <p className="text-white/50 text-xs">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Formation cards */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} id="formations" className="scroll-mt-20">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-4 font-semibold">Choisis ta formation</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {formations.map((f, i) => (
                  <motion.div key={f.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.07 }}>
                    <Link
                      href={`/formations/${f.slug}`}
                      className="group flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-[#ec680a]/40 transition-all duration-200"
                    >
                      <div className="text-[#ec680a] mb-2 group-hover:scale-110 transition-transform">{f.icon}</div>
                      <span className="font-semibold text-white text-sm text-center">{f.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Trust logos */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/30 text-xs mb-3">Ils parlent de nous</p>
                <div className="flex flex-wrap items-center gap-4 opacity-40">
                  <span className="text-white font-black text-sm">BFMTV.</span>
                  <span className="text-white font-serif font-bold text-sm italic">Forbes</span>
                  <span className="text-white font-bold text-sm">LCL</span>
                  <span className="text-white font-bold text-xs">L&apos;Étudiant</span>
                  <span className="text-white font-serif text-xs font-bold">Le Figaro</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
