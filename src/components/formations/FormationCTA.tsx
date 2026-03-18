"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

interface FormationCTAProps {
  filiereName: string;
}

export default function FormationCTA({ filiereName }: FormationCTAProps) {
  return (
    <section className="bg-[#1B1D3A] py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Interesse(e) par {filiereName}&nbsp;?
        </h2>
        <p className="text-lg text-white/80 mb-8 leading-relaxed">
          Un expert EduMove vous rappelle sous 24h pour etudier votre dossier
          gratuitement.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#EC680A] text-white font-semibold px-8 py-3.5 rounded-[5px] hover:bg-[#D45E09] transition-colors text-lg shadow-lg hover:shadow-xl"
        >
          <Phone className="w-5 h-5" />
          Etre contacte
        </Link>
      </div>
    </section>
  );
}
