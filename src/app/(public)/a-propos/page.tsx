import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  alternates: { canonical: "/a-propos" },
  title: "À propos d'Edumove — N°1 de l'accompagnement santé en Europe",
  description:
    "Découvrez Edumove : notre mission, nos valeurs, nos universités partenaires et notre accompagnement 100 % personnalisé pour vos études de santé en Europe.",
  openGraph: {
    title: "À propos d'Edumove — N°1 de l'accompagnement santé en Europe",
    description:
      "Découvrez Edumove : notre mission, nos valeurs, nos universités partenaires et notre accompagnement personnalisé pour vos études de santé en Europe.",
  },
};

export default function AProposPage() {
  return (
    <main>
      <AboutPage />
    </main>
  );
}
