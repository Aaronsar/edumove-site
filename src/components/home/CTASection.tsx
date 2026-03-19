export default function CTASection() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-[#ec680a] to-[#f59e0b] overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)" }} />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ color: "white" }}>
          Prêt à commencer votre aventure ?
        </h2>
        <p className="text-white/80 mb-8">
          Un expert EduMove vous rappelle sous 24h. Sans engagement, sans frais.
        </p>
        <a href="#" className="inline-block bg-[#1b1d3a] hover:bg-[#615ca5] text-white font-semibold px-8 py-3.5 rounded-[5px] transition-all hover:shadow-xl">
          Être contacté →
        </a>
        <p className="text-white/60 mt-4 text-sm">📞 +33 1 89 74 42 57</p>
      </div>
    </section>
  );
}
