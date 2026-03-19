"use client";
import { motion } from "framer-motion";
import {
  Award,
  Clock,
  Users,
  Stethoscope,
  Globe,
  Sparkles,
} from "lucide-react";
import type { ProgramDetail } from "@/data/program-details";

const highlights = [
  {
    icon: Award,
    title: "Sans concours",
    description: "Pas de PASS/LAS. Admission sur dossier, test ou entretien selon l'université.",
    color: "#EC680A",
  },
  {
    icon: Globe,
    title: "Diplôme reconnu UE",
    description: "Exercez dans toute l'Union Européenne dès l'obtention de votre diplôme.",
    color: "#615CA5",
  },
  {
    icon: Stethoscope,
    title: "Pratique clinique précoce",
    description: "Accès aux cliniques et hôpitaux universitaires dès les premières années.",
    color: "#1B1D3A",
  },
  {
    icon: Users,
    title: "Accompagnement 360°",
    description: "EduMove vous accompagne de la candidature jusqu'au diplôme.",
    color: "#EC680A",
  },
  {
    icon: Clock,
    title: "Admission rapide",
    description: "Réponse en 2 à 4 semaines. Intégrez votre formation dès septembre.",
    color: "#615CA5",
  },
  {
    icon: Sparkles,
    title: "Financement garanti",
    description: "Prêt étudiant jusqu'à 75 000 € via notre partenariat bancaire.",
    color: "#1B1D3A",
  },
];

export default function ProgramHighlights({ detail }: { detail: ProgramDetail }) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#EC680A] text-sm font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            Pourquoi cette formation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1D3A]">
            Les points forts de {detail.filiere} à {detail.universityShort}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px ${h.color}15`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${h.color}30`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#f3f4f6";
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${h.color}12` }}
                >
                  <Icon className="w-6 h-6" style={{ color: h.color }} />
                </div>
                <h3 className="font-bold text-[#1B1D3A] text-lg mb-2">{h.title}</h3>
                <p className="text-[#334155] text-sm leading-relaxed">{h.description}</p>

                {/* Decorative corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-2xl"
                  style={{
                    background: `radial-gradient(circle at 100% 0%, ${h.color}08 0%, transparent 70%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
