import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Home,
  Users,
  HelpCircle,
  GraduationCap,
  Building2,
  BookOpen,
  ExternalLink,
  Pencil,
} from "lucide-react";

/* ---------- Page registry ---------- */

interface PageInfo {
  title: string;
  description: string;
  publicUrl: string;
  icon: React.ComponentType<{ className?: string }>;
  status: "live" | "coming_soon";
}

const pagesRegistry: Record<string, PageInfo> = {
  accueil: {
    title: "Page d'accueil",
    description: "Hero, formations, universités, témoignages, CTA",
    publicUrl: "/",
    icon: Home,
    status: "live",
  },
  "a-propos": {
    title: "À propos",
    description: "Présentation d'Edumove, équipe, valeurs",
    publicUrl: "/a-propos",
    icon: Users,
    status: "live",
  },
  faq: {
    title: "Questions fréquentes",
    description: "FAQ avec questions/réponses",
    publicUrl: "/questions-frequentes",
    icon: HelpCircle,
    status: "live",
  },
  "formations/medecine": {
    title: "Médecine",
    description: "Page filière Médecine — programmes, tarifs, universités",
    publicUrl: "/formations/medecine",
    icon: GraduationCap,
    status: "live",
  },
  "formations/dentaire": {
    title: "Dentaire",
    description: "Page filière Dentaire / Odontologie",
    publicUrl: "/formations/dentaire",
    icon: GraduationCap,
    status: "live",
  },
  "formations/kinesitherapie": {
    title: "Kinésithérapie",
    description: "Page filière Kinésithérapie / Physiothérapie",
    publicUrl: "/formations/kinesitherapie",
    icon: GraduationCap,
    status: "live",
  },
  "formations/pharmacie": {
    title: "Pharmacie",
    description: "Page filière Pharmacie",
    publicUrl: "/formations/pharmacie",
    icon: GraduationCap,
    status: "live",
  },
  "formations/veterinaire": {
    title: "Vétérinaire",
    description: "Page filière Vétérinaire",
    publicUrl: "/formations/veterinaire",
    icon: GraduationCap,
    status: "live",
  },
  "formations/prepa-dentaire": {
    title: "Prépa Dentaire",
    description: "Année préparatoire Dentaire",
    publicUrl: "/formations/prepa-dentaire",
    icon: GraduationCap,
    status: "live",
  },
  "universites/universidad-europea": {
    title: "Universidad Europea",
    description: "Fiche université — Madrid, programmes, tarifs, admission",
    publicUrl: "/universites/universidad-europea",
    icon: Building2,
    status: "live",
  },
  "universites/ucjc": {
    title: "UCJC",
    description: "Fiche université — UCJC Madrid, programmes, tarifs",
    publicUrl: "/universites/ucjc",
    icon: Building2,
    status: "live",
  },
  "universites/link-campus": {
    title: "Link Campus",
    description: "Fiche université — Link Campus Rome, programmes, tarifs",
    publicUrl: "/universites/link-campus",
    icon: Building2,
    status: "live",
  },
  "guides/presenter-sa-candidature": {
    title: "Présenter sa candidature",
    description: "Guide complet pour candidater",
    publicUrl: "/guides/presenter-sa-candidature",
    icon: BookOpen,
    status: "live",
  },
  "guides/test-pe-universidad-europea": {
    title: "Test PE — Universidad Europea",
    description: "Guide pour réussir le test d'admission PE",
    publicUrl: "/guides/reussir-test-pe-universidad-europea",
    icon: BookOpen,
    status: "live",
  },
  "guides/test-admission-link-campus": {
    title: "Test admission — Link Campus",
    description: "Guide pour réussir le test d'admission Link",
    publicUrl: "/guides/reussir-test-admission-link-campus",
    icon: BookOpen,
    status: "live",
  },
};

/* ---------- Page ---------- */

export default async function PageEditorPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const key = slug.join("/");
  const page = pagesRegistry[key];

  if (!page) notFound();

  const Icon = page.icon;

  return (
    <div>
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#615CA5]/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-[#615CA5]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1B1D3A]">{page.title}</h1>
            <p className="text-sm text-[#64748b] mt-0.5">{page.description}</p>
          </div>
        </div>
        <a
          href={`https://edumove-site.vercel.app${page.publicUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-[#615CA5] hover:text-[#4e4a8a] font-medium bg-[#615CA5]/5 hover:bg-[#615CA5]/10 px-4 py-2 rounded-xl transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Voir la page
        </a>
      </div>

      {/* Coming soon editor */}
      <div className="bg-white rounded-2xl border border-gray-200/80 p-12 text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#EC680A]/10 flex items-center justify-center mx-auto mb-4">
          <Pencil className="w-8 h-8 text-[#EC680A]" />
        </div>
        <h2 className="text-lg font-bold text-[#1B1D3A] mb-2">
          Éditeur de page
        </h2>
        <p className="text-sm text-[#64748b] max-w-md mx-auto mb-6">
          L'éditeur visuel par blocs pour cette page arrive bientôt.
          En attendant, vous pouvez voir la page en ligne.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a
            href={`https://edumove-site.vercel.app${page.publicUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1B1D3A] hover:bg-[#2a2d52] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Voir la page en ligne
          </a>
          <Link
            href="/admin"
            className="text-sm text-[#64748b] hover:text-[#334155] font-medium px-5 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Retour au dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
