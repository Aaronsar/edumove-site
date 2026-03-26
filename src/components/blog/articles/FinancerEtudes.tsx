"use client";

import Link from "next/link";
import { Euro, Building2, GraduationCap, PiggyBank, Calculator } from "lucide-react";
import { SectionTitle, Callout } from "@/components/blog/ArticleLayout";

/* ---------- SOMMAIRE ---------- */

export const sommaire = [
  { id: "cout-reel", label: "Le coût réel des études en Europe" },
  { id: "pret-etudiant", label: "Le prêt étudiant : la solution principale" },
  { id: "bourses-aides", label: "Bourses et aides disponibles" },
  { id: "accompagnement", label: "L\u2019accompagnement Edumove" },
  { id: "budget-mensuel", label: "Gérer son budget étudiant" },
];

/* ---------- CONTENT ---------- */

export default function FinancerEtudes() {
  return (
    <>
      {/* Intro */}
      <p className="text-[#334155] leading-relaxed mb-4">
        Soyons honnêtes : quand on envisage des{" "}
        <strong>études de santé en Europe</strong>, la question du financement
        arrive très vite sur la table. Et c&apos;est tout à fait normal. Entre les
        frais de scolarité, le logement, la vie quotidienne dans un nouveau pays...
        on peut vite se sentir dépassé(e). La bonne nouvelle, c&apos;est qu&apos;il
        existe aujourd&apos;hui des <strong>solutions concrètes</strong> pour financer
        l&apos;intégralité de son cursus sans avancer un centime de sa poche.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Dans cet article, on décortique ensemble les coûts réels, les prêts
        étudiants disponibles, les bourses auxquelles vous pouvez prétendre, et
        surtout comment{" "}
        <Link href="https://candidature.edumove.fr" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          Edumove vous accompagne
        </Link>{" "}
        pour que le financement ne soit jamais un frein à votre projet.
      </p>

      {/* Section 1 : cout-reel */}
      <SectionTitle id="cout-reel" icon={<Euro className="w-6 h-6 text-[#EC680A]" />}>
        Le coût réel des études de santé en Europe
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        En France, on a tendance à croire que les études de santé sont
        &quot;gratuites&quot;. En réalité, le système{" "}
        <strong>PASS/LAS</strong> cache des coûts considérables : prépas privées à
        3&nbsp;000-5&nbsp;000&nbsp;&euro; par an, redoublements fréquents, années
        perdues sans garantie de succès. Beaucoup d&apos;étudiants passent deux,
        voire trois ans en première année, avec un taux d&apos;échec qui dépasse
        les 80&nbsp;%. Au final, le coût humain et financier est souvent bien plus
        lourd qu&apos;on ne l&apos;imagine.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        En Europe, le modèle est différent. L&apos;admission se fait{" "}
        <strong>sur dossier et/ou test d&apos;entrée</strong>, sans numerus clausus
        aussi restrictif. Les frais de scolarité varient selon les universités :
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-[#fafbff] border border-gray-200/80 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-5 h-5 text-[#615CA5]" />
            <p className="font-bold text-sm text-[#1B1D3A]">
              <Link href="/universites/link-campus" className="hover:text-[#EC680A] transition-colors">
                LINK Campus University (Rome)
              </Link>
            </p>
          </div>
          <p className="text-2xl font-extrabold text-[#615CA5]">~5&nbsp;000&nbsp;&euro;<span className="text-sm font-normal text-[#64748b]">/an</span></p>
          <p className="text-xs text-[#64748b] mt-1">Parmi les plus accessibles en Europe</p>
        </div>
        <div className="bg-[#fafbff] border border-gray-200/80 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-5 h-5 text-[#615CA5]" />
            <p className="font-bold text-sm text-[#1B1D3A]">
              <Link href="/universites/universidad-europea" className="hover:text-[#EC680A] transition-colors">
                Universidad Europea (Madrid)
              </Link>
            </p>
          </div>
          <p className="text-2xl font-extrabold text-[#615CA5]">~20&nbsp;000&nbsp;&euro;<span className="text-sm font-normal text-[#64748b]">/an</span></p>
          <p className="text-xs text-[#64748b] mt-1">Formation prestigieuse, campus modernes</p>
        </div>
      </div>

      <p className="text-[#334155] leading-relaxed mb-4">
        L&apos;avantage majeur ? L&apos;admission est <strong>garantie sur dossier</strong>{" "}
        pour les étudiants qui remplissent les critères. Pas de loterie, pas de
        redoublement imposé. Vous savez dès le départ que vous avez votre place.
        Et grâce aux solutions de financement que nous allons détailler, il est
        possible de démarrer ses études{" "}
        <strong>avec 0&nbsp;&euro; à avancer</strong>.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Que vous visiez la{" "}
        <Link href="/formations/medecine" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          médecine
        </Link>
        , le{" "}
        <Link href="/formations/dentaire" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          dentaire
        </Link>{" "}
        ou la{" "}
        <Link href="/formations/kinesitherapie" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          kinésithérapie
        </Link>
        , le coût total d&apos;un cursus en Europe reste souvent comparable &mdash;
        voire inférieur &mdash; à celui d&apos;un parcours chaotique en France
        quand on additionne prépas, redoublements et années blanches.
      </p>

      {/* Section 2 : pret-etudiant */}
      <SectionTitle id="pret-etudiant" icon={<PiggyBank className="w-6 h-6 text-[#EC680A]" />}>
        Le prêt étudiant : la solution principale
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        C&apos;est sans doute la meilleure nouvelle de cet article : vous
        n&apos;avez <strong>pas besoin d&apos;avoir l&apos;argent</strong> pour
        commencer vos études. Le <strong>prêt étudiant</strong> est la solution
        de financement la plus utilisée par nos étudiants, et elle a fait ses
        preuves année après année.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Le principe est simple : la banque finance vos études (frais de scolarité,
        logement, vie courante), et vous ne commencez à rembourser{" "}
        <strong>qu&apos;une fois votre diplôme en poche</strong> et votre carrière
        lancée. C&apos;est ce qu&apos;on appelle le{" "}
        <strong>remboursement différé</strong>, et c&apos;est un vrai game-changer
        pour les familles.
      </p>

      <Callout variant="info">
        <strong>Partenariat LCL &times; Edumove :</strong> grâce à notre
        partenariat exclusif avec le <strong>LCL</strong>, les étudiants Edumove
        bénéficient d&apos;un prêt pouvant atteindre{" "}
        <strong>75&nbsp;000&nbsp;&euro;</strong> avec un{" "}
        <strong>taux compétitif</strong> et un{" "}
        <strong>remboursement différé</strong> jusqu&apos;à l&apos;obtention du
        diplôme. Aucun frais à avancer : la banque verse directement les fonds
        selon un calendrier adapté à votre cursus.
      </Callout>

      <p className="text-[#334155] leading-relaxed mb-4">
        Concrètement, voici comment ça fonctionne :
      </p>
      <ul className="space-y-2 mb-6">
        {[
          "Montant : à partir de 75 000 \u20ac, couvrant scolarité + frais de vie",
          "Différé total : pas de remboursement du capital pendant les études",
          "Taux compétitifs négociés grâce au partenariat Edumove",
          "Déblocage progressif adapté au calendrier universitaire",
          "Compatible avec toutes les filières santé en Europe",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC680A] shrink-0 mt-2" />
            <span className="text-sm text-[#334155] leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-[#334155] leading-relaxed mb-4">
        Un professionnel de santé diplômé en{" "}
        <Link href="/formations/medecine" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          médecine
        </Link>{" "}
        ou en{" "}
        <Link href="/formations/dentaire" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          dentaire
        </Link>{" "}
        rembourse généralement son prêt en quelques années grâce à des revenus
        confortables dès les premières années d&apos;exercice. L&apos;investissement
        est rentabilisé rapidement.
      </p>

      {/* Section 3 : bourses-aides */}
      <SectionTitle id="bourses-aides" icon={<GraduationCap className="w-6 h-6 text-[#EC680A]" />}>
        Bourses et aides disponibles
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Ce que beaucoup d&apos;étudiants ignorent, c&apos;est que{" "}
        <strong>la plupart des aides françaises restent accessibles</strong> même
        lorsque vous étudiez dans un autre pays de l&apos;Union européenne. Voici
        les principales aides à connaître :
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-[#fafbff] border border-gray-200/80 rounded-xl p-5">
          <h4 className="font-bold text-sm text-[#1B1D3A] mb-2">Bourse CROUS sur critères sociaux</h4>
          <p className="text-sm text-[#334155] leading-relaxed">
            Bonne nouvelle : votre bourse CROUS est <strong>maintenue</strong> si
            vous étudiez dans un pays de l&apos;UE. Les échelons vont de
            ~1&nbsp;000&nbsp;&euro; à ~5&nbsp;000&nbsp;&euro; par an selon votre
            situation. Il suffit de fournir un certificat de scolarité de votre
            université européenne au CROUS de votre académie d&apos;origine.
          </p>
        </div>
        <div className="bg-[#fafbff] border border-gray-200/80 rounded-xl p-5">
          <h4 className="font-bold text-sm text-[#1B1D3A] mb-2">Bourse de mobilité internationale</h4>
          <p className="text-sm text-[#334155] leading-relaxed">
            Destinée aux étudiants boursiers qui partent étudier à l&apos;étranger.
            Elle peut atteindre <strong>400&nbsp;&euro;/mois</strong> pendant une
            durée de 2 à 9 mois, en complément de la bourse CROUS. Renseignez-vous
            auprès de votre CROUS ou du service des relations internationales.
          </p>
        </div>
        <div className="bg-[#fafbff] border border-gray-200/80 rounded-xl p-5">
          <h4 className="font-bold text-sm text-[#1B1D3A] mb-2">Aide au mérite</h4>
          <p className="text-sm text-[#334155] leading-relaxed">
            Si vous avez obtenu une <strong>mention Très Bien au bac</strong>, vous
            pouvez bénéficier d&apos;un complément annuel de 900&nbsp;&euro;. Cette
            aide est cumulable avec la bourse CROUS et la bourse de mobilité.
          </p>
        </div>
        <div className="bg-[#fafbff] border border-gray-200/80 rounded-xl p-5">
          <h4 className="font-bold text-sm text-[#1B1D3A] mb-2">Aides régionales et départementales</h4>
          <p className="text-sm text-[#334155] leading-relaxed">
            Beaucoup de régions et de départements proposent des{" "}
            <strong>aides à la mobilité</strong> pour les étudiants qui partent à
            l&apos;étranger. Les montants et les conditions varient, mais ça vaut
            toujours le coup de se renseigner auprès de votre conseil régional.
          </p>
        </div>
      </div>

      <Callout variant="warning">
        <strong>Attention aux délais :</strong> les demandes de bourse CROUS
        doivent être déposées entre <strong>janvier et mai</strong> pour la rentrée
        suivante. Ne tardez pas, car les dossiers incomplets ou hors délai sont
        systématiquement refusés. Pensez aussi à renouveler votre demande chaque
        année.
      </Callout>

      <p className="text-[#334155] leading-relaxed mb-4">
        En cumulant bourse CROUS, aide à la mobilité et aide au mérite, certains
        de nos étudiants couvrent une part significative de leurs frais de vie
        mensuels. Le prêt étudiant vient alors uniquement compléter pour les frais
        de scolarité. Découvrez les{" "}
        <Link href="/formations/medecine" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          formations en médecine
        </Link>{" "}
        et en{" "}
        <Link href="/formations/kinesitherapie" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          kinésithérapie
        </Link>{" "}
        éligibles à ces dispositifs.
      </p>

      {/* Section 4 : accompagnement */}
      <SectionTitle id="accompagnement" icon={<Building2 className="w-6 h-6 text-[#EC680A]" />}>
        L&apos;accompagnement Edumove dans le financement
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Chez Edumove, on ne se contente pas de vous trouver une place en
        université. On vous accompagne aussi sur toute la partie financière, parce
        qu&apos;on sait que c&apos;est souvent le point de blocage numéro un pour
        les familles.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Concrètement, voici ce que nos conseillers font pour vous :
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {[
          {
            title: "Montage du dossier de prêt",
            desc: "On prépare avec vous un dossier solide pour la banque : justificatifs, lettre de motivation financière, plan de remboursement prévisionnel.",
          },
          {
            title: "Mise en relation avec le LCL",
            desc: "Grâce à notre partenariat, vous accédez à un interlocuteur dédié qui connaît parfaitement le profil des étudiants en santé à l\u2019étranger.",
          },
          {
            title: "Aide aux demandes de bourses",
            desc: "On vous guide dans les démarches CROUS, les aides régionales et toutes les possibilités de financement complémentaire.",
          },
          {
            title: "Suivi tout au long du cursus",
            desc: "Le financement ne s\u2019arrête pas à la rentrée. On reste disponible pour ajuster le plan si besoin.",
          },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-2xl border border-gray-200/80 p-5 hover:shadow-[0_15px_40px_-12px_rgba(97,92,165,0.12)] transition-shadow duration-300">
            <h4 className="font-bold text-sm text-[#1B1D3A] mb-2">{item.title}</h4>
            <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <p className="text-[#334155] leading-relaxed mb-4">
        Notre objectif est clair : <strong>aucun étudiant ne doit renoncer à ses
        études de santé pour des raisons financières</strong>. Si vous avez le
        niveau et la motivation, on trouvera la solution. Prêt(e) à lancer votre
        projet ?{" "}
        <a
          href="https://candidature.edumove.fr"
          className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors"
        >
          Déposez votre candidature
        </a>{" "}
        et un conseiller vous recontacte sous 48h pour faire le point sur votre
        situation.
      </p>

      {/* Section 5 : budget-mensuel */}
      <SectionTitle id="budget-mensuel" icon={<Calculator className="w-6 h-6 text-[#EC680A]" />}>
        Gérer son budget étudiant au quotidien
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Au-delà des frais de scolarité, il faut anticiper le{" "}
        <strong>coût de la vie sur place</strong>. La bonne nouvelle, c&apos;est
        que Madrid et Rome restent des villes très accessibles pour les étudiants
        &mdash; bien plus que Paris, en tout cas. Voici une estimation réaliste du
        budget mensuel :
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {/* Madrid */}
        <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden">
          <div className="px-5 py-4 bg-[#1B1D3A]">
            <h4 className="font-bold text-sm" style={{ color: "#ffffff" }}>
              Budget mensuel &mdash; Madrid
            </h4>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { label: "Loyer (colocation)", value: "450 - 700 \u20ac" },
              { label: "Alimentation", value: "200 - 250 \u20ac" },
              { label: "Transport (abonnement)", value: "20 \u20ac (tarif jeune)" },
              { label: "Téléphone & internet", value: "15 - 25 \u20ac" },
              { label: "Loisirs & divers", value: "100 - 150 \u20ac" },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between px-5 py-3">
                <span className="text-sm text-[#334155]">{row.label}</span>
                <span className="text-sm font-semibold text-[#1B1D3A]">{row.value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between px-5 py-3 bg-[#615CA5]/5">
              <span className="text-sm font-bold text-[#1B1D3A]">Total estimé</span>
              <span className="text-sm font-extrabold text-[#615CA5]">785 - 1&nbsp;145&nbsp;&euro;</span>
            </div>
          </div>
        </div>

        {/* Rome */}
        <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden">
          <div className="px-5 py-4 bg-[#1B1D3A]">
            <h4 className="font-bold text-sm" style={{ color: "#ffffff" }}>
              Budget mensuel &mdash; Rome
            </h4>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { label: "Loyer (colocation)", value: "400 - 600 \u20ac" },
              { label: "Alimentation", value: "180 - 230 \u20ac" },
              { label: "Transport (abonnement)", value: "35 \u20ac" },
              { label: "Téléphone & internet", value: "10 - 20 \u20ac" },
              { label: "Loisirs & divers", value: "80 - 130 \u20ac" },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between px-5 py-3">
                <span className="text-sm text-[#334155]">{row.label}</span>
                <span className="text-sm font-semibold text-[#1B1D3A]">{row.value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between px-5 py-3 bg-[#615CA5]/5">
              <span className="text-sm font-bold text-[#1B1D3A]">Total estimé</span>
              <span className="text-sm font-extrabold text-[#615CA5]">705 - 1&nbsp;015&nbsp;&euro;</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[#334155] leading-relaxed mb-4">
        Quelques astuces pour optimiser votre budget sur place :
      </p>
      <ul className="space-y-2 mb-6">
        {[
          "Privilégiez la colocation : c\u2019est la norme chez les étudiants et vous divisez le loyer par deux ou trois.",
          "Cuisinez chez vous : les marchés locaux en Espagne et en Italie sont excellents et bien moins chers que les restaurants.",
          "Profitez des tarifs étudiants : transports, musées, salles de sport... la carte étudiant européenne ouvre beaucoup de portes.",
          "Ouvrez un compte bancaire local : ça vous évitera les frais de change et les commissions sur les paiements.",
        ].map((tip, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC680A] shrink-0 mt-2" />
            <span className="text-sm text-[#334155] leading-relaxed">{tip}</span>
          </li>
        ))}
      </ul>

      <p className="text-[#334155] leading-relaxed mb-4">
        En combinant un <strong>prêt étudiant bien calibré</strong>, les{" "}
        <strong>bourses disponibles</strong> et une gestion raisonnable de votre
        budget, vos études en Europe sont tout à fait finançables. Des milliers
        d&apos;étudiants le font chaque année. Pourquoi pas vous ?
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Pour en savoir plus, consultez aussi nos articles sur la{" "}
        <Link href="/blog/reconnaissance-diplomes-europeens" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          reconnaissance des diplômes européens
        </Link>{" "}
        et le{" "}
        <Link href="/blog/temoignage-medecine-espagne" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          témoignage d&apos;un étudiant en médecine en Espagne
        </Link>
        . Et si vous êtes prêt(e) à passer à l&apos;action, retrouvez les
        détails de nos{" "}
        <Link href="/universites/ucjc" className="text-[#EC680A] underline underline-offset-2 font-medium hover:text-[#D45E09] transition-colors">
          universités partenaires
        </Link>
        .
      </p>
    </>
  );
}
