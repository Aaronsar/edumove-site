"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "EduMove nous a accompagnés du début à la fin. De la constitution du dossier à la recherche d'appartement à Madrid, tout a été pris en charge. Notre fils est maintenant en 2ème année de dentaire et il est épanoui. On recommande à 100% !",
    author: "Marie D.",
    context: "Parent d'étudiant en dentaire",
    initials: "MD",
    color: "bg-[#615ca5]",
  },
  {
    quote: "Sans EduMove, je n'aurais jamais pensé pouvoir faire médecine. Avec mon bac à 12 de moyenne, les portes étaient fermées en France. Aujourd'hui je suis en 3ème année à Rome et je vis une expérience incroyable. Le processus d'admission était simple et rapide.",
    author: "Lucas P.",
    context: "Étudiant en médecine à Rome",
    initials: "LP",
    color: "bg-[#ec680a]",
  },
  {
    quote: "L'accompagnement pour le financement a été incroyable. On ne savait pas comment financer 6 ans d'études à l'étranger. Grâce au partenariat avec LCL, on n'a rien avancé et notre fille commencera à rembourser une fois qu'elle exercera. C'est un vrai soulagement.",
    author: "Sophie M.",
    context: "Parent d'étudiant en pharmacie",
    initials: "SM",
    color: "bg-emerald-500",
  },
  {
    quote: "Je suis en kiné à l'UCJC et c'est la meilleure décision de ma vie. L'équipe EduMove m'a aidé à préparer mon entretien, à trouver un logement et m'a accompagné même après mon arrivée à Madrid. Je me suis senti soutenu à chaque étape.",
    author: "Thomas R.",
    context: "Étudiant en kinésithérapie",
    initials: "TR",
    color: "bg-amber-500",
  },
  {
    quote: "Après deux ans de PASS sans succès, j'ai contacté EduMove. En trois mois j'étais admise à l'Universidad Europea de Madrid. Aujourd'hui je suis en 2ème année de médecine et je ne regrette absolument rien. Leur aide a vraiment été décisive dans mon parcours.",
    author: "Léa B.",
    context: "Étudiante en médecine",
    initials: "LB",
    color: "bg-[#615ca5]",
  },
];

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  }, []);

  const prev = () => setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));

  // Auto-play every 3.5s
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, active]);

  const current = testimonials[active];

  return (
    <section className="py-20 bg-[#1b1d3a] relative overflow-hidden">
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

      <div className="max-w-4xl mx-auto px-4">
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
              {testimonials.map((t, i) => (
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
