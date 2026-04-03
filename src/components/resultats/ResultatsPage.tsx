"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ChevronRight,
  Users,
  CheckCircle2,
  GraduationCap,
  Globe,
  Landmark,
  Euro,
  Stethoscope,
  Shield,
  Briefcase,
} from "lucide-react";
import ContactButton from "@/components/shared/ContactButton";
import StickyBar from "@/components/program/StickyBar";
import FinancingBanner from "@/components/shared/FinancingBanner";

/* ── Animated number (same pattern as StatsSection) ── */
function AnimatedNumber({
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
      setCount(Math.floor((elapsed / duration) * target));
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

/* ── Progress bar with animation ── */
function ProgressBar({
  label,
  value,
  delay,
  isVisible,
}: {
  label: string;
  value: number;
  delay: number;
  isVisible: boolean;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#1B1D3A]">{label}</span>
        <span className="text-sm font-bold text-[#615CA5]">{value}%</span>
      </div>
      <div className="h-3 bg-[#e2e2ef] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#615CA5] to-[#EC680A]"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

/* ── Data ── */
const STATS = [
  { icon: Users, target: 500, prefix: "+", suffix: "", label: "Étudiants accompagnés" },
  { icon: CheckCircle2, target: 98, prefix: "", suffix: "%", label: "Taux d'admission" },
  { icon: Landmark, target: 3, prefix: "", suffix: "", label: "Universités partenaires" },
  { icon: GraduationCap, target: 5, prefix: "", suffix: "", label: "Filières de santé" },
  { icon: Globe, target: 2, prefix: "", suffix: "", label: "Pays européens" },
  { icon: Euro, target: 100, prefix: "", suffix: "%", label: "Financement possible" },
];

const FILIERES = [
  { label: "Médecine", value: 97 },
  { label: "Dentaire", value: 98 },
  { label: "Kinésithérapie", value: 99 },
  { label: "Pharmacie", value: 98 },
  { label: "Vétérinaire", value: 97 },
];

const DIPLOMES = [
  {
    icon: Shield,
    title: "Processus de Bologne",
    desc: "Tous nos diplômes sont délivrés par des universités accréditées et reconnus dans les 49 pays signataires du processus de Bologne.",
  },
  {
    icon: Stethoscope,
    title: "Exercice en France",
    desc: "Nos diplômés peuvent exercer en France après inscription à l'Ordre professionnel correspondant, comme tout diplômé européen.",
  },
  {
    icon: Briefcase,
    title: "Employabilité > 95%",
    desc: "Les professionnels de santé formés en Europe affichent un taux d'insertion professionnelle supérieur à 95% dans les 6 mois.",
  },
];

export default function ResultatsPage() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  const barRef = useRef(null);
  const barInView = useInView(barRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full bg-[#1b1d3a] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#615ca5]/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#ec680a]/10 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-10 md:py-14">
          <nav className="flex items-center gap-1.5 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Nos résultats</span>
          </nav>
          <div className="max-w-2xl">
            <h1
              className="text-3xl md:text-4xl font-bold leading-tight mb-4"
              style={{ color: "#ffffff" }}
            >
              Nos résultats parlent d&apos;eux-mêmes
            </h1>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              Depuis sa création, Edumove accompagne des centaines d&apos;étudiants
              vers leurs études de santé en Europe. Voici nos chiffres.
            </p>
          </div>
        </div>
      </section>

      {/* ── CHIFFRES CLÉS ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6" ref={statsRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-2">
              Edumove en chiffres
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A]">
              Chiffres clés
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#fafbff] border border-[#e2e2ef] rounded-xl p-6 text-center hover:border-[#ec680a]/40 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#615CA5]/10 flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-6 h-6 text-[#615CA5]" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-[#1B1D3A]">
                  <AnimatedNumber
                    target={s.target}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    isVisible={statsInView}
                  />
                </p>
                <p className="text-sm text-[#64748b] mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAUX DE RÉUSSITE PAR FILIÈRE ── */}
      <section className="py-12 md:py-16 bg-[#fafbff]">
        <div className="max-w-3xl mx-auto px-6" ref={barRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-2">
              Par filière
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A]">
              Taux de passage en année supérieure
            </h2>
            <p className="text-[#64748b] text-sm mt-2">
              Pourcentage d&apos;étudiants admis qui valident leur année.
            </p>
          </motion.div>

          <div className="space-y-5">
            {FILIERES.map((f, i) => (
              <ProgressBar
                key={f.label}
                label={f.label}
                value={f.value}
                delay={i * 0.12}
                isVisible={barInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── RECONNAISSANCE DES DIPLÔMES ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-2">
              Diplômes reconnus
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A]">
              Reconnaissance des diplômes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {DIPLOMES.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#fafbff] border border-[#e2e2ef] rounded-xl p-6 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EC680A]/10 flex items-center justify-center mb-4">
                  <d.icon className="w-6 h-6 text-[#EC680A]" />
                </div>
                <h3 className="font-bold text-[#1B1D3A] mb-2">{d.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINANCING ── */}
      <FinancingBanner />

      {/* ── CTA ── */}
      <section className="relative py-10 md:py-16 bg-[#1B1D3A] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec680a] via-[#615ca5] to-[#ec680a]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: "#ffffff" }}
          >
            Rejoignez nos +500 étudiants
          </h2>
          <p className="text-gray-300 mb-8">
            Commencez votre parcours vers les études de santé en Europe. Un
            expert vous rappelle sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://candidature.edumove.fr"
              className="inline-block bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-8 py-3.5 rounded-[5px] transition-all hover:shadow-xl hover:shadow-[#ec680a]/20"
            >
              Déposer ma candidature
            </a>
            <ContactButton className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-8 py-3.5 rounded-[5px] hover:bg-white/10 transition-all">
              Être contacté
            </ContactButton>
          </div>
        </div>
      </section>

      <StickyBar />
    </>
  );
}
