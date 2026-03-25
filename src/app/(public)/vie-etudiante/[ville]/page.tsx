import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCityGuide, getAllCitySlugs } from "@/data/city-guides";
import CityGuidePage from "@/components/city-guide/CityGuidePage";

export function generateStaticParams() {
  return getAllCitySlugs().map((ville) => ({ ville }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ville: string }>;
}): Promise<Metadata> {
  const { ville } = await params;
  const city = getCityGuide(ville);
  if (!city) return { title: "Ville introuvable" };

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `/vie-etudiante/${ville}` },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
    },
  };
}

export default async function VieEtudiantePage({
  params,
}: {
  params: Promise<{ ville: string }>;
}) {
  const { ville } = await params;
  const city = getCityGuide(ville);
  if (!city) notFound();

  return (
    <main>
      <CityGuidePage city={city} />
    </main>
  );
}
