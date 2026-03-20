"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export interface Testimonial {
  quote: string;
  author: string;
  context: string;
  initials: string;
  color: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: "On était un peu perdus au début, on connaissait personne qui avait fait ça. Le conseiller nous a tout expliqué, il a géré le dossier, trouvé l'appart à Madrid… Aujourd'hui notre fils est en 2e année de dentaire là-bas et il adore. Franchement on referait ce choix sans hésiter.",
    author: "Marie D.",
    context: "Parent d'étudiant en dentaire à Madrid",
    initials: "MD",
    color: "bg-[#615ca5]",
  },
  {
    quote: "J'avais 12 de moyenne au bac, en France c'était mort pour médecine. Un pote m'a parlé d'Edumove, j'ai tenté. Ça fait 3 ans que je suis à Rome maintenant, je bosse dur mais j'adore ce que je fais. Le test d'entrée c'était stressant mais ils m'avaient bien préparé.",
    author: "Lucas P.",
    context: "Étudiant en 3e année de médecine à Rome",
    initials: "LP",
    color: "bg-[#ec680a]",
  },
  {
    quote: "La question du financement nous bloquait complètement. 6 ans d'études à l'étranger, on voyait pas comment faire. Ils nous ont mis en relation avec LCL, le prêt a été accepté en 3 semaines et notre fille ne remboursera qu'une fois en poste. Ça nous a enlevé un poids énorme.",
    author: "Sophie M.",
    context: "Mère d'une étudiante en pharmacie",
    initials: "SM",
    color: "bg-[#615CA5]",
  },
  {
    quote: "Honnêtement j'avais des doutes au début, faire kiné en Espagne ça faisait un peu « plan B ». Maintenant que je suis à l'UCJC depuis 2 ans, je vois que la formation est top, les stages commencent tôt et Madrid c'est une ville géniale pour un étudiant.",
    author: "Thomas R.",
    context: "Étudiant en kinésithérapie à l'UCJC",
    initials: "TR",
    color: "bg-[#EC680A]",
  },
  {
    quote: "Deux tentatives en PASS, deux échecs. J'étais dégoutée. Ma mère a trouvé Edumove sur Instagram, j'ai appelé, et 3 mois après j'étais inscrite à l'Universidad Europea. Ça fait un an et demi, mes notes sont bonnes, je me suis fait des amis… j'y crois enfin.",
    author: "Léa B.",
    context: "Étudiante en 2e année de médecine à Madrid",
    initials: "LB",
    color: "bg-[#615ca5]",
  },
];

export default function TestimonialsCarousel({ testimonials }: { testimonials?: Testimonial[] } = {}) {
  const items = testimonials ?? defaultTestimonials;
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((i) => (i === items.length - 1 ? 0 : i + 1));
  }, [items.length]);

  const prev = () => setActive((i) => (i === 0 ? items.length - 1 : i - 1));

  // Auto-play every 5s
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, active]);

  const current = items[active];

  return (
    <section className="py-12 md:py-20 bg-[#1b1d3a] relative overflow-hidden">
      {/* Deco */}
      <div className="absolute top-8 right-8 grid grid-cols-5 gap-1.5 opacity-10">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#ec680a]" />
        ))}
      </div>
      <div className="absolute bottom-8 left-8 grid grid-cols-4 gap-1.5 opacity-10">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-2">
            Témoignages
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ color: "white" }}>
            Ils nous font confiance
          </h2>
        </div>

        {/* Main testimonial */}
        <div className="relative min-h-[340px]">
          <div className="text-center">
            {/* Quote icon */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#ec680a]/20 flex items-center justify-center">
                <Quote size={20} className="text-[#ec680a]" />
              </div>
            </div>

            {/* Quote text */}
            <p key={active} className="text-white text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 font-light italic animate-fade-in">
              &ldquo;{current.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-full ${current.color} flex items-center justify-center text-white text-xs font-bold`}>
                {current.initials}
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">{current.author}</p>
                <p className="text-white/40 text-xs">{current.context}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-10">
              {Array.from({ length: 5 }).map((_, j) => (
                <svg key={j} className="w-4 h-4 text-[#ec680a]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={18} className="text-white" />
            </button>

            {/* Avatars row */}
            <div className="flex items-center gap-2">
              {items.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 flex items-center justify-center text-white font-bold ${
                    i === active
                      ? `w-10 h-10 ${t.color} ring-2 ring-white/30 text-xs`
                      : "w-8 h-8 bg-white/10 text-[10px] hover:bg-white/20"
                  }`}
                >
                  {t.initials}
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}
