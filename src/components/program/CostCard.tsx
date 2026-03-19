"use client";
import { motion } from "framer-motion";
import { Euro, CreditCard, GraduationCap, Banknote, Shield, TrendingDown } from "lucide-react";
import type { ProgramDetail } from "@/data/program-details";

export default function CostCard({ detail }: { detail: ProgramDetail }) {
  // Parse numeric values for visual breakdown
  const perYear = detail.costPerYear;
  const total = detail.totalCost;

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-flex items-center gap-2 text-[#EC680A] text-sm font-semibold uppercase tracking-widest mb-3">
          <Euro className="w-4 h-4" />
          Investissement
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B1D3A]">
          Coût et financement
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Main cost card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 relative overflow-hidden bg-[#1B1D3A] rounded-3xl p-8 text-white"
        >
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#615CA5]/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#EC680A]/10 blur-2xl" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#EC680A]/20 flex items-center justify-center">
                <Banknote className="w-6 h-6 text-[#EC680A]" />
              </div>
              <p className="text-white/60 font-medium uppercase text-sm tracking-wider" style={{ color: "rgba(255,255,255,0.6)" }}>
                Tarif annuel
              </p>
            </div>

            <p className="text-5xl md:text-6xl font-black tracking-tight mb-1" style={{ color: "#ffffff" }}>
              {perYear}
            </p>
            <p className="text-white/40 text-lg" style={{ color: "rgba(255,255,255,0.4)" }}>par an</p>

            <div className="mt-6 flex items-center gap-2 bg-[#EC680A]/20 rounded-xl px-4 py-2.5">
              <Euro className="w-4 h-4 text-[#EC680A]" />
              <span className="text-sm font-semibold text-[#EC680A]">Finançable jusqu&apos;à 100% avec Edumove</span>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-white/50 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Diplôme</span>
                <span className="text-sm font-medium text-[#EC680A]">{detail.diploma}</span>
              </div>
            </div>

            {detail.isCheapest && (
              <div className="mt-6 flex items-center gap-2 bg-[#EC680A]/20 rounded-xl px-4 py-2.5">
                <TrendingDown className="w-4 h-4 text-[#EC680A]" />
                <span className="text-sm font-semibold text-[#EC680A]">Option la moins chère</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Financing cards */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
          {/* LCL Partnership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-[#615CA5]/10 to-[#615CA5]/5 border border-[#615CA5]/15 rounded-3xl p-6 flex flex-col"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#615CA5]/15 flex items-center justify-center mb-5">
              <CreditCard className="w-6 h-6 text-[#615CA5]" />
            </div>
            <p className="font-bold text-[#1B1D3A] text-lg mb-2">Prêt étudiant garanti</p>
            <p className="text-[#334155] text-sm leading-relaxed flex-1">
              Partenariat Edumove x LCL : prêt jusqu&apos;à <strong>75 000 €</strong> pour financer
              100% de vos études.
            </p>
            <div className="mt-4 pt-4 border-t border-[#615CA5]/10">
              <p className="text-xs text-[#615CA5] font-semibold">
                Remboursement uniquement après le diplôme
              </p>
            </div>
          </motion.div>

          {/* Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-[#EC680A]/10 to-[#EC680A]/5 border border-[#EC680A]/15 rounded-3xl p-6 flex flex-col"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#EC680A]/15 flex items-center justify-center mb-5">
              <GraduationCap className="w-6 h-6 text-[#EC680A]" />
            </div>
            <p className="font-bold text-[#1B1D3A] text-lg mb-2">Diplôme reconnu UE</p>
            <p className="text-[#334155] text-sm leading-relaxed flex-1">
              Votre diplôme est automatiquement reconnu dans tous les pays de l&apos;Union Européenne, y compris la France.
            </p>
            <div className="mt-4 pt-4 border-t border-[#EC680A]/10">
              <p className="text-xs text-[#EC680A] font-semibold">
                Exercez en France sans équivalence
              </p>
            </div>
          </motion.div>

          {/* Accompagnement — spans full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="sm:col-span-2 bg-white border border-gray-100 rounded-3xl p-6 flex items-center gap-6 shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#1B1D3A]/10 flex items-center justify-center shrink-0">
              <Shield className="w-7 h-7 text-[#1B1D3A]" />
            </div>
            <div>
              <p className="font-bold text-[#1B1D3A] text-lg mb-1">Accompagnement premium inclus</p>
              <p className="text-[#334155] text-sm leading-relaxed">
                Logement, démarches administratives, traduction des cours, préparation aux examens et suivi personnalisé tout au long de vos études.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
