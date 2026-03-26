import Link from "next/link";

export default function OrangeBanner() {
  return (
    <Link href="/financement" className="block">
      <section className="relative bg-gradient-to-r from-[#EC680A] to-[#D45E09] py-14 overflow-hidden hover:from-[#D45E09] hover:to-[#c0550a] transition-all cursor-pointer">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-5">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3" style={{ color: "white" }}>
            Chez Edumove, votre admission est notre priorité.
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-medium">
            Financement étudiant garanti à partir de 75 000 € avec LCL
          </p>
          <span className="inline-block mt-4 text-white/80 text-sm underline underline-offset-4">
            Découvrir nos solutions de financement &rarr;
          </span>
        </div>
      </section>
    </Link>
  );
}
