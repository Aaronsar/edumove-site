"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Les diplômes sont-ils reconnus en France ?",
    a: "Oui, tous les diplômes délivrés par nos universités partenaires sont reconnus dans l'ensemble de l'Union Européenne. Vous pouvez exercer en France après inscription à l'Ordre national de votre profession.",
  },
  {
    q: "Comment fonctionne le financement ?",
    a: "Grâce à notre partenariat avec LCL, vous pouvez obtenir un prêt étudiant jusqu'à 75 000 €. Vous ne commencez à rembourser qu'une fois diplômé(e) et en poste. Aucun frais à avancer.",
  },
  {
    q: "Faut-il parler la langue du pays ?",
    a: "Pas forcément. À LINK (Italie), un cours d'italien intensif est inclus la 1ère année et le test d'admission est 100% en français. À l'Universidad Europea (Espagne), certains cursus sont en anglais ou en français. L'UCJC demande un niveau basique en espagnol (un certificat e-learning suffit).",
  },
  {
    q: "Quelle moyenne faut-il pour être admis ?",
    a: "Cela dépend de l'université et de la filière. À LINK et l'UCJC, il n'y a aucune condition de moyenne. À l'Universidad Europea, une moyenne de 13 à 17/20 est demandée selon la filière. Contactez-nous pour une étude gratuite de votre dossier.",
  },
  {
    q: "Que se passe-t-il si je ne suis pas admis ?",
    a: "EduMove vous rembourse intégralement. C'est notre garantie \"Admis ou remboursé\". Nous préparons également des candidatures dans plusieurs universités pour maximiser vos chances.",
  },
  {
    q: "Comment se passe l'accompagnement EduMove ?",
    a: "On s'occupe de tout : orientation vers la bonne université, préparation aux tests, constitution du dossier, recherche de logement, traduction des cours, et suivi pendant toute la durée de vos études.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#ec680a] text-xs uppercase tracking-widest font-semibold mb-2">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#1b1d3a" }}>
            Questions fréquentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all ${
                open === i ? "border-[#615ca5]/30 shadow-sm" : "border-gray-200"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50/50 transition-colors"
              >
                <span className="font-semibold text-[#1b1d3a] text-sm pr-4">{faq.q}</span>
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm transition-all ${
                  open === i ? "bg-[#ec680a] text-white" : "bg-gray-100 text-[#334155]"
                }`}>
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-[#334155] text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
