import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function MentionsLegales() {
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
              Mentions l&eacute;gales
            </span>
          </nav>
          <h1
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{ color: "#ffffff" }}
          >
            Mentions l&eacute;gales
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          {/* 1 - Editeur */}
          <div>
            <h2 className="text-xl font-bold text-[#1B1D3A] mb-4">
              1. &Eacute;diteur du site
            </h2>
            <p className="text-[#334155] leading-relaxed mb-4">
              Le site <strong>www.edumove.fr</strong> est &eacute;dit&eacute; par la
              soci&eacute;t&eacute; <strong>DIPLOMA SANTE SAS</strong>, soci&eacute;t&eacute; par
              actions simplifi&eacute;e au capital de 1&nbsp;000&nbsp;&euro;,
              immatricul&eacute;e au Registre du Commerce et des Soci&eacute;t&eacute;s de Paris.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#334155] leading-relaxed">
              <li><strong>Si&egrave;ge social :</strong> 17, Rue de la Plaine, 75020 Paris</li>
              <li><strong>SIRET :</strong> 878 200 534 00013</li>
              <li><strong>T&eacute;l&eacute;phone :</strong> 01 89 74 42 57</li>
              <li>
                <strong>Email :</strong>{" "}
                <a href="mailto:admissions@edumove.fr" className="text-[#EC680A] hover:underline">
                  admissions@edumove.fr
                </a>
              </li>
              <li>
                <strong>Directeur de la publication :</strong> Le repr&eacute;sentant l&eacute;gal
                de DIPLOMA SANTE SAS
              </li>
            </ul>
          </div>

          {/* 2 - Hebergement */}
          <div>
            <h2 className="text-xl font-bold text-[#1B1D3A] mb-4">
              2. H&eacute;bergement
            </h2>
            <p className="text-[#334155] leading-relaxed mb-4">
              Le site est h&eacute;berg&eacute; par :
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#334155] leading-relaxed">
              <li><strong>Vercel Inc.</strong></li>
              <li>340 S Lemon Ave #4133, Walnut, CA 91789, United States</li>
              <li>
                Site web :{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EC680A] hover:underline"
                >
                  vercel.com
                </a>
              </li>
            </ul>
          </div>

          {/* 3 - Propriete intellectuelle */}
          <div>
            <h2 className="text-xl font-bold text-[#1B1D3A] mb-4">
              3. Propri&eacute;t&eacute; intellectuelle
            </h2>
            <p className="text-[#334155] leading-relaxed mb-4">
              L&apos;ensemble du contenu du site www.edumove.fr (textes, images, vid&eacute;os,
              graphismes, logo, ic&ocirc;nes, sons, logiciels, etc.) est la propri&eacute;t&eacute;
              exclusive de DIPLOMA SANTE SAS ou de ses partenaires et est prot&eacute;g&eacute; par
              les lois fran&ccedil;aises et internationales relatives &agrave; la
              propri&eacute;t&eacute; intellectuelle.
            </p>
            <p className="text-[#334155] leading-relaxed mb-4">
              Toute reproduction, repr&eacute;sentation, modification, publication, adaptation de
              tout ou partie des &eacute;l&eacute;ments du site, quel que soit le moyen ou le
              proc&eacute;d&eacute; utilis&eacute;, est interdite, sauf autorisation &eacute;crite
              pr&eacute;alable de DIPLOMA SANTE SAS.
            </p>
            <p className="text-[#334155] leading-relaxed">
              Toute exploitation non autoris&eacute;e du site ou de l&apos;un quelconque des
              &eacute;l&eacute;ments qu&apos;il contient sera consid&eacute;r&eacute;e comme
              constitutive d&apos;une contrefa&ccedil;on et poursuivie conform&eacute;ment aux
              dispositions des articles L.335-2 et suivants du Code de la Propri&eacute;t&eacute;
              Intellectuelle.
            </p>
          </div>

          {/* 4 - Liens et cookies */}
          <div>
            <h2 className="text-xl font-bold text-[#1B1D3A] mb-4">
              4. Liens hypertexte et cookies
            </h2>
            <p className="text-[#334155] leading-relaxed mb-4">
              Le site www.edumove.fr peut contenir des liens hypertextes vers d&apos;autres sites.
              Cependant, DIPLOMA SANTE SAS n&apos;a pas la possibilit&eacute; de v&eacute;rifier
              le contenu des sites ainsi visit&eacute;s et n&apos;assumera en cons&eacute;quence
              aucune responsabilit&eacute; de ce fait.
            </p>
            <p className="text-[#334155] leading-relaxed mb-4">
              La navigation sur le site www.edumove.fr est susceptible de provoquer
              l&apos;installation de cookie(s) sur l&apos;ordinateur de l&apos;utilisateur. Un
              cookie est un fichier de petite taille qui ne permet pas l&apos;identification de
              l&apos;utilisateur, mais qui enregistre des informations relatives &agrave; la
              navigation d&apos;un ordinateur sur un site. Les donn&eacute;es ainsi obtenues visent
              &agrave; faciliter la navigation ult&eacute;rieure sur le site et ont
              &eacute;galement vocation &agrave; permettre diverses mesures de
              fr&eacute;quentation.
            </p>
            <p className="text-[#334155] leading-relaxed">
              Le refus d&apos;installation d&apos;un cookie peut entra&icirc;ner
              l&apos;impossibilit&eacute; d&apos;acc&eacute;der &agrave; certains services.
              L&apos;utilisateur peut toutefois configurer son ordinateur de la mani&egrave;re
              suivante, pour refuser l&apos;installation des cookies. Pour plus
              d&apos;informations, consultez notre{" "}
              <Link href="/politique-de-confidentialite" className="text-[#EC680A] hover:underline">
                politique de confidentialit&eacute;
              </Link>.
            </p>
          </div>

          {/* 5 - Contact */}
          <div>
            <h2 className="text-xl font-bold text-[#1B1D3A] mb-4">5. Contact</h2>
            <p className="text-[#334155] leading-relaxed mb-4">
              Pour toute question ou demande d&apos;information concernant le site, ou tout
              signalement de contenu ou d&apos;activit&eacute;s illicites, l&apos;utilisateur peut
              contacter l&apos;&eacute;diteur &agrave; l&apos;adresse suivante :
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#334155] leading-relaxed">
              <li>
                <strong>Email :</strong>{" "}
                <a href="mailto:admissions@edumove.fr" className="text-[#EC680A] hover:underline">
                  admissions@edumove.fr
                </a>
              </li>
              <li>
                <strong>T&eacute;l&eacute;phone :</strong> +33 1 89 74 42 57
              </li>
              <li>
                <strong>Adresse :</strong> DIPLOMA SANTE SAS, 17 Rue de la Plaine, 75020 Paris
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
