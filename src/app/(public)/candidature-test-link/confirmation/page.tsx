import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Mail, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Dossier envoyé — Edumove",
  robots: { index: false, follow: false },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ nom?: string; prenom?: string }>;
}) {
  const { prenom = "" } = await searchParams;
  const prenomCapitalized = prenom ? prenom.charAt(0).toUpperCase() + prenom.slice(1).toLowerCase() : "";

  return (
    <main>
      {/* HERO */}
      <section className="relative bg-[#1B1D3A] text-white overflow-hidden py-20 md:py-28">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute -top-32 -right-20 w-[420px] h-[420px] rounded-full bg-[#615CA5]/25 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#EC680A]/15 blur-3xl" />
        </div>

        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#EC680A]/20 border-2 border-[#EC680A] mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#EC680A]" />
          </div>

          <h1
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            style={{ color: "#ffffff" }}
          >
            {prenomCapitalized ? `Merci ${prenomCapitalized},` : "Merci,"}<br />
            <span className="text-[#EC680A]">votre dossier est envoyé !</span>
          </h1>

          <p className="text-lg md:text-xl text-white/85 mb-2">
            Votre dossier complet a été automatiquement transmis à l&apos;équipe Edumove.
          </p>
          <p className="text-base text-white/60">
            Vous avez reçu une copie de votre dossier en pièce jointe par email.
          </p>
        </div>
      </section>

      {/* RÉCAP */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#EC680A] mb-3 text-center">
            Ce qui arrive ensuite
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-10 text-center">
            Les prochaines étapes
          </h2>

          <div className="space-y-4">
            {[
              {
                n: 1,
                title: "Votre dossier est en cours d'analyse",
                desc: "Un conseiller Edumove étudie votre candidature, vérifie les pièces et valide votre éligibilité au test LINK Campus.",
              },
              {
                n: 2,
                title: "Un conseiller vous rappelle sous 24h ouvrées",
                desc: "Pour confirmer votre inscription au test du 25 juin à Paris, répondre à vos questions et préparer la suite.",
              },
              {
                n: 3,
                title: "Préparation au test",
                desc: "Vous recevrez nos fiches de révision et un planning de coaching personnalisé jusqu'au jour J.",
              },
            ].map((etape) => (
              <div
                key={etape.n}
                className="flex gap-5 bg-[#fafbff] border border-gray-200 rounded-2xl p-5 md:p-6"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-[#615CA5]/20">
                  {etape.n}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#1B1D3A] text-base md:text-lg mb-1">{etape.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{etape.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-14 md:py-16 bg-gradient-to-br from-[#1B1D3A] via-[#1B1D3A] to-[#615CA5] text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#EC680A]/15 blur-3xl" />

        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-3 tracking-tight"
            style={{ color: "#ffffff" }}
          >
            Une question avant qu&apos;on vous rappelle&nbsp;?
          </h2>
          <p className="text-base text-white/80 mb-8">
            Notre équipe est disponible du lundi au vendredi de 9h à 18h.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+33189744257"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1B1D3A] text-base font-semibold px-7 py-4 rounded-full hover:bg-white/90 transition-all"
            >
              <Phone className="w-5 h-5 text-[#EC680A]" />
              +33 1 89 74 42 57
            </a>
            <a
              href="mailto:admissions@diploma-sante.fr"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white text-base font-semibold px-7 py-4 rounded-full hover:bg-white/15 transition-all"
            >
              <Mail className="w-5 h-5 text-[#EC680A]" />
              admissions@diploma-sante.fr
            </a>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            Retour à l&apos;accueil
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
