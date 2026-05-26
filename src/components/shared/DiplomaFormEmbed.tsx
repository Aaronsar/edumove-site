"use client";

import { useCallback, useEffect, useState } from "react";
import { CheckCircle2, ChevronDown, Loader2 } from "lucide-react";

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

interface FieldOption {
  label: string;
  value: string;
  description?: string;
}

interface FormField {
  field_type:
    | "text"
    | "email"
    | "tel"
    | "number"
    | "select"
    | "checkbox"
    | "radio"
    | "textarea";
  field_key: string;
  label: string;
  placeholder?: string | null;
  help_text?: string | null;
  default_value?: string | null;
  required?: boolean;
  options?: FieldOption[];
  validation?: Record<string, unknown>;
  conditional?: unknown;
  order_index: number;
}

interface FormSchema {
  id: string;
  slug: string;
  title: string;
  subtitle?: string | null;
  submit_label?: string | null;
  success_message?: string | null;
  fields: FormField[];
}

interface DiplomaFormEmbedProps {
  /** Clé du form ou slug complet */
  form: DiplomaFormKey | string;
  /** Classe CSS additionnelle sur le wrapper */
  className?: string;
}

type FormState = "idle" | "submitting" | "success" | "error";

// Champs qu'on affiche en grille 2 colonnes côte à côte
// (uniquement les paires avec labels courts pour éviter les wraps moches)
const TWO_COL_PAIRS: Array<[string, string]> = [
  ["firstname", "lastname"],
];

const inputClass =
  "w-full px-3.5 py-2.5 border-[1.5px] border-[#E2E8F0] rounded-xl text-sm text-[#1B1D3A] bg-[#F8FAFC] placeholder:text-[#94A3B8] outline-none transition-all focus:border-[#EC680A] focus:ring-[3px] focus:ring-[#EC680A]/10 focus:bg-white";

const labelClass = "block text-[13px] font-semibold text-[#1B1D3A] mb-1";

function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const qs = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((k) => {
    const v = qs.get(k);
    if (v) utm[k] = v;
  });
  return utm;
}

/**
 * Affiche un formulaire Diploma Santé avec le style Edumove (labels au-dessus,
 * grid 2 cols pour Prénom/Nom, radio pour Oui/Non, bouton orange, etc.).
 *
 * - Récupère le schema depuis /api/forms/{slug}/public
 * - Submit vers /api/forms/{slug}/submit
 * - Aucune iframe, HTML 100% custom = style identique aux anciens forms
 */
