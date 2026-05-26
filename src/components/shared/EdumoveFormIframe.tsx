"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

/** Slugs des formulaires Edumove hostés sur hub.diploma-sante.fr */
export const EDUMOVE_FORMS = {
  qualification: "edumove-qualification-hsf00ec3",
  simulateurFinancement: "edumove-simulateur-financement-hsccb38b",
  webinaire1504: "edumove-webinaire-du-15-04-hsbcbeb9",
  quizzFac: "edumove-quizz-fac-hs8b744f",
  testLink: "edumove-test-link-hs611b26",
  contact: "edumove-contact-hs166547",
} as const;

export type EdumoveFormKey = keyof typeof EDUMOVE_FORMS;

const BASE_URL = "https://hub.diploma-sante.fr/forms";

interface EdumoveFormIframeProps {
  /** Clé du form (qualification, contact, ...) ou slug complet */
  form: EdumoveFormKey | string;
  /** Hauteur de l'iframe (px). Défaut : 900 */
  height?: number;
  /** Classe CSS du wrapper */
  className?: string;
  /** Titre accessible (lu par les lecteurs d'écran) */
  title?: string;
}

/**
 * Iframe responsive d'un formulaire Edumove (hub.diploma-sante.fr).
 * - Loading lazy par défaut
 * - Spinner pendant le chargement
 * - 100% de largeur
 */
export default function EdumoveFormIframe({
  form,
  height = 900,
  className = "",
  title = "Formulaire Edumove",
}: EdumoveFormIframeProps) {
  const [loaded, setLoaded] = useState(false);

  const slug = form in EDUMOVE_FORMS ? EDUMOVE_FORMS[form as EdumoveFormKey] : form;
  const src = `${BASE_URL}/${slug}`;

  return (
    <div className={`relative w-full ${className}`} style={{ minHeight: height }}>
      {!loaded && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-2xl"
          aria-hidden
        >
          <Loader2 className="w-7 h-7 text-[#EC680A] animate-spin" />
        </div>
      )}
      <iframe
        src={src}
        title={title}
        width="100%"
        height={height}
        style={{ border: 0, display: "block", width: "100%" }}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
