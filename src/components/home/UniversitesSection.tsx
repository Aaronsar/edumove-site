import Link from "next/link";
import { MapPin } from "lucide-react";

const universites = [
  {
    name: "Universidad Europea",
    location: "Espagne",
    description:
      "L'Universidad Europea dispose de 5 campus en Espagne (Madrid, Malaga, Valence, Alicante, Canaries). 6 filières santé disponibles avec un diplôme reconnu dans toute l'UE.",
    href: "/universites/universidad-europea",
    gradientFrom: "from-blue-400",
    gradientTo: "to-blue-600",
  },
  {
    name: "Université LINK",
    location: "Italie — Rome",
    description:
      "LINK Campus University à Rome propose 4 filières santé. Test d'admission en français, aucun prérequis linguistique. Un cadre exceptionnel au cœur de la capitale italienne.",
    href: "/universites/link-campus",
    gradientFrom: "from-emerald-400",
    gradientTo: "to-emerald-600",
  },
  {
    name: "UCJC",
    location: "Espagne — Madrid",
    description:
      "L'Universidad Camilo José Cela à Madrid offre 3 filières santé avec admission sur entretien uniquement. L'option la moins chère pour vos études en Europe.",
    href: "/universites/ucjc",
    gradientFrom: "from-amber-400",
    gradientTo: "to-amber-600",
  },
];

export default function UniversitesSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold italic text-[#1B1D3A]">
          Nos partenaires à l&apos;honneur
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {universites.map((uni) => (
            <div
              key={uni.name}
              className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              {/* Photo placeholder — gradient block */}
              <div
                className={`flex h-48 items-end bg-gradient-to-br ${uni.gradientFrom} ${uni.gradientTo} p-4`}
              >
                <span className="text-xl font-bold text-white drop-shadow-sm">
                  {uni.name}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1.5 text-sm text-[#334155]">
                  <MapPin size={14} className="shrink-0 text-[#EC680A]" />
                  {uni.location}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[#334155]">
                  {uni.description}
                </p>

                <Link
                  href={uni.href}
                  className="mt-5 inline-flex items-center justify-center rounded-lg bg-[#EC680A] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#D45E09]"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA button */}
        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#EC680A] px-8 py-3 text-base font-semibold text-[#EC680A] transition-colors hover:bg-[#EC680A] hover:text-white"
          >
            Être contacté
          </Link>
        </div>
      </div>
    </section>
  );
}
