"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const tagColors: Record<string, string> = {
  Guides: "bg-[#615ca5]/20 text-[#c4c1f0]",
  Financement: "bg-emerald-500/20 text-emerald-300",
  Actualités: "bg-[#ec680a]/20 text-[#f6a66a]",
  Témoignages: "bg-amber-500/20 text-amber-300",
  Filières: "bg-sky-500/20 text-sky-300",
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
];

export default function ArticlesSection() {
  const featured = articles[0];
  const others = articles.slice(1);

  return (
    <section className="relative py-20 bg-[#1b1d3a] overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#ec680a]/8 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#615ca5]/10 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-3">
              Blog
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Ces lectures devraient<br className="hidden md:block" /> vous intéresser
            </h2>
          </div>
          <a
            href="/blog"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#ec680a] transition-colors font-medium"
          >
            Voir tous les articles
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Featured article — large card */}
          <motion.a
            href={featured.href}
            className="group md:col-span-2 lg:row-span-2 relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col justify-between min-h-[320px] hover:border-[#ec680a]/40 hover:bg-white/[0.08] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Top row */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{featured.emoji}</span>
                  <div className="flex gap-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-3 py-1 rounded-full font-medium ${tagColors[tag] || "bg-white/10 text-white/50"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#ec680a] group-hover:border-[#ec680a] transition-all duration-300">
                  <ArrowUpRight size={16} className="text-white/40 group-hover:text-white transition-colors" />
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white leading-snug group-hover:text-[#ec680a] transition-colors duration-300 max-w-lg">
                {featured.title}
              </h3>
            </div>

            {/* Bottom row */}
            <div className="flex items-center gap-4 mt-6 pt-5 border-t border-white/10">
              <span className="text-xs text-white/30 font-medium">{featured.date}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-xs text-white/30 font-medium">{featured.readTime} de lecture</span>
            </div>

            {/* Decorative gradient corner */}
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#ec680a]/10 to-transparent rounded-bl-2xl pointer-events-none" />
          </motion.a>

          {/* Other articles — smaller cards */}
          {others.map((article, i) => (
            <motion.a
              key={i}
              href={article.href}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#ec680a]/40 hover:bg-white/[0.08] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{article.emoji}</span>
                  <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#ec680a] group-hover:border-[#ec680a] transition-all duration-300">
                    <ArrowUpRight size={12} className="text-white/40 group-hover:text-white transition-colors" />
                  </span>
                </div>

                <h3 className="font-semibold text-white text-sm leading-snug group-hover:text-[#ec680a] transition-colors duration-300 line-clamp-3">
                  {article.title}
                </h3>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${tagColors[tag] || "bg-white/10 text-white/50"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] text-white/25 font-medium">{article.readTime}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
