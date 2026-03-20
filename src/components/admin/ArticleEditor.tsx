"use client";

import { useState, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  useArticleEditor,
  type ArticleEditorState,
} from "@/lib/editor/useArticleEditor";
import type { ArticleSection, HeroPill } from "@/types/sections";
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
  Clock,
  X,
  FileText,
  GraduationCap,
  Sparkles,
  Globe,
  Brain,
  PenLine,
  MessageCircle,
  ClipboardList,
  Heart,
  Star,
  Zap,
  Shield,
  Target,
  Award,
  BookOpen,
  Users,
  MapPin,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  Stethoscope,
  Pill,
  Dog,
  Building2,
} from "lucide-react";

/* ---------- Icon Map for Hero Pills ---------- */

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  GraduationCap,
  Sparkles,
  Globe,
  Brain,
  PenLine,
  MessageCircle,
  ClipboardList,
  Heart,
  Star,
  Zap,
  Shield,
  Target,
  Award,
  BookOpen,
  Users,
  MapPin,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  Stethoscope,
  Pill,
  Dog,
  Building2,
  HelpCircle,
  Eye,
};

const iconOptions = Object.keys(iconMap);

/* ---------- Block Types ---------- */

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

const tagOptions = [
  { value: "Guide", label: "Guide" },
  { value: "Financement", label: "Financement" },
  { value: "Actualités", label: "Actualités" },
  { value: "Témoignages", label: "Témoignages" },
  { value: "Filières", label: "Filières" },
];

const tagColorMap: Record<string, string> = {
  Guide: "bg-[#615ca5]",
  Financement: "bg-[#ec680a]",
  Actualités: "bg-[#ec680a]",
  Témoignages: "bg-[#615ca5]",
  Filières: "bg-[#ec680a]",
};

const formationOptions = ["medecine", "dentaire", "kinesitherapie", "pharmacie", "veterinaire"];
const universityOptions = [
  { value: "/universites/universidad-europea", label: "Universidad Europea" },
  { value: "/universites/ucjc", label: "UCJC" },
  { value: "/universites/link-campus", label: "LINK Campus" },
];

/* ---------- Sub-components ---------- */

interface BlockEditorProps {
  block: ArticleSection;
  onChange: (block: ArticleSection) => void;
}

function BlockEditor({ block, onChange }: BlockEditorProps) {
  switch (block.type) {
    case "heading":
      return <HeadingBlock block={block} onChange={onChange} />;
    case "paragraph":
      return <ParagraphBlock block={block} onChange={onChange} />;
    case "callout":
      return <CalloutBlock block={block} onChange={onChange} />;
    case "list":
      return <ListBlock block={block} onChange={onChange} />;
    case "table":
      return <TableBlock block={block} onChange={onChange} />;
    case "image":
      return <ImageBlock block={block} onChange={onChange} />;
    case "grid":
      return <GridBlock block={block} onChange={onChange} />;
    case "faq":
      return <FAQBlock block={block} onChange={onChange} />;
    default:
      return <p className="text-xs text-red-500">Type de bloc inconnu</p>;
  }
}

