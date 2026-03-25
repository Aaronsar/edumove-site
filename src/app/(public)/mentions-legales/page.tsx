import type { Metadata } from "next";
import MentionsLegales from "@/components/legal/MentionsLegales";

export const metadata: Metadata = {
  alternates: { canonical: "/mentions-legales" },
  title: "Mentions legales | Edumove",
  description:
    "Mentions legales du site edumove.fr, edite par DIPLOMA SANTE SAS. Informations sur l'editeur, l'hebergement, la propriete intellectuelle et les cookies.",
  openGraph: {
    title: "Mentions legales | Edumove",
    description:
      "Mentions legales du site edumove.fr, edite par DIPLOMA SANTE SAS.",
  },
};

export default function MentionsLegalesPage() {
  return (
    <main>
      <MentionsLegales />
    </main>
  );
}
