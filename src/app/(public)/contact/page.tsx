import type { Metadata } from "next";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contactez Edumove — Etudes de sante en Europe | Edumove",
  description:
    "Contactez Edumove pour vos etudes de sante en Europe. Appelez-nous au +33 1 89 74 42 57 ou remplissez le formulaire. Un conseiller vous rappelle sous 24h.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contactez Edumove — Etudes de sante en Europe | Edumove",
    description:
      "Contactez Edumove pour vos etudes de sante en Europe. Un conseiller vous rappelle sous 24h.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactPageContent />
    </main>
  );
}
