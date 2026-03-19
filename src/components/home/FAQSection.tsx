"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Les diplômes obtenus en Europe sont-ils reconnus ?",
    a: "Oui. La profession de médecin est régie par la directive européenne 2005/36/CE qui permet la reconnaissance mutuelle des qualifications au sein de l'UE et de l'Espace économique européen. Les universités partenaires d'Edumove délivrent des diplômes officiels et reconnus dans l'Union européenne, conformes aux standards européens (ECTS). Les conditions de reconnaissance ou d'équivalence en France dépendent ensuite de la filière et du projet professionnel.",
  },
  {
    q: "La reconnaissance est-elle automatique ?",
    a: "Pour les diplômes relevant de la directive sectorielle (médecine, dentaire, etc.), la reconnaissance est souvent automatique si la formation respecte les standards (durée minimale, contenu).",
  },
  {
    q: "Est-il possible de postuler à plusieurs universités en même temps ?",
    a: "Oui. Edumove accompagne les étudiants dans des candidatures multiples, afin de sécuriser leur admission et maximiser leurs chances d'intégration dans une université partenaire.",
  },
  {
    q: "Quel niveau est requis pour candidater ?",
    a: "Le niveau requis varie selon la filière et l'université. Edumove étudie chaque dossier au cas par cas (parcours scolaire, motivation, projet professionnel) et oriente l'étudiant vers les formations les plus adaptées.",
  },
  {
    q: "Dans quels pays peut-on étudier avec Edumove ?",
    a: "Edumove travaille avec plusieurs universités partenaires en Europe. Les destinations proposées dépendent des filières et des places disponibles.",
  },
  {
    q: "Comment être contacté pour un premier échange ?",
    a: "Il suffit de remplir le formulaire de contact. Un conseiller Edumove vous recontacte pour un premier échange gratuit, afin d'analyser votre situation et vous orienter.",
  },
  {
    q: "À quoi sert le premier rendez-vous avec Edumove ?",
    a: "Ce premier échange permet de : clarifier votre projet d'études, vérifier l'adéquation avec les filières proposées, expliquer les modalités d'admission, répondre à toutes vos questions, sans engagement.",
  },
  {
    q: "Quel est le rôle d'Edumove dans le projet d'études ?",
    a: "Edumove propose un accompagnement structuré pour les études de santé en Europe : orientation, constitution du dossier, candidatures, relation avec les universités partenaires et suivi des démarches jusqu'à l'admission.",
  },
  {
    q: "Quel est le coût de l'accompagnement Edumove ?",
    a: "L'accompagnement Edumove est proposé selon deux formules : 990 € comprenant un accompagnement illimité pour la constitution et le dépôt des dossiers dans les facultés partenaires en Europe, ainsi qu'un accompagnement à l'étude des solutions de financement. 1 990 € (élèves de Terminale) incluant en plus un renforcement académique ciblé de février à juin, une préparation aux oraux du baccalauréat et un accompagnement Parcoursup.",
  },
  {
    q: "Edumove finance-t-il les études ?",
    a: "Edumove n'est pas un organisme de financement, mais accompagne les étudiants et leurs familles dans la mise en place de solutions de financement adaptées, en lien avec des partenaires bancaires reconnus, notamment LCL. Les étudiants peuvent, selon leur situation, financer leurs études jusqu'à 75 000 €, avec des dispositifs permettant de commencer le remboursement une fois diplômés et en activité professionnelle.",
  },
  {
    q: "Comment fonctionnent les solutions de financement évoquées ?",
    a: "Les solutions de financement sont étudiées au cas par cas, selon la filière, le pays, la situation de l'étudiant et le projet professionnel. Edumove joue un rôle de facilitateur et d'interface, sans jamais imposer de solution.",
  },
  {
    q: "À qui s'adresse Edumove ?",
    a: "Edumove s'adresse aux lycéens de Terminale, aux étudiants en réorientation, et aux candidats souhaitant poursuivre des études de santé en Europe dans un cadre structuré et accompagné.",
  },
  {
    q: "Quand faut-il contacter Edumove ?",
    a: "Le plus tôt possible. Un contact anticipé permet d'élargir le choix des universités, d'anticiper les démarches et de construire un projet cohérent et réaliste.",
  },
  {
    q: "Combien coûtent les études de médecine en Europe ?",
    a: "Les frais de scolarité en médecine en Europe varient selon le pays, l'université et le statut de l'établissement (public ou privé). Dans la majorité des cas, ils se situent entre 5 000 € et 20 000 € par an. Edumove accompagne les étudiants dans la mise en place de solutions de financement, en lien avec des partenaires bancaires reconnus, permettant de financer les études sans avance immédiate et de commencer le remboursement une fois diplômé et en activité professionnelle.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  const renderFaq = (faq: { q: string; a: string }, originalIndex: number) => (
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
        </div>
      )}
    </div>
  );

  return (
    <section className="relative py-16 bg-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec680a] via-[#615ca5] to-[#ec680a]" />
      <div className="max-w-6xl mx-auto px-4">
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
