export default function ServicesSection() {
  const services = [
    {
      icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      title: "Admis ou remboursé",
      desc: "Préparation illimitée. Si vous n'êtes pas admis, remboursement intégral.",
    },
    {
      icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: "Financement garanti",
      desc: "Jusqu'à 75 000 € via LCL. Remboursement uniquement après diplôme.",
    },
    {
      icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      title: "De A à Z",
      desc: "Orientation, admission, logement, traduction, vie étudiante.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-2">Pourquoi EduMove ?</p>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#615CA5" }}>
            L&apos;accompagnement qui fait la différence
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={i} className="bg-[#1b1d3a] rounded-xl p-6 text-center group hover:bg-[#615ca5] transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#ec680a]/20 text-[#ec680a] mb-4 group-hover:bg-[#ec680a] group-hover:text-white transition-all">
                {s.icon}
              </div>
              <h3 className="font-bold text-white text-base mb-2" style={{ color: "white" }}>{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
