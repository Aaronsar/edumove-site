"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const formations = [
  { name: "Dentaire", slug: "dentaire", color: "from-blue-500 to-blue-600", duration: "5-6 ans", count: "7 universités", icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M7 3C5.5 3 3.5 4 3.5 7c0 3 1 5.5 2 7.5s2 4 3 5c.7.7 1.5.8 2 .3.4-.4.5-1.2.5-2.3 0-1.5.3-2.5 1-2.5s1 1 1 2.5c0 1.1.1 1.9.5 2.3.5.5 1.3.4 2-.3 1-1 2-3 3-5s2-4.5 2-7.5c0-3-2-4-3.5-4-1.2 0-2.5.8-3.5 2-.3.4-.8.4-1 0C11.5 3.8 10.2 3 7 3z" /></svg> },
  { name: "Médecine", slug: "medecine", color: "from-red-500 to-red-600", duration: "6 ans", count: "3 universités", icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg> },
  { name: "Kinésithérapie", slug: "kinesitherapie", color: "from-green-500 to-green-600", duration: "3-4 ans", count: "7 universités", icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg> },
  { name: "Pharmacie", slug: "pharmacie", color: "from-purple-500 to-purple-600", duration: "5 ans", count: "3 universités", icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg> },
  { name: "Vétérinaire", slug: "veterinaire", color: "from-amber-500 to-amber-600", duration: "5 ans", count: "1 université", icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" /></svg> },
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight" style={{ color: "#615CA5" }}>
            L&apos;accompagnement d&apos;excellence pour vos{" "}
            <span className="text-[#EC680A]">études universitaires en Europe</span>
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

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap justify-center gap-6 md:gap-12 mb-20">
          {[
            { value: "3", label: "Universités partenaires", icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg> },
            { value: "6", label: "Filières de santé", icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg> },
            { value: "2", label: "Pays (Italie, Espagne)", icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg> },
            { value: "100%", label: "Financement possible", icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg> },
          ].map((s, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#EC680A]/10 text-[#EC680A] mb-3 group-hover:bg-[#EC680A] group-hover:text-white transition-all">
                {s.icon}
              </div>
              <p className="text-3xl md:text-4xl font-bold text-[#1B1D3A]">{s.value}</p>
              <p className="text-sm text-[#64748b]">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <div id="formations" className="scroll-mt-20">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-[#EC680A] mb-3">Choisis ta formation</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "#615CA5" }}>Nos formations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {formations.map((f, i) => (
              <motion.div key={f.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}>
                <Link href={`/formations/${f.slug}`} className="group block bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${f.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="flex items-center gap-4">
                    <div className="text-[#EC680A]">{f.icon}</div>
                    <div>
                      <h3 className="font-bold text-[#615CA5] text-lg group-hover:text-[#EC680A] transition-colors">{f.name}</h3>
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
