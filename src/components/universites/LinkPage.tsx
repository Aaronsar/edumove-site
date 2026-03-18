"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { getUniversityBySlug } from "@/data/universities";
import UniHero from "./UniHero";
import OverviewCards from "./OverviewCards";
import TarifsTable from "./TarifsTable";
import AdmissionStepper from "./AdmissionStepper";
import TestDetails from "./TestDetails";
import DocumentsList from "./DocumentsList";

export default function LinkPage() {
  const uni = getUniversityBySlug("link")!;

  const overviewCards = [
    { value: "Rome", label: "Ville" },
    { value: "Italien", label: "Langue" },
    { value: "4", label: "Fili\u00e8res" },
    { value: "200\u00a0\u20ac", label: "Frais test" },
  ];

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
    "Les traductions asserment\u00e9es sont \u00e0 votre charge. EduMove peut vous recommander un traducteur.",
    "La d\u00e9claration de valeur est fournie par le consulat d\u2019Italie en France.",
  ];

  return (
    <div>
      <UniHero
        flag={uni.countryFlag}
        name={uni.name}
        location="Rome, Italie"
        color="emerald"
      />

      <OverviewCards cards={overviewCards} />

      {/* Description */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold italic text-[#1B1D3A] mb-4">
            Pr&eacute;sentation
          </h2>
          <p className="text-[#334155] leading-relaxed mb-4">
            LINK Campus University est une universit&eacute; priv&eacute;e
            situ&eacute;e &agrave; Rome, en Italie. Elle propose des formations
            en m&eacute;decine, dentaire, kin&eacute;sith&eacute;rapie et
            pharmacie, toutes enseign&eacute;es en italien. Les
            dipl&ocirc;mes sont reconnus dans l&apos;ensemble de l&apos;Union
            europ&eacute;enne.
          </p>
          <p className="text-[#334155] leading-relaxed mb-4">
            L&apos;admission se fait via un test QCM en fran&ccedil;ais
            portant sur 5 mati&egrave;res scientifiques, organis&eacute; &agrave;
            Paris. Aucun pr&eacute;requis linguistique n&apos;est
            demand&eacute; : un cours d&apos;italien intensif est inclus
            lors de la premi&egrave;re ann&eacute;e.
          </p>
          <p className="text-[#334155] leading-relaxed">
            La fili&egrave;re Pharmacie fait exception : elle ne
            n&eacute;cessite pas de test et l&apos;admission se fait sur
            dossier uniquement.
          </p>
        </div>
      </section>

      <TarifsTable programs={uni.programs} showCampus={false} />

      {/* Pharmacie note */}
      <section className="px-4 -mt-4 mb-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-sm text-emerald-800">
              <strong>Pharmacie :</strong> pas de test d&apos;admission.
              L&apos;admission se fait sur dossier uniquement (les &eacute;tapes
              2 et 3 du processus sont saut&eacute;es). Frais de test :
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

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1B1D3A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pr&ecirc;t &agrave; rejoindre LINK Campus ?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Candidatez d&egrave;s maintenant et b&eacute;n&eacute;ficiez de
            l&apos;accompagnement EduMove de A &agrave; Z.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#EC680A] text-white font-semibold px-8 py-4 rounded-[5px] hover:bg-[#D45E09] transition-colors text-lg"
          >
            D&eacute;poser ma candidature
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
