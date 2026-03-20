import type { ArticleSection } from "@/types/sections";

/**
 * Parses WordPress HTML content into our structured ArticleSection[] format.
 * Handles: h2, h3, p, ul, ol, table, blockquote, img
 */
export function parseWordPressContent(html: string): ArticleSection[] {
  const sections: ArticleSection[] = [];

  // Clean up WordPress-specific markup
  const cleaned = html
    .replace(/<!--[\s\S]*?-->/g, "") // Remove HTML comments
    .replace(/<div[^>]*class="[^"]*wp-block[^"]*"[^>]*>/g, "") // Remove wp-block wrappers
    .replace(/<\/div>/g, "")
    .replace(/\r\n/g, "\n")
    .trim();

  // Split into top-level elements
  // We use a regex to find block-level tags
  const blockRegex = /<(h[2-6]|p|ul|ol|table|blockquote|figure|img)[^>]*>[\s\S]*?<\/\1>|<(img|hr)[^>]*\/?>/gi;
  const matches = cleaned.matchAll(blockRegex);

  for (const match of matches) {
    const element = match[0];
    const tag = (match[1] || match[2] || "").toLowerCase();

    switch (tag) {
      case "h2":
        sections.push({
          type: "heading",
          level: "h2",
          text: stripTags(element),
        });
        break;

      case "h3":
      case "h4":
      case "h5":
      case "h6":
        sections.push({
          type: "heading",
          level: "h3",
          text: stripTags(element),
        });
        break;

      case "p": {
        const content = extractInnerHtml(element, "p");
        if (content.trim()) {
          sections.push({
            type: "paragraph",
            html: content,
          });
        }
        break;
      }

      case "ul":
      case "ol": {
        const items = extractListItems(element);
        if (items.length > 0) {
          sections.push({
            type: "list",
            style: tag === "ol" ? "numbered" : "bullet",
            items,
          });
        }
        break;
      }

      case "table": {
        const table = parseTable(element);
        if (table) {
          sections.push(table);
        }
        break;
      }

      case "blockquote": {
        const content = extractInnerHtml(element, "blockquote");
        sections.push({
          type: "callout",
          variant: "info",
          html: stripTags(content),
        });
        break;
      }

      case "figure":
      case "img": {
        const imgMatch = element.match(/<img[^>]*src="([^"]*)"[^>]*(?:alt="([^"]*)")?/i);
        if (imgMatch) {
          sections.push({
            type: "image",
            src: imgMatch[1],
            alt: imgMatch[2] ?? "",
          });
        }
        break;
      }
    }
  }

  // If no sections were parsed (e.g., plain text), wrap the whole thing as a paragraph
  if (sections.length === 0 && cleaned.trim()) {
    sections.push({
      type: "paragraph",
      html: cleaned,
    });
  }

  return sections;
}

function stripTags(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&rsquo;/g, "\u2019")
    .replace(/&lsquo;/g, "\u2018")
    .replace(/&rdquo;/g, "\u201D")
    .replace(/&ldquo;/g, "\u201C")
    .replace(/&hellip;/g, "\u2026")
    .replace(/&mdash;/g, "\u2014")
    .replace(/&ndash;/g, "\u2013")
    .trim();
}

function extractInnerHtml(element: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const match = element.match(regex);
  return match ? match[1].trim() : element;
}

function extractListItems(html: string): string[] {
  const items: string[] = [];
  const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  let match;
  while ((match = liRegex.exec(html)) !== null) {
    const content = match[1].trim();
    if (content) {
      items.push(content);
    }
  }
  return items;
}

function parseTable(html: string): ArticleSection | null {
  const headers: string[] = [];
  const rows: string[][] = [];

  // Extract headers from th elements
  const thRegex = /<th[^>]*>([\s\S]*?)<\/th>/gi;
  let thMatch;
  while ((thMatch = thRegex.exec(html)) !== null) {
    headers.push(stripTags(thMatch[1]));
  }

  // Extract rows from tr > td elements
  const trRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  let trMatch;
  while ((trMatch = trRegex.exec(html)) !== null) {
    const row: string[] = [];
    const tdRegex = /<td[^>]*>([\s\S]*?)<\/td>/gi;
    let tdMatch;
    while ((tdMatch = tdRegex.exec(trMatch[1])) !== null) {
      row.push(stripTags(tdMatch[1]));
    }
    if (row.length > 0) {
      rows.push(row);
    }
  }

  if (headers.length === 0 && rows.length === 0) return null;

  // If no headers but rows exist, use first row as headers
  if (headers.length === 0 && rows.length > 0) {
    return {
      type: "table",
      headers: rows[0],
      rows: rows.slice(1),
    };
  }

  return { type: "table", headers, rows };
}
