const logos = [
  { name: "LCL", style: "text-[#1B1D3A] font-bold text-2xl" },
  { name: "L'Étudiant", style: "text-[#1B1D3A] font-bold text-xl" },
  { name: "Le Figaro", style: "text-[#1B1D3A] font-serif text-xl font-bold tracking-wide" },
  { name: "DIPLOMA", style: "text-[#1B1D3A] font-bold text-xl tracking-widest" },
  { name: "BFMTV.", style: "text-[#1B1D3A] font-black text-2xl" },
  { name: "Forbes", style: "text-[#1B1D3A] font-serif font-bold text-2xl italic" },
];

export default function TrustLogos() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-sm uppercase tracking-widest text-[#94a3b8] mb-8 font-medium">Ils nous font confiance</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {logos.map((l) => (
            <span key={l.name} className={`${l.style} opacity-30 hover:opacity-100 transition-opacity duration-300 cursor-default`}>
              {l.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
