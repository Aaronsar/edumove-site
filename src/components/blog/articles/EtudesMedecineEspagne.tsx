"use client";

import Link from "next/link";
import {
  Plane,
  Building2,
  ClipboardCheck,
  BookOpen,
  Stethoscope,
  Calculator,
} from "lucide-react";
import { SectionTitle, Callout } from "@/components/blog/ArticleLayout";

/* ---------- SOMMAIRE ---------- */

export const sommaire = [
  { id: "pourquoi-espagne", label: "Pourquoi l\u2019Espagne attire autant" },
  { id: "universites", label: "Les universités qui acceptent les Français" },
  { id: "admission", label: "Conditions d\u2019admission et tests" },
  { id: "programme", label: "Le programme : 6 ans de médecine" },
  { id: "exercer-france", label: "Revenir exercer en France" },
  { id: "budget", label: "Budget et financement" },
];

/* ---------- CONTENT ---------- */

export default function EtudesMedecineEspagne() {
  return (
    <>
      {/* Intro */}
      <p className="text-[#334155] leading-relaxed mb-4">
        Chaque année, des milliers d&apos;étudiants français partent faire
        leurs études de médecine en Espagne. Et ce n&apos;est pas un hasard.
        Pas de concours PASS, des universités reconnues dans toute
        l&apos;Europe, un cadre de vie agréable — l&apos;Espagne coche
        beaucoup de cases pour ceux qui veulent devenir médecin sans passer
        par la case numerus clausus.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Dans ce guide, on vous explique concrètement comment ça fonctionne :
        quelles universités acceptent les Français, comment se passe
        l&apos;admission, à quoi ressemble le cursus, et surtout comment
        revenir exercer en France avec un diplôme espagnol.
      </p>

      {/* Section 1 */}
      <SectionTitle
        id="pourquoi-espagne"
        icon={<Plane className="w-6 h-6 text-[#EC680A]" />}
      >
        Pourquoi l&apos;Espagne attire autant les étudiants français
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        La réponse tient en quelques points, et aucun n&apos;est anodin.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {[
          {
            title: "Pas de concours",
            desc: "L\u2019admission se fait sur dossier et/ou test. Pas de numerus clausus, pas de PASS, pas d\u2019années perdues à tenter sa chance.",
          },
          {
            title: "Proximité géographique",
            desc: "Madrid est à 2h de vol de Paris. On rentre le week-end si on veut. C\u2019est pas l\u2019autre bout du monde.",
          },
          {
            title: "Diplôme reconnu UE",
            desc: "Grâce à la directive 2005/36/CE, le diplôme de médecine espagnol permet d\u2019exercer dans n\u2019importe quel pays de l\u2019Union européenne.",
          },
          {
            title: "Qualité de la formation",
            desc: "Les universités privées espagnoles investissent massivement dans les labos, les simulations cliniques et les stages en hôpital.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5"
          >
            <h4 className="font-bold text-[#1B1D3A] mb-2">{item.title}</h4>
            <p className="text-sm text-[#334155] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <p className="text-[#334155] leading-relaxed mb-4">
        Il y a aussi un aspect qu&apos;on sous-estime : l&apos;espagnol
        s&apos;apprend vite quand on est immergé. La plupart de nos
        étudiants arrivent avec un niveau scolaire basique et suivent les
        cours confortablement au bout de 6 mois. La langue n&apos;est pas
        un obstacle, c&apos;est un atout de plus sur le CV.
      </p>

      <Callout variant="info">
        Après un{" "}
        <Link
          href="/blog/echec-pass-alternatives"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          échec en PASS
        </Link>
        , l&apos;Espagne est l&apos;alternative la plus choisie par les
        étudiants français en santé. Plus de 4&nbsp;000 Français y
        étudient actuellement la médecine.
      </Callout>

      {/* Section 2 */}
      <SectionTitle
        id="universites"
        icon={<Building2 className="w-6 h-6 text-[#EC680A]" />}
      >
        Les universités qui acceptent les Français
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Edumove travaille avec <strong>deux universités espagnoles</strong>{" "}
        qui proposent médecine aux étudiants français. Chacune a son
        fonctionnement.
      </p>

      {/* UE */}
      <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5 mb-4">
        <h4 className="font-bold text-[#1B1D3A] mb-2 text-lg">
          <Link
            href="/universites/universidad-europea"
            className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
          >
            Universidad Europea (UE)
          </Link>
        </h4>
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[#334155]">
          <p><strong>Campus :</strong> Madrid et Canaries</p>
          <p><strong>Langue :</strong> Espagnol</p>
          <p><strong>Durée :</strong> 6 ans</p>
          <p><strong>Tarif :</strong> 21&nbsp;480&nbsp;€/an (128&nbsp;880&nbsp;€ total)</p>
          <p><strong>Admission :</strong> Test PE (4 épreuves)</p>
          <p><strong>Niveau demandé :</strong> 16-17/20 au bac + 2 spé scientifiques</p>
        </div>
        <p className="text-sm text-[#334155] leading-relaxed mt-3">
          L&apos;UE est le plus grand réseau universitaire privé
          d&apos;Espagne. Le campus de Villaviciosa de Odón (Madrid) est
          immense et très bien équipé. L&apos;admission passe par le{" "}
          <Link
            href="/guides/reussir-test-pe-universidad-europea"
            className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
          >
            test PE (Prueba Específica)
          </Link>
          , composé de 4 épreuves : biologie, chimie, raisonnement logique
          et anglais. C&apos;est sélectif, mais avec une bonne préparation
          c&apos;est tout à fait accessible.
        </p>
      </div>

      {/* UCJC */}
      <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5 mb-6">
        <h4 className="font-bold text-[#1B1D3A] mb-2 text-lg">
          <Link
            href="/universites/ucjc"
            className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
          >
            Universidad Camilo José Cela (UCJC)
          </Link>
        </h4>
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[#334155]">
          <p><strong>Campus :</strong> Madrid</p>
          <p><strong>Langue :</strong> Espagnol</p>
        </div>
        <div className="bg-[#EC680A]/10 border border-[#EC680A]/25 rounded-lg p-3 mt-3">
          <p className="text-sm font-bold text-[#1B1D3A]">
            ⚠️ Médecine COMPLET pour 2026-2027
          </p>
          <p className="text-sm text-[#334155] mt-1">
            La filière médecine à l&apos;UCJC n&apos;accepte plus de
            candidatures pour la rentrée 2026-2027. En revanche, les
            filières{" "}
            <Link
              href="/formations/dentaire"
              className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
            >
              dentaire
            </Link>
            ,{" "}
            <Link
              href="/formations/pharmacie"
              className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
            >
              pharmacie
            </Link>{" "}
            et{" "}
            <Link
              href="/formations/kinesitherapie"
              className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
            >
              kinésithérapie
            </Link>{" "}
            restent ouvertes — et l&apos;admission se fait par entretien
            uniquement, sans test écrit.
          </p>
        </div>
      </div>

      <Callout variant="info">
        Edumove accompagne aussi les étudiants vers{" "}
        <Link
          href="/universites/link-campus"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          LINK Campus University
        </Link>{" "}
        à Rome (Italie) pour médecine. Le test d&apos;admission est un QCM
        en français, et aucun prérequis en italien n&apos;est demandé. Si
        l&apos;Espagne n&apos;est pas votre seule option, ça vaut le coup
        d&apos;y jeter un œil.
      </Callout>

      {/* Section 3 */}
      <SectionTitle
        id="admission"
        icon={<ClipboardCheck className="w-6 h-6 text-[#EC680A]" />}
      >
        Conditions d&apos;admission et tests d&apos;entrée
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        L&apos;admission en médecine en Espagne ne fonctionne pas du tout
        comme en France. Pas de concours national, pas de classement
        impitoyable. Chaque université a son propre processus.
      </p>

      <h3 className="text-xl font-bold text-[#1B1D3A] mt-6 mb-3">
        Le test PE (Universidad Europea)
      </h3>
      <p className="text-[#334155] leading-relaxed mb-4">
        Le PE (Prueba Específica) est un test composé de{" "}
        <strong>4 épreuves</strong> :
      </p>
      <ul className="space-y-2 mb-4 text-[#334155]">
        {[
          "Biologie — QCM et questions ouvertes sur le programme de Terminale",
          "Chimie — même format, niveau Terminale",
          "Raisonnement logique — exercices de logique, séquences, analyse",
          "Anglais — niveau B1-B2 (compréhension + expression)",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="bg-[#EC680A] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              {i + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-[#334155] leading-relaxed mb-4">
        Le test peut se passer en ligne ou en présentiel. Plusieurs
        sessions sont organisées entre février et août. Edumove vous
        prépare avec des annales, des cours de révision et un coaching
        individuel. On en parle en détail dans{" "}
        <Link
          href="/guides/reussir-test-pe-universidad-europea"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          notre guide dédié au test PE
        </Link>
        .
      </p>

      <h3 className="text-xl font-bold text-[#1B1D3A] mt-6 mb-3">
        Le dossier de candidature
      </h3>
      <p className="text-[#334155] leading-relaxed mb-4">
        Quelle que soit l&apos;université, vous devrez fournir :
      </p>
      <ul className="space-y-2 mb-4 text-[#334155]">
        {[
          "Pièce d\u2019identité (carte d\u2019identité ou passeport)",
          "Bulletins scolaires (1ère et Terminale)",
          "Lettre de motivation",
          "Photo d\u2019identité récente",
          "Pour l\u2019UE : un rapport technique préparé avec votre conseiller Edumove",
        ].map((doc, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-[#615CA5] font-bold mt-0.5">•</span>
            <span>{doc}</span>
          </li>
        ))}
      </ul>
      <p className="text-[#334155] leading-relaxed mb-4">
        Pour le détail complet des démarches, lisez{" "}
        <Link
          href="/guides/presenter-sa-candidature"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          notre guide pour présenter sa candidature
        </Link>
        .
      </p>

      <Callout variant="warning">
        Les places en médecine partent vite — surtout à l&apos;UE où les
        sessions PE ont un nombre limité de places. On recommande de
        commencer les démarches dès janvier-février pour une rentrée en
        septembre.
      </Callout>

      {/* Section 4 */}
      <SectionTitle
        id="programme"
        icon={<BookOpen className="w-6 h-6 text-[#EC680A]" />}
      >
        Le programme : à quoi ressemblent 6 ans de médecine
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Le cursus de médecine en Espagne dure 6 ans, comme en France
        (hors internat). Le programme est structuré pour alterner théorie
        et pratique dès les premières années.
      </p>

      <div className="space-y-3 mb-6">
        {[
          {
            years: "Années 1-2",
            title: "Sciences fondamentales",
            desc: "Anatomie, physiologie, biochimie, histologie. Cours magistraux + travaux pratiques en labo. C\u2019est la base.",
          },
          {
            years: "Années 3-4",
            title: "Sciences cliniques",
            desc: "Pathologie, pharmacologie, sémiologie. Les stages en hôpital commencent, d\u2019abord en observation puis progressivement en pratique.",
          },
          {
            years: "Années 5-6",
            title: "Stages cliniques intensifs",
            desc: "Rotations dans les différents services : médecine interne, chirurgie, pédiatrie, gynécologie, urgences. Vous êtes au contact des patients quotidiennement.",
          },
        ].map((phase) => (
          <div
            key={phase.years}
            className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#615CA5] text-white text-xs font-bold px-3 py-1 rounded-full">
                {phase.years}
              </span>
              <h4 className="font-bold text-[#1B1D3A]">{phase.title}</h4>
            </div>
            <p className="text-sm text-[#334155] leading-relaxed">
              {phase.desc}
            </p>
          </div>
        ))}
      </div>

      <p className="text-[#334155] leading-relaxed mb-4">
        Un point important : les cours sont en <strong>espagnol</strong>.
        Ça peut faire peur, mais la réalité rassure vite. Les termes
        médicaux sont largement les mêmes qu&apos;en français (racines
        latines et grecques). Et l&apos;immersion fait son effet : en
        6 mois, la langue n&apos;est plus un problème.
      </p>

      <p className="text-[#334155] leading-relaxed mb-4">
        À l&apos;UE, les promos sont à taille humaine (80-100 étudiants).
        Les profs connaissent votre prénom, l&apos;encadrement est
        personnalisé. C&apos;est très différent de l&apos;amphi de 1&nbsp;500
        places en PASS.
      </p>

      {/* Section 5 */}
      <SectionTitle
        id="exercer-france"
        icon={<Stethoscope className="w-6 h-6 text-[#EC680A]" />}
      >
        Revenir exercer en France
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        C&apos;est LA question que tout le monde se pose. Et la réponse est
        claire : <strong>oui, vous pouvez exercer en France</strong> avec
        un diplôme de médecine espagnol.
      </p>

      <p className="text-[#334155] leading-relaxed mb-4">
        Le cadre légal est posé par la{" "}
        <strong>directive européenne 2005/36/CE</strong> sur la
        reconnaissance des qualifications professionnelles. En résumé :
        tout diplôme de médecine obtenu dans un pays de l&apos;UE est
        reconnu dans tous les autres pays membres. On détaille tout dans{" "}
        <Link
          href="/blog/reconnaissance-diplomes-europeens"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          notre article sur la reconnaissance des diplômes
        </Link>
        .
      </p>

      <h3 className="text-xl font-bold text-[#1B1D3A] mt-6 mb-3">
        Les étapes concrètes au retour
      </h3>
      <ol className="space-y-3 mb-6 text-[#334155]">
        {[
          "Obtenir votre titre de médecin espagnol (Grado en Medicina)",
          "Faire reconnaître votre diplôme auprès du ministère de la Santé français",
          "S\u2019inscrire au Conseil National de l\u2019Ordre des Médecins",
          "Passer les Épreuves de Vérification des Connaissances (EVC) si vous souhaitez faire une spécialité en France",
        ].map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="bg-[#615CA5] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              {i + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <Callout variant="info">
        La reconnaissance est automatique pour la médecine générale.
        Pour les spécialités, les EVC sont l&apos;équivalent de
        l&apos;internat français. C&apos;est un examen, pas un concours :
        il n&apos;y a pas de numerus clausus. Les diplômés européens y
        ont accès dans les mêmes conditions que les diplômés français.
      </Callout>

      <p className="text-[#334155] leading-relaxed mb-4">
        Autre option : vous pouvez aussi rester en Espagne, exercer dans
        un autre pays de l&apos;UE, ou alterner entre plusieurs pays. Le
        diplôme européen vous donne une mobilité que le système français
        seul ne permet pas.
      </p>

      {/* Section 6 */}
      <SectionTitle
        id="budget"
        icon={<Calculator className="w-6 h-6 text-[#EC680A]" />}
      >
        Budget et financement
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        La médecine est la filière la plus chère, c&apos;est un fait. Voici
        les deux options actuelles en Espagne :
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5 text-center">
          <p className="text-xs text-[#64748b] uppercase tracking-wide mb-1">
            Universidad Europea
          </p>
          <p className="text-2xl font-bold text-[#1B1D3A]">
            128&nbsp;880&nbsp;€
          </p>
          <p className="text-sm text-[#64748b]">
            21&nbsp;480&nbsp;€/an × 6 ans
          </p>
        </div>
        <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5 text-center">
          <p className="text-xs text-[#64748b] uppercase tracking-wide mb-1">
            LINK Campus (Rome)
          </p>
          <p className="text-2xl font-bold text-[#1B1D3A]">
            118&nbsp;800&nbsp;€
          </p>
          <p className="text-sm text-[#64748b]">
            19&nbsp;800&nbsp;€/an × 6 ans
          </p>
        </div>
      </div>

      <p className="text-[#334155] leading-relaxed mb-4">
        Ça représente un investissement important, mais qui est{" "}
        <strong>finançable à 100&nbsp;%</strong> grâce au prêt étudiant. Le
        partenariat Edumove × LCL permet d&apos;emprunter jusqu&apos;à
        75&nbsp;000&nbsp;€ avec un différé total : vous ne remboursez
        qu&apos;après votre diplôme.
      </p>

      <p className="text-[#334155] leading-relaxed mb-4">
        Ajoutez la bourse CROUS (maintenue pour les études en Europe),
        les aides régionales et la possibilité de travailler à côté —
        beaucoup de nos étudiants financent leur cursus sans que leurs
        parents avancent un seul euro.
      </p>

      <p className="text-[#334155] leading-relaxed mb-4">
        Pour tous les détails chiffrés, consultez{" "}
        <Link
          href="/blog/cout-etudes-sante-europe"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          notre article sur le coût des études en Europe
        </Link>{" "}
        et{" "}
        <Link
          href="/blog/financer-etudes-sante-europe"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          celui sur le financement
        </Link>
        .
      </p>

      <Callout variant="info">
        Un médecin généraliste en France gagne entre 4&nbsp;500 et
        7&nbsp;000&nbsp;€ net par mois. Un spécialiste bien plus. Le prêt
        de 75&nbsp;000&nbsp;€ se rembourse en 8-10 ans avec des
        mensualités confortables par rapport au salaire. L&apos;investissement
        est rentable, et surtout : vous exercez le métier que vous avez
        choisi.
      </Callout>

      <p className="text-[#334155] leading-relaxed mb-4">
        Faire médecine en Espagne, c&apos;est un vrai projet. Ça demande
        de la motivation, du travail et un investissement financier. Mais
        c&apos;est surtout une porte ouverte sur une carrière que le système
        français rend inaccessible à la majorité des étudiants. Si ça vous
        parle,{" "}
        <Link
          href="https://candidature.edumove.fr"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          contactez-nous
        </Link>{" "}
        — un conseiller vous rappelle sous 24h pour faire le point sur votre
        situation. L&apos;accompagnement Edumove est gratuit.
      </p>
    </>
  );
}
