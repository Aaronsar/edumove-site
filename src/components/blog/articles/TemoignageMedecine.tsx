"use client";

import Link from "next/link";
import { User, MapPin, GraduationCap, Heart, Lightbulb } from "lucide-react";
import { SectionTitle, Callout } from "@/components/blog/ArticleLayout";

export const sommaire = [
  { id: "avant-edumove", label: "Ma situation avant Edumove" },
  { id: "pourquoi-espagne", label: "Pourquoi j\u2019ai choisi l\u2019Espagne" },
  { id: "admission", label: "Le processus d\u2019admission" },
  { id: "vie-etudiante", label: "Ma vie \u00e9tudiante \u00e0 Madrid" },
  { id: "conseils", label: "Mes conseils aux futurs \u00e9tudiants" },
];

export default function TemoignageMedecine() {
  return (
    <>
      {/* Introduction */}
      <p className="text-[#334155] leading-relaxed mb-4">
        Je m&apos;appelle Clara, j&apos;ai 22 ans, et aujourd&apos;hui je suis en troisi&egrave;me ann&eacute;e de
        m&eacute;decine &agrave; l&apos;<strong>Universidad Europea de Madrid</strong>. Si on m&apos;avait dit il y a
        trois ans que je vivrais en Espagne et que j&apos;&eacute;tudierais la m&eacute;decine dans l&apos;une des
        meilleures universit&eacute;s priv&eacute;es d&apos;Europe, je ne l&apos;aurais jamais cru. Voici mon histoire.
      </p>

      {/* Section 1 - Avant Edumove */}
      <SectionTitle id="avant-edumove" icon={<User className="w-6 h-6 text-[#EC680A]" />}>
        Ma situation avant Edumove
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        En Terminale S, j&apos;avais une moyenne correcte &mdash; autour de 14 &mdash; et un r&ecirc;ve
        que je portais depuis le coll&egrave;ge : devenir m&eacute;decin. Pas chirurgienne ni urgentiste
        sp&eacute;cifiquement, juste m&eacute;decin. Aider les gens, comprendre le corps humain, avoir un
        m&eacute;tier qui a du sens. C&apos;&eacute;tait une &eacute;vidence pour moi.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Apr&egrave;s le bac, j&apos;ai int&eacute;gr&eacute; PASS &agrave; la facult&eacute; de m&eacute;decine
        de ma ville. J&apos;ai travaill&eacute; comme je n&apos;avais jamais travaill&eacute; de ma vie.
        R&eacute;veils &agrave; 6h, cours en amphi toute la journ&eacute;e, r&eacute;visions jusqu&apos;&agrave;
        minuit, week-ends sacrifi&eacute;s. J&apos;ai donn&eacute; absolument tout ce que j&apos;avais.
        Mais au moment des r&eacute;sultats, la douche froide : <strong>non class&eacute;e</strong>.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Je me souviens encore de ce moment. J&apos;ai regard&eacute; l&apos;&eacute;cran pendant de longues
        minutes, incapable de r&eacute;agir. Ensuite, les larmes. La sensation que tout s&apos;effondrait.
        J&apos;ai pass&eacute; plusieurs semaines &agrave; me remettre en question : est-ce que j&apos;&eacute;tais
        vraiment faite pour &ccedil;a&nbsp;? Est-ce que je devais abandonner mon r&ecirc;ve&nbsp;?
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        C&apos;est une amie de pr&eacute;pa qui m&apos;a dit un jour :
        &laquo;&nbsp;Tu sais, il y a des gens qui partent &eacute;tudier la m&eacute;decine en
        Espagne.&nbsp;&raquo; Sur le coup, j&apos;ai trouv&eacute; &ccedil;a bizarre. Mais j&apos;ai commenc&eacute;
        &agrave; chercher sur Internet, et c&apos;est l&agrave; que je suis tomb&eacute;e sur <strong>Edumove</strong>,
        via une publication Instagram. Ma premi&egrave;re r&eacute;action ? Honn&ecirc;tement, j&apos;&eacute;tais
        sceptique. &laquo;&nbsp;Trop beau pour &ecirc;tre vrai&nbsp;&raquo;, je me suis dit. Mais j&apos;ai quand
        m&ecirc;me rempli le formulaire de contact, juste pour voir.
      </p>

      {/* Section 2 - Pourquoi l'Espagne */}
      <SectionTitle id="pourquoi-espagne" icon={<MapPin className="w-6 h-6 text-[#EC680A]" />}>
        Pourquoi j&apos;ai choisi l&apos;Espagne
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        D&egrave;s le premier appel avec mon conseiller Edumove, j&apos;ai compris que c&apos;&eacute;tait
        s&eacute;rieux. Il m&apos;a expliqu&eacute; les diff&eacute;rentes options, les universit&eacute;s
        partenaires, les d&eacute;marches. Pas de promesse miracle, juste de la transparence.
        On a pass&eacute; en revue mon dossier, mes attentes, mon budget.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        J&apos;ai finalement choisi l&apos;<Link href="/universites/universidad-europea" className="text-[#EC680A] underline hover:text-[#D45E09] transition-colors font-medium">Universidad Europea de Madrid</Link> pour
        plusieurs raisons. D&apos;abord, le <strong>dipl&ocirc;me est reconnu dans toute l&apos;Union
        europ&eacute;enne</strong> &mdash; c&apos;&eacute;tait ma condition non n&eacute;gociable. Ensuite,
        la formation est r&eacute;put&eacute;e pour son approche tr&egrave;s clinique, avec de la
        <strong> pratique d&egrave;s la premi&egrave;re ann&eacute;e</strong>. Le campus est magnifique,
        moderne, et Madrid&hellip; c&apos;est Madrid. Une ville vibrante, ensoleill&eacute;e, qui donne
        envie de se lever le matin.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Ce qui a vraiment scell&eacute; ma d&eacute;cision, c&apos;est la solution de
        <strong> financement &agrave; 100&nbsp;%</strong> qu&apos;Edumove m&apos;a propos&eacute;e.
        Mes parents n&apos;avaient pas les moyens de payer les frais de scolarit&eacute; d&apos;un coup,
        et savoir qu&apos;un pr&ecirc;t &eacute;tudiant couvrait la totalit&eacute; a &eacute;t&eacute;
        un soulagement immense pour toute ma famille. Si vous vous posez des questions sur le financement,
        je vous conseille de lire{" "}
        <Link href="/formations/medecine" className="text-[#EC680A] underline hover:text-[#D45E09] transition-colors font-medium">
          la page d&eacute;di&eacute;e &agrave; la formation en m&eacute;decine
        </Link>{" "}
        sur le site d&apos;Edumove.
      </p>

      {/* Section 3 - Admission */}
      <SectionTitle id="admission" icon={<GraduationCap className="w-6 h-6 text-[#EC680A]" />}>
        Le processus d&apos;admission
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Pour int&eacute;grer l&apos;Universidad Europea en m&eacute;decine, il faut passer
        le <strong>test PE (Prueba Espec&iacute;fica)</strong>. Je ne vais pas mentir :
        quand j&apos;ai appris qu&apos;il y avait un test d&apos;entr&eacute;e, j&apos;ai eu un coup
        de stress. Apr&egrave;s mon &eacute;chec en PASS, l&apos;id&eacute;e de repasser un examen me
        terrifiait.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Mais Edumove m&apos;a vraiment bien pr&eacute;par&eacute;e. Mon conseiller m&apos;a expliqu&eacute;
        chaque &eacute;preuve en d&eacute;tail, m&apos;a envoy&eacute; des ressources pour m&apos;entra&icirc;ner
        et m&apos;a rassur&eacute;e &agrave; chaque &eacute;tape. Si vous voulez savoir exactement &agrave;
        quoi vous attendre, il y a un{" "}
        <Link href="/guides/reussir-test-pe-universidad-europea" className="text-[#EC680A] underline hover:text-[#D45E09] transition-colors font-medium">
          guide complet pour r&eacute;ussir le test PE
        </Link>{" "}
        sur le site. Je vous le recommande vraiment.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Le jour du test, j&apos;&eacute;tais nerveuse mais pr&ecirc;te. Le test de langue, le Talent Test,
        la lettre de motivation &mdash; j&apos;avais tout anticip&eacute;.
        R&eacute;sultat : <strong>admise du premier coup</strong>. J&apos;ai pleur&eacute; de joie
        cette fois-ci.
      </p>

      <Callout>
        Le plus incroyable, c&apos;est qu&apos;Edumove a g&eacute;r&eacute; toute la partie administrative :
        l&apos;inscription officielle, la <strong>traduction de mes documents</strong>, la recherche de
        logement, la constitution du dossier de pr&ecirc;t. Je n&apos;avais qu&apos;&agrave; me concentrer
        sur ma pr&eacute;paration. Sinc&egrave;rement, je ne sais pas comment j&apos;aurais fait toute seule.
      </Callout>

      {/* Section 4 - Vie étudiante */}
      <SectionTitle id="vie-etudiante" icon={<Heart className="w-6 h-6 text-[#EC680A]" />}>
        Ma vie &eacute;tudiante &agrave; Madrid
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Aujourd&apos;hui, je suis install&eacute;e dans un appartement en colocation dans le quartier
        de <strong>Moncloa</strong>, un quartier &eacute;tudiant tr&egrave;s agr&eacute;able, bien
        desservi par le m&eacute;tro. Je paie environ <strong>500&nbsp;&euro; par mois</strong> loyer
        compris, ce qui est tout &agrave; fait raisonnable pour Madrid.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Le campus de l&apos;Universidad Europea est vraiment impressionnant. Les b&acirc;timents sont
        modernes, les laboratoires bien &eacute;quip&eacute;s, et surtout les professeurs sont
        <strong> accessibles</strong>. On n&apos;est pas un num&eacute;ro dans un amphi de 500 personnes
        comme en France. Les promotions sont &agrave; taille humaine, et les profs connaissent nos
        pr&eacute;noms. &Ccedil;a change tout.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Ce que j&apos;adore le plus, c&apos;est l&apos;approche pratique de la formation. D&egrave;s
        la deuxi&egrave;me ann&eacute;e, j&apos;ai commenc&eacute; mes <strong>rotations cliniques
        &agrave; l&apos;Hospital Universitario</strong>. On touche de vrais patients, on observe de
        vraies consultations, on apprend sur le terrain. C&apos;est exactement ce qui manquait en PASS
        o&ugrave; tout &eacute;tait th&eacute;orique.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        Et l&apos;espagnol, me direz-vous&nbsp;? J&apos;avais un niveau scolaire assez basique en
        arrivant. Les premiers mois ont &eacute;t&eacute; un peu intenses, mais on apprend vite quand
        on est immerg&eacute;e. Au bout de six mois, je suivais les cours sans difficult&eacute;. Maintenant,
        je suis bilingue &mdash; et c&apos;est un atout incroyable pour ma carri&egrave;re future.
      </p>
      <p className="text-[#334155] leading-relaxed mb-4">
        En dehors des cours, la vie &agrave; Madrid est fantastique. Les week-ends, je pars parfois
        visiter d&apos;autres villes espagnoles avec mes amis &mdash; S&eacute;ville, Barcelone, Valence.
        La communaut&eacute; &eacute;tudiante internationale est tr&egrave;s riche : j&apos;ai des amis
        italiens, portugais, colombiens. On partage nos cultures, nos plats, nos histoires. C&apos;est
        une exp&eacute;rience de vie autant qu&apos;une formation.
      </p>

      {/* Section 5 - Conseils */}
      <SectionTitle id="conseils" icon={<Lightbulb className="w-6 h-6 text-[#EC680A]" />}>
        Mes conseils aux futurs &eacute;tudiants
      </SectionTitle>

      <p className="text-[#334155] leading-relaxed mb-4">
        Si vous &ecirc;tes en train de lire cet article, c&apos;est probablement que vous vous posez
        les m&ecirc;mes questions que moi il y a trois ans. Voici les cinq choses que j&apos;aurais
        aim&eacute; qu&apos;on me dise &agrave; l&apos;&eacute;poque :
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-4 bg-[#fafbff] border border-gray-200/80 rounded-xl p-5">
          <span className="w-8 h-8 rounded-full bg-[#615CA5] text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
            1
          </span>
          <div>
            <p className="font-bold text-[#1B1D3A] text-sm mb-1">
              Un &eacute;chec en PASS, ce n&apos;est pas la fin
            </p>
            <p className="text-sm text-[#334155] leading-relaxed">
              Je sais que c&apos;est difficile &agrave; entendre quand on est en plein dedans, mais
              il existe d&apos;autres chemins. Le syst&egrave;me fran&ccedil;ais est brutal, et ne pas
              passer le concours ne veut pas dire que vous n&apos;&ecirc;tes pas fait(e) pour la
              m&eacute;decine. Croyez-moi.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-[#fafbff] border border-gray-200/80 rounded-xl p-5">
          <span className="w-8 h-8 rounded-full bg-[#615CA5] text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
            2
          </span>
          <div>
            <p className="font-bold text-[#1B1D3A] text-sm mb-1">
              Commencez l&apos;espagnol le plus t&ocirc;t possible
            </p>
            <p className="text-sm text-[#334155] leading-relaxed">
              M&ecirc;me les bases. Regardez des s&eacute;ries en espagnol, t&eacute;l&eacute;chargez
              Duolingo, &eacute;coutez de la musique hispanophone. Chaque petit effort compte et vous
              facilitera &eacute;norm&eacute;ment la transition.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-[#fafbff] border border-gray-200/80 rounded-xl p-5">
          <span className="w-8 h-8 rounded-full bg-[#615CA5] text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
            3
          </span>
          <div>
            <p className="font-bold text-[#1B1D3A] text-sm mb-1">
              Faites confiance au processus Edumove
            </p>
            <p className="text-sm text-[#334155] leading-relaxed">
              J&apos;&eacute;tais sceptique au d&eacute;but, je l&apos;admets. Mais &agrave; chaque
              &eacute;tape, l&apos;&eacute;quipe a tenu ses promesses. Ils g&egrave;rent tout :
              administratif, logement, financement, suivi. Laissez-les vous guider, c&apos;est leur
              m&eacute;tier.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-[#fafbff] border border-gray-200/80 rounded-xl p-5">
          <span className="w-8 h-8 rounded-full bg-[#615CA5] text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
            4
          </span>
          <div>
            <p className="font-bold text-[#1B1D3A] text-sm mb-1">
              G&eacute;rez bien votre budget
            </p>
            <p className="text-sm text-[#334155] leading-relaxed">
              Madrid est une ville abordable si on s&apos;organise. Avec un loyer en coloc autour
              de 500&nbsp;&euro;, les courses au march&eacute;, et les transports en commun (abonnement
              jeune &agrave; 20&nbsp;&euro;/mois), on vit tr&egrave;s bien. &Eacute;tablissez un budget
              mensuel d&egrave;s le d&eacute;part et tenez-vous y.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-[#fafbff] border border-gray-200/80 rounded-xl p-5">
          <span className="w-8 h-8 rounded-full bg-[#615CA5] text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
            5
          </span>
          <div>
            <p className="font-bold text-[#1B1D3A] text-sm mb-1">
              Ouvrez-vous &agrave; l&apos;exp&eacute;rience
            </p>
            <p className="text-sm text-[#334155] leading-relaxed">
              Partir &eacute;tudier &agrave; l&apos;&eacute;tranger, c&apos;est bien plus qu&apos;un
              dipl&ocirc;me. C&apos;est apprendre une langue, d&eacute;couvrir une culture, gagner en
              ind&eacute;pendance, se d&eacute;couvrir soi-m&ecirc;me. Foncez, vous ne le regretterez pas.
            </p>
          </div>
        </div>
      </div>

      <Callout>
        Si j&apos;ai un seul message &agrave; faire passer, c&apos;est celui-ci : <strong>ne laissez
        pas un concours d&eacute;finir votre avenir</strong>. Il y a d&apos;autres voies, et elles
        sont tout aussi l&eacute;gitimes. Aujourd&apos;hui, je suis &eacute;panouie, je progresse
        chaque jour, et je sais que je deviendrai m&eacute;decin.
      </Callout>

      <p className="text-[#334155] leading-relaxed mb-4">
        Pour aller plus loin, je vous recommande de lire l&apos;article sur{" "}
        <Link href="/blog/financer-etudes-sante-europe" className="text-[#EC680A] underline hover:text-[#D45E09] transition-colors font-medium">
          le financement des &eacute;tudes de sant&eacute; en Europe
        </Link>{" "}
        et celui sur{" "}
        <Link href="/blog/reconnaissance-diplomes-europeens" className="text-[#EC680A] underline hover:text-[#D45E09] transition-colors font-medium">
          la reconnaissance des dipl&ocirc;mes europ&eacute;ens
        </Link>
        . Ce sont deux sujets qui m&apos;ont beaucoup pr&eacute;occup&eacute;e au d&eacute;but, et ces
        articles r&eacute;pondent &agrave; toutes les questions qu&apos;on se pose.
      </p>
    </>
  );
}
