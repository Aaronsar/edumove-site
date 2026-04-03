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
  MapPin,
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

const DESTINATIONS = [
  {
    city: "Madrid",
    country: "Espagne",
    universities: "Universidad Europea, UCJC",
    filieres: "Médecine, dentaire, kinésithérapie, pharmacie, vétérinaire",
    href: "/vie-etudiante/madrid",
  },
  {
    city: "Valence",
    country: "Espagne",
    universities: "Universidad Europea",
    filieres: "Dentaire, vétérinaire",
    href: "/vie-etudiante/valence",
  },
  {
    city: "Malaga",
    country: "Espagne",
    universities: "Universidad Europea",
    filieres: "Dentaire",
    href: "/vie-etudiante/malaga",
  },
  {
    city: "Rome",
    country: "Italie",
    universities: "LINK Campus University",
    filieres: "Médecine, kinésithérapie, pharmacie",
    href: "/vie-etudiante/rome",
  },
];

const FAQ_RESULTATS = [
  {
    q: "Quel est le taux de réussite des étudiants Edumove ?",
    a: "Le taux de passage en année supérieure de nos étudiants se situe entre 97% et 99% selon les filières. Ce résultat s'explique par un accompagnement personnalisé en amont (orientation, préparation aux tests) et un suivi tout au long du parcours.",
  },
  {
    q: "Les diplômes obtenus en Espagne ou en Italie sont-ils reconnus en France ?",
    a: "Oui. Nos universités partenaires délivrent des diplômes conformes au processus de Bologne, reconnus dans les 49 pays signataires. Pour les professions de santé réglementées (médecin, dentiste, kinésithérapeute, pharmacien, vétérinaire), la reconnaissance est encadrée par la directive européenne 2005/36/CE. Les diplômés peuvent exercer en France après inscription auprès de l'Ordre professionnel correspondant.",
  },
  {
    q: "Combien d'étudiants Edumove a-t-il accompagnés ?",
    a: "Depuis sa création, Edumove a accompagné plus de 500 étudiants vers des études de santé en Espagne et en Italie, dans 5 filières : médecine, dentaire, kinésithérapie, pharmacie et vétérinaire.",
  },
  {
    q: "Quel est le taux d'admission des candidats accompagnés par Edumove ?",
    a: "98% des étudiants accompagnés par Edumove obtiennent leur admission dans l'une de nos universités partenaires. Ce taux élevé est le résultat d'une sélection en amont et d'une préparation rigoureuse aux tests et entretiens d'admission.",
  },
  {
    q: "Dans quelles villes peut-on étudier avec Edumove ?",
    a: "Edumove propose des formations dans 4 villes européennes : Madrid, Valence et Malaga en Espagne, et Rome en Italie. Chaque destination offre des filières et des universités différentes pour s'adapter à votre projet.",
    link: { href: "/formations/medecine", label: "Voir toutes les formations" },
  },
  {
    q: "Peut-on exercer en tant que médecin en France avec un diplôme espagnol ou italien ?",
    a: "Oui. Un diplôme de médecine obtenu dans une université européenne reconnue permet d'exercer en France. Il faut s'inscrire au Conseil National de l'Ordre des Médecins et, dans certains cas, réaliser des démarches de reconnaissance. Edumove accompagne ses étudiants dans ces démarches.",
  },
  {
    q: "Quelles sont les universités partenaires d'Edumove ?",
    a: "Edumove travaille avec 3 universités partenaires : l'Universidad Europea (Madrid, Valence, Malaga), l'UCJC — Universidad Camilo José Cela (Madrid) et LINK Campus University (Rome). Toutes sont accréditées et reconnues par les autorités de leur pays.",
    link: { href: "/universites/universidad-europea", label: "Découvrir les universités" },
  },
  {
    q: "Quel est le taux d'employabilité des diplômés ?",
    a: "Les professionnels de santé formés dans nos universités partenaires affichent un taux d'insertion professionnelle supérieur à 95% dans les 6 mois suivant l'obtention du diplôme. Les métiers de santé restent parmi les plus demandés en France et en Europe.",
  },
];

