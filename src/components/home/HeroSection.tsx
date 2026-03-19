"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const formations = [
  {
    name: "Dentaire",
    slug: "dentaire",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#ec680a" strokeWidth={0.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3C5.5 3 3.5 4 3.5 7c0 3 1 5.5 2 7.5s2 4 3 5c.7.7 1.5.8 2 .3.4-.4.5-1.2.5-2.3 0-1.5.3-2.5 1-2.5s1 1 1 2.5c0 1.1.1 1.9.5 2.3.5.5 1.3.4 2-.3 1-1 2-3 3-5s2-4.5 2-7.5c0-3-2-4-3.5-4-1.2 0-2.5.8-3.5 2-.3.4-.8.4-1 0C11.5 3.8 10.2 3 7 3z" />
      </svg>
    ),
  },
  {
    name: "Médecine",
    slug: "medecine",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#ec680a" strokeWidth={0.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    name: "Kinésithérapie",
    slug: "kinesitherapie",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#ec680a" strokeWidth={0.75} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <path d="M10 22V18L7.5 14.5" />
        <path d="M14 22V18L16.5 14.5" />
        <path d="M8 10L12 7L16 10" />
        <path d="M12 7V14" />
        <path d="M7 12H17" />
      </svg>
    ),
  },
  {
    name: "Pharmacie",
    slug: "pharmacie",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#ec680a" strokeWidth={0.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    name: "Vétérinaire",
    slug: "veterinaire",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#ec680a" strokeWidth={0.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 17c-1.5 1.5-3.5 2.5-5 2-1-.3-1.5-1.5-1-3 .5-1.5 2-3 4-4s3.5-1 4.5-.5c.7.4.8 1.2.3 2-.8 1.2-2 2.5-2.8 3.5Z" />
        <circle cx="7" cy="8" r="1.5" />
        <circle cx="11" cy="5" r="1.5" />
        <circle cx="15.5" cy="5.5" r="1.5" />
        <circle cx="18" cy="9" r="1.5" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const financableRef = useRef<HTMLDivElement>(null);
  const lclRef = useRef<HTMLSpanElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGGElement>(null);
  const [pathD, setPathD] = useState("");
  const [lclActive, setLclActive] = useState(false);
  const [showPath, setShowPath] = useState(false);

  useEffect(() => {
    // Desktop only (md breakpoint = 768px)
    if (window.innerWidth < 768) return;

    const timer = setTimeout(() => {
      if (!financableRef.current || !lclRef.current || !sectionRef.current) return;
      const section = sectionRef.current.getBoundingClientRect();
      const from = financableRef.current.getBoundingClientRect();
      const to = lclRef.current.getBoundingClientRect();

      const x1 = from.left + from.width / 2 - section.left;
      const y1 = from.bottom - section.top + 8;
      const x2 = to.left + to.width / 2 - section.left;
      const y2 = to.top - section.top;

      const cp1y = y1 + 40;
      const cp2y = y2 - 30;
      setPathD(`M ${x1} ${y1} C ${x1} ${cp1y}, ${x2} ${cp2y}, ${x2} ${y2}`);
      setShowPath(true);

      // Animate the dot along the path after delay
      setTimeout(() => {
        if (!pathRef.current || !dotRef.current) return;
        const pathEl = pathRef.current;
        const dotEl = dotRef.current;
        const length = pathEl.getTotalLength();

        animate(0, 1, {
          duration: 2,
          ease: [0.4, 0, 0.2, 1],
          onUpdate: (v) => {
            const pt = pathEl.getPointAtLength(v * length);
            dotEl.setAttribute("transform", `translate(${pt.x}, ${pt.y})`);
            dotEl.setAttribute("opacity", "1");
          },
          onComplete: () => {
            setLclActive(true);
            // Fade out the arrow
            animate(1, 0, {
              duration: 0.3,
              onUpdate: (v) => {
                dotEl.setAttribute("opacity", String(v));
              },
            });
          },
        });
      }, 1500);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* HERO — Full width dark navy */}
      <section ref={sectionRef} className="relative bg-[#1b1d3a] overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#615ca5]/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#ec680a]/10 blur-3xl" />
          <div className="absolute top-10 left-10 grid grid-cols-7 gap-2 opacity-[0.15]">
            {Array.from({ length: 49 }).map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-[#ec680a]" />)}
          </div>
          <div className="absolute bottom-10 right-10 grid grid-cols-5 gap-2 opacity-[0.1]">
            {Array.from({ length: 25 }).map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-white" />)}
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left — Text */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <Image src="/edumove-icon-orange.svg" alt="" width={20} height={20} />
                <span className="text-white/80 text-xs font-medium">N°1 de l&apos;accompagnement santé en Europe</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5" style={{ color: "white" }}>
                Envole-toi vers les{" "}
                <span className="text-[#ec680a]">meilleures universités</span>{" "}
                de santé d&apos;Europe
              </h1>

              <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
                Admis ou remboursé. Financement jusqu&apos;à 100%. Vous ne payez rien avant d&apos;être praticien.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#" className="text-center bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-6 py-3 rounded-[5px] transition-all hover:shadow-lg hover:shadow-[#ec680a]/20">
                  Déposer ma candidature
                </a>
                <a href="#" className="text-center border border-white/30 text-white font-medium px-6 py-3 rounded-[5px] hover:bg-white/10 transition-all">
                  Être contacté
                </a>
              </div>

              {/* Stats inline */}
              <div className="flex gap-8 mt-10">
                {[
                  { value: "3", label: "Universités" },
                  { value: "5", label: "Filières" },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-2xl md:text-3xl font-bold text-[#ec680a]">{s.value}</p>
                    <p className="text-white/50 text-xs">{s.label}</p>
                  </div>
                ))}
                <div ref={financableRef}>
                  <p className="text-2xl md:text-3xl font-bold text-[#ec680a]">100%</p>
                  <p className="text-white/50 text-xs">Finançable</p>
                </div>
              </div>
            </motion.div>

            {/* Right — Formation cards */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} id="formations" className="scroll-mt-20">
              <p className="text-[#ec680a] text-xs uppercase tracking-widest mb-4 font-semibold">Choisis ta formation</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {formations.map((f, i) => (
                  <motion.div key={f.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.07 }}>
                    <Link
                      href={`/formations/${f.slug}`}
                      className="group flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-[#ec680a]/40 transition-all duration-200"
                    >
                      <div className="mb-2 group-hover:scale-110 transition-transform">{f.icon}</div>
                      <span className="font-semibold text-white text-sm text-center">{f.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Trust logos */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-white/30 text-xs mb-3">Ils parlent de nous</p>
                <div className="flex flex-wrap items-center gap-4 opacity-40">
                  <span className="text-white font-black text-sm">BFMTV.</span>
                  <span className="text-white font-serif font-bold text-sm italic">Forbes</span>
                  <motion.span
                    ref={lclRef}
                    className="font-bold text-sm inline-block"
                    animate={
                      lclActive
                        ? {
                            color: "#ec680a",
                            scale: [1, 1.6, 1.3],
                            opacity: [0.4, 1, 1],
                          }
                        : { color: "#ffffff", scale: 1 }
                    }
                    transition={
                      lclActive
                        ? { duration: 0.5, ease: "easeOut" }
                        : {}
                    }
                  >
                    LCL
                  </motion.span>
                  <span className="text-white font-bold text-xs">L&apos;Étudiant</span>
                  <span className="text-white font-serif text-xs font-bold">Le Figaro</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Animated arrow from 100% Finançable to LCL — desktop only */}
          {showPath && pathD && (
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-20 hidden md:block"
              style={{ overflow: "visible" }}
            >
              {/* Dashed path trail */}
              <motion.path
                ref={pathRef}
                d={pathD}
                fill="none"
                stroke="#ec680a"
                strokeWidth="2"
                strokeDasharray="6 4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
              />

              {/* Cute arrow head that travels along the path */}
              <g ref={dotRef as React.RefObject<SVGGElement>} opacity="0">
                {/* Glow behind arrow */}
                <circle r="12" fill="#ec680a" opacity="0.2" />
                {/* Arrow body - cute circle */}
                <circle r="8" fill="#ec680a" />
                {/* Arrow face - eyes */}
                <circle cx="-2.5" cy="-1.5" r="1.2" fill="white" />
                <circle cx="2.5" cy="-1.5" r="1.2" fill="white" />
                <circle cx="-2.5" cy="-1.5" r="0.6" fill="#1b1d3a" />
                <circle cx="2.5" cy="-1.5" r="0.6" fill="#1b1d3a" />
                {/* Smile */}
                <path d="M -2 2 Q 0 4 2 2" fill="none" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
                {/* Speech bubble */}
                <g transform="translate(12, -20)">
                  <rect x="-2" y="-10" width="58" height="18" rx="8" fill="white" />
                  <polygon points="2,-1 8,8 10,-1" fill="white" />
                  <text x="26" y="2" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#1b1d3a">
                    100% finançable !
                  </text>
                </g>
              </g>
            </svg>
          )}
        </div>
      </section>
    </>
  );
}
