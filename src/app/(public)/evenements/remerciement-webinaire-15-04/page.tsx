import type { Metadata } from "next";
import WebinarThankYouPage from "@/components/evenements/WebinarThankYouPage";

export const metadata: Metadata = {
  title: "Inscription confirmée — Webinaire Financement | Edumove",
  description:
    "Votre inscription au webinaire est confirmée. Découvrez nos universités partenaires et nos formations en attendant le webinaire.",
  robots: { index: false, follow: true },
};

export default function RemerciementWebinairePage() {
  return (
    <main>
      <WebinarThankYouPage />
    </main>
  );
}
