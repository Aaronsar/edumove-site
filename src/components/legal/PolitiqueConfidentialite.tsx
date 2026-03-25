import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PolitiqueConfidentialite() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[#1B1D3A] overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#615CA5]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EC680A]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20">
          <nav
            className="flex items-center gap-1.5 text-sm mb-6"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <Link href="/" className="hover:text-white/70 transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span style={{ color: "rgba(255,255,255,0.7)" }} className="font-medium">
              Politique de confidentialit&eacute;
            </span>
          </nav>
          <h1
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{ color: "#ffffff" }}
          >
            Politique de confidentialit&eacute;
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          <p className="text-sm text-[#64748b] italic">
            Derni&egrave;re mise &agrave; jour : mars 2026
          </p>

          {/* 1 - Generalites */}
          <div>
            <h2 className="text-xl font-bold text-[#1B1D3A] mb-4">
              1. G&eacute;n&eacute;ralit&eacute;s
            </h2>
            <p className="text-[#334155] leading-relaxed mb-4">
              La soci&eacute;t&eacute; <strong>DIPLOMA SANTE SAS</strong> (op&eacute;rant sous la
              marque <strong>Edumove</strong>), soci&eacute;t&eacute; par actions
              simplifi&eacute;e au capital de 1&nbsp;000&nbsp;&euro;, immatricul&eacute;e au RCS de
              Paris sous le num&eacute;ro SIRET 878&nbsp;200&nbsp;534&nbsp;00013, dont le
              si&egrave;ge social est situ&eacute; au 17, Rue de la Plaine, 75020 Paris, est
              responsable du traitement des donn&eacute;es personnelles collect&eacute;es sur le
              site <strong>www.edumove.fr</strong>.
            </p>
            <p className="text-[#334155] leading-relaxed">
              La pr&eacute;sente politique de confidentialit&eacute; a pour but d&apos;informer les
              utilisateurs du site sur la mani&egrave;re dont leurs donn&eacute;es personnelles sont
              collect&eacute;es, trait&eacute;es et prot&eacute;g&eacute;es, conform&eacute;ment au
              R&egrave;glement G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es (RGPD) et
              &agrave; la loi Informatique et Libert&eacute;s du 6 janvier 1978 modifi&eacute;e.
            </p>
          </div>

          {/* 2 - Informations recueillies */}
          <div>
            <h2 className="text-xl font-bold text-[#1B1D3A] mb-4">
              2. Les informations recueillies
            </h2>
            <p className="text-[#334155] leading-relaxed mb-4">
              Nous collectons les donn&eacute;es personnelles suivantes lorsque vous utilisez notre
              site, remplissez un formulaire de contact ou de candidature, ou &eacute;changez avec
              nos &eacute;quipes :
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#334155] leading-relaxed mb-4">
              <li>Nom et pr&eacute;nom</li>
              <li>Adresse email</li>
              <li>Num&eacute;ro de t&eacute;l&eacute;phone</li>
              <li>
                Informations relatives &agrave; votre parcours scolaire (fili&egrave;re, niveau
                d&apos;&eacute;tudes, &eacute;tablissement)
              </li>
              <li>Ville de r&eacute;sidence</li>
              <li>
                Toute information que vous choisissez de nous communiquer via les formulaires ou par
                &eacute;change direct
              </li>
            </ul>
            <p className="text-[#334155] leading-relaxed">
              Des donn&eacute;es de navigation (adresse IP, type de navigateur, pages
              consult&eacute;es, dur&eacute;e de la visite) peuvent &eacute;galement &ecirc;tre
              collect&eacute;es automatiquement via des cookies et outils d&apos;analyse.
            </p>
          </div>

          {/* 3 - Duree de conservation */}
          <div>
            <h2 className="text-xl font-bold text-[#1B1D3A] mb-4">
              3. Dur&eacute;e de conservation
            </h2>
            <p className="text-[#334155] leading-relaxed mb-4">
              Vos donn&eacute;es personnelles sont conserv&eacute;es pendant une dur&eacute;e
              n&apos;exc&eacute;dant pas celle n&eacute;cessaire aux finalit&eacute;s pour
              lesquelles elles sont collect&eacute;es et trait&eacute;es. Plus
              pr&eacute;cis&eacute;ment :
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#334155] leading-relaxed">
              <li>
                <strong>Donn&eacute;es de prospect :</strong> 3 ans &agrave; compter du dernier
                contact
              </li>
              <li>
                <strong>Donn&eacute;es de candidature :</strong> dur&eacute;e de la relation
                commerciale, puis 3 ans &agrave; des fins d&apos;archivage
              </li>
              <li>
                <strong>Cookies :</strong> 13 mois maximum conform&eacute;ment aux recommandations
                de la CNIL
              </li>
            </ul>
          </div>

          {/* 4 - Utilisation des donnees */}
          <div>
            <h2 className="text-xl font-bold text-[#1B1D3A] mb-4">
              4. Utilisation des donn&eacute;es
            </h2>
            <p className="text-[#334155] leading-relaxed mb-4">
              Les donn&eacute;es collect&eacute;es sont utilis&eacute;es pour :
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#334155] leading-relaxed">
              <li>R&eacute;pondre &agrave; vos demandes d&apos;information et de contact</li>
              <li>
                Assurer le suivi de votre candidature et de votre accompagnement
              </li>
              <li>
                Vous envoyer des communications relatives &agrave; nos services (newsletters,
                informations sur les formations) avec votre consentement
              </li>
              <li>Am&eacute;liorer notre site et nos services</li>
              <li>
                Mesurer l&apos;audience et analyser la fr&eacute;quentation du site
              </li>
              <li>Respecter nos obligations l&eacute;gales et r&eacute;glementaires</li>
            </ul>
          </div>

          {/* 5 - Transferts de donnees */}
          <div>
            <h2 className="text-xl font-bold text-[#1B1D3A] mb-4">
              5. Transferts de donn&eacute;es
            </h2>
            <p className="text-[#334155] leading-relaxed mb-4">
              Vos donn&eacute;es personnelles peuvent &ecirc;tre transmises &agrave; des
              sous-traitants techniques qui nous aident &agrave; g&eacute;rer notre activit&eacute;
              et notre site. Ces sous-traitants s&apos;engagent &agrave; respecter la
              confidentialit&eacute; de vos donn&eacute;es et &agrave; ne les traiter que sur nos
              instructions. Parmi nos principaux prestataires :
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#334155] leading-relaxed mb-4">
              <li>
                <strong>HubSpot</strong> (CRM, gestion des contacts et des formulaires) &mdash;
                donn&eacute;es h&eacute;berg&eacute;es dans l&apos;UE
              </li>
              <li>
                <strong>Vercel Inc.</strong> (h&eacute;bergement du site) &mdash; donn&eacute;es
                pouvant transiter par les &Eacute;tats-Unis, prot&eacute;g&eacute;es par les clauses
                contractuelles types de la Commission europ&eacute;enne
              </li>
              <li>
                <strong>Google Analytics</strong> (mesure d&apos;audience) &mdash; donn&eacute;es
                anonymis&eacute;es
              </li>
            </ul>
            <p className="text-[#334155] leading-relaxed">
              Aucune donn&eacute;e personnelle n&apos;est vendue ou lou&eacute;e &agrave; des
              tiers.
            </p>
          </div>

          {/* 6 - Bases legales */}
          <div>
            <h2 className="text-xl font-bold text-[#1B1D3A] mb-4">
              6. Bases l&eacute;gales du traitement (RGPD)
            </h2>
            <p className="text-[#334155] leading-relaxed mb-4">
              Les traitements de donn&eacute;es reposent sur les bases l&eacute;gales suivantes :
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#334155] leading-relaxed">
              <li>
                <strong>Consentement :</strong> lorsque vous remplissez un formulaire de contact, vous
                consentez au traitement de vos donn&eacute;es pour les finalit&eacute;s
                indiqu&eacute;es
              </li>
              <li>
                <strong>Int&eacute;r&ecirc;t l&eacute;gitime :</strong> am&eacute;lioration de nos
                services, mesure d&apos;audience, prospection commerciale aupr&egrave;s de prospects
                existants
              </li>
              <li>
                <strong>Ex&eacute;cution contractuelle :</strong> traitement n&eacute;cessaire
                &agrave; la gestion de votre accompagnement et de votre candidature
              </li>
              <li>
                <strong>Obligation l&eacute;gale :</strong> conservation de certaines donn&eacute;es
                pour r&eacute;pondre &agrave; nos obligations comptables et fiscales
              </li>
            </ul>
          </div>

          {/* 7 - Vos droits */}
          <div>
            <h2 className="text-xl font-bold text-[#1B1D3A] mb-4">7. Vos droits</h2>
            <p className="text-[#334155] leading-relaxed mb-4">
              Conform&eacute;ment au RGPD et &agrave; la loi Informatique et Libert&eacute;s, vous
              disposez des droits suivants concernant vos donn&eacute;es personnelles :
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#334155] leading-relaxed mb-4">
              <li>
                <strong>Droit d&apos;acc&egrave;s :</strong> obtenir la confirmation que vos
                donn&eacute;es sont trait&eacute;es et en recevoir une copie
              </li>
              <li>
                <strong>Droit de rectification :</strong> demander la correction de donn&eacute;es
                inexactes ou incompl&egrave;tes
              </li>
              <li>
                <strong>Droit &agrave; l&apos;effacement :</strong> demander la suppression de vos
                donn&eacute;es dans les conditions pr&eacute;vues par la loi
              </li>
              <li>
                <strong>Droit &agrave; la limitation :</strong> demander la limitation du traitement
                de vos donn&eacute;es
              </li>
              <li>
                <strong>Droit &agrave; la portabilit&eacute; :</strong> recevoir vos donn&eacute;es
                dans un format structur&eacute; et lisible par machine
              </li>
              <li>
                <strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos
                donn&eacute;es pour des motifs l&eacute;gitimes
              </li>
              <li>
                <strong>Droit de retirer votre consentement :</strong> &agrave; tout moment, sans
                affecter la lic&eacute;it&eacute; du traitement fond&eacute; sur le consentement
                donn&eacute; avant le retrait
              </li>
            </ul>
            <p className="text-[#334155] leading-relaxed mb-4">
              Pour exercer ces droits, vous pouvez nous contacter &agrave; l&apos;adresse suivante :
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#334155] leading-relaxed mb-4">
              <li>
                <strong>Email :</strong>{" "}
                <a href="mailto:contact@edumove.fr" className="text-[#EC680A] hover:underline">
                  contact@edumove.fr
                </a>
              </li>
              <li>
                <strong>Courrier :</strong> DIPLOMA SANTE SAS, 17 Rue de la Plaine, 75020 Paris
              </li>
            </ul>
            <p className="text-[#334155] leading-relaxed">
              Vous disposez &eacute;galement du droit d&apos;introduire une r&eacute;clamation
              aupr&egrave;s de la Commission Nationale de l&apos;Informatique et des
              Libert&eacute;s (CNIL) :{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EC680A] hover:underline"
              >
                www.cnil.fr
              </a>
            </p>
          </div>

          {/* 8 - Securite */}
          <div>
            <h2 className="text-xl font-bold text-[#1B1D3A] mb-4">
              8. S&eacute;curit&eacute;
            </h2>
            <p className="text-[#334155] leading-relaxed mb-4">
              Nous mettons en oeuvre des mesures techniques et organisationnelles
              appropri&eacute;es pour prot&eacute;ger vos donn&eacute;es personnelles contre tout
              acc&egrave;s non autoris&eacute;, toute modification, divulgation ou destruction non
              autoris&eacute;e. Ces mesures comprennent notamment :
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#334155] leading-relaxed">
              <li>Le chiffrement SSL/TLS de toutes les communications</li>
              <li>
                L&apos;acc&egrave;s restreint aux donn&eacute;es personnelles aux seuls
                collaborateurs habilit&eacute;s
              </li>
              <li>
                L&apos;utilisation de prestataires d&apos;h&eacute;bergement certifi&eacute;s et
                conformes aux normes de s&eacute;curit&eacute; en vigueur
              </li>
            </ul>
          </div>

          {/* 9 - Cookies */}
          <div>
            <h2 className="text-xl font-bold text-[#1B1D3A] mb-4">9. Cookies</h2>
            <p className="text-[#334155] leading-relaxed mb-6">
              Le site www.edumove.fr utilise des cookies pour am&eacute;liorer
              l&apos;exp&eacute;rience utilisateur et mesurer l&apos;audience. Les types de cookies
              utilis&eacute;s sont les suivants :
            </p>

            <h3 className="text-base font-semibold text-[#1B1D3A] mb-2">
              Cookies strictement n&eacute;cessaires
            </h3>
            <p className="text-[#334155] leading-relaxed mb-6">
              Ces cookies sont indispensables au fonctionnement du site. Ils permettent
              d&apos;utiliser les principales fonctionnalit&eacute;s du site et ne peuvent pas
              &ecirc;tre d&eacute;sactiv&eacute;s.
            </p>

            <h3 className="text-base font-semibold text-[#1B1D3A] mb-2">
              Cookies analytiques
            </h3>
            <p className="text-[#334155] leading-relaxed mb-6">
              Nous utilisons <strong>Google Analytics</strong> pour mesurer l&apos;audience de notre
              site. Ces cookies collectent des informations de mani&egrave;re anonyme sur la
              fa&ccedil;on dont les visiteurs utilisent notre site (pages visit&eacute;es,
              dur&eacute;e des visites, provenance).
            </p>

            <h3 className="text-base font-semibold text-[#1B1D3A] mb-2">
              Cookies marketing
            </h3>
            <p className="text-[#334155] leading-relaxed mb-4">
              Nous utilisons des cookies de <strong>Meta (Facebook Pixel)</strong> et de{" "}
              <strong>Google Ads</strong> pour mesurer l&apos;efficacit&eacute; de nos campagnes
              publicitaires et vous proposer des contenus personnalis&eacute;s. Ces cookies ne sont
              d&eacute;pos&eacute;s qu&apos;avec votre consentement.
            </p>
            <p className="text-[#334155] leading-relaxed">
              Vous pouvez &agrave; tout moment modifier vos pr&eacute;f&eacute;rences en
              mati&egrave;re de cookies via les param&egrave;tres de votre navigateur ou via notre
              bandeau de gestion des cookies.
            </p>
          </div>

          {/* 10 - Modifications */}
          <div>
            <h2 className="text-xl font-bold text-[#1B1D3A] mb-4">
              10. Modification de la politique de confidentialit&eacute;
            </h2>
            <p className="text-[#334155] leading-relaxed mb-4">
              DIPLOMA SANTE SAS se r&eacute;serve le droit de modifier la pr&eacute;sente politique
              de confidentialit&eacute; &agrave; tout moment. Les modifications seront
              publi&eacute;es sur cette page avec une date de mise &agrave; jour. Nous vous
              encourageons &agrave; consulter r&eacute;guli&egrave;rement cette page pour rester
              inform&eacute; de la mani&egrave;re dont nous prot&eacute;geons vos donn&eacute;es
              personnelles.
            </p>
            <p className="text-[#334155] leading-relaxed">
              Pour toute question relative &agrave; cette politique, vous pouvez nous contacter
              &agrave; :{" "}
              <a href="mailto:contact@edumove.fr" className="text-[#EC680A] hover:underline">
                contact@edumove.fr
              </a>{" "}
              ou par t&eacute;l&eacute;phone au +33 1 89 74 42 57.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
