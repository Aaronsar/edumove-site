"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import ContactButton from "@/components/shared/ContactButton";

const formations = [
  { name: "Dentaire", href: "/formations/dentaire" },
  { name: "M\u00e9decine", href: "/formations/medecine" },
  { name: "Kin\u00e9sith\u00e9rapie", href: "/formations/kinesitherapie" },
  { name: "Pharmacie", href: "/formations/pharmacie" },
  { name: "V\u00e9t\u00e9rinaire", href: "/formations/veterinaire" },
];

const universites = [
  { name: "LINK Campus University", href: "/universites/link-campus" },
  { name: "UCJC Madrid", href: "/universites/ucjc" },
  { name: "Universidad Europea", href: "/universites/universidad-europea" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formationsOpen, setFormationsOpen] = useState(false);
  const [universitesOpen, setUniversitesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setFormationsOpen(false);
    setUniversitesOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "border-b border-gray-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4 sm:py-5">
          {/* Left — Menu button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 rounded-full border border-[#1B1D3A]/20 px-3 sm:px-4 py-2 text-sm font-medium text-[#1B1D3A] transition-colors hover:border-[#1B1D3A]/40 hover:bg-gray-50"
          >
            <Menu size={18} />
            <span className="hidden sm:inline">Menu</span>
          </button>

          {/* Center — Logo icon */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/edumove-icon-orange.svg"
              alt="Edumove"
              width={52}
              height={52}
              priority
              className="h-10 w-10 sm:h-12 sm:w-12"
            />
          </Link>

          {/* Right — CTA (hidden on mobile) */}
          <Link
            href="https://candidature.edumove.fr"
            className="hidden sm:flex items-center gap-1.5 rounded-full bg-[#EC680A] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#D45E09]"
          >
            Candidater
            <ArrowRight size={15} />
          </Link>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Side panel */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-[320px] max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Subtle geometric background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {/* Dot grid pattern */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="menu-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="16" cy="16" r="1" fill="#EC680A" opacity="0.06" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#menu-dots)" />
          </svg>
          {/* Large accent circle bottom-right */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full border border-[#EC680A]/[0.07]" />
          <div className="absolute -bottom-28 -right-28 w-80 h-80 rounded-full border border-[#EC680A]/[0.04]" />
          {/* Small accent circle top-right */}
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-[#1B1D3A]/[0.05]" />
        </div>

        <div className="relative flex flex-col h-full">
          {/* Panel header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/edumove-icon-orange.svg"
                alt="Edumove"
                width={40}
                height={40}
                className="h-9 w-9"
              />
            </Link>
            <button
              onClick={closeMenu}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#1B1D3A] hover:bg-gray-50 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-6 py-6">
            {/* Formations */}
            <div className="mb-1">
              <button
                onClick={() => {
                  setFormationsOpen(!formationsOpen);
                  setUniversitesOpen(false);
                }}
                className="flex w-full items-center justify-between py-3 text-base font-medium text-[#1B1D3A] hover:text-[#EC680A] transition-colors"
              >
                Les formations
                <ChevronDown
                  size={18}
                  className={`text-[#64748b] transition-transform duration-200 ${formationsOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  formationsOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 pb-2 space-y-0.5">
                  {formations.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="block py-2 text-sm text-[#64748b] hover:text-[#EC680A] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Universites */}
            <div className="mb-1">
              <button
                onClick={() => {
                  setUniversitesOpen(!universitesOpen);
                  setFormationsOpen(false);
                }}
                className="flex w-full items-center justify-between py-3 text-base font-medium text-[#1B1D3A] hover:text-[#EC680A] transition-colors"
              >
                Les universit&eacute;s partenaires
                <ChevronDown
                  size={18}
                  className={`text-[#64748b] transition-transform duration-200 ${universitesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  universitesOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 pb-2 space-y-0.5">
                  {universites.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="block py-2 text-sm text-[#64748b] hover:text-[#EC680A] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Presenter sa candidature */}
            <Link
              href="/presenter-sa-candidature"
              onClick={closeMenu}
              className="block py-3 text-base font-medium text-[#1B1D3A] hover:text-[#EC680A] transition-colors"
            >
              Pr&eacute;senter sa candidature
            </Link>

            {/* FAQ */}
            <Link
              href="/questions-frequentes"
              onClick={closeMenu}
              className="block py-3 text-base font-medium text-[#1B1D3A] hover:text-[#EC680A] transition-colors"
            >
              Questions fr&eacute;quentes
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              onClick={closeMenu}
              className="block py-3 text-base font-medium text-[#1B1D3A] hover:text-[#EC680A] transition-colors"
            >
              Nos articles de blog
            </Link>

            {/* A propos */}
            <Link
              href="/a-propos"
              onClick={closeMenu}
              className="block py-3 text-base font-medium text-[#1B1D3A] hover:text-[#EC680A] transition-colors"
            >
              &Agrave; propos de Edumove
            </Link>

          </nav>

          {/* Bottom CTAs */}
          <div className="px-6 pb-8 pt-4 border-t border-gray-100 space-y-3">
            <Link
              href="https://candidature.edumove.fr"
              className="flex items-center justify-center gap-2 w-full rounded-full bg-[#EC680A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#D45E09]"
            >
              Candidater
              <ArrowRight size={15} />
            </Link>
            <ContactButton className="flex items-center justify-center gap-2 w-full rounded-full border border-[#1B1D3A]/20 px-5 py-3 text-sm font-semibold text-[#1B1D3A] transition-colors hover:bg-gray-50">
              &Ecirc;tre recontact&eacute;
            </ContactButton>
          </div>
        </div>
      </div>
    </>
  );
}
