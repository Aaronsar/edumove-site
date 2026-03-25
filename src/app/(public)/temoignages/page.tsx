import type { Metadata } from "next";
import TestimonialsPage from "@/components/testimonials/TestimonialsPage";

export const metadata: Metadata = {
  alternates: { canonical: "/temoignages" },
  title: "Avis Edumove — Témoignages étudiants et parents | Edumove",
  description:
    "Avis Edumove : découvrez les témoignages d'étudiants et de parents accompagnés par Edumove pour leurs études de santé en Espagne et en Italie. Médecine, dentaire, kiné, pharmacie, vétérinaire.",
  openGraph: {
    title: "Avis Edumove — Témoignages étudiants et parents | Edumove",
    description:
      "Avis Edumove : découvrez les témoignages d'étudiants et de parents accompagnés par Edumove.",
  },
};

export default function TemoignagesPage() {
  return (
    <main>
      <TestimonialsPage />
    </main>
  );
}
