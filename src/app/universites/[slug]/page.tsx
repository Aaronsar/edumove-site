import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getUniversityBySlug } from "@/data/universities";
import type { UniversitySlug } from "@/data/universities";
import LinkPage from "@/components/universites/LinkPage";
import UCJCPage from "@/components/universites/UCJCPage";
import UEPage from "@/components/universites/UEPage";

// ---------------------------------------------------------------------------
// Route slug mapping: URL slug -> data slug
// ---------------------------------------------------------------------------
const slugMap: Record<string, UniversitySlug> = {
  "link-campus": "link",
  ucjc: "ucjc",
  "universidad-europea": "ue",
};

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return [
    { slug: "link-campus" },
    { slug: "ucjc" },
    { slug: "universidad-europea" },
  ];
}

// ---------------------------------------------------------------------------
// Dynamic metadata
// ---------------------------------------------------------------------------
type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dataSlug = slugMap[slug];

  if (!dataSlug) {
    return { title: "Universit\u00e9 introuvable" };
  }

  const uni = getUniversityBySlug(dataSlug);

  if (!uni) {
    return { title: "Universit\u00e9 introuvable" };
  }

  const filiereCount = uni.programs.length;

  return {
    title: `${uni.name} \u2014 \u00c9tudes de sant\u00e9 ${uni.country} | Edumove`,
    description: `D\u00e9couvrez les ${filiereCount} formations sant\u00e9 propos\u00e9es par ${uni.name} (${uni.campuses.join(", ")}). Tarifs, admission, documents et calendrier. Accompagnement Edumove de A \u00e0 Z.`,
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default async function UniversityPage({ params }: PageProps) {
  const { slug } = await params;
  const dataSlug = slugMap[slug];

  if (!dataSlug) {
    notFound();
  }

  const uni = getUniversityBySlug(dataSlug);

  if (!uni) {
    notFound();
  }

  switch (dataSlug) {
    case "link":
      return <LinkPage />;
    case "ucjc":
      return <UCJCPage />;
    case "ue":
      return <UEPage />;
    default:
      notFound();
  }
}
