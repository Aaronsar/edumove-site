"use client";

import { useState, useRef, useCallback, useMemo } from "react";
import { createClient } from "@/lib/supabase/client";
import type { ArticleSection } from "@/types/sections";
import { analyzeSEO } from "@/lib/seo/analyzeSEO";
import SEOPanel from "./SEOPanel";
import HeadingBlock from "./blocks/HeadingBlock";
import ParagraphBlock from "./blocks/ParagraphBlock";
import CalloutBlock from "./blocks/CalloutBlock";
import ListBlock from "./blocks/ListBlock";
import TableBlock from "./blocks/TableBlock";
import ImageBlock from "./blocks/ImageBlock";
import GridBlock from "./blocks/GridBlock";
import FAQBlock from "./blocks/FAQBlock";
import {
  Plus,
  ChevronUp,
  ChevronDown,
  Trash2,
  Save,
  Eye,
  Heading2,
  Type,
  AlertTriangle,
  List,
  Table,
  Image as ImageIcon,
  LayoutGrid,
  HelpCircle,
  Loader2,
  Check,
  ExternalLink,
} from "lucide-react";

const blockTypes = [
  { type: "heading", label: "Titre", icon: Heading2 },
  { type: "paragraph", label: "Paragraphe", icon: Type },
  { type: "callout", label: "Callout", icon: AlertTriangle },
  { type: "list", label: "Liste", icon: List },
  { type: "table", label: "Tableau", icon: Table },
  { type: "image", label: "Image", icon: ImageIcon },
  { type: "grid", label: "Grille", icon: LayoutGrid },
  { type: "faq", label: "FAQ", icon: HelpCircle },
] as const;

function newBlock(type: string): ArticleSection {
  switch (type) {
    case "heading":
      return { type: "heading", level: "h2", text: "" };
    case "paragraph":
      return { type: "paragraph", html: "" };
    case "callout":
      return { type: "callout", variant: "info", html: "" };
    case "list":
      return { type: "list", style: "bullet", items: [""] };
    case "table":
      return { type: "table", headers: ["", ""], rows: [["", ""]] };
    case "image":
      return { type: "image", src: "", alt: "" };
    case "grid":
      return { type: "grid", columns: 2, items: [{ title: "", description: "" }] };
    case "faq":
      return { type: "faq", items: [{ question: "", answer: "" }] };
    default:
      return { type: "paragraph", html: "" };
  }
}

const blockLabels: Record<string, string> = {
  heading: "TITRE H2",
  paragraph: "PARAGRAPHE",
  callout: "CALLOUT",
  list: "LISTE",
  table: "TABLEAU",
  image: "IMAGE",
  grid: "GRILLE",
  faq: "FAQ",
  "link-card": "CARTE LIEN",
  "stats-grid": "STATS",
};

interface PageData {
  id: number;
  page_slug: string;
  title: string;
  meta_title: string | null;
  meta_description: string | null;
  sections: ArticleSection[];
  status: string;
  focus_keyword?: string | null;
  seo_score?: number;
}

interface Props {
  page: PageData;
  publicUrl: string;
}

