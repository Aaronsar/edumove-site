"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Loader2, CheckCircle2 } from "lucide-react";

interface HubSpotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PORTAL_ID = "26711031";
const FORM_ID = "166547f8-2f86-46d3-b90f-14c77d57affa";
const SUBMIT_URL = `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`;

type FormState = "idle" | "submitting" | "success" | "error";

export default function HubSpotModal({ isOpen, onClose }: HubSpotModalProps) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus first input on open
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      setTimeout(() => firstInputRef.current?.focus(), 100);
    }
    if (isOpen) {
      setFormState("idle");
      setErrorMsg("");
    }
  }, [isOpen]);

  // Lock body scroll & Escape key
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

  const handleBackdrop = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: [
            { objectTypeId: "0-1", name: "firstname", value: firstname },
            { objectTypeId: "0-1", name: "lastname", value: lastname },
            { objectTypeId: "0-1", name: "email", value: email },
            { objectTypeId: "0-1", name: "phone", value: phone },
          ],
          context: {
            pageUri: window.location.href,
            pageName: document.title,
          },
        }),
      });

      if (res.ok) {
        setFormState("success");
        setFirstname("");
        setLastname("");
        setEmail("");
        setPhone("");
      } else {
        const data = await res.json().catch(() => null);
        setErrorMsg(
          data?.message || "Une erreur est survenue. Veuillez réessayer."
        );
        setFormState("error");
      }
    } catch {
      setErrorMsg("Erreur de connexion. Veuillez réessayer.");
      setFormState("error");
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1B1D3A]/60 backdrop-blur-sm px-4"
      onClick={handleBackdrop}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          aria-label="Fermer"
        >
          <X className="w-4 h-4 text-[#1B1D3A]" />
        </button>

        {/* Header */}
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

        {formState === "success" ? (
          <div className="flex flex-col items-center gap-3 py-8">
            <CheckCircle2 className="w-14 h-14 text-green-500" />
            <p className="text-lg font-semibold text-[#1B1D3A]">
              Merci !
            </p>
            <p className="text-sm text-[#64748b] text-center">
              Un expert Edumove vous recontactera très rapidement.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 bg-[#1B1D3A] text-white text-sm font-semibold rounded-xl hover:bg-[#2a2d52] transition-colors"
            >
              Fermer
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Prénom + Nom */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[13px] font-semibold text-[#1B1D3A] mb-1">
                  Prénom <span className="text-[#EC680A]">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  required
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="Votre prénom"
                  className="w-full px-3.5 py-2.5 border-[1.5px] border-[#E2E8F0] rounded-xl text-sm text-[#1B1D3A] bg-[#F8FAFC] placeholder:text-[#94A3B8] outline-none transition-all focus:border-[#EC680A] focus:ring-[3px] focus:ring-[#EC680A]/10 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#1B1D3A] mb-1">
                  Nom <span className="text-[#EC680A]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Votre nom"
                  className="w-full px-3.5 py-2.5 border-[1.5px] border-[#E2E8F0] rounded-xl text-sm text-[#1B1D3A] bg-[#F8FAFC] placeholder:text-[#94A3B8] outline-none transition-all focus:border-[#EC680A] focus:ring-[3px] focus:ring-[#EC680A]/10 focus:bg-white"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[13px] font-semibold text-[#1B1D3A] mb-1">
                Email <span className="text-[#EC680A]">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full px-3.5 py-2.5 border-[1.5px] border-[#E2E8F0] rounded-xl text-sm text-[#1B1D3A] bg-[#F8FAFC] placeholder:text-[#94A3B8] outline-none transition-all focus:border-[#EC680A] focus:ring-[3px] focus:ring-[#EC680A]/10 focus:bg-white"
              />
            </div>

            {/* Téléphone */}
            <div>
              <label className="block text-[13px] font-semibold text-[#1B1D3A] mb-1">
                Téléphone <span className="text-[#EC680A]">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+33 6 12 34 56 78"
                className="w-full px-3.5 py-2.5 border-[1.5px] border-[#E2E8F0] rounded-xl text-sm text-[#1B1D3A] bg-[#F8FAFC] placeholder:text-[#94A3B8] outline-none transition-all focus:border-[#EC680A] focus:ring-[3px] focus:ring-[#EC680A]/10 focus:bg-white"
              />
            </div>

            {/* Error */}
            {formState === "error" && (
              <p className="text-[#EF4444] text-xs font-medium">{errorMsg}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={formState === "submitting"}
              className="w-full flex items-center justify-center gap-2 bg-[#EC680A] hover:bg-[#D45E09] disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-semibold py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-[#EC680A]/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              {formState === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Envoi en cours…
                </>
              ) : (
                "Être recontacté"
              )}
            </button>

            {/* Legal */}
            <p className="text-[11px] text-[#94A3B8] text-center leading-relaxed">
              En soumettant ce formulaire, vous acceptez d&apos;être recontacté
              par Edumove. Vos données sont traitées conformément à notre
              politique de confidentialité.
            </p>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}
