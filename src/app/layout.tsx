import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
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
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1606959157087476&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
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

        {/* Google Tag Manager — deferred */}
        <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WJVXHBMT');`}</Script>

        {/* Google Analytics — deferred */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-S97PWZQKZ2" strategy="afterInteractive" />
        <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-S97PWZQKZ2');`}</Script>

        {/* Meta Pixel — deferred */}
        <Script id="fbpixel" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1606959157087476');fbq('track','PageView');`}</Script>

        {/* Google Ads — deferred */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18042868884" strategy="afterInteractive" />
        <Script id="gads" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-18042868884');`}</Script>

        {/* Tracking — Candidature click */}
        <Script id="click-track" strategy="afterInteractive">{`document.addEventListener('click',function(e){var a=e.target.closest('a[href*="candidature.edumove.fr"]');if(a){if(typeof fbq==='function')fbq('trackCustom','ClickCandidature');if(typeof gtag==='function')gtag('event','click_candidature',{event_category:'engagement',event_label:'candidature_link'});}});`}</Script>
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
