"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { target: 3, prefix: "", suffix: "", label: "Universités partenaires" },
  { target: 500, prefix: "+", suffix: "", label: "Étudiants accompagnés" },
  { target: 5, prefix: "", suffix: "", label: "Filières de santé" },
  { target: 2, prefix: "", suffix: "", label: "Pays européens" },
  { target: 100, prefix: "", suffix: "%", label: "Financement possible" },
  { target: 0, prefix: "", suffix: "€", label: "À avancer" },
];

function AnimatedNumber({
  target,
  prefix,
  suffix,
  isVisible,
}: {
  target: number;
  prefix: string;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1800;

    let frameId: number;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      if (elapsed >= duration) {
        setCount(target);
        return;
      }
      const progress = elapsed / duration;
      const nextValue = Math.floor(progress * target);
      setCount(nextValue);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [isVisible, target]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          {/* Left title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-1 md:hidden">Edumove</p>
            <h2
              className="text-xl md:text-3xl font-bold leading-tight"
              style={{ color: "#615CA5" }}
            >
              En quelques chiffres<span className="hidden md:inline">.</span>
            </h2>
          </motion.div>

          {/* Stats cards */}
          <div className="flex-1 grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border-2 border-[#615ca5]/15 rounded-xl p-3 sm:p-4 text-center hover:border-[#ec680a]/40 hover:shadow-md transition-all"
              >
                <p className="text-xl md:text-2xl font-bold text-[#615ca5]">
                  <AnimatedNumber
                    target={s.target}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    isVisible={isInView}
                  />
                </p>
                <p className="text-[10px] md:text-xs text-[#334155] mt-1 leading-tight">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
