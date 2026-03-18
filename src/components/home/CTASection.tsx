import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-[#1B1D3A] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl font-bold italic text-white md:text-4xl">
          Prêt à commencer votre aventure&nbsp;?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
          Prenez rendez-vous avec un expert Edumove gratuitement.
          <br />
          Sans engagement, sans frais.
        </p>
        <Link
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#EC680A] px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#D45E09]"
        >
          Être contacté
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
