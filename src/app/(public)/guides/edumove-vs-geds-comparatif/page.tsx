import type { Metadata } from "next";
import ArticleLayout from "@/components/blog/ArticleLayout";
import EdumoveVsGeds, { sommaire } from "@/components/blog/articles/EdumoveVsGeds";

export const metadata: Metadata = {
  title: "Edumove vs GEDS : comparatif études santé Europe 2026",
  description:
    "Comparatif des deux organismes : universités partenaires, destinations, services et financement. Données relevées sur les sites publics.",
  alternates: { canonical: "/guides/edumove-vs-geds-comparatif" },
  openGraph: {
    title: "Edumove vs GEDS : comparatif études santé Europe 2026",
    description:
      "Comparatif des deux organismes : universités partenaires, destinations, services et financement.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edumove vs GEDS : comparatif études santé Europe 2026",
    description:
      "Comparatif des deux organismes : universités partenaires, destinations, services et financement.",
  },
};

const articleData = {
  slug: "edumove-vs-geds-comparatif",
  title:
    "Edumove vs GEDS : quel accompagnement choisir pour ses études de santé en Europe ?",
  date: "6 septembre 2026",
  dateISO: "2026-09-06",
  tag: "Guide" as const,
  tagColor: "bg-[#615ca5]",
  readTime: "7 min",
  excerpt:
    "Tu hésites entre Edumove et GEDS pour tes études de santé en Europe ? Comparatif des deux organismes : universités partenaires, destinations, services et financement.",
  metaTitle: "Edumove vs GEDS : comparatif études santé Europe 2026",
  metaDescription:
    "Comparatif des deux organismes : universités partenaires, destinations, services et financement. Données relevées sur les sites publics.",
  isGuide: true,
  heroPills: [
    { icon: "Users", label: "Comparatif" },
    { icon: "Globe", label: "2 acteurs" },
    { icon: "Euro", label: "Financement" },
    { icon: "GraduationCap", label: "Études santé" },
  ],
  relatedSlugs: [
    "financer-etudes-sante-europe",
    "reconnaissance-diplomes-europeens",
    "presenter-sa-candidature",
  ],
  relatedFormations: [
    "medecine",
    "dentaire",
    "kinesitherapie",
    "pharmacie",
    "veterinaire",
  ],
  relatedUniversities: [
    "/universites/universidad-europea",
    "/universites/ucjc",
    "/universites/link-campus",
  ],
};

export default function Page() {
  return (
    <main>
      <ArticleLayout article={articleData} sommaire={sommaire}>
        <EdumoveVsGeds />
      </ArticleLayout>
    </main>
  );
}
