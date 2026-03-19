import type { StudentLife } from "@/data/program-details";
import { MapPin, Plane, CheckCircle, Users } from "lucide-react";

export default function StudentLifeSection({ life }: { life: StudentLife }) {
  return (
    <section className="bg-[#F5F5F5] py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold italic text-[#1B1D3A] mb-8 flex items-center gap-2">
          <MapPin className="w-7 h-7 text-[#EC680A]" />
          Vie étudiante à {life.city}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {life.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#EC680A] shrink-0 mt-0.5" />
                <p className="text-[#334155] text-sm">{h}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="font-bold text-[#1B1D3A] mb-2 flex items-center gap-2">
                <Plane className="w-4 h-4 text-[#EC680A]" />
                Accès aérien
              </p>
              <p className="text-sm text-[#334155] mb-1">{life.airport}</p>
              <p className="text-sm text-[#EC680A] font-semibold">{life.flightTime}</p>
            </div>
            <div className="bg-[#1B1D3A] rounded-xl p-6 text-white">
              <p className="font-bold mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#EC680A]" />
                Accompagnement EduMove
              </p>
              <p className="text-sm text-white/80">
                EduMove vous accompagne pour le logement, les démarches administratives,
                la traduction des cours et la vie étudiante sur place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
