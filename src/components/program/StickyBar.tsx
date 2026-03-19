"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Phone, Clock, X } from "lucide-react";
import ContactButton from "@/components/shared/ContactButton";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [ctaReached, setCtaReached] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide when the final CTA section is in view
  useEffect(() => {
    const ctaSection = document.querySelector("[data-program-cta]");
    if (!ctaSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setCtaReached(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(ctaSection);
    return () => observer.disconnect();
  }, []);

  const show = visible && !ctaReached && !dismissed;

  return (
    <>
      {/* Desktop — bloc flottant bas-droite */}
      <div
        className={`hidden md:block fixed right-6 bottom-6 z-50 w-[320px] transition-all duration-500 ${
          show
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative rounded-2xl bg-white border-2 border-[#EC680A] shadow-[0_20px_60px_-15px_rgba(27,29,58,0.25)] overflow-hidden">
          {/* Close button */}
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-3 left-3 z-20 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <X className="w-3 h-3 text-[#1B1D3A]" />
          </button>

          {/* Dot pattern decoration */}
          <div aria-hidden className="absolute top-4 right-4 grid grid-cols-5 gap-[5px] opacity-[0.15]">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1B1D3A]" />
            ))}
          </div>
          <div aria-hidden className="absolute bottom-16 left-3 grid grid-cols-3 gap-[5px] opacity-[0.12]">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1B1D3A]" />
            ))}
          </div>

          <div className="relative z-10 p-6">
            {/* Logo */}
            <div className="flex justify-center mb-3">
              <Image
                src="/edumove-icon-orange.svg"
                alt="Edumove"
                width={40}
                height={40}
              />
            </div>

            {/* Header */}
            <p className="text-[#1B1D3A] font-bold text-[15px] leading-snug mb-1 text-center">
              Intéressé(e) par cette
              <br />
              formation&nbsp;?
            </p>

            {/* Sub-text */}
            <div className="flex items-center justify-center gap-1.5 mb-6">
              <Clock className="w-3 h-3 text-[#615CA5]" />
              <p className="text-[#64748B] text-xs">
                Réponse garantie sous 2h (8h-20h)
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2.5">
              <a
                href="https://candidature.edumove.fr"
                className="group flex items-center justify-center gap-2 bg-[#EC680A] hover:bg-[#D45E09] text-white text-sm font-semibold h-12 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#EC680A]/20"
              >
                Déposer ma candidature
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <ContactButton className="group flex items-center justify-center gap-2 bg-[#1B1D3A] hover:bg-[#2a2d52] text-white text-sm font-semibold h-12 rounded-xl transition-all duration-300">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Être recontacté
                </span>
              </ContactButton>
            </div>

            {/* Trust indicator */}
            <p className="text-center text-[11px] text-[#94A3B8] mt-3">
              +2 000 étudiants accompagnés
            </p>
          </div>
        </div>
      </div>

      {/* Mobile — barre en bas */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 pb-[env(safe-area-inset-bottom)] transition-all duration-500 ${
          show
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-3 pb-2 flex items-center gap-2.5">
          <a
            href="https://candidature.edumove.fr"
            className="group flex-1 flex items-center justify-center gap-1.5 bg-[#EC680A] hover:bg-[#D45E09] text-white text-xs font-semibold h-11 rounded-full border-2 border-white/80 shadow-lg transition-colors"
          >
            Candidater
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <ContactButton className="group flex-1 flex items-center justify-center gap-1.5 bg-[#1B1D3A] text-white text-xs font-semibold h-11 rounded-full border-2 border-white/80 shadow-lg hover:bg-[#2a2d52] transition-colors">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              Être recontacté
            </span>
          </ContactButton>
        </div>
      </div>
    </>
  );
}
