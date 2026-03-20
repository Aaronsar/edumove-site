"use client";

import type { ImageSection } from "@/types/sections";

interface Props {
  block: ImageSection;
  onChange: (block: ImageSection) => void;
}

export default function ImageBlock({ block, onChange }: Props) {
  return (
    <div className="space-y-2">
      <input
        type="url"
        value={block.src}
        onChange={(e) => onChange({ ...block, src: e.target.value })}
        placeholder="URL de l'image (https://...)"
        className="w-full px-3 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-sm text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
      />
      <input
        type="text"
        value={block.alt}
        onChange={(e) => onChange({ ...block, alt: e.target.value })}
        placeholder="Texte alternatif (important pour le SEO)"
        className="w-full px-3 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-sm text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
      />
      <input
        type="text"
        value={block.caption ?? ""}
        onChange={(e) => onChange({ ...block, caption: e.target.value || undefined })}
        placeholder="Légende (optionnel)"
        className="w-full px-3 py-1.5 rounded-lg border border-gray-200 bg-[#f8f9fb] text-xs text-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#615CA5]/20"
      />
      {block.src && (
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50 p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.src} alt={block.alt} className="max-h-32 mx-auto object-contain" />
        </div>
      )}
    </div>
  );
}
