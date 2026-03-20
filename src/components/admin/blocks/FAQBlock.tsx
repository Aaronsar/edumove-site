"use client";

import type { FAQSection } from "@/types/sections";
import { Plus, X } from "lucide-react";

interface Props {
  block: FAQSection;
  onChange: (block: FAQSection) => void;
}

export default function FAQBlock({ block, onChange }: Props) {
  const addItem = () =>
    onChange({ ...block, items: [...block.items, { question: "", answer: "" }] });

  const removeItem = (i: number) =>
    onChange({ ...block, items: block.items.filter((_, idx) => idx !== i) });

  const updateItem = (i: number, field: "question" | "answer", value: string) => {
    const items = [...block.items];
    items[i] = { ...items[i], [field]: value };
    onChange({ ...block, items });
  };

  return (
    <div className="space-y-3">
      {block.items.map((item, i) => (
        <div key={i} className="bg-[#f8f9fb] rounded-lg p-3 space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-xs font-bold text-[#615CA5] mt-1.5">Q{i + 1}</span>
            <input
              value={item.question}
              onChange={(e) => updateItem(i, "question", e.target.value)}
              placeholder="Question..."
              className="flex-1 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-sm font-medium text-[#1B1D3A] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
            />
            <button onClick={() => removeItem(i)} className="p-1 text-[#94a3b8] hover:text-red-500">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-xs font-bold text-[#EC680A] mt-1.5">R</span>
            <textarea
              value={item.answer}
              onChange={(e) => updateItem(i, "answer", e.target.value)}
              placeholder="R\u00e9ponse..."
              rows={2}
              className="flex-1 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-sm text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20 resize-y"
            />
          </div>
        </div>
      ))}
      <button onClick={addItem} className="flex items-center gap-1 text-xs text-[#615CA5] hover:text-[#4e4a8a] font-medium">
        <Plus className="w-3 h-3" /> Ajouter une question
      </button>
    </div>
  );
}
