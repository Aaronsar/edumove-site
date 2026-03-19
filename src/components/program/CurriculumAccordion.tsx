"use client";
import { useState } from "react";
import type { YearProgram } from "@/data/program-details";

/* Charte EduMove uniquement */
const yearColors = ["bg-[#615CA5]", "bg-[#1B1D3A]", "bg-[#EC680A]", "bg-[#615CA5]", "bg-[#1B1D3A]", "bg-[#EC680A]"];
const yearBorders = ["border-[#615CA5]", "border-[#1B1D3A]", "border-[#EC680A]", "border-[#615CA5]", "border-[#1B1D3A]", "border-[#EC680A]"];

export default function CurriculumAccordion({ program }: { program: YearProgram[] }) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold italic text-[#1B1D3A] mb-8">
        Programme année par année
      </h2>
      <div className="space-y-4">
        {program.map((year, i) => (
          <div
            key={i}
            className={`border rounded-xl overflow-hidden transition-all ${
              openIndex === i ? `${yearBorders[i % yearBorders.length]} border-l-4 shadow-md` : "border-gray-200"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
            >
              <span className={`${yearColors[i % yearColors.length]} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0`}>
                {i + 1}
              </span>
              <div className="flex-1">
                <span className="font-bold text-[#1B1D3A]">{year.year}</span>
                <span className="text-gray-500 ml-2">— {year.theme}</span>
              </div>
              <span className="text-gray-400 text-xl">{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-5 pl-20">
                <p className="text-gray-600 mb-3 text-sm">{year.description}</p>
                <ul className="space-y-2">
                  {year.subjects.map((s, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#334155]">
                      <span className="text-[#EC680A] mt-0.5">•</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
