"use client";

import Link from "next/link";
import {
  Plane,
  Building2,
  ClipboardCheck,
  BookOpen,
  Stethoscope,
  Calculator,
  MapPin,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { SectionTitle, Callout } from "@/components/blog/ArticleLayout";

/* ---------- SOMMAIRE ---------- */

export const sommaire = [
  { id: "pourquoi-espagne", label: "Pourquoi faire dentaire en Espagne" },
  { id: "universites", label: "Les universit\u00e9s partenaires" },
  { id: "admission", label: "Admission et tests d\u2019entr\u00e9e" },
  { id: "programme", label: "Le programme : 5 ans de dentaire" },
  { id: "exercer-france", label: "Exercer en France apr\u00e8s l\u2019Espagne" },
  { id: "budget", label: "Budget et financement" },
  { id: "vie-etudiante", label: "La vie \u00e9tudiante en Espagne" },
  { id: "autres-filieres", label: "Les autres fili\u00e8res en Espagne" },
];

/* ---------- CONTENT ---------- */

export default function EtudesDentaireEspagne() {
  return (
    <>
      {/* Intro */}
      <p className="text-[#334155] leading-relaxed mb-4">
        Tu veux devenir dentiste mais le syst&egrave;me fran&ccedil;ais te ferme
        la porte ? Chaque ann&eacute;e, des milliers d&apos;&eacute;tudiants se
        retrouvent bloqu&eacute;s par le PASS ou le LAS, avec un taux
        d&apos;&eacute;chec qui frôle les 80&nbsp;%. En Espagne, pas de numerus
        clausus, pas de concours couperet&nbsp;: l&apos;admission se fait sur
        dossier, entretien ou test, et le cursus dure{" "}
        <strong>5&nbsp;ans</strong> (contre 6 en France).
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Dans ce guide, on t&apos;explique tout&nbsp;: quelles universit&eacute;s
        acceptent les Fran&ccedil;ais, comment se passe l&apos;admission,
        &agrave; quoi ressemble le programme ann&eacute;e par ann&eacute;e,
        combien &ccedil;a coûte, et surtout comment revenir exercer en France
        avec ton dipl&ocirc;me espagnol.
      </p>

      {/* Section 1 */}
      <SectionTitle
        id="pourquoi-espagne"
        icon={<Plane className="w-6 h-6 text-[#EC680A]" />}
      >
        Pourquoi l&apos;Espagne attire autant les futurs dentistes
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        L&apos;Espagne est devenue la destination n&deg;1 des
        &eacute;tudiants fran&ccedil;ais en dentaire. Et pour de bonnes raisons.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {[
          {
            title: "Pas de concours PASS/LAS",
            desc: "L\u2019admission se fait sur entretien, test ou dossier. Pas de numerus clausus, pas d\u2019ann\u00e9es sacrifi\u00e9es \u00e0 tenter ta chance.",
          },
          {
            title: "Pratique clinique d\u00e8s la 3e ann\u00e9e",
            desc: "Tu travailles sur de vrais patients d\u00e8s le milieu du cursus. Les universit\u00e9s poss\u00e8dent leurs propres cliniques dentaires sur campus.",
          },
          {
            title: "5 campus au choix",
            desc: "Madrid, Valence, Malaga, Alicante, Canaries \u2014 tu choisis la ville qui te correspond. Chaque campus a ses avantages.",
          },
          {
            title: "Proximit\u00e9 avec la France",
            desc: "Madrid est \u00e0 2h de vol de Paris. Tu rentres le week-end si tu veux. C\u2019est l\u2019Europe, pas l\u2019autre bout du monde.",
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
        Et un avantage qu&apos;on sous-estime&nbsp;: les frais de
        scolarit&eacute; en dentaire en Espagne commencent &agrave;{" "}
        <strong>9&nbsp;420&nbsp;&euro;/an</strong>, soit bien moins que
        certaines fac priv&eacute;es fran&ccedil;aises. L&apos;espagnol
        s&apos;apprend vite en immersion &mdash; 6 mois suffisent pour suivre
        les cours confortablement.
      </p>

      <Callout variant="info">
        Apr&egrave;s un{" "}
        <Link
          href="/blog/echec-pass-alternatives"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          &eacute;chec en PASS
        </Link>
        , l&apos;Espagne est l&apos;alternative la plus choisie par les
        &eacute;tudiants fran&ccedil;ais en sant&eacute;. Le dentaire y est
        particuli&egrave;rement accessible, avec un cursus plus court (5 ans vs 6
        en France) et une approche tr&egrave;s clinique.
      </Callout>

      {/* Section 2 */}
      <SectionTitle
        id="universites"
        icon={<Building2 className="w-6 h-6 text-[#EC680A]" />}
      >
        Les universit&eacute;s qui proposent dentaire aux Fran&ccedil;ais
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Edumove travaille avec <strong>trois universit&eacute;s</strong> qui
        proposent des &eacute;tudes dentaires aux &eacute;tudiants
        fran&ccedil;ais. Chacune a son mode d&apos;admission et ses tarifs.
      </p>

      {/* UCJC */}
      <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5 mb-4">
        <h4 className="font-bold text-[#1B1D3A] mb-2 text-lg">
          <Link
            href="/universites/ucjc"
            className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
          >
            Universidad Camilo Jos&eacute; Cela (UCJC)
          </Link>
        </h4>
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[#334155]">
          <p><strong>Campus&nbsp;:</strong> Madrid</p>
          <p><strong>Langue&nbsp;:</strong> Espagnol</p>
          <p><strong>Dur&eacute;e&nbsp;:</strong> 5 ans</p>
          <p><strong>Tarif&nbsp;:</strong> 9&nbsp;420&nbsp;&euro;/an (47&nbsp;100&nbsp;&euro; total)</p>
          <p><strong>Admission&nbsp;:</strong> Entretien de motivation</p>
          <p><strong>Niveau demand&eacute;&nbsp;:</strong> Bac + profil scientifique</p>
        </div>
        <p className="text-sm text-[#334155] leading-relaxed mt-3">
          L&apos;UCJC est l&apos;option la plus abordable pour faire dentaire en
          Espagne. L&apos;admission se fait par un{" "}
          <strong>entretien de motivation</strong> &mdash; pas de test
          &eacute;crit. Le campus est situ&eacute; &agrave; Villafranca del
          Castillo, &agrave; 20 minutes de Madrid, avec une clinique dentaire
          universitaire enti&egrave;rement &eacute;quip&eacute;e o&ugrave; les
          &eacute;tudiants pratiquent d&egrave;s la 3e ann&eacute;e.
        </p>
      </div>

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
          <p><strong>Campus&nbsp;:</strong> Madrid, Valence, Malaga, Alicante, Canaries</p>
          <p><strong>Langue&nbsp;:</strong> Espagnol</p>
          <p><strong>Dur&eacute;e&nbsp;:</strong> 5 ans</p>
          <p><strong>Tarif&nbsp;:</strong> 10&nbsp;020 &agrave; 18&nbsp;900&nbsp;&euro;/an (selon campus)</p>
          <p><strong>Admission&nbsp;:</strong> Test PE (Prueba Espec&iacute;fica)</p>
          <p><strong>Niveau demand&eacute;&nbsp;:</strong> 14-15/20 au bac + profil scientifique</p>
        </div>
        <p className="text-sm text-[#334155] leading-relaxed mt-3">
          L&apos;Universidad Europea est le plus grand r&eacute;seau
          universitaire priv&eacute; d&apos;Espagne avec{" "}
          <strong>5&nbsp;campus</strong> proposant dentaire. L&apos;admission
          passe par le{" "}
          <Link
            href="/guides/reussir-test-pe-universidad-europea"
            className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
          >
            test PE (Prueba Espec&iacute;fica)
          </Link>
          , compos&eacute; de 4 &eacute;preuves&nbsp;: biologie, chimie,
          raisonnement logique et anglais. Les tarifs varient selon le
          campus&nbsp;: Valence et Canaries sont les plus accessibles, Madrid le
          plus &eacute;lev&eacute;.
        </p>
      </div>

      {/* LINK Campus */}
      <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5 mb-6">
        <h4 className="font-bold text-[#1B1D3A] mb-2 text-lg">
          <Link
            href="/universites/link-campus"
            className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
          >
            LINK Campus University
          </Link>
        </h4>
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[#334155]">
          <p><strong>Campus&nbsp;:</strong> Rome (Italie)</p>
          <p><strong>Langue&nbsp;:</strong> Italien (pas de pr&eacute;requis &agrave; l&apos;entr&eacute;e)</p>
          <p><strong>Dur&eacute;e&nbsp;:</strong> 5 ans (+ 1 an de mise &agrave; niveau)</p>
          <p><strong>Tarif&nbsp;:</strong> 7&nbsp;900&nbsp;&euro;/an (47&nbsp;400&nbsp;&euro; total)</p>
          <p><strong>Admission&nbsp;:</strong> QCM en fran&ccedil;ais</p>
          <p><strong>Niveau demand&eacute;&nbsp;:</strong> Bac + profil scientifique</p>
        </div>
        <p className="text-sm text-[#334155] leading-relaxed mt-3">
          LINK Campus University &agrave; Rome propose une alternative
          int&eacute;ressante&nbsp;: le test d&apos;admission est un{" "}
          <strong>QCM en fran&ccedil;ais</strong>, aucun pr&eacute;requis en
          italien n&apos;est demand&eacute;. Le tarif est le plus bas des trois
          options. Si l&apos;Espagne n&apos;est pas ta seule piste, &ccedil;a
          vaut le coup de regarder.
        </p>
      </div>

      <Callout variant="info">
        L&apos;UCJC est la seule universit&eacute; o&ugrave; l&apos;admission en
        dentaire se fait <strong>sans test &eacute;crit</strong> &mdash;
        uniquement par entretien. C&apos;est un avantage &eacute;norme pour les
        &eacute;tudiants qui ne sont pas &agrave; l&apos;aise avec les
        &eacute;preuves &eacute;crites.
      </Callout>

      {/* Section 3 */}
      <SectionTitle
        id="admission"
        icon={<ClipboardCheck className="w-6 h-6 text-[#EC680A]" />}
      >
        Admission et tests d&apos;entr&eacute;e
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Pas de concours national, pas de classement. Chaque universit&eacute; a
        son propre processus d&apos;admission. Voici ce qui t&apos;attend selon
        ton choix.
      </p>

      <h3 className="text-xl font-bold text-[#1B1D3A] mt-6 mb-3">
        Le test PE (Universidad Europea)
      </h3>
      <p className="text-[#334155] leading-relaxed mb-4">
        Le PE (Prueba Espec&iacute;fica) est compos&eacute; de{" "}
        <strong>4 &eacute;preuves</strong>&nbsp;:
      </p>
      <ul className="space-y-2 mb-4 text-[#334155]">
        {[
          "Biologie \u2014 QCM et questions ouvertes sur le programme de Terminale",
          "Chimie \u2014 m\u00eame format, niveau Terminale",
          "Raisonnement logique \u2014 exercices de logique, s\u00e9quences, analyse",
          "Anglais \u2014 niveau B1-B2 (compr\u00e9hension + expression)",
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
        Le test se passe en ligne ou en pr&eacute;sentiel, avec plusieurs
        sessions entre f&eacute;vrier et ao&ucirc;t. Edumove te pr&eacute;pare
        avec des annales, des cours de r&eacute;vision et un coaching
        individuel. On en parle en d&eacute;tail dans{" "}
        <Link
          href="/guides/reussir-test-pe-universidad-europea"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          notre guide d&eacute;di&eacute; au test PE
        </Link>
        .
      </p>

      <h3 className="text-xl font-bold text-[#1B1D3A] mt-6 mb-3">
        L&apos;entretien UCJC
      </h3>
      <p className="text-[#334155] leading-relaxed mb-4">
        &Agrave; l&apos;UCJC, l&apos;admission passe par un{" "}
        <strong>entretien de motivation</strong> (en fran&ccedil;ais ou en
        espagnol). Pas de QCM, pas d&apos;&eacute;preuve &eacute;crite.
        L&apos;universit&eacute; &eacute;value ta motivation, ta
        maturit&eacute; et ton projet professionnel. C&apos;est accessible, mais
        il faut quand m&ecirc;me le pr&eacute;parer s&eacute;rieusement.
        Edumove organise des simulations d&apos;entretien pour ses
        &eacute;tudiants.
      </p>

      <h3 className="text-xl font-bold text-[#1B1D3A] mt-6 mb-3">
        Le QCM LINK Campus
      </h3>
      <p className="text-[#334155] leading-relaxed mb-4">
        &Agrave; LINK Campus, le test est un{" "}
        <strong>QCM en fran&ccedil;ais</strong> couvrant 5 mati&egrave;res&nbsp;:
        biologie, chimie, physique, logique et culture g&eacute;n&eacute;rale.
        Le niveau est celui du bac scientifique. C&apos;est le test le plus
        accessible des trois options.
      </p>

      <h3 className="text-xl font-bold text-[#1B1D3A] mt-6 mb-3">
        Le dossier de candidature
      </h3>
      <p className="text-[#334155] leading-relaxed mb-4">
        Quelle que soit l&apos;universit&eacute;, tu devras fournir&nbsp;:
      </p>
      <ul className="space-y-2 mb-4 text-[#334155]">
        {[
          "Pi\u00e8ce d\u2019identit\u00e9 (carte d\u2019identit\u00e9 ou passeport)",
          "Bulletins scolaires (1\u00e8re et Terminale)",
          "Lettre de motivation",
          "Photo d\u2019identit\u00e9 r\u00e9cente",
          "Pour l\u2019UE : un rapport technique pr\u00e9par\u00e9 avec ton conseiller Edumove",
        ].map((doc, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-[#615CA5] font-bold mt-0.5">&bull;</span>
            <span>{doc}</span>
          </li>
        ))}
      </ul>

      <Callout variant="warning">
        Les places en dentaire partent vite &mdash; surtout &agrave; l&apos;UCJC
        o&ugrave; les promos sont petites. On recommande de commencer les
        d&eacute;marches d&egrave;s janvier-f&eacute;vrier pour une
        rentr&eacute;e en septembre.
      </Callout>

      {/* Section 4 */}
      <SectionTitle
        id="programme"
        icon={<BookOpen className="w-6 h-6 text-[#EC680A]" />}
      >
        Le programme : 5 ans pour devenir dentiste
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Le cursus d&apos;odontologie en Espagne dure{" "}
        <strong>5 ans</strong> (Grado en Odontolog&iacute;a). C&apos;est un an
        de moins qu&apos;en France. Le programme alterne th&eacute;orie et
        pratique, avec une immersion clinique tr&egrave;s pr&eacute;coce.
      </p>

      <div className="space-y-3 mb-6">
        {[
          {
            years: "Ann\u00e9es 1-2",
            title: "Sciences pr\u00e9cliniques",
            desc: "Anatomie, physiologie, biochimie, histologie buccale. Travaux pratiques sur simulateurs et fant\u00f4mes dentaires. Tu poses les bases scientifiques du m\u00e9tier.",
          },
          {
            years: "Ann\u00e9e 3",
            title: "Transition clinique",
            desc: "D\u00e9but de la pratique sur de vrais patients dans la clinique universitaire. Dentisterie conservatrice, p\u00e9riodontie, proth\u00e8se amovible. Tu commences \u00e0 faire de vrais soins encadr\u00e9 par des praticiens.",
          },
          {
            years: "Ann\u00e9es 4-5",
            title: "Clinique intensive",
            desc: "Rotations compl\u00e8tes : endodontie, chirurgie orale, orthodontie, implantologie, odontop\u00e9diatrie. Tu g\u00e8res tes propres patients sous supervision. Le volume de pratique clinique est l\u2019un des plus \u00e9lev\u00e9s d\u2019Europe.",
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
        Les cours sont en <strong>espagnol</strong>. Pas de panique&nbsp;: les
        termes m&eacute;dicaux sont quasi identiques au fran&ccedil;ais (racines
        latines et grecques). L&apos;immersion fait le reste. En 6 mois, la
        langue n&apos;est plus un obstacle.
      </p>

      <p className="text-[#334155] leading-relaxed mb-4">
        Un vrai plus&nbsp;: les promos sont &agrave; taille humaine (30-60
        &eacute;tudiants en dentaire). Les profs te connaissent, l&apos;encadrement
        est personnalis&eacute;. C&apos;est l&apos;oppos&eacute; de l&apos;amphi
        de 1&nbsp;500 places en PASS.
      </p>

      {/* Section 5 */}
      <SectionTitle
        id="exercer-france"
        icon={<Stethoscope className="w-6 h-6 text-[#EC680A]" />}
      >
        Exercer en France avec un dipl&ocirc;me espagnol
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        C&apos;est LA question que tout le monde se pose. R&eacute;ponse
        claire&nbsp;:{" "}
        <strong>
          oui, tu peux exercer en France comme chirurgien-dentiste
        </strong>{" "}
        avec un dipl&ocirc;me d&apos;odontologie espagnol.
      </p>

      <p className="text-[#334155] leading-relaxed mb-4">
        Le cadre l&eacute;gal repose sur la{" "}
        <strong>directive europ&eacute;enne 2005/36/CE</strong> relative
        &agrave; la reconnaissance des qualifications professionnelles.
        L&apos;odontologie fait partie des professions &agrave; reconnaissance{" "}
        <strong>automatique</strong> dans l&apos;UE. Pas besoin de passer
        d&apos;&eacute;quivalence ou de concours suppl&eacute;mentaire. On
        d&eacute;taille tout dans{" "}
        <Link
          href="/blog/reconnaissance-diplomes-europeens"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          notre article sur la reconnaissance des dipl&ocirc;mes
        </Link>
        .
      </p>

      <h3 className="text-xl font-bold text-[#1B1D3A] mt-6 mb-3">
        Les &eacute;tapes concr&egrave;tes au retour
      </h3>
      <ol className="space-y-3 mb-6 text-[#334155]">
        {[
          "Obtenir ton titre de chirurgien-dentiste espagnol (Grado en Odontolog\u00eda)",
          "Demander la reconnaissance aupr\u00e8s du minist\u00e8re de la Sant\u00e9 fran\u00e7ais",
          "S\u2019inscrire au Conseil National de l\u2019Ordre des Chirurgiens-Dentistes",
          "Commencer \u00e0 exercer \u2014 en lib\u00e9ral, en cabinet de groupe ou en salari\u00e9",
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
        La reconnaissance est <strong>automatique</strong> pour les
        chirurgiens-dentistes dipl&ocirc;m&eacute;s de l&apos;UE. Tu peux aussi
        te sp&eacute;cialiser&nbsp;: orthodontie, chirurgie orale, p&eacute;riodontie,
        endodontie&hellip; soit en Espagne, soit en France via les concours de
        sp&eacute;cialit&eacute;.
      </Callout>

      <p className="text-[#334155] leading-relaxed mb-4">
        Autre option&nbsp;: tu peux rester en Espagne, exercer dans un autre
        pays de l&apos;UE, ou alterner. Le dipl&ocirc;me europ&eacute;en
        t&apos;ouvre les portes de 27 pays.
      </p>

      {/* Section 6 */}
      <SectionTitle
        id="budget"
        icon={<Calculator className="w-6 h-6 text-[#EC680A]" />}
      >
        Budget et financement
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Le dentaire est nettement plus abordable que la m&eacute;decine en
        Espagne. Voici les trois options actuelles&nbsp;:
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5 text-center">
          <p className="text-xs text-[#64748b] uppercase tracking-wide mb-1">
            UCJC (Madrid)
          </p>
          <p className="text-2xl font-bold text-[#1B1D3A]">
            47&nbsp;100&nbsp;&euro;
          </p>
          <p className="text-sm text-[#64748b]">
            9&nbsp;420&nbsp;&euro;/an &times; 5&nbsp;ans
          </p>
        </div>
        <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5 text-center">
          <p className="text-xs text-[#64748b] uppercase tracking-wide mb-1">
            Universidad Europea
          </p>
          <p className="text-2xl font-bold text-[#1B1D3A]">
            50&nbsp;100 &agrave; 94&nbsp;500&nbsp;&euro;
          </p>
          <p className="text-sm text-[#64748b]">
            10&nbsp;020 &agrave; 18&nbsp;900&nbsp;&euro;/an &times; 5&nbsp;ans
          </p>
        </div>
        <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5 text-center">
          <p className="text-xs text-[#64748b] uppercase tracking-wide mb-1">
            LINK Campus (Rome)
          </p>
          <p className="text-2xl font-bold text-[#1B1D3A]">
            47&nbsp;400&nbsp;&euro;
          </p>
          <p className="text-sm text-[#64748b]">
            7&nbsp;900&nbsp;&euro;/an &times; 6&nbsp;ans
          </p>
        </div>
      </div>

      <p className="text-[#334155] leading-relaxed mb-4">
        L&apos;investissement est s&eacute;rieux, mais{" "}
        <strong>finan&ccedil;able &agrave; 100&nbsp;%</strong> gr&acirc;ce au
        pr&ecirc;t &eacute;tudiant. Le partenariat Edumove &times; LCL permet
        d&apos;emprunter jusqu&apos;&agrave;{" "}
        <strong>75&nbsp;000&nbsp;&euro;</strong> avec un diff&eacute;r&eacute;
        total&nbsp;: tu ne rembourses qu&apos;apr&egrave;s ton dipl&ocirc;me.
        Toutes les infos sur notre{" "}
        <Link
          href="/financement"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          page d&eacute;di&eacute;e au financement
        </Link>
        .
      </p>

      <p className="text-[#334155] leading-relaxed mb-4">
        Ajoute la bourse CROUS (maintenue pour les &eacute;tudes en Europe),
        les aides r&eacute;gionales et la possibilit&eacute; de travailler
        &agrave; c&ocirc;t&eacute; &mdash; beaucoup de nos &eacute;tudiants
        financent leur cursus sans que leurs parents avancent un centime.
      </p>

      <p className="text-[#334155] leading-relaxed mb-4">
        Pour tous les d&eacute;tails chiffr&eacute;s, consultez{" "}
        <Link
          href="/blog/cout-etudes-sante-europe"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          notre article sur le co&ucirc;t des &eacute;tudes en Europe
        </Link>
        .
      </p>

      <Callout variant="info">
        Un chirurgien-dentiste en France gagne entre 4&nbsp;000 et
        8&nbsp;000&nbsp;&euro; net par mois d&egrave;s les premi&egrave;res
        ann&eacute;es. En lib&eacute;ral, la moyenne d&eacute;passe
        10&nbsp;000&nbsp;&euro; net. Le pr&ecirc;t de 47&nbsp;000 &agrave;
        75&nbsp;000&nbsp;&euro; se rembourse en 5-8 ans confortablement.
        L&apos;investissement est tr&egrave;s rentable.
      </Callout>

      {/* Section 7 \u2014 Vie \u00e9tudiante */}
      <SectionTitle
        id="vie-etudiante"
        icon={<MapPin className="w-6 h-6 text-[#EC680A]" />}
      >
        La vie &eacute;tudiante en Espagne
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Que tu choisisses Madrid, Valence ou Malaga, l&apos;Espagne offre un
        cadre de vie exceptionnel pour les &eacute;tudiants. Le co&ucirc;t de
        la vie est 15 &agrave; 25&nbsp;% inf&eacute;rieur &agrave; Paris, le
        soleil est omnipr&eacute;sent, et la vie culturelle est parmi les plus
        dynamiques d&apos;Europe.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5">
          <h4 className="font-bold text-[#1B1D3A] mb-2">Madrid</h4>
          <p className="text-sm text-[#334155] leading-relaxed">
            Capitale, quartiers &eacute;tudiants comme{" "}
            <strong>Moncloa</strong>, <strong>Arg&uuml;elles</strong>,{" "}
            <strong>Chamber&iacute;</strong>. Colocations 400-600&nbsp;&euro;/mois.
            Le{" "}
            <Link
              href="/vie-etudiante/madrid"
              className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
            >
              guide vie &eacute;tudiante Madrid
            </Link>{" "}
            d&eacute;taille tout.
          </p>
        </div>
        <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5">
          <h4 className="font-bold text-[#1B1D3A] mb-2">Transports</h4>
          <p className="text-sm text-[#334155] leading-relaxed">
            L&apos;<strong>Abono Joven</strong> (moins de 26 ans) co&ucirc;te{" "}
            <strong>20&nbsp;&euro;/mois</strong> pour un acc&egrave;s
            illimit&eacute; au m&eacute;tro, bus et Cercan&iacute;as. &Agrave;
            Valence et Malaga, les transports sont encore moins chers.
          </p>
        </div>
        <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5">
          <h4 className="font-bold text-[#1B1D3A] mb-2">Manger</h4>
          <p className="text-sm text-[#334155] leading-relaxed">
            Le <strong>men&uacute; del d&iacute;a</strong> (entr&eacute;e +
            plat + dessert + boisson) &agrave; 10-14&nbsp;&euro; dans la
            plupart des restaurants. Les march&eacute;s locaux permettent de
            cuisiner pour 150-200&nbsp;&euro;/mois.
          </p>
        </div>
        <div className="bg-[#fafbff] border border-[#e2e8f0] rounded-xl p-5">
          <h4 className="font-bold text-[#1B1D3A] mb-2">
            Plages et cadre de vie
          </h4>
          <p className="text-sm text-[#334155] leading-relaxed">
            &Agrave;{" "}
            <Link
              href="/vie-etudiante/valence"
              className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
            >
              Valence
            </Link>{" "}
            et{" "}
            <Link
              href="/vie-etudiante/malaga"
              className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
            >
              Malaga
            </Link>
            , la plage est &agrave; 15 minutes du campus. Id&eacute;al pour
            d&eacute;compresser apr&egrave;s les cours. Climat doux toute
            l&apos;ann&eacute;e.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#1B1D3A] to-[#2a2d52] rounded-xl p-5 mb-6">
        <p className="text-sm leading-relaxed" style={{ color: "#ffffff" }}>
          Pour tout savoir sur la vie quotidienne, les bons plans et les
          quartiers, consultez nos guides&nbsp;:{" "}
          <Link
            href="/vie-etudiante/madrid"
            className="text-[#EC680A] underline underline-offset-2 font-semibold hover:text-[#d45e09] transition-colors"
          >
            Madrid
          </Link>
          ,{" "}
          <Link
            href="/vie-etudiante/valence"
            className="text-[#EC680A] underline underline-offset-2 font-semibold hover:text-[#d45e09] transition-colors"
          >
            Valence
          </Link>{" "}
          et{" "}
          <Link
            href="/vie-etudiante/malaga"
            className="text-[#EC680A] underline underline-offset-2 font-semibold hover:text-[#d45e09] transition-colors"
          >
            Malaga
          </Link>
          .
        </p>
      </div>

      {/* Section 8 \u2014 Autres fili\u00e8res */}
      <SectionTitle
        id="autres-filieres"
        icon={<GraduationCap className="w-6 h-6 text-[#EC680A]" />}
      >
        Les autres fili&egrave;res de sant&eacute; en Espagne
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Le dentaire n&apos;est pas la seule option en Espagne. Edumove
        accompagne aussi les &eacute;tudiants dans 4 autres fili&egrave;res de
        sant&eacute;, toutes accessibles sans concours PASS/LAS&nbsp;:
      </p>

      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        <Link
          href="/formations/medecine/espagne"
          className="group flex items-center justify-between bg-[#fafbff] border border-[#e2e8f0] rounded-xl px-5 py-4 hover:border-[#615CA5]/30 transition-all"
        >
          <div>
            <span className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors">
              &Eacute;tudes de M&eacute;decine en Espagne
            </span>
            <p className="text-xs text-[#64748b]">
              6 ans &middot; d&egrave;s 21&nbsp;480&nbsp;&euro;/an
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#EC680A] transition-colors" />
        </Link>
        <Link
          href="/formations/kinesitherapie/espagne"
          className="group flex items-center justify-between bg-[#fafbff] border border-[#e2e8f0] rounded-xl px-5 py-4 hover:border-[#615CA5]/30 transition-all"
        >
          <div>
            <span className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors">
              Faire Kin&eacute; en Espagne
            </span>
            <p className="text-xs text-[#64748b]">
              4 ans &middot; programme en fran&ccedil;ais dispo
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#EC680A] transition-colors" />
        </Link>
        <Link
          href="/formations/pharmacie/espagne"
          className="group flex items-center justify-between bg-[#fafbff] border border-[#e2e8f0] rounded-xl px-5 py-4 hover:border-[#615CA5]/30 transition-all"
        >
          <div>
            <span className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors">
              Pharmacie en Espagne
            </span>
            <p className="text-xs text-[#64748b]">
              5 ans &middot; admission sur dossier
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#EC680A] transition-colors" />
        </Link>
        <Link
          href="/formations/veterinaire/espagne"
          className="group flex items-center justify-between bg-[#fafbff] border border-[#e2e8f0] rounded-xl px-5 py-4 hover:border-[#615CA5]/30 transition-all"
        >
          <div>
            <span className="font-bold text-[#1B1D3A] group-hover:text-[#615CA5] transition-colors">
              V&eacute;t&eacute;rinaire en Espagne
            </span>
            <p className="text-xs text-[#64748b]">
              5 ans &middot; alternative au concours v&eacute;to
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#EC680A] transition-colors" />
        </Link>
      </div>

      <p className="text-[#334155] leading-relaxed mb-4">
        Pour d&eacute;couvrir la fili&egrave;re dentaire en d&eacute;tail,
        consultez notre{" "}
        <Link
          href="/formations/dentaire/espagne"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          page d&eacute;di&eacute;e aux &eacute;tudes dentaires en Espagne
        </Link>
        . Et pour d&eacute;couvrir ce que nos &eacute;tudiants en pensent, lisez
        leurs{" "}
        <Link
          href="/temoignages"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          t&eacute;moignages et avis
        </Link>
        .
      </p>

      {/* Conclusion */}
      <p className="text-[#334155] leading-relaxed mb-4">
        Faire dentaire en Espagne, c&apos;est un vrai projet. &Ccedil;a demande
        de la motivation et un investissement financier, mais c&apos;est surtout
        une porte ouverte vers un m&eacute;tier passionnant &mdash; un
        m&eacute;tier que le syst&egrave;me fran&ccedil;ais rend inaccessible
        &agrave; la majorit&eacute; des &eacute;tudiants. Si &ccedil;a te
        parle,{" "}
        <Link
          href="https://candidature.edumove.fr"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          contacte-nous
        </Link>{" "}
        &mdash; un conseiller te rappelle sous 24h pour faire le point sur ta
        situation. L&apos;accompagnement Edumove est gratuit.
      </p>
    </>
  );
}
