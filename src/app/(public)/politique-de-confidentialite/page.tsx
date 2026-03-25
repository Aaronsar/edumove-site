import type { Metadata } from "next";
import PolitiqueConfidentialite from "@/components/legal/PolitiqueConfidentialite";

export const metadata: Metadata = {
  alternates: { canonical: "/politique-de-confidentialite" },
  title: "Politique de confidentialite | Edumove",
  description:
    "Politique de confidentialite du site edumove.fr. Decouvrez comment DIPLOMA SANTE SAS collecte, utilise et protege vos donnees personnelles conformement au RGPD.",
  openGraph: {
    title: "Politique de confidentialite | Edumove",
    description:
      "Politique de confidentialite du site edumove.fr. Protection de vos donnees personnelles conformement au RGPD.",
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main>
      <PolitiqueConfidentialite />
    </main>
  );
}
