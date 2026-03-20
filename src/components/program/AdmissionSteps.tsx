"use client";
import { motion } from "framer-motion";
import {
  FileText,
  Search,
  Send,
  ClipboardCheck,
  BadgeCheck,
  Rocket,
} from "lucide-react";

const stepIcons = [FileText, Search, Send, ClipboardCheck, BadgeCheck, Rocket];

export default function AdmissionSteps({ steps }: { steps: string[] }) {
  return (
    <section className="relative bg-[#1B1D3A] py-12 md:py-20 overflow-hidden">
      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#615CA5]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#EC680A]/8 blur-3xl" />
        <div className="absolute top-8 left-8 grid grid-cols-8 gap-2 opacity-[0.06]">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#EC680A] text-sm font-semibold uppercase tracking-widest mb-3">
            <ClipboardCheck className="w-4 h-4" />
            Comment candidater
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#ffffff" }}>
            Processus d&apos;admission
          </h2>
          <p className="mt-3 max-w-xl" style={{ color: "rgba(255,255,255,0.5)" }}>
            Un parcours simple, avec un conseiller dédié qui gère tout avec vous
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = stepIcons[i % stepIcons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/[0.12] hover:border-white/20">
                  {/* Step number + icon row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#EC680A]/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-[#EC680A]" />
                    </div>
                    <span className="text-5xl font-black">
                      <span className="text-white">0</span>
                      <span className="bg-gradient-to-b from-white via-white to-[#EC680A]/40 bg-clip-text" style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{i + 1}</span>
                    </span>
                  </div>

                  {/* Step label */}
                  <p className="text-sm font-bold uppercase tracking-wider mb-2 text-[#EC680A]">
                    Étape {i + 1}
                  </p>

                  {/* Step content */}
                  <p className="text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {step}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-[#EC680A]/15 border border-[#EC680A]/25 rounded-full px-6 py-3">
            <Rocket className="w-5 h-5 text-[#EC680A]" />
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
              Durée moyenne du processus : <strong className="text-[#EC680A]">2 à 4 semaines</strong>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
