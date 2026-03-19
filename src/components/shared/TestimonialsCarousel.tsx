"use client";
import { useRef } from "react";

const testimonials = [
  { quote: "EduMove nous a accompagnés du début à la fin. Notre fils est maintenant en 2ème année de dentaire à Madrid et il est épanoui !", author: "Marie D.", context: "Parent d'étudiant en dentaire", stars: 5 },
  { quote: "Sans EduMove, je n'aurais jamais pensé pouvoir faire médecine. Le processus était simple et rapide.", author: "Lucas P.", context: "Étudiant en médecine à Rome", stars: 5 },
  { quote: "L'accompagnement pour le financement a été incroyable. Grâce au prêt LCL, on n'a rien avancé.", author: "Sophie M.", context: "Parent d'étudiant en pharmacie", stars: 5 },
  { quote: "Je suis en kiné à l'UCJC et c'est la meilleure décision de ma vie. Merci EduMove !", author: "Thomas R.", context: "Étudiant en kinésithérapie", stars: 5 },
  { quote: "Étudiante en médecine à l'UEM Madrid, je ne regrette pas d'avoir choisi EduMove. Leur aide pour la préparation au test a été décisive.", author: "Léa B.", context: "Étudiante en médecine", stars: 5 },
];

export default function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-[#fafbff]">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-sm uppercase tracking-widest text-[#EC680A] mb-3 font-semibold">Témoignages</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "#1B1D3A" }}>Ils nous font confiance</h2>

        <div className="relative">
          <button onClick={() => scroll(-1)} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[#EC680A] hover:text-white transition-colors text-[#1B1D3A] border border-gray-200">‹</button>
          <button onClick={() => scroll(1)} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[#EC680A] hover:text-white transition-colors text-[#1B1D3A] border border-gray-200">›</button>

          <div ref={scrollRef} className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4" style={{ scrollbarWidth: "none" }}>
            {testimonials.map((t, i) => (
              <div key={i} className="snap-start shrink-0 w-[320px] bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-[#EC680A]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-[#334155] text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-gray-100 pt-3">
                  <p className="font-bold text-[#1B1D3A] text-sm">{t.author}</p>
                  <p className="text-xs text-[#94a3b8]">{t.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
