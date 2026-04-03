"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { Euro, GraduationCap, Building2, TrendingUp, Calculator, ChevronRight, Lock } from "lucide-react";
import Script from "next/script";

/* ═══════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════ */

type Program = {
  filiere: string;
  university: string;
  city: string;
  tuitionPerYear: number;
  duration: number; // years
  salaryAfterMin: number; // €/month net
  salaryAfterMax: number;
};

const PROGRAMS: Program[] = [
  // Médecine
  { filiere: "Médecine", university: "LINK Campus", city: "Rome", tuitionPerYear: 19800, duration: 6, salaryAfterMin: 3500, salaryAfterMax: 5500 },
  { filiere: "Médecine", university: "Universidad Europea", city: "Madrid", tuitionPerYear: 21480, duration: 6, salaryAfterMin: 3500, salaryAfterMax: 5500 },
  // Dentaire
  { filiere: "Dentaire", university: "UCJC", city: "Madrid", tuitionPerYear: 18420, duration: 5, salaryAfterMin: 5000, salaryAfterMax: 7000 },
  { filiere: "Dentaire", university: "Universidad Europea", city: "Madrid", tuitionPerYear: 19200, duration: 5, salaryAfterMin: 5000, salaryAfterMax: 7000 },
  { filiere: "Dentaire", university: "LINK Campus", city: "Rome", tuitionPerYear: 19800, duration: 6, salaryAfterMin: 5000, salaryAfterMax: 7000 },
  // Kinésithérapie
  { filiere: "Kinésithérapie", university: "UCJC", city: "Madrid", tuitionPerYear: 9420, duration: 4, salaryAfterMin: 2500, salaryAfterMax: 4000 },
  { filiere: "Kinésithérapie", university: "Universidad Europea", city: "Madrid", tuitionPerYear: 10020, duration: 4, salaryAfterMin: 2500, salaryAfterMax: 4000 },
  { filiere: "Kinésithérapie", university: "LINK Campus", city: "Rome", tuitionPerYear: 11900, duration: 3, salaryAfterMin: 2500, salaryAfterMax: 4000 },
  // Pharmacie
  { filiere: "Pharmacie", university: "LINK Campus", city: "Rome", tuitionPerYear: 7900, duration: 5, salaryAfterMin: 2800, salaryAfterMax: 4500 },
  { filiere: "Pharmacie", university: "UCJC", city: "Madrid", tuitionPerYear: 10140, duration: 5, salaryAfterMin: 2800, salaryAfterMax: 4500 },
  { filiere: "Pharmacie", university: "Universidad Europea", city: "Madrid", tuitionPerYear: 12120, duration: 5, salaryAfterMin: 2800, salaryAfterMax: 4500 },
  // Vétérinaire
  { filiere: "Vétérinaire", university: "Universidad Europea", city: "Madrid", tuitionPerYear: 19500, duration: 5, salaryAfterMin: 2800, salaryAfterMax: 5000 },
];

const FILIERES = [...new Set(PROGRAMS.map((p) => p.filiere))];

// LCL Loan constants
const TAEG = 0.0201;
const MAX_LOAN = 75000;
const MAX_MONTHS = 120;

// Monthly living costs
const LIVING_COSTS: Record<string, number> = {
  Madrid: 900,
  Rome: 800,
};

function monthlyPayment(principal: number, annualRate: number, months: number): number {
  const r = annualRate / 12;
  if (r === 0) return principal / months;
  return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
}

/* ═══════════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */

