"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Euro,
  FileText,
  Download,
  Mail,
  Phone,
  CheckCircle2,
  AlertTriangle,
  GraduationCap,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import HubSpotEmbedModal from "@/components/shared/HubSpotEmbedModal";

const TEST_DATE_LABEL = "25 juin 2026";

// URLs des PDFs (placés dans /public/files/)
const PDF_TEST_MEDECINE = "/files/test-medecine-chirurgie-link-campus.pdf";
const PDF_TEST_PARAMED = "/files/test-professions-sante-link-campus.pdf";
const PDF_FORMULAIRE = "/files/formulaire-pre-candidature-link-campus.pdf";

const TARIFS = [
  { filiere: "Médecine & Dentaire", prix: "19 800 €" },
  { filiere: "Kinésithérapie & Ostéopathie", prix: "11 900 €" },
  { filiere: "Pharmacie", prix: "7 900 €", note: "Sans test d'admission" },
  { filiere: "Infirmier", prix: "5 900 €" },
];

const ETAPES = [
  {
    n: 1,
    title: "Téléchargez les documents",
    desc: "Le modèle de test pour vous préparer et le formulaire de pré-inscription à compléter.",
  },
  {
    n: 2,
    title: "Préparez votre dossier",
    desc: "Formulaire complété + copie du baccalauréat (ou brevet) + copie de la pièce d'identité.",
  },
  {
    n: 3,
    title: "Envoyez par email",
    desc: "Adressez votre dossier à admissions@diploma-sante.fr avec en objet : Candidature Edumove — [NOM PRÉNOM]. Un conseiller vous recontacte sous 24h.",
  },
];

