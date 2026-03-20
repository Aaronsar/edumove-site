"use client";

import type { CalloutSection } from "@/types/sections";

interface Props {
  block: CalloutSection;
  onChange: (block: CalloutSection) => void;
}

export default function CalloutBlock({ block, onChange }: Props) {
  return (
    <div className="space-y-2">
      <select
        value={block.variant}
        onChange={(e) => onChange({ ...block, variant: e.target.value as "info" | "warning" })}
        className="px-2 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-xs font-semibold text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
      >
        <option value="info">\u2139\ufe0f Info (violet)</option>
        <option value="warning">\u26a0\ufe0f Warning (orange)</option>
      </select>
      <textarea
        value={block.html}
        onChange={(e) => onChange({ ...block, html: e.target.value })}
        placeholder="Contenu du callout..."
        rows={3}
        className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-[#f8f9fb] text-sm text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20 resize-y"
      />
    </div>
  );
}
