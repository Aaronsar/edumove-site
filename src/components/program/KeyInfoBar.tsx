import { Clock, Euro, Globe, FileText, BarChart2 } from "lucide-react";
import type { ProgramDetail } from "@/data/program-details";

export default function KeyInfoBar({ detail }: { detail: ProgramDetail }) {
  const stats: { value: string; label: string; icon: typeof Clock }[] = [
    { value: detail.duration, label: "Durée", icon: Clock },
    { value: detail.costPerYear + "/an", label: "Tarif annuel", icon: Euro },
    { value: detail.language, label: "Langue", icon: Globe },
    { value: detail.admission, label: "Admission", icon: FileText },
  ];

  if (detail.averageMin && detail.averageMin !== "Aucune") {
    stats.push({ value: detail.averageMin, label: "Moyenne min.", icon: BarChart2 });
  }

  const colClass = stats.length === 5 ? "md:grid-cols-5" : "md:grid-cols-4";

  return (
    <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-20">
      <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-4 grid grid-cols-2 ${colClass} gap-4`}>
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="text-center p-3">
              <Icon className="w-6 h-6 mx-auto mb-2 text-[#EC680A]" />
              <p className="text-sm font-bold text-[#1B1D3A]">{s.value}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
