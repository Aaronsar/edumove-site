"use client";

import Link from "next/link";
import {
  AlertTriangle,
  GraduationCap,
  Globe,
  Building2,
  Rocket,
} from "lucide-react";
import { SectionTitle, Callout } from "@/components/blog/ArticleLayout";

/* ---------- SOMMAIRE ---------- */

export const sommaire = [
  { id: "constat", label: "Pourquoi tant d\u2019échecs en PASS ?" },
  { id: "alternatives-france", label: "Les alternatives en France" },
  { id: "etudier-europe", label: "Étudier en Europe : comment ça marche" },
  { id: "quelle-universite", label: "Quelle université choisir ?" },
  { id: "se-lancer", label: "Comment se lancer concrètement" },
];

/* ---------- CONTENT ---------- */

export default function EchecPassAlternatives() {
  return (
    <>
      {/* Intro */}
      <p className="text-[#334155] leading-relaxed mb-4">
        Si vous lisez cet article, il y a des chances que vous — ou votre
        enfant — veniez de recevoir les résultats du{" "}
        <strong>PASS ou de la LAS</strong>. Et que ce ne soit pas ceux
        espérés. D&apos;abord, sachez que vous n&apos;êtes pas seul(e) :
        chaque année, <strong>plus de 50&nbsp;000 étudiants</strong> en
        France se retrouvent dans cette situation.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        L&apos;échec en première année de santé n&apos;est pas une fin.
        C&apos;est un moment difficile, oui, mais il existe des{" "}
        <strong>vraies alternatives</strong> — en France et surtout en
        Europe — qui permettent de reprendre le chemin des études de santé
        sans repasser par la case concours. On vous explique tout.
      </p>

      {/* Section 1 */}
      <SectionTitle
        id="constat"
        icon={<AlertTriangle className="w-6 h-6 text-[#EC680A]" />}
      >
        Le constat : pourquoi tant d&apos;échecs en PASS&nbsp;?
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Le système français de sélection en santé est parmi les plus durs
        au monde. Les chiffres parlent d&apos;eux-mêmes :
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        {[
          { value: "80 %", label: "Taux d\u2019échec en première année" },
          { value: "~60 000", label: "Inscrits en PASS/LAS chaque année" },
          { value: "2-3 ans", label: "Durée moyenne avant réorientation" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-[#fafbff] border border-gray-200/80 rounded-xl p-5 text-center"
          >
            <p className="text-2xl font-extrabold text-[#615CA5]">
              {stat.value}
            </p>
            <p className="text-xs text-[#64748b] mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <p className="text-[#334155] leading-relaxed mb-4">
        Le <strong>numerus apertus</strong> (qui a remplacé le numerus
        clausus en 2021) n&apos;a pas fondamentalement changé la donne : le
        nombre de places reste très limité par rapport au nombre de
        candidats. Et derrière les statistiques, il y a des réalités
        humaines : du stress, de la pression familiale, des années entières
        consacrées à un objectif qui ne se concrétise pas.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Ce n&apos;est pas une question d&apos;intelligence ou de
        motivation. Le système est conçu pour éliminer, pas pour former.
        Beaucoup d&apos;étudiants brillants se retrouvent recalés
        simplement parce que les places manquent.
      </p>

      {/* Section 2 */}
      <SectionTitle
        id="alternatives-france"
        icon={<GraduationCap className="w-6 h-6 text-[#EC680A]" />}
      >
        Les alternatives en France : ce qui existe (et leurs limites)
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Après un échec en PASS, plusieurs options s&apos;offrent à vous en
        restant en France. Soyons honnêtes sur chacune :
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-[#fafbff] border border-gray-200/80 rounded-xl p-5">
          <h4 className="font-bold text-sm text-[#1B1D3A] mb-2">
            Redoubler en LAS
          </h4>
          <p className="text-sm text-[#334155] leading-relaxed">
            C&apos;est l&apos;option la plus courante. Le problème : vous
            repartez en compétition avec des primo-arrivants motivés et de
            nouveaux redoublants. Le taux de réussite en deuxième tentative
            est <strong>à peine meilleur</strong> que la première année. Et
            depuis la réforme, vous n&apos;avez le droit qu&apos;à{" "}
            <strong>deux tentatives maximum</strong>.
          </p>
        </div>
        <div className="bg-[#fafbff] border border-gray-200/80 rounded-xl p-5">
          <h4 className="font-bold text-sm text-[#1B1D3A] mb-2">
            Les passerelles
          </h4>
          <p className="text-sm text-[#334155] leading-relaxed">
            Elles existent, mais elles sont <strong>extrêmement
            sélectives</strong> (parfois 5-10 places par fac). Il faut
            généralement un diplôme de niveau L2 ou L3 minimum, un
            excellent dossier, et réussir un entretien. Concrètement, c&apos;est
            une solution pour très peu d&apos;étudiants.
          </p>
        </div>
        <div className="bg-[#fafbff] border border-gray-200/80 rounded-xl p-5">
          <h4 className="font-bold text-sm text-[#1B1D3A] mb-2">
            Se réorienter en France
          </h4>
          <p className="text-sm text-[#334155] leading-relaxed">
            C&apos;est un choix respectable — mais quand la santé est une
            vocation, changer de voie n&apos;est pas toujours la bonne
            réponse. Beaucoup d&apos;étudiants réorientés gardent un
            sentiment de frustration et finissent par retenter plus tard.
          </p>
        </div>
      </div>

      <Callout variant="warning">
        <strong>En résumé :</strong> les alternatives françaises existent
        mais restent très compétitives ou impliquent de renoncer à votre
        projet de santé. C&apos;est là que l&apos;Europe entre en jeu.
      </Callout>

      {/* Section 3 */}
      <SectionTitle
        id="etudier-europe"
        icon={<Globe className="w-6 h-6 text-[#EC680A]" />}
      >
        Étudier en Europe : comment ça marche concrètement
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Ce que beaucoup ignorent, c&apos;est que plusieurs{" "}
        <strong>universités en Espagne et en Italie</strong> proposent des
        cursus de santé complets — médecine, dentaire, kiné, pharmacie,
        vétérinaire — avec un mode d&apos;admission très différent de la
        France.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {[
          {
            title: "Admission sur dossier ou test",
            desc: "Pas de concours. Selon l\u2019université, l\u2019entrée se fait sur dossier, entretien ou test d\u2019entrée (type QCM). Le taux de sélection est bien plus favorable qu\u2019en France.",
          },
          {
            title: "Diplôme reconnu dans toute l\u2019UE",
            desc: "Grâce à la directive européenne 2005/36/CE, votre diplôme est automatiquement reconnu en France. Vous pouvez exercer comme n\u2019importe quel diplômé français.",
          },
          {
            title: "Pas besoin de parler la langue",
            desc: "Plusieurs universités proposent des cours en anglais ou en français. Et pour les cursus en espagnol ou en italien, un accompagnement linguistique est prévu.",
          },
          {
            title: "Pratique clinique dès les premières années",
            desc: "Contrairement au système français très théorique en début de cursus, les stages en hôpital et cliniques commencent tôt.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl border border-gray-200/80 p-5 hover:shadow-[0_15px_40px_-12px_rgba(97,92,165,0.12)] transition-shadow duration-300"
          >
            <h4 className="font-bold text-sm text-[#1B1D3A] mb-2">
              {item.title}
            </h4>
            <p className="text-xs text-[#64748b] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <p className="text-[#334155] leading-relaxed mb-4">
        Pour bien comprendre le processus de reconnaissance au retour,
        consultez notre article dédié sur la{" "}
        <Link
          href="/blog/reconnaissance-diplomes-europeens"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          reconnaissance des diplômes européens en France
        </Link>
        .
      </p>

      <Callout variant="info">
        <strong>Bon à savoir :</strong> en 2022, plus de{" "}
        <strong>2&nbsp;300 étudiants français</strong> étaient inscrits en
        dentaire en Espagne. Et en 2023, 40&nbsp;% des nouveaux
        chirurgiens-dentistes inscrits à l&apos;Ordre en France avaient un
        diplôme espagnol. C&apos;est devenu un parcours courant, pas une
        exception.
      </Callout>

      {/* Section 4 */}
      <SectionTitle
        id="quelle-universite"
        icon={<Building2 className="w-6 h-6 text-[#EC680A]" />}
      >
        Quelle université choisir&nbsp;?
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Il existe plusieurs universités partenaires qui accueillent des
        étudiants français. Voici un comparatif rapide pour vous aider à y
        voir clair :
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1B1D3A]">
              <th
                className="text-left p-3 font-semibold text-xs"
                style={{ color: "#ffffff" }}
              >
                Université
              </th>
              <th
                className="text-left p-3 font-semibold text-xs"
                style={{ color: "#ffffff" }}
              >
                Ville
              </th>
              <th
                className="text-left p-3 font-semibold text-xs"
                style={{ color: "#ffffff" }}
              >
                Filières
              </th>
              <th
                className="text-left p-3 font-semibold text-xs"
                style={{ color: "#ffffff" }}
              >
                Admission
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="hover:bg-gray-50">
              <td className="p-3 font-semibold text-[#1B1D3A]">
                <Link
                  href="/universites/universidad-europea"
                  className="hover:text-[#EC680A] transition-colors"
                >
                  Universidad Europea
                </Link>
              </td>
              <td className="p-3 text-[#334155]">
                5 campus en Espagne
              </td>
              <td className="p-3 text-[#334155]">
                <Link href="/formations/medecine" className="text-[#EC680A] hover:underline">Médecine</Link>,{" "}
                <Link href="/formations/dentaire" className="text-[#EC680A] hover:underline">Dentaire</Link>,{" "}
                <Link href="/formations/kinesitherapie" className="text-[#EC680A] hover:underline">Kiné</Link>,{" "}
                <Link href="/formations/pharmacie" className="text-[#EC680A] hover:underline">Pharmacie</Link>,{" "}
                <Link href="/formations/veterinaire" className="text-[#EC680A] hover:underline">Véto</Link>
              </td>
              <td className="p-3 text-[#334155]">
                Test PE (QCM)
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 font-semibold text-[#1B1D3A]">
                <Link
                  href="/universites/ucjc"
                  className="hover:text-[#EC680A] transition-colors"
                >
                  UCJC
                </Link>
              </td>
              <td className="p-3 text-[#334155]">Madrid</td>
              <td className="p-3 text-[#334155]">
                Dentaire, Kiné, Pharmacie
              </td>
              <td className="p-3 text-[#334155]">
                Entretien (pas de test)
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 font-semibold text-[#1B1D3A]">
                <Link
                  href="/universites/link-campus"
                  className="hover:text-[#EC680A] transition-colors"
                >
                  LINK Campus
                </Link>
              </td>
              <td className="p-3 text-[#334155]">Rome</td>
              <td className="p-3 text-[#334155]">
                Médecine, Dentaire, Kiné, Pharmacie
              </td>
              <td className="p-3 text-[#334155]">
                QCM en français
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-[#334155] leading-relaxed mb-4">
        L&apos;avantage de l&apos;UCJC, c&apos;est qu&apos;il n&apos;y a{" "}
        <strong>aucun test écrit</strong> — l&apos;admission se fait sur
        entretien. Pour l&apos;Universidad Europea, il faut passer le{" "}
        <Link
          href="/guides/reussir-test-pe-universidad-europea"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          test PE
        </Link>{" "}
        (on a un guide complet pour le préparer). Et pour LINK Campus, le{" "}
        <Link
          href="/guides/reussir-test-admission-link-campus"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          QCM se passe à Paris, en français
        </Link>
        .
      </p>

      {/* Section 5 */}
      <SectionTitle
        id="se-lancer"
        icon={<Rocket className="w-6 h-6 text-[#EC680A]" />}
      >
        Comment se lancer concrètement
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Si l&apos;option Europe vous parle, voici les prochaines étapes
        concrètes :
      </p>

      <ul className="space-y-2 mb-6">
        {[
          "Remplir le formulaire de candidature sur candidature.edumove.fr — c\u2019est gratuit et sans engagement",
          "Un conseiller Edumove vous rappelle sous 24h pour analyser votre profil",
          "Ensemble, on choisit la filière et l\u2019université qui correspondent le mieux à votre situation",
          "On monte le dossier, on prépare le test ou l\u2019entretien si nécessaire",
          "Vous recevez votre confirmation d\u2019admission en 2 à 4 semaines",
        ].map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#EC680A] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              {i + 1}
            </span>
            <span className="text-sm text-[#334155] leading-relaxed">
              {step}
            </span>
          </li>
        ))}
      </ul>

      <Callout variant="info">
        <strong>100&nbsp;% gratuit :</strong> l&apos;accompagnement Edumove
        ne vous coûte rien. Zéro. On est rémunérés par les universités
        partenaires. Conseil, dossier, préparation aux tests, suivi
        administratif, aide au logement — tout est inclus.
      </Callout>

      <p className="text-[#334155] leading-relaxed mb-4">
        Pour comprendre le processus en détail, lisez notre{" "}
        <Link
          href="/guides/presenter-sa-candidature"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          guide complet pour présenter sa candidature
        </Link>
        . Et si la question du financement vous bloque, on a aussi un
        article sur{" "}
        <Link
          href="/blog/financer-etudes-sante-europe"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          comment financer ses études sans avancer un centime
        </Link>
        .
      </p>

      <p className="text-[#334155] leading-relaxed mb-4">
        Un échec en PASS, c&apos;est un mur. Mais il y a une porte juste à
        côté. Des milliers d&apos;étudiants français l&apos;ont trouvée
        avant vous.{" "}
        <a
          href="https://candidature.edumove.fr"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          Candidatez gratuitement
        </a>{" "}
        et un conseiller vous recontacte pour en parler.
      </p>
    </>
  );
}
