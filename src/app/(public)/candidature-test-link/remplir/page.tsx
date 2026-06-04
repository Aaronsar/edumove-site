import type { Metadata } from "next";
import FormulaireEnLigne from "@/components/candidature-link/FormulaireEnLigne";

export const metadata: Metadata = {
  title: "Remplir mon dossier en ligne — Test LINK Campus | Edumove",
  description:
    "Remplissez votre dossier de pré-candidature LINK Campus University en ligne. Signature électronique, pièces jointes, envoi automatique sécurisé à Edumove.",
  alternates: { canonical: "/candidature-test-link/remplir" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <FormulaireEnLigne />;
}
