"use client";

import { motion } from "framer-motion";

interface OverviewCardsProps {
  cards: Array<{ value: string; label: string }>;
}

export default function OverviewCards({ cards }: OverviewCardsProps) {
  return (
    <div className="-mt-8 relative z-10 max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 [&>*]:min-w-0">
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl border-2 border-[#615CA5]/15 shadow-sm p-6 text-center hover:border-[#EC680A]/40 hover:shadow-md transition-all"
          >
            <div className="text-2xl md:text-3xl font-bold text-[#615CA5]">
              {card.value}
            </div>
            <div className="text-xs text-[#334155] uppercase tracking-widest mt-1 font-medium">
              {card.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
