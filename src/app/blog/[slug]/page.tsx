import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArticleBySlug } from "@/data/articles";
import ArticleLayout from "@/components/blog/ArticleLayout";

import FinancerEtudes, {
  sommaire as financerSommaire,
} from "@/components/blog/articles/FinancerEtudes";
import ReconnaissanceDiplomes, {
  sommaire as reconnaissanceSommaire,
} from "@/components/blog/articles/ReconnaissanceDiplomes";
import TemoignageMedecine, {
  sommaire as temoignageSommaire,
} from "@/components/blog/articles/TemoignageMedecine";
import AvantagesKinesitherapie, {
  sommaire as kinesitherapieSommaire,
} from "@/components/blog/articles/AvantagesKinesitherapie";
import EchecPassAlternatives, {
  sommaire as echecPassSommaire,
} from "@/components/blog/articles/EchecPassAlternatives";
import CoutEtudesSanteEurope, {
  sommaire as coutEtudesSommaire,
} from "@/components/blog/articles/CoutEtudesSanteEurope";
import EtudesMedecineEspagne, {
  sommaire as medecineEspagneSommaire,
} from "@/components/blog/articles/EtudesMedecineEspagne";

const blogSlugs = [
  "financer-etudes-sante-europe",
  "reconnaissance-diplomes-europeens",
  "temoignage-medecine-espagne",
  "avantages-kinesitherapie-europe",
  "echec-pass-alternatives",
  "cout-etudes-sante-europe",
  "etudes-medecine-espagne",
];

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article non trouvé" };
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
    },
  };
}

const contentMap: Record<
  string,
  {
    Component: React.ComponentType;
    sommaire: { id: string; label: string }[];
  }
> = {
  "financer-etudes-sante-europe": {
    Component: FinancerEtudes,
    sommaire: financerSommaire,
  },
  "reconnaissance-diplomes-europeens": {
    Component: ReconnaissanceDiplomes,
    sommaire: reconnaissanceSommaire,
  },
  "temoignage-medecine-espagne": {
    Component: TemoignageMedecine,
    sommaire: temoignageSommaire,
  },
  "avantages-kinesitherapie-europe": {
    Component: AvantagesKinesitherapie,
    sommaire: kinesitherapieSommaire,
  },
  "echec-pass-alternatives": {
    Component: EchecPassAlternatives,
    sommaire: echecPassSommaire,
  },
  "cout-etudes-sante-europe": {
    Component: CoutEtudesSanteEurope,
    sommaire: coutEtudesSommaire,
  },
  "etudes-medecine-espagne": {
    Component: EtudesMedecineEspagne,
    sommaire: medecineEspagneSommaire,
  },
};

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || !contentMap[slug]) notFound();

  const { Component, sommaire } = contentMap[slug];

  return (
    <main>
      <ArticleLayout article={article} sommaire={sommaire}>
        <Component />
      </ArticleLayout>
    </main>
  );
}
