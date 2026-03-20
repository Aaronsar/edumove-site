"use client";

import Link from "next/link";
import { Scale, FileText, Building, Stethoscope, ShieldCheck, HelpCircle } from "lucide-react";
import { SectionTitle, Callout } from "@/components/blog/ArticleLayout";

/* ---------- SOMMAIRE ---------- */

export const sommaire = [
  { id: "directive-europeenne", label: "La directive européenne 2005/36/CE" },
  { id: "demarches-retour", label: "Les démarches au retour en France" },
  { id: "ordre-professionnel", label: "L\u2019inscription à l\u2019Ordre" },
  { id: "filieres-concernees", label: "Filières concernées" },
  { id: "idees-recues", label: "Les idées reçues" },
  { id: "accompagnement", label: "L\u2019accompagnement Edumove" },
];

/* ---------- DATA ---------- */

const filieres = [
  {
    name: "Médecine",
    href: "/formations/medecine",
    status: "Reconnaissance automatique",
    ordre: "Ordre des médecins",
  },
  {
    name: "Dentaire",
    href: "/formations/dentaire",
    status: "Reconnaissance automatique",
    ordre: "Ordre des chirurgiens-dentistes",
  },
  {
    name: "Kinésithérapie",
    href: "/formations/kinesitherapie",
    status: "Reconnaissance automatique",
    ordre: "Ordre des masseurs-kinésithérapeutes",
  },
  {
    name: "Pharmacie",
    href: "/formations/pharmacie",
    status: "Reconnaissance automatique",
    ordre: "Ordre des pharmaciens",
  },
  {
    name: "Vétérinaire",
    href: "/formations/veterinaire",
    status: "Reconnaissance automatique",
    ordre: "Ordre des vétérinaires",
  },
];

const mythes = [
  {
    mythe: "Les diplômes européens ne sont pas reconnus en France",
    realite:
      "La directive 2005/36/CE garantit la reconnaissance automatique des diplômes de santé obtenus dans tout pays de l\u2019UE. C\u2019est la loi européenne, applicable en France.",
    faux: true,
  },
  {
    mythe: "Il faut repasser un examen en France pour exercer",
    realite:
      "Aucun examen complémentaire n\u2019est requis. La démarche est purement administrative : attestation ENIC-NARIC, inscription à l\u2019Ordre, et vous pouvez exercer.",
    faux: true,
  },
  {
    mythe: "La reconnaissance prend des années",
    realite:
      "En pratique, la procédure complète prend entre 2 et 6 mois. Avec un dossier bien préparé et l\u2019accompagnement Edumove, c\u2019est souvent bouclé en 3 mois.",
    faux: true,
  },
  {
    mythe: "Seules certaines universités sont reconnues",
    realite:
      "Toute université accréditée dans un pays de l\u2019UE délivre un diplôme reconnu. Ce n\u2019est pas l\u2019université qui est \u00ab reconnue \u00bb, c\u2019est le diplôme, en vertu du droit européen.",
    faux: true,
  },
];

/* ---------- CONTENT ---------- */