export default function CandidatureLinkPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const mailtoHref = `mailto:admissions@diploma-sante.fr?subject=${encodeURIComponent("Candidature Edumove — [NOM PRÉNOM]")}&body=${encodeURIComponent("Bonjour,\n\nVeuillez trouver ci-joint mon dossier de candidature :\n- Formulaire de pré-candidature complété\n- Copie du baccalauréat (ou brevet)\n- Copie de la pièce d'identité\n\nBien cordialement,\n")}`;

  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-[#1B1D3A] text-white">
        <div aria-hidden className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-20 w-[420px] h-[420px] rounded-full bg-[#615CA5]/25 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#EC680A]/15 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-14 md:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm mb-8 text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/test-link-campus" className="hover:text-white transition-colors">Test LINK Campus</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Candidater</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-[#EC680A]/15 border border-[#EC680A]/40 rounded-full px-4 py-2 mb-6 text-sm font-semibold text-[#EC680A]">
            <CalendarDays className="w-4 h-4" />
            Dernière session 2026 — {TEST_DATE_LABEL}
          </div>

          <h1
            className="text-3xl md:text-5xl font-bold mb-5 tracking-tight max-w-3xl"
            style={{ color: "#ffffff" }}
          >
            Constituer votre dossier de candidature
          </h1>

          <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl">
            Téléchargez vos documents et envoyez votre dossier complet à Edumove pour participer au test d&apos;admission de LINK Campus University le 25 juin à Paris.
          </p>

          {/* Infos clés */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: CalendarDays, label: "Date", value: "25 juin" },
              { icon: MapPin, label: "Lieu", value: "Paris" },
              { icon: Euro, label: "Frais test", value: "200 €" },
              { icon: FileText, label: "Format", value: "QCM italien (FR)" },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <item.icon className="w-5 h-5 text-[#EC680A] mb-2" />
                <p className="text-xs uppercase tracking-widest text-white/50 font-semibold">{item.label}</p>
                <p className="text-base font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DOCUMENTS À TÉLÉCHARGER ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#EC680A] mb-3">
            Étape 1 — Documents à télécharger
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-6 max-w-2xl">
            Vos pièces de candidature
          </h2>

          {/* CTA Remplir en ligne (option la plus rapide) */}
          <div className="mb-8 bg-gradient-to-br from-[#1B1D3A] to-[#615CA5] rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
            <div aria-hidden className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#EC680A]/20 blur-3xl" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-5">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[#EC680A] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="inline-block bg-[#EC680A] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2">
                  Le plus rapide · 5 minutes
                </div>
                <h3 className="font-bold text-xl mb-1" style={{ color: "#ffffff" }}>
                  Remplir mon dossier en ligne
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Formulaire pré-rempli, signature électronique, pièces jointes intégrées et envoi automatique. Aucune impression ni scan nécessaires.
                </p>
              </div>
              <Link
                href="/candidature-test-link/remplir"
                className="shrink-0 group inline-flex items-center gap-2 bg-[#EC680A] hover:bg-[#D45E09] text-white font-semibold px-6 py-3 rounded-full transition-all hover:gap-3 hover:shadow-lg hover:shadow-[#EC680A]/30"
              >
                Commencer
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <p className="text-xs text-[#94a3b8] mb-6">
            Ou téléchargez les documents pour les remplir à la main :
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Test médecine & chirurgie */}
            <a
              href={PDF_TEST_MEDECINE}
              download
              className="group block bg-white border-2 border-gray-200 hover:border-[#EC680A] rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(236,104,10,0.15)] hover:-translate-y-1"
            >
              <div className="flex flex-col gap-4 h-full">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#EC680A]/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#EC680A]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-[#615CA5] font-semibold mb-1">
                    Préparation au test
                  </p>
                  <h3 className="font-bold text-[#1B1D3A] text-lg mb-2">
                    Modèle test — Médecine & Dentaire
                  </h3>
                  <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                    Exemples de questions de l&apos;épreuve de Medicina e Chirurgia.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-[#EC680A] font-semibold text-sm group-hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  Télécharger le PDF
                </div>
              </div>
            </a>

            {/* Test professions de santé */}
            <a
              href={PDF_TEST_PARAMED}
              download
              className="group block bg-white border-2 border-gray-200 hover:border-[#EC680A] rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(236,104,10,0.15)] hover:-translate-y-1"
            >
              <div className="flex flex-col gap-4 h-full">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#EC680A]/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#EC680A]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-[#615CA5] font-semibold mb-1">
                    Préparation au test
                  </p>
                  <h3 className="font-bold text-[#1B1D3A] text-lg mb-2">
                    Modèle test — Professions de santé
                  </h3>
                  <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                    Exemples de questions pour Kinésithérapie, Ostéopathie, Infirmier.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-[#EC680A] font-semibold text-sm group-hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  Télécharger le PDF
                </div>
              </div>
            </a>

            {/* Formulaire de pré-candidature */}
            <a
              href={PDF_FORMULAIRE}
              download
              className="group block bg-white border-2 border-[#EC680A]/40 hover:border-[#EC680A] rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(236,104,10,0.2)] hover:-translate-y-1 relative"
            >
              <div className="absolute -top-3 left-6 bg-[#EC680A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                À compléter
              </div>
              <div className="flex flex-col gap-4 h-full">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#EC680A]/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#EC680A]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-[#615CA5] font-semibold mb-1">
                    Document obligatoire
                  </p>
                  <h3 className="font-bold text-[#1B1D3A] text-lg mb-2">
                    Formulaire de pré-candidature
                  </h3>
                  <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                    Document officiel à remplir avant l&apos;envoi de votre dossier complet.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-[#EC680A] font-semibold text-sm group-hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  Télécharger le PDF
                </div>
              </div>
            </a>
          </div>

          {/* CTAs juste après les téléchargements */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={mailtoHref}
              className="group inline-flex items-center justify-center gap-2 bg-[#EC680A] hover:bg-[#D45E09] text-white text-base font-semibold px-7 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#EC680A]/30 hover:gap-3"
            >
              <Mail className="w-5 h-5" />
              Envoyer mon dossier par email
            </a>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#1B1D3A] hover:bg-[#1B1D3A] hover:text-white text-[#1B1D3A] text-base font-semibold px-7 py-4 rounded-full transition-all duration-300 cursor-pointer"
            >
              Être rappelé par un conseiller
            </button>
          </div>
          <p className="mt-4 text-xs text-[#94a3b8] text-center">
            Réponse d&apos;un conseiller Edumove sous 24h ouvrées · 100% gratuit
          </p>
        </div>
      </section>

      {/* ─── FILIÈRES & TARIFS ─── */}
      <section className="py-16 md:py-20 bg-[#fafbff]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#EC680A] mb-3">
            Filières & tarifs
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-10">
            Tarifs annuels selon la filière
          </h2>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#1B1D3A] text-white">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Filière</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold">Tarif annuel</th>
                </tr>
              </thead>
              <tbody>
                {TARIFS.map((row, i) => (
                  <tr key={row.filiere} className={`border-t border-gray-100 ${i % 2 === 1 ? "bg-gray-50/50" : ""}`}>
                    <td className="px-6 py-4 font-semibold text-[#1B1D3A]">
                      {row.filiere}
                      {row.note && (
                        <span className="ml-2 inline-flex items-center gap-1 text-xs font-medium text-[#615CA5] bg-[#615CA5]/10 px-2 py-1 rounded-full">
                          <CheckCircle2 className="w-3 h-3" />
                          {row.note}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right text-[#EC680A] font-bold">{row.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-[#64748b] italic">
            + frais administratifs : 250 € d&apos;inscription, 140 € de dossier, 16 € de frais administratifs.
          </p>

          {/* Financement + acompte */}
          <div className="mt-8 bg-white border-l-4 border-[#EC680A] rounded-r-2xl p-6">
            <p className="font-semibold text-[#1B1D3A] mb-2">Financement</p>
            <p className="text-sm text-[#334155] leading-relaxed mb-4">
              Notre partenaire bancaire peut financer jusqu&apos;à 100 % des frais de scolarité (sous réserve d&apos;acceptation du dossier).
            </p>
            <div className="flex items-start gap-3 pt-4 border-t border-dashed border-[#EC680A]/30">
              <AlertTriangle className="w-5 h-5 text-[#EC680A] shrink-0 mt-0.5" />
              <p className="text-sm text-[#334155] leading-relaxed">
                <strong className="text-[#1B1D3A]">Important —</strong> en cas de validation du test, un acompte au prorata du montant annuel devra être réglé <strong>sous 48 heures</strong> pour garantir votre place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMMENT ENVOYER VOTRE DOSSIER ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#EC680A] mb-3">
            Comment candidater
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-10">
            3 étapes pour envoyer votre dossier
          </h2>

          <div className="space-y-4 mb-10">
            {ETAPES.map((etape) => (
              <div
                key={etape.n}
                className="flex gap-5 bg-white border border-gray-200 rounded-2xl p-5 md:p-6"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-[#615CA5]/20">
                  {etape.n}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#1B1D3A] text-base md:text-lg mb-1">{etape.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{etape.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Récap dossier */}
          <div className="bg-[#fafbff] rounded-2xl border border-gray-200 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#EC680A] mb-4">
              Récapitulatif de votre dossier
            </p>
            <ul className="space-y-2.5">
              {[
                "Formulaire de pré-candidature complété (PDF téléchargé ci-dessus)",
                "Copie du baccalauréat (ou du brevet pour les autres étudiants)",
                "Copie de la pièce d'identité",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#EC680A] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#334155] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1B1D3A] via-[#1B1D3A] to-[#615CA5] text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#EC680A]/15 blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 text-sm font-semibold">
            <CalendarDays className="w-4 h-4 text-[#EC680A]" />
            Places limitées — Transmettez votre dossier au plus vite
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            style={{ color: "#ffffff" }}
          >
            Une question sur votre dossier&nbsp;?
          </h2>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Notre équipe est disponible pour répondre à vos questions et vous accompagner personnellement dans votre projet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33189744257"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1B1D3A] text-base font-semibold px-7 py-4 rounded-full hover:bg-white/90 transition-all"
            >
              <Phone className="w-5 h-5 text-[#EC680A]" />
              +33 1 89 74 42 57
            </a>
            <a
              href="mailto:admissions@diploma-sante.fr"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white text-base font-semibold px-7 py-4 rounded-full hover:bg-white/15 transition-all"
            >
              <Mail className="w-5 h-5 text-[#EC680A]" />
              admissions@diploma-sante.fr
            </a>
          </div>
        </div>
      </section>

      {/* ─── MODALE HUBSPOT ─── */}
      <HubSpotEmbedModal
        isOpen={isModalOpen}
        onClose={closeModal}
        form="inscription-link-k21s"
        title="Être rappelé par un conseiller"
        subtitle="Test LINK Campus du 25 juin 2026 — un conseiller Edumove vous rappelle sous 24h pour vous aider à constituer votre dossier."
      />
    </main>
  );
}
