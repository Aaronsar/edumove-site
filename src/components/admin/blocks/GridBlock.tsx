"use client";

import type { GridSection } from "@/types/sections";
import { Plus, X } from "lucide-react";

interface Props {
  block: GridSection;
  onChange: (block: GridSection) => void;
}

export default function GridBlock({ block, onChange }: Props) {
  const addItem = () =>
    onChange({ ...block, items: [...block.items, { title: "", description: "" }] });

  const removeItem = (i: number) =>
    onChange({ ...block, items: block.items.filter((_, idx) => idx !== i) });

  const updateItem = (i: number, field: "title" | "description", value: string) => {
    const items = [...block.items];
    items[i] = { ...items[i], [field]: value };
    onChange({ ...block, items });
  };

  return (
    <div className="space-y-3">
      <select
        value={block.columns}
        onChange={(e) => onChange({ ...block, columns: Number(e.target.value) as 2 | 3 })}
        className="px-2 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-xs font-semibold text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
      >
        <option value={2}>2 colonnes</option>
        <option value={3}>3 colonnes</option>
      </select>
      {block.items.map((item, i) => (
        <div key={i} className="flex gap-2 items-start">
          <div className="flex-1 space-y-1">
            <input
              value={item.title}
              onChange={(e) => updateItem(i, "title", e.target.value)}
              placeholder="Titre"
              className="w-full px-3 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-sm font-medium text-[#1B1D3A] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
            />
            <input
              value={item.description}
              onChange={(e) => updateItem(i, "description", e.target.value)}
              placeholder="Description"
              className="w-full px-3 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-xs text-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
            />
          </div>
          <button onClick={() => removeItem(i)} className="p-1 text-[#94a3b8] hover:text-red-500 mt-1">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
      <button onClick={addItem} className="flex items-center gap-1 text-xs text-[#615CA5] hover:text-[#4e4a8a] font-medium">
        <Plus className="w-3 h-3" /> Ajouter une carte
      </button>
    </div>
  );
}
