import type { Metadata } from "next";
import QuizPage from "@/components/quiz/QuizPage";

export const metadata: Metadata = {
  alternates: { canonical: "/quiz" },
  title: "Quiz — Quelle faculté en Europe est faite pour vous ? | Edumove",
  description:
    "Répondez à 6 questions et découvrez quelle université partenaire Edumove correspond le mieux à votre profil : Madrid, Valence, Malaga ou Rome.",
  openGraph: {
    title: "Quiz — Quelle faculté en Europe est faite pour vous ? | Edumove",
    description:
      "Trouvez votre faculté idéale en Europe en 1 minute. Quiz gratuit Edumove.",
  },
};

export default function QuizRoute() {
  return (
    <main>
      <QuizPage />
    </main>
  );
}
