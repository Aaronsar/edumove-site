"use client";

import { useMemo, useState } from "react";
import { analyzeSEO, analyzeGEO, type SEOCheck, type GEOCheck } from "@/lib/seo/analyzeSEO";
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

  const geoAnalysis = useMemo(
    () => analyzeGEO({ sections }),
    [sections]
  );

  // For pages (slug contains "/"), show full path; for articles use blog/guides prefix
  const baseUrl = slug.includes("/") ? "edumove.fr/" : isGuide ? "edumove.fr/guides/" : "edumove.fr/blog/";
  const basicChecks = analysis.checks.filter((c) => c.category === "basic");
  const contentChecks = analysis.checks.filter((c) => c.category === "content");
  const linksChecks = analysis.checks.filter((c) => c.category === "links");

  return (
    <div className="space-y-4">
      {/* Scores SEO + GEO */}
      <div className="flex items-center justify-center gap-6">
        <div className="text-center">
          <ScoreGauge score={analysis.score} />
          <p className="text-[10px] text-[#94a3b8] mt-1 font-semibold">SEO {analysis.score}/100</p>
        </div>
        <div className="text-center">
          <ScoreGauge score={geoAnalysis.score} />
          <p className="text-[10px] text-[#94a3b8] mt-1 font-semibold">GEO {geoAnalysis.score}/100</p>
        </div>
      </div>

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
              `OPTIMISATION SEO COMPLÈTE OBLIGATOIRE. Score actuel: ${analysis.score}/100, objectif: 80+ minimum.\n\n` +
              `PROBLÈMES À CORRIGER ABSOLUMENT:\n${failedChecks}\n\n` +
              `MOT-CLÉ FOCUS: "${focusKeyword || "(à définir — choisis-en un pertinent de 2-3 mots)"}"\n\n` +
              `CHECKLIST OBLIGATOIRE — chaque point DOIT être vert:\n` +
              `1. focusKeyword: définis un mot-clé pertinent de 2-3 mots si vide\n` +
              `2. metaTitle: 50-60 chars, DOIT contenir le mot-clé au début\n` +
              `3. metaDescription: 140-155 chars, DOIT contenir le mot-clé\n` +
              `4. Premier paragraphe: DOIT contenir le mot-clé dans les 150 premiers mots\n` +
              `5. Au moins un H2 DOIT contenir le mot-clé\n` +
              `6. Densité du mot-clé: entre 0.5% et 2.5% (utilise le mot-clé naturellement ~5-10 fois dans le texte)\n` +
              `7. Contenu: minimum 600 mots (ajoute du contenu pertinent si trop court)\n` +
              `8. Liens internes: minimum 3 liens <a href="/..."> dans les paragraphes\n` +
              `9. Liens externes: minimum 1 lien vers une source officielle (ex: conseil-national.medecin.fr, education.gouv.fr)\n` +
              `IMPORTANT: Retourne TOUS les champs (focusKeyword, metaTitle, metaDescription, excerpt, sections). Ne laisse RIEN de côté.`
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

      {/* Auto GEO Fix Button */}
      {onImprove && geoAnalysis.score < 80 && (
        <button
          onClick={() => {
            const failedGeo = geoAnalysis.checks
              .filter((c) => !c.passed)
              .map((c) => c.message)
              .join(". ");
            onImprove(
              `OPTIMISATION GEO (Generative Engine Optimization) OBLIGATOIRE. Score GEO actuel: ${geoAnalysis.score}/100, objectif: 80+.\n\n` +
              `PROBLÈMES GEO À CORRIGER:\n${failedGeo}\n\n` +
              `CHECKLIST GEO OBLIGATOIRE:\n` +
              `1. Ajoute une section FAQ avec minimum 5 questions/réponses détaillées (>80 chars par réponse). Type: {type:"faq", items:[{question:"...", answer:"..."}]}\n` +
              `2. Ajoute au moins 1 liste à puces structurée. Type: {type:"list", style:"bullet", items:[...]}\n` +
              `3. Ajoute un tableau ou grille comparative si absent. Type: {type:"table", headers:[...], rows:[[...]]}\n` +
              `4. Ajoute des chiffres concrets dans les paragraphes (prix, durées, taux, nombre de places...)\n` +
              `5. Reformule au moins 2 H2 sous forme de questions (ex: "Comment faire médecine en Espagne ?" "Combien coûtent les études ?")\n` +
              `6. Ajoute au moins 2 liens externes vers des sources officielles dans les paragraphes\n` +
              `7. Ajoute au moins 1 callout avec un conseil clé. Type: {type:"callout", variant:"info", html:"..."}\n` +
              `8. Ajoute des définitions directes ("Le PASS est...", "consiste à...")\n` +
              `9. Contenu minimum 800 mots\n` +
              `NE TOUCHE PAS au titre H1. Retourne focusKeyword, metaTitle, metaDescription, sections.`
            );
          }}
          disabled={improving}
          className="w-full flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#0284c7] hover:to-[#0369a1] text-white text-xs font-semibold py-2.5 rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
        >
          {improving ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              Optimisation GEO en cours...
            </>
          ) : (
            <>
              <Zap className="w-3.5 h-3.5" />
              🤖 Optimiser GEO auto → 80+
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

        {/* GEO Checks */}
        <div>
          <p className="text-[10px] uppercase tracking-wider text-[#615CA5] font-semibold mb-1 flex items-center gap-1">
            🤖 GEO (IA génératives)
          </p>
          {geoAnalysis.checks.map((c) => (
            <CheckItem key={c.id} check={{ ...c, category: "links" }} />
          ))}
        </div>
      </div>
    </div>
  );
}
