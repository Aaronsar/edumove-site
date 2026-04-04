import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function QuizBanner() {
  return (
    <section className="py-6 md:py-8 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Link href="/quiz" className="group block">
          <div className="relative overflow-hidden bg-gradient-to-r from-[#1B1D3A] to-[#615CA5] rounded-2xl p-6 md:p-8">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#EC680A]/15 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#615CA5]/30 blur-2xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-7 h-7 text-[#EC680A]" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  Quelle faculté en Europe est faite pour vous ?
                </h3>
                <p className="text-white/60 text-sm">
                  6 questions, 1 minute — trouvez l&apos;université qui correspond à votre profil.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 bg-[#EC680A] hover:bg-[#D45E09] text-white font-semibold px-6 py-3 rounded-[5px] transition-all group-hover:shadow-lg group-hover:shadow-[#EC680A]/20 shrink-0">
                Faire le quiz
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
