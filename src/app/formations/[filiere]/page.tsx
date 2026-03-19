import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { filieres, getFiliereBySlug } from "@/data/filieres";
import { getProgramsByFiliere, getCheapestProgram } from "@/data/universities";
import type { FiliereSlug } from "@/data/universities";

import FormationHero from "@/components/formations/FormationHero";
import StatsBar from "@/components/formations/StatsBar";
import ProgramsList from "@/components/formations/ProgramsList";
import AdmissionComparison from "@/components/formations/AdmissionComparison";
import FormationCTA from "@/components/formations/FormationCTA";

// ---------------------------------------------------------------------------
// Static params — pre-render all 6 filiere pages
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return filieres.map((f) => ({ filiere: f.slug }));
}

// ---------------------------------------------------------------------------
// Dynamic metadata per filiere
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ filiere: string }>;
}): Promise<Metadata> {
  const { filiere: filiereSlug } = await params;
  const filiere = getFiliereBySlug(filiereSlug as FiliereSlug);

  if (!filiere) {
    return { title: "Formation introuvable | EduMove" };
  }

  return {
    title: `${filiere.fullName} en Europe | EduMove`,
    description: filiere.description,
    openGraph: {
      title: `${filiere.fullName} en Europe | EduMove`,
      description: filiere.description,
    },
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function FormationPage({
  params,
}: {
  params: Promise<{ filiere: string }>;
}) {
  const { filiere: filiereSlug } = await params;
  const filiere = getFiliereBySlug(filiereSlug as FiliereSlug);

  if (!filiere) {
    notFound();
  }

  // Get all programs for this filiere across all universities
  const programs = getProgramsByFiliere(filiere.slug);

  // Find the cheapest available program
  const cheapest = getCheapestProgram(filiere.slug);
  const cheapestTotalCost = cheapest ? cheapest.program.totalCost : null;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero section with gradient */}
      <FormationHero filiere={filiere} />

      {/* Stats bar overlapping the hero */}
      <StatsBar programs={programs} filiere={filiere} />

      {/* University program cards */}
      <ProgramsList programs={programs} cheapestTotalCost={cheapestTotalCost} />

      {/* Admission comparison table */}
      <AdmissionComparison programs={programs} />

      {/* Call to action */}
      <FormationCTA filiereName={filiere.name} />
    </main>
  );
}
