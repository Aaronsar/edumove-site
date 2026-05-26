"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Script from "next/script";
import { X } from "lucide-react";

interface HubSpotEmbedModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** HubSpot form UUID (data-form-id) */
  formId?: string;
  /** HubSpot portal ID (data-portal-id) */
  portalId?: string;
  /** HubSpot region (data-region) — e.g. "eu1", "na1" */
  region?: string;
  /** Modal title shown above the form */
  title?: string;
  /** Optional subtitle */
  subtitle?: string;
}

const DEFAULT_FORM_ID = "611b26a5-4a4d-46eb-8e33-14e3b8a12ccf";
const DEFAULT_PORTAL_ID = "26711031";
const DEFAULT_REGION = "eu1";

/**
 * Modal that renders an embedded HubSpot form using HubSpot's native embed
 * script. The script auto-detects `.hs-form-frame` divs and injects the form.
 */
export default function HubSpotEmbedModal({
  isOpen,
  onClose,
  formId = DEFAULT_FORM_ID,
  portalId = DEFAULT_PORTAL_ID,
  region = DEFAULT_REGION,
  title = "Obtenir plus d'informations",
  subtitle = "Un conseiller Edumove vous rappelle sous 24h. 100% gratuit, sans engagement.",
}: HubSpotEmbedModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll while modal is open
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

  const modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hubspot-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1B1D3A]/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal panel */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
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
        {subtitle && (
          <p className="text-sm text-[#64748b] mb-6">{subtitle}</p>
        )}

        {/* HubSpot embed: script + frame div */}
        <Script
          src={`https://js-${region}.hsforms.net/forms/embed/${portalId}.js`}
          strategy="afterInteractive"
        />
        <div
          className="hs-form-frame"
          data-region={region}
          data-form-id={formId}
          data-portal-id={portalId}
        />
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