function AddBlockButton({ onAdd }: { onAdd: (type: string) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex justify-center my-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-[10px] font-semibold text-[#615CA5] hover:text-[#4e4a8a] bg-[#615CA5]/5 hover:bg-[#615CA5]/10 px-3 py-1.5 rounded-full transition-all"
      >
        <Plus className="w-3 h-3" />
        Ajouter un bloc
      </button>
      {open && (
        <div className="absolute top-full mt-1 z-10 bg-white rounded-xl border border-gray-200 shadow-lg p-2 grid grid-cols-2 gap-1 w-64">
          {blockTypes.map((bt) => (
            <button
              key={bt.type}
              onClick={() => {
                onAdd(bt.type);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-[#334155] hover:bg-[#615CA5]/5 transition-colors text-left"
            >
              <bt.icon className="w-3.5 h-3.5 text-[#615CA5]" />
              {bt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const blockLabels: Record<string, string> = {
  heading: "Titre",
  paragraph: "Paragraphe",
  callout: "Callout",
  list: "Liste",
  table: "Tableau",
  image: "Image",
  grid: "Grille",
  faq: "FAQ",
  "link-card": "Carte lien",
  "stats-grid": "Stats",
};

/* ---------- Hero Pills Editor ---------- */

function HeroPillsEditor({
  pills,
  onChange,
}: {
  pills: HeroPill[];
  onChange: (pills: HeroPill[]) => void;
}) {
  const [showIconPicker, setShowIconPicker] = useState<number | null>(null);

  function addPill() {
    onChange([...pills, { icon: "Star", label: "" }]);
  }

  function removePill(index: number) {
    onChange(pills.filter((_, i) => i !== index));
  }

  function updatePill(index: number, field: "icon" | "label", value: string) {
    const updated = [...pills];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  }

  return (
    <div className="space-y-2">
      {pills.map((pill, i) => {
        const IconComp = iconMap[pill.icon] || Star;
        return (
          <div key={i} className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setShowIconPicker(showIconPicker === i ? null : i)}
                className="w-8 h-8 rounded-lg bg-[#EC680A]/10 flex items-center justify-center hover:bg-[#EC680A]/20 transition-colors"
                title="Changer l'icône"
              >
                <IconComp className="w-4 h-4 text-[#EC680A]" />
              </button>
              {showIconPicker === i && (
                <div className="absolute top-full left-0 mt-1 z-20 bg-white rounded-xl border border-gray-200 shadow-lg p-2 grid grid-cols-5 gap-1 w-52">
                  {iconOptions.map((name) => {
                    const IC = iconMap[name];
                    return (
                      <button
                        key={name}
                        onClick={() => {
                          updatePill(i, "icon", name);
                          setShowIconPicker(null);
                        }}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                          pill.icon === name
                            ? "bg-[#EC680A]/20 text-[#EC680A]"
                            : "hover:bg-gray-100 text-[#64748b]"
                        }`}
                        title={name}
                      >
                        <IC className="w-4 h-4" />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            <input
              type="text"
              value={pill.label}
              onChange={(e) => updatePill(i, "label", e.target.value)}
              placeholder="Label du badge..."
              className="flex-1 px-2.5 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-xs text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
            />
            <button
              onClick={() => removePill(i)}
              className="p-1.5 text-[#94a3b8] hover:text-red-500 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
      <button
        onClick={addPill}
        className="flex items-center gap-1.5 text-[10px] font-semibold text-[#615CA5] hover:text-[#4e4a8a] bg-[#615CA5]/5 hover:bg-[#615CA5]/10 px-3 py-1.5 rounded-full transition-all"
      >
        <Plus className="w-3 h-3" />
        Ajouter un badge
      </button>
    </div>
  );
}

/* ---------- Hero Preview Component ---------- */

function HeroPreview({
  state,
  readTime,
  setField,
}: {
  state: ArticleEditorState;
  readTime: string;
  setField: <K extends keyof ArticleEditorState>(field: K, value: ArticleEditorState[K]) => void;
}) {
  const [editingPills, setEditingPills] = useState(false);

  return (
    <div className="bg-[#1B1D3A] rounded-2xl p-6 md:p-8 overflow-hidden relative">
      {/* Background blurs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#615CA5]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#EC680A]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Label */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-[10px] uppercase tracking-widest text-white/30 font-semibold">
            Hero de l&apos;article (H1)
          </p>
          <span className="text-[10px] text-white/20 bg-white/5 px-2 py-0.5 rounded-full">
            Visible en haut de la page publique
          </span>
        </div>

        {/* Breadcrumb preview */}
        <nav className="text-xs mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
          Accueil / Blog / {state.tag}
        </nav>

        {/* Tag + Read time */}
        <div className="flex items-center gap-3 mb-5">
          <select
            value={state.tag}
            onChange={(e) => setField("tag", e.target.value as ArticleEditorState["tag"])}
            className="text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-transparent border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#EC680A]/40"
            style={{ backgroundColor: tagColorMap[state.tag] ? "rgba(97,92,165,0.6)" : "rgba(236,104,10,0.6)" }}
          >
            {tagOptions.map((t) => (
              <option key={t.value} value={t.value} className="bg-[#1B1D3A] text-white">
                {t.label}
              </option>
            ))}
          </select>
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-medium px-3 py-1.5 rounded-full border"
            style={{ color: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.15)" }}
          >
            <Clock className="w-3 h-3" />
            {readTime} de lecture
          </span>
        </div>

        {/* H1 Title - editable */}
        <input
          type="text"
          value={state.title}
          onChange={(e) => setField("title", e.target.value)}
          placeholder="Titre de l'article (H1)..."
          className="w-full text-2xl md:text-3xl font-extrabold leading-[1.15] mb-4 bg-transparent border-none outline-none text-white placeholder:text-white/20 focus:ring-0"
        />

        {/* Excerpt - editable */}
        <textarea
          value={state.excerpt}
          onChange={(e) => setField("excerpt", e.target.value)}
          placeholder="Sous-titre / résumé court visible dans le hero..."
          rows={2}
          className="w-full text-sm leading-relaxed bg-transparent border border-white/10 rounded-xl px-3 py-2.5 outline-none resize-y focus:border-white/25 placeholder:text-white/15"
          style={{ color: "rgba(255,255,255,0.6)" }}
        />

        {/* Hero Pills */}
        <div className="mt-5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] uppercase tracking-wider text-white/30 font-semibold">
              Badges / mots-clés du hero
            </p>
            <button
              onClick={() => setEditingPills(!editingPills)}
              className="text-[10px] font-medium text-[#EC680A] hover:text-[#D45E09] transition-colors"
            >
              {editingPills ? "Aperçu" : "Modifier"}
            </button>
          </div>

          {editingPills ? (
            <div className="bg-white/5 rounded-xl p-3 border border-white/10">
              <HeroPillsEditor
                pills={state.heroPills}
                onChange={(pills) => setField("heroPills", pills)}
              />
            </div>
          ) : state.heroPills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {state.heroPills.map((pill, i) => {
                const IconComp = iconMap[pill.icon] || Star;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    <IconComp className="w-3.5 h-3.5 text-[#EC680A]" />
                    {pill.label}
                  </div>
                );
              })}
            </div>
          ) : (
            <button
              onClick={() => setEditingPills(true)}
              className="text-[10px] text-white/20 hover:text-white/40 border border-dashed border-white/10 rounded-lg px-4 py-2 transition-colors"
            >
              + Ajouter des badges au hero (optionnel)
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Main Editor ---------- */

interface ArticleEditorProps {
  articleId?: number;
  initialData?: Partial<ArticleEditorState>;
}

export default function ArticleEditor({ articleId, initialData }: ArticleEditorProps) {
  const router = useRouter();
  const supabaseRef = useRef<ReturnType<typeof createClient> | null>(null);
  function getSupabase() {
    if (!supabaseRef.current) supabaseRef.current = createClient();
    return supabaseRef.current;
  }
  const supabase = getSupabase();
  const {
    state,
    setField,
    addBlock,
    updateBlock,
    deleteBlock,
    moveBlock,
    readTime,
  } = useArticleEditor(initialData);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [activePanel, setActivePanel] = useState<"seo" | "relations" | "publish">("seo");

  // Calculate SEO score in real-time
  const seoAnalysis = useMemo(
    () =>
      analyzeSEO({
        title: state.title,
        metaTitle: state.metaTitle || state.title,
        metaDescription: state.metaDescription,
        slug: state.slug,
        focusKeyword: state.focusKeyword,
        sections: state.sections,
      }),
    [state.title, state.metaTitle, state.metaDescription, state.slug, state.focusKeyword, state.sections]
  );

  async function handleSave(publishStatus?: "draft" | "published") {
    setSaving(true);
    setMessage("");

    // Calculate SEO score before saving
    const currentScore = seoAnalysis.score;

    const status = publishStatus ?? state.status;
    const data = {
      slug: state.slug,
      title: state.title,
      meta_title: state.metaTitle || state.title,
      meta_description: state.metaDescription,
      excerpt: state.excerpt,
      tag: state.tag,
      tag_color: tagColorMap[state.tag] ?? "bg-[#615ca5]",
      sections: state.sections,
      read_time: readTime,
      is_guide: state.isGuide,
      hero_pills: state.heroPills,
      related_slugs: state.relatedSlugs,
      related_formations: state.relatedFormations,
      related_universities: state.relatedUniversities,
      status,
      focus_keyword: state.focusKeyword,
      seo_score: currentScore,
      published_at: status === "published" ? new Date().toISOString() : null,
    };

    let error;
    if (articleId) {
      const result = await supabase
        .from("edumove_articles")
        .update(data)
        .eq("id", articleId);
      error = result.error;
    } else {
      const result = await supabase
        .from("edumove_articles")
        .insert({ ...data, source: "manual" })
        .select("id")
        .single();
      error = result.error;
      if (!error && result.data) {
        router.push(`/admin/articles/${result.data.id}`);
      }
    }

    if (error) {
      setMessage(`Erreur : ${error.message}`);
    } else {
      setMessage(
        status === "published"
          ? `Article publié ! (SEO: ${currentScore}/100)`
          : `Brouillon enregistré ! (SEO: ${currentScore}/100)`
      );
      setTimeout(() => setMessage(""), 4000);
    }
    setSaving(false);
  }

  return (
    <div className="flex gap-6 items-start">
      {/* Left column — Editor */}
      <div className="flex-1 min-w-0 space-y-4">
        {/* Hero Preview — Title H1 + Excerpt + Tag + Pills */}
        <HeroPreview state={state} readTime={readTime} setField={setField} />

        {/* Content Blocks */}
        <div className="bg-white rounded-xl border border-gray-200/80 p-4">
          <p className="text-xs uppercase tracking-wider text-[#94a3b8] font-semibold mb-3">
            Contenu de l&apos;article (sections H2, paragraphes, etc.)
          </p>

          <AddBlockButton onAdd={(type) => addBlock(0, newBlock(type))} />

          {state.sections.map((block, i) => (
            <div key={i}>
              <div className="bg-[#fafbff] rounded-lg border border-gray-200/80 p-3 my-1">
                {/* Block header */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-[#615CA5] uppercase tracking-wider">
                    {blockLabels[block.type] ?? block.type}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => i > 0 && moveBlock(i, i - 1)}
                      disabled={i === 0}
                      className="p-1 text-[#94a3b8] hover:text-[#334155] disabled:opacity-30"
                    >
                      <ChevronUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() =>
                        i < state.sections.length - 1 && moveBlock(i, i + 1)
                      }
                      disabled={i === state.sections.length - 1}
                      className="p-1 text-[#94a3b8] hover:text-[#334155] disabled:opacity-30"
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => deleteBlock(i)}
                      className="p-1 text-[#94a3b8] hover:text-red-500"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Block content */}
                <BlockEditor
                  block={block}
                  onChange={(updated) => updateBlock(i, updated)}
                />
              </div>

              <AddBlockButton onAdd={(type) => addBlock(i + 1, newBlock(type))} />
            </div>
          ))}

          {state.sections.length === 0 && (
            <div className="text-center py-8">
              <p className="text-sm text-[#94a3b8] mb-2">
                Aucun bloc pour le moment
              </p>
              <p className="text-xs text-[#c8c9d0]">
                Cliquez sur &ldquo;Ajouter un bloc&rdquo; pour commencer
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right column — Panels */}
      <div className="w-80 shrink-0 space-y-4 sticky top-20">
        {/* Save bar */}
        <div className="bg-white rounded-xl border border-gray-200/80 p-4 space-y-3">
          {message && (
            <p
              className={`text-xs font-medium px-3 py-2 rounded-lg ${
                message.includes("Erreur")
                  ? "bg-red-50 text-red-600"
                  : "bg-green-50 text-green-600"
              }`}
            >
              {message}
            </p>
          )}

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
              onClick={() => handleSave("draft")}
              disabled={saving || !state.title || !state.slug}
              className="flex-1 flex items-center justify-center gap-1.5 bg-white border border-gray-200 hover:bg-gray-50 text-sm font-medium text-[#334155] py-2.5 rounded-xl transition-colors disabled:opacity-40"
            >
              <Save className="w-3.5 h-3.5" />
              {saving ? "..." : "Brouillon"}
            </button>
            <button
              onClick={() => handleSave("published")}
              disabled={saving || !state.title || !state.slug}
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#EC680A] hover:bg-[#D45E09] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors disabled:opacity-40"
            >
              <Eye className="w-3.5 h-3.5" />
              {saving ? "..." : "Publier"}
            </button>
          </div>
          <p className="text-[10px] text-[#94a3b8] text-center">
            {readTime} de lecture &middot; {state.sections.length} blocs
          </p>
        </div>

        {/* Panel tabs */}
        <div className="bg-white rounded-xl border border-gray-200/80 overflow-hidden">
          <div className="flex border-b border-gray-100">
            {(["seo", "relations", "publish"] as const).map((panel) => (
              <button
                key={panel}
                onClick={() => setActivePanel(panel)}
                className={`flex-1 text-xs font-semibold py-2.5 transition-colors ${
                  activePanel === panel
                    ? "text-[#615CA5] border-b-2 border-[#615CA5]"
                    : "text-[#94a3b8] hover:text-[#334155]"
                }`}
              >
                {panel === "seo" ? "SEO" : panel === "relations" ? "Relations" : "Publication"}
              </button>
            ))}
          </div>

          <div className="p-4 max-h-[60vh] overflow-y-auto">
            {/* SEO Panel */}
            {activePanel === "seo" && (
              <SEOPanel
                title={state.title}
                metaTitle={state.metaTitle}
                metaDescription={state.metaDescription}
                slug={state.slug}
                focusKeyword={state.focusKeyword}
                sections={state.sections}
                isGuide={state.isGuide}
                onMetaTitleChange={(v) => setField("metaTitle", v)}
                onMetaDescriptionChange={(v) => setField("metaDescription", v)}
                onSlugChange={(v) => setField("slug", v)}
                onFocusKeywordChange={(v) => setField("focusKeyword", v)}
              />
            )}

            {/* Relations Panel */}
            {activePanel === "relations" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-2">
                    Formations liées
                  </label>
                  <div className="space-y-1">
                    {formationOptions.map((f) => (
                      <label key={f} className="flex items-center gap-2 text-sm text-[#334155]">
                        <input
                          type="checkbox"
                          checked={state.relatedFormations.includes(f)}
                          onChange={(e) => {
                            const updated = e.target.checked
                              ? [...state.relatedFormations, f]
                              : state.relatedFormations.filter((x) => x !== f);
                            setField("relatedFormations", updated);
                          }}
                          className="rounded border-gray-300 text-[#615CA5] focus:ring-[#615CA5]"
                        />
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-2">
                    Universités liées
                  </label>
                  <div className="space-y-1">
                    {universityOptions.map((u) => (
                      <label key={u.value} className="flex items-center gap-2 text-sm text-[#334155]">
                        <input
                          type="checkbox"
                          checked={state.relatedUniversities.includes(u.value)}
                          onChange={(e) => {
                            const updated = e.target.checked
                              ? [...state.relatedUniversities, u.value]
                              : state.relatedUniversities.filter((x) => x !== u.value);
                            setField("relatedUniversities", updated);
                          }}
                          className="rounded border-gray-300 text-[#615CA5] focus:ring-[#615CA5]"
                        />
                        {u.label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Publish Panel */}
            {activePanel === "publish" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">
                    Tag
                  </label>
                  <select
                    value={state.tag}
                    onChange={(e) => setField("tag", e.target.value as ArticleEditorState["tag"])}
                    className="w-full px-3 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-sm text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
                  >
                    {tagOptions.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm text-[#334155]">
                    <input
                      type="checkbox"
                      checked={state.isGuide}
                      onChange={(e) => setField("isGuide", e.target.checked)}
                      className="rounded border-gray-300 text-[#615CA5] focus:ring-[#615CA5]"
                    />
                    C&apos;est un guide (URL /guides/ au lieu de /blog/)
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">
                    Statut
                  </label>
                  <select
                    value={state.status}
                    onChange={(e) =>
                      setField("status", e.target.value as ArticleEditorState["status"])
                    }
                    className="w-full px-3 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-sm text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
                  >
                    <option value="draft">Brouillon</option>
                    <option value="published">Publié</option>
                    <option value="archived">Archivé</option>
                  </select>
                </div>

                <div className="text-xs text-[#94a3b8] space-y-1">
                  <p>Temps de lecture : <strong>{readTime}</strong></p>
                  <p>Blocs : <strong>{state.sections.length}</strong></p>
                  <p>Score SEO : <strong>{seoAnalysis.score}/100</strong></p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
