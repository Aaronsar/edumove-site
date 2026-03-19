import type { ProgramDetail } from "@/data/program-details";

export default function KeyInfoBar({ detail }: { detail: ProgramDetail }) {
  const stats = [
    { icon: "⏱", value: detail.duration, label: "Durée" },
    { icon: "💰", value: detail.costPerYear + "/an", label: "Tarif annuel" },
    { icon: "🌍", value: detail.language, label: "Langue" },
    { icon: "📋", value: detail.admission, label: "Admission" },
    { icon: "📊", value: detail.averageMin, label: "Moyenne min." },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 grid grid-cols-2 md:grid-cols-5 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="text-center p-3">
            <span className="text-2xl mb-1 block">{s.icon}</span>
            <p className="text-sm font-bold text-[#1B1D3A]">{s.value}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
