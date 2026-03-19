"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const tagColors: Record<string, string> = {
  Guides: "bg-[#615ca5]/10 text-[#615ca5]",
  Financement: "bg-emerald-50 text-emerald-600",
  Actualités: "bg-[#ec680a]/10 text-[#ec680a]",
  Témoignages: "bg-amber-50 text-amber-600",
  Filières: "bg-sky-50 text-sky-600",
};

const accentColors: Record<string, string> = {
  Guides: "bg-[#615ca5]",
  Financement: "bg-emerald-500",
  Actualités: "bg-[#ec680a]",
  Témoignages: "bg-amber-500",
  Filières: "bg-sky-500",
};

const articles = [
  {
    title: "Études de médecine en Europe : le guide complet pour les étudiants français",
    date: "15 mars 2025",
    tags: ["Guides"],
    href: "#",
    emoji: "🩺",
    readTime: "8 min",
  },
  {
    title: "Comment financer ses études de santé en Europe avec un prêt étudiant ?",
    date: "28 février 2025",
    tags: ["Financement"],
    href: "#",
    emoji: "💶",
    readTime: "5 min",
  },
  {
    title: "Reconnaissance des diplômes européens en France : ce qu'il faut savoir",
    date: "10 janvier 2025",
    tags: ["Actualités"],
    href: "#",
    emoji: "🎓",
    readTime: "6 min",
  },
  {
    title: "Témoignage : mon parcours en médecine en Espagne avec Edumove",
    date: "5 décembre 2024",
    tags: ["Témoignages"],
    href: "#",
    emoji: "✈️",
    readTime: "4 min",
  },
  {
    title: "Les avantages d'étudier la kinésithérapie en Europe",
    date: "20 novembre 2024",
    tags: ["Guides", "Filières"],
    href: "#",
    emoji: "🏥",
    readTime: "7 min",
  },
];

export default function ArticlesSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = Math.max(0, articles.length - visibleCount);

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="py-16 bg-[#faf9f6]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-2">
              Blog
            </p>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#1b1d3a" }}>
              Ces lectures devraient vous intéresser !
            </h2>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <button
              onClick={prev}
              disabled={startIndex === 0}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#1b1d3a] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} className="text-[#1b1d3a]" />
            </button>
            <button
              onClick={next}
              disabled={startIndex >= maxIndex}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#1b1d3a] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} className="text-[#1b1d3a]" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.slice(startIndex, startIndex + visibleCount).map((article, i) => (
            <a
              key={startIndex + i}
              href={article.href}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#ec680a]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ec680a]/5 flex flex-col"
            >
              {/* Accent bar */}
              <div className={`h-1.5 ${accentColors[article.tags[0]] || "bg-gray-300"}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Emoji + date */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl">{article.emoji}</span>
                  <span className="text-xs text-gray-400 font-medium">{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-[#1b1d3a] text-base leading-snug mb-2 group-hover:text-[#ec680a] transition-colors line-clamp-3 flex-1">
                  {article.title}
                </h3>

                {/* Read time */}
                <p className="text-xs text-gray-400 mb-4">{article.readTime} de lecture</p>

                {/* Tags + arrow */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2.5 py-1 rounded-md font-medium ${tagColors[tag] || "bg-gray-100 text-gray-500"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#ec680a] group-hover:text-white text-gray-400 transition-all duration-300">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === startIndex ? "bg-[#ec680a] w-6" : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
