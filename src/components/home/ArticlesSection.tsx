"use client";
import { useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const articles = [
  {
    title: "Études de médecine en Europe : le guide complet pour les étudiants français",
    date: "15 mars 2025",
    tag: "Guides",
    tagColor: "bg-[#615ca5]",
    href: "#",
    number: "01",
    readTime: "8 min",
  },
  {
    title: "Comment financer ses études de santé en Europe avec un prêt étudiant ?",
    date: "28 février 2025",
    tag: "Financement",
    tagColor: "bg-[#ec680a]",
    href: "#",
    number: "02",
    readTime: "5 min",
  },
  {
    title: "Reconnaissance des diplômes européens en France : ce qu'il faut savoir",
    date: "10 janvier 2025",
    tag: "Actualités",
    tagColor: "bg-[#ec680a]",
    href: "#",
    number: "03",
    readTime: "6 min",
  },
  {
    title: "Témoignage : mon parcours en médecine en Espagne avec Edumove",
    date: "5 décembre 2024",
    tag: "Témoignages",
    tagColor: "bg-[#615ca5]",
    href: "#",
    number: "04",
    readTime: "4 min",
  },
  {
    title: "Les avantages d'étudier la kinésithérapie en Europe",
    date: "20 novembre 2024",
    tag: "Filières",
    tagColor: "bg-[#ec680a]",
    href: "#",
    number: "05",
    readTime: "7 min",
  },
];

export default function ArticlesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 360;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-20 bg-[#1b1d3a] overflow-hidden">
      {/* Decorative */}
      <div className="absolute -top-32 right-0 w-72 h-72 rounded-full bg-[#615ca5]/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#ec680a]/10 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-3">
              Blog
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ces lectures devraient vous intéresser !
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#ec680a] hover:bg-[#ec680a]/10 transition-all"
            >
              <ChevronLeft size={18} className="text-white/60" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#ec680a] hover:bg-[#ec680a]/10 transition-all"
            >
              <ChevronRight size={18} className="text-white/60" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {articles.map((article) => (
            <a
              key={article.number}
              href={article.href}
              className="group snap-start shrink-0 w-[320px] bg-white/[0.12] backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col justify-between hover:border-[#ec680a]/50 hover:bg-white/[0.18] transition-all duration-300"
            >
              {/* Top */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black text-white/20">{article.number}</span>
                  <span className={`text-[10px] uppercase tracking-wider font-semibold text-white px-3 py-1 rounded-full ${article.tagColor}`}>
                    {article.tag}
                  </span>
                </div>
                <h3 className="font-bold text-white text-base leading-snug group-hover:text-[#ec680a] transition-colors duration-300 line-clamp-3 min-h-[60px]">
                  {article.title}
                </h3>
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-white/60">{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[11px] text-white/60">{article.readTime}</span>
                </div>
                <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#ec680a] group-hover:border-[#ec680a] transition-all duration-300">
                  <ArrowUpRight size={13} className="text-white/30 group-hover:text-white transition-colors" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Voir tous */}
        <div className="mt-8 text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-[#ec680a] transition-colors font-medium"
          >
            Voir tous les articles
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
