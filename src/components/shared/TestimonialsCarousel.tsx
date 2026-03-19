"use client";
import { useRef } from "react";

const testimonials = [
  { quote: "EduMove nous a accompagnés du début à la fin. Notre fils est maintenant en 2ème année de dentaire à Madrid et il est épanoui !", author: "Marie D.", context: "Parent d'étudiant en dentaire", stars: 5 },
  { quote: "Sans EduMove, je n'aurais jamais pensé pouvoir faire médecine. Le processus était simple et rapide.", author: "Lucas P.", context: "Étudiant en médecine à Rome", stars: 5 },
  { quote: "L'accompagnement pour le financement a été incroyable. Grâce au prêt LCL, on n'a rien avancé.", author: "Sophie M.", context: "Parent d'étudiant en pharmacie", stars: 5 },
  { quote: "Je suis en kiné à l'UCJC et c'est la meilleure décision de ma vie. Merci EduMove !", author: "Thomas R.", context: "Étudiant en kinésithérapie", stars: 5 },
  { quote: "Étudiante en médecine à l'UEM Madrid, je ne regrette pas d'avoir choisi EduMove. Leur aide a été décisive.", author: "Léa B.", context: "Étudiante en médecine", stars: 5 },
];

export default function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-[#1b1d3a] relative overflow-hidden">
      {/* Deco */}
      <div className="absolute top-6 right-6 grid grid-cols-5 gap-1.5 opacity-10">
        {Array.from({ length: 25 }).map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#ec680a]" />)}
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-2">Témoignages</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ color: "white" }}>Ils nous font confiance</h2>
        </div>

        <div className="relative">
          <button onClick={() => scroll(-1)} className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-[#ec680a] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#d45e09] transition-colors text-lg">‹</button>
          <button onClick={() => scroll(1)} className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-[#ec680a] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#d45e09] transition-colors text-lg">›</button>

          <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2" style={{ scrollbarWidth: "none" }}>
            {testimonials.map((t, i) => (
              <div key={i} className="snap-start shrink-0 w-[300px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#ec680a]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-4 italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-white/10 pt-3 mt-auto">
                  <p className="font-semibold text-white text-sm">{t.author}</p>
                  <p className="text-white/40 text-xs">{t.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
