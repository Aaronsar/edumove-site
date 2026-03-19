"use client";

import { motion } from "framer-motion";
import type { AdmissionStep } from "@/data/universities";
import { Info } from "lucide-react";

interface AdmissionStepperProps {
  steps: AdmissionStep[];
  note?: string;
  color: "emerald" | "amber" | "blue";
}

/* Charte : violet pour les étapes, orange pour les notes */
const accentMap: Record<AdmissionStepperProps["color"], { dot: string; note: string }> = {
  emerald: { dot: "bg-[#615CA5]", note: "bg-[#EC680A]/10 border-[#EC680A]/25 text-[#1B1D3A]" },
  amber: { dot: "bg-[#615CA5]", note: "bg-[#EC680A]/10 border-[#EC680A]/25 text-[#1B1D3A]" },
  blue: { dot: "bg-[#615CA5]", note: "bg-[#EC680A]/10 border-[#EC680A]/25 text-[#1B1D3A]" },
};

export default function AdmissionStepper({
  steps,
  note,
  color,
}: AdmissionStepperProps) {
  const accent = accentMap[color];
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold italic text-[#1B1D3A] mb-8">
          Processus d&apos;admission
        </h2>

        {/* Desktop horizontal stepper */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-5 left-[10%] right-[10%] h-0.5 bg-[#615CA5]/20 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center relative z-10 flex-1"
            >
              <div
                className={`w-10 h-10 rounded-full ${accent.dot} text-white flex items-center justify-center font-bold text-sm mb-3 shadow-sm`}
              >
                {step.step}
              </div>
              <p className="font-semibold text-[#1B1D3A] text-sm mb-1">
                {step.label}
              </p>
              <p className="text-xs text-gray-500 max-w-[150px] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical stepper */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <div key={step.step} className="flex gap-4">
              {/* Left column: circle + line */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full ${accent.dot} text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm`}
                >
                  {step.step}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-[#615CA5]/20 my-1" />
                )}
              </div>
              {/* Right column: text */}
              <div className="pb-6">
                <p className="font-semibold text-[#1B1D3A] text-sm">
                  {step.label}
                </p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        {note && (
          <div className={`mt-8 border rounded-xl p-4 flex items-start gap-3 ${accent.note}`}>
            <Info className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-sm">{note}</p>
          </div>
        )}
      </div>
    </section>
  );
}
