"use client";

import type { ParagraphSection } from "@/types/sections";

interface Props {
  block: ParagraphSection;
  onChange: (block: ParagraphSection) => void;
}

export default function ParagraphBlock({ block, onChange }: Props) {
  return (
    <div>
      <textarea
        value={block.html}
        onChange={(e) => onChange({ ...block, html: e.target.value })}
        placeholder="Texte du paragraphe... (HTML autoris\u00e9 : <strong>, <a href=''>, <em>)"
        rows={4}
        className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-[#f8f9fb] text-sm text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20 resize-y"
      />
      <p className="text-[10px] text-[#94a3b8] mt-1">
        Supports HTML : &lt;strong&gt;, &lt;em&gt;, &lt;a href=&quot;...&quot;&gt;
      </p>
    </div>
  );
}
