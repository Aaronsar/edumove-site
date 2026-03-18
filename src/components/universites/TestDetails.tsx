"use client";

import { BookOpen, Clock, MapPin, Euro, FileText, CheckCircle, XCircle, Lightbulb } from "lucide-react";

interface TestDetailsProps {
  type: "link" | "ue";
}

function LinkTestDetails() {
  const matieres = [
    { name: "Biologie", questions: "~18" },
    { name: "Chimie", questions: "~12" },
    { name: "Math\u00e9matiques", questions: "~20" },
    { name: "Physique", questions: "~18" },
    { name: "Culture g\u00e9n\u00e9rale", questions: "~12" },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold italic text-[#1B1D3A] mb-8">
          D&eacute;tails du test d&apos;admission
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Left: Informations pratiques */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-lg italic text-[#1B1D3A] mb-4">
              Informations pratiques
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-[#EC680A] shrink-0" />
                <span>
                  <strong>Date :</strong> 15 avril 2026
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-[#EC680A] shrink-0" />
                <span>
                  <strong>Lieu :</strong> Paris
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Euro className="w-4 h-4 text-[#EC680A] shrink-0" />
                <span>
                  <strong>Frais :</strong> 200&nbsp;&euro;
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FileText className="w-4 h-4 text-[#EC680A] shrink-0" />
                <span>
                  <strong>Format :</strong> QCM en fran&ccedil;ais
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-[#EC680A] shrink-0" />
                <span>
                  <strong>Dur&eacute;e :</strong> ~2h30
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <BookOpen className="w-4 h-4 text-[#EC680A] shrink-0" />
                <span>
                  <strong>R&eacute;sultats :</strong> sous quelques jours par
                  e-mail
                </span>
              </li>
            </ul>
          </div>

          {/* Right: Format du QCM */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-lg italic text-[#1B1D3A] mb-4">
              Format du QCM
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#EC680A] font-bold">&#8226;</span>
                <span>
                  <strong>80 questions</strong> au total
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EC680A] font-bold">&#8226;</span>
                <span>
                  <strong>5 mati&egrave;res</strong>, toutes en fran&ccedil;ais
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EC680A] font-bold">&#8226;</span>
                <span>
                  <strong>+1.5 pt</strong> par bonne r&eacute;ponse
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EC680A] font-bold">&#8226;</span>
                <span>
                  <strong>-0.4 pt</strong> par mauvaise r&eacute;ponse
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EC680A] font-bold">&#8226;</span>
                <span>
                  <strong>0 pt</strong> si non r&eacute;pondue
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Table des matieres */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1B1D3A] text-white">
                <th className="text-left px-4 py-3 font-semibold">
                  Mati&egrave;re
                </th>
                <th className="text-left px-4 py-3 font-semibold">
                  Nombre de questions
                </th>
              </tr>
            </thead>
            <tbody>
              {matieres.map((m, i) => (
                <tr
                  key={m.name}
                  className={`border-t border-gray-200 ${
                    i % 2 === 1 ? "bg-gray-50" : ""
                  }`}
                >
                  <td className="px-4 py-3 font-medium">{m.name}</td>
                  <td className="px-4 py-3">{m.questions} questions</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Conseil */}
        <div className="bg-orange-50 border border-[#EC680A]/30 rounded-lg p-4 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-[#EC680A] shrink-0 mt-0.5" />
          <p className="text-sm text-[#334155]">
            <strong>Conseil :</strong> r&eacute;viser le programme de Terminale
            en sciences. Les questions sont de niveau bac.
          </p>
        </div>
      </div>
    </section>
  );
}

function UETestDetails() {
  const epreuves = [
    {
      name: "Test de langue",
      description:
        "\u00c9valuation du niveau de langue (espagnol ou anglais selon la fili\u00e8re).",
    },
    {
      name: "Test talent / aptitudes",
      description:
        "\u00c9valuation des capacit\u00e9s cognitives et aptitudes sp\u00e9cifiques.",
    },
    {
      name: "Test motivation (entretien)",
      description:
        "Entretien portant sur la motivation et le projet professionnel.",
    },
    {
      name: "\u00c9preuve sp\u00e9cifique",
      description:
        "\u00c9preuve adapt\u00e9e \u00e0 la fili\u00e8re choisie.",
    },
  ];

  const peTable = [
    { filiere: "M\u00e9decine", pe: true },
    { filiere: "Dentaire", pe: true },
    { filiere: "V\u00e9t\u00e9rinaire", pe: true },
    { filiere: "Kin\u00e9 FR Madrid", pe: true, note: "exception" },
    { filiere: "Kin\u00e9 (autres campus)", pe: false },
    { filiere: "Pharmacie", pe: false },
    { filiere: "Pr\u00e9pa Dentaire", pe: false },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold italic text-[#1B1D3A] mb-8">
          D&eacute;tails du test PE (Prueba Espec&iacute;fica)
        </h2>

        {/* 4 epreuves */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {epreuves.map((e, i) => (
            <div
              key={e.name}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-5"
            >
              <div className="w-8 h-8 rounded-full bg-[#EC680A] text-white flex items-center justify-center font-bold text-sm mb-3">
                {i + 1}
              </div>
              <h3 className="font-semibold italic text-[#1B1D3A] text-sm mb-1">
                {e.name}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {e.description}
              </p>
            </div>
          ))}
        </div>

        {/* Points cles */}
        <div className="bg-orange-50 border border-[#EC680A]/30 rounded-xl p-6 mb-8">
          <h3 className="font-bold italic text-[#1B1D3A] mb-3">Points cl&eacute;s</h3>
          <ul className="space-y-2 text-sm text-[#334155]">
            <li className="flex items-start gap-2">
              <span className="text-[#EC680A] font-bold mt-0.5">&#8226;</span>
              <span>R&eacute;sultats communiqu&eacute;s sous 48h</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#EC680A] font-bold mt-0.5">&#8226;</span>
              <span>
                2 jours pour verser l&apos;acompte de 2&nbsp;500&nbsp;&euro;
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#EC680A] font-bold mt-0.5">&#8226;</span>
              <span>Tests en ligne ou en pr&eacute;sentiel</span>
            </li>
          </ul>
        </div>

        {/* Who needs PE */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-4 py-3 bg-[#1B1D3A]">
            <h3 className="font-semibold text-white text-sm">
              Fili&egrave;res soumises au PE
            </h3>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-4 py-2 font-semibold text-[#1B1D3A]">
                  Fili&egrave;re
                </th>
                <th className="text-left px-4 py-2 font-semibold text-[#1B1D3A]">
                  PE requis ?
                </th>
              </tr>
            </thead>
            <tbody>
              {peTable.map((row, i) => (
                <tr
                  key={row.filiere}
                  className={`border-t border-gray-200 ${
                    i % 2 === 1 ? "bg-gray-50" : ""
                  }`}
                >
                  <td className="px-4 py-2.5 font-medium">{row.filiere}</td>
                  <td className="px-4 py-2.5">
                    {row.pe ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600">
                        <CheckCircle className="w-4 h-4" />
                        OUI
                        {row.note && (
                          <span className="text-[10px] text-amber-600 font-bold ml-1 uppercase">
                            ({row.note})
                          </span>
                        )}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-red-500">
                        <XCircle className="w-4 h-4" />
                        NON
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default function TestDetails({ type }: TestDetailsProps) {
  if (type === "link") return <LinkTestDetails />;
  return <UETestDetails />;
}
