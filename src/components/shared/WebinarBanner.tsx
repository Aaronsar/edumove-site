"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { X, CalendarDays, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const STORAGE_KEY = "edumove_webinar_popup_dismissed";
const DELAY_MS = 30_000; // 30 secondes

export default function WebinarBanner() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Ne pas afficher sur la page webinaire elle-même
    if (pathname?.startsWith("/evenements/webinaire")) return;

    // Ne pas afficher si déjà fermé dans cette session
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => setShow(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, [pathname]);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  if (!show) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-[#1B1D3A]/50 backdrop-blur-sm px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors z-10 shadow-sm"
          aria-label="Fermer"
        >
          <X className="w-4 h-4 text-[#1B1D3A]" />
        </button>

        {/* Header band */}
        <div className="bg-[#1B1D3A] px-6 py-5 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Image
              src="/edumove-icon-orange.svg"
              alt="Edumove"
              width={24}
              height={24}
              className="h-5 w-auto"
            />
            <span className="text-white/40 text-sm">&times;</span>
            <Image
              src="/lcl-logo-officiel.svg"
              alt="LCL"
              width={40}
              height={16}
              className="h-4 w-auto"
            />
          </div>
          <p className="text-[#ec680a] text-xs font-semibold uppercase tracking-wider mb-1">
            Webinaire gratuit
          </p>
          <h3
            className="text-lg font-bold leading-snug"
            style={{ color: "#ffffff" }}
          >
            Comment financer ses études
            <br />
            de Santé en Europe ?
          </h3>
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          <div className="flex items-center gap-3 bg-[#fafbff] border border-[#e2e2ef] rounded-xl px-4 py-3 mb-4">
            <CalendarDays className="w-5 h-5 text-[#ec680a] shrink-0" />
            <div>
              <p className="text-sm font-semibold text-[#1B1D3A]">
                Mercredi 15 avril 2026 à 18h30
              </p>
              <p className="text-xs text-[#64748b]">
                Avec la participation exceptionnelle de LCL
              </p>
            </div>
          </div>

          <p className="text-sm text-[#334155] leading-relaxed mb-5">
            Découvrez toutes les solutions pour financer vos études de santé en
            Europe : prêt étudiant, bourses, aides... Inscription gratuite !
          </p>

          <Link
            href="/evenements/webinaire-financement-sante"
            onClick={handleClose}
            className="flex items-center justify-center gap-2 w-full bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-[#ec680a]/20"
          >
            Je m&apos;inscris au webinaire
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            onClick={handleClose}
            className="w-full text-center text-xs text-[#94A3B8] hover:text-[#64748b] mt-3 transition-colors cursor-pointer"
          >
            Non merci, peut-être plus tard
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
