"use client";

import { ArrowRight, Phone } from "lucide-react";

export default function StickyBar() {
  return (
    <>
      {/* Desktop — bloc flottant à droite */}
      <div className="hidden md:flex fixed right-8 bottom-8 z-50 flex-col w-[280px] rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(27,29,58,0.25)]">
        {/* Header navy */}
        <div className="bg-[#1B1D3A] px-6 pt-6 pb-5">
          <p className="text-white font-bold text-lg leading-tight">
            Intéressé(e) par<br />cette formation ?
          </p>
          <p className="text-white/40 text-xs mt-1.5">
            Réponse sous 24h
          </p>
        </div>
        {/* Boutons */}
        <div className="bg-white px-5 py-5 flex flex-col gap-3">
          <a
            href="https://candidature.edumove.fr"
            className="group flex items-center justify-center gap-2 bg-[#EC680A] hover:bg-[#D45E09] text-white text-sm font-semibold h-11 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#EC680A]/25"
          >
            Déposer ma candidature
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 bg-[#1B1D3A] hover:bg-[#2a2d52] text-white text-sm font-semibold h-11 rounded-xl transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Être recontacté
          </a>
        </div>
      </div>

      {/* Mobile — barre en bas */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]">
        <div className="px-3 py-2.5 flex items-center gap-2">
          <a
            href="https://candidature.edumove.fr"
            className="group flex-1 inline-flex items-center justify-center gap-2 bg-[#EC680A] text-white text-xs font-semibold h-10 rounded-full transition-all duration-300"
          >
            Déposer ma candidature
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#contact"
            className="group flex-1 inline-flex items-center justify-center gap-2 bg-[#1B1D3A] text-white text-xs font-semibold h-10 rounded-full transition-all duration-300"
          >
            <Phone className="w-3.5 h-3.5" />
            Être recontacté
          </a>
        </div>
      </div>
    </>
  );
}
