"use client";

import FiliereIcon from "@/components/shared/FiliereIcon";
import { Check } from "lucide-react";

const rows = [
  { filiere: "Médecine", filiereSlug: "medecine", link: "19 800 €/an", ucjc: "COMPLET", ueLow: "21 480 €/an", ueHigh: "21 480 €/an", cheapest: "link" },
  { filiere: "Dentaire", filiereSlug: "dentaire", link: "19 800 €/an", ucjc: "18 420 €/an", ueLow: "19 200 €/an", ueHigh: "20 821 €/an", cheapest: "ucjc" },
  { filiere: "Kinésithérapie", filiereSlug: "kinesitherapie", link: "11 900 €/an", ucjc: "9 420 €/an", ueLow: "10 020 €/an", ueHigh: "10 080 €/an", cheapest: "ucjc" },
  { filiere: "Pharmacie", filiereSlug: "pharmacie", link: "7 900 €/an", ucjc: "10 140 €/an", ueLow: "12 120 €/an", ueHigh: "—", cheapest: "link" },
  { filiere: "Vétérinaire", filiereSlug: "veterinaire", link: "—", ucjc: "—", ueLow: "19 500 €/an", ueHigh: "—", cheapest: "ue" },
  { filiere: "Prépa Dentaire", filiereSlug: "prepa-dentaire", link: "—", ucjc: "—", ueLow: "17 000 €/an", ueHigh: "—", cheapest: "ue" },
];

function Cell({ value, isCheapest, isComplet }: { value: string; isCheapest: boolean; isComplet: boolean }) {
  if (isComplet) return <span className="text-[#1B1D3A] opacity-70 line-through text-sm">COMPLET</span>;
  if (value === "—") return <span className="text-gray-300">—</span>;
  return (
    <span className={`text-sm font-semibold ${isCheapest ? "text-[#EC680A]" : "text-[#1B1D3A]"}`}>
      {isCheapest && <span className="inline-flex items-center bg-[#EC680A]/10 text-[#EC680A] text-xs px-2 py-0.5 rounded-full mr-1 font-bold"><Check className="w-3 h-3" /></span>}
      {value}
    </span>
  );
}

export default function TarifsComparatif() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm uppercase tracking-widest text-[#EC680A] mb-3 font-semibold">Tarifs</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "#1B1D3A" }}>Comparatif des tarifs par filière</h2>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-[#1B1D3A]">
                <th className="text-left text-white font-semibold py-3 px-3 sm:px-5 text-xs sm:text-sm">Fili&egrave;re</th>
                <th className="text-center text-white font-semibold py-3 px-2 sm:px-5 text-xs sm:text-sm">LINK</th>
                <th className="text-center text-white font-semibold py-3 px-2 sm:px-5 text-xs sm:text-sm">UCJC</th>
                <th className="text-center text-white font-semibold py-3 px-2 sm:px-5 text-xs sm:text-sm">UE min</th>
                <th className="text-center text-white font-semibold py-3 px-2 sm:px-5 text-xs sm:text-sm">UE max</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <td className="py-3 px-3 sm:px-5 font-semibold text-[#1B1D3A] text-sm">
                    <span className="inline-flex items-center gap-1.5 sm:gap-2 mr-1 sm:mr-2">
                      <FiliereIcon slug={r.filiereSlug} className="w-4 h-4 sm:w-5 sm:h-5 text-[#EC680A]" stroke="#EC680A" />
                    </span>
                    {r.filiere}
                  </td>
                  <td className="py-3 px-2 sm:px-5 text-center"><Cell value={r.link} isCheapest={r.cheapest === "link"} isComplet={false} /></td>
                  <td className="py-3 px-2 sm:px-5 text-center"><Cell value={r.ucjc} isCheapest={r.cheapest === "ucjc"} isComplet={r.ucjc === "COMPLET"} /></td>
                  <td className="py-3 px-2 sm:px-5 text-center"><Cell value={r.ueLow} isCheapest={r.cheapest === "ue"} isComplet={false} /></td>
                  <td className="py-3 px-2 sm:px-5 text-center"><Cell value={r.ueHigh} isCheapest={false} isComplet={false} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
