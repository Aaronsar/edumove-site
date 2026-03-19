"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ContactButton from "@/components/shared/ContactButton";
import type { Filiere } from "@/data/filieres";

/* ---------- SVG icon per filiere (80px, white) ---------- */

function FiliereIcon({ slug }: { slug: string }) {
  const common = "w-20 h-20 text-white";

  switch (slug) {
    case "medecine":
      return (
        <svg className={common} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stethoscope */}
          <path d="M25 18C25 18 20 18 20 25V42C20 50 26 56 34 56H36C44 56 50 50 50 42V38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M55 18C55 18 60 18 60 25V38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <circle cx="57" cy="42" r="5" stroke="currentColor" strokeWidth="3" />
          <circle cx="57" cy="42" r="2" fill="currentColor" />
          <path d="M22 14V22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M58 14V22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <circle cx="22" cy="12" r="3" fill="currentColor" />
          <circle cx="58" cy="12" r="3" fill="currentColor" />
        </svg>
      );
    case "dentaire":
      return (
        <svg className={common} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Tooth */}
          <path d="M28 20C28 14 34 10 40 10C46 10 52 14 52 20C52 26 56 32 56 40C56 48 52 58 48 66C46 70 44 70 42 64L40 56L38 64C36 70 34 70 32 66C28 58 24 48 24 40C24 32 28 26 28 20Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M36 20C38 24 42 24 44 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "kinesitherapie":
      return (
        <svg className={common} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Person running */}
          <circle cx="52" cy="14" r="6" stroke="currentColor" strokeWidth="3" />
          <path d="M38 28L48 24L56 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 44L38 28L50 40L42 56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M42 56L36 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M50 40L58 54L66 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M38 28L24 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          {/* Motion lines */}
          <path d="M18 30H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <path d="M20 38H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <path d="M22 46H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        </svg>
      );
    case "pharmacie":
      return (
        <svg className={common} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Mortar and pestle */}
          <ellipse cx="40" cy="56" rx="22" ry="8" stroke="currentColor" strokeWidth="3" />
          <path d="M18 56V48C18 36 28 28 40 28C52 28 62 36 62 48V56" stroke="currentColor" strokeWidth="3" />
          <path d="M40 28L58 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <circle cx="60" cy="10" r="3" fill="currentColor" />
          {/* Cross */}
          <path d="M36 42H44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M40 38V46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case "veterinaire":
      return (
        <svg className={common} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Paw */}
          <ellipse cx="40" cy="52" rx="12" ry="10" stroke="currentColor" strokeWidth="3" />
          <ellipse cx="26" cy="36" rx="5" ry="7" stroke="currentColor" strokeWidth="3" transform="rotate(-15 26 36)" />
          <ellipse cx="54" cy="36" rx="5" ry="7" stroke="currentColor" strokeWidth="3" transform="rotate(15 54 36)" />
          <ellipse cx="34" cy="24" rx="4" ry="6" stroke="currentColor" strokeWidth="3" transform="rotate(-5 34 24)" />
          <ellipse cx="46" cy="24" rx="4" ry="6" stroke="currentColor" strokeWidth="3" transform="rotate(5 46 24)" />
        </svg>
      );
    case "prepa-dentaire":
      return (
        <svg className={common} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Book open */}
          <path d="M40 22V66" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M40 22C40 22 32 16 18 16V60C32 60 40 66 40 66" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M40 22C40 22 48 16 62 16V60C48 60 40 66 40 66" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {/* Lines on pages */}
          <path d="M24 30H34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          <path d="M24 38H32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          <path d="M24 46H30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          <path d="M46 30H56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          <path d="M48 38H56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          <path d="M50 46H56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="3" />
          <path d="M32 40H48M40 32V48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
  }
}

/* ---------- Large decorative illustration per filiere (250x250, semi-transparent) ---------- */

