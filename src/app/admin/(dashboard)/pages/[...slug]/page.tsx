import { notFound } from "next/navigation";
import PageEditor from "@/components/admin/PageEditor";

/* ---------- Page registry (maps slug to public URL) ---------- */

const publicUrls: Record<string, string> = {
  // Pages principales
  accueil: "/",
  "a-propos": "/a-propos",
  faq: "/questions-frequentes",
  financement: "/financement",
  contact: "/contact",
  temoignages: "/temoignages",
  "mentions-legales": "/mentions-legales",
  "politique-de-confidentialite": "/politique-de-confidentialite",

  // Formations — vues d'ensemble
  "formations/medecine": "/formations/medecine",
  "formations/dentaire": "/formations/dentaire",
  "formations/kinesitherapie": "/formations/kinesitherapie",
  "formations/pharmacie": "/formations/pharmacie",
  "formations/veterinaire": "/formations/veterinaire",
  "formations/prepa-dentaire": "/formations/prepa-dentaire",

  // Médecine — par fac
  "formations/medecine/ue-madrid": "/formations/medecine/ue-madrid",
  "formations/medecine/ue-canaries": "/formations/medecine/ue-canaries",
  "formations/medecine/link-rome": "/formations/medecine/link-rome",

  // Dentaire — par fac
  "formations/dentaire/ue-madrid": "/formations/dentaire/ue-madrid",
  "formations/dentaire/ue-malaga": "/formations/dentaire/ue-malaga",
  "formations/dentaire/ue-valence": "/formations/dentaire/ue-valence",
  "formations/dentaire/ue-alicante": "/formations/dentaire/ue-alicante",
  "formations/dentaire/ue-canaries": "/formations/dentaire/ue-canaries",
  "formations/dentaire/ucjc-madrid": "/formations/dentaire/ucjc-madrid",
  "formations/dentaire/link-rome": "/formations/dentaire/link-rome",

  // Kinésithérapie — par fac
  "formations/kinesitherapie/ue-madrid": "/formations/kinesitherapie/ue-madrid",
  "formations/kinesitherapie/ue-malaga": "/formations/kinesitherapie/ue-malaga",
  "formations/kinesitherapie/ue-valence": "/formations/kinesitherapie/ue-valence",
  "formations/kinesitherapie/ue-alicante": "/formations/kinesitherapie/ue-alicante",
  "formations/kinesitherapie/ue-canaries": "/formations/kinesitherapie/ue-canaries",
  "formations/kinesitherapie/ucjc-madrid": "/formations/kinesitherapie/ucjc-madrid",
  "formations/kinesitherapie/link-rome": "/formations/kinesitherapie/link-rome",

  // Pharmacie — par fac
  "formations/pharmacie/ue-madrid": "/formations/pharmacie/ue-madrid",
  "formations/pharmacie/ucjc-madrid": "/formations/pharmacie/ucjc-madrid",
  "formations/pharmacie/link-rome": "/formations/pharmacie/link-rome",

  // Vétérinaire — par fac
  "formations/veterinaire/ue-madrid": "/formations/veterinaire/ue-madrid",

  // Pays — pages par filière × pays
  "formations/medecine/espagne": "/formations/medecine/espagne",
  "formations/medecine/italie": "/formations/medecine/italie",
  "formations/dentaire/espagne": "/formations/dentaire/espagne",
  "formations/dentaire/italie": "/formations/dentaire/italie",
  "formations/kinesitherapie/espagne": "/formations/kinesitherapie/espagne",
  "formations/kinesitherapie/italie": "/formations/kinesitherapie/italie",
  "formations/pharmacie/espagne": "/formations/pharmacie/espagne",
  "formations/pharmacie/italie": "/formations/pharmacie/italie",
  "formations/veterinaire/espagne": "/formations/veterinaire/espagne",

  // Prépa Dentaire — par fac
  "formations/prepa-dentaire/ue-alicante": "/formations/prepa-dentaire/ue-alicante",

  // Universités
  "universites/universidad-europea": "/universites/universidad-europea",
  "universites/ucjc": "/universites/ucjc",
  "universites/link-campus": "/universites/link-campus",

  // Guides
  "guides/presenter-sa-candidature": "/guides/presenter-sa-candidature",
  "guides/test-pe-universidad-europea": "/guides/reussir-test-pe-universidad-europea",
  "guides/test-admission-link-campus": "/guides/reussir-test-admission-link-campus",

  // Vie étudiante
  "vie-etudiante/madrid": "/vie-etudiante/madrid",
  "vie-etudiante/rome": "/vie-etudiante/rome",
  "vie-etudiante/valence": "/vie-etudiante/valence",
  "vie-etudiante/malaga": "/vie-etudiante/malaga",
};

/* ---------- Page ---------- */

export default async function PageEditorPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const key = slug.join("/");
  const publicUrl = publicUrls[key];

  if (!publicUrl) notFound();

  // Fetch page data from Supabase
  const { createClient } = await import("@/lib/supabase/server");
  const supabase = await createClient();

  const { data: page } = await supabase
    .from("edumove_pages")
    .select("*")
    .eq("page_slug", key)
    .single();

  if (!page) notFound();

  return (
    <div>
      <PageEditor page={page} publicUrl={publicUrl} />
    </div>
  );
}
