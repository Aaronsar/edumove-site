import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative w-full bg-[#1B1D3A] overflow-hidden">
      {/* Decorative blur circles */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#615CA5]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#EC680A]/10 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
          <Link href="/" className="hover:text-white/70 transition-colors">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span style={{ color: "rgba(255,255,255,0.7)" }} className="font-medium">Blog</span>
        </nav>
        <p className="text-[#EC680A] text-xs uppercase tracking-widest font-semibold mb-3">Blog</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ color: "#ffffff" }}>
          Nos articles et guides
        </h1>
        <p className="text-lg max-w-xl" style={{ color: "rgba(255,255,255,0.5)" }}>
          Conseils, guides pratiques et témoignages pour réussir vos études de santé en Europe.
        </p>
      </div>
    </section>
  );
}
