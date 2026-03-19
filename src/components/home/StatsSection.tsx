"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "3", label: "Universités partenaires" },
  { value: "+500", label: "Étudiants accompagnés" },
  { value: "5", label: "Filières de santé" },
  { value: "2", label: "Pays européens" },
  { value: "100%", label: "Financement possible" },
  { value: "0€", label: "À avancer" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <h2 className="text-2xl md:text-3xl font-bold leading-tight" style={{ color: "#615CA5" }}>
              En quelques
              <br />
              chiffres.
            </h2>
          </motion.div>

          {/* Stats cards */}
          <div className="flex-1 grid grid-cols-3 md:grid-cols-6 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border-2 border-[#615ca5]/15 rounded-xl p-4 text-center hover:border-[#ec680a]/40 hover:shadow-md transition-all"
              >
                <p className="text-xl md:text-2xl font-bold text-[#615ca5]">{s.value}</p>
                <p className="text-[10px] md:text-xs text-[#334155] mt-1 leading-tight">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
