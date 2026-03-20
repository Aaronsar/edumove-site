"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Library,
  Search,
  ChevronDown,
  Home,
  GraduationCap,
  Building2,
  HelpCircle,
  Users,
  BookOpen,
  Stethoscope,
  Pill,
  Bone,
  Heart,
  Dog,
  FlaskConical,
} from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavGroup {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  basePath: string;
  children: (NavItem | NavSubGroup)[];
}

interface NavSubGroup {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  basePath: string;
  children: NavItem[];
}

const navItems: NavItem[] = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/articles", label: "Articles", icon: FileText },
];

const pagesConfig: NavGroup = {
  label: "Pages",
  icon: Home,
  basePath: "/admin/pages",
  children: [
    { href: "/admin/pages/accueil", label: "Accueil", icon: Home },
    { href: "/admin/pages/a-propos", label: "À propos", icon: Users },
    { href: "/admin/pages/faq", label: "Questions fréquentes", icon: HelpCircle },
    {
      label: "Formations",
      icon: GraduationCap,
      basePath: "/admin/pages/formations",
      children: [
        { href: "/admin/pages/formations/medecine", label: "Médecine", icon: Stethoscope },
        { href: "/admin/pages/formations/dentaire", label: "Dentaire", icon: Bone },
        { href: "/admin/pages/formations/kinesitherapie", label: "Kinésithérapie", icon: Heart },
        { href: "/admin/pages/formations/pharmacie", label: "Pharmacie", icon: Pill },
        { href: "/admin/pages/formations/veterinaire", label: "Vétérinaire", icon: Dog },
        { href: "/admin/pages/formations/prepa-dentaire", label: "Prépa Dentaire", icon: FlaskConical },
      ],
    },
    {
      label: "Universités",
      icon: Building2,
      basePath: "/admin/pages/universites",
      children: [
        { href: "/admin/pages/universites/universidad-europea", label: "Universidad Europea", icon: Building2 },
        { href: "/admin/pages/universites/ucjc", label: "UCJC", icon: Building2 },
        { href: "/admin/pages/universites/link-campus", label: "Link Campus", icon: Building2 },
      ],
    },
    {
      label: "Guides",
      icon: BookOpen,
      basePath: "/admin/pages/guides",
      children: [
        { href: "/admin/pages/guides/presenter-sa-candidature", label: "Présenter sa candidature", icon: BookOpen },
        { href: "/admin/pages/guides/test-pe-universidad-europea", label: "Test PE – UE", icon: BookOpen },
        { href: "/admin/pages/guides/test-admission-link-campus", label: "Test admission – Link", icon: BookOpen },
      ],
    },
  ],
};

function isSubGroup(item: NavItem | NavSubGroup): item is NavSubGroup {
  return "children" in item;
}

export default function AdminSidebar() {
  const pathname = usePathname();
  const [pagesOpen, setPagesOpen] = useState(pathname.startsWith("/admin/pages"));
  const [openSubGroups, setOpenSubGroups] = useState<Record<string, boolean>>({});

  function isActive(href: string) {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  }

  function toggleSubGroup(key: string) {
    setOpenSubGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const isPagesActive = pathname.startsWith("/admin/pages");

  return (
    <aside className="w-64 bg-[#1B1D3A] min-h-screen flex flex-col shrink-0">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/10">
        <Link href="/admin" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#EC680A] flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <span className="text-white font-bold text-lg">Edumove</span>
          <span className="text-[10px] font-medium text-white/40 bg-white/10 px-2 py-0.5 rounded-full ml-auto">
            CMS
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {/* Main nav items */}
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active
                  ? "bg-[#615CA5] text-white"
                  : "text-white/50 hover:text-white/80 hover:bg-white/5"
              }`}
            >
              <item.icon className="w-4.5 h-4.5" />
              {item.label}
            </Link>
          );
        })}

        {/* Pages group */}
        <div>
          <button
            onClick={() => setPagesOpen(!pagesOpen)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              isPagesActive
                ? "bg-[#615CA5] text-white"
                : "text-white/50 hover:text-white/80 hover:bg-white/5"
            }`}
          >
            <Home className="w-4.5 h-4.5" />
            Pages
            <ChevronDown
              className={`w-3.5 h-3.5 ml-auto transition-transform ${pagesOpen ? "rotate-180" : ""}`}
            />
          </button>

          {pagesOpen && (
            <div className="mt-1 ml-3 pl-3 border-l border-white/10 space-y-0.5">
              {pagesConfig.children.map((item) => {
                if (isSubGroup(item)) {
                  const subOpen = openSubGroups[item.basePath] ?? pathname.startsWith(item.basePath);
                  const subActive = pathname.startsWith(item.basePath);
                  return (
                    <div key={item.basePath}>
                      <button
                        onClick={() => toggleSubGroup(item.basePath)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                          subActive
                            ? "bg-white/10 text-white"
                            : "text-white/40 hover:text-white/70 hover:bg-white/5"
                        }`}
                      >
                        <item.icon className="w-3.5 h-3.5" />
                        {item.label}
                        <ChevronDown
                          className={`w-3 h-3 ml-auto transition-transform ${subOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {subOpen && (
                        <div className="ml-3 pl-2 border-l border-white/5 space-y-0.5 mt-0.5">
                          {item.children.map((sub) => {
                            const active = isActive(sub.href);
                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[11px] font-medium transition-all ${
                                  active
                                    ? "bg-white/10 text-white"
                                    : "text-white/35 hover:text-white/60 hover:bg-white/5"
                                }`}
                              >
                                <sub.icon className="w-3 h-3" />
                                {sub.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                // Simple nav item
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      active
                        ? "bg-white/10 text-white"
                        : "text-white/40 hover:text-white/70 hover:bg-white/5"
                    }`}
                  >
                    <item.icon className="w-3.5 h-3.5" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Separator + GEDS */}
        <div className="pt-2 mt-2 border-t border-white/10">
          <Link
            href="/admin/import"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              isActive("/admin/import")
                ? "bg-[#615CA5] text-white"
                : "text-white/50 hover:text-white/80 hover:bg-white/5"
            }`}
          >
            <Library className="w-4.5 h-4.5" />
            Bibliothèque GEDS
          </Link>
        </div>
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-white/10">
        <Link
          href="/"
          target="_blank"
          className="text-xs text-white/30 hover:text-white/50 transition-colors flex items-center gap-1.5"
        >
          <Search className="w-3 h-3" />
          Voir le site
        </Link>
      </div>
    </aside>
  );
}
