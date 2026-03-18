"use client";

import Link from "next/link";
import { ArrowRight, AlertTriangle, Star } from "lucide-react";
import { getUniversityBySlug } from "@/data/universities";
import UniHero from "./UniHero";
import OverviewCards from "./OverviewCards";
import TarifsTable from "./TarifsTable";
import AdmissionStepper from "./AdmissionStepper";
import DocumentsList from "./DocumentsList";

export default function UCJCPage() {
  const uni = getUniversityBySlug("ucjc")!;

  const overviewCards = [
    { value: "Madrid", label: "Ville" },
    { value: "Espagnol", label: "Langue" },
    { value: "3", label: "Fili\u00e8res" },
    { value: "0\u00a0\u20ac", label: "Entretien" },
  ];

  const candidatureDocuments = [
    "Pi\u00e8ce d\u2019identit\u00e9 (carte d\u2019identit\u00e9 ou passeport)",
    "Photo d\u2019identit\u00e9 r\u00e9cente",
    "Bulletins scolaires (1\u00e8re et Terminale)",
    "Lettre de motivation",
    "Attestation de niveau d\u2019espagnol (certificat e-learning accept\u00e9)",
  ];

  const apresAcceptationDocuments = [
    "Relev\u00e9 de notes du bac",
    "Dipl\u00f4me du baccalaur\u00e9at (ou attestation provisoire)",
    "Traduction asserment\u00e9e des documents en espagnol",
    "Apostille de La Haye sur le dipl\u00f4me",
    "Homologaci\u00f3n ou volante d\u2019inscription aupr\u00e8s du minist\u00e8re espagnol",
    "Attestation d\u2019assurance maladie europ\u00e9enne (CEAM)",
    "Justificatif de logement \u00e0 Madrid",
  ];

  const documentNotes = [
    "L\u2019apostille de La Haye peut \u00eatre demand\u00e9e aupr\u00e8s de votre rectorat.",
    "EduMove vous accompagne pour toutes les d\u00e9marches administratives.",
  ];

  return (
    <div>
      <UniHero
        flag={uni.countryFlag}
        name={uni.name}
        location="Madrid, Espagne"
        color="amber"
      />

      <OverviewCards cards={overviewCards} />

      {/* Description */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold italic text-[#1B1D3A] mb-4">
            Pr&eacute;sentation
          </h2>
          <p className="text-[#334155] leading-relaxed mb-4">
            L&apos;Universidad Camilo Jos&eacute; Cela (UCJC) est une
            universit&eacute; priv&eacute;e situ&eacute;e &agrave; Madrid, en
            Espagne. Elle propose des formations en dentaire,
            kin&eacute;sith&eacute;rapie et pharmacie, toutes
            enseign&eacute;es en espagnol.
          </p>
          <p className="text-[#334155] leading-relaxed">
            L&apos;admission se fait uniquement par entretien (en visio ou en
            pr&eacute;sentiel) : aucun test &eacute;crit n&apos;est
            demand&eacute;. Les frais d&apos;admission sont gratuits.
            L&apos;UCJC est une option particuli&egrave;rement attractive
            pour les &eacute;tudiants souhaitant &eacute;viter les tests
            &eacute;crits d&apos;entr&eacute;e.
          </p>
        </div>
      </section>

      {/* Alert: Medecine complet */}
      <section className="px-4 mb-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-red-800">
                M&eacute;decine COMPLET pour 2026-2027
              </p>
              <p className="text-sm text-red-700 mt-1">
                La fili&egrave;re m&eacute;decine &agrave; l&apos;UCJC
                n&apos;accepte plus de nouvelles candidatures pour la
                rentr&eacute;e 2026-2027. Les fili&egrave;res dentaire,
                pharmacie et kin&eacute;sith&eacute;rapie restent ouvertes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TarifsTable programs={uni.programs} showCampus={false} />

      {/* Highlight: kine la moins chere */}
      <section className="px-4 -mt-4 mb-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
            <Star className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>Kin&eacute;sith&eacute;rapie &agrave; l&apos;UCJC :</strong>{" "}
              c&apos;est l&apos;option la moins ch&egrave;re parmi toutes nos
              universit&eacute;s partenaires pour cette fili&egrave;re, avec un
              co&ucirc;t total de 37&nbsp;680&nbsp;&euro; sur 4 ans.
            </p>
          </div>
        </div>
      </section>

      <AdmissionStepper
        steps={uni.admissionProcess.steps}
        note={uni.admissionProcess.notes}
        color="amber"
      />

      <DocumentsList
        candidature={candidatureDocuments}
        apresAcceptation={apresAcceptationDocuments}
        notes={documentNotes}
      />

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1B1D3A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pr&ecirc;t &agrave; rejoindre l&apos;UCJC ?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Admission sans test &eacute;crit. Candidatez d&egrave;s maintenant
            avec l&apos;accompagnement EduMove.
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
