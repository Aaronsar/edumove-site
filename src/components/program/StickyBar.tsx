"use client";

import { ArrowRight, Phone } from "lucide-react";

export default function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-6xl mx-auto px-3 md:px-4 py-2.5 md:py-3 flex items-center justify-between gap-4">
        <p className="hidden lg:block text-sm text-[#334155] font-medium">
          Un expert EduMove vous rappelle sous 24h
        </p>
        <div className="flex items-center gap-2 md:gap-3 w-full lg:w-auto">
          <a
            href="https://candidature.edumove.fr"
            className="group flex-1 lg:flex-none inline-flex items-center justify-center gap-2 bg-[#EC680A] hover:bg-[#D45E09] text-white text-xs md:text-sm font-semibold px-4 md:px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#EC680A]/25 hover:gap-3"
          >
            Déposer ma candidature
            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="group flex-1 lg:flex-none inline-flex items-center justify-center gap-2 border-2 border-[#1B1D3A] text-[#1B1D3A] hover:bg-[#1B1D3A] hover:text-white text-xs md:text-sm font-semibold px-4 md:px-5 py-2.5 rounded-full transition-all duration-300"
          >
            <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
            Être recontacté
          </a>
        </div>
      </div>
    </div>
  );
}
