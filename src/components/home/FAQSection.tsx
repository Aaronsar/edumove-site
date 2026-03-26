"use client";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Les diplômes obtenus en Europe sont-ils reconnus ?",
    a: "Tout à fait. La directive européenne 2005/36/CE encadre la reconnaissance mutuelle des qualifications dans l'UE. Nos universités partenaires délivrent des diplômes officiels, conformes aux standards européens (ECTS). Les conditions d'équivalence en France dépendent ensuite de la filière et du projet professionnel.",
  },
  {
    q: "La reconnaissance est-elle automatique ?",
    a: "Pour les diplômes relevant de la directive sectorielle (médecine, dentaire…), la reconnaissance est souvent automatique si la formation respecte les standards de durée et de contenu.",
  },
  {
    q: "Est-il possible de postuler à plusieurs universités en même temps ?",
    a: "Bien sûr, et c'est même recommandé. On peut candidater à plusieurs universités en parallèle pour maximiser ses chances d'admission.",
  },
  {
    q: "Quel niveau est requis pour candidater ?",
    a: "Un baccalauréat est nécessaire, toutes filières confondues. Chaque dossier est étudié individuellement — parcours scolaire, motivation, projet pro — pour orienter vers la formation la plus adaptée.",
  },
  {
    q: "Dans quels pays peut-on étudier avec Edumove ?",
    a: "Deux pays aujourd'hui : l'Espagne (Madrid) et l'Italie (Rome). Les destinations dépendent des filières et des places disponibles.",
  },
  {
    q: "Comment être contacté pour un premier échange ?",
    a: "Remplissez le formulaire sur le site ou cliquez sur « Être recontacté ». Un conseiller vous rappelle rapidement pour un premier échange gratuit et sans engagement.",
  },
  {
    q: "À quoi sert le premier rendez-vous avec Edumove ?",
    a: "C'est un échange libre pour faire le point sur votre projet : quelle filière, quelle université, quelles conditions d'admission, quel financement. Aucun engagement, c'est juste pour y voir plus clair.",
  },
  {
    q: "Quel est le rôle d'Edumove dans le projet d'études ?",
    a: "On s'occupe de tout le parcours avec vous : orientation, montage du dossier, candidatures, lien avec les universités, préparation aux tests, et suivi administratif jusqu'à l'admission.",
  },
  {
    q: "Quel est le coût de l'accompagnement Edumove ?",
    a: "Deux formules : 990 € pour la constitution et le dépôt des dossiers + l'étude des solutions de financement. 1 990 € pour les élèves de Terminale, avec en plus un renforcement académique de février à juin, une préparation aux oraux du bac et un accompagnement Parcoursup.",
  },
  {
    q: "Edumove finance-t-il les études ?",
    a: "Non, on n'est pas une banque. En revanche, on fait le lien avec des partenaires bancaires (notamment LCL) pour monter un prêt étudiant à partir de 75 000 €, remboursable une fois diplômé et en poste.",
    link: { href: "/financement", label: "Découvrir nos solutions de financement" },
  },
  {
    q: "Comment fonctionnent les solutions de financement évoquées ?",
    a: "Chaque situation est différente : la solution dépend de la filière, du pays, de votre profil. On joue un rôle de facilitateur avec les banques, sans jamais imposer quoi que ce soit.",
    link: { href: "/financement", label: "En savoir plus sur le financement" },
  },
  {
    q: "À qui s'adresse Edumove ?",
    a: "Principalement aux lycéens de Terminale et aux étudiants en réorientation (souvent après un ou deux échecs en PASS/LAS). Mais tout profil motivé avec un projet sérieux en santé peut nous contacter.",
  },
  {
    q: "Quand faut-il contacter Edumove ?",
    a: "Le plus tôt possible — ça permet d'avoir plus de choix et de mieux préparer le dossier. Mais même si la rentrée approche, appelez-nous, il n'est jamais trop tard.",
  },
  {
    q: "Combien coûtent les études de médecine en Europe ?",
    a: "Les frais de scolarité varient entre 5 000 € et 20 000 € par an selon l'université. C'est un budget conséquent, mais des solutions de financement permettent de démarrer sans avance immédiate et de ne rembourser qu'une fois en activité.",
    link: { href: "/financement", label: "Voir les détails du financement" },
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const renderFaq = (faq: { q: string; a: string; link?: { href: string; label: string } }, originalIndex: number) => (
    <div
      key={originalIndex}
      className={`border rounded-xl overflow-hidden transition-all ${
        open === originalIndex ? "border-[#ec680a]/60 shadow-sm" : "border-gray-200"
      }`}
    >
      <button
        onClick={() => setOpen(open === originalIndex ? null : originalIndex)}
        className="w-full flex items-center justify-between p-5 h-[68px] text-left hover:bg-gray-50/50 transition-colors"
      >
        <span className="font-semibold text-[#1b1d3a] text-sm pr-4 line-clamp-1">{faq.q}</span>
        <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm transition-all ${
          open === originalIndex ? "bg-[#ec680a] text-white" : "bg-gray-100 text-[#334155]"
        }`}>
          {open === originalIndex ? "−" : "+"}
        </span>
      </button>
      {open === originalIndex && (
        <div className="px-5 pb-5">
          <p className="text-[#334155] text-sm leading-relaxed">{faq.a}</p>
          {faq.link && (
            <Link href={faq.link.href} className="inline-block mt-2 text-sm text-[#615CA5] hover:text-[#ec680a] underline underline-offset-2 font-medium transition-colors">
              {faq.link.label} &rarr;
            </Link>
          )}
        </div>
      )}
    </div>
  );

  return (
    <section className="relative py-10 md:py-16 bg-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec680a] via-[#615ca5] to-[#ec680a]" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-2">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#1b1d3a" }}>
            Questions fréquentes
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 space-y-3">
            {faqs.filter((_, i) => i % 2 === 0).map((faq, i) => renderFaq(faq, i * 2))}
          </div>
          <div className="flex-1 space-y-3">
            {faqs.filter((_, i) => i % 2 === 1).map((faq, i) => renderFaq(faq, i * 2 + 1))}
          </div>
        </div>
      </div>
    </section>
  );
}
