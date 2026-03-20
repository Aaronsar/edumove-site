"use client";

import type { HeadingSection } from "@/types/sections";

interface Props {
  block: HeadingSection;
  onChange: (block: HeadingSection) => void;
}

export default function HeadingBlock({ block, onChange }: Props) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <select
          value={block.level}
          onChange={(e) => onChange({ ...block, level: e.target.value as "h2" | "h3" })}
          className="px-2 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-xs font-semibold text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
        >
          <option value="h2">H2</option>
          <option value="h3">H3</option>
        </select>
        <input
          type="text"
          value={block.text}
          onChange={(e) => onChange({ ...block, text: e.target.value })}
          placeholder="Titre de la section..."
          className="flex-1 px-3 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-sm font-semibold text-[#1B1D3A] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
        />
      </div>
      <input
        type="text"
        value={block.icon ?? ""}
        onChange={(e) => onChange({ ...block, icon: e.target.value || undefined })}
        placeholder="Icône Lucide (ex: GraduationCap, Stethoscope)"
        className="w-full px-3 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-xs text-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
      />
    </div>
  );
}
