/** Icônes filières — mêmes que la home, minimalistes SVG */

interface FiliereIconProps {
  slug: string;
  className?: string;
  stroke?: string;
}

const svgBase = { fill: "none" as const, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export default function FiliereIcon({
  slug,
  className = "w-7 h-7",
  stroke = "currentColor",
}: FiliereIconProps) {
  const svgProps = { ...svgBase, className, stroke, strokeWidth: 0.75 };

  switch (slug) {
    case "dentaire":
      return (
        <svg viewBox="0 0 24 24" {...svgProps}>
          <path d="M7 3C5.5 3 3.5 4 3.5 7c0 3 1 5.5 2 7.5s2 4 3 5c.7.7 1.5.8 2 .3.4-.4.5-1.2.5-2.3 0-1.5.3-2.5 1-2.5s1 1 1 2.5c0 1.1.1 1.9.5 2.3.5.5 1.3.4 2-.3 1-1 2-3 3-5s2-4.5 2-7.5c0-3-2-4-3.5-4-1.2 0-2.5.8-3.5 2-.3.4-.8.4-1 0C11.5 3.8 10.2 3 7 3z" />
        </svg>
      );
    case "medecine":
      return (
        <svg viewBox="0 0 24 24" {...svgProps}>
          <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      );
    case "kinesitherapie":
      return (
        <svg viewBox="0 0 24 24" {...svgProps}>
          <circle cx="12" cy="5" r="2" />
          <path d="M10 22V18L7.5 14.5" />
          <path d="M14 22V18L16.5 14.5" />
          <path d="M8 10L12 7L16 10" />
          <path d="M12 7V14" />
          <path d="M7 12H17" />
        </svg>
      );
    case "pharmacie":
      return (
        <svg viewBox="0 0 24 24" {...svgProps}>
          <path d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      );
    case "veterinaire":
      return (
        <svg viewBox="0 0 24 24" {...svgProps}>
          <path d="M12 17c-1.5 1.5-3.5 2.5-5 2-1-.3-1.5-1.5-1-3 .5-1.5 2-3 4-4s3.5-1 4.5-.5c.7.4.8 1.2.3 2-.8 1.2-2 2.5-2.8 3.5Z" />
          <circle cx="7" cy="8" r="1.5" />
          <circle cx="11" cy="5" r="1.5" />
          <circle cx="15.5" cy="5.5" r="1.5" />
          <circle cx="18" cy="9" r="1.5" />
        </svg>
      );
    case "prepa-dentaire":
      return (
        <svg viewBox="0 0 24 24" {...svgProps}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M8 7h8" />
          <path d="M8 11h8" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" {...svgProps}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
  }
}
