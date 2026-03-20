import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/data/articles";
import { getArticleHref } from "@/data/articles";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={getArticleHref(article)}
      className="group flex flex-col justify-between bg-white border border-gray-200/80 rounded-2xl p-6 hover:shadow-lg hover:border-[#EC680A]/30 hover:-translate-y-1 transition-all duration-300"
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-[10px] uppercase tracking-wider font-semibold text-white px-3 py-1 rounded-full ${article.tagColor}`}>
            {article.tag}
          </span>
        </div>
        <h3 className="font-bold text-lg leading-snug text-[#1B1D3A] group-hover:text-[#EC680A] transition-colors line-clamp-2 mb-2">
          {article.title}
        </h3>
        <p className="text-sm text-[#64748b] line-clamp-2 leading-relaxed">
          {article.excerpt}
        </p>
      </div>
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#94a3b8]">{article.date}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span className="text-xs text-[#94a3b8]">{article.readTime}</span>
        </div>
        <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#EC680A] group-hover:border-[#EC680A] transition-all duration-300">
          <ArrowUpRight size={13} className="text-[#94a3b8] group-hover:text-white transition-colors" />
        </span>
      </div>
    </Link>
  );
}
