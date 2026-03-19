"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import ContactButton from "@/components/shared/ContactButton";

const formations = [
  { name: "Dentaire", href: "/formations/dentaire" },
  { name: "Médecine", href: "/formations/medecine" },
  { name: "Kinésithérapie", href: "/formations/kinesitherapie" },
  { name: "Pharmacie", href: "/formations/pharmacie" },
  { name: "Vétérinaire", href: "/formations/veterinaire" },
];

const universites = [
  { name: "LINK Campus", href: "/universites/link-campus" },
  { name: "UCJC Madrid", href: "/universites/ucjc" },
  { name: "Universidad Europea", href: "/universites/universidad-europea" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formationsOpen, setFormationsOpen] = useState(false);
  const [universitesOpen, setUniversitesOpen] = useState(false);
  const [mobileFormationsOpen, setMobileFormationsOpen] = useState(false);
  const [mobileUniversitesOpen, setMobileUniversitesOpen] = useState(false);

  const formationsRef = useRef<HTMLDivElement>(null);
  const universitesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        formationsRef.current &&
        !formationsRef.current.contains(e.target as Node)
      ) {
        setFormationsOpen(false);
      }
      if (
        universitesRef.current &&
        !universitesRef.current.contains(e.target as Node)
      ) {
        setUniversitesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "border-b border-gray-100"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://edumove.fr/wp-content/uploads/2025/12/EDUMOVE-LOGO-2-1.svg"
            alt="Edumove"
            width={160}
            height={45}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {/* Formations Dropdown */}
          <div ref={formationsRef} className="relative">
            <button
              onClick={() => {
                setFormationsOpen(!formationsOpen);
                setUniversitesOpen(false);
              }}
              className="flex items-center gap-1 text-sm font-medium text-[#1B1D3A] transition-colors hover:text-[#EC680A]"
            >
              Nos formations
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${formationsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {formationsOpen && (
              <div className="absolute left-0 top-full mt-2 w-56 rounded-md border border-gray-100 bg-white py-1 shadow-lg">
                {formations.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setFormationsOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[#334155] transition-colors hover:bg-[#F5F5F5] hover:text-[#EC680A]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Universites Dropdown */}
          <div ref={universitesRef} className="relative">
            <button
              onClick={() => {
                setUniversitesOpen(!universitesOpen);
                setFormationsOpen(false);
              }}
              className="flex items-center gap-1 text-sm font-medium text-[#1B1D3A] transition-colors hover:text-[#EC680A]"
            >
              Nos universités partenaires
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${universitesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {universitesOpen && (
              <div className="absolute left-0 top-full mt-2 w-56 rounded-md border border-gray-100 bg-white py-1 shadow-lg">
                {universites.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setUniversitesOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[#334155] transition-colors hover:bg-[#F5F5F5] hover:text-[#EC680A]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Blog Link */}
          <Link
            href="/blog"
            className="text-sm font-medium text-[#1B1D3A] transition-colors hover:text-[#EC680A]"
          >
            Notre Blog
          </Link>
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+33189744257"
            className="flex items-center gap-2 text-sm font-medium text-[#1B1D3A] transition-colors hover:text-[#EC680A]"
          >
            <Phone size={16} className="text-[#EC680A]" />
            +33 1 89 74 42 57
          </a>
          <ContactButton className="rounded-[5px] bg-[#EC680A] px-[30px] py-[8px] text-sm font-semibold text-white transition-colors hover:bg-[#D45E09]">
            Etre contacte
          </ContactButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X size={28} className="text-[#1B1D3A]" />
          ) : (
            <Menu size={28} className="text-[#1B1D3A]" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[60px] z-40 overflow-y-auto bg-white lg:hidden">
          <nav className="flex flex-col px-6 py-6">
            {/* Mobile Formations */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setMobileFormationsOpen(!mobileFormationsOpen)}
                className="flex w-full items-center justify-between py-4 text-base font-medium text-[#1B1D3A]"
              >
                Nos formations
                <ChevronDown
                  size={20}
                  className={`text-[#EC680A] transition-transform duration-200 ${mobileFormationsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileFormationsOpen && (
                <div className="pb-4 pl-4">
                  {formations.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 text-sm text-[#334155] transition-colors hover:text-[#EC680A]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Universites */}
            <div className="border-b border-gray-100">
              <button
                onClick={() =>
                  setMobileUniversitesOpen(!mobileUniversitesOpen)
                }
                className="flex w-full items-center justify-between py-4 text-base font-medium text-[#1B1D3A]"
              >
                Nos universités partenaires
                <ChevronDown
                  size={20}
                  className={`text-[#EC680A] transition-transform duration-200 ${mobileUniversitesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileUniversitesOpen && (
                <div className="pb-4 pl-4">
                  {universites.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 text-sm text-[#334155] transition-colors hover:text-[#EC680A]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Blog */}
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="border-b border-gray-100 py-4 text-base font-medium text-[#1B1D3A] transition-colors hover:text-[#EC680A]"
            >
              Notre Blog
            </Link>

            {/* Mobile Phone */}
            <a
              href="tel:+33189744257"
              className="flex items-center gap-2 border-b border-gray-100 py-4 text-base font-medium text-[#1B1D3A]"
            >
              <Phone size={18} className="text-[#EC680A]" />
              +33 1 89 74 42 57
            </a>

            {/* Mobile CTA */}
            <div className="pt-6">
              <ContactButton className="block w-full rounded-[5px] bg-[#EC680A] px-[30px] py-3 text-center text-base font-semibold text-white transition-colors hover:bg-[#D45E09]">
                Etre contacte
              </ContactButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
