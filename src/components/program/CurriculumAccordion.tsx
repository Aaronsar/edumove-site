"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronRight, GraduationCap } from "lucide-react";
import type { YearProgram } from "@/data/program-details";

const yearAccents = [
  { bg: "bg-[#615CA5]", text: "text-[#615CA5]", border: "border-[#615CA5]", light: "bg-[#615CA5]/10", glow: "shadow-[#615CA5]/20" },
  { bg: "bg-[#1B1D3A]", text: "text-[#1B1D3A]", border: "border-[#1B1D3A]", light: "bg-[#1B1D3A]/10", glow: "shadow-[#1B1D3A]/20" },
  { bg: "bg-[#EC680A]", text: "text-[#EC680A]", border: "border-[#EC680A]", light: "bg-[#EC680A]/10", glow: "shadow-[#EC680A]/20" },
  { bg: "bg-[#615CA5]", text: "text-[#615CA5]", border: "border-[#615CA5]", light: "bg-[#615CA5]/10", glow: "shadow-[#615CA5]/20" },
  { bg: "bg-[#1B1D3A]", text: "text-[#1B1D3A]", border: "border-[#1B1D3A]", light: "bg-[#1B1D3A]/10", glow: "shadow-[#1B1D3A]/20" },
  { bg: "bg-[#EC680A]", text: "text-[#EC680A]", border: "border-[#EC680A]", light: "bg-[#EC680A]/10", glow: "shadow-[#EC680A]/20" },
];

const rawColors = ["#615CA5", "#1B1D3A", "#EC680A", "#615CA5", "#1B1D3A", "#EC680A"];

export default function CurriculumAccordion({ program }: { program: YearProgram[] }) {
  const [active, setActive] = useState(0);
  const accent = yearAccents[active % yearAccents.length];
  const year = program[active];

  return (
    <section className="relative overflow-hidden bg-[#F8F7FF] py-20">
      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#615CA5]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#EC680A]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 text-[#EC680A] text-sm font-semibold uppercase tracking-widest mb-3">
            <BookOpen className="w-4 h-4" />
            Cursus complet
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1D3A]">
            Programme année par année
          </h2>
        </motion.div>

        {/* Year selector tabs */}
        <div className="flex flex-nowrap gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {program.map((y, i) => {
            const isActive = active === i;
            const color = rawColors[i % rawColors.length];
            return (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-left transition-all duration-300 shrink-0 ${
                  isActive
                    ? "bg-white shadow-lg text-[#1B1D3A]"
                    : "bg-white/50 hover:bg-white/80 text-[#334155]"
                }`}
                style={isActive ? { boxShadow: `0 8px 30px ${color}20` } : {}}
              >
                <span
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm text-white shrink-0 transition-all duration-300`}
                  style={{ backgroundColor: isActive ? color : "#94a3b8" }}
                >
                  {i + 1}
                </span>
                <div className="hidden sm:block min-w-0">
                  <p className={`text-sm font-semibold whitespace-nowrap ${isActive ? "text-[#1B1D3A]" : "text-[#64748b]"}`}>
                    {y.year}
                  </p>
                  {isActive && (
                    <p className="text-xs text-[#334155] whitespace-nowrap overflow-hidden text-ellipsis max-w-[160px]">
                      {y.theme}
                    </p>
                  )}
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeYearIndicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full"
                    style={{ backgroundColor: color }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="relative h-1.5 bg-white rounded-full mb-10 overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ backgroundColor: rawColors[active % rawColors.length] }}
            animate={{ width: `${((active + 1) / program.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          {program.map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white bg-gray-200 cursor-pointer"
              style={{
                left: `${((i + 1) / program.length) * 100}%`,
                transform: "translate(-50%, -50%)",
                backgroundColor: i <= active ? rawColors[i % rawColors.length] : "#e2e8f0",
              }}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        {/* Content card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
            style={{ boxShadow: `0 20px 60px ${rawColors[active % rawColors.length]}15` }}
          >
            {/* Card header */}
            <div
              className="relative px-8 py-6 text-white overflow-hidden"
              style={{ backgroundColor: rawColors[active % rawColors.length] }}
            >
              <div aria-hidden className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute top-4 right-8 grid grid-cols-5 gap-1.5 opacity-20">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
                  ))}
                </div>
              </div>
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Année {active + 1} sur {program.length}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold" style={{ color: "#ffffff" }}>
                    {year.theme}
                  </h3>
                </div>
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm">
                  <GraduationCap className="w-8 h-8" style={{ color: "#ffffff" }} />
                </div>
              </div>
            </div>

            {/* Card body */}
            <div className="p-8">
              <p className="text-[#334155] text-lg leading-relaxed mb-8">
                {year.description}
              </p>

              {/* Subject grid */}
              <div className="grid sm:grid-cols-2 gap-3">
                {year.subjects.map((subject, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: j * 0.06 }}
                    className={`group flex items-start gap-3 p-4 rounded-xl border transition-all duration-200 hover:shadow-md ${accent.light} border-transparent hover:${accent.border}`}
                    style={{
                      backgroundColor: `${rawColors[active % rawColors.length]}08`,
                    }}
                  >
                    <ChevronRight
                      className="w-4 h-4 mt-0.5 shrink-0 transition-transform group-hover:translate-x-0.5"
                      style={{ color: rawColors[active % rawColors.length] }}
                    />
                    <span className="text-sm font-medium text-[#334155]">{subject}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setActive(Math.max(0, active - 1))}
            disabled={active === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#334155] font-medium text-sm shadow-sm hover:shadow-md transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Année précédente
          </button>
          <button
            onClick={() => setActive(Math.min(program.length - 1, active + 1))}
            disabled={active === program.length - 1}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-medium text-sm shadow-sm hover:shadow-md transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ backgroundColor: rawColors[active % rawColors.length] }}
          >
            Année suivante
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
