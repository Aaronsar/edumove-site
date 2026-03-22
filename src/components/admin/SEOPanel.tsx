"use client";

import { useMemo, useState } from "react";
import { analyzeSEO, type SEOCheck } from "@/lib/seo/analyzeSEO";
import type { ArticleSection } from "@/types/sections";
import { CheckCircle, XCircle, Search, Wand2, Loader2, Send, Zap } from "lucide-react";

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
  onImprove?: (feedback: string) => Promise<void>;
  improving?: boolean;
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
  onImprove,
  improving,
}: Props) {
  const [feedback, setFeedback] = useState("");
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

  // For pages (slug contains "/"), show full path; for articles use blog/guides prefix
  const baseUrl = slug.includes("/") ? "edumove.fr/" : isGuide ? "edumove.fr/guides/" : "edumove.fr/blog/";
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

      {/* AI Improve Block */}
      {onImprove && (
        <div className="bg-gradient-to-br from-[#1B1D3A] to-[#2a2d52] rounded-xl p-3.5 space-y-2.5">
          <div className="flex items-center gap-2">
            <Wand2 className="w-3.5 h-3.5 text-[#EC680A]" />
            <span className="text-[10px] uppercase tracking-wider text-white/60 font-semibold">
              Assistant IA
            </span>
          </div>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Ex: Améliore le SEO, ajoute des liens internes, reformule l'intro..."
            rows={2}
            disabled={improving}
            className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#EC680A]/40 resize-none disabled:opacity-50"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey && feedback.trim() && !improving) {
                e.preventDefault();
                onImprove(feedback.trim());
                setFeedback("");
              }
            }}
          />
          <button
            onClick={() => {
              if (feedback.trim() && !improving) {
                onImprove(feedback.trim());
                setFeedback("");
              }
            }}
            disabled={!feedback.trim() || improving}
            className="w-full flex items-center justify-center gap-1.5 bg-[#EC680A] hover:bg-[#D45E09] text-white text-xs font-semibold py-2 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {improving ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                Amélioration en cours...
              </>
            ) : (
              <>
                <Send className="w-3 h-3" />
                Améliorer
              </>
            )}
          </button>
        </div>
      )}

      {/* Auto SEO Fix Button */}
      {onImprove && analysis.score < 80 && (
        <button
          onClick={() => {
            const failedChecks = analysis.checks
              .filter((c) => !c.passed)
              .map((c) => c.message)
              .join(". ");
            onImprove(
              `Optimise automatiquement l'article pour atteindre un score SEO de 80+ minimum. Voici les problèmes à corriger : ${failedChecks}. ` +
              `Le mot-clé focus est "${focusKeyword || "(à définir)"}". ` +
              `Assure-toi que : le mot-clé apparaît dans le titre SEO, dans la meta description (140-155 chars), dans le premier paragraphe, dans au moins un H2, et que la densité est entre 0.5% et 2.5%. ` +
              `Ajoute des liens internes et au moins 1 lien externe si manquants.`
            );
          }}
          disabled={improving}
          className="w-full flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#615CA5] to-[#4e4a8a] hover:from-[#4e4a8a] hover:to-[#3d3974] text-white text-xs font-semibold py-2.5 rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
        >
          {improving ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              Optimisation en cours...
            </>
          ) : (
            <>
              <Zap className="w-3.5 h-3.5" />
              Optimiser SEO auto → 80+
            </>
          )}
        </button>
      )}

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
