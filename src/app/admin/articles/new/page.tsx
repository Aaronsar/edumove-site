import ArticleEditor from "@/components/admin/ArticleEditor";

export default function NewArticlePage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1B1D3A]">Nouvel article</h1>
        <p className="text-sm text-[#64748b] mt-1">
          Cr\u00e9ez un nouvel article avec l&apos;\u00e9diteur par blocs
        </p>
      </div>
      <ArticleEditor />
    </div>
  );
}
