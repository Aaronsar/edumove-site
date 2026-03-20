"use client";
import { useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { articles as articlesData, getArticleHref } from "@/data/articles";

const articles = articlesData.map((a, i) => ({
  title: a.title,
  date: a.date,
  tag: a.tag,
  tagColor: a.tagColor,
  href: getArticleHref(a),
  number: String(i + 1).padStart(2, "0"),
  readTime: a.readTime,
}));

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
    <section className="relative py-12 md:py-20 bg-[#1b1d3a] overflow-hidden">
      {/* Decorative */}
      <div className="absolute -top-32 right-0 w-72 h-72 rounded-full bg-[#615ca5]/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#ec680a]/10 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-3">
              Blog
            </p>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#ffffff" }}>
              Ces lectures devraient vous int&eacute;resser !
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
          className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {articles.map((article) => (
            <a
              key={article.number}
              href={article.href}
              className="group snap-start shrink-0 w-[85vw] sm:w-[370px] bg-white/[0.12] backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-7 flex flex-col justify-between hover:border-[#ec680a]/50 hover:bg-white/[0.18] transition-all duration-300"
            >
              {/* Top */}
              <div>
                <div className="flex items-center justify-start mb-5">
                  <span className={`text-[10px] uppercase tracking-wider font-semibold text-white px-3 py-1 rounded-full ${article.tagColor}`}>
                    {article.tag}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug group-hover:text-[#ec680a] transition-colors duration-300 line-clamp-3 min-h-[70px]" style={{ color: "white" }}>
                  {article.title}
                </h3>
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-white/60">{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-xs text-white/60">{article.readTime}</span>
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
