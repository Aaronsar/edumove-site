"use client";

import type { ArticleTag } from "@/data/articles";
import { allTags } from "@/data/articles";

interface BlogTagFilterProps {
  activeTag: ArticleTag | null;
  onTagChange: (tag: ArticleTag | null) => void;
}

export default function BlogTagFilter({ activeTag, onTagChange }: BlogTagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onTagChange(null)}
        className={`text-sm font-medium px-4 py-2 rounded-full transition-all ${
          activeTag === null
            ? "bg-[#EC680A] text-white"
            : "bg-gray-100 text-[#1B1D3A] hover:bg-gray-200"
        }`}
      >
        Tous
      </button>
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag)}
          className={`text-sm font-medium px-4 py-2 rounded-full transition-all ${
            activeTag === tag
              ? "bg-[#EC680A] text-white"
              : "bg-gray-100 text-[#1B1D3A] hover:bg-gray-200"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
