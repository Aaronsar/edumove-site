import type { Metadata } from "next";
import CandidatureLinkPage from "@/components/candidature-link/CandidatureLinkPage";

export const metadata: Metadata = {
  title: "Candidature Test LINK Campus — 25 juin 2026 | Edumove",
  description:
    "Téléchargez le formulaire de pré-candidature et les modèles de test pour candidater à LINK Campus University le 25 juin 2026 à Paris. Accompagnement Edumove 100% gratuit.",
  alternates: { canonical: "/candidature-test-link" },
  openGraph: {
    title: "Candidature Test LINK Campus — 25 juin 2026",
    description:
      "Téléchargez vos documents et envoyez votre dossier à Edumove pour participer au test d'admission LINK Campus du 25 juin 2026 à Paris.",
    type: "website",
    images: [
      {
        url: "/api/og?title=Candidature+Test+LINK+Campus&subtitle=25+juin+2026+%E2%80%94+Derni%C3%A8re+session+pour+la+rentr%C3%A9e&tag=Dossier+candidature",
        width: 1200,
        height: 630,
        alt: "Candidature Test LINK Campus — 25 juin 2026",
      },
    ],
  },
};

export default function Page() {
  return <CandidatureLinkPage />;
}
