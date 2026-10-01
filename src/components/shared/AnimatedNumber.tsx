"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Compteur animé SEO-safe : la valeur finale est rendue côté serveur (HTML
 * servi, lisible par les crawlers sans JS — GPTBot, ClaudeBot, Perplexity…).
 * Jamais de 0 dans le HTML.
 *
 * Côté client, l'animation 0 → target est purement cosmétique : elle n'est
 * armée que si l'élément est sous la ligne de flottaison au montage (sinon on
 * garde la valeur finale, pas de flash « 500 → 0 ») et si l'utilisateur n'a
 * pas demandé à réduire les animations.
 */
export default function AnimatedNumber({
  target,
  prefix = "",
  suffix = "",
  isVisible,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  isVisible: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(target);
  const [armed, setArmed] = useState(false);

  // Avant le premier paint : si l'élément n'est pas encore à l'écran, on le
  // remet à 0 pour pouvoir l'animer quand il y entrera.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || target === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset volontaire avant paint
    setCount(0);
    setArmed(true);
  }, [target]);

  useEffect(() => {
    if (!armed || !isVisible) return;

    const duration = 1800;
    let frameId: number;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      if (elapsed >= duration) {
        setCount(target);
        return;
      }
      setCount(Math.floor((elapsed / duration) * target));
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [armed, isVisible, target]);

  return (
    <span ref={ref} data-value={target}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
