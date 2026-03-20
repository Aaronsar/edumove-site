import type { Metadata } from "next";
import GuideTestLINK from "@/components/blog/GuideTestLINK";

export const metadata: Metadata = {
  title:
    "Comment r\u00e9ussir le test d\u2019admission de LINK Campus University ? | Edumove",
  description:
    "Guide complet sur le test d\u2019admission de LINK Campus University : QCM scientifique en fran\u00e7ais (80 questions, 5 mati\u00e8res), syst\u00e8me de notation, conseils et astuces pour r\u00e9ussir.",
  openGraph: {
    title:
      "R\u00e9ussir le test d\u2019admission de LINK Campus University \u2014 Guide complet Edumove",
    description:
      "Biologie, chimie, maths, physique, culture g\u00e9n\u00e9rale : tout savoir sur le QCM d\u2019entr\u00e9e, les pi\u00e8ges \u00e0 \u00e9viter et nos conseils pratiques.",
    type: "article",
  },
};

export default function GuideTestLINKPage() {
  return (
    <main>
      <GuideTestLINK />
    </main>
  );
}
