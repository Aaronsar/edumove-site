import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProgramSlugs, getProgramDetail } from "@/data/program-details";
import ProgramHero from "@/components/program/ProgramHero";
import KeyInfoBar from "@/components/program/KeyInfoBar";
import CurriculumAccordion from "@/components/program/CurriculumAccordion";
import AdmissionSteps from "@/components/program/AdmissionSteps";
import CostCard from "@/components/program/CostCard";
import StudentLifeSection from "@/components/program/StudentLifeSection";
import ProgramCTA from "@/components/program/ProgramCTA";

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
    title: `${detail.filiere} à ${detail.university} ${detail.city} — EduMove`,
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

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold italic text-[#1B1D3A] mb-4">
          Présentation
        </h2>
        <p className="text-[#334155] leading-relaxed text-lg">{detail.presentation}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <span className="bg-[#615CA5]/10 text-[#1B1D3A] text-sm px-3 py-1.5 rounded-full font-medium">
            {detail.diploma}
          </span>
          <span className="bg-[#EC680A]/10 text-[#1B1D3A] text-sm px-3 py-1.5 rounded-full font-medium">
            {detail.speRequired}
          </span>
        </div>
      </section>

      <CurriculumAccordion program={detail.program} />
      <AdmissionSteps steps={detail.admissionSteps} />
      <CostCard detail={detail} />
      <StudentLifeSection life={detail.studentLife} />
      <ProgramCTA detail={detail} />
    </main>
  );
}
