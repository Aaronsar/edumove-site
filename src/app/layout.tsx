import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edumove — Etudes de sante en Europe",
  description:
    "Edumove : orientation, candidature, financement et installation pour vos etudes de sante en Europe. Medecine, dentaire, kinesitherapie, pharmacie, veterinaire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} antialiased`} style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
