import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { filieres, getFiliereBySlug } from "@/data/filieres";
import { getProgramsByFiliere, getCheapestProgram } from "@/data/universities";
import type { FiliereSlug } from "@/data/universities";
import { getAvailableCountries, getCountryPageData } from "@/data/country-pages";
import { createPublicAnonClient } from "@/lib/supabase/public-anon";

import FormationHero from "@/components/formations/FormationHero";
import ProgramsList from "@/components/formations/ProgramsList";
import FormationCTA from "@/components/formations/FormationCTA";
import FinancingBanner from "@/components/shared/FinancingBanner";
import BreadcrumbSchema from "@/components/shared/BreadcrumbSchema";
import SectionRenderer from "@/components/blog/SectionRenderer";

// ---------------------------------------------------------------------------
// Static params — pre-render all 6 filiere pages
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return filieres.map((f) => ({ filiere: f.slug }));
}

// ---------------------------------------------------------------------------
// Fetch page data from database (backoffice-editable)
// ---------------------------------------------------------------------------

async function getPageData(filiereSlug: string) {
  try {
    const supabase = createPublicAnonClient();
    const { data } = await supabase
      .from("edumove_pages")
      .select("title, meta_title, meta_description, sections, focus_keyword")
      .eq("page_slug", `formations/${filiereSlug}`)
      .single();
    return data;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Dynamic metadata — database first, fallback to filieres.ts
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ filiere: string }>;
}): Promise<Metadata> {
  const { filiere: filiereSlug } = await params;
  const filiere = getFiliereBySlug(filiereSlug as FiliereSlug);

  if (!filiere) {
    return { title: "Formation introuvable | Edumove" };
  }

  const dbPage = await getPageData(filiereSlug);

  const metaTitle = dbPage?.meta_title || `${filiere.fullName} | Edumove`;
  const metaDescription = dbPage?.meta_description || filiere.description;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: `/formations/${filiereSlug}` },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
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

  // Fetch editable page data from database
  const dbPage = await getPageData(filiereSlug);

  // Override filiere data with database values if available
  const displayFiliere = {
    ...filiere,
    fullName: dbPage?.title || filiere.fullName,
    description: dbPage?.meta_description || filiere.description,
  };

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

  // Country subpage links for maillage interne
  const availableCountries = getAvailableCountries(filiere.slug);
  const countryLinks = availableCountries.map((c) => {
    const data = getCountryPageData(filiere.slug, c);
    const countryPrograms = programs.filter(
      (p) => p.university.country === (c === "espagne" ? "Espagne" : "Italie")
    );
    return {
      slug: c,
      h1: data?.h1 ?? "",
      flag: data?.countryFlag ?? "",
      count: countryPrograms.length,
    };
  });

  // Database sections (editable from backoffice)
  const dbSections = dbPage?.sections ?? [];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero section with gradient */}
      <FormationHero filiere={displayFiliere} stats={heroStats} />

      {/* Country subpage links */}
      {countryLinks.length > 0 && (
        <section className="bg-white border-b border-[#e2e2ef]">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#615CA5] mb-3">
              Explorer par pays
            </p>
            <div className="flex flex-wrap gap-3">
              {countryLinks.map((cl) => (
                <Link
                  key={cl.slug}
                  href={`/formations/${filiere.slug}/${cl.slug}`}
                  className="group flex items-center gap-2 bg-[#fafbff] hover:bg-[#615CA5]/5 border border-[#e2e2ef] hover:border-[#615CA5]/30 rounded-xl px-5 py-3 transition-all"
                >
                  <span className="text-lg">{cl.flag}</span>
                  <span className="font-semibold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors">
                    {cl.h1}
                  </span>
                  <span className="text-xs text-[#64748b] bg-white rounded-full px-2 py-0.5 border border-[#e2e2ef]">
                    {cl.count} programmes
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#ec680a] transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Editable content sections from backoffice */}
      {dbSections.length > 0 && (
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionRenderer sections={dbSections} />
          </div>
        </section>
      )}

      {/* University program cards */}
      <ProgramsList programs={programs} cheapestTotalCost={cheapestTotalCost} />

      {/* Financing banner */}
      <FinancingBanner />

      {/* Call to action */}
      <FormationCTA filiereName={filiere.name} />
      <BreadcrumbSchema items={[
        { name: "Accueil", href: "/" },
        { name: "Formations", href: "/#formations" },
        { name: filiere.name },
      ]} />
    </main>
  );
}
