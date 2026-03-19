"use client";

import { motion } from "framer-motion";

interface OverviewCardsProps {
  cards: Array<{ value: string; label: string }>;
}

export default function OverviewCards({ cards }: OverviewCardsProps) {
  return (
    <div className="-mt-8 relative z-10 max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md transition-shadow"
          >
            <div className="text-3xl font-bold text-[#1B1D3A]">
              {card.value}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">
              {card.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
