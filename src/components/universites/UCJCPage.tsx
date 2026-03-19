"use client";

import Link from "next/link";
import { ArrowRight, AlertTriangle, Star, Phone } from "lucide-react";
import { getUniversityBySlug } from "@/data/universities";
import { programDetails } from "@/data/program-details";
import UniHero from "./UniHero";
import OverviewCards from "./OverviewCards";
import UniversityImageGallery from "./UniversityImageGallery";
import { universityImages } from "@/data/university-images";
import TarifsTable from "./TarifsTable";
import AdmissionStepper from "./AdmissionStepper";
import DocumentsList from "./DocumentsList";
import ProgramLinks from "./ProgramLinks";
import StickyBar from "@/components/program/StickyBar";
import ContactButton from "@/components/shared/ContactButton";

export default function UCJCPage() {
  const uni = getUniversityBySlug("ucjc")!;

  const overviewCards = [
    { value: "Madrid", label: "Ville" },
    { value: "Espagnol", label: "Langue" },
    { value: "3", label: "Filières" },
    { value: "0 €", label: "Entretien" },
  ];

  const ucjcPrograms = programDetails.filter((p) => p.universityShort === "UCJC");
  const formationLinks = ucjcPrograms
    .filter((p, i, arr) => arr.findIndex((x) => x.filiereSlug === p.filiereSlug) === i)
    .map((p) => ({ name: p.filiere, filiereSlug: p.filiereSlug, programSlug: p.slug }));

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
    "Edumove vous accompagne pour toutes les d\u00e9marches administratives.",
  ];

  return (
    <div className="bg-white">
      <UniHero
        name={uni.name}
        location="Madrid, Espagne"
        formationLinks={formationLinks}
      />

      <OverviewCards cards={overviewCards} />

      <UniversityImageGallery images={universityImages.ucjc} />

      {/* Description */}
      <section className="relative py-14 px-6 bg-[#fafbff] overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-gradient-to-bl from-[#EC680A]/7 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[460px] h-[460px] bg-gradient-to-tr from-[#615CA5]/7 via-transparent to-transparent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#EC680A] mb-3">
            Universit&eacute; partenaire
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5" style={{ color: "#615CA5" }}>
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
      <section className="px-6 mb-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#EC680A]/10 border border-[#EC680A]/25 rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#EC680A] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-[#1B1D3A]">
                M&eacute;decine COMPLET pour 2026-2027
              </p>
              <p className="text-sm text-[#334155] mt-1">
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
      <section className="px-6 -mt-4 mb-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#EC680A]/10 border border-[#EC680A]/25 rounded-xl p-4 flex items-start gap-3">
            <Star className="w-5 h-5 text-[#EC680A] shrink-0 mt-0.5" />
            <p className="text-sm text-[#1B1D3A]">
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

      <ProgramLinks
        universityShort="UCJC"
        programs={programDetails.filter(p => p.universityShort === "UCJC")}
      />

      {/* CTA */}
      <section id="contact" data-program-cta className="py-10 md:py-16 px-6 bg-[#1B1D3A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pr&ecirc;t &agrave; rejoindre l&apos;UCJC ?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Admission sans test &eacute;crit. Candidatez d&egrave;s maintenant
            avec l&apos;accompagnement Edumove.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://candidature.edumove.fr"
              className="inline-flex items-center gap-2 bg-[#EC680A] text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-[#D45E09] transition-colors text-sm sm:text-lg"
            >
              Candidater
              <ArrowRight className="w-5 h-5" />
            </Link>
            <ContactButton className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition-colors text-sm sm:text-lg border border-white/20">
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