function FiliereIllustration({ slug }: { slug: string }) {
  const common = "w-[250px] h-[250px] text-white/10";

  switch (slug) {
    case "medecine":
      return (
        <svg className={common} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Medical cross with heartbeat line */}
          <rect x="95" y="30" width="60" height="190" rx="8" fill="currentColor" />
          <rect x="30" y="95" width="190" height="60" rx="8" fill="currentColor" />
          {/* Heartbeat line */}
          <polyline points="20,125 70,125 85,90 100,160 115,80 130,170 145,125 200,125 230,125" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
        </svg>
      );
    case "dentaire":
      return (
        <svg className={common} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Tooth with dental tools */}
          <path d="M85 55C85 35 105 15 125 15C145 15 165 35 165 55C165 75 175 95 175 120C175 145 165 175 155 205C150 218 145 218 140 200L125 160L110 200C105 218 100 218 95 205C85 175 75 145 75 120C75 95 85 75 85 55Z" fill="currentColor" />
          {/* Mirror tool */}
          <circle cx="45" cy="80" r="20" stroke="currentColor" strokeWidth="4" />
          <path d="M60 95L90 125" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          {/* Explorer tool */}
          <path d="M190 60L210 180" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M210 180L215 195" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case "kinesitherapie":
      return (
        <svg className={common} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Body silhouette with movement lines */}
          <circle cx="125" cy="40" r="22" fill="currentColor" />
          <path d="M125 62V140" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          <path d="M125 80L85 120" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          <path d="M125 80L165 120" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          <path d="M125 140L95 210" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          <path d="M125 140L155 210" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          {/* Movement arcs */}
          <path d="M50 60C50 60 60 90 50 130" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          <path d="M35 70C35 70 45 95 35 125" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          <path d="M200 60C200 60 190 90 200 130" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          <path d="M215 70C215 70 205 95 215 125" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        </svg>
      );
    case "pharmacie":
      return (
        <svg className={common} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Pill bottles */}
          <rect x="30" y="80" width="55" height="120" rx="8" fill="currentColor" />
          <rect x="30" y="80" width="55" height="30" rx="8" fill="currentColor" opacity="0.6" />
          <rect x="40" y="70" width="35" height="15" rx="4" fill="currentColor" />
          {/* Second bottle */}
          <rect x="100" y="60" width="55" height="140" rx="8" fill="currentColor" />
          <rect x="100" y="60" width="55" height="35" rx="8" fill="currentColor" opacity="0.6" />
          <rect x="110" y="48" width="35" height="17" rx="4" fill="currentColor" />
          {/* Pill capsule */}
          <rect x="175" y="110" width="50" height="24" rx="12" fill="currentColor" />
          <rect x="175" y="110" width="25" height="24" rx="12" fill="currentColor" opacity="0.6" />
          {/* Another pill */}
          <circle cx="195" cy="170" r="16" fill="currentColor" />
          <path d="M183 158L207 182" stroke="currentColor" strokeWidth="2" opacity="0.5" />
          {/* Cross on bottle */}
          <path d="M120 120H140" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
          <path d="M130 110V130" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
        </svg>
      );
    case "veterinaire":
      return (
        <svg className={common} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Animal silhouettes */}
          {/* Dog */}
          <path d="M40 160C40 160 50 120 70 120C80 120 85 130 90 130C95 130 95 110 105 110C115 110 120 140 120 160" fill="currentColor" />
          <path d="M40 160L35 190" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M55 158L50 190" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M105 158L100 190" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M120 160L115 190" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <circle cx="60" cy="118" r="4" fill="currentColor" />
          {/* Cat */}
          <path d="M160 90L155 70L165 85L175 65L175 85C190 85 200 100 200 120C200 140 195 145 195 145L195 175" fill="currentColor" />
          <path d="M165 145L165 175" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <path d="M175 145L175 175" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <path d="M185 145L185 175" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <path d="M195 145L200 170C205 175 210 180 215 178" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          {/* Paw prints */}
          <circle cx="80" cy="220" r="4" fill="currentColor" opacity="0.5" />
          <circle cx="73" cy="212" r="2.5" fill="currentColor" opacity="0.5" />
          <circle cx="87" cy="212" r="2.5" fill="currentColor" opacity="0.5" />
          <circle cx="80" cy="207" r="2.5" fill="currentColor" opacity="0.5" />
          <circle cx="140" cy="230" r="4" fill="currentColor" opacity="0.5" />
          <circle cx="133" cy="222" r="2.5" fill="currentColor" opacity="0.5" />
          <circle cx="147" cy="222" r="2.5" fill="currentColor" opacity="0.5" />
          <circle cx="140" cy="217" r="2.5" fill="currentColor" opacity="0.5" />
        </svg>
      );
    case "prepa-dentaire":
      return (
        <svg className={common} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Open book with tooth */}
          <path d="M125 60V220" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M125 60C125 60 100 40 40 40V200C100 200 125 220 125 220" fill="currentColor" opacity="0.3" />
          <path d="M125 60C125 60 150 40 210 40V200C150 200 125 220 125 220" fill="currentColor" opacity="0.3" />
          <path d="M125 60C125 60 100 40 40 40V200C100 200 125 220 125 220" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M125 60C125 60 150 40 210 40V200C150 200 125 220 125 220" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          {/* Tooth on right page */}
          <path d="M155 95C155 85 162 78 170 78C178 78 185 85 185 95C185 105 190 112 190 122C190 132 186 145 182 158C180 163 178 163 176 156L170 138L164 156C162 163 160 163 158 158C154 145 150 132 150 122C150 112 155 105 155 95Z" fill="currentColor" opacity="0.5" />
          {/* Lines on left page */}
          <path d="M55 80H110" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
          <path d="M55 100H105" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
          <path d="M55 120H100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
          <path d="M55 140H95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
          <path d="M55 160H90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="125" cy="125" r="80" stroke="currentColor" strokeWidth="6" />
          <path d="M95 125H155M125 95V155" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
  }
}

