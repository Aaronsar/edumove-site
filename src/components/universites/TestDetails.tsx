"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Clock, MapPin, Euro, FileText, CheckCircle, XCircle, Lightbulb, Zap, Globe, Brain, MessageCircle, Target, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

  const infoPratiques = [
    { icon: Clock, label: "Date", value: "15 avril 2026" },
    { icon: MapPin, label: "Lieu", value: "Paris" },
    { icon: Euro, label: "Frais", value: "200\u00a0\u20ac" },
    { icon: FileText, label: "Format", value: "QCM en fran\u00e7ais" },
    { icon: Clock, label: "Dur\u00e9e", value: "~2h30" },
    { icon: BookOpen, label: "R\u00e9sultats", value: "sous quelques jours" },
  ];

  const formatQcm = [
    { label: "80 questions", desc: "au total" },
    { label: "5 mati\u00e8res", desc: "toutes en fran\u00e7ais" },
    { label: "+1.5 pt", desc: "par bonne r\u00e9ponse" },
    { label: "\u20130.4 pt", desc: "par mauvaise r\u00e9ponse" },
    { label: "0 pt", desc: "si non r\u00e9pondue" },
  ];

  return (
    <section className="relative py-16 bg-[#fafbff] overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#615CA5]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#EC680A]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#EC680A] mb-3">
            Test d&apos;admission
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-10">
            D&eacute;tails du test d&apos;admission LINK
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Informations pratiques */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-200/80 p-6 hover:shadow-[0_20px_60px_-15px_rgba(97,92,165,0.12)] transition-shadow duration-300"
          >
            <h3 className="font-bold text-lg text-[#1B1D3A] mb-5 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              Informations pratiques
            </h3>
            <ul className="space-y-3.5">
              {infoPratiques.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-center gap-3 text-sm">
                    <Icon className="w-4 h-4 text-[#EC680A] shrink-0" />
                    <span><strong className="text-[#1B1D3A]">{item.label} :</strong> <span className="text-[#64748b]">{item.value}</span></span>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Format du QCM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-200/80 p-6 hover:shadow-[0_20px_60px_-15px_rgba(97,92,165,0.12)] transition-shadow duration-300"
          >
            <h3 className="font-bold text-lg text-[#1B1D3A] mb-5 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              Format du QCM
            </h3>
            <ul className="space-y-3.5 text-sm">
              {formatQcm.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#EC680A]/15 flex items-center justify-center shrink-0">
                    <span className="w-2 h-2 rounded-full bg-[#EC680A]" />
                  </span>
                  <span><strong className="text-[#1B1D3A]">{item.label}</strong> <span className="text-[#64748b]">{item.desc}</span></span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Table des matieres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden mb-8"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1B1D3A] text-white">
                <th className="text-left px-5 py-3.5 font-semibold">Mati&egrave;re</th>
                <th className="text-left px-5 py-3.5 font-semibold">Nombre de questions</th>
              </tr>
            </thead>
            <tbody>
              {matieres.map((m, i) => (
                <tr key={m.name} className={`border-t border-gray-100 hover:bg-[#615CA5]/[0.03] transition-colors ${i % 2 === 1 ? "bg-gray-50/50" : ""}`}>
                  <td className="px-5 py-3.5 font-medium text-[#1B1D3A]">{m.name}</td>
                  <td className="px-5 py-3.5 text-[#64748b]">{m.questions} questions</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Conseil */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border-l-4 border-[#EC680A] shadow-sm p-5 flex items-start gap-3"
        >
          <Lightbulb className="w-5 h-5 text-[#EC680A] shrink-0 mt-0.5" />
          <p className="text-sm text-[#334155]">
            <strong>Conseil :</strong> r&eacute;viser le programme de Terminale en sciences. Les questions sont de niveau bac.
          </p>
        </motion.div>

        {/* Lien guide complet */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <Link
            href="/guides/reussir-test-admission-link-campus"
            className="group flex items-center justify-between bg-gradient-to-r from-[#615CA5] to-[#1B1D3A] rounded-2xl p-5 hover:shadow-[0_20px_60px_-15px_rgba(97,92,165,0.25)] transition-shadow duration-300"
          >
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-1">Guide complet</p>
              <p className="text-white font-bold text-sm md:text-base">
                Comment r&eacute;ussir le test de LINK Campus University ?
              </p>
            </div>
            <span className="w-10 h-10 rounded-full bg-[#EC680A] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <ArrowRight className="w-5 h-5 text-white" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function UETestDetails() {
  const epreuves: { name: string; description: string; icon: LucideIcon }[] = [
    {
      name: "Test de langue",
      description: "Évaluation du niveau de langue (espagnol ou anglais selon la filière).",
      icon: Globe,
    },
    {
      name: "Test talent / aptitudes",
      description: "Évaluation des capacités cognitives et aptitudes spécifiques.",
      icon: Brain,
    },
    {
      name: "Test motivation (entretien)",
      description: "Entretien portant sur la motivation et le projet professionnel.",
      icon: MessageCircle,
    },
    {
      name: "Épreuve spécifique",
      description: "Épreuve adaptée à la filière choisie.",
      icon: Target,
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
    <section className="relative py-16 bg-[#fafbff] overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#615CA5]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#EC680A]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#EC680A] mb-3">
            Test d&apos;admission
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-10">
            D&eacute;tails du test PE (Prueba Espec&iacute;fica)
          </h2>
        </motion.div>

        {/* 4 epreuves */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {epreuves.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl border border-gray-200/80 border-l-4 border-l-[#615CA5] p-5 hover:shadow-[0_20px_60px_-15px_rgba(97,92,165,0.15)] hover:-translate-y-1 hover:border-l-[#EC680A] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#615CA5]/20">
                  {i + 1}
                </div>
                <e.icon className="w-5 h-5 text-[#615CA5]" />
              </div>
              <h3 className="font-bold text-[#1B1D3A] text-sm mb-2">
                {e.name}
              </h3>
              <p className="text-xs text-[#64748b] leading-relaxed">
                {e.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Points cles */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border-l-4 border-[#EC680A] shadow-sm p-6 mb-10"
        >
          <h3 className="font-bold text-[#1B1D3A] mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#EC680A]" />
            Points cl&eacute;s
          </h3>
          <ul className="space-y-3 text-sm text-[#334155]">
            <li className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-[#EC680A] shrink-0" />
              R&eacute;sultats communiqu&eacute;s sous 48h
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-[#EC680A] shrink-0" />
              2 jours pour verser l&apos;acompte de 2&nbsp;500&nbsp;&euro;
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-[#EC680A] shrink-0" />
              Tests en ligne ou en pr&eacute;sentiel
            </li>
          </ul>
        </motion.div>

        {/* Who needs PE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden"
        >
          <div className="px-5 py-4 bg-[#1B1D3A]">
            <h3 className="font-bold text-white text-sm">
              Fili&egrave;res soumises au PE
            </h3>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/50">
                <th className="text-left px-5 py-3 font-semibold text-[#1B1D3A]">Fili&egrave;re</th>
                <th className="text-left px-5 py-3 font-semibold text-[#1B1D3A]">PE requis ?</th>
              </tr>
            </thead>
            <tbody>
              {peTable.map((row, i) => (
                <tr key={row.filiere} className={`border-t border-gray-100 hover:bg-[#615CA5]/[0.03] transition-colors ${i % 2 === 1 ? "bg-gray-50/50" : ""}`}>
                  <td className="px-5 py-3 font-medium text-[#1B1D3A]">{row.filiere}</td>
                  <td className="px-5 py-3">
                    {row.pe ? (
                      <span className="inline-flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 bg-[#615CA5]/10 text-[#615CA5] text-xs font-bold px-2.5 py-1 rounded-full">
                          <CheckCircle className="w-3.5 h-3.5" />
                          OUI
                        </span>
                        {row.note && (
                          <span className="text-[10px] text-[#EC680A] font-bold uppercase">({row.note})</span>
                        )}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-gray-100 text-[#94a3b8] text-xs font-bold px-2.5 py-1 rounded-full">
                        <XCircle className="w-3.5 h-3.5" />
                        NON
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Lien guide complet */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <Link
            href="/guides/reussir-test-pe-universidad-europea"
            className="group flex items-center justify-between bg-gradient-to-r from-[#615CA5] to-[#1B1D3A] rounded-2xl p-5 hover:shadow-[0_20px_60px_-15px_rgba(97,92,165,0.25)] transition-shadow duration-300"
          >
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-1">Guide complet</p>
              <p className="text-white font-bold text-sm md:text-base">
                Comment r&eacute;ussir le test de l&apos;Universidad Europea ?
              </p>
            </div>
            <span className="w-10 h-10 rounded-full bg-[#EC680A] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <ArrowRight className="w-5 h-5 text-white" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function TestDetails({ type }: TestDetailsProps) {
  if (type === "link") return <LinkTestDetails />;
  return <UETestDetails />;
}
