"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Phone } from "lucide-react";
import { getUniversityBySlug } from "@/data/universities";
import { programDetails } from "@/data/program-details";
import UniHero from "./UniHero";
import OverviewCards from "./OverviewCards";
import UniversityImageGallery from "./UniversityImageGallery";
import { universityImages } from "@/data/university-images";
import TarifsTable from "./TarifsTable";
import AdmissionStepper from "./AdmissionStepper";
import TestDetails from "./TestDetails";
import DocumentsList from "./DocumentsList";
import ProgramLinks from "./ProgramLinks";
import StickyBar from "@/components/program/StickyBar";
import ContactButton from "@/components/shared/ContactButton";

export default function LinkPage() {
  const uni = getUniversityBySlug("link")!;

  const overviewCards = [
    { value: "Rome", label: "Ville" },
    { value: "Italien", label: "Langue" },
    { value: "4", label: "Filières" },
    { value: "200 €", label: "Frais test" },
  ];

  const linkPrograms = programDetails.filter((p) => p.universityShort === "LINK");
  const formationLinks = linkPrograms
    .filter((p, i, arr) => arr.findIndex((x) => x.filiereSlug === p.filiereSlug) === i)
    .map((p) => ({ name: p.filiere, filiereSlug: p.filiereSlug, programSlug: p.slug }));

  const candidatureDocuments = [
    "Pi\u00e8ce d\u2019identit\u00e9 (carte d\u2019identit\u00e9 ou passeport)",
    "Photo d\u2019identit\u00e9 r\u00e9cente",
    "Bulletins scolaires (1\u00e8re et Terminale)",
    "Lettre de motivation",
    "CV (optionnel)",
  ];

  const apresAcceptationDocuments = [
    "Relev\u00e9 de notes du bac",
    "Dipl\u00f4me du baccalaur\u00e9at (ou attestation provisoire)",
    "Traduction asserment\u00e9e des documents en italien",
    "D\u00e9claration de valeur aupr\u00e8s du consulat italien",
    "Justificatif de logement \u00e0 Rome",
    "Attestation d\u2019assurance maladie europ\u00e9enne (CEAM)",
  ];

  const documentNotes = [
    "Les traductions assermentées sont à votre charge. Edumove peut vous recommander un traducteur.",
    "La déclaration de valeur est fournie par le consulat d’Italie en France.",
  ];

  return (
    <div className="bg-white">
      <UniHero
        name={uni.name}
        location="Rome, Italie"
        formationLinks={formationLinks}
      />

      <OverviewCards cards={overviewCards} />

      <UniversityImageGallery images={universityImages.link} />

      {/* Description */}
      <section className="relative py-14 px-4 bg-[#fafbff] overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-gradient-to-bl from-[#EC680A]/7 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[460px] h-[460px] bg-gradient-to-tr from-[#615CA5]/7 via-transparent to-transparent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#EC680A] mb-3">
            Université partenaire
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
            style={{ color: "#615CA5" }}
          >
            Présentation
          </h2>
          <div className="space-y-4 text-[#334155] leading-relaxed">
            <p>
              LINK Campus University est une université privée située à Rome, en
              Italie. Elle propose des formations en médecine, dentaire,
              kinésithérapie et pharmacie, toutes enseignées en italien. Les
              diplômes sont reconnus dans l&apos;ensemble de l&apos;Union
              européenne.
            </p>
            <p>
              L&apos;admission se fait via un test QCM en français portant sur 5
              matières scientifiques, organisé à Paris. Aucun prérequis
              linguistique n&apos;est demandé : un cours d&apos;italien intensif
              est inclus lors de la première année.
            </p>
            <p>
              La filière Pharmacie fait exception : elle ne nécessite pas de test
              et l&apos;admission se fait sur dossier uniquement.
            </p>
          </div>
        </div>
      </section>

      <TarifsTable programs={uni.programs} showCampus={false} />

      {/* Pharmacie note */}
      <section className="px-4 -mt-4 mb-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#EC680A]/10 border border-[#EC680A]/25 rounded-xl p-4 flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-[#EC680A] shrink-0 mt-0.5" />
            <p className="text-sm text-[#1B1D3A]">
              <strong>Pharmacie :</strong> pas de test d&apos;admission.
              L&apos;admission se fait sur dossier uniquement (les étapes 2 et 3
              du processus sont sautées). Frais de test :
              0&nbsp;&euro;.
            </p>
          </div>
        </div>
      </section>

      <AdmissionStepper
        steps={uni.admissionProcess.steps}
        note={uni.admissionProcess.notes}
        color="emerald"
      />

      <TestDetails type="link" />

      <DocumentsList
        candidature={candidatureDocuments}
        apresAcceptation={apresAcceptationDocuments}
        notes={documentNotes}
      />

      <ProgramLinks
        universityShort="LINK Campus"
        programs={programDetails.filter(p => p.universityShort === "LINK")}
      />

      {/* CTA */}
      <section id="contact" data-program-cta className="py-16 px-4 bg-[#1B1D3A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à rejoindre LINK Campus ?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Candidatez dès maintenant et bénéficiez de l&apos;accompagnement
            Edumove de A à Z.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://candidature.edumove.fr"
              className="inline-flex items-center gap-2 bg-[#EC680A] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#D45E09] transition-colors text-lg"
            >
              Déposer ma candidature gratuitement
              <ArrowRight className="w-5 h-5" />
            </Link>
            <ContactButton className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg border border-white/20">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Être recontacté
              </span>
            </ContactButton>
          </div>
        </div>
      </section>

      <StickyBar />
    </div>
  );
}
