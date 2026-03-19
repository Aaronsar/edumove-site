"use client";
import { motion } from "framer-motion";
import type { StudentLife } from "@/data/program-details";
import {
  MapPin,
  Plane,
  Users,
  Building2,
  Landmark,
  Globe,
  Euro,
  Shield,
  GraduationCap,
  Sun,
} from "lucide-react";

function getHighlightIcon(text: string) {
  if (
    text.startsWith("Cadre de Vie") ||
    text.startsWith("Cadre Historique") ||
    text.startsWith("Campus Neuf") ||
    text.startsWith("Campus Accessible") ||
    text.startsWith("Campus moderne")
  )
    return Building2;
  if (text.startsWith("Proximité de la Capitale")) return Landmark;
  if (text.startsWith("Proximité de l'Aéroport")) return Plane;
  if (text.startsWith("Liaison Rapide")) return Globe;
  if (text.startsWith("Coût de la vie") || text.startsWith("Coût ")) return Euro;
  if (text.startsWith("Sécurité et Encadrement")) return Shield;
  if (text.startsWith("Cours d'italien")) return GraduationCap;
  if (text.startsWith("Climat") || text.startsWith("Qualité de vie")) return Sun;
  return Building2;
}

export default function StudentLifeSection({ life }: { life: StudentLife }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8F7FF] to-[#FFF7F2] py-20">
      {/* Decorative */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#EC680A]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#615CA5]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#EC680A] text-sm font-semibold uppercase tracking-widest mb-3">
            <MapPin className="w-4 h-4" />
            Destination
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1D3A]">
            Vie étudiante à {life.city}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Highlights column */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {life.highlights.map((h, i) => {
              const Icon = getHighlightIcon(h);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-lg hover:border-[#EC680A]/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EC680A]/10 flex items-center justify-center shrink-0 group-hover:bg-[#EC680A]/15 transition-colors">
                      <Icon className="w-5 h-5 text-[#EC680A]" />
                    </div>
                    <p className="text-[#334155] text-sm leading-relaxed">{h}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right column — flight + accompagnement */}
          <div className="space-y-6">
            {/* Flight info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#615CA5]/10 flex items-center justify-center">
                  <Plane className="w-5 h-5 text-[#615CA5]" />
                </div>
                <p className="font-bold text-[#1B1D3A]">Accès aérien</p>
              </div>
              <p className="text-sm text-[#334155] mb-2">{life.airport}</p>
              <div className="flex items-center gap-2 bg-[#615CA5]/5 rounded-xl px-4 py-2.5">
                <Globe className="w-4 h-4 text-[#615CA5]" />
                <p className="text-sm text-[#615CA5] font-semibold">{life.flightTime}</p>
              </div>
            </motion.div>

            {/* EduMove accompagnement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative overflow-hidden bg-[#1B1D3A] rounded-2xl p-6 text-white"
            >
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#615CA5]/20 blur-2xl" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EC680A]/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#EC680A]" />
                  </div>
                  <p className="font-bold" style={{ color: "#ffffff" }}>
                    Accompagnement EduMove
                  </p>
                </div>
                <ul className="space-y-2">
                  {[
                    "Aide au logement sur place",
                    "Démarches administratives",
                    "Traduction et suivi des cours",
                    "Vie étudiante et intégration",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EC680A] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
