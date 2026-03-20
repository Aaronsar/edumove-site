"use client";

import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Phone,
  GraduationCap,
  Users,
  Globe,
  Shield,
  Heart,
  Target,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import ContactButton from "@/components/shared/ContactButton";
import StickyBar from "@/components/program/StickyBar";
import UniversitesSection from "@/components/home/UniversitesSection";
import TestimonialsCarousel from "@/components/shared/TestimonialsCarousel";

/* ---------- DATA ---------- */

const stats = [
  { value: "500+", label: "Étudiants accompagnés", icon: Users },
  { value: "3", label: "Universités partenaires", icon: GraduationCap },
  { value: "5", label: "Filières de santé", icon: BookOpen },
  { value: "2", label: "Pays européens", icon: Globe },
];

const values = [
  {
    icon: Heart,
    title: "Accessibilité",
    desc: "Nous croyons que chaque étudiant mérite d'accéder à des études de santé de qualité, quelle que soit sa moyenne au bac ou son parcours scolaire.",
  },
  {
    icon: Shield,
    title: "Transparence",
    desc: "Nos tarifs sont clairs, nos engagements précis. Nous ne promettons que ce que nous pouvons tenir — et nous tenons toujours nos promesses.",
  },
  {
    icon: Target,
    title: "Du sur-mesure",
    desc: "Chaque étudiant est différent. On adapte les conseils et le suivi à votre profil, vos ambitions et votre situation perso.",
  },
  {
    icon: Users,
    title: "Proximité",
    desc: "Un conseiller dédié qui vous suit du premier appel jusqu'à votre arrivée sur place. On reste joignable, toujours.",
  },
];

const steps = [
  {
    num: "01",
    title: "Premier échange gratuit",
    desc: "Un conseiller Edumove analyse votre profil, vos ambitions et vous oriente vers les formations les plus adaptées.",
  },
  {
    num: "02",
    title: "Constitution du dossier",
    desc: "Nous vous aidons à préparer un dossier solide : bulletins, lettre de motivation, documents administratifs.",
  },
  {
    num: "03",
    title: "Candidature & test d'admission",
    desc: "Envoi des candidatures aux universités partenaires et préparation complète aux tests d'entrée (test PE, QCM LINK, entretien UCJC).",
  },
  {
    num: "04",
    title: "Admission & financement",
    desc: "Réponse de l'université, mise en place du financement avec notre partenaire LCL (prêt jusqu'à 75 000 €).",
  },
  {
    num: "05",
    title: "Installation & suivi",
    desc: "Aide au logement, démarches administratives, assurance, et accompagnement continu même après votre arrivée sur place.",
  },
];

const mediaCoverage = ["BFMTV", "Forbes", "LCL", "L'Étudiant", "Le Figaro"];