export default function DiplomaFormEmbed({ form, className = "" }: DiplomaFormEmbedProps) {
  const slug = form in DIPLOMA_FORMS ? DIPLOMA_FORMS[form as DiplomaFormKey] : form;

  const [schema, setSchema] = useState<FormSchema | null>(null);
  const [schemaError, setSchemaError] = useState<string | null>(null);
  const [values, setValues] = useState<Record<string, string>>({});
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Fetch schema
  useEffect(() => {
    let cancelled = false;
    setSchema(null);
    setSchemaError(null);
    fetch(`${HOST}/api/forms/${encodeURIComponent(slug)}/public`)
      .then((r) => {
        if (!r.ok) throw new Error("Formulaire introuvable");
        return r.json();
      })
      .then((data: FormSchema) => {
        if (cancelled) return;
        setSchema(data);
        // Default values
        const defaults: Record<string, string> = {};
        data.fields.forEach((f) => {
          if (f.default_value) defaults[f.field_key] = f.default_value;
        });
        setValues(defaults);
      })
      .catch((err: Error) => {
        if (!cancelled) setSchemaError(err.message);
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const setValue = useCallback((key: string, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!schema) return;
    setFormState("submitting");
    setErrorMsg("");

    const payload = {
      data: values,
      hp: "", // honeypot
      source_url: typeof window !== "undefined" ? window.location.href : "",
      ...getUtmParams(),
    };

    try {
      const res = await fetch(
        `${HOST}/api/forms/${encodeURIComponent(slug)}/submit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      if (res.ok) {
        // Tracking — Meta Pixel + Google Ads (uniquement pour Qualification/Contact)
        if (typeof window !== "undefined") {
          const w = window as unknown as {
            fbq?: (cmd: string, evt: string) => void;
            gtag?: (cmd: string, evt: string, params: Record<string, string>) => void;
            dataLayer?: Array<Record<string, unknown>>;
          };
          if (typeof w.fbq === "function") w.fbq("track", "Contact");
          w.dataLayer = w.dataLayer || [];
          w.dataLayer.push({ event: "form_submit", form_slug: slug });
        }
        setFormState("success");
      } else {
        const data = await res.json().catch(() => null);
        setErrorMsg(
          (data && (data.message || data.error)) ||
            "Une erreur est survenue. Veuillez réessayer."
        );
        setFormState("error");
      }
    } catch {
      setErrorMsg("Erreur de connexion. Veuillez réessayer.");
      setFormState("error");
    }
  };

  // Loading state
  if (!schema && !schemaError) {
    return (
      <div className={`flex items-center justify-center py-12 ${className}`}>
        <Loader2 className="w-7 h-7 text-[#EC680A] animate-spin" />
      </div>
    );
  }

  if (schemaError) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <p className="text-sm text-[#EF4444]">{schemaError}</p>
      </div>
    );
  }

  // Success state
  if (formState === "success") {
    return (
      <div className={`flex flex-col items-center gap-3 py-8 ${className}`}>
        <CheckCircle2 className="w-14 h-14 text-green-500" />
        <p className="text-lg font-semibold text-[#1B1D3A]">Merci !</p>
        <p className="text-sm text-[#64748b] text-center max-w-sm">
          {schema?.success_message ??
            "Un conseiller Edumove vous recontactera sous 24h. À très vite !"}
        </p>
      </div>
    );
  }

  if (!schema) return null;

  // Sort fields by order_index
  const orderedFields = [...schema.fields].sort(
    (a, b) => a.order_index - b.order_index
  );

  // Group fields into "rows" : 2 cols pour les pairs définies, 1 col sinon
  const rows: FormField[][] = [];
  const used = new Set<string>();
  orderedFields.forEach((field) => {
    if (used.has(field.field_key)) return;
    const pair = TWO_COL_PAIRS.find(
      ([a, b]) => a === field.field_key || b === field.field_key
    );
    if (pair) {
      const [a, b] = pair;
      const fA = orderedFields.find((f) => f.field_key === a);
      const fB = orderedFields.find((f) => f.field_key === b);
      if (fA && fB) {
        rows.push([fA, fB]);
        used.add(a);
        used.add(b);
        return;
      }
    }
    rows.push([field]);
    used.add(field.field_key);
  });

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {rows.map((row, ri) => (
        <div
          key={ri}
          className={row.length === 2 ? "grid grid-cols-2 gap-3" : ""}
        >
          {row.map((field) => (
            <FieldRenderer
              key={field.field_key}
              field={field}
              value={values[field.field_key] ?? ""}
              onChange={(v) => setValue(field.field_key, v)}
            />
          ))}
        </div>
      ))}

      {formState === "error" && (
        <p className="text-[#EF4444] text-xs font-medium">{errorMsg}</p>
      )}

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
          schema.submit_label || "Envoyer"
        )}
      </button>

      <p className="text-[11px] text-[#94A3B8] text-center leading-relaxed">
        En soumettant ce formulaire, vous acceptez d&apos;être recontacté par Edumove.
        Vos données sont traitées par Diploma Santé.
      </p>
    </form>
  );
}

function FieldRenderer({
  field,
  value,
  onChange,
}: {
  field: FormField;
  value: string;
  onChange: (v: string) => void;
}) {
  const required = !!field.required;

  if (field.field_type === "select") {
    return (
      <div>
        <label className={labelClass}>
          {field.label}
          {required && <span className="text-[#EC680A]"> *</span>}
        </label>
        <div className="relative">
          <select
            required={required}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${inputClass} appearance-none cursor-pointer pr-9 ${!value ? "text-[#94A3B8]" : ""}`}
          >
            <option value="" disabled>
              {field.placeholder ?? "— Choisir —"}
            </option>
            {(field.options ?? []).map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8] pointer-events-none" />
        </div>
        {field.help_text && (
          <p className="text-[11px] text-[#94A3B8] mt-1">{field.help_text}</p>
        )}
      </div>
    );
  }

  if (field.field_type === "checkbox" || field.field_type === "radio") {
    // Si 2 options binaires (Oui/Non, Vrai/Faux), on rend des radios.
    // Sinon, vraies checkboxes (multi-select).
    const opts = field.options ?? [];
    const useRadio = field.field_type === "radio" || opts.length === 2;
    return (
      <div>
        <label className={labelClass}>
          {field.label}
          {required && <span className="text-[#EC680A]"> *</span>}
        </label>
        <div className="flex flex-wrap gap-6 mt-1.5">
          {opts.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-2 cursor-pointer text-sm text-[#1B1D3A]"
            >
              <input
                type={useRadio ? "radio" : "checkbox"}
                name={field.field_key}
                value={opt.value}
                required={useRadio && required}
                checked={useRadio ? value === opt.value : (value || "").split(",").includes(opt.value)}
                onChange={(e) => {
                  if (useRadio) {
                    onChange(e.target.value);
                  } else {
                    const set = new Set((value || "").split(",").filter(Boolean));
                    if (e.target.checked) set.add(opt.value);
                    else set.delete(opt.value);
                    onChange(Array.from(set).join(","));
                  }
                }}
                className="w-4 h-4 accent-[#EC680A] cursor-pointer"
              />
              {opt.label}
            </label>
          ))}
        </div>
        {field.help_text && (
          <p className="text-[11px] text-[#94A3B8] mt-1">{field.help_text}</p>
        )}
      </div>
    );
  }

  if (field.field_type === "textarea") {
    return (
      <div>
        <label className={labelClass}>
          {field.label}
          {required && <span className="text-[#EC680A]"> *</span>}
        </label>
        <textarea
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder ?? ""}
          rows={3}
          className={`${inputClass} resize-y`}
        />
      </div>
    );
  }

  // text, email, tel, number, ou tout autre type input
  const inputType =
    field.field_type === "email"
      ? "email"
      : field.field_type === "tel"
        ? "tel"
        : field.field_type === "number"
          ? "number"
          : "text";

  return (
    <div>
      <label className={labelClass}>
        {field.label}
        {required && <span className="text-[#EC680A]"> *</span>}
      </label>
      <input
        type={inputType}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder ?? ""}
        className={inputClass}
      />
      {field.help_text && (
        <p className="text-[11px] text-[#94A3B8] mt-1">{field.help_text}</p>
      )}
    </div>
  );
}
