export default function CTASection() {
  return (
    <section className="relative py-16 bg-[#1b1d3a] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec680a] via-[#615ca5] to-[#ec680a]" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ color: "white" }}>
          Prêt à commencer votre aventure ?
        </h2>
        <p className="text-white/60 mb-8">
          Un expert EduMove vous rappelle sous 24h. Sans engagement, sans frais.
        </p>
        <a href="#" className="inline-block bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-8 py-3.5 rounded-[5px] transition-all hover:shadow-xl hover:shadow-[#ec680a]/20">
          Déposer ma candidature →
        </a>
        <p className="text-white/40 mt-4 text-sm">+33 1 89 74 42 57</p>
      </div>
    </section>
  );
}
