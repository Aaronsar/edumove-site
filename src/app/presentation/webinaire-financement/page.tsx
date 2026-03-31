import type { Metadata } from "next";
import WebinarPresentation from "@/components/presentation/WebinarPresentation";

export const metadata: Metadata = {
  title: "Présentation — Webinaire Financement Santé | Edumove",
  robots: { index: false, follow: false },
};

export default function PresentationPage() {
  return <WebinarPresentation />;
}
