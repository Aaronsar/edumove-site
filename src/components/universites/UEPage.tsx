"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getUniversityBySlug } from "@/data/universities";
import { programDetails } from "@/data/program-details";
import UniHero from "./UniHero";
import OverviewCards from "./OverviewCards";
import TarifsTable from "./TarifsTable";
import AdmissionStepper from "./AdmissionStepper";
import TestDetails from "./TestDetails";
import SessionsTable from "./SessionsTable";
import DocumentsList from "./DocumentsList";
import ProgramLinks from "./ProgramLinks";

export default function UEPage() {
  const uni = getUniversityBySlug("ue")!;

  const overviewCards = [
    { value: "5", label: "Campus" },
    { value: "6", label: "Fili\u00e8res" },
    { value: "3", label: "Langues" },
    { value: "2\u00a0500\u00a0\u20ac", label: "Acompte" },
  ];

  const candidatureDocuments = [
    "Pi\u00e8ce d\u2019identit\u00e9 (carte d\u2019identit\u00e9 ou passeport)",
    "Photo d\u2019identit\u00e9 r\u00e9cente",
    "Bulletins scolaires (1\u00e8re et Terminale)",
    "Rapport technique EduMove (pr\u00e9par\u00e9 avec votre conseiller)",
    "Lettre de motivation",
  ];

  const apresAcceptationDocuments = [
    "Relev\u00e9 de notes du bac",
    "Dipl\u00f4me du baccalaur\u00e9at (ou attestation provisoire)",
    "Traduction asserment\u00e9e des documents en espagnol",
    "Apostille de La Haye sur le dipl\u00f4me",
    "Homologaci\u00f3n ou volante d\u2019inscription aupr\u00e8s du minist\u00e8re espagnol",
    "Versement de l\u2019acompte de 2\u00a0500\u00a0\u20ac sous 2 jours apr\u00e8s acceptation",
    "Attestation d\u2019assurance maladie europ\u00e9enne (CEAM)",
    "Justificatif de logement",
  ];

  const documentNotes = [
    "L\u2019acompte de 2\u00a0500\u00a0\u20ac doit \u00eatre vers\u00e9 dans les 2 jours suivant l\u2019acceptation. Il est d\u00e9duit du co\u00fbt total de la scolarit\u00e9.",
    "Les fili\u00e8res Hors PE (Kin\u00e9 hors FR Madrid, Pharmacie, Pr\u00e9pa Dentaire) ne n\u00e9cessitent pas de test.",
    "Pour la Pr\u00e9pa Dentaire \u00e0 Alicante, un niveau B2 en anglais est requis.",
  ];

  return (
    <div>
      <UniHero
        flag={uni.countryFlag}
        name={uni.name}
        location="5 campus en Espagne : Madrid, Malaga, Valence, Alicante, Canaries"
        color="blue"
      />

      <OverviewCards cards={overviewCards} />

      {/* Description */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold italic text-[#1B1D3A] mb-4">
            Pr&eacute;sentation
          </h2>
          <p className="text-[#334155] leading-relaxed mb-4">
            L&apos;Universidad Europea (UE) est le plus grand r&eacute;seau
            universitaire priv&eacute; d&apos;Espagne avec 5 campus
            r&eacute;partis dans tout le pays. Elle offre le plus large choix
            de fili&egrave;res sant&eacute; parmi nos universit&eacute;s
            partenaires : m&eacute;decine, dentaire,
            kin&eacute;sith&eacute;rapie, pharmacie, v&eacute;t&eacute;rinaire
            et pr&eacute;pa dentaire.
          </p>
          <p className="text-[#334155] leading-relaxed mb-4">
            Les cours sont dispens&eacute;s en espagnol, en anglais ou en
            fran&ccedil;ais selon la fili&egrave;re et le campus choisis.
            L&apos;admission aux fili&egrave;res principales (m&eacute;decine,
            dentaire, v&eacute;t&eacute;rinaire) passe par le test PE (Prueba
            Espec&iacute;fica), compos&eacute; de 4 &eacute;preuves.
          </p>
          <p className="text-[#334155] leading-relaxed">
            Certaines fili&egrave;res (kin&eacute;sith&eacute;rapie hors
            parcours fran&ccedil;ais, pharmacie, pr&eacute;pa dentaire) sont
            accessibles sur dossier uniquement, sans test d&apos;entr&eacute;e.
          </p>
        </div>
      </section>

      <TarifsTable programs={uni.programs} showCampus={true} />

      <AdmissionStepper
        steps={uni.admissionProcess.steps}
        note={uni.admissionProcess.notes}
        color="blue"
      />

      <TestDetails type="ue" />

      <SessionsTable />

      <DocumentsList
        candidature={candidatureDocuments}
        apresAcceptation={apresAcceptationDocuments}
        notes={documentNotes}
      />

      <ProgramLinks
        universityShort="UE"
        programs={programDetails.filter(p => p.universityShort === "UE")}
      />

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1B1D3A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pr&ecirc;t &agrave; rejoindre l&apos;Universidad Europea ?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            5 campus, 6 fili&egrave;res, un accompagnement EduMove de A
            &agrave; Z.
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
