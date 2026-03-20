"use client";

import type { ListSection } from "@/types/sections";
import { Plus, X } from "lucide-react";

interface Props {
  block: ListSection;
  onChange: (block: ListSection) => void;
}

export default function ListBlock({ block, onChange }: Props) {
  const addItem = () => onChange({ ...block, items: [...block.items, ""] });
  const removeItem = (i: number) =>
    onChange({ ...block, items: block.items.filter((_, idx) => idx !== i) });
  const updateItem = (i: number, value: string) => {
    const items = [...block.items];
    items[i] = value;
    onChange({ ...block, items });
  };

  return (
    <div className="space-y-2">
      <select
        value={block.style}
        onChange={(e) => onChange({ ...block, style: e.target.value as "bullet" | "numbered" })}
        className="px-2 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-xs font-semibold text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
      >
        <option value="bullet">\u2022 Liste \u00e0 puces</option>
        <option value="numbered">1. Liste num\u00e9rot\u00e9e</option>
      </select>
      {block.items.map((item, i) => (
        <div key={i} className="flex items-start gap-2">
          <span className="text-xs text-[#94a3b8] mt-2 w-5 shrink-0 text-right">
            {block.style === "numbered" ? `${i + 1}.` : "\u2022"}
          </span>
          <input
            type="text"
            value={item}
            onChange={(e) => updateItem(i, e.target.value)}
            placeholder={`\u00c9l\u00e9ment ${i + 1}...`}
            className="flex-1 px-3 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-sm text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
          />
          <button
            onClick={() => removeItem(i)}
            className="p-1 text-[#94a3b8] hover:text-red-500 transition-colors mt-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
      <button
        onClick={addItem}
        className="flex items-center gap-1 text-xs text-[#615CA5] hover:text-[#4e4a8a] font-medium"
      >
        <Plus className="w-3 h-3" /> Ajouter un \u00e9l\u00e9ment
      </button>
    </div>
  );
}
