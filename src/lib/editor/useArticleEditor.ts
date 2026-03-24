"use client";

import { useReducer, useCallback } from "react";
import type { ArticleSection, HeroPill } from "@/types/sections";

export interface ArticleEditorState {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  tag: "Guide" | "Financement" | "Actualités" | "Témoignages" | "Filières";
  tagColor: string;
  isGuide: boolean;
  focusKeyword: string;
  heroPills: HeroPill[];
  sections: ArticleSection[];
  relatedSlugs: string[];
  relatedFormations: string[];
  relatedUniversities: string[];
  status: "draft" | "published" | "scheduled" | "archived";
  scheduledAt: string;
}

type Action =
  | { type: "SET_FIELD"; field: keyof ArticleEditorState; value: unknown }
  | { type: "ADD_BLOCK"; index: number; block: ArticleSection }
  | { type: "UPDATE_BLOCK"; index: number; block: ArticleSection }
  | { type: "DELETE_BLOCK"; index: number }
  | { type: "MOVE_BLOCK"; from: number; to: number }
  | { type: "SET_SECTIONS"; sections: ArticleSection[] }
  | { type: "LOAD_ARTICLE"; state: Partial<ArticleEditorState> };

export const initialState: ArticleEditorState = {
  title: "",
  slug: "",
  metaTitle: "",
  metaDescription: "",
  excerpt: "",
  tag: "Guide",
  tagColor: "bg-[#615ca5]",
  isGuide: false,
  focusKeyword: "",
  heroPills: [],
  sections: [],
  relatedSlugs: [],
  relatedFormations: [],
  relatedUniversities: [],
  status: "draft",
  scheduledAt: "",
};

function reducer(state: ArticleEditorState, action: Action): ArticleEditorState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };

    case "ADD_BLOCK": {
      const sections = [...state.sections];
      sections.splice(action.index, 0, action.block);
      return { ...state, sections };
    }

    case "UPDATE_BLOCK": {
      const sections = [...state.sections];
      sections[action.index] = action.block;
      return { ...state, sections };
    }

    case "DELETE_BLOCK": {
      const sections = state.sections.filter((_, i) => i !== action.index);
      return { ...state, sections };
    }

    case "MOVE_BLOCK": {
      const sections = [...state.sections];
      const [moved] = sections.splice(action.from, 1);
      sections.splice(action.to, 0, moved);
      return { ...state, sections };
    }

    case "SET_SECTIONS":
      return { ...state, sections: action.sections };

    case "LOAD_ARTICLE":
      return { ...state, ...action.state };

    default:
      return state;
  }
}

const tagColors: Record<string, string> = {
  Guide: "bg-[#615ca5]",
  Financement: "bg-[#ec680a]",
  "Actualit\u00e9s": "bg-[#ec680a]",
  "T\u00e9moignages": "bg-[#615ca5]",
  "Fili\u00e8res": "bg-[#ec680a]",
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function estimateReadTime(sections: ArticleSection[]): string {
  let wordCount = 0;
  for (const s of sections) {
    switch (s.type) {
      case "heading":
        wordCount += s.text.split(/\s+/).length;
        break;
      case "paragraph":
      case "callout":
        wordCount += s.html.replace(/<[^>]*>/g, "").split(/\s+/).length;
        break;
      case "list":
        wordCount += s.items.join(" ").replace(/<[^>]*>/g, "").split(/\s+/).length;
        break;
      case "table":
        wordCount += [...s.headers, ...s.rows.flat()].join(" ").split(/\s+/).length;
        break;
      case "faq":
        wordCount += s.items.map((i) => `${i.question} ${i.answer}`).join(" ").split(/\s+/).length;
        break;
      case "grid":
      case "stats-grid":
        wordCount += s.items.map((i) => Object.values(i).join(" ")).join(" ").split(/\s+/).length;
        break;
    }
  }
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min`;
}

export function useArticleEditor(initial?: Partial<ArticleEditorState>) {
  const [state, dispatch] = useReducer(reducer, { ...initialState, ...initial });

  const setField = useCallback(
    <K extends keyof ArticleEditorState>(field: K, value: ArticleEditorState[K]) => {
      dispatch({ type: "SET_FIELD", field, value });

      // Auto-generate slug from title
      if (field === "title" && typeof value === "string") {
        dispatch({ type: "SET_FIELD", field: "slug", value: slugify(value) });
      }

      // Auto-set tag color
      if (field === "tag" && typeof value === "string") {
        dispatch({
          type: "SET_FIELD",
          field: "tagColor",
          value: tagColors[value] ?? "bg-[#615ca5]",
        });
      }
    },
    []
  );

  const addBlock = useCallback(
    (index: number, block: ArticleSection) =>
      dispatch({ type: "ADD_BLOCK", index, block }),
    []
  );

  const updateBlock = useCallback(
    (index: number, block: ArticleSection) =>
      dispatch({ type: "UPDATE_BLOCK", index, block }),
    []
  );

  const deleteBlock = useCallback(
    (index: number) => dispatch({ type: "DELETE_BLOCK", index }),
    []
  );

  const moveBlock = useCallback(
    (from: number, to: number) => dispatch({ type: "MOVE_BLOCK", from, to }),
    []
  );

  const loadArticle = useCallback(
    (data: Partial<ArticleEditorState>) =>
      dispatch({ type: "LOAD_ARTICLE", state: data }),
    []
  );

  const readTime = estimateReadTime(state.sections);

  // Auto-generate sommaire from h2 headings
  const sommaire = state.sections
    .filter((s) => s.type === "heading" && s.level === "h2")
    .map((s) => ({
      id: slugify((s as { text: string }).text),
      label: (s as { text: string }).text,
    }));

  return {
    state,
    dispatch,
    setField,
    addBlock,
    updateBlock,
    deleteBlock,
    moveBlock,
    loadArticle,
    readTime,
    sommaire,
  };
}
