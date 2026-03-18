"use client";

import { CalendarDays, AlertTriangle } from "lucide-react";

interface Session {
  label: string;
  inscription: string;
  tests: string;
  resultats: string;
  isPast: boolean;
  isNext: boolean;
}

const medecineSessions: Session[] = [
  {
    label: "1\u00e8re session",
    inscription: "13/01/2026",
    tests: "21/01/2026",
    resultats: "28/01/2026",
    isPast: true,
    isNext: false,
  },
  {
    label: "2\u00e8me session",
    inscription: "17/02/2026",
    tests: "24/02/2026",
    resultats: "03/03/2026",
    isPast: true,
    isNext: false,
  },
  {
    label: "3\u00e8me session",
    inscription: "17/04/2026",
    tests: "22/04/2026",
    resultats: "29/04/2026",
    isPast: false,
    isNext: true,
  },
  {
    label: "4\u00e8me session",
    inscription: "18/05/2026",
    tests: "21/05/2026",
    resultats: "28/05/2026",
    isPast: false,
    isNext: false,
  },
  {
    label: "5\u00e8me session",
    inscription: "06/07/2026",
    tests: "08/07/2026",
    resultats: "15/07/2026",
    isPast: false,
    isNext: false,
  },
];

const autresSessions: Session[] = [
  {
    label: "1\u00e8re session",
    inscription: "09/01/2026",
    tests: "14/01/2026",
    resultats: "16/01/2026",
    isPast: true,
    isNext: false,
  },
  {
    label: "2\u00e8me session",
    inscription: "13/02/2026",
    tests: "18/02/2026",
    resultats: "20/02/2026",
    isPast: true,
    isNext: false,
  },
  {
    label: "3\u00e8me session",
    inscription: "13/03/2026",
    tests: "18/03/2026",
    resultats: "20/03/2026",
    isPast: true,
    isNext: false,
  },
  {
    label: "4\u00e8me session",
    inscription: "16/04/2026",
    tests: "21/04/2026",
    resultats: "23/04/2026",
    isPast: false,
    isNext: true,
  },
  {
    label: "5\u00e8me session",
    inscription: "08/05/2026",
    tests: "12/05/2026",
    resultats: "14/05/2026",
    isPast: false,
    isNext: false,
  },
  {
    label: "6\u00e8me session",
    inscription: "08/06/2026",
    tests: "11/06/2026",
    resultats: "13/06/2026",
    isPast: false,
    isNext: false,
  },
  {
    label: "7\u00e8me session",
    inscription: "15/07/2026",
    tests: "21/07/2026",
    resultats: "23/07/2026",
    isPast: false,
    isNext: false,
  },
];

function SessionTable({
  title,
  sessions,
}: {
  title: string;
  sessions: Session[];
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 bg-[#1B1D3A] flex items-center gap-2">
        <CalendarDays className="w-4 h-4 text-white" />
        <h3 className="font-semibold text-white text-sm">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left px-4 py-2 font-semibold text-[#1B1D3A]">
                Session
              </th>
              <th className="text-left px-4 py-2 font-semibold text-[#1B1D3A]">
                Inscription
              </th>
              <th className="text-left px-4 py-2 font-semibold text-[#1B1D3A]">
                Tests
              </th>
              <th className="text-left px-4 py-2 font-semibold text-[#1B1D3A]">
                R&eacute;sultats
              </th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((s) => (
              <tr
                key={s.label}
                className={`border-t border-gray-200 ${
                  s.isPast
                    ? "bg-gray-100 text-gray-400 line-through"
                    : s.isNext
                    ? "bg-orange-50"
                    : ""
                }`}
              >
                <td className="px-4 py-2.5 font-medium no-underline">
                  <span className={s.isPast ? "line-through" : ""}>
                    {s.label}
                  </span>
                  {s.isNext && (
                    <span className="ml-2 inline-block bg-[#EC680A] text-white text-[10px] font-bold px-1.5 py-0.5 rounded no-underline">
                      PROCHAINE
                    </span>
                  )}
                </td>
                <td className="px-4 py-2.5">{s.inscription}</td>
                <td className="px-4 py-2.5">{s.tests}</td>
                <td className="px-4 py-2.5">{s.resultats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function SessionsTable() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold italic text-[#1B1D3A] mb-6">
          Calendrier des sessions 2026
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <SessionTable
            title="Sessions M\u00e9decine"
            sessions={medecineSessions}
          />
          <SessionTable
            title="Sessions Dentaire / Kin\u00e9 / V\u00e9to"
            sessions={autresSessions}
          />
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            Sessions valables pour les campus de Madrid et des Canaries. Plus on
            attend, moins il y a de places disponibles.
          </p>
        </div>
      </div>
    </section>
  );
}
