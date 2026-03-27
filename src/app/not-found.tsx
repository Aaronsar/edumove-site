import Link from "next/link";
import { ArrowRight, Phone, Home, GraduationCap, Euro, HelpCircle, MapPin } from "lucide-react";

const QUICK_LINKS = [
  {
    icon: Home,
    title: "Accueil",
    desc: "Retourner à la page d'accueil",
    href: "/",
  },
  {
    icon: GraduationCap,
    title: "Nos formations",
    desc: "Médecine, dentaire, kiné, pharmacie, vétérinaire",
    href: "/formations/medecine",
  },
  {
    icon: Euro,
    title: "Financement",
    desc: "Prêt LCL à partir de 75 000 €",
    href: "/financement",
  },
  {
    icon: HelpCircle,
    title: "Questions fréquentes",
    desc: "Trouvez rapidement une réponse",
    href: "/questions-frequentes",
  },
  {
    icon: MapPin,
    title: "Vie étudiante",
    desc: "Madrid, Rome, Valence, Malaga",
    href: "/vie-etudiante/madrid",
  },
  {
    icon: Phone,
    title: "Contact",
    desc: "Un conseiller vous rappelle sous 24h",
    href: "/contact",
  },
];

export default function NotFound() {
  return (
    <>
      {/* Hero 404 */}
      <section className="relative w-full bg-[#1b1d3a] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#615ca5]/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#ec680a]/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 w-full py-16 md:py-24 text-center">
          {/* Big 404 + Avion */}
          <div className="relative inline-block mb-2">
            <p className="text-[120px] md:text-[160px] font-bold leading-none" style={{ color: "#EC680A", opacity: 0.15 }}>
              404
            </p>
            <svg
              viewBox="0 0 512 512"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] md:w-[240px] h-auto -rotate-12"
              style={{ opacity: 0.12 }}
              fill="#EC680A"
            >
              <path d="M511.4 37.9c1.2-5.7-.8-11.6-5.2-15.2s-10.5-4.6-15.8-2.5L12.3 218.7C4.9 221.8 0 229.1 0 237.1c0 8 4.8 15.2 12.2 18.3l143.5 60.7 30.4 155.3c1.3 6.6 6.4 11.9 13 13.4 1.3.3 2.7.5 4 .5 5.3 0 10.3-2.7 13.2-7.2l59.6-92.7 106.6 45.1c2.1.9 4.3 1.3 6.5 1.3 2.7 0 5.4-.7 7.8-2 4.5-2.5 7.5-7 8.2-12l41.2-355.7c.2-1.6.2-3.2.1-4.8zM394.3 82.1L194.8 293.3l-124-52.5L394.3 82.1zM219 440.4l-22.5-115 98.4-104.9-75.9 219.9zm178-57.6l-120-50.8L432 116.5 397 382.8z" />
            </svg>
          </div>

          <h1
            className="text-2xl md:text-4xl font-bold leading-tight mb-4 -mt-10 md:-mt-14"
            style={{ color: "#ffffff" }}
          >
            Cette page s&apos;est envolée vers l&apos;Europe !
          </h1>

          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            La page que vous cherchez n&apos;existe pas ou a été déplacée.
            Pas de panique, on vous remet sur la bonne voie.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-8 py-3.5 rounded-[5px] transition-all hover:shadow-xl hover:shadow-[#ec680a]/20"
            >
              Retour à l&apos;accueil
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-8 py-3.5 rounded-[5px] hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" />
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#1B1D3A] mb-2 text-center">
            Peut-être cherchiez-vous...
          </h2>
          <p className="text-[#64748b] mb-8 text-center">
            Voici les pages les plus consultées de notre site.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {QUICK_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-start gap-4 bg-[#fafbff] hover:bg-[#615CA5]/5 border border-[#e2e2ef] hover:border-[#615CA5]/30 rounded-xl p-5 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ec680a]/10 to-[#615CA5]/10 border border-[#ec680a]/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#ec680a]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors">
                      {link.title}
                    </p>
                    <p className="text-xs text-[#64748b] mt-0.5">
                      {link.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Candidature */}
      <section className="py-10 md:py-14 bg-[#fafbff] border-t border-[#e2e2ef]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#1B1D3A] mb-3">
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-[#64748b] mb-6">
            Déposez votre candidature en ligne ou appelez-nous au +33 1 89 74 42 57.
          </p>
          <a
            href="https://candidature.edumove.fr"
            className="inline-flex items-center gap-2 bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-8 py-3.5 rounded-[5px] transition-all hover:shadow-xl hover:shadow-[#ec680a]/20"
          >
            Déposer ma candidature
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
