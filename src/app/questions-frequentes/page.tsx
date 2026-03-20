import type { Metadata } from "next";
import FAQPage from "@/components/faq/FAQPage";

export const metadata: Metadata = {
  title: "Questions fréquentes — FAQ | Edumove",
  description:
    "Retrouvez les réponses à toutes vos questions sur les études de santé en Europe, l'accompagnement Edumove, le financement et la reconnaissance des diplômes.",
  openGraph: {
    title: "Questions fréquentes — FAQ | Edumove",
    description:
      "Tout savoir sur les études de santé en Europe avec Edumove : admission, financement, diplômes, vie étudiante.",
  },
};

export default function QuestionsFrequentesPage() {
  return (
    <main>
      <FAQPage />
    </main>
  );
}
