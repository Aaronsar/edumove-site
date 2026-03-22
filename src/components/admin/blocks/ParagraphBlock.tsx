"use client";

import { useRef, useState } from "react";
import { Link2, ExternalLink, Bold, Italic } from "lucide-react";
import type { ParagraphSection } from "@/types/sections";

interface Props {
  block: ParagraphSection;
  onChange: (block: ParagraphSection) => void;
}

export default function ParagraphBlock({ block, onChange }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkText, setLinkText] = useState("");
  const [linkExternal, setLinkExternal] = useState(false);

  function getSelection(): { start: number; end: number; text: string } {
    const ta = textareaRef.current;
    if (!ta) return { start: 0, end: 0, text: "" };
    return {
      start: ta.selectionStart,
      end: ta.selectionEnd,
      text: ta.value.substring(ta.selectionStart, ta.selectionEnd),
    };
  }

  function insertAtCursor(before: string, after: string) {
    const ta = textareaRef.current;
    if (!ta) return;
    const { start, end, text } = getSelection();
    const newValue =
      block.html.substring(0, start) + before + text + after + block.html.substring(end);
    onChange({ ...block, html: newValue });
    setTimeout(() => {
      ta.focus();
      ta.selectionStart = start + before.length;
      ta.selectionEnd = start + before.length + text.length;
    }, 0);
  }

  function handleBold() {
    insertAtCursor("<strong>", "</strong>");
  }

  function handleItalic() {
    insertAtCursor("<em>", "</em>");
  }

  function openLinkModal() {
    const { text } = getSelection();
    setLinkText(text || "");
    setLinkUrl("");
    setLinkExternal(false);
    setShowLinkModal(true);
  }

  function insertLink() {
    if (!linkUrl.trim()) return;
    const ta = textareaRef.current;
    if (!ta) return;
    const { start, end } = getSelection();
    const displayText = linkText.trim() || linkUrl;
    const attrs = linkExternal
      ? ` target="_blank" rel="noopener noreferrer"`
      : "";
    const tag = `<a href="${linkUrl.trim()}"${attrs}>${displayText}</a>`;
    const newValue = block.html.substring(0, start) + tag + block.html.substring(end);
    onChange({ ...block, html: newValue });
    setShowLinkModal(false);
    setLinkUrl("");
    setLinkText("");
    setTimeout(() => {
      ta.focus();
      ta.selectionStart = start + tag.length;
      ta.selectionEnd = start + tag.length;
    }, 0);
  }

  return (
    <div>
      {/* Mini toolbar */}
      <div className="flex items-center gap-1 mb-1.5">
        <button
          type="button"
          onClick={handleBold}
          className="p-1.5 rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
          title="Gras"
        >
          <Bold className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={handleItalic}
          className="p-1.5 rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
          title="Italique"
        >
          <Italic className="w-3.5 h-3.5" />
        </button>
        <div className="w-px h-4 bg-gray-200 mx-1" />
        <button
          type="button"
          onClick={openLinkModal}
          className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-[#615CA5]/10 text-gray-500 hover:text-[#615CA5] transition-colors text-xs font-medium"
          title="Insérer un lien"
        >
          <Link2 className="w-3.5 h-3.5" />
          Lien
        </button>
      </div>

      <textarea
        ref={textareaRef}
        value={block.html}
        onChange={(e) => onChange({ ...block, html: e.target.value })}
        placeholder="Texte du paragraphe... Utilisez la barre d'outils pour insérer des liens, du gras ou de l'italique."
        rows={4}
        className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-[#f8f9fb] text-sm text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20 resize-y font-mono"
      />

      <p className="text-[10px] text-[#94a3b8] mt-1">
        💡 Sélectionnez du texte puis cliquez sur &quot;Lien&quot; pour ajouter un lien, ou utilisez les boutons B / I.
      </p>

      {/* Link modal */}
      {showLinkModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-5 w-full max-w-md mx-4">
            <h3 className="text-sm font-semibold text-[#1e293b] mb-4 flex items-center gap-2">
              <Link2 className="w-4 h-4 text-[#615CA5]" />
              Insérer un lien
            </h3>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  URL du lien
                </label>
                <input
                  type="text"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="Ex: /formations/dentaire ou https://example.com"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
                  autoFocus
                  onKeyDown={(e) => e.key === "Enter" && insertLink()}
                />
                <p className="text-[10px] text-[#94a3b8] mt-1">
                  Lien interne : commencez par / (ex: /formations/dentaire)
                  <br />
                  Lien externe : URL complète (ex: https://...)
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Texte affiché
                </label>
                <input
                  type="text"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  placeholder="Ex: études dentaires en Espagne"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
                  onKeyDown={(e) => e.key === "Enter" && insertLink()}
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={linkExternal}
                  onChange={(e) => setLinkExternal(e.target.checked)}
                  className="rounded border-gray-300 text-[#615CA5] focus:ring-[#615CA5]"
                />
                <span className="text-xs text-gray-600 flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Lien externe (ouvre dans un nouvel onglet)
                </span>
              </label>
            </div>

            <div className="flex justify-end gap-2 mt-5">
              <button
                type="button"
                onClick={() => setShowLinkModal(false)}
                className="px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors"
              >
                Annuler
              </button>
              <button
                type="button"
                onClick={insertLink}
                disabled={!linkUrl.trim()}
                className="px-4 py-1.5 text-xs font-medium bg-[#615CA5] text-white rounded-lg hover:bg-[#4e4a8a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Insérer le lien
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
