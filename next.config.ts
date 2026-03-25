import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edumove.fr",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // ── Anciennes pages filières WordPress ──
      { source: "/medecine", destination: "/formations/medecine", permanent: true },
      { source: "/dentaire", destination: "/formations/dentaire", permanent: true },
      { source: "/kinesitherapie", destination: "/formations/kinesitherapie", permanent: true },
      { source: "/pharmacie", destination: "/formations/pharmacie", permanent: true },
      { source: "/veterinaire", destination: "/formations/veterinaire", permanent: true },
      { source: "/orthophonie", destination: "/formations/medecine", permanent: true },
      { source: "/sage-femme", destination: "/formations/medecine", permanent: true },
      { source: "/psychologie", destination: "/formations/medecine", permanent: true },

      // ── Anciennes pages filières longues WordPress ──
      { source: "/etudes-de-medecine-en-espagne", destination: "/formations/medecine/espagne", permanent: true },
      { source: "/etudes-dentaires-en-espagne", destination: "/formations/dentaire/espagne", permanent: true },
      { source: "/etudes-de-kinesitherapie-en-espagne", destination: "/formations/kinesitherapie/espagne", permanent: true },
      { source: "/etudes-de-pharmacie-en-espagne", destination: "/formations/pharmacie/espagne", permanent: true },
      { source: "/etudes-veterinaires-en-espagne", destination: "/formations/veterinaire/espagne", permanent: true },
      { source: "/faire-medecine-en-espagne", destination: "/formations/medecine/espagne", permanent: true },
      { source: "/etudes-medecine-espagne", destination: "/formations/medecine/espagne", permanent: true },
      { source: "/etudier-la-medecine-en-espagne", destination: "/formations/medecine/espagne", permanent: true },
      { source: "/etudes-de-sante-en-europe", destination: "/", permanent: true },

      // ── Anciennes pages universités WordPress ──
      { source: "/universidad-europea", destination: "/universites/universidad-europea", permanent: true },
      { source: "/ucjc", destination: "/universites/ucjc", permanent: true },
      { source: "/link-campus-university", destination: "/universites/link-campus", permanent: true },
      { source: "/link-campus", destination: "/universites/link-campus", permanent: true },

      // ── Anciennes pages générales WordPress ──
      { source: "/nos-formations", destination: "/#formations", permanent: true },
      { source: "/nos-universites", destination: "/#formations", permanent: true },
      { source: "/faq", destination: "/questions-frequentes", permanent: true },
      // /contact est maintenant une vraie page
      // /financement est maintenant une vraie page
      { source: "/admission", destination: "/", permanent: true },
      // /temoignages est maintenant une vraie page

      // ── WordPress techniques ──
      { source: "/wp-admin", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/feed", destination: "/blog", permanent: true },
      { source: "/page-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/post-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
