"use client";

import Link from "next/link";

interface FormationCTAProps {
  filiereName: string;
}

export default function FormationCTA({ filiereName }: FormationCTAProps) {
  return (
    <section className="relative py-10 md:py-16 bg-[#1B1D3A] overflow-hidden" data-program-cta>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec680a] via-[#615ca5] to-[#ec680a]" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#ffffff" }}>
          Intéressé(e) par {filiereName}&nbsp;?
        </h2>
        <p className="text-gray-300 mb-8">
          Un expert Edumove vous rappelle sous 24h pour étudier votre dossier gratuitement.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-8 py-3.5 rounded-[5px] transition-all hover:shadow-xl hover:shadow-[#ec680a]/20"
        >
          Être contacté →
        </Link>
        <p className="text-gray-400 mt-4 text-sm">+33 1 89 74 42 57</p>
      </div>
    </section>
  );
}
