"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import DiplomaFormEmbed, {
  type DiplomaFormKey,
} from "@/components/shared/DiplomaFormEmbed";

interface HubSpotModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Clé du form Diploma. Défaut : "contact" */
  form?: DiplomaFormKey | string;
  /** Titre affiché au-dessus du form */
  title?: string;
  /** Sous-titre optionnel */
  subtitle?: string;
}

/**
 * Modale globale "Être contacté".
 * Utilise le script JS Diploma Santé (hub.diploma-sante.fr) qui injecte le
 * form HTML dans notre DOM. Style Edumove appliqué via globals.css.
 */
export default function HubSpotModal({
  isOpen,
  onClose,
  form = "contact",
  title = "Être contacté par un conseiller",
  subtitle = "Un conseiller Edumove vous rappelle sous 24h. 100% gratuit, sans engagement.",
}: HubSpotModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1B1D3A]/60 backdrop-blur-sm px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
          aria-label="Fermer"
          type="button"
        >
          <X className="w-5 h-5 text-[#1B1D3A]" />
        </button>

        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#EC680A] mb-2">
            Contact
          </p>
          <h3 className="text-2xl font-bold text-[#1B1D3A]">{title}</h3>
          <p className="text-sm text-[#64748b] mt-1">{subtitle}</p>
        </div>

        <DiplomaFormEmbed form={form} />
      </div>
    </div>,
    document.body
  );
}
