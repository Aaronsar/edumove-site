"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { getUniversityBySlug } from "@/data/universities";
import { programDetails } from "@/data/program-details";
import UniHero from "./UniHero";
import OverviewCards from "./OverviewCards";
import UniversityImageGallery from "./UniversityImageGallery";
import { universityImages } from "@/data/university-images";
import TarifsTable from "./TarifsTable";
import AdmissionStepper from "./AdmissionStepper";
import TestDetails from "./TestDetails";
import SessionsTable from "./SessionsTable";
import DocumentsList from "./DocumentsList";
import ProgramLinks from "./ProgramLinks";
import StickyBar from "@/components/program/StickyBar";
import ContactButton from "@/components/shared/ContactButton";
import TestimonialsCarousel from "@/components/shared/TestimonialsCarousel";
import type { Testimonial } from "@/components/shared/TestimonialsCarousel";

const ueTestimonials: Testimonial[] = [
  {
    quote: "Le test PE me faisait flipper, j'avais lu plein de trucs sur internet. Au final mon conseiller m'a envoyé des annales, on a fait des sessions de révision ensemble, et le jour J c'était dur mais faisable. J'ai eu ma place en médecine à Madrid, campus Villaviciosa. Ça fait 2 ans et j'en reviens toujours pas.",
    author: "Inès K.",
    context: "Étudiante en 2e année de médecine — UE Madrid",
    initials: "IK",
    color: "bg-[#615ca5]",
  },
  {
    quote: "On hésitait entre Madrid et Malaga pour notre fils. Le conseiller nous a expliqué les différences, le coût de la vie, l'ambiance de chaque campus. Au final c'est Malaga qui collait le mieux. Le prêt LCL a été bouclé en un mois, et notre fils est parti serein.",
    author: "Philippe G.",
    context: "Parent d'un étudiant en dentaire — UE Malaga",
    initials: "PG",
    color: "bg-[#ec680a]",
  },
  {
    quote: "J'avais pas trouvé de place en véto en France, même avec 14 de moyenne. À l'UE Valence les cours sont en anglais, les labos sont neufs, et on est 40 par promo. C'est un autre monde. Et Valence en tant que ville pour un étudiant, franchement c'est le rêve.",
    author: "Raphaël C.",
    context: "Étudiant en 1re année de vétérinaire — UE Valence",
    initials: "RC",
    color: "bg-[#615ca5]",
  },
];

export default function UEPage() {
  const uni = getUniversityBySlug("ue")!;

  const overviewCards = [
    { value: "5", label: "Campus" },
    { value: "6", label: "Filières" },
    { value: "3", label: "Langues" },
    { value: "2 500 €", label: "Acompte" },
  ];

  const uePrograms = programDetails.filter((p) => p.universityShort === "UE");
  const formationLinks = uePrograms
    .filter((p, i, arr) => arr.findIndex((x) => x.filiereSlug === p.filiereSlug) === i)
    .map((p) => ({ name: p.filiere, filiereSlug: p.filiereSlug, programSlug: p.slug }));

  const candidatureDocuments = [
    "Pi\u00e8ce d\u2019identit\u00e9 (carte d\u2019identit\u00e9 ou passeport)",
    "Photo d\u2019identit\u00e9 r\u00e9cente",
    "Bulletins scolaires (1\u00e8re et Terminale)",
    "Rapport technique Edumove (pr\u00e9par\u00e9 avec votre conseiller)",
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
    <div className="bg-white">
      <UniHero
        name={uni.name}
        location="5 campus en Espagne : Madrid, Malaga, Valence, Alicante, Canaries"
        formationLinks={formationLinks}
      />

      <OverviewCards cards={overviewCards} />

      <UniversityImageGallery images={universityImages.ue} />

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

      <TestimonialsCarousel testimonials={ueTestimonials} />

      <ProgramLinks
        universityShort="UE"
        programs={programDetails.filter(p => p.universityShort === "UE")}
      />

      {/* CTA */}
      <section id="contact" data-program-cta className="py-10 md:py-16 px-6 bg-[#1B1D3A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#ffffff" }}>
            L&apos;Universidad Europea vous int&eacute;resse&nbsp;?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            5 campus, 6 fili&egrave;res. On vous explique tout lors d&apos;un
            premier &eacute;change gratuit.
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
