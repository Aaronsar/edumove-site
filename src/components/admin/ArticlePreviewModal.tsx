"use client";

import { createPortal } from "react-dom";
import { useEffect } from "react";
import { X } from "lucide-react";
import ArticleLayout from "@/components/blog/ArticleLayout";
import SectionRenderer from "@/components/blog/SectionRenderer";
import type { ArticleEditorState } from "@/lib/editor/useArticleEditor";
import type { Article } from "@/data/articles";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  state: ArticleEditorState;
  readTime: string;
  sommaire: { id: string; label: string }[];
}

export default function ArticlePreviewModal({
  isOpen,
  onClose,
  state,
  readTime,
  sommaire,
}: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const article: Article = {
    slug: state.slug || "preview",
    title: state.title || "Sans titre",
    date: new Date().toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    dateISO: new Date().toISOString(),
    tag: (state.tag as Article["tag"]) || "Guide",
    tagColor: state.tagColor || "bg-[#615ca5]",
    readTime: readTime || "1 min",
    excerpt: state.excerpt || "",
    metaTitle: state.metaTitle || state.title || "",
    metaDescription: state.metaDescription || "",
    heroPills: state.heroPills || [],
    relatedSlugs: state.relatedSlugs || [],
    relatedFormations: state.relatedFormations || [],
    relatedUniversities: state.relatedUniversities || [],
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex flex-col bg-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#1B1D3A] text-white shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider">
            Aperçu de l&apos;article
          </span>
          <span className="text-[10px] text-white/40 font-mono">
            /{state.slug || "preview"}
          </span>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 text-xs font-medium text-white/70 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors"
        >
          <X className="w-3.5 h-3.5" />
          Fermer
        </button>
      </div>

      {/* Preview content — block ALL navigation (clicks, target=_blank, router) */}
      <div
        className="flex-1 overflow-y-auto [&_a]:pointer-events-none [&_a]:cursor-default"
        onClick={(e) => {
          const target = (e.target as HTMLElement).closest("a");
          if (target) {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
          }
        }}
        onClickCapture={(e) => {
          const target = (e.target as HTMLElement).closest("a");
          if (target) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <ArticleLayout article={article} sommaire={sommaire}>
          <SectionRenderer sections={state.sections} />
        </ArticleLayout>
      </div>
    </div>,
    document.body
  );
}
