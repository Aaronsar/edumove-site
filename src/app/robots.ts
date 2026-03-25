import type { MetadataRoute } from "next";
import { getSiteOrigin } from "@/lib/seo/site-url";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteOrigin();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