export default function CostSimulator() {
  const [unlocked, setUnlocked] = useState(false);
  const [selectedFiliere, setSelectedFiliere] = useState<string>("");
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [loanMonths, setLoanMonths] = useState(120);

  // Check if already unlocked (localStorage)
  useEffect(() => {
    if (localStorage.getItem("sim-unlocked") === "1") setUnlocked(true);
  }, []);

  // Listen for HubSpot form submission
  const handleMessage = useCallback((event: MessageEvent) => {
    if (event.data?.type === "hsFormCallback" && event.data?.eventName === "onFormSubmitted") {
      localStorage.setItem("sim-unlocked", "1");
      setUnlocked(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleMessage]);

  const universities = useMemo(
    () => PROGRAMS.filter((p) => p.filiere === selectedFiliere),
    [selectedFiliere]
  );

  const result = useMemo(() => {
    if (!selectedProgram) return null;
    const p = selectedProgram;
    const totalTuition = p.tuitionPerYear * p.duration;
    const livingCost = (LIVING_COSTS[p.city] || 850) * 10 * p.duration; // 10 months/year
    const totalCost = totalTuition + livingCost;
    const loanAmount = Math.min(totalCost, MAX_LOAN);
    const monthly = monthlyPayment(loanAmount, TAEG, loanMonths);
    const salaryAvg = (p.salaryAfterMin + p.salaryAfterMax) / 2;
    const ratioMin = ((monthly / p.salaryAfterMax) * 100).toFixed(0);
    const ratioMax = ((monthly / p.salaryAfterMin) * 100).toFixed(0);
    const insuranceMin = 5;
    const insuranceMax = Math.round(loanAmount / 5000);

    return {
      totalTuition,
      livingCost,
      totalCost,
      loanAmount,
      monthly: Math.round(monthly),
      ratioMin: Number(ratioMin),
      ratioMax: Number(ratioMax),
      salaryAvg: Math.round(salaryAvg),
      insuranceMin,
      insuranceMax: Math.max(insuranceMax, insuranceMin),
      needsMultipleLoans: totalCost > MAX_LOAN,
      remaining: totalCost > MAX_LOAN ? totalCost - MAX_LOAN : 0,
    };
  }, [selectedProgram, loanMonths]);

  return (
    <section className="py-16 px-6">
      <Script src="https://js-eu1.hsforms.net/forms/embed/26711031.js" strategy="lazyOnload" />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#EC680A]/10 text-[#EC680A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Calculator className="w-4 h-4" />
            Simulateur exclusif
          </div>
          <h2 className="text-[#1B1D3A] text-3xl md:text-4xl font-bold mb-3">
            Simulez le coût de vos études
          </h2>
          <p className="text-[#64748b] text-base max-w-xl mx-auto">
            Choisissez votre filière et votre université pour voir le coût total, le prêt du LCL et votre mensualité après le diplôme.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-8">
          {/* LEFT — Selection */}
          <div className="space-y-6">
            {/* Step 1: Filière */}
            <div>
              <label className="flex items-center gap-2 text-[#1B1D3A] font-semibold text-sm mb-3">
                <span className="w-6 h-6 rounded-full bg-[#EC680A] text-white text-xs font-bold flex items-center justify-center">1</span>
                Choisissez votre filière
              </label>
              <div className="grid grid-cols-2 gap-2">
                {FILIERES.map((f) => (
                  <button
                    key={f}
                    onClick={() => { setSelectedFiliere(f); setSelectedProgram(null); }}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                      selectedFiliere === f
                        ? "bg-[#1B1D3A] text-white shadow-lg"
                        : "bg-[#f5f5fb] text-[#1B1D3A] hover:bg-[#eeedf5] border border-gray-100"
                    }`}
                  >
                    <GraduationCap className={`w-4 h-4 mb-1 ${selectedFiliere === f ? "text-[#EC680A]" : "text-[#615CA5]"}`} />
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: University */}
            {selectedFiliere && (
              <div className="animate-[fadeUp_0.3s_ease-out]">
                <label className="flex items-center gap-2 text-[#1B1D3A] font-semibold text-sm mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#EC680A] text-white text-xs font-bold flex items-center justify-center">2</span>
                  Choisissez votre université
                </label>
                <div className="space-y-2">
                  {universities.map((u) => (
                    <button
                      key={`${u.university}-${u.city}`}
                      onClick={() => setSelectedProgram(u)}
                      className={`w-full px-4 py-3.5 rounded-xl text-left transition-all flex items-center justify-between ${
                        selectedProgram === u
                          ? "bg-[#1B1D3A] text-white shadow-lg"
                          : "bg-[#f5f5fb] text-[#1B1D3A] hover:bg-[#eeedf5] border border-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Building2 className={`w-4 h-4 ${selectedProgram === u ? "text-[#EC680A]" : "text-[#615CA5]"}`} />
                        <div>
                          <p className="font-medium text-sm">{u.university}</p>
                          <p className={`text-xs ${selectedProgram === u ? "text-white/60" : "text-[#94a3b8]"}`}>{u.city} — {u.tuitionPerYear.toLocaleString("fr-FR")} €/an — {u.duration} ans</p>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${selectedProgram === u ? "text-[#EC680A]" : "text-[#94a3b8]"}`} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Loan duration */}
            {selectedProgram && (
              <div className="animate-[fadeUp_0.3s_ease-out]">
                <label className="flex items-center gap-2 text-[#1B1D3A] font-semibold text-sm mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#EC680A] text-white text-xs font-bold flex items-center justify-center">3</span>
                  Durée de remboursement : {loanMonths} mois ({Math.round(loanMonths / 12)} ans)
                </label>
                <input
                  type="range"
                  min={12}
                  max={MAX_MONTHS}
                  step={12}
                  value={loanMonths}
                  onChange={(e) => setLoanMonths(Number(e.target.value))}
                  className="w-full accent-[#EC680A] h-2 rounded-full cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#94a3b8] mt-1">
                  <span>12 mois</span>
                  <span>120 mois</span>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT — Results */}
          <div>
            {!selectedProgram ? (
              <div className="h-full flex items-center justify-center bg-[#f5f5fb] rounded-2xl border border-gray-100 p-12 text-center">
                <div>
                  <Euro className="w-12 h-12 text-[#EC680A]/20 mx-auto mb-4" />
                  <p className="text-[#1B1D3A] font-bold text-lg mb-1">Votre simulation</p>
                  <p className="text-[#64748b] text-sm">Sélectionnez une filière et une université pour voir le résultat</p>
                </div>
              </div>
            ) : !unlocked ? (
              /* Gate: form to unlock results */
              <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden animate-[fadeUp_0.4s_ease-out]">
                {/* Teaser header */}
                <div className="bg-[#1B1D3A] px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-lg">{selectedProgram.filiere}</p>
                      <p className="text-white/60 text-sm">{selectedProgram.university} — {selectedProgram.city}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/30 text-2xl font-bold">? ? ? €</p>
                      <p className="text-white/40 text-xs">Coût total estimé</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#EC680A]/10 flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 text-[#EC680A]" />
                  </div>
                  <h3 className="text-[#1B1D3A] font-bold text-xl mb-2">Découvrez vos résultats</h3>
                  <p className="text-[#64748b] text-sm mb-6">Remplissez le formulaire pour obtenir votre simulation personnalisée : coût total, mensualité, prêt LCL et retour sur investissement.</p>
                  <div
                    className="hs-form-frame text-left"
                    data-region="eu1"
                    data-form-id="ccb38b22-168d-4340-ab90-c9b27a40212b"
                    data-portal-id="26711031"
                  />
                </div>
              </div>
            ) : result && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden animate-[fadeUp_0.4s_ease-out]">
                {/* Header */}
                <div className="bg-[#1B1D3A] px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-lg">{selectedProgram.filiere}</p>
                      <p className="text-white/60 text-sm">{selectedProgram.university} — {selectedProgram.city}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#EC680A] font-bold text-2xl">{result.totalCost.toLocaleString("fr-FR")} €</p>
                      <p className="text-white/40 text-xs">Coût total estimé</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-5">
                  {/* Cost breakdown */}
                  <div>
                    <p className="text-[#94a3b8] text-[10px] uppercase tracking-wider mb-2">Détail des coûts</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#64748b]">Scolarité ({selectedProgram.tuitionPerYear.toLocaleString("fr-FR")} €/an × {selectedProgram.duration} ans)</span>
                        <span className="text-[#1B1D3A] font-semibold">{result.totalTuition.toLocaleString("fr-FR")} €</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#64748b]">Vie courante estimée ({selectedProgram.city})</span>
                        <span className="text-[#1B1D3A] font-semibold">{result.livingCost.toLocaleString("fr-FR")} €</span>
                      </div>
                      <div className="h-px bg-gray-100" />
                      <div className="flex justify-between text-sm font-bold">
                        <span className="text-[#1B1D3A]">Total estimé</span>
                        <span className="text-[#EC680A]">{result.totalCost.toLocaleString("fr-FR")} €</span>
                      </div>
                    </div>
                  </div>

                  {/* LCL Loan */}
                  <div className="bg-[#1B1D3A] rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <img src="/lcl-logo-officiel.svg" alt="LCL" className="h-6 brightness-200" />
                      <span className="text-white/60 text-sm">Prêt Solution Études</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <p className="text-[#EC680A] font-bold text-lg">{result.loanAmount.toLocaleString("fr-FR")} €</p>
                        <p className="text-white/40 text-[10px]">Montant du prêt</p>
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">2,01%</p>
                        <p className="text-white/40 text-[10px]">TAEG</p>
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">{loanMonths} mois</p>
                        <p className="text-white/40 text-[10px]">Remboursement</p>
                      </div>
                    </div>
                    {result.needsMultipleLoans && (
                      <p className="text-[#EC680A]/80 text-xs mt-3 bg-[#EC680A]/10 rounded-lg px-3 py-2">
                        💡 Le coût dépasse 75 000 € — possibilité de souscrire plusieurs prêts sur la durée des études. Montant adaptable selon vos besoins.
                      </p>
                    )}
                  </div>

                  {/* During studies */}
                  <div className="bg-[#f5f5fb] rounded-xl p-4">
                    <p className="text-[#94a3b8] text-[10px] uppercase tracking-wider mb-2">Pendant les études</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[#1B1D3A] font-bold text-sm">0 € de capital à rembourser</p>
                        <p className="text-[#64748b] text-xs">Seule l&apos;assurance : {result.insuranceMin}—{result.insuranceMax} €/mois</p>
                      </div>
                      <span className="text-[#EC680A] text-xs font-semibold bg-[#EC680A]/10 px-3 py-1 rounded-full">Sans frais de dossier</span>
                    </div>
                  </div>

                  {/* After diploma */}
                  <div>
                    <p className="text-[#94a3b8] text-[10px] uppercase tracking-wider mb-2">Après le diplôme</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#64748b]">Mensualité estimée</span>
                        <span className="text-[#1B1D3A] font-bold text-lg">~{result.monthly.toLocaleString("fr-FR")} €/mois</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#64748b]">Salaire net estimé</span>
                        <span className="text-[#1B1D3A] font-semibold">{selectedProgram.salaryAfterMin.toLocaleString("fr-FR")}—{selectedProgram.salaryAfterMax.toLocaleString("fr-FR")} €/mois</span>
                      </div>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-green-700 font-bold text-sm">{result.ratioMin}—{result.ratioMax}% du salaire</p>
                        <p className="text-green-600 text-xs">pour rembourser votre prêt</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-green-700 font-bold text-sm">Investissement rentable</p>
                      <p className="text-green-600 text-xs">dès les premières années</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="https://candidature.edumove.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3.5 bg-[#EC680A] hover:bg-[#D45E09] text-white font-semibold rounded-xl transition-all text-center text-sm"
                  >
                    Déposer ma candidature →
                  </a>

                  <p className="text-[#94a3b8] text-[10px] text-center">
                    *Simulation indicative basée sur un taux de 2,01% TAEG. La banque se réserve le droit d&apos;étude au cas par cas. Prêt Solution Études du LCL, partenaire Edumove.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
