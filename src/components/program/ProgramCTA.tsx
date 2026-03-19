"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import type { ProgramDetail } from "@/data/program-details";

export default function ProgramCTA({ detail }: { detail: ProgramDetail }) {
  return (
    <section data-program-cta className="relative overflow-hidden bg-[#1B1D3A] py-24">
      {/* Decorative */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#615CA5]/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#EC680A]/10 blur-3xl" />
        <div className="absolute bottom-8 left-8 grid grid-cols-6 gap-2 opacity-[0.06]">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-white" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-[#EC680A]/15 border border-[#EC680A]/25 rounded-full px-5 py-2 mb-8">
            <MessageCircle className="w-4 h-4 text-[#EC680A]" />
            <span className="text-sm text-[#EC680A] font-semibold">Rappel gratuit sous 24h</span>
          </div>

          <h2
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "#ffffff" }}
          >
            Prêt(e) à commencer vos études de{" "}
            <span className="text-[#EC680A]">{detail.filiere}</span> à{" "}
            <span className="text-[#EC680A]">{detail.city}</span> ?
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto mb-10"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Un expert Edumove analyse gratuitement votre dossier et vous guide
            dans chaque étape de votre candidature.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://candidature.edumove.fr"
              className="group inline-flex items-center gap-3 bg-[#EC680A] hover:bg-[#D45E09] text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#EC680A]/30"
            >
              Déposer ma candidature
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="tel:+33189744257"
              className="inline-flex items-center gap-3 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium px-8 py-4 rounded-2xl text-lg transition-all duration-300"
              style={{ color: "#ffffff" }}
            >
              <Phone className="w-5 h-5" />
              01 89 74 42 57
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
