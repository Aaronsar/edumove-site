"use client";

import { useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface HubSpotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HubSpotModal({ isOpen, onClose }: HubSpotModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    containerRef.current.innerHTML = "";

    // Use the legacy HubSpot Forms API (renders inline, not in iframe)
    const legacyScript = "https://js-eu1.hsforms.net/forms/v2.js";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;

    const createForm = () => {
      if (w.hbspt?.forms?.create) {
        w.hbspt.forms.create({
          region: "eu1",
          portalId: "26711031",
          formId: "166547f8-2f86-46d3-b90f-14c77d57affa",
          target: "#hs-modal-form-container",
        });
      }
    };

    if (w.hbspt?.forms?.create) {
      createForm();
    } else {
      const existing = document.querySelector(`script[src="${legacyScript}"]`);
      if (!existing) {
        const script = document.createElement("script");
        script.src = legacyScript;
        script.charset = "utf-8";
        script.onload = () => setTimeout(createForm, 200);
        document.head.appendChild(script);
      } else {
        setTimeout(createForm, 200);
      }
    }
  }, [isOpen]);

  const handleBackdrop = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1B1D3A]/60 backdrop-blur-sm px-4"
      onClick={handleBackdrop}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          aria-label="Fermer"
        >
          <X className="w-4 h-4 text-[#1B1D3A]" />
        </button>

        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#EC680A] mb-2">
            Contact
          </p>
          <h3 className="text-2xl font-bold text-[#1B1D3A]">
            Être contacté
          </h3>
          <p className="text-sm text-[#64748b] mt-1">
            Un expert Edumove vous rappelle sous 2h (8h-20h).
          </p>
        </div>

        <div id="hs-modal-form-container" ref={containerRef} />
      </div>
    </div>,
    document.body
  );
}
