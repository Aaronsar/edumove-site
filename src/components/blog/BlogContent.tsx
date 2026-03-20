"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ArticleTag } from "@/data/articles";
import { articles } from "@/data/articles";
import BlogTagFilter from "./BlogTagFilter";
import ArticleCard from "./ArticleCard";

export default function BlogContent() {
  const [activeTag, setActiveTag] = useState<ArticleTag | null>(null);

  const filtered = activeTag ? articles.filter((a) => a.tag === activeTag) : articles;

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <BlogTagFilter activeTag={activeTag} onTagChange={setActiveTag} />

        <p className="text-sm text-[#94a3b8] mb-6">
          {filtered.length} article{filtered.length > 1 ? "s" : ""}
        </p>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((article) => (
              <motion.div
                key={article.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
