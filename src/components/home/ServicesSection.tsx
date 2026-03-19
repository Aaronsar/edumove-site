const services = [
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
    title: "Admis ou remboursé",
    description: "Préparation illimitée aux tests d'admission. Si vous n'êtes pas admis, on vous rembourse intégralement. Aucun risque pour vous.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: "Financement garanti",
    description: "Jusqu'à 75 000 € de prêt étudiant grâce à notre partenariat avec LCL. Vous ne remboursez qu'une fois diplômé et en poste.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    title: "Accompagnement de A à Z",
    description: "Orientation, admission, logement, traduction des cours, vie étudiante : on s'occupe de tout pour que vous vous concentrez sur vos études.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-20 bg-[#615CA5] overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <p className="text-center text-sm uppercase tracking-widest text-white/60 mb-3 font-semibold">Pourquoi EduMove ?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-14" style={{ color: "white" }}>
          L&apos;accompagnement qui fait la différence
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#EC680A] shadow-lg shadow-[#EC680A]/30 mb-6 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ color: "white" }}>{s.title}</h3>
              <p className="text-white/75 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