interface FormationHeroProps {
  filiere: Filiere;
  stats?: {
    campusCount: number;
    durationText: string;
    priceText: string;
    uniCount: number;
    countriesText: string;
  };
}

export default function FormationHero({ filiere, stats }: FormationHeroProps) {
  return (
    <section className="relative w-full bg-[#1b1d3a] overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#615ca5]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#ec680a]/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-10 md:py-14">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-white/60 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/#formations" className="hover:text-white transition-colors">Formations</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-medium">{filiere.name}</span>
        </nav>

        {/* 2-column layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left — Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: "white" }}>
              {filiere.fullName}
            </h1>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 max-w-md">
              {filiere.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://candidature.edumove.fr" className="text-center bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-6 py-3 rounded-[5px] transition-all hover:shadow-lg hover:shadow-[#ec680a]/20">
                Déposer ma candidature
              </a>
              <ContactButton className="text-center border border-white/30 text-white font-medium px-6 py-3 rounded-[5px] hover:bg-white/10 transition-all" />
            </div>
          </div>

          {/* Right — Highlights card */}
          <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4">
              {stats && (
                <>
                  <div className="bg-white/[0.06] rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-[#ec680a]">{stats.campusCount}</p>
                    <p className="text-white/50 text-[11px] mt-1">Campus</p>
                  </div>
                  <div className="bg-white/[0.06] rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-[#ec680a]">{stats.durationText}</p>
                    <p className="text-white/50 text-[11px] mt-1">De formation</p>
                  </div>
                  <div className="bg-white/[0.06] rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-[#ec680a]">{stats.uniCount}</p>
                    <p className="text-white/50 text-[11px] mt-1">Universités</p>
                  </div>
                  <div className="bg-white/[0.06] rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-[#ec680a]">{stats.countriesText}</p>
                    <p className="text-white/50 text-[11px] mt-1">Pays</p>
                  </div>
                </>
              )}
            </div>
            {/* Key selling points */}
            <div className="mt-4 space-y-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#ec680a]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#ec680a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <span className="text-white/70 text-sm">Sans concours PASS/LAS</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#ec680a]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#ec680a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <span className="text-white/70 text-sm">Diplôme reconnu dans toute l&apos;UE</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#ec680a]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#ec680a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <span className="text-white/70 text-sm">Financement jusqu&apos;à 100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
