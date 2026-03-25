"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  Lightbulb,
  ArrowRight,
  Phone,
  ArrowUpRight,
  FileText,
  GraduationCap,
  Sparkles,
  Globe,
  Brain,
  PenLine,
  MessageCircle,
  ClipboardList,
  Heart,
  Star,
  Zap,
  Shield,
  Target,
  Award,
  BookOpen,
  Users,
  MapPin,
  Mail,
  Calendar,
  CheckCircle,
  Stethoscope,
  Pill,
  Dog,
  Building2,
  HelpCircle,
  Eye,
} from "lucide-react";

const heroIconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  FileText, GraduationCap, Sparkles, Globe, Brain, PenLine, MessageCircle,
  ClipboardList, Heart, Star, Zap, Shield, Target, Award, BookOpen,
  Users, MapPin, Phone, Mail, Calendar, CheckCircle, Stethoscope,
  Pill, Dog, Building2, HelpCircle, Eye,
};
import ContactButton from "@/components/shared/ContactButton";
import type { Article } from "@/data/articles";
import { getRelatedArticles, getArticleHref } from "@/data/articles";

/* ---------- Sub-components ---------- */

export function SectionTitle({ id, icon, children }: { id: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-xl md:text-2xl font-bold text-[#1B1D3A] mb-6 mt-14 scroll-mt-24 flex items-center gap-3"
    >
      {icon}
      {children}
    </h2>
  );
}

export function Callout({ children, variant = "info" }: { children: React.ReactNode; variant?: "info" | "warning" }) {
  const isWarning = variant === "warning";
  return (
    <div
      className={`rounded-xl border-l-4 p-5 flex items-start gap-3 my-6 ${
        isWarning
          ? "bg-[#EC680A]/5 border-[#EC680A]"
          : "bg-[#615CA5]/5 border-[#615CA5]"
      }`}
    >
      <Lightbulb className={`w-5 h-5 shrink-0 mt-0.5 ${isWarning ? "text-[#EC680A]" : "text-[#615CA5]"}`} />
      <div className="text-sm text-[#334155] leading-relaxed">{children}</div>
    </div>
  );
}

function SommaireBlock({ sommaire }: { sommaire: { id: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden mb-10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm font-semibold text-[#1B1D3A]"
      >
        Sommaire
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && (
        <nav className="mt-2 bg-white border border-gray-200 rounded-xl p-4 space-y-2">
          {sommaire.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block text-sm text-[#64748b] hover:text-[#EC680A] transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}

function SommaireSidebar({ sommaire }: { sommaire: { id: string; label: string }[] }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <p className="text-xs uppercase tracking-widest text-[#EC680A] font-semibold mb-4">Sommaire</p>
        <nav className="space-y-2.5 border-l-2 border-gray-200 pl-4">
          {sommaire.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block text-sm text-[#64748b] hover:text-[#EC680A] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

function RelatedArticlesBlock({ slug }: { slug: string }) {
  const related = getRelatedArticles(slug, 2);
  if (related.length === 0) return null;

  return (
    <div className="mt-16 pt-10 border-t border-gray-200">
      <p className="text-xs uppercase tracking-widest text-[#EC680A] font-semibold mb-6">
        Articles similaires
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {related.map((a) => (
          <Link
            key={a.slug}
            href={getArticleHref(a)}
            className="group flex flex-col justify-between bg-[#fafbff] border border-gray-200/80 rounded-xl p-5 hover:border-[#EC680A]/30 hover:shadow-md transition-all"
          >
            <div>
              <span className={`text-[10px] uppercase tracking-wider font-semibold text-white px-2.5 py-1 rounded-full ${a.tagColor}`}>
                {a.tag}
              </span>
              <h4 className="font-bold text-[#1B1D3A] text-sm mt-3 mb-2 group-hover:text-[#EC680A] transition-colors line-clamp-2">
                {a.title}
              </h4>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#94a3b8] mt-3">
              <span>{a.readTime}</span>
              <ArrowUpRight size={12} className="group-hover:text-[#EC680A] transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ArticleCTA() {
  return (
    <div className="mt-16 rounded-2xl bg-[#1B1D3A] p-8 md:p-10 text-center">
      <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#ffffff" }}>
        Envie d&apos;en savoir plus&nbsp;?
      </h3>
      <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
        On analyse votre dossier gratuitement et on vous dit ce qui est faisable pour vous.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="https://candidature.edumove.fr"
          className="group inline-flex items-center gap-2 bg-[#EC680A] hover:bg-[#D45E09] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-[#EC680A]/25"
        >
          Déposer ma candidature
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <ContactButton className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white text-sm font-medium px-6 py-3 rounded-full transition-all">
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Être recontacté
          </span>
        </ContactButton>
      </div>
    </div>
  );
}

/* ---------- Main Layout ---------- */

interface ArticleLayoutProps {
  article: Article;
  sommaire: { id: string; label: string }[];
  children: React.ReactNode;
}

export default function ArticleLayout({ article, sommaire, children }: ArticleLayoutProps) {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[#1B1D3A] py-16 md:py-24 px-6 overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#615CA5]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EC680A]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <nav className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
            <Link href="/" className="hover:text-white/70 transition-colors">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span style={{ color: "rgba(255,255,255,0.7)" }}>{article.tag}</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className={`inline-block text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${article.tagColor}`}>
              {article.tag}
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border"
              style={{ color: "rgba(255,255,255,0.6)", borderColor: "rgba(255,255,255,0.15)" }}
            >
              <Clock className="w-3.5 h-3.5" />
              {article.readTime} de lecture
            </span>
          </div>

          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] mb-6"
            style={{ color: "#ffffff" }}
          >
            {article.title}
          </h1>

          <p
            className="text-lg max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            {article.excerpt}
          </p>

          {/* Hero Pills / Keyword badges */}
          {article.heroPills && article.heroPills.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-8">
              {article.heroPills.map((pill, i) => {
                const IconComp = heroIconMap[pill.icon] || Star;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm px-3.5 py-2 rounded-lg"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    <IconComp className="w-4 h-4" style={{ color: "#EC680A" }} />
                    {pill.label}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-12">
            {/* Content */}
            <div>
              <SommaireBlock sommaire={sommaire} />
              {children}
              <RelatedArticlesBlock slug={article.slug} />
              <ArticleCTA />
            </div>

            {/* Sidebar */}
            <SommaireSidebar sommaire={sommaire} />
          </div>
        </div>
      </section>

      {/* Article + BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.metaDescription ?? article.excerpt,
            datePublished: article.dateISO,
            author: {
              "@type": "Organization",
              name: "Edumove",
              url: "https://www.edumove.fr",
            },
            publisher: {
              "@type": "Organization",
              name: "Edumove",
              logo: {
                "@type": "ImageObject",
                url: "https://www.edumove.fr/edumove-logo-orange.svg",
              },
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.edumove.fr/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.edumove.fr/blog" },
              { "@type": "ListItem", position: 3, name: article.title },
            ],
          }),
        }}
      />
    </div>
  );
}
