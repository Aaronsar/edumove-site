"use client";

import { motion } from "framer-motion";
import type { AdmissionStep } from "@/data/universities";
import { ClipboardCheck, Info } from "lucide-react";

interface AdmissionStepperProps {
  steps: AdmissionStep[];
  note?: string;
  color: "emerald" | "amber" | "blue";
}

export default function AdmissionStepper({
  steps,
  note,
}: AdmissionStepperProps) {
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

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#EC680A] text-sm font-semibold uppercase tracking-widest mb-3">
            <ClipboardCheck className="w-4 h-4" />
            Comment candidater
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#ffffff" }}>
            Processus d&apos;admission
          </h2>
          <p className="mt-3 max-w-xl" style={{ color: "rgba(255,255,255,0.5)" }}>
            Un parcours simple et accompagné de A à Z par votre expert Edumove
          </p>
        </motion.div>

        {/* Desktop horizontal stepper */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* Connecting line — gradient */}
          <div className="absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#615CA5] via-[#EC680A]/50 to-[#615CA5] z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex flex-col items-center text-center relative z-10 flex-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EC680A] to-[#D45E09] text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg shadow-[#EC680A]/20">
                {step.step}
              </div>
              <p className="font-semibold text-sm mb-1" style={{ color: "#ffffff" }}>
                {step.label}
              </p>
              <p className="text-xs max-w-[160px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical stepper */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4"
            >
              {/* Left column: circle + line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EC680A] to-[#D45E09] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-lg shadow-[#EC680A]/20">
                  {step.step}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-[#EC680A]/40 to-[#615CA5]/30 my-1" />
                )}
              </div>
              {/* Right column: text */}
              <div className="pb-6">
                <p className="font-semibold text-sm" style={{ color: "#ffffff" }}>
                  {step.label}
                </p>
                <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        {note && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 inline-flex items-start gap-3 bg-[#EC680A]/15 border border-[#EC680A]/25 rounded-xl px-5 py-4"
          >
            <Info className="w-5 h-5 text-[#EC680A] shrink-0 mt-0.5" />
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{note}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
