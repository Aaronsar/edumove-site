import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import ArticleEditor from "@/components/admin/ArticleEditor";
import type { ArticleEditorState } from "@/lib/editor/useArticleEditor";

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: article, error } = await supabase
    .from("edumove_articles")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error || !article) notFound();

  const initialData: Partial<ArticleEditorState> = {
    title: article.title,
    slug: article.slug,
    metaTitle: article.meta_title ?? "",
    metaDescription: article.meta_description ?? "",
    excerpt: article.excerpt ?? "",
    tag: article.tag as ArticleEditorState["tag"],
    tagColor: article.tag_color,
    isGuide: article.is_guide,
    focusKeyword: article.focus_keyword ?? "",
    heroPills: (article.hero_pills as ArticleEditorState["heroPills"]) ?? [],
    sections: article.sections as ArticleEditorState["sections"],
    relatedSlugs: article.related_slugs ?? [],
    relatedFormations: article.related_formations ?? [],
    relatedUniversities: article.related_universities ?? [],
    status: article.status as ArticleEditorState["status"],
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1B1D3A]">Modifier l&apos;article</h1>
        <p className="text-sm text-[#64748b] mt-1">
          {article.title}
        </p>
      </div>
      <ArticleEditor articleId={article.id} initialData={initialData} />
    </div>
  );
}
