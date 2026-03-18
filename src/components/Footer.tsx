import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const formationLinks = [
  { name: "Dentaire", href: "/formations/dentaire" },
  { name: "Medecine", href: "/formations/medecine" },
  { name: "Kinesitherapie", href: "/formations/kinesitherapie" },
  { name: "Pharmacie", href: "/formations/pharmacie" },
  { name: "Veterinaire", href: "/formations/veterinaire" },
  { name: "Prepa Dentaire", href: "/formations/prepa-dentaire" },
];

const universiteLinks = [
  { name: "LINK Campus University", href: "/universites/link-campus" },
  { name: "UCJC Madrid", href: "/universites/ucjc" },
  { name: "Universidad Europea", href: "/universites/universidad-europea" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B1D3A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="https://edumove.fr/wp-content/uploads/2025/12/EDUMOVE-LOGO-2-1.svg"
                alt="EduMove"
                width={150}
                height={42}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Votre partenaire pour les etudes de sante en Europe.
              Accompagnement personnalise de A a Z.
            </p>
            <div className="mt-6">
              <Link
                href="#contact"
                className="inline-block rounded-[5px] border border-[#EC680A] px-6 py-2 text-sm font-medium text-[#EC680A] transition-colors hover:bg-[#EC680A] hover:text-white"
              >
                Etre contacte
              </Link>
            </div>
          </div>

          {/* Column 2: Formations */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#EC680A]">
              Formations
            </h3>
            <ul className="space-y-3">
              {formationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-[#EC680A]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Universites */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#EC680A]">
              Universites
            </h3>
            <ul className="space-y-3">
              {universiteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-[#EC680A]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-300 transition-colors hover:text-[#EC680A]"
                >
                  Notre Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#EC680A]">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+33189744257"
                  className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-[#EC680A]"
                >
                  <Phone size={16} className="flex-shrink-0 text-[#EC680A]" />
                  +33 1 89 74 42 57
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@edumove.fr"
                  className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-[#EC680A]"
                >
                  <Mail size={16} className="flex-shrink-0 text-[#EC680A]" />
                  contact@edumove.fr
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-sm text-gray-300">
                  <MapPin size={16} className="flex-shrink-0 text-[#EC680A]" />
                  Paris, France
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-gray-400 sm:flex-row">
          <p>&copy; 2026 EduMove. Tous droits reserves.</p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-[#EC680A]"
            >
              Mentions legales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="transition-colors hover:text-[#EC680A]"
            >
              Politique de confidentialite
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
