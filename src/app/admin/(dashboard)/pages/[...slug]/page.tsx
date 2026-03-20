import { notFound } from "next/navigation";
import PageEditor from "@/components/admin/PageEditor";

/* ---------- Page registry (maps slug to public URL) ---------- */

const publicUrls: Record<string, string> = {
  accueil: "/",
  "a-propos": "/a-propos",
  faq: "/questions-frequentes",
  "formations/medecine": "/formations/medecine",
  "formations/dentaire": "/formations/dentaire",
  "formations/kinesitherapie": "/formations/kinesitherapie",
  "formations/pharmacie": "/formations/pharmacie",
  "formations/veterinaire": "/formations/veterinaire",
  "formations/prepa-dentaire": "/formations/prepa-dentaire",
  "universites/universidad-europea": "/universites/universidad-europea",
  "universites/ucjc": "/universites/ucjc",
  "universites/link-campus": "/universites/link-campus",
  "guides/presenter-sa-candidature": "/guides/presenter-sa-candidature",
  "guides/test-pe-universidad-europea": "/guides/reussir-test-pe-universidad-europea",
  "guides/test-admission-link-campus": "/guides/reussir-test-admission-link-campus",
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
