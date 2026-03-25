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

      // ── Anciennes pages programmes par université WordPress ──
      { source: "/dentaire-universidad-camilo-jose-cela-madrid", destination: "/formations/dentaire/ucjc-madrid", permanent: true },
      { source: "/medecine-universidad-europea-madrid", destination: "/formations/medecine/ue-madrid", permanent: true },
      { source: "/dentaire-universidad-europea-madrid", destination: "/formations/dentaire/ue-madrid", permanent: true },
      { source: "/kinesitherapie-universidad-europea-madrid", destination: "/formations/kinesitherapie/ue-madrid", permanent: true },
      { source: "/pharmacie-universidad-europea-madrid", destination: "/formations/pharmacie/ue-madrid", permanent: true },
      { source: "/veterinaire-universidad-europea-madrid", destination: "/formations/veterinaire/ue-madrid", permanent: true },
      { source: "/medecine-link-campus-university-rome", destination: "/formations/medecine/link-rome", permanent: true },
      { source: "/dentaire-link-campus-university-rome", destination: "/formations/dentaire/link-rome", permanent: true },
      { source: "/kinesitherapie-link-campus-university-rome", destination: "/formations/kinesitherapie/link-rome", permanent: true },
      { source: "/pharmacie-universidad-europea-malaga", destination: "/formations/pharmacie/ue-madrid", permanent: true },
      { source: "/pharmacie-universidad-europea-madrid", destination: "/formations/pharmacie/ue-madrid", permanent: true },
      { source: "/kinesitherapie-ufv-madrid", destination: "/formations/kinesitherapie/ue-madrid", permanent: true },
      { source: "/medecine-umfst-targu-mures", destination: "/formations/medecine", permanent: true },
      { source: "/dentaire-umf-iasi-copy", destination: "/formations/dentaire", permanent: true },
      { source: "/dentaire-uax-madrid", destination: "/formations/dentaire/ue-madrid", permanent: true },
      { source: "/dentaire-ceu-seville", destination: "/formations/dentaire", permanent: true },
      { source: "/partenaire-ucjc-madrid", destination: "/universites/ucjc", permanent: true },
      { source: "/page-formation-dentaire", destination: "/formations/dentaire", permanent: true },
      { source: "/page-facultes", destination: "/", permanent: true },
      { source: "/dentaire-ceu-madrid", destination: "/formations/dentaire", permanent: true },
      { source: "/medecine-euc-chypre", destination: "/formations/medecine", permanent: true },
      { source: "/pharmacie-euc-chypre", destination: "/formations/pharmacie", permanent: true },

      // ── Articles statiques migrés vers Supabase ──
      { source: "/blog/etudes-medecine-espagne", destination: "/guides/faire-medecine-en-espagne-le-guide-complet-pour-les-francais", permanent: true },

      // ── WordPress Elementor / docs / misc ──
      { source: "/docs", destination: "/", permanent: true },
      { source: "/docs/:path*", destination: "/", permanent: true },
      { source: "/docs-category/:path*", destination: "/", permanent: true },
      { source: "/elementor-hf/:path*", destination: "/", permanent: true },
      { source: "/barre-de-recherche", destination: "/", permanent: true },

      // ── Anciennes pages universités WordPress ──
      { source: "/universidad-europea", destination: "/universites/universidad-europea", permanent: true },
      { source: "/ucjc", destination: "/universites/ucjc", permanent: true },
      { source: "/link-campus-university", destination: "/universites/link-campus", permanent: true },
      { source: "/link-campus", destination: "/universites/link-campus", permanent: true },

      // ── Anciennes pages générales WordPress ──
      { source: "/nos-formations", destination: "/#formations", permanent: true },
      { source: "/nos-universites", destination: "/#formations", permanent: true },
      { source: "/faq", destination: "/questions-frequentes", permanent: true },
      { source: "/admission", destination: "/", permanent: true },
      { source: "/mass", destination: "/", permanent: true },
      { source: "/hello-world", destination: "/", permanent: true },
      { source: "/how-important-is-church", destination: "/", permanent: true },
      { source: "/infirmier", destination: "/", permanent: true },
      { source: "/orhophoniste", destination: "/", permanent: true },
      { source: "/ortophoniste", destination: "/", permanent: true },
      { source: "/medecine-europe-france", destination: "/formations/medecine", permanent: true },
      { source: "/etudier-la-medecine-en-europe", destination: "/formations/medecine", permanent: true },

      // ── WordPress categories, authors, feeds, search ──
      { source: "/category/:path*", destination: "/blog", permanent: true },
      { source: "/author/:path*", destination: "/", permanent: true },
      { source: "/search/:path*", destination: "/", permanent: true },
      { source: "/comments/feed", destination: "/", permanent: true },
      { source: "/:path*/feed", destination: "/blog", permanent: true },
      { source: "/2025/:path*", destination: "/blog", permanent: true },

      // ── WordPress techniques ──
      { source: "/wp-admin", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-json/:path*", destination: "/", permanent: true },
      { source: "/feed", destination: "/blog", permanent: true },
      { source: "/page-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/post-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
