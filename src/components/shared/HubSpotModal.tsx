"use client";

import { useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const HUBSPOT_FORM_CSS = `
  /* Font */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  body, form, input, select, textarea, label, span, p, div {
    font-family: 'Poppins', sans-serif !important;
  }

  /* Labels */
  .hs-form label {
    font-size: 13px !important;
    font-weight: 600 !important;
    color: #1B1D3A !important;
    margin-bottom: 4px !important;
  }

  /* Required asterisk */
  .hs-form-required {
    color: #EC680A !important;
  }

  /* Inputs */
  .hs-form input[type="text"],
  .hs-form input[type="email"],
  .hs-form input[type="tel"],
  .hs-form input[type="number"],
  .hs-form textarea,
  .hs-form select,
  .hs-input {
    width: 100% !important;
    padding: 10px 14px !important;
    border: 1.5px solid #E2E8F0 !important;
    border-radius: 12px !important;
    font-size: 14px !important;
    color: #1B1D3A !important;
    background: #F8FAFC !important;
    transition: border-color 0.2s, box-shadow 0.2s !important;
    outline: none !important;
    box-shadow: none !important;
    font-family: 'Poppins', sans-serif !important;
    box-sizing: border-box !important;
  }

  .hs-form input:focus,
  .hs-form select:focus,
  .hs-form textarea:focus {
    border-color: #EC680A !important;
    box-shadow: 0 0 0 3px rgba(236, 104, 10, 0.1) !important;
    background: #FFFFFF !important;
  }

  /* Field spacing */
  .hs-form-field {
    margin-bottom: 16px !important;
  }

  /* Fieldset */
  fieldset {
    max-width: 100% !important;
  }
  fieldset.form-columns-2 .hs-form-field {
    width: 48% !important;
  }

  /* Submit button */
  .hs-button.primary,
  input[type="submit"],
  button[type="submit"] {
    font-family: 'Poppins', sans-serif !important;
    width: 100% !important;
    padding: 12px 24px !important;
    background: #EC680A !important;
    color: #FFFFFF !important;
    border: none !important;
    border-radius: 12px !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    cursor: pointer !important;
    transition: background 0.3s, box-shadow 0.3s, transform 0.15s !important;
    box-shadow: none !important;
    margin-top: 8px !important;
  }

  .hs-button.primary:hover,
  input[type="submit"]:hover,
  button[type="submit"]:hover {
    background: #D45E09 !important;
    box-shadow: 0 8px 20px rgba(236, 104, 10, 0.2) !important;
    transform: translateY(-1px) !important;
  }

  .hs-button.primary:active,
  input[type="submit"]:active,
  button[type="submit"]:active {
    transform: translateY(0) !important;
  }

  /* Error messages */
  .hs-error-msg {
    font-family: 'Poppins', sans-serif !important;
    color: #EF4444 !important;
    font-size: 12px !important;
    margin-top: 4px !important;
  }

  .hs-input.error {
    border-color: #EF4444 !important;
  }

  /* Legal / GDPR */
  .legal-consent-container {
    font-size: 11px !important;
    color: #94A3B8 !important;
    margin-top: 12px !important;
  }

  .legal-consent-container a {
    color: #615CA5 !important;
  }

  /* Hide branding */
  .hubspot-link__container {
    display: none !important;
  }

  /* Phone field */
  .hs-phone .hs-input {
    border-radius: 12px !important;
  }

  /* Select dropdown arrow fix */
  .hs-form select {
    appearance: auto !important;
    -webkit-appearance: auto !important;
  }

  /* Checkboxes / radio */
  .hs-form-checkbox label,
  .hs-form-radio label {
    font-weight: 400 !important;
    font-size: 13px !important;
  }

  /* Success message */
  .submitted-message {
    font-family: 'Poppins', sans-serif !important;
    color: #1B1D3A !important;
    font-size: 15px !important;
    text-align: center !important;
    padding: 20px !important;
  }
`;

interface HubSpotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HubSpotModal({ isOpen, onClose }: HubSpotModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    containerRef.current.innerHTML = "";

    const legacyScript = "https://js-eu1.hsforms.net/forms/v2.js";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;

    const injectStylesIntoIframe = () => {
      const container = containerRef.current;
      if (!container) return;

      // Check for iframe (HubSpot may render in one)
      const iframe = container.querySelector("iframe") as HTMLIFrameElement;
      if (iframe) {
        const tryInject = () => {
          try {
            const iframeDoc =
              iframe.contentDocument || iframe.contentWindow?.document;
            if (iframeDoc) {
              const existing = iframeDoc.getElementById("edumove-hs-styles");
              if (!existing) {
                const style = iframeDoc.createElement("style");
                style.id = "edumove-hs-styles";
                style.textContent = HUBSPOT_FORM_CSS;
                iframeDoc.head.appendChild(style);
              }
            }
          } catch {
            // Cross-origin iframe — can't inject
          }
        };

        // Try immediately and also on iframe load
        tryInject();
        iframe.addEventListener("load", tryInject);

        // Retry a few times as the iframe content might load async
        const retries = [300, 600, 1000, 2000];
        retries.forEach((delay) => setTimeout(tryInject, delay));
      }
    };

    const createForm = () => {
      if (w.hbspt?.forms?.create) {
        w.hbspt.forms.create({
          region: "eu1",
          portalId: "26711031",
          formId: "166547f8-2f86-46d3-b90f-14c77d57affa",
          target: "#hs-modal-form-container",
          onFormReady: () => {
            // Small delay to let HubSpot finish rendering
            setTimeout(injectStylesIntoIframe, 100);
          },
        });
      }
    };

    if (w.hbspt?.forms?.create) {
      createForm();
    } else {
      const existing = document.querySelector(
        `script[src="${legacyScript}"]`
      );
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
