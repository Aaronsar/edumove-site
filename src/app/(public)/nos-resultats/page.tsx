import type { Metadata } from "next";
import ResultatsPage from "@/components/resultats/ResultatsPage";

export const metadata: Metadata = {
  alternates: { canonical: "/nos-resultats" },
  title: "Nos résultats — Chiffres clés et taux de réussite | Edumove",
  description:
    "Découvrez les résultats d'Edumove : +500 étudiants accompagnés, 98% de taux d'admission, diplômes reconnus en France via le processus de Bologne.",
  openGraph: {
    title: "Nos résultats — Chiffres clés et taux de réussite | Edumove",
    description:
      "Découvrez les résultats d'Edumove : +500 étudiants accompagnés, 98% de taux d'admission.",
  },
};

export default function NosResultatsPage() {
  return (
    <main>
      <ResultatsPage />
    </main>
  );
}
