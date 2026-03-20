"use client";

import Link from "next/link";
import {
  Euro,
  Building2,
  Scale,
  Globe,
  TrendingUp,
} from "lucide-react";
import { SectionTitle, Callout } from "@/components/blog/ArticleLayout";

/* ---------- SOMMAIRE ---------- */

export const sommaire = [
  { id: "tarifs-universite", label: "Les tarifs université par université" },
  { id: "comparer-france", label: "Comparer avec la France" },
  { id: "cout-vie", label: "Le coût de la vie sur place" },
  { id: "financer", label: "Comment financer sans avancer 1 €" },
  { id: "retour-investissement", label: "Le retour sur investissement" },
];

/* ---------- CONTENT ---------- */

export default function CoutEtudesSanteEurope() {
  return (
    <>
      {/* Intro */}
      <p className="text-[#334155] leading-relaxed mb-4">
        C&apos;est souvent la première question que posent les familles :
        &laquo;&nbsp;combien ça coûte, concrètement&nbsp;?&nbsp;&raquo;. Et
        c&apos;est normal. Quand on parle d&apos;universités privées en
        Espagne ou en Italie, on imagine des montants astronomiques. La
        réalité est plus nuancée — et surtout, il existe des solutions de{" "}
        <Link
          href="/blog/financer-etudes-sante-europe"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          financement
        </Link>{" "}
        qui changent la donne.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Dans cet article, on met à plat tous les chiffres : frais de
        scolarité, coût de la vie, et on compare avec ce que coûte réellement
        le parcours PASS/LAS en France. Spoiler : l&apos;écart est souvent
        moins grand qu&apos;on le croit.
      </p>

      {/* Section 1 : tarifs-universite */}
      <SectionTitle
        id="tarifs-universite"
        icon={<Euro className="w-6 h-6 text-[#EC680A]" />}
      >
        Les tarifs, université par université
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Voici les tarifs actuels de nos{" "}
        <strong>trois universités partenaires</strong>. Tous les montants
        incluent l&apos;intégralité de la scolarité — pas de frais cachés.
      </p>

      {/* MEDECINE */}
      <h3 className="text-xl font-bold text-[#1B1D3A] mt-8 mb-3">
        Médecine (6 ans)
      </h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border border-[#e2e8f0] rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-[#f8fafc]">
              <th className="text-left px-4 py-3 font-semibold text-[#1B1D3A]">Université</th>
              <th className="text-left px-4 py-3 font-semibold text-[#1B1D3A]">Campus</th>
              <th className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">Par an</th>
              <th className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e2e8f0]">
            <tr>
              <td className="px-4 py-3 text-[#334155]">
                <Link href="/universites/universidad-europea" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
                  Universidad Europea
                </Link>
              </td>
              <td className="px-4 py-3 text-[#334155]">Madrid / Canaries</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">21&nbsp;480&nbsp;€</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">128&nbsp;880&nbsp;€</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-[#334155]">
                <Link href="/universites/link-campus" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
                  LINK Campus
                </Link>
              </td>
              <td className="px-4 py-3 text-[#334155]">Rome</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">19&nbsp;800&nbsp;€</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">118&nbsp;800&nbsp;€</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* DENTAIRE */}
      <h3 className="text-xl font-bold text-[#1B1D3A] mt-8 mb-3">
        Dentaire (5 à 6 ans)
      </h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border border-[#e2e8f0] rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-[#f8fafc]">
              <th className="text-left px-4 py-3 font-semibold text-[#1B1D3A]">Université</th>
              <th className="text-left px-4 py-3 font-semibold text-[#1B1D3A]">Campus</th>
              <th className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">Par an</th>
              <th className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e2e8f0]">
            <tr>
              <td className="px-4 py-3 text-[#334155]">
                <Link href="/universites/universidad-europea" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
                  UE
                </Link>
              </td>
              <td className="px-4 py-3 text-[#334155]">Madrid</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">20&nbsp;820&nbsp;€</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">104&nbsp;100&nbsp;€</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-[#334155]">
                <Link href="/universites/universidad-europea" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
                  UE
                </Link>
              </td>
              <td className="px-4 py-3 text-[#334155]">Malaga</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">19&nbsp;200&nbsp;€</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">96&nbsp;000&nbsp;€</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-[#334155]">
                <Link href="/universites/ucjc" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
                  UCJC
                </Link>
              </td>
              <td className="px-4 py-3 text-[#334155]">Madrid</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">18&nbsp;420&nbsp;€</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">92&nbsp;100&nbsp;€</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-[#334155]">
                <Link href="/universites/link-campus" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
                  LINK Campus
                </Link>
              </td>
              <td className="px-4 py-3 text-[#334155]">Rome</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">19&nbsp;800&nbsp;€</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">118&nbsp;800&nbsp;€</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* KINE */}
      <h3 className="text-xl font-bold text-[#1B1D3A] mt-8 mb-3">
        Kinésithérapie (3 à 4 ans)
      </h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border border-[#e2e8f0] rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-[#f8fafc]">
              <th className="text-left px-4 py-3 font-semibold text-[#1B1D3A]">Université</th>
              <th className="text-left px-4 py-3 font-semibold text-[#1B1D3A]">Campus</th>
              <th className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">Par an</th>
              <th className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e2e8f0]">
            <tr>
              <td className="px-4 py-3 text-[#334155]">
                <Link href="/universites/link-campus" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
                  LINK Campus
                </Link>
              </td>
              <td className="px-4 py-3 text-[#334155]">Rome (3 ans)</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">11&nbsp;900&nbsp;€</td>
              <td className="text-right px-4 py-3 font-semibold text-[#615CA5]">35&nbsp;700&nbsp;€</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-[#334155]">
                <Link href="/universites/ucjc" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
                  UCJC
                </Link>
              </td>
              <td className="px-4 py-3 text-[#334155]">Madrid (4 ans)</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">9&nbsp;420&nbsp;€</td>
              <td className="text-right px-4 py-3 font-semibold text-[#615CA5]">37&nbsp;680&nbsp;€</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-[#334155]">
                <Link href="/universites/universidad-europea" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
                  UE
                </Link>
              </td>
              <td className="px-4 py-3 text-[#334155]">Madrid (4 ans)</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">10&nbsp;020&nbsp;€</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">40&nbsp;080&nbsp;€</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout variant="info">
        La{" "}
        <Link
          href="/formations/kinesitherapie"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          kinésithérapie
        </Link>{" "}
        est la filière la plus accessible financièrement : entre
        35&nbsp;700&nbsp;€ et 40&nbsp;000&nbsp;€ pour l&apos;ensemble du cursus.
        L&apos;UCJC à Madrid est l&apos;option la moins chère par an
        (9&nbsp;420&nbsp;€), LINK à Rome la moins chère en total (3 ans au
        lieu de 4).
      </Callout>

      {/* PHARMACIE */}
      <h3 className="text-xl font-bold text-[#1B1D3A] mt-8 mb-3">
        Pharmacie (5 ans)
      </h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border border-[#e2e8f0] rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-[#f8fafc]">
              <th className="text-left px-4 py-3 font-semibold text-[#1B1D3A]">Université</th>
              <th className="text-left px-4 py-3 font-semibold text-[#1B1D3A]">Campus</th>
              <th className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">Par an</th>
              <th className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e2e8f0]">
            <tr>
              <td className="px-4 py-3 text-[#334155]">
                <Link href="/universites/link-campus" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
                  LINK Campus
                </Link>
              </td>
              <td className="px-4 py-3 text-[#334155]">Rome</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">7&nbsp;900&nbsp;€</td>
              <td className="text-right px-4 py-3 font-semibold text-[#615CA5]">39&nbsp;500&nbsp;€</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-[#334155]">
                <Link href="/universites/ucjc" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
                  UCJC
                </Link>
              </td>
              <td className="px-4 py-3 text-[#334155]">Madrid</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">10&nbsp;140&nbsp;€</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">50&nbsp;700&nbsp;€</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-[#334155]">
                <Link href="/universites/universidad-europea" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
                  UE
                </Link>
              </td>
              <td className="px-4 py-3 text-[#334155]">Madrid</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">12&nbsp;120&nbsp;€</td>
              <td className="text-right px-4 py-3 font-semibold text-[#1B1D3A]">60&nbsp;600&nbsp;€</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* VETERINAIRE */}
      <h3 className="text-xl font-bold text-[#1B1D3A] mt-8 mb-3">
        Vétérinaire (5 ans)
      </h3>
      <p className="text-[#334155] leading-relaxed mb-4">
        Une seule option :{" "}
        <Link
          href="/universites/universidad-europea"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          l&apos;Universidad Europea
        </Link>{" "}
        à Madrid, à <strong>19&nbsp;500&nbsp;€/an</strong> soit{" "}
        <strong>97&nbsp;500&nbsp;€</strong> sur 5 ans. C&apos;est la seule
        fac en Europe avec laquelle Edumove travaille pour{" "}
        <Link
          href="/formations/veterinaire"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          le cursus vétérinaire
        </Link>
        .
      </p>

      {/* Section 2 : comparer-france */}
      <SectionTitle
        id="comparer-france"
        icon={<Scale className="w-6 h-6 text-[#EC680A]" />}
      >
        Comparer avec la France : le vrai calcul
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        En France, la fac publique coûte environ 170&nbsp;€ par an en frais
        d&apos;inscription. Ça a l&apos;air imbattable sur le papier. Mais
        personne ne parle du <strong>coût réel</strong> du parcours
        PASS/LAS.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5">
          <h4 className="font-bold text-[#1B1D3A] mb-3 text-sm uppercase tracking-wide">
            Parcours PASS en France
          </h4>
          <ul className="space-y-2 text-sm text-[#334155]">
            <li className="flex items-start gap-2">
              <span className="text-[#EC680A] font-bold mt-0.5">•</span>
              <span>Prépa privée : 3&nbsp;000 à 5&nbsp;000&nbsp;€/an</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#EC680A] font-bold mt-0.5">•</span>
              <span>2 à 3 ans perdus en moyenne avant d&apos;intégrer (ou pas)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#EC680A] font-bold mt-0.5">•</span>
              <span>Loyer en ville universitaire : 500-800&nbsp;€/mois</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#EC680A] font-bold mt-0.5">•</span>
              <span>Coût total estimé pour 2 tentatives : 25&nbsp;000-40&nbsp;000&nbsp;€</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#EC680A] font-bold mt-0.5">•</span>
              <span>Taux de réussite : environ 20&nbsp;%</span>
            </li>
          </ul>
        </div>
        <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5">
          <h4 className="font-bold text-[#1B1D3A] mb-3 text-sm uppercase tracking-wide">
            Parcours en Europe
          </h4>
          <ul className="space-y-2 text-sm text-[#334155]">
            <li className="flex items-start gap-2">
              <span className="text-[#615CA5] font-bold mt-0.5">•</span>
              <span>Pas de concours : admission sur dossier ou test</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#615CA5] font-bold mt-0.5">•</span>
              <span>Entrée directe en 1ère année : 0 an perdu</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#615CA5] font-bold mt-0.5">•</span>
              <span>Finançable à 100&nbsp;% par prêt étudiant</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#615CA5] font-bold mt-0.5">•</span>
              <span>Remboursement après le diplôme uniquement</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#615CA5] font-bold mt-0.5">•</span>
              <span>
                Diplôme{" "}
                <Link
                  href="/blog/reconnaissance-diplomes-europeens"
                  className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
                >
                  reconnu dans toute l&apos;UE
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-[#334155] leading-relaxed mb-4">
        Quand on compare honnêtement, le surcoût des études en Europe est
        souvent compensé par le <strong>temps gagné</strong>. Un étudiant qui
        entre directement en médecine en Espagne au lieu de tenter deux fois
        le PASS économise au minimum 1 à 2 ans de loyer, de prépa, et de
        stress. Sans compter qu&apos;il commence à exercer — et donc à gagner
        sa vie — plus tôt.
      </p>

      <Callout variant="warning">
        Attention à ne pas comparer uniquement le prix annuel. Un cursus de
        kiné à l&apos;UCJC coûte 37&nbsp;680&nbsp;€ sur 4 ans. En France,
        une école privée de kiné (IFMK privé) coûte entre 7&nbsp;000 et
        9&nbsp;500&nbsp;€/an sur 4 ans — soit 28&nbsp;000 à 38&nbsp;000&nbsp;€.
        L&apos;écart est faible, et en Europe vous n&apos;avez pas besoin de
        valider la première année de PASS avant.
      </Callout>

      {/* Section 3 : cout-vie */}
      <SectionTitle
        id="cout-vie"
        icon={<Globe className="w-6 h-6 text-[#EC680A]" />}
      >
        Le coût de la vie : Madrid vs Rome
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Le budget mensuel dépend beaucoup de la ville et de votre mode de
        vie. Voici une estimation réaliste basée sur les retours de nos
        étudiants.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5">
          <h4 className="font-bold text-[#1B1D3A] mb-3">
            🇪🇸 Madrid
          </h4>
          <ul className="space-y-2 text-sm text-[#334155]">
            <li className="flex justify-between">
              <span>Loyer (coloc)</span>
              <span className="font-semibold">400-600&nbsp;€</span>
            </li>
            <li className="flex justify-between">
              <span>Courses / alimentation</span>
              <span className="font-semibold">200-250&nbsp;€</span>
            </li>
            <li className="flex justify-between">
              <span>Transport (abonnement jeune)</span>
              <span className="font-semibold">20&nbsp;€</span>
            </li>
            <li className="flex justify-between">
              <span>Sorties / loisirs</span>
              <span className="font-semibold">100-150&nbsp;€</span>
            </li>
            <li className="flex justify-between border-t border-[#e2e8f0] pt-2 mt-2">
              <span className="font-bold">Total estimé</span>
              <span className="font-bold text-[#EC680A]">720-1&nbsp;020&nbsp;€/mois</span>
            </li>
          </ul>
        </div>
        <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5">
          <h4 className="font-bold text-[#1B1D3A] mb-3">
            🇮🇹 Rome
          </h4>
          <ul className="space-y-2 text-sm text-[#334155]">
            <li className="flex justify-between">
              <span>Loyer (coloc)</span>
              <span className="font-semibold">450-650&nbsp;€</span>
            </li>
            <li className="flex justify-between">
              <span>Courses / alimentation</span>
              <span className="font-semibold">200-280&nbsp;€</span>
            </li>
            <li className="flex justify-between">
              <span>Transport (abonnement)</span>
              <span className="font-semibold">35&nbsp;€</span>
            </li>
            <li className="flex justify-between">
              <span>Sorties / loisirs</span>
              <span className="font-semibold">100-150&nbsp;€</span>
            </li>
            <li className="flex justify-between border-t border-[#e2e8f0] pt-2 mt-2">
              <span className="font-bold">Total estimé</span>
              <span className="font-bold text-[#EC680A]">785-1&nbsp;115&nbsp;€/mois</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-[#334155] leading-relaxed mb-4">
        Pour les campus hors grandes villes (Malaga, Valence, Alicante,
        Canaries), le budget est souvent <strong>10 à 20&nbsp;% moins
        élevé</strong>, surtout côté loyer. Malaga et Valence offrent un
        excellent rapport qualité de vie / coût.
      </p>

      <Callout variant="info">
        Pour comparaison, un étudiant à Paris ou Lyon dépense en moyenne
        900-1&nbsp;200&nbsp;€/mois tout compris. Madrid et Rome sont dans la
        même fourchette, voire en dessous.
      </Callout>

      {/* Section 4 : financer */}
      <SectionTitle
        id="financer"
        icon={<Building2 className="w-6 h-6 text-[#EC680A]" />}
      >
        Comment financer sans avancer 1&nbsp;€
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        C&apos;est le point qui rassure le plus les familles : il est
        possible de financer la totalité de ses études en Europe{" "}
        <strong>sans sortir un centime de sa poche</strong> au départ. On
        détaille tout dans{" "}
        <Link
          href="/blog/financer-etudes-sante-europe"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          notre article dédié au financement
        </Link>
        , mais voici l&apos;essentiel.
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5">
          <h4 className="font-bold text-[#1B1D3A] mb-2">
            Le prêt étudiant LCL
          </h4>
          <p className="text-sm text-[#334155] leading-relaxed">
            Edumove a un partenariat avec LCL pour des prêts étudiants
            allant jusqu&apos;à <strong>75&nbsp;000&nbsp;€</strong>. Le
            remboursement ne commence qu&apos;après l&apos;obtention du
            diplôme, avec un différé total pendant toute la durée des
            études. Pas de garant nécessaire au-delà du montant garanti par
            l&apos;État.
          </p>
        </div>
        <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5">
          <h4 className="font-bold text-[#1B1D3A] mb-2">
            La bourse du CROUS
          </h4>
          <p className="text-sm text-[#334155] leading-relaxed">
            Peu de gens le savent, mais la bourse sur critères sociaux du
            CROUS est <strong>maintenue pour les études en Europe</strong>.
            Si vous y avez droit en France, vous y avez droit en Espagne ou
            en Italie. Jusqu&apos;à 6&nbsp;335&nbsp;€/an selon l&apos;échelon.
          </p>
        </div>
        <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5">
          <h4 className="font-bold text-[#1B1D3A] mb-2">
            Les aides complémentaires
          </h4>
          <p className="text-sm text-[#334155] leading-relaxed">
            APL maintenues si logement éligible, aides régionales selon
            votre département, et possibilité de travailler à côté
            (autorisé en Espagne et en Italie pour les étudiants européens).
          </p>
        </div>
      </div>

      <Callout variant="info">
        Edumove vous accompagne gratuitement dans le montage du dossier de
        prêt. On a l&apos;habitude : la plupart de nos étudiants passent par
        ce dispositif. Le formulaire est sur{" "}
        <Link
          href="https://candidature.edumove.fr"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          candidature.edumove.fr
        </Link>
        .
      </Callout>

      {/* Section 5 : retour-investissement */}
      <SectionTitle
        id="retour-investissement"
        icon={<TrendingUp className="w-6 h-6 text-[#EC680A]" />}
      >
        Le retour sur investissement
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Parlons chiffres. Un professionnel de santé en France gagne bien sa
        vie — c&apos;est un fait. Voici les salaires moyens en début de
        carrière pour vous donner une idée du retour sur investissement.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {[
          { title: "Médecin généraliste", salary: "4 500 - 7 000 €/mois", note: "En libéral, souvent plus" },
          { title: "Chirurgien-dentiste", salary: "4 000 - 8 000 €/mois", note: "Libéral dès la sortie" },
          { title: "Kinésithérapeute", salary: "2 500 - 4 500 €/mois", note: "Libéral possible dès J1" },
          { title: "Pharmacien", salary: "2 800 - 4 000 €/mois", note: "Officine ou industrie" },
          { title: "Vétérinaire", salary: "2 500 - 4 000 €/mois", note: "Libéral ou clinique" },
          { title: "Médecin spécialiste", salary: "6 000 - 12 000 €/mois", note: "Après internat" },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-4 text-center"
          >
            <p className="text-xs text-[#64748b] uppercase tracking-wide mb-1">
              {item.title}
            </p>
            <p className="text-lg font-bold text-[#1B1D3A]">{item.salary}</p>
            <p className="text-xs text-[#94a3b8] mt-1">{item.note}</p>
          </div>
        ))}
      </div>

      <p className="text-[#334155] leading-relaxed mb-4">
        Prenons un exemple concret. Un étudiant qui fait{" "}
        <Link
          href="/formations/dentaire"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          dentaire à l&apos;UCJC
        </Link>{" "}
        paie 92&nbsp;100&nbsp;€ sur 5 ans. Avec un prêt à taux fixe, ses
        mensualités après le diplôme tournent autour de 800-900&nbsp;€. En
        tant que dentiste débutant en France, il gagne minimum
        4&nbsp;000&nbsp;€ net. Le prêt est remboursé en moins de 10 ans,
        souvent bien avant.
      </p>

      <p className="text-[#334155] leading-relaxed mb-4">
        Pour un kinésithérapeute, le calcul est encore plus rapide : un
        cursus à 37&nbsp;680&nbsp;€ avec des mensualités de
        350-400&nbsp;€ après le diplôme, pour un salaire de
        2&nbsp;500-4&nbsp;500&nbsp;€/mois. L&apos;investissement est
        rentabilisé en 3 à 4 ans.
      </p>

      <Callout variant="info">
        Le diplôme obtenu en Europe est{" "}
        <Link
          href="/blog/reconnaissance-diplomes-europeens"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          reconnu dans toute l&apos;Union européenne
        </Link>
        . Vous pouvez exercer en France, mais aussi dans n&apos;importe
        quel pays de l&apos;UE. Ça ouvre des portes que le système
        français seul ne permet pas.
      </Callout>

      <p className="text-[#334155] leading-relaxed mb-4">
        Au final, le coût des études en Europe n&apos;est pas anodin, mais
        il est <strong>finançable, prévisible et rentable</strong>. Pas de
        mauvaise surprise, pas d&apos;années perdues à tenter un concours.
        Vous savez dès le départ combien ça coûte et comment le financer.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Si vous voulez qu&apos;on fasse le point ensemble sur votre situation,{" "}
        <Link
          href="https://candidature.edumove.fr"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          remplissez le formulaire
        </Link>{" "}
        — un conseiller Edumove vous rappelle sous 24h pour étudier les
        options de financement adaptées à votre projet.
      </p>
    </>
  );
}
