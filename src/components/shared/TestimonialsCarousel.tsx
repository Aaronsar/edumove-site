"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "EduMove nous a accompagnés du début à la fin. Notre fils est maintenant en 2ème année de dentaire à Madrid et il est épanoui !",
    author: "Marie D.",
    context: "Parent d'étudiant",
  },
  {
    quote:
      "Sans EduMove, je n'aurais jamais pensé pouvoir faire médecine. Le processus était simple et rapide.",
    author: "Lucas P.",
    context: "Étudiant en médecine à Rome",
  },
  {
    quote:
      "L'accompagnement pour le financement a été incroyable. Grâce au prêt LCL, on n'a rien avancé.",
    author: "Sophie M.",
    context: "Parent d'étudiant en pharmacie",
  },
  {
    quote:
      "Je suis en kiné à l'UCJC et c'est la meilleure décision de ma vie. Merci EduMove !",
    author: "Thomas R.",
    context: "Étudiant en kinésithérapie à Madrid",
  },
];

function OrangeStars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 text-[#EC680A]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#F5F5F5] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold italic text-[#1B1D3A]">
          Témoignages et réussite
        </h2>

        <div className="relative mt-12">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll("left")}
            aria-label="Précédent"
            className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-50 md:-left-5"
          >
            <ChevronLeft size={22} className="text-[#1B1D3A]" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Suivant"
            className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-50 md:-right-5"
          >
            <ChevronRight size={22} className="text-[#1B1D3A]" />
          </button>

          {/* Cards container */}
          <div
            ref={scrollRef}
            className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[300px] shrink-0 snap-start rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:w-[320px]"
              >
                <OrangeStars />

                <p className="mt-4 text-sm italic leading-relaxed text-[#334155]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-5 border-t border-gray-100 pt-4">
                  <p className="text-sm font-bold text-[#1B1D3A]">
                    {testimonial.author}
                  </p>
                  <p className="mt-0.5 text-xs text-[#334155]/70">
                    {testimonial.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
