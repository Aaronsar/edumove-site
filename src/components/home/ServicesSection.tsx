"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: "Admis ou remboursé",
    desc: "Préparation illimitée. Pas admis ? Remboursement intégral.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Financement garanti",
    desc: "Jusqu'à 75 000 € via LCL. Remboursement après diplôme.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: "De A à Z",
    desc: "Orientation, admission, logement, traduction, vie étudiante.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left — Photo grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="rounded-xl overflow-hidden h-40">
                  <Image
                    src="/photos/dentiste.jpg"
                    alt="Dentiste avec modèle dentaire"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-52">
                  <Image
                    src="/photos/medecin.jpg"
                    alt="Médecin avec stéthoscope"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3 pt-6">
                <div className="rounded-xl overflow-hidden h-52">
                  <Image
                    src="/photos/cabinet-dentaire.jpg"
                    alt="Cabinet dentaire équipé"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-40">
                  <Image
                    src="/photos/campus.jpg"
                    alt="Campus universitaire"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#ec680a] text-white rounded-xl px-4 py-3 shadow-lg">
              <p className="text-2xl font-bold" style={{ color: "white" }}>100%</p>
              <p className="text-[10px] text-white/80">Finançable</p>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-2">Pourquoi EduMove ?</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight" style={{ color: "#1b1d3a" }}>
              L&apos;accompagnement qui fait{" "}
              <span className="text-[#615ca5]">la différence</span>
            </h2>

            <div className="space-y-5">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-[#1b1d3a] text-[#ec680a] flex items-center justify-center group-hover:bg-[#ec680a] group-hover:text-white transition-colors">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1b1d3a] text-sm mb-1">{s.title}</h3>
                    <p className="text-[#334155] text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a href="#" className="inline-block mt-8 bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-6 py-3 rounded-[5px] text-sm transition-all hover:shadow-lg">
              Déposer ma candidature →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
