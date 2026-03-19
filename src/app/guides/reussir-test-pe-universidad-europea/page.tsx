import type { Metadata } from "next";
import GuideTestPE from "@/components/blog/GuideTestPE";

export const metadata: Metadata = {
  title: "Comment r\u00e9ussir le test PE de l'Universidad Europea ? | Edumove",
  description:
    "Guide complet sur le test PE (Prueba Espec\u00edfica) : test de langue Langoo, Talent Test, lettre de motivation, entretien et conseils pratiques pour int\u00e9grer l'Universidad Europea.",
  openGraph: {
    title: "Comment r\u00e9ussir le test PE de l'Universidad Europea ?",
    description:
      "Tout savoir sur le test d'entr\u00e9e PE : \u00e9preuves, plateforme Langoo, Talent Test, lettre de motivation et conseils pratiques.",
    type: "article",
  },
};

export default function GuideTestPEPage() {
  return (
    <main>
      <GuideTestPE />
    </main>
  );
}
