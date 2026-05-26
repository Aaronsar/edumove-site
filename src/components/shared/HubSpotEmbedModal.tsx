"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import DiplomaFormEmbed, {
  type DiplomaFormKey,
  DIPLOMA_FORMS,
} from "@/components/shared/DiplomaFormEmbed";

interface HubSpotEmbedModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Clé du form (qualification, contact, ...) ou slug complet */
  form?: DiplomaFormKey | string;
  /** Titre affiché au-dessus du form */
  title?: string;
  /** Sous-titre optionnel */
  subtitle?: string;
  // Backward-compat (les anciennes pages passent formId — ignoré désormais)
  formId?: string;
  portalId?: string;
  region?: string;
}

/**
 * Modale qui affiche un formulaire Edumove via le script JS Diploma Santé.
 * Le HTML est injecté dans notre DOM → on style via globals.css.
 */
export default function HubSpotEmbedModal({
  isOpen,
  onClose,
  form = "testLink",
  title = "Obtenir plus d'informations",
  subtitle = "Un conseiller Edumove vous rappelle sous 24h. 100% gratuit, sans engagement.",
}: HubSpotEmbedModalProps) {
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

  const slug = form in DIPLOMA_FORMS ? DIPLOMA_FORMS[form as DiplomaFormKey] : form;

  const modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hubspot-modal-title"
    >
      <div
        className="absolute inset-0 bg-[#1B1D3A]/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
          aria-label="Fermer"
          type="button"
        >
          <X className="w-5 h-5 text-[#1B1D3A]" />
        </button>

        <h2
          id="hubspot-modal-title"
          className="text-xl md:text-2xl font-bold text-[#1B1D3A] mb-2 pr-10"
        >
          {title}
        </h2>
        {subtitle && <p className="text-sm text-[#64748b] mb-6">{subtitle}</p>}

        <DiplomaFormEmbed form={slug} />
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
