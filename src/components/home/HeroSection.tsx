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
    <section className="relative overflow-hidden bg-[#fafbff]">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#EC680A]/6 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#615CA5]/6 via-transparent to-transparent rounded-full blur-3xl" />
        {/* Skyline Europe — monuments en silhouette subtile */}
        <svg className="absolute bottom-0 left-0 right-0 w-full opacity-[0.04]" viewBox="0 0 1440 320" fill="#1b1d3a" preserveAspectRatio="xMidYMax meet">
          {/* Colisée */}
          <path d="M100 280 L100 240 C100 230 110 220 120 220 L130 220 L130 200 L140 200 L140 220 L150 220 L150 200 L160 200 L160 220 L170 220 L170 200 L180 200 L180 220 L190 220 C200 220 210 230 210 240 L210 280 Z" />
          {/* Tour de Pise */}
          <path d="M320 280 L325 180 L322 170 L328 160 L324 150 L330 140 L326 130 L332 120 L340 120 L346 130 L342 140 L348 150 L344 160 L350 170 L347 180 L352 280 Z" />
          {/* Sagrada Familia */}
          <path d="M500 280 L500 200 L510 200 L510 160 L515 140 L520 160 L520 200 L530 200 L530 180 L535 150 L537 120 L539 100 L541 120 L543 150 L548 180 L548 200 L558 200 L558 160 L563 140 L568 160 L568 200 L578 200 L578 280 Z" />
          {/* Tour Eiffel */}
          <path d="M730 280 L740 220 L735 220 L745 180 L742 180 L750 140 L748 140 L755 100 L753 100 L758 60 L760 40 L762 60 L767 100 L765 100 L770 140 L768 140 L775 180 L772 180 L780 220 L775 220 L785 280 Z M745 240 L775 240" />
          {/* Dôme cathédrale (Rome/Florence) */}
          <path d="M950 280 L950 230 L960 230 L960 200 C960 170 990 150 1010 150 C1030 150 1060 170 1060 200 L1060 230 L1070 230 L1070 280 Z M1005 150 L1008 130 L1010 120 L1012 130 L1015 150" />
          {/* Alhambra */}
          <path d="M1180 280 L1180 220 L1190 220 L1190 210 L1200 210 L1200 200 L1210 200 L1210 190 L1230 190 L1230 200 L1240 200 L1240 210 L1250 210 L1250 220 L1260 220 L1260 280 Z M1195 215 L1195 210 L1200 205 L1205 210 L1205 215 Z M1235 215 L1235 210 L1240 205 L1245 210 L1245 215 Z" />
          {/* Sol / base */}
          <rect x="0" y="278" width="1440" height="42" />
        </svg>
        {/* Dot pattern charte */}
        <div className="absolute top-8 left-8 grid grid-cols-7 gap-1.5 opacity-[0.08]">
          {Array.from({ length: 49 }).map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#ec680a]" />)}
        </div>
        <div className="absolute bottom-20 right-12 grid grid-cols-5 gap-1.5 opacity-[0.06]">
          {Array.from({ length: 25 }).map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#615ca5]" />)}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-10 pb-10 text-center">
        {/* Logo icon */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-6">
          <Image src="/edumove-icon-orange.svg" alt="" width={60} height={60} />
        </motion.div>

        {/* Titre principal */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-5">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: "#615CA5" }}>
            L&apos;accompagnement d&apos;excellence pour vos{" "}
            <span className="text-[#EC680A]">études universitaires en Europe</span>
          </h1>
        </motion.div>

        {/* Sous-titre */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-sm md:text-base text-[#334155] max-w-xl mx-auto mb-8 leading-relaxed">
          Avec Edumove, vos études en Europe peuvent être financées jusqu&apos;à 100% sans aucun frais à avancer. Vous ne remboursez qu&apos;une fois praticien, lorsque votre carrière sera lancée.
        </motion.p>

        {/* Choisis une formation */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="font-bold text-[#1b1d3a] text-sm mb-6">
          Choisis une formation <span className="text-[#EC680A]">›</span>
        </motion.p>

        {/* Formation cards — style site actuel : centré, icône + nom */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }} id="formations" className="scroll-mt-20">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-3xl mx-auto">
            {formations.map((f) => (
              <Link
                key={f.slug}
                href={`/formations/${f.slug}`}
                className="group flex flex-col items-center justify-center bg-white rounded-xl border border-gray-200 p-4 md:p-5 hover:shadow-lg hover:border-[#615ca5]/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="text-[#EC680A] mb-2">{f.icon}</div>
                <span className="font-bold text-[#615CA5] text-xs md:text-sm text-center group-hover:text-[#EC680A] transition-colors">{f.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-8 mb-6">
          <a href="#" className="inline-block bg-[#EC680A] hover:bg-[#d45e09] text-white font-semibold px-6 py-3 rounded-[5px] text-sm transition-all hover:shadow-lg">
            Être contacté gratuitement →
          </a>
        </motion.div>

        {/* Logos confiance */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6">
          <p className="text-xs text-[#94a3b8] uppercase tracking-widest mb-4">Ils nous font confiance</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-30">
            <span className="text-[#1b1d3a] font-black text-lg">BFMTV.</span>
            <span className="text-[#1b1d3a] font-serif font-bold text-lg italic">Forbes</span>
            <span className="text-blue-700 font-bold text-lg">LCL</span>
            <span className="text-red-600 font-bold text-base">L&apos;Étudiant</span>
            <span className="text-[#1b1d3a] font-serif text-base font-bold tracking-wide">Le Figaro</span>
            <span className="text-[#1b1d3a] font-bold text-base tracking-widest">DIPLOMA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