/* ── FAQ Accordion ── */
function FAQItem({
  faq,
  index,
  open,
  setOpen,
}: {
  faq: { q: string; a: string; link?: { href: string; label: string } };
  index: number;
  open: number | null;
  setOpen: (i: number | null) => void;
}) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all ${
        open === index ? "border-[#ec680a]/60 shadow-sm" : "border-gray-200"
      }`}
    >
      <button
        onClick={() => setOpen(open === index ? null : index)}
        className="w-full flex items-center justify-between p-5 h-[68px] text-left hover:bg-gray-50/50 transition-colors"
      >
        <span className="font-semibold text-[#1b1d3a] text-sm pr-4 line-clamp-1">
          {faq.q}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm transition-all ${
            open === index
              ? "bg-[#ec680a] text-white"
              : "bg-gray-100 text-[#334155]"
          }`}
        >
          {open === index ? "\u2212" : "+"}
        </span>
      </button>
      {open === index && (
        <div className="px-5 pb-5">
          <p className="text-[#334155] text-sm leading-relaxed">{faq.a}</p>
          {faq.link && (
            <Link
              href={faq.link.href}
              className="inline-block mt-2 text-sm text-[#615CA5] hover:text-[#ec680a] underline underline-offset-2 font-medium transition-colors"
            >
              {faq.link.label} &rarr;
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default function ResultatsPage() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  const barRef = useRef(null);
  const barInView = useInView(barRef, { once: true, margin: "-80px" });

  const [faqOpen, setFaqOpen] = useState<number | null>(null);

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

      {/* ── SEO: POURQUOI CHOISIR EDUMOVE ── */}
      <section className="py-12 md:py-16 bg-[#fafbff]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-6">
            Pourquoi choisir Edumove pour ses études de santé en Europe ?
          </h2>
          <div className="space-y-4 text-[#334155] text-sm leading-relaxed">
            <p>
              Chaque année, des milliers d&apos;étudiants français se heurtent à la
              sélection du PASS et de la LAS. Le numerus apertus limite
              drastiquement l&apos;accès aux filières de santé en France, poussant de
              nombreux bacheliers motivés à chercher des alternatives. Edumove
              propose une solution concrète : étudier la médecine, le dentaire, la
              kinésithérapie, la pharmacie ou le vétérinaire dans des universités
              européennes reconnues, en Espagne et en Italie.
            </p>
            <p>
              Nos résultats témoignent de la qualité de notre accompagnement. Avec
              un taux d&apos;admission de 98% et un taux de passage en année supérieure
              compris entre 97% et 99%, les étudiants accompagnés par Edumove
              réussissent leurs études dans des conditions optimales. Les diplômes
              délivrés par nos universités partenaires sont conformes au processus
              de Bologne et permettent d&apos;exercer en France comme dans toute
              l&apos;Union européenne.
            </p>
            <p>
              L&apos;accompagnement Edumove couvre toutes les étapes du parcours :
              orientation personnalisée, constitution du dossier de candidature,
              préparation aux tests d&apos;admission, montage du financement avec notre
              partenaire bancaire{" "}
              <Link href="/financement" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
                LCL
              </Link>
              , et aide à l&apos;installation sur place. Nos étudiants ne sont
              jamais seuls.
            </p>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-2">
              Nos destinations
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A]">
              Où étudient nos étudiants ?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DESTINATIONS.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={d.href}
                  className="block bg-[#fafbff] border border-[#e2e2ef] rounded-xl p-5 hover:border-[#ec680a]/40 hover:shadow-md transition-all h-full"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-[#EC680A]" />
                    <h3 className="font-bold text-[#1B1D3A]">
                      {d.city}
                    </h3>
                    <span className="text-xs text-[#64748b]">{d.country}</span>
                  </div>
                  <p className="text-xs text-[#615CA5] font-semibold mb-1">
                    {d.universities}
                  </p>
                  <p className="text-xs text-[#64748b] leading-relaxed">
                    {d.filieres}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative py-12 md:py-16 bg-[#fafbff]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec680a] via-[#615ca5] to-[#ec680a]" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-2">
              FAQ
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A]">
              Questions sur nos résultats
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 space-y-3">
              {FAQ_RESULTATS.filter((_, i) => i % 2 === 0).map((faq, i) => (
                <FAQItem
                  key={i * 2}
                  faq={faq}
                  index={i * 2}
                  open={faqOpen}
                  setOpen={setFaqOpen}
                />
              ))}
            </div>
            <div className="flex-1 space-y-3">
              {FAQ_RESULTATS.filter((_, i) => i % 2 === 1).map((faq, i) => (
                <FAQItem
                  key={i * 2 + 1}
                  faq={faq}
                  index={i * 2 + 1}
                  open={faqOpen}
                  setOpen={setFaqOpen}
                />
              ))}
            </div>
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

      {/* FAQ JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_RESULTATS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </>
  );
}
