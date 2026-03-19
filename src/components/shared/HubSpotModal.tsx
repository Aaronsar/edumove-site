"use client";

import { useEffect, useCallback, useRef } from "react";
import { X } from "lucide-react";

interface HubSpotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HubSpotModal({ isOpen, onClose }: HubSpotModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    // Reset container with fresh hs-form-frame div
    containerRef.current.innerHTML = "";
    const formDiv = document.createElement("div");
    formDiv.className = "hs-form-frame";
    formDiv.setAttribute("data-region", "eu1");
    formDiv.setAttribute("data-form-id", "166547f8-2f86-46d3-b90f-14c77d57affa");
    formDiv.setAttribute("data-portal-id", "26711031");
    containerRef.current.appendChild(formDiv);

    // Remove any previous embed script so we can re-add it
    const scriptSrc = "https://js-eu1.hsforms.net/forms/embed/26711031.js";
    document.querySelectorAll(`script[src="${scriptSrc}"]`).forEach((s) => s.remove());

    // Add fresh script to trigger re-scan
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.defer = true;
    document.head.appendChild(script);
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

  return (
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

        <div ref={containerRef} />
      </div>
    </div>
  );
}
