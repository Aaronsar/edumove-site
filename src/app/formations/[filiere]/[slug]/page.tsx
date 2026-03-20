import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProgramSlugs, getProgramDetail } from "@/data/program-details";
import ProgramHero from "@/components/program/ProgramHero";
import KeyInfoBar from "@/components/program/KeyInfoBar";
import ProgramHighlights from "@/components/program/ProgramHighlights";
import CurriculumAccordion from "@/components/program/CurriculumAccordion";
import AdmissionSteps from "@/components/program/AdmissionSteps";
import CostCard from "@/components/program/CostCard";
import StudentLifeSection from "@/components/program/StudentLifeSection";
import ProgramCTA from "@/components/program/ProgramCTA";
import RelatedPrograms from "@/components/program/RelatedPrograms";
import GuideTestPEBanner from "@/components/program/GuideTestPEBanner";
import GuideTestLINKBanner from "@/components/program/GuideTestLINKBanner";
import StickyBar from "@/components/program/StickyBar";
import MiniCTA from "@/components/program/MiniCTA";

export function generateStaticParams() {
  return getAllProgramSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ filiere: string; slug: string }>;
}): Promise<Metadata> {
  const { filiere, slug } = await params;
  const detail = getProgramDetail(filiere, slug);
  if (!detail) return { title: "Programme non trouvé" };
  return {
    title: `${detail.filiere} à ${detail.university} ${detail.city} — Edumove`,
    description: detail.presentation.slice(0, 160),
  };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ filiere: string; slug: string }>;
}) {
  const { filiere, slug } = await params;
  const detail = getProgramDetail(filiere, slug);
  if (!detail) notFound();

  return (
    <main>
      <ProgramHero detail={detail} />
      <KeyInfoBar detail={detail} />

      {/* Presentation */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-8">
        <div className="flex items-start gap-4">
          <div className="w-1 h-16 rounded-full bg-gradient-to-b from-[#EC680A] to-[#615CA5] shrink-0" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-4">
              Présentation
            </h2>
            <p className="text-[#334155] leading-relaxed text-lg">
              {detail.presentation}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="bg-[#615CA5]/10 text-[#615CA5] text-sm px-4 py-2 rounded-xl font-semibold border border-[#615CA5]/15">
                {detail.diploma}
              </span>
              <span className="bg-[#EC680A]/10 text-[#EC680A] text-sm px-4 py-2 rounded-xl font-semibold border border-[#EC680A]/15">
                {detail.speRequired}
              </span>
            </div>
          </div>
        </div>
      </section>
      <MiniCTA />

      <ProgramHighlights detail={detail} />
      <CurriculumAccordion program={detail.program} />
      <AdmissionSteps steps={detail.admissionSteps} />
      <CostCard detail={detail} />
      <StudentLifeSection life={detail.studentLife} />
      <RelatedPrograms detail={detail} />
      {detail.universityShort === "UE" && <GuideTestPEBanner />}
      {detail.universityShort === "LINK" && <GuideTestLINKBanner />}
      <ProgramCTA detail={detail} />
      <StickyBar />
    </main>
  );
}
