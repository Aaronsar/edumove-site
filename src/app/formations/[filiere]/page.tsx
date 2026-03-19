import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { filieres, getFiliereBySlug } from "@/data/filieres";
import { getProgramsByFiliere, getCheapestProgram } from "@/data/universities";
import type { FiliereSlug } from "@/data/universities";

import FormationHero from "@/components/formations/FormationHero";
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

  // Compute stats for hero
  const availablePrograms = programs.filter((p) => !p.program.isFull);
  const uniqueCampuses = new Set(programs.map((p) => p.program.campus));
  const durations = availablePrograms.map((p) => p.program.durationYears).filter((d) => d > 0);
  const minDuration = durations.length > 0 ? Math.min(...durations) : 0;
  const maxDuration = durations.length > 0 ? Math.max(...durations) : 0;
  const durationText = durations.length === 0 ? "N/A" : minDuration === maxDuration ? `${minDuration} ans` : `${minDuration}-${maxDuration} ans`;
  const uniqueUnis = new Set(programs.map((p) => p.university.slug));
  const countries = new Set(programs.map((p) => p.university.country));

  const heroStats = {
    campusCount: uniqueCampuses.size,
    durationText,
    priceText: "",
    uniCount: uniqueUnis.size,
    countriesText: Array.from(countries).join(", "),
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero section with gradient */}
      <FormationHero filiere={filiere} stats={heroStats} />

      {/* University program cards */}
      <ProgramsList programs={programs} cheapestTotalCost={cheapestTotalCost} />

      {/* Admission comparison table */}
      <AdmissionComparison programs={programs} />

      {/* Call to action */}
      <FormationCTA filiereName={filiere.name} />
    </main>
  );
}
