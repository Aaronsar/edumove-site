import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.edumove.fr"),
  title: "Edumove — Études de médecine, dentaire, kiné en Espagne et Italie",
  description:
    "Edumove : orientation, candidature, financement et installation pour vos études de santé en Europe. Médecine, dentaire, kinésithérapie, pharmacie, vétérinaire.",
  icons: {
    icon: "/edumove-icon-orange.svg",
    shortcut: "/edumove-icon-orange.svg",
    apple: "/edumove-icon-orange.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Edumove",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/edumove-og.png",
        width: 1200,
        height: 630,
        alt: "Edumove — Études de médecine, dentaire, kiné en Espagne et Italie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@edumove_fr",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Edumove",
  url: "https://www.edumove.fr",
  logo: "https://www.edumove.fr/edumove-logo-orange.svg",
  description: "Accompagnement complet pour les études de santé en Europe. Médecine, dentaire, kinésithérapie, pharmacie, vétérinaire.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33-1-89-74-42-57",
    contactType: "customer service",
    availableLanguage: "French",
  },
  sameAs: [
    "https://www.instagram.com/edumove.fr",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Edumove",
  url: "https://www.edumove.fr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WJVXHBMT');`,
          }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S97PWZQKZ2" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-S97PWZQKZ2');`,
          }}
        />
        {/* Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18042868884" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-18042868884');`,
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`} style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJVXHBMT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
