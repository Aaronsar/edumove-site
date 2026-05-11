import type { Metadata } from "next";
import TestLinkLandingPage from "@/components/test-link/TestLinkLandingPage";

export const metadata: Metadata = {
  title: "Test LINK Campus : devenir médecin à Rome (test en français, 25 juin 2026)",
  description:
    "Passez le test d'admission de LINK Campus University pour étudier la médecine à Rome. Test 100% en français à Paris le 25 juin 2026. Accompagnement Edumove gratuit.",
  alternates: { canonical: "/test-link-campus" },
  openGraph: {
    title: "Test d'admission LINK Campus University — Médecine à Rome en français",
    description:
      "Test QCM en français à Paris le 25 juin 2026. Devenez médecin à Rome avec un accompagnement Edumove 100% gratuit.",
    type: "website",
    images: [
      {
        url: "/api/og?title=Test+d%27admission+LINK+Campus+University&subtitle=M%C3%A9decine+%C3%A0+Rome+%E2%80%94+Test+en+fran%C3%A7ais+%C3%A0+Paris+le+25+juin+2026&tag=100%25+gratuit",
        width: 1200,
        height: 630,
        alt: "Test d'admission LINK Campus University — Médecine à Rome",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Test d'admission LINK Campus — Médecine à Rome (25 juin 2026)",
    description:
      "Test QCM en français à Paris le 25 juin 2026. Accompagnement Edumove gratuit pour candidater à LINK Campus University.",
  },
};

export default function Page() {
  return <TestLinkLandingPage />;
}
