"use client";

import { useMemo } from "react";
import { analyzeSEO, type SEOCheck } from "@/lib/seo/analyzeSEO";
import type { ArticleSection } from "@/types/sections";
import { CheckCircle, XCircle, Search } from "lucide-react";

interface Props {
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  focusKeyword: string;
  sections: ArticleSection[];
  isGuide: boolean;
  onMetaTitleChange: (v: string) => void;
  onMetaDescriptionChange: (v: string) => void;
  onSlugChange: (v: string) => void;
  onFocusKeywordChange: (v: string) => void;
}

function ScoreGauge({ score }: { score: number }) {
  const color = score >= 71 ? "#22c55e" : score >= 41 ? "#f59e0b" : "#ef4444";
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-24 h-24 mx-auto">
      <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-500"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold" style={{ color }}>
          {score}
        </span>
      </div>
    </div>
  );
}

function CheckItem({ check }: { check: SEOCheck }) {
  return (
    <div className="flex items-start gap-2 py-1.5">
      {check.passed ? (
        <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
      ) : (
        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
      )}
      <div>
        <p className="text-xs font-medium text-[#334155]">{check.label}</p>
        <p className="text-[10px] text-[#94a3b8]">{check.message}</p>
      </div>
    </div>
  );
}

export default function SEOPanel({
  title,
  metaTitle,
  metaDescription,
  slug,
  focusKeyword,
  sections,
  isGuide,
  onMetaTitleChange,
  onMetaDescriptionChange,
  onSlugChange,
  onFocusKeywordChange,
}: Props) {
  const analysis = useMemo(
    () =>
      analyzeSEO({
        title,
        metaTitle: metaTitle || title,
        metaDescription,
        slug,
        focusKeyword,
        sections,
      }),
    [title, metaTitle, metaDescription, slug, focusKeyword, sections]
  );

  const baseUrl = isGuide ? "edumove.fr/guides/" : "edumove.fr/blog/";
  const basicChecks = analysis.checks.filter((c) => c.category === "basic");
  const contentChecks = analysis.checks.filter((c) => c.category === "content");
  const linksChecks = analysis.checks.filter((c) => c.category === "links");

  return (
    <div className="space-y-4">
      {/* Score */}
      <ScoreGauge score={analysis.score} />
      <p className="text-center text-xs text-[#94a3b8]">
        Score SEO : {analysis.score}/100
      </p>

      {/* SERP Preview */}
      <div className="bg-white rounded-lg border border-gray-200 p-3">
        <p className="text-[10px] uppercase tracking-wider text-[#94a3b8] font-semibold mb-2 flex items-center gap-1">
          <Search className="w-3 h-3" /> Aperçu Google
        </p>
        <div className="space-y-0.5">
          <p className="text-sm text-[#1a0dab] font-medium truncate">
            {metaTitle || title || "Titre de l’article"}
          </p>
          <p className="text-xs text-[#006621] truncate">
            {baseUrl}{slug || "slug-article"}
          </p>
          <p className="text-xs text-[#545454] line-clamp-2">
            {metaDescription || "Description de l’article..."}
          </p>
        </div>
      </div>

      {/* Keyword focus */}
      <div>
        <label className="block text-xs font-semibold text-[#334155] mb-1">
          Mot-clé focus
        </label>
        <input
          type="text"
          value={focusKeyword}
          onChange={(e) => onFocusKeywordChange(e.target.value)}
          placeholder="ex: études médecine espagne"
          className="w-full px-3 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-sm text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
        />
      </div>

      {/* Meta title */}
      <div>
        <label className="block text-xs font-semibold text-[#334155] mb-1">
          Titre SEO
          <span className={`ml-1 font-normal ${(metaTitle || title).length > 60 ? "text-red-500" : "text-[#94a3b8]"}`}>
            ({(metaTitle || title).length}/60)
          </span>
        </label>
        <input
          type="text"
          value={metaTitle}
          onChange={(e) => onMetaTitleChange(e.target.value)}
          placeholder={title || "Titre SEO..."}
          className="w-full px-3 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-sm text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
        />
      </div>

      {/* Slug */}
      <div>
        <label className="block text-xs font-semibold text-[#334155] mb-1">
          Slug URL
        </label>
        <div className="flex items-center gap-1">
          <span className="text-xs text-[#94a3b8] shrink-0">/{isGuide ? "guides" : "blog"}/</span>
          <input
            type="text"
            value={slug}
            onChange={(e) => onSlugChange(e.target.value)}
            className="flex-1 px-3 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-sm text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
          />
        </div>
      </div>

      {/* Meta description */}
      <div>
        <label className="block text-xs font-semibold text-[#334155] mb-1">
          Meta description
          <span className={`ml-1 font-normal ${metaDescription.length > 160 ? "text-red-500" : "text-[#94a3b8]"}`}>
            ({metaDescription.length}/160)
          </span>
        </label>
        <textarea
          value={metaDescription}
          onChange={(e) => onMetaDescriptionChange(e.target.value)}
          placeholder="Description pour Google..."
          rows={3}
          className="w-full px-3 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-sm text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20 resize-y"
        />
      </div>

      {/* Checks */}
      <div className="space-y-3">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-[#94a3b8] font-semibold mb-1">
            Titre & Meta
          </p>
          {basicChecks.map((c) => (
            <CheckItem key={c.id} check={c} />
          ))}
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-[#94a3b8] font-semibold mb-1">
            Contenu
          </p>
          {contentChecks.map((c) => (
            <CheckItem key={c.id} check={c} />
          ))}
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-[#94a3b8] font-semibold mb-1">
            Liens & Médias
          </p>
          {linksChecks.map((c) => (
            <CheckItem key={c.id} check={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
