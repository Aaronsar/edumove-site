import Link from "next/link";
import Image from "next/image";
import { filieres } from "@/data/filieres";

const colorMap: Record<string, string> = {
  red: "bg-red-50 border-red-100",
  blue: "bg-blue-50 border-blue-100",
  green: "bg-green-50 border-green-100",
  purple: "bg-purple-50 border-purple-100",
  amber: "bg-amber-50 border-amber-100",
  cyan: "bg-cyan-50 border-cyan-100",
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      {/* World map watermark background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cellipse cx='600' cy='300' rx='500' ry='250' fill='none' stroke='%231B1D3A' stroke-width='1'/%3E%3Cellipse cx='600' cy='300' rx='350' ry='250' fill='none' stroke='%231B1D3A' stroke-width='0.5'/%3E%3Cellipse cx='600' cy='300' rx='180' ry='250' fill='none' stroke='%231B1D3A' stroke-width='0.5'/%3E%3Cline x1='100' y1='300' x2='1100' y2='300' stroke='%231B1D3A' stroke-width='0.5'/%3E%3Cline x1='600' y1='50' x2='600' y2='550' stroke='%231B1D3A' stroke-width='0.5'/%3E%3Cpath d='M150 180 Q300 160 400 200 Q500 230 550 190 Q600 160 700 200 Q800 250 900 180 Q1000 130 1050 170' fill='none' stroke='%231B1D3A' stroke-width='1.5'/%3E%3Cpath d='M200 280 Q350 260 450 300 Q550 340 650 290 Q750 250 850 300 Q950 350 1050 280' fill='none' stroke='%231B1D3A' stroke-width='1.5'/%3E%3Cpath d='M300 380 Q400 360 500 400 Q600 430 700 390 Q800 350 900 400' fill='none' stroke='%231B1D3A' stroke-width='1.2'/%3E%3Ccircle cx='250' cy='200' r='3' fill='%231B1D3A'/%3E%3Ccircle cx='500' cy='220' r='3' fill='%231B1D3A'/%3E%3Ccircle cx='700' cy='190' r='3' fill='%231B1D3A'/%3E%3Ccircle cx='400' cy='310' r='3' fill='%231B1D3A'/%3E%3Ccircle cx='650' cy='280' r='3' fill='%231B1D3A'/%3E%3Ccircle cx='850' cy='310' r='3' fill='%231B1D3A'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Edumove orange round icon */}
        <div className="flex justify-center">
          <Image
            src="https://edumove.fr/wp-content/uploads/2025/12/EDUMOVE-ROND-ORANGE.svg"
            alt="Edumove"
            width={80}
            height={80}
            className="h-20 w-20"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="mx-auto mt-8 max-w-4xl text-center text-3xl font-bold italic leading-tight text-[#1B1D3A] md:text-4xl lg:text-5xl">
          L&apos;accompagnement d&apos;excellence pour vos{" "}
          <span className="text-[#EC680A]">
            études universitaires en Europe
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-[#334155] md:text-lg">
          Avec Edumove, vos études en Europe peuvent être financées jusqu&apos;à
          100% sans aucun frais à avancer. Vous ne remboursez qu&apos;une fois
          praticien, lorsque votre carrière sera lancée.
        </p>

        {/* CTA Link */}
        <div className="mt-6 text-center">
          <Link
            href="#formations"
            className="inline-block text-base font-bold text-[#EC680A] transition-colors hover:text-[#D45E09]"
          >
            Choisis une formation &gt;
          </Link>
        </div>

        {/* Formation Cards Grid */}
        <div
          id="formations"
          className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filieres.map((filiere) => (
            <Link
              key={filiere.slug}
              href={`/formations/${filiere.slug}`}
              className={`group flex items-center gap-4 rounded-xl border bg-white px-5 py-4 transition-all hover:-translate-y-0.5 hover:shadow-lg ${colorMap[filiere.color] || "border-gray-100 bg-gray-50"}`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                {filiere.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#1B1D3A] group-hover:text-[#EC680A]">
                  {filiere.name}
                </h3>
                <p className="mt-0.5 text-xs text-[#334155]/70">
                  {filiere.durationRange}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
