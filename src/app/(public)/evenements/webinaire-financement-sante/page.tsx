import type { Metadata } from "next";
import WebinarFinancementPage from "@/components/evenements/WebinarFinancementPage";

export const metadata: Metadata = {
  title: "Webinaire — Comment financer ses études de Santé en Europe ? | Edumove",
  description:
    "Inscrivez-vous au webinaire gratuit Edumove le 15 avril 2026 à 18h30. Découvrez comment financer vos études de santé en Europe avec le prêt étudiant.",
  alternates: { canonical: "/evenements/webinaire-financement-sante" },
  openGraph: {
    title: "Webinaire — Comment financer ses études de Santé en Europe ? | Edumove",
    description:
      "Webinaire gratuit le 15 avril 2026 à 18h30. Edumove et sa banque partenaire vous expliquent comment financer vos études de santé en Europe.",
  },
};

export default function WebinairePage() {
  return (
    <main>
      <WebinarFinancementPage />
    </main>
  );
}
