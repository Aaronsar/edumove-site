"use client";

import Link from "next/link";
import { Accessibility, Award, BarChart3, Stethoscope, Briefcase, Users } from "lucide-react";
import { SectionTitle, Callout } from "@/components/blog/ArticleLayout";

export const sommaire = [
  { id: "acces-facilite", label: "Un acc\u00e8s facilit\u00e9 par rapport \u00e0 la France" },
  { id: "programmes-reconnus", label: "Des programmes reconnus dans l\u2019UE" },
  { id: "comparatif", label: "Comparatif : Espagne vs Italie" },
  { id: "pratique-clinique", label: "Une formation tr\u00e8s pratique" },
  { id: "debouches", label: "Les d\u00e9bouch\u00e9s apr\u00e8s la formation" },
  { id: "pourquoi-edumove", label: "Pourquoi passer par Edumove" },
];

export default function AvantagesKinesitherapie() {
  return (
    <>
      {/* Introduction */}
      <p className="text-[#334155] leading-relaxed mb-4">
        Chaque ann&eacute;e, des milliers d&apos;&eacute;tudiants fran&ccedil;ais r&ecirc;vent de devenir
        kin&eacute;sith&eacute;rapeute. Pourtant, en France, le chemin pour y parvenir ressemble
        souvent &agrave; un parcours du combattant : concours ultra-s&eacute;lectifs, places limit&eacute;es,
        ann&eacute;es de pr&eacute;pa sans garantie de r&eacute;sultat. Heureusement, il existe une
        alternative s&eacute;rieuse et parfaitement l&eacute;gale : <strong>&eacute;tudier la
        kin&eacute;sith&eacute;rapie en Europe</strong>.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Dans cet article, on vous explique pourquoi de plus en plus d&apos;&eacute;tudiants font ce
        choix, quels sont les v&eacute;ritables avantages de ces formations, et comment
        s&apos;y retrouver entre les diff&eacute;rentes options.
      </p>

      {/* Section 1 - Accès facilité */}
      <SectionTitle id="acces-facilite" icon={<Accessibility className="w-6 h-6 text-[#EC680A]" />}>
        Un acc&egrave;s facilit&eacute; par rapport &agrave; la France
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Soyons francs : en France, devenir kin&eacute; est devenu extr&ecirc;mement compliqu&eacute;.
        Pour int&eacute;grer un <strong>IFMK</strong> (Institut de Formation en
        Masso-Kin&eacute;sith&eacute;rapie), il faut d&apos;abord passer par PASS, LAS ou STAPS.
        Le taux de r&eacute;ussite&nbsp;? Environ <strong>5 &agrave; 10&nbsp;% selon les
        facult&eacute;s</strong>. Cela signifie que 9 &eacute;tudiants sur 10, m&ecirc;me
        brillants, n&apos;acc&egrave;dent jamais &agrave; la formation qu&apos;ils souhaitent.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Le probl&egrave;me n&apos;est pas le niveau des &eacute;tudiants. Beaucoup d&apos;entre eux
        ont les comp&eacute;tences et la motivation n&eacute;cessaires. C&apos;est le syst&egrave;me
        du <strong>numerus clausus</strong> (devenu numerus apertus, mais la logique reste la
        m&ecirc;me) qui cr&eacute;e un goulot d&apos;&eacute;tranglement artificiel. On se retrouve
        avec des &eacute;tudiants m&eacute;ritants qui perdent une, deux, parfois trois ann&eacute;es
        en tentant leur chance.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        En Europe, la donne est compl&egrave;tement diff&eacute;rente. L&apos;admission en{" "}
        <Link href="/formations/kinesitherapie" className="text-[#EC680A] underline hover:text-[#D45E09] transition-colors font-medium">
          formation de kin&eacute;sith&eacute;rapie
        </Link>{" "}
        se fait <strong>sur dossier et/ou entretien</strong>, sans concours d&apos;&eacute;limination
        massive. Pas de numerus clausus, pas de loterie. Si votre profil correspond aux
        crit&egrave;res de l&apos;universit&eacute;, vous &ecirc;tes admis(e). C&apos;est aussi simple
        que cela.
      </p>

      {/* Section 2 - Programmes reconnus */}
      <SectionTitle id="programmes-reconnus" icon={<Award className="w-6 h-6 text-[#EC680A]" />}>
        Des programmes reconnus dans toute l&apos;Union europ&eacute;enne
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        La question que tout le monde se pose, &agrave; juste titre :
        &laquo;&nbsp;Est-ce que mon dipl&ocirc;me sera reconnu en France&nbsp;?&nbsp;&raquo;
        La r&eacute;ponse est <strong>oui</strong>, et c&apos;est garanti par le droit europ&eacute;en.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        La <strong>directive europ&eacute;enne 2005/36/CE</strong> &eacute;tablit un cadre de
        reconnaissance mutuelle des qualifications professionnelles au sein de l&apos;UE. Concr&egrave;tement,
        un dipl&ocirc;me de kin&eacute;sith&eacute;rapie obtenu dans une universit&eacute;
        accr&eacute;dit&eacute;e en Espagne, en Italie ou dans tout autre pays membre est
        <strong> automatiquement &eacute;ligible &agrave; la reconnaissance</strong> en France et
        dans le reste de l&apos;UE. Vous pouvez exercer o&ugrave; vous le souhaitez.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Pour tout comprendre sur les d&eacute;marches au retour en France &mdash; inscription &agrave;
        l&apos;Ordre, constitution du dossier, d&eacute;lais &mdash; consultez notre article
        d&eacute;taill&eacute; sur{" "}
        <Link href="/blog/reconnaissance-diplomes-europeens" className="text-[#EC680A] underline hover:text-[#D45E09] transition-colors font-medium">
          la reconnaissance des dipl&ocirc;mes europ&eacute;ens en France
        </Link>.
      </p>

      <Callout variant="info">
        <strong>Garantie l&eacute;gale :</strong> la directive 2005/36/CE assure que tout dipl&ocirc;me
        de sant&eacute; obtenu dans un &Eacute;tat membre de l&apos;UE b&eacute;n&eacute;ficie d&apos;un
        droit de reconnaissance dans tous les autres &Eacute;tats membres. Ce n&apos;est pas une
        tol&eacute;rance, c&apos;est une obligation juridique.
      </Callout>

      {/* Section 3 - Comparatif */}
      <SectionTitle id="comparatif" icon={<BarChart3 className="w-6 h-6 text-[#EC680A]" />}>
        Comparatif : Espagne vs Italie
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Deux destinations se distinguent particuli&egrave;rement pour les &eacute;tudiants fran&ccedil;ais
        en kin&eacute;sith&eacute;rapie : l&apos;Espagne et l&apos;Italie. Chacune a ses forces, et le
        meilleur choix d&eacute;pend de votre profil, de votre budget et de vos pr&eacute;f&eacute;rences.
        Voici un comparatif clair pour vous aider &agrave; y voir plus net.
      </p>

      <div className="grid gap-4 mb-8">
        {/* Universidad Europea */}
        <div className="bg-white rounded-2xl border border-gray-200/80 border-l-4 border-l-[#615CA5] p-5 hover:shadow-[0_20px_60px_-15px_rgba(97,92,165,0.12)] transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#615CA5]/20">
              UE
            </div>
            <div>
              <Link href="/universites/universidad-europea" className="font-bold text-[#1B1D3A] text-sm hover:text-[#EC680A] transition-colors">
                Universidad Europea &mdash; Madrid
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-4 gap-3 text-sm">
            <div className="bg-[#fafbff] rounded-lg px-3 py-2">
              <p className="text-[10px] uppercase text-[#64748b] tracking-wider mb-0.5">Dur&eacute;e</p>
              <p className="font-semibold text-[#1B1D3A]">4 ans</p>
            </div>
            <div className="bg-[#fafbff] rounded-lg px-3 py-2">
              <p className="text-[10px] uppercase text-[#64748b] tracking-wider mb-0.5">Parcours</p>
              <p className="font-semibold text-[#1B1D3A]">Fran&ccedil;ais disponible</p>
            </div>
            <div className="bg-[#fafbff] rounded-lg px-3 py-2">
              <p className="text-[10px] uppercase text-[#64748b] tracking-wider mb-0.5">Frais / an</p>
              <p className="font-semibold text-[#1B1D3A]">~18&nbsp;000&nbsp;&euro;</p>
            </div>
            <div className="bg-[#fafbff] rounded-lg px-3 py-2">
              <p className="text-[10px] uppercase text-[#64748b] tracking-wider mb-0.5">Admission</p>
              <p className="font-semibold text-[#1B1D3A]">Test PE</p>
            </div>
          </div>
        </div>

        {/* UCJC */}
        <div className="bg-white rounded-2xl border border-gray-200/80 border-l-4 border-l-[#615CA5] p-5 hover:shadow-[0_20px_60px_-15px_rgba(97,92,165,0.12)] transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#615CA5]/20">
              UC
            </div>
            <div>
              <Link href="/universites/ucjc" className="font-bold text-[#1B1D3A] text-sm hover:text-[#EC680A] transition-colors">
                UCJC &mdash; Madrid
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-4 gap-3 text-sm">
            <div className="bg-[#fafbff] rounded-lg px-3 py-2">
              <p className="text-[10px] uppercase text-[#64748b] tracking-wider mb-0.5">Dur&eacute;e</p>
              <p className="font-semibold text-[#1B1D3A]">4 ans</p>
            </div>
            <div className="bg-[#fafbff] rounded-lg px-3 py-2">
              <p className="text-[10px] uppercase text-[#64748b] tracking-wider mb-0.5">Langue</p>
              <p className="font-semibold text-[#1B1D3A]">Espagnol</p>
            </div>
            <div className="bg-[#fafbff] rounded-lg px-3 py-2">
              <p className="text-[10px] uppercase text-[#64748b] tracking-wider mb-0.5">Frais / an</p>
              <p className="font-semibold text-[#1B1D3A]">~12&nbsp;000&nbsp;&euro;</p>
            </div>
            <div className="bg-[#fafbff] rounded-lg px-3 py-2">
              <p className="text-[10px] uppercase text-[#64748b] tracking-wider mb-0.5">Admission</p>
              <p className="font-semibold text-[#1B1D3A]">Sur dossier</p>
            </div>
          </div>
        </div>

        {/* LINK Campus */}
        <div className="bg-white rounded-2xl border border-gray-200/80 border-l-4 border-l-[#615CA5] p-5 hover:shadow-[0_20px_60px_-15px_rgba(97,92,165,0.12)] transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#615CA5]/20">
              LK
            </div>
            <div>
              <Link href="/universites/link-campus" className="font-bold text-[#1B1D3A] text-sm hover:text-[#EC680A] transition-colors">
                LINK Campus University &mdash; Rome
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-4 gap-3 text-sm">
            <div className="bg-[#fafbff] rounded-lg px-3 py-2">
              <p className="text-[10px] uppercase text-[#64748b] tracking-wider mb-0.5">Dur&eacute;e</p>
              <p className="font-semibold text-[#1B1D3A]">3 ans</p>
            </div>
            <div className="bg-[#fafbff] rounded-lg px-3 py-2">
              <p className="text-[10px] uppercase text-[#64748b] tracking-wider mb-0.5">Langue</p>
              <p className="font-semibold text-[#1B1D3A]">Anglais / Italien</p>
            </div>
            <div className="bg-[#fafbff] rounded-lg px-3 py-2">
              <p className="text-[10px] uppercase text-[#64748b] tracking-wider mb-0.5">Frais / an</p>
              <p className="font-semibold text-[#1B1D3A]">~5&nbsp;000&nbsp;&euro;</p>
            </div>
            <div className="bg-[#fafbff] rounded-lg px-3 py-2">
              <p className="text-[10px] uppercase text-[#64748b] tracking-wider mb-0.5">Admission</p>
              <p className="font-semibold text-[#1B1D3A]">Test LINK</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[#334155] leading-relaxed mb-4">
        Chaque option a ses atouts. L&apos;Universidad Europea s&eacute;duit par son <strong>parcours
        en fran&ccedil;ais</strong> et son campus ultra-moderne. La UCJC offre un excellent rapport
        qualit&eacute;-prix pour ceux qui ma&icirc;trisent l&apos;espagnol. Et LINK Campus &agrave; Rome
        attire les budgets plus serr&eacute;s avec des frais de scolarit&eacute; nettement plus bas
        et une formation en <strong>seulement 3 ans</strong>.
      </p>

      {/* Section 4 - Pratique clinique */}
      <SectionTitle id="pratique-clinique" icon={<Stethoscope className="w-6 h-6 text-[#EC680A]" />}>
        Une formation centr&eacute;e sur la pratique clinique
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        C&apos;est l&apos;un des arguments les plus convaincants en faveur de la kin&eacute;sith&eacute;rapie
        en Europe : <strong>la place de la pratique dans la formation</strong>. L&agrave; o&ugrave; les
        IFMK fran&ccedil;ais d&eacute;butent g&eacute;n&eacute;ralement les stages cliniques en
        troisi&egrave;me ou quatri&egrave;me ann&eacute;e, les universit&eacute;s europ&eacute;ennes
        int&egrave;grent des <strong>rotations cliniques d&egrave;s la premi&egrave;re ou la
        deuxi&egrave;me ann&eacute;e</strong>.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Les universit&eacute;s partenaires d&apos;Edumove disposent de <strong>centres de simulation</strong>
        &eacute;quip&eacute;s des derni&egrave;res technologies, et ont nou&eacute; des partenariats solides
        avec des h&ocirc;pitaux et cliniques locaux. Les &eacute;tudiants en kin&eacute;sith&eacute;rapie
        accumulent significativement plus d&apos;heures de pratique que la moyenne fran&ccedil;aise en IFMK.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Le r&eacute;sultat est concret : les dipl&ocirc;m&eacute;s de ces universit&eacute;s se sentent
        <strong> mieux pr&eacute;par&eacute;s</strong> pour la pratique professionnelle. Ils ont
        d&eacute;j&agrave; l&apos;habitude du contact patient, de la prise en charge compl&egrave;te,
        des protocoles de r&eacute;&eacute;ducation. Quand ils commencent &agrave; exercer, ils ne
        partent pas de z&eacute;ro.
      </p>

      <Callout>
        <strong>Bon &agrave; savoir :</strong> &agrave; l&apos;Universidad Europea, les &eacute;tudiants
        en kin&eacute;sith&eacute;rapie r&eacute;alisent leurs stages dans des h&ocirc;pitaux
        partenaires d&egrave;s la 2e ann&eacute;e, avec un suivi p&eacute;dagogique individualis&eacute;.
        Le nombre d&apos;heures de pratique cumul&eacute;es sur l&apos;ensemble du cursus d&eacute;passe
        largement celui des IFMK fran&ccedil;ais.
      </Callout>

      {/* Section 5 - Débouchés */}
      <SectionTitle id="debouches" icon={<Briefcase className="w-6 h-6 text-[#EC680A]" />}>
        Les d&eacute;bouch&eacute;s apr&egrave;s la formation
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Le march&eacute; de la kin&eacute;sith&eacute;rapie en France est en pleine croissance, et les
        perspectives de carri&egrave;re sont excellentes. De nombreux praticiens partent &agrave; la
        retraite dans les ann&eacute;es &agrave; venir, ce qui cr&eacute;e une <strong>forte demande</strong>
        sur tout le territoire.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        En <strong>lib&eacute;ral</strong>, un kin&eacute;sith&eacute;rapeute en France peut esp&eacute;rer
        des revenus compris entre <strong>3&nbsp;000 et 5&nbsp;000&nbsp;&euro; nets par mois</strong>,
        parfois davantage selon la sp&eacute;cialisation et la localisation du cabinet. L&apos;exercice
        en lib&eacute;ral offre une grande libert&eacute; dans l&apos;organisation de son emploi du temps
        et le choix de ses patients.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        En <strong>milieu hospitalier</strong>, les salaires sont plus encadr&eacute;s mais offrent
        une s&eacute;curit&eacute; d&apos;emploi et l&apos;acc&egrave;s &agrave; des cas cliniques
        vari&eacute;s. Certains kin&eacute;sith&eacute;rapeutes se sp&eacute;cialisent dans des domaines
        porteurs comme la <strong>kin&eacute;sith&eacute;rapie du sport</strong>, la
        <strong> p&eacute;diatrie</strong>, la <strong>r&eacute;&eacute;ducation neurologique</strong>
        ou encore la <strong>kin&eacute;sith&eacute;rapie respiratoire</strong>.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Et l&apos;un des grands avantages du dipl&ocirc;me europ&eacute;en, c&apos;est la
        <strong> mobilit&eacute; internationale</strong>. Vous pouvez choisir de vous installer en
        France, mais aussi d&apos;exercer dans n&apos;importe quel pays de l&apos;Union europ&eacute;enne
        sans d&eacute;marche suppl&eacute;mentaire complexe.
      </p>

      <Callout>
        <strong>March&eacute; favorable :</strong> selon les projections, la France aura besoin de
        milliers de kin&eacute;sith&eacute;rapeutes suppl&eacute;mentaires dans les prochaines ann&eacute;es
        pour compenser les d&eacute;parts &agrave; la retraite. Les dipl&ocirc;m&eacute;s europ&eacute;ens
        arrivent donc sur un march&eacute; de l&apos;emploi <strong>particuli&egrave;rement porteur</strong>.
      </Callout>

      {/* Section 6 - Pourquoi Edumove */}
      <SectionTitle id="pourquoi-edumove" icon={<Users className="w-6 h-6 text-[#EC680A]" />}>
        Pourquoi passer par Edumove
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Se lancer dans des &eacute;tudes &agrave; l&apos;&eacute;tranger, c&apos;est excitant mais aussi
        un peu vertigineux. Les questions affluent : quelle universit&eacute; choisir&nbsp;? Comment
        s&apos;inscrire&nbsp;? Comment financer&nbsp;? O&ugrave; se loger&nbsp;? Est-ce que le
        dipl&ocirc;me sera vraiment reconnu&nbsp;? C&apos;est pr&eacute;cis&eacute;ment l&agrave;
        qu&apos;Edumove intervient.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        <strong>Edumove s&apos;occupe de tout avec vous</strong> : d&egrave;s le premier contact, un conseiller d&eacute;di&eacute; analyse votre profil
        &mdash; vos r&eacute;sultats, vos envies, votre budget &mdash; pour vous
        <strong> orienter vers la formation la plus adapt&eacute;e</strong>. Pas de r&eacute;ponse
        g&eacute;n&eacute;rique : chaque parcours est personnalis&eacute;.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Ensuite, Edumove g&egrave;re tout l&apos;aspect administratif de votre admission :
        constitution du dossier, traductions certifi&eacute;es, inscription officielle, pr&eacute;paration
        aux tests d&apos;entr&eacute;e si n&eacute;cessaire. C&ocirc;t&eacute; financement, l&apos;&eacute;quipe
        vous accompagne dans l&apos;obtention d&apos;un <strong>pr&ecirc;t &eacute;tudiant</strong> qui
        peut couvrir l&apos;int&eacute;gralit&eacute; des frais de scolarit&eacute;. Et une fois sur
        place, Edumove vous aide &agrave; trouver un logement et reste disponible tout au long de vos &eacute;tudes.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Pour d&eacute;couvrir comment d&apos;autres &eacute;tudiants ont v&eacute;cu cette
        exp&eacute;rience, lisez le{" "}
        <Link href="/blog/temoignage-medecine-espagne" className="text-[#EC680A] underline hover:text-[#D45E09] transition-colors font-medium">
          t&eacute;moignage de Clara, &eacute;tudiante en m&eacute;decine &agrave; Madrid
        </Link>
        . Et si le financement vous pr&eacute;occupe, notre article sur{" "}
        <Link href="/blog/financer-etudes-sante-europe" className="text-[#EC680A] underline hover:text-[#D45E09] transition-colors font-medium">
          le financement des &eacute;tudes de sant&eacute; en Europe
        </Link>{" "}
        r&eacute;pond &agrave; toutes vos questions.
      </p>

      <Callout>
        <strong>Pr&ecirc;t(e) &agrave; franchir le pas&nbsp;?</strong> D&eacute;posez votre candidature
        gratuitement sur{" "}
        <a
          href="https://candidature.edumove.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#EC680A] underline hover:text-[#D45E09] transition-colors font-medium"
        >
          candidature.edumove.fr
        </a>{" "}
        et un conseiller vous recontactera sous 48h pour &eacute;tudier votre dossier.
        L&apos;accompagnement est <strong>enti&egrave;rement gratuit</strong> et sans engagement.
      </Callout>
    </>
  );
}