export default function PageEditor({ page, publicUrl }: Props) {
  const supabaseRef = useRef<ReturnType<typeof createClient> | null>(null);
  function getSupabase() {
    if (!supabaseRef.current) supabaseRef.current = createClient();
    return supabaseRef.current;
  }

  const [title, setTitle] = useState(page.title);
  const [metaTitle, setMetaTitle] = useState(page.meta_title ?? "");
  const [metaDescription, setMetaDescription] = useState(page.meta_description ?? "");
  const [focusKeyword, setFocusKeyword] = useState(page.focus_keyword ?? "");
  const [sections, setSections] = useState<ArticleSection[]>(page.sections ?? []);
  const [status, setStatus] = useState(page.status);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const [addMenuOpen, setAddMenuOpen] = useState<number | null>(null);

  // SEO score calculation in real-time
  const seoAnalysis = useMemo(
    () =>
      analyzeSEO({
        title,
        metaTitle: metaTitle || title,
        metaDescription,
        slug: page.page_slug,
        focusKeyword,
        sections,
      }),
    [title, metaTitle, metaDescription, page.page_slug, focusKeyword, sections]
  );

  const updateSection = useCallback((index: number, updated: ArticleSection) => {
    setSections((prev) => prev.map((s, i) => (i === index ? updated : s)));
  }, []);

  const removeSection = useCallback((index: number) => {
    setSections((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const moveSection = useCallback((index: number, dir: "up" | "down") => {
    setSections((prev) => {
      const arr = [...prev];
      const target = dir === "up" ? index - 1 : index + 1;
      if (target < 0 || target >= arr.length) return prev;
      [arr[index], arr[target]] = [arr[target], arr[index]];
      return arr;
    });
  }, []);

  const addSection = useCallback((afterIndex: number, type: string) => {
    setSections((prev) => {
      const arr = [...prev];
      arr.splice(afterIndex + 1, 0, newBlock(type));
      return arr;
    });
    setAddMenuOpen(null);
  }, []);

  async function handleSave() {
    setSaving(true);
    setError("");

    const currentScore = seoAnalysis.score;

    const { error: saveError } = await getSupabase()
      .from("edumove_pages")
      .update({
        title,
        meta_title: metaTitle || null,
        meta_description: metaDescription || null,
        focus_keyword: focusKeyword || null,
        seo_score: currentScore,
        sections,
        status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", page.id);

    setSaving(false);

    if (saveError) {
      setError(saveError.message);
      return;
    }

    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  function renderBlock(section: ArticleSection, index: number) {
    const props = {
      onChange: (updated: ArticleSection) => updateSection(index, updated),
    };

    switch (section.type) {
      case "heading":
        return <HeadingBlock block={section} {...props} />;
      case "paragraph":
        return <ParagraphBlock block={section} {...props} />;
      case "callout":
        return <CalloutBlock block={section} {...props} />;
      case "list":
        return <ListBlock block={section} {...props} />;
      case "table":
        return <TableBlock block={section} {...props} />;
      case "image":
        return <ImageBlock block={section} {...props} />;
      case "grid":
        return <GridBlock block={section} {...props} />;
      case "faq":
        return <FAQBlock block={section} {...props} />;
      default:
        return <p className="text-xs text-red-400">Bloc inconnu : {section.type}</p>;
    }
  }

  return (
    <div className="flex gap-6">
      {/* Left: Block editor */}
      <div className="flex-1 min-w-0">

        {/* ===== HERO SECTION — H1 ===== */}
        <div className="bg-[#1B1D3A] rounded-2xl p-6 md:p-8 mb-6 overflow-hidden relative">
          {/* Background blurs */}
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#615CA5]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#EC680A]/10 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            {/* Label */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-[10px] uppercase tracking-widest text-white/30 font-semibold">
                Hero de la page (H1)
              </p>
              <span className="text-[10px] text-white/20 bg-white/5 px-2 py-0.5 rounded-full">
                Titre principal visible en haut de la page
              </span>
            </div>

            {/* Breadcrumb preview */}
            <nav className="text-xs mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>
              edumove.fr{publicUrl}
            </nav>

            {/* H1 Title - EDITABLE */}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titre H1 de la page..."
              className="w-full text-2xl md:text-3xl font-extrabold leading-[1.15] mb-2 bg-transparent border-none outline-none text-white placeholder:text-white/20 focus:ring-0"
            />

            {/* Slug */}
            <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.25)" }}>
              /{page.page_slug}
            </p>
          </div>
        </div>

        {/* ===== CONTENT BLOCKS ===== */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wider text-[#94a3b8] font-semibold mb-1">
            Contenu de la page (sections H2, paragraphes, listes, etc.)
          </p>

          {/* Add block at top */}
          <AddBlockButton
            index={-1}
            isOpen={addMenuOpen === -1}
            onToggle={() => setAddMenuOpen(addMenuOpen === -1 ? null : -1)}
            onAdd={addSection}
          />

          {sections.map((section, i) => (
            <div key={i}>
              <div className="bg-white rounded-xl border border-gray-200/80 p-4 group hover:border-[#615CA5]/30 transition-colors">
                {/* Block toolbar */}
                <div className="flex items-center justify-between mb-3 opacity-50 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#615CA5]">
                    {blockLabels[section.type] ?? section.type}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => moveSection(i, "up")}
                      disabled={i === 0}
                      className="p-1 rounded hover:bg-gray-100 disabled:opacity-20"
                    >
                      <ChevronUp className="w-3.5 h-3.5 text-[#64748b]" />
                    </button>
                    <button
                      onClick={() => moveSection(i, "down")}
                      disabled={i === sections.length - 1}
                      className="p-1 rounded hover:bg-gray-100 disabled:opacity-20"
                    >
                      <ChevronDown className="w-3.5 h-3.5 text-[#64748b]" />
                    </button>
                    <button
                      onClick={() => removeSection(i)}
                      className="p-1 rounded hover:bg-red-50 text-[#64748b] hover:text-red-500"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                {renderBlock(section, i)}
              </div>

              <AddBlockButton
                index={i}
                isOpen={addMenuOpen === i}
                onToggle={() => setAddMenuOpen(addMenuOpen === i ? null : i)}
                onAdd={addSection}
              />
            </div>
          ))}

          {sections.length === 0 && (
            <div className="bg-white rounded-xl border-2 border-dashed border-gray-200 p-12 text-center">
              <p className="text-sm text-[#94a3b8] mb-3">
                Cette page est vide. Ajoutez votre premier bloc.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {blockTypes.map((bt) => (
                  <button
                    key={bt.type}
                    onClick={() => addSection(-1, bt.type)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-[#615CA5]/5 text-xs font-medium text-[#334155] hover:text-[#615CA5] transition-colors"
                  >
                    <bt.icon className="w-3.5 h-3.5" />
                    {bt.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right: Settings panel */}
      <div className="w-80 shrink-0 space-y-4 sticky top-20">
        {/* Save + View + Score */}
        <div className="bg-white rounded-xl border border-gray-200/80 p-4 space-y-3">
          {/* Mini SEO score */}
          <div className="flex items-center justify-center gap-2 py-1">
            <div
              className={`w-3 h-3 rounded-full ${
                seoAnalysis.score >= 71
                  ? "bg-green-500"
                  : seoAnalysis.score >= 41
                  ? "bg-amber-500"
                  : "bg-red-500"
              }`}
            />
            <span className="text-xs font-semibold text-[#334155]">
              SEO : {seoAnalysis.score}/100
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex-1 flex items-center justify-center gap-2 bg-[#1B1D3A] hover:bg-[#2a2d52] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors disabled:opacity-50"
            >
              {saving ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : saved ? (
                <Check className="w-4 h-4" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              {saving ? "..." : saved ? "Enregistré !" : "Enregistrer"}
            </button>
            <a
              href={`https://edumove-site.vercel.app${publicUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-sm text-[#334155] transition-colors"
            >
              <Eye className="w-4 h-4" />
            </a>
          </div>

          {error && (
            <p className="text-xs text-red-500 bg-red-50 rounded-lg px-3 py-2">{error}</p>
          )}

          {/* Status */}
          <div>
            <label className="block text-xs font-semibold text-[#334155] mb-1">Statut</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-sm text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
            >
              <option value="draft">Brouillon</option>
              <option value="published">Publié</option>
            </select>
          </div>

          <div className="text-[10px] text-[#94a3b8] text-center">
            {sections.length} blocs
          </div>
        </div>

        {/* SEO Panel — full RankMath-like analysis */}
        <div className="bg-white rounded-xl border border-gray-200/80 overflow-hidden">
          <div className="p-4">
            <SEOPanel
              title={title}
              metaTitle={metaTitle}
              metaDescription={metaDescription}
              slug={page.page_slug}
              focusKeyword={focusKeyword}
              sections={sections}
              isGuide={false}
              onMetaTitleChange={setMetaTitle}
              onMetaDescriptionChange={setMetaDescription}
              onSlugChange={() => {}}
              onFocusKeywordChange={setFocusKeyword}
            />
          </div>
        </div>

        {/* Page info */}
        <div className="bg-white rounded-xl border border-gray-200/80 p-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#94a3b8] mb-2">Infos</h3>
          <div className="space-y-1.5 text-xs text-[#64748b]">
            <div className="flex justify-between">
              <span>Slug</span>
              <span className="font-mono text-[#334155]">{page.page_slug}</span>
            </div>
            <div className="flex justify-between">
              <span>Blocs</span>
              <span className="font-mono text-[#334155]">{sections.length}</span>
            </div>
          </div>
          <a
            href={`https://edumove-site.vercel.app${publicUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 mt-3 text-xs text-[#615CA5] hover:text-[#4e4a8a] font-medium"
          >
            <ExternalLink className="w-3 h-3" />
            Voir la page en ligne
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------- Add Block Button ---------- */

function AddBlockButton({
  index,
  isOpen,
  onToggle,
  onAdd,
}: {
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  onAdd: (afterIndex: number, type: string) => void;
}) {
  return (
    <div className="relative flex items-center justify-center py-1">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium text-[#94a3b8] hover:text-[#615CA5] hover:bg-[#615CA5]/5 transition-colors"
      >
        <Plus className="w-3 h-3" />
        Ajouter un bloc
      </button>
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 z-20 bg-white rounded-xl shadow-lg border border-gray-200 p-2 flex flex-wrap gap-1 min-w-[280px]">
          {blockTypes.map((bt) => (
            <button
              key={bt.type}
              onClick={() => onAdd(index, bt.type)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-[#615CA5]/5 text-xs font-medium text-[#334155] hover:text-[#615CA5] transition-colors"
            >
              <bt.icon className="w-3.5 h-3.5" />
              {bt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
