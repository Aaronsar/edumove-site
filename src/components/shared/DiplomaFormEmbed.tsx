"use client";

import { useEffect, useRef } from "react";

/** Slugs des formulaires Edumove hostés sur hub.diploma-sante.fr */
export const DIPLOMA_FORMS = {
  qualification: "edumove-qualification-hsf00ec3",
  simulateurFinancement: "edumove-simulateur-financement-hsccb38b",
  webinaire1504: "edumove-webinaire-du-15-04-hsbcbeb9",
  quizzFac: "edumove-quizz-fac-hs8b744f",
  testLink: "edumove-test-link-hs611b26",
  contact: "edumove-contact-hs166547",
} as const;

export type DiplomaFormKey = keyof typeof DIPLOMA_FORMS;

const HOST = "https://hub.diploma-sante.fr";

interface DiplomaFormEmbedProps {
  /** Clé du form ou slug complet (ex: "contact" ou "edumove-contact-hs166547") */
  form: DiplomaFormKey | string;
  /** Classe CSS additionnelle sur le wrapper */
  className?: string;
}

/**
 * Embed un formulaire Diploma Santé via le script JS officiel.
 * Le script injecte le HTML directement dans notre DOM → CSS overridable
 * via `diploma-form-overrides.css` (chargé dans globals.css).
 *
 * Charge le script une seule fois par slug (cache global).
 */
const loadedScripts = new Set<string>();

export default function DiplomaFormEmbed({ form, className = "" }: DiplomaFormEmbedProps) {
  const slug = form in DIPLOMA_FORMS ? DIPLOMA_FORMS[form as DiplomaFormKey] : form;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scriptSrc = `${HOST}/api/forms/${slug}/embed.js`;

    // Si déjà chargé : le script auto-detecte les nouveaux containers
    if (loadedScripts.has(scriptSrc)) {
      // Force le script à re-scanner les containers
      // (Diploma's embed.js exports nothing — on déclenche un DOMContentLoaded-like)
      const existing = document.querySelector(
        `script[src="${scriptSrc}"]`
      ) as HTMLScriptElement | null;
      if (existing) {
        // Re-créer le script force la ré-exécution + détection du nouveau container
        existing.remove();
        loadedScripts.delete(scriptSrc);
      }
    }

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    document.body.appendChild(script);
    loadedScripts.add(scriptSrc);

    return () => {
      // On laisse le script dans le DOM (cache navigateur) mais on reset le
      // flag mounted sur le container pour qu'il puisse être remonté.
      if (containerRef.current) {
        delete containerRef.current.dataset.mounted;
      }
    };
  }, [slug]);

  return (
    <div className={`diploma-form-wrapper ${className}`}>
      <div
        ref={containerRef}
        data-diploma-form={slug}
      />
    </div>
  );
}
