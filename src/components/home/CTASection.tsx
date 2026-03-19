export default function CTASection() {
  return (
    <section className="relative bg-[#1B1D3A] py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EC680A] via-[#f59e0b] to-[#EC680A]" />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ color: "white" }}>
          Prêt à commencer votre aventure ?
        </h2>
        <p className="text-white/60 text-lg mb-8">
          Prenez rendez-vous avec un expert EduMove gratuitement. Sans engagement, sans frais.
        </p>
        <a href="#" className="inline-block bg-[#EC680A] hover:bg-[#d45e09] text-white font-bold px-10 py-4 rounded-xl text-lg transition-all hover:shadow-xl hover:shadow-[#EC680A]/30 hover:-translate-y-0.5">
          Être contacté →
        </a>
        <p className="text-white/40 mt-6 text-sm">📞 +33 1 89 74 42 57</p>
      </div>
    </section>
  );
}
