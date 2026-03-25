/**
 * Canonical origin for sitemap, robots and absolute URLs.
 * Set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://www.edumove.fr).
 */
export function getSiteOrigin(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "");
    return `https://${host}`.replace(/\/$/, "");
  }

  return "https://www.edumove.fr";
}