export default function ReconnaissanceDiplomes() {
  return (
    <>
      {/* Intro */}
      <p className="text-[#334155] leading-relaxed mb-4">
        C&apos;est probablement <strong>la question qu&apos;on nous pose le plus
        souvent</strong> : &quot;Est-ce que mon diplôme sera reconnu en France si
        j&apos;étudie en Espagne ou en Italie ?&quot; La réponse est claire, nette
        et sans ambiguïté : <strong>oui</strong>. Et ce n&apos;est pas une simple
        promesse &mdash; c&apos;est le droit européen qui le garantit.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Dans cet article, on vous explique tout : le cadre juridique, les démarches
        concrètes à votre retour en France, l&apos;inscription à l&apos;Ordre
        professionnel, et on tord le cou à quelques idées reçues qui ont la vie
        dure. Si vous envisagez des{" "}
        <Link href="/formations/medecine" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          études de médecine
        </Link>{" "}
        ou de{" "}
        <Link href="/formations/dentaire" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          dentaire en Europe
        </Link>
        , cette lecture est indispensable.
      </p>

      {/* Section 1 : directive-europeenne */}
      <SectionTitle id="directive-europeenne" icon={<Scale className="w-6 h-6 text-[#EC680A]" />}>
        La directive européenne 2005/36/CE
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Tout repose sur un texte fondamental : la{" "}
        <strong>directive 2005/36/CE du Parlement européen</strong>, relative à la
        reconnaissance des qualifications professionnelles. Ce texte, transposé
        dans le droit français, établit un principe très simple : un diplôme
        obtenu dans un pays de l&apos;Union européenne est{" "}
        <strong>automatiquement reconnu</strong> dans tous les autres pays membres.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Ce n&apos;est pas une faveur, ce n&apos;est pas une option, c&apos;est{" "}
        <strong>la loi</strong>. Sept professions bénéficient de cette
        reconnaissance automatique, et les professions de santé en constituent la
        majorité : <strong>médecin, dentiste, infirmier, sage-femme,
        pharmacien, vétérinaire</strong> (la septième étant architecte).
      </p>

      <Callout variant="info">
        <strong>Ce que dit la loi :</strong> la directive 2005/36/CE prévoit une
        reconnaissance <strong>automatique</strong> pour les professions de santé.
        Cela signifie que la France <strong>ne peut pas</strong> refuser un diplôme
        délivré par une université accréditée d&apos;un autre pays de l&apos;UE.
        Pas de test complémentaire, pas d&apos;examen d&apos;équivalence &mdash;
        la reconnaissance est de droit.
      </Callout>

      <p className="text-[#334155] leading-relaxed mb-4">
        En pratique, cela signifie qu&apos;un étudiant français diplômé en
        médecine de l&apos;
        <Link href="/universites/universidad-europea" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          Universidad Europea de Madrid
        </Link>{" "}
        ou de{" "}
        <Link href="/universites/link-campus" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          LINK Campus University à Rome
        </Link>{" "}
        peut revenir exercer en France avec exactement les mêmes droits qu&apos;un
        diplômé d&apos;une faculté française. C&apos;est le fondement même de la
        libre circulation des travailleurs au sein de l&apos;UE.
      </p>

      {/* Section 2 : demarches-retour */}
      <SectionTitle id="demarches-retour" icon={<FileText className="w-6 h-6 text-[#EC680A]" />}>
        Les démarches au retour en France
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        La reconnaissance est automatique sur le plan juridique, mais il y a
        tout de même quelques <strong>démarches administratives</strong> à
        accomplir. Rien de compliqué, mais il faut s&apos;y prendre correctement
        pour éviter de perdre du temps. Voici les étapes dans l&apos;ordre :
      </p>

      <div className="space-y-4 mb-6">
        {[
          {
            step: "1",
            title: "Faire authentifier son diplôme",
            desc: "Demandez à votre université de vous fournir une copie certifiée conforme de votre diplôme, accompagnée du supplément au diplôme (détail des enseignements et des heures). Ces documents sont généralement délivrés en fin de cursus.",
          },
          {
            step: "2",
            title: "Obtenir l\u2019attestation ENIC-NARIC",
            desc: "Le centre ENIC-NARIC France (rattaché à France Éducation international) est l\u2019organisme officiel chargé de délivrer l\u2019attestation de comparabilité de votre diplôme. La demande se fait en ligne et le traitement prend généralement 2 à 4 mois.",
          },
          {
            step: "3",
            title: "Certification de langue (si nécessaire)",
            desc: "Dans la grande majorité des cas, les étudiants français n\u2019ont pas besoin de certification de langue puisque le français est leur langue maternelle. Cette étape concerne surtout les diplômés dont la langue d\u2019exercice diffère de celle de la formation.",
          },
          {
            step: "4",
            title: "Constituer le dossier administratif",
            desc: "Rassemblez votre diplôme authentifié, l\u2019attestation ENIC-NARIC, votre pièce d\u2019identité, un justificatif de domicile et un extrait de casier judiciaire. Ce dossier sera nécessaire pour l\u2019inscription à l\u2019Ordre professionnel.",
          },
        ].map((item) => (
          <div
            key={item.step}
            className="flex items-start gap-4 bg-[#fafbff] border border-gray-200/80 rounded-xl p-5"
          >
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 text-white text-sm font-bold flex items-center justify-center shrink-0">
              {item.step}
            </span>
            <div>
              <h4 className="font-bold text-sm text-[#1B1D3A] mb-1">{item.title}</h4>
              <p className="text-sm text-[#334155] leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[#334155] leading-relaxed mb-4">
        Au total, comptez entre <strong>2 et 6 mois</strong> pour l&apos;ensemble
        de la procédure. Le délai le plus long est généralement l&apos;attente de
        l&apos;attestation ENIC-NARIC. On recommande de lancer la démarche dès la
        dernière année de vos études pour être prêt(e) dès l&apos;obtention du
        diplôme. Plus de détails sur nos{" "}
        <Link href="/formations/medecine" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          formations en médecine
        </Link>{" "}
        et en{" "}
        <Link href="/formations/kinesitherapie" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          kinésithérapie
        </Link>
        .
      </p>

      {/* Section 3 : ordre-professionnel */}
      <SectionTitle id="ordre-professionnel" icon={<Building className="w-6 h-6 text-[#EC680A]" />}>
        L&apos;inscription à l&apos;Ordre professionnel
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Une fois votre diplôme reconnu, l&apos;étape suivante est l&apos;inscription
        au <strong>tableau de l&apos;Ordre</strong> correspondant à votre
        profession. C&apos;est cette inscription qui vous donne officiellement le
        droit d&apos;exercer en France.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Chaque profession de santé dispose de son propre Ordre :
      </p>

      <ul className="space-y-2 mb-6">
        {[
          "Ordre national des médecins",
          "Ordre national des chirurgiens-dentistes",
          "Ordre des masseurs-kinésithérapeutes",
          "Ordre national des pharmaciens",
          "Ordre national des vétérinaires",
        ].map((ordre, i) => (
          <li key={i} className="flex items-start gap-3">
            <Stethoscope className="w-4 h-4 text-[#615CA5] shrink-0 mt-0.5" />
            <span className="text-sm text-[#334155]">{ordre}</span>
          </li>
        ))}
      </ul>

      <p className="text-[#334155] leading-relaxed mb-4">
        Les pièces à fournir sont globalement les mêmes pour tous les Ordres :
        votre <strong>diplôme authentifié</strong>, l&apos;
        <strong>attestation ENIC-NARIC</strong>, une pièce d&apos;identité, un
        justificatif de domicile et un extrait de casier judiciaire. Certains Ordres
        peuvent demander des pièces complémentaires spécifiques à la profession.
      </p>

      <Callout variant="info">
        <strong>Conseil pratique :</strong> contactez l&apos;Ordre départemental
        de votre lieu d&apos;installation <strong>avant même</strong> d&apos;avoir
        toutes les pièces. Ils vous fourniront la liste exacte des documents à
        préparer et pourront vous indiquer les délais de traitement. Certains Ordres
        départementaux sont plus rapides que d&apos;autres.
      </Callout>

      {/* Section 4 : filieres-concernees */}
      <SectionTitle id="filieres-concernees" icon={<Stethoscope className="w-6 h-6 text-[#EC680A]" />}>
        Filières concernées par la reconnaissance automatique
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Toutes les filières santé proposées par nos universités partenaires
        bénéficient de la <strong>reconnaissance automatique</strong> prévue par la
        directive européenne. Pas d&apos;exception, pas de cas particulier :
        chaque diplôme est reconnu de plein droit.
      </p>

      <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden mb-6">
        <div className="px-5 py-4 bg-[#1B1D3A]">
          <h3 className="font-bold text-sm" style={{ color: "#ffffff" }}>
            Reconnaissance par filière
          </h3>
        </div>
        <div className="divide-y divide-gray-100">
          {filieres.map((f, i) => (
            <div
              key={f.name}
              className={`flex items-center justify-between px-5 py-4 ${
                i % 2 === 1 ? "bg-gray-50/50" : ""
              } hover:bg-[#615CA5]/[0.03] transition-colors`}
            >
              <div>
                <Link
                  href={f.href}
                  className="font-semibold text-sm text-[#1B1D3A] hover:text-[#EC680A] transition-colors"
                >
                  {f.name}
                </Link>
                <p className="text-xs text-[#64748b]">{f.ordre}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                {f.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[#334155] leading-relaxed mb-4">
        Que vous choisissiez la{" "}
        <Link href="/formations/pharmacie" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          pharmacie
        </Link>
        , la{" "}
        <Link href="/formations/veterinaire" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          formation vétérinaire
        </Link>{" "}
        ou la{" "}
        <Link href="/formations/kinesitherapie" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          kinésithérapie
        </Link>
        , le cadre juridique est le même. Votre diplôme sera reconnu.
      </p>

      {/* Section 5 : idees-recues */}
      <SectionTitle id="idees-recues" icon={<HelpCircle className="w-6 h-6 text-[#EC680A]" />}>
        Les idées reçues sur la reconnaissance des diplômes
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Il circule encore beaucoup de <strong>fausses informations</strong> sur la
        reconnaissance des diplômes européens. Souvent entretenues par
        méconnaissance du droit européen, parfois par des personnes qui ont intérêt
        à vous décourager. Remettons les pendules à l&apos;heure.
      </p>

      <div className="space-y-4 mb-6">
        {mythes.map((m, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-200/80 p-5 hover:shadow-[0_15px_40px_-12px_rgba(97,92,165,0.12)] transition-shadow duration-300"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 text-xs font-bold px-2.5 py-1 rounded-full shrink-0">
                &#10060; Faux
              </span>
              <p className="font-bold text-sm text-[#1B1D3A]">&quot;{m.mythe}&quot;</p>
            </div>
            <div className="flex items-start gap-3 ml-0 sm:ml-[68px]">
              <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full shrink-0">
                &#9989; Vrai
              </span>
              <p className="text-sm text-[#334155] leading-relaxed">{m.realite}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[#334155] leading-relaxed mb-4">
        Si vous avez encore des doutes, n&apos;hésitez pas à consulter directement
        le texte de la directive 2005/36/CE ou à contacter le centre ENIC-NARIC
        France. Vous pouvez aussi lire le{" "}
        <Link href="/blog/temoignage-medecine-espagne" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          témoignage de nos étudiants en médecine en Espagne
        </Link>{" "}
        qui exercent aujourd&apos;hui en France après avoir suivi ce parcours.
      </p>

      {/* Section 6 : accompagnement */}
      <SectionTitle id="accompagnement" icon={<ShieldCheck className="w-6 h-6 text-[#EC680A]" />}>
        L&apos;accompagnement Edumove, même après le diplôme
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Chez Edumove, notre accompagnement ne s&apos;arrête pas à l&apos;obtention
        de votre diplôme. On sait que les démarches de reconnaissance et
        d&apos;inscription à l&apos;Ordre peuvent être stressantes quand on les
        fait seul(e). C&apos;est pourquoi notre équipe reste à vos côtés pour :
      </p>

      <ul className="space-y-2 mb-6">
        {[
          "Vous guider dans la constitution de votre dossier ENIC-NARIC",
          "Vous aider à préparer votre inscription à l\u2019Ordre professionnel",
          "Répondre à toutes vos questions administratives post-diplôme",
          "Vous mettre en relation avec d\u2019anciens étudiants qui ont déjà fait le parcours",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC680A] shrink-0 mt-2" />
            <span className="text-sm text-[#334155] leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-[#334155] leading-relaxed mb-4">
        Vous avez un projet d&apos;études de santé en Europe ? Le financement et
        la reconnaissance ne doivent pas être un frein. Consultez notre article sur{" "}
        <Link href="/blog/financer-etudes-sante-europe" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          comment financer ses études de santé en Europe
        </Link>{" "}
        et découvrez nos guides pour{" "}
        <Link href="/guides/reussir-test-pe-universidad-europea" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          réussir le test PE de l&apos;Universidad Europea
        </Link>{" "}
        ou{" "}
        <Link href="/guides/reussir-test-admission-link-campus" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          le test d&apos;admission de LINK Campus
        </Link>
        .
      </p>

      <p className="text-[#334155] leading-relaxed mb-4">
        Prêt(e) à franchir le pas ?{" "}
        <a
          href="https://candidature.edumove.fr"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          Déposez votre candidature gratuitement
        </a>{" "}
        et un conseiller Edumove vous recontacte sous 48h pour répondre à toutes
        vos questions.
      </p>
    </>
  );
}
