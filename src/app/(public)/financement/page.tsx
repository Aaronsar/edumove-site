import type { Metadata } from "next";
import FinancingPage from "@/components/financing/FinancingPage";

export const metadata: Metadata = {
  title: "Financement études de santé en Europe — Jusqu'à 75 000 € | Edumove",
  description:
    "Financez vos études de santé en Europe avec le prêt étudiant LCL jusqu'à 75 000 €. Remboursement différé après diplôme. Taux préférentiel, accompagnement Edumove.",
  alternates: { canonical: "/financement" },
  openGraph: {
    title: "Financement études de santé en Europe — Jusqu'à 75 000 € | Edumove",
    description:
      "Financez vos études de santé en Europe avec le prêt étudiant LCL jusqu'à 75 000 €. Remboursement différé après diplôme.",
  },
};

export default function FinancementPage() {
  return (
    <main>
      <FinancingPage />
    </main>
  );
}
