import type { Metadata } from "next";
import GuideCandidature from "@/components/blog/GuideCandidature";

export const metadata: Metadata = {
  title: "Comment présenter sa candidature ? Guide complet | Edumove",
  description:
    "Toutes les étapes pour candidater en études de santé en Europe : dossier, conditions, test d'admission. Accompagnement Edumove 100 % gratuit.",
  openGraph: {
    title: "Présenter sa candidature — Guide complet Edumove",
    description:
      "De la prise de contact à l'admission : guide étape par étape pour candidater en médecine, dentaire, kiné ou pharmacie en Europe. Accompagnement gratuit.",
    type: "article",
  },
};

export default function GuideCandidaturePage() {
  return (
    <main>
      <GuideCandidature />
    </main>
  );
}
