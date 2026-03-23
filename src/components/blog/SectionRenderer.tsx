"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { SectionTitle, Callout } from "@/components/blog/ArticleLayout";
import type { ArticleSection } from "@/types/sections";
import * as LucideIcons from "lucide-react";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getIcon(name?: string) {
  if (!name) return undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<any>>;
  const Icon = icons[name];
  if (!Icon) return undefined;
  return <Icon className="w-6 h-6 text-[#EC680A]" />;
}

function RenderHTML({ html }: { html: string }) {
  return (
    <div
      className="text-[#334155] leading-relaxed prose-sm"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="my-8 space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="border border-gray-200/80 rounded-xl overflow-hidden bg-white hover:border-[#615CA5]/30 transition-colors"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
              <span className="font-semibold text-[#1B1D3A] text-sm pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-[#64748b] shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-4 text-sm text-[#334155] leading-relaxed border-t border-gray-100 pt-3">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function RenderSection({ section }: { section: ArticleSection }) {
  switch (section.type) {
    case "heading":
      if (section.level === "h2") {
        return (
          <SectionTitle id={slugify(section.text)} icon={getIcon(section.icon)}>
            {section.text}
          </SectionTitle>
        );
      }
      return (
        <h3
          id={slugify(section.text)}
          className="text-lg font-bold text-[#1B1D3A] mt-8 mb-4 scroll-mt-24"
        >
          {section.text}
        </h3>
      );

    case "paragraph":
      return (
        <div className="mb-4">
          <RenderHTML html={section.html} />
        </div>
      );

    case "callout":
      return (
        <Callout variant={section.variant}>
          <RenderHTML html={section.html} />
        </Callout>
      );

    case "list": {
      const Tag = section.style === "numbered" ? "ol" : "ul";
      const listClass =
        section.style === "numbered"
          ? "list-decimal pl-6 space-y-2 my-4"
          : "list-disc pl-6 space-y-2 my-4";
      return (
        <Tag className={listClass}>
          {section.items.map((item, i) => (
            <li
              key={i}
              className="text-sm text-[#334155]"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </Tag>
      );
    }

    case "table":
      return (
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1B1D3A]">
                {section.headers.map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-left text-white font-semibold text-xs uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={ri % 2 === 0 ? "bg-white" : "bg-[#f8f9fb]"}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-4 py-3 text-[#334155] border-b border-gray-100"
                      dangerouslySetInnerHTML={{ __html: cell }}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "image":
      return (
        <figure className="my-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={section.src}
            alt={section.alt}
            className="w-full rounded-xl"
          />
          {section.caption && (
            <figcaption className="text-xs text-[#94a3b8] mt-2 text-center">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    case "link-card":
      return (
        <Link
          href={section.href}
          className="block bg-[#fafbff] border border-gray-200/80 rounded-xl p-5 my-4 hover:border-[#EC680A]/30 hover:shadow-md transition-all"
        >
          <p className="font-bold text-[#1B1D3A] text-sm">{section.title}</p>
          <p className="text-xs text-[#64748b] mt-1">{section.description}</p>
        </Link>
      );

    case "grid":
      return (
        <div
          className={`grid gap-4 my-6 ${
            section.columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
          }`}
        >
          {section.items.map((item, i) => (
            <div
              key={i}
              className="bg-[#fafbff] border border-gray-200/80 rounded-xl p-4"
            >
              <p className="font-semibold text-[#1B1D3A] text-sm">{item.title}</p>
              <p className="text-xs text-[#64748b] mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      );

    case "stats-grid":
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
          {section.items.map((item, i) => (
            <div key={i} className="text-center bg-[#fafbff] rounded-xl p-4 border border-gray-200/80">
              <p className="text-2xl font-bold text-[#EC680A]">{item.value}</p>
              <p className="text-xs text-[#64748b] mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      );

    case "faq":
      return <FAQAccordion items={section.items} />;

    default:
      return null;
  }
}

export default function SectionRenderer({
  sections,
}: {
  sections: ArticleSection[];
}) {
  return (
    <div>
      {sections.map((section, i) => (
        <RenderSection key={i} section={section} />
      ))}
    </div>
  );
}
