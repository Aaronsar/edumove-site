"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Phone, Mail, Clock } from "lucide-react";
import HubSpotModal from "@/components/shared/HubSpotModal";

export default function ContactPageContent() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full bg-[#1b1d3a] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#615ca5]/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#ec680a]/10 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-10 md:py-14">
          <nav className="flex items-center gap-1.5 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Contact</span>
          </nav>
          <div className="max-w-2xl">
            <h1
              className="text-3xl md:text-4xl font-bold leading-tight mb-4"
              style={{ color: "#ffffff" }}
            >
              Contactez Edumove
            </h1>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              Une question sur les études de santé en Europe ? Notre équipe est
              là pour vous accompagner. Remplissez le formulaire ou
              contactez-nous directement.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT CONTENT ── */}
      <section className="py-12 md:py-16 bg-[#fafbff]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left — CTA + Contact info */}
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "#1b1d3a" }}
              >
                Parlons de votre projet
              </h2>
              <p className="text-[#334155] text-sm leading-relaxed mb-8">
                Un conseiller Edumove vous rappelle sous 24h pour répondre à
                toutes vos questions : orientation, candidature, financement,
                installation.
              </p>

              {/* CTA Button */}
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-8 py-3.5 rounded-[5px] transition-all hover:shadow-xl hover:shadow-[#ec680a]/20 mb-10"
              >
                Être contacté par un conseiller
              </button>

              {/* Contact details */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#615CA5]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#615CA5]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B1D3A] text-sm">
                      Téléphone
                    </p>
                    <a
                      href="tel:+33189744257"
                      className="text-[#334155] text-sm hover:text-[#ec680a] transition-colors"
                    >
                      +33 1 89 74 42 57
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#615CA5]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#615CA5]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B1D3A] text-sm">
                      Email
                    </p>
                    <a
                      href="mailto:contact@edumove.fr"
                      className="text-[#334155] text-sm hover:text-[#ec680a] transition-colors"
                    >
                      contact@edumove.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#615CA5]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#615CA5]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B1D3A] text-sm">
                      Horaires
                    </p>
                    <p className="text-[#334155] text-sm">
                      Lundi - Vendredi : 9h - 18h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Quick links */}
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "#1b1d3a" }}
              >
                Liens utiles
              </h2>
              <div className="space-y-4">
                <Link
                  href="https://candidature.edumove.fr"
                  className="group block bg-white rounded-xl border border-[#e2e2ef] p-5 hover:shadow-md transition-shadow"
                >
                  <p className="font-bold text-[#1B1D3A] group-hover:text-[#ec680a] transition-colors">
                    Déposer ma candidature
                  </p>
                  <p className="text-xs text-[#64748b] mt-1">
                    Commencez votre dossier d&apos;inscription en ligne.
                  </p>
                </Link>

                <Link
                  href="/questions-frequentes"
                  className="group block bg-white rounded-xl border border-[#e2e2ef] p-5 hover:shadow-md transition-shadow"
                >
                  <p className="font-bold text-[#1B1D3A] group-hover:text-[#ec680a] transition-colors">
                    Questions fréquentes
                  </p>
                  <p className="text-xs text-[#64748b] mt-1">
                    Retrouvez les réponses aux questions les plus posées.
                  </p>
                </Link>

                <Link
                  href="/financement"
                  className="group block bg-white rounded-xl border border-[#e2e2ef] p-5 hover:shadow-md transition-shadow"
                >
                  <p className="font-bold text-[#1B1D3A] group-hover:text-[#ec680a] transition-colors">
                    Financement
                  </p>
                  <p className="text-xs text-[#64748b] mt-1">
                    Découvrez les solutions de financement pour vos études.
                  </p>
                </Link>

                <Link
                  href="/temoignages"
                  className="group block bg-white rounded-xl border border-[#e2e2ef] p-5 hover:shadow-md transition-shadow"
                >
                  <p className="font-bold text-[#1B1D3A] group-hover:text-[#ec680a] transition-colors">
                    Témoignages
                  </p>
                  <p className="text-xs text-[#64748b] mt-1">
                    Lisez les avis des étudiants et parents accompagnés par
                    Edumove.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ContactPoint JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Edumove",
            url: "https://www.edumove.fr",
            telephone: "+33-1-89-74-42-57",
            email: "contact@edumove.fr",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+33-1-89-74-42-57",
              contactType: "customer service",
              availableLanguage: "French",
            },
          }),
        }}
      />

      <HubSpotModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
