"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import ContactButton from "@/components/shared/ContactButton";

const formationLinks = [
  { name: "Dentaire", href: "/formations/dentaire" },
  { name: "Médecine", href: "/formations/medecine" },
  { name: "Kinésithérapie", href: "/formations/kinesitherapie" },
  { name: "Pharmacie", href: "/formations/pharmacie" },
  { name: "Vétérinaire", href: "/formations/veterinaire" },
  { name: "Prépa Dentaire", href: "/formations/prepa-dentaire" },
];

const universiteLinks = [
  { name: "LINK Campus University", href: "/universites/link-campus" },
  { name: "UCJC Madrid", href: "/universites/ucjc" },
  { name: "Universidad Europea", href: "/universites/universidad-europea" },
];

const planDuSite = [
  { name: "Accueil", href: "/" },
  { name: "Financement", href: "/financement" },
  { name: "Questions fréquentes", href: "/questions-frequentes" },
  { name: "Témoignages", href: "/temoignages" },
  { name: "À propos", href: "/a-propos" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Webinaire", href: "/evenements/webinaire-financement-sante" },
  { name: "Plan du site", href: "/plan-du-site" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#1B1D3A] text-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec680a] via-[#615ca5] to-[#ec680a]" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/edumove-logo.svg"
                alt="Edumove"
                width={150}
                height={42}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Études de santé en Europe : orientation, candidature,
              financement et installation.
            </p>
            <div className="mt-6">
              <ContactButton className="inline-block rounded-[5px] border border-[#EC680A] px-6 py-2 text-sm font-medium text-[#EC680A] transition-colors hover:bg-[#EC680A] hover:text-white">
                Être contacté
              </ContactButton>
            </div>
          </div>

          {/* Column 2: Formations */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider" style={{ color: "#ffffff" }}>
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
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider" style={{ color: "#ffffff" }}>
              Universités
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
            </ul>
          </div>

          {/* Column 4: Plan du site */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider" style={{ color: "#ffffff" }}>
              Plan du site
            </h3>
            <ul className="space-y-3">
              {planDuSite.map((link) => (
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

          {/* Column 5: Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider" style={{ color: "#ffffff" }}>
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
                  href="mailto:admissions@edumove.fr"
                  className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-[#EC680A]"
                >
                  <Mail size={16} className="flex-shrink-0 text-[#EC680A]" />
                  admissions@edumove.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-400 sm:flex-row">
          <p>&copy; 2026 Edumove. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link
              href="/plan-du-site"
              className="transition-colors hover:text-[#EC680A]"
            >
              Plan du site
            </Link>
            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-[#EC680A]"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="transition-colors hover:text-[#EC680A]"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
