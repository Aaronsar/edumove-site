import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

export default function GuideTestPEBanner() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/guides/reussir-test-pe-universidad-europea"
          className="group flex items-center gap-4 bg-gradient-to-r from-[#615CA5] to-[#1B1D3A] rounded-2xl px-6 py-5 hover:shadow-[0_20px_60px_-15px_rgba(97,92,165,0.25)] transition-shadow duration-300"
        >
          <div className="w-10 h-10 rounded-xl bg-[#EC680A]/20 flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5" style={{ color: "#EC680A" }} />
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm md:text-base" style={{ color: "#ffffff" }}>
              Comment r&eacute;ussir le test de l&apos;Universidad Europea ?
            </p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
              Guide complet : Langoo, Talent Test, lettre de motivation, conseils pratiques
            </p>
          </div>
          <span className="w-10 h-10 rounded-full bg-[#EC680A] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <ArrowRight className="w-5 h-5 text-white" />
          </span>
        </Link>
      </div>
    </section>
  );
}
