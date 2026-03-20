import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogContent from "@/components/blog/BlogContent";

export const metadata: Metadata = {
  title: "Blog — Articles et guides | Edumove",
  description:
    "Retrouvez tous nos articles, guides pratiques et témoignages pour réussir vos études de santé en Europe.",
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogContent />
    </main>
  );
}
