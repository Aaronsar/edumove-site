"use client";

import { FileCheck, FolderOpen } from "lucide-react";

interface DocumentsListProps {
  candidature: string[];
  apresAcceptation: string[];
  notes?: string[];
}

export default function DocumentsList({
  candidature,
  apresAcceptation,
  notes,
}: DocumentsListProps) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold italic text-[#1B1D3A] mb-6">
          Documents requis
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Candidature documents */}
          <div className="bg-white rounded-xl shadow-sm border-l-4 border-emerald-500 p-6">
            <div className="flex items-center gap-2 mb-4">
              <FileCheck className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-[#1B1D3A]">
                Documents pour la candidature EduMove
              </h3>
            </div>
            <ol className="space-y-2">
              {candidature.map((doc, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* After acceptance documents */}
          <div className="bg-white rounded-xl shadow-sm border-l-4 border-orange-500 p-6">
            <div className="flex items-center gap-2 mb-4">
              <FolderOpen className="w-5 h-5 text-orange-600" />
              <h3 className="font-bold text-[#1B1D3A]">
                Documents demand&eacute;s apr&egrave;s acceptation
              </h3>
            </div>
            <ol className="space-y-2">
              {apresAcceptation.map((doc, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Notes */}
        {notes && notes.length > 0 && (
          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <ul className="space-y-1">
              {notes.map((n, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span className="text-gray-400 mt-0.5">&#8226;</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
