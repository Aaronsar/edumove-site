import Image from "next/image";

const logos = [
  {
    name: "LCL",
    src: "https://edumove.fr/wp-content/uploads/2025/12/lcl-blanc-2-e1765714156276.png",
    width: 100,
    height: 40,
  },
  {
    name: "L'Étudiant",
    src: "https://edumove.fr/wp-content/uploads/2025/12/LETUDIANT_ROUGE.webp",
    width: 120,
    height: 40,
  },
  {
    name: "Le Figaro",
    src: "https://edumove.fr/wp-content/uploads/2025/12/LeFigaro_logo.png",
    width: 120,
    height: 40,
  },
  {
    name: "Diploma Education",
    src: "",
    width: 120,
    height: 40,
  },
  {
    name: "BFMTV",
    src: "",
    width: 100,
    height: 40,
  },
  {
    name: "Forbes",
    src: "",
    width: 100,
    height: 40,
  },
];

export default function TrustLogos() {
  return (
    <section className="bg-[#F5F5F5] py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-2xl font-bold italic text-[#1B1D3A]">
          Ils nous font confiance
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-12 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
            >
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-10 w-auto object-contain"
                  unoptimized
                />
              ) : (
                <span className="text-lg font-bold tracking-wide text-gray-400 transition-colors duration-300 hover:text-[#1B1D3A]">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
