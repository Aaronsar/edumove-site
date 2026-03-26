import Link from "next/link";
import {
  CheckCircle2,
  CalendarDays,
  Clock,
  ArrowRight,
  Phone,
  GraduationCap,
} from "lucide-react";
import ContactButton from "@/components/shared/ContactButton";

const FORMATIONS = [
  { name: "Médecine", slug: "medecine", duration: "6 ans" },
  { name: "Dentaire", slug: "dentaire", duration: "5 ans" },
  { name: "Kinésithérapie", slug: "kinesitherapie", duration: "4 ans" },
  { name: "Pharmacie", slug: "pharmacie", duration: "5 ans" },
  { name: "Vétérinaire", slug: "veterinaire", duration: "5 ans" },
];

const UNIVERSITES = [
  {
    name: "Universidad Europea",
    slug: "universidad-europea",
    short: "UE",
    location: "5 campus en Espagne",
  },
  {
    name: "UCJC Madrid",
    slug: "ucjc",
    short: "UCJC",
    location: "Madrid, Espagne",
  },
  {
    name: "LINK Campus University",
    slug: "link-campus",
    short: "LINK",
    location: "Rome, Italie",
  },
];

const ARTICLES = [
  {
    href: "/blog/cout-etudes-sante-europe",
    tag: "Financement",
    tagColor: "orange",
    title: "Combien coûtent les études de santé en Europe ?",
  },
  {
    href: "/blog/financer-etudes-sante-europe",
    tag: "Financement",
    tagColor: "orange",
    title: "Guide complet du financement",
  },
  {
    href: "/blog/echec-pass-alternatives",
    tag: "Orientation",
    tagColor: "purple",
    title: "Échec au PASS : les alternatives",
  },
  {
    href: "/blog/reconnaissance-diplomes-europeens",
    tag: "Guide",
    tagColor: "purple",
    title: "Reconnaissance des diplômes européens",
  },
];

export default function WebinarThankYouPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO — CONFIRMATION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#1b1d3a] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#615ca5]/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#ec680a]/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 w-full py-14 md:py-20 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-400" />
          </div>

          <h1
            className="text-3xl md:text-4xl font-bold leading-tight mb-4"
            style={{ color: "#ffffff" }}
          >
            Inscription confirmée !
          </h1>

          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            Vous recevrez le lien de connexion par email avant le webinaire.
            Pensez à vérifier vos spams.
          </p>

          {/* Date & Time */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-2.5 bg-white/[0.06] border border-white/10 rounded-xl px-5 py-3">
              <CalendarDays className="w-5 h-5 text-[#ec680a]" />
              <div className="text-left">
                <p className="text-white font-semibold text-sm">
                  Mercredi 15 avril 2026
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 bg-white/[0.06] border border-white/10 rounded-xl px-5 py-3">
              <Clock className="w-5 h-5 text-[#ec680a]" />
              <div className="text-left">
                <p className="text-white font-semibold text-sm">
                  18h30 — Durée 45 min
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. UNIVERSITÉS PARTENAIRES
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-2">
            Découvrez nos universités partenaires
          </h2>
          <p className="text-[#64748b] mb-8">
            En attendant le webinaire, explorez les universités dans lesquelles
            vous pourrez étudier.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {UNIVERSITES.map((uni) => (
              <Link
                key={uni.slug}
                href={`/universites/${uni.slug}`}
                className="group bg-[#fafbff] rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 p-6 transition-all hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#615CA5] flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-sm">
                    {uni.short}
                  </span>
                </div>
                <h3 className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors mb-1">
                  {uni.name}
                </h3>
                <p className="text-sm text-[#64748b]">{uni.location}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. FORMATIONS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-[#fafbff]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-2">
            Nos formations en santé
          </h2>
          <p className="text-[#64748b] mb-8">
            Toutes nos formations sont éligibles au prêt étudiant avec
            remboursement différé.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FORMATIONS.map((f) => (
              <Link
                key={f.slug}
                href={`/formations/${f.slug}`}
                className="group flex items-center justify-between bg-white hover:bg-[#615CA5]/5 border border-[#e2e2ef] hover:border-[#615CA5]/30 rounded-xl px-5 py-4 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ec680a]/10 to-[#615CA5]/10 border border-[#ec680a]/20 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-[#ec680a]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors block">
                      {f.name}
                    </span>
                    <span className="text-xs text-[#64748b]">{f.duration}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#ec680a] transition-colors shrink-0" />
              </Link>
            ))}
            <Link
              href="/financement"
              className="group flex items-center justify-between bg-white hover:bg-[#615CA5]/5 border border-[#e2e2ef] hover:border-[#615CA5]/30 rounded-xl px-5 py-4 transition-all"
            >
              <div>
                <span className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors block">
                  Financement
                </span>
                <span className="text-xs text-[#64748b]">
                  Prêt LCL à partir de 75 000 €
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#ec680a] transition-colors shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. ARTICLES RECOMMANDÉS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-2">
            À lire en attendant le webinaire
          </h2>
          <p className="text-[#64748b] mb-8">
            Préparez-vous au webinaire avec nos articles sur le financement et
            les études en Europe.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ARTICLES.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group bg-[#fafbff] rounded-xl border border-[#e2e2ef] hover:border-[#615CA5]/30 p-5 transition-all hover:shadow-md"
              >
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    article.tagColor === "orange"
                      ? "text-[#EC680A] bg-[#EC680A]/10"
                      : "text-[#615CA5] bg-[#615CA5]/10"
                  }`}
                >
                  {article.tag}
                </span>
                <h4 className="font-bold text-[#1B1D3A] text-sm mt-2 group-hover:text-[#615CA5] transition-colors leading-snug">
                  {article.title}
                </h4>
                <span className="inline-flex items-center gap-1 mt-2 text-xs text-[#64748b] group-hover:text-[#EC680A] transition-colors">
                  Lire <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. CTA FINAL
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-10 md:py-16 bg-[#1B1D3A] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec680a] via-[#615ca5] to-[#ec680a]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: "#ffffff" }}
          >
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-gray-300 mb-8">
            Déposez votre candidature dès maintenant ou contactez un conseiller
            Edumove pour un accompagnement personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://candidature.edumove.fr"
              className="inline-block bg-[#ec680a] hover:bg-[#d45e09] text-white font-semibold px-8 py-3.5 rounded-[5px] transition-all hover:shadow-xl hover:shadow-[#ec680a]/20"
            >
              Déposer ma candidature
            </a>
            <ContactButton className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-8 py-3.5 rounded-[5px] hover:bg-white/10 transition-all">
              <Phone className="w-4 h-4" />
              Être contacté
            </ContactButton>
          </div>
          <p className="text-gray-400 mt-4 text-sm">+33 1 89 74 42 57</p>
        </div>
      </section>
    </>
  );
}