/* ---------- COMPONENT ---------- */

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[#1B1D3A] overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#615CA5]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EC680A]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <nav
            className="flex items-center gap-1.5 text-sm mb-6"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <Link href="/" className="hover:text-white/70 transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span style={{ color: "rgba(255,255,255,0.7)" }} className="font-medium">
              À propos
            </span>
          </nav>
          <p className="text-[#EC680A] text-xs uppercase tracking-widest font-semibold mb-3">
            Qui sommes-nous ?
          </p>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            style={{ color: "#ffffff" }}
          >
            N°1 de l&apos;accompagnement
            <br />
            <span className="text-[#EC680A]">études de santé en Europe</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Edumove accompagne chaque année des centaines d&apos;étudiants vers les meilleures
            universités de santé en Europe. Orientation, candidature, financement, installation
            — on s&apos;occupe de tout, avec vous.
          </p>

          {/* Ils parlent de nous */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-xs uppercase tracking-widest text-white/30 mb-4">
              Ils parlent de nous
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              {mediaCoverage.map((m) => (
                <span
                  key={m}
                  className="text-base font-bold text-white/20"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-8 z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center"
                >
                  <Icon className="w-6 h-6 text-[#EC680A] mx-auto mb-3" />
                  <p className="text-2xl md:text-3xl font-bold text-[#1B1D3A]">{s.value}</p>
                  <p className="text-xs text-[#64748b] mt-1">{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notre mission */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#EC680A] text-xs uppercase tracking-widest font-semibold mb-3">
              Notre mission
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-6">
              Ouvrir les portes des études de santé à tous les étudiants motivés
            </h2>
            <p className="text-[#334155] leading-relaxed">
              En France, le système PASS/LAS ne laisse passer qu&apos;une minorité d&apos;étudiants
              avec un taux d&apos;échec dépassant 80 %. Pourtant, des universités européennes
              prestigieuses offrent des formations de qualité, avec des diplômes reconnus dans toute
              l&apos;Union européenne grâce à la directive 2005/36/CE.
            </p>
            <p className="text-[#334155] leading-relaxed mt-4">
              Edumove est né de cette conviction : <strong>chaque étudiant motivé mérite sa chance</strong>.
              Nous avons créé un accompagnement complet pour transformer un projet d&apos;études en
              Europe en une réalité concrète, accessible et sécurisée.
            </p>
          </div>

          {/* Valeurs */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#EC680A]/20 hover:shadow-md transition-all"
                >
                  <span className="w-10 h-10 rounded-xl bg-[#EC680A]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#EC680A]" />
                  </span>
                  <h3 className="font-bold text-[#1B1D3A] mb-2">{v.title}</h3>
                  <p className="text-sm text-[#334155] leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#EC680A] text-xs uppercase tracking-widest font-semibold mb-3">
              Comment ça marche
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A]">
              Un accompagnement en 5 étapes
            </h2>
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex gap-5 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <span className="shrink-0 w-12 h-12 rounded-xl bg-[#EC680A] flex items-center justify-center text-white font-bold text-sm">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-bold text-[#1B1D3A] mb-1">{step.title}</h3>
                  <p className="text-sm text-[#334155] leading-relaxed">{step.desc}</p>
                  {i === 0 && (
                    <Link
                      href="/guides/presenter-sa-candidature"
                      className="inline-flex items-center gap-1 text-sm text-[#EC680A] font-medium mt-2 hover:underline"
                    >
                      Voir le guide de candidature <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                  {i === 2 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Link
                        href="/guides/reussir-test-pe-universidad-europea"
                        className="text-xs text-[#EC680A] font-medium hover:underline"
                      >
                        Guide test PE →
                      </Link>
                      <Link
                        href="/guides/reussir-test-admission-link-campus"
                        className="text-xs text-[#EC680A] font-medium hover:underline"
                      >
                        Guide test LINK →
                      </Link>
                    </div>
                  )}
                  {i === 3 && (
                    <Link
                      href="/blog/financer-etudes-sante-europe"
                      className="inline-flex items-center gap-1 text-sm text-[#EC680A] font-medium mt-2 hover:underline"
                    >
                      En savoir plus sur le financement <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universités partenaires — réutilise le composant de la homepage */}
      <UniversitesSection />

      {/* Témoignages — réutilise le carousel de la homepage */}
      <TestimonialsCarousel />

      {/* Garanties */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#EC680A] text-xs uppercase tracking-widest font-semibold mb-3">
              Nos engagements
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A]">
              Pourquoi choisir Edumove ?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Accompagnement personnalisé : nous nous engageons sur votre admission",
              "Financement jusqu'à 100 % grâce à notre partenariat LCL",
              "Suivi complet, du premier appel jusqu'à l'installation sur place",
              "Préparation complète aux tests d'admission",
              "Diplômes reconnus dans toute l'Union européenne",
              "Un conseiller dédié qui répond sous 2h",
              "500+ étudiants déjà accompagnés avec succès",
              "Partenariats exclusifs avec 3 universités d'excellence",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100"
              >
                <CheckCircle2 className="w-5 h-5 text-[#EC680A] shrink-0 mt-0.5" />
                <p className="text-sm text-[#1B1D3A] font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[#1B1D3A] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div aria-hidden className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#615CA5]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#EC680A]/10 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
                Envie d&apos;en parler ?
              </h2>
              <p className="text-sm mb-8 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
                Un premier échange gratuit et sans engagement avec un conseiller.
                On vous rappelle sous 2h.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="https://candidature.edumove.fr"
                  className="inline-flex items-center gap-2 bg-[#EC680A] text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-[#D45E09] transition-colors"
                >
                  Je candidate
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <ContactButton className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors border border-white/20">
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Être recontacté
                  </span>
                </ContactButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StickyBar />
    </div>
  );
}
