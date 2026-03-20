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
  MapPin,
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
  children: (NavItem | NavGroup)[];
}

type NavEntry = NavItem | NavGroup;

function isGroup(entry: NavEntry): entry is NavGroup {
  return "children" in entry;
}

const topNav: NavItem[] = [
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
        {
          label: "Médecine",
          icon: Stethoscope,
          basePath: "/admin/pages/formations/medecine",
          children: [
            { href: "/admin/pages/formations/medecine", label: "Vue d'ensemble", icon: Stethoscope },
            { href: "/admin/pages/formations/medecine/ue-madrid", label: "UE Madrid", icon: MapPin },
            { href: "/admin/pages/formations/medecine/ue-canaries", label: "UE Canaries", icon: MapPin },
            { href: "/admin/pages/formations/medecine/link-rome", label: "LINK Rome", icon: MapPin },
          ],
        },
        {
          label: "Dentaire",
          icon: Bone,
          basePath: "/admin/pages/formations/dentaire",
          children: [
            { href: "/admin/pages/formations/dentaire", label: "Vue d'ensemble", icon: Bone },
            { href: "/admin/pages/formations/dentaire/ue-madrid", label: "UE Madrid", icon: MapPin },
            { href: "/admin/pages/formations/dentaire/ue-malaga", label: "UE Málaga", icon: MapPin },
            { href: "/admin/pages/formations/dentaire/ue-valence", label: "UE Valence", icon: MapPin },
            { href: "/admin/pages/formations/dentaire/ue-alicante", label: "UE Alicante", icon: MapPin },
            { href: "/admin/pages/formations/dentaire/ue-canaries", label: "UE Canaries", icon: MapPin },
            { href: "/admin/pages/formations/dentaire/ucjc-madrid", label: "UCJC Madrid", icon: MapPin },
            { href: "/admin/pages/formations/dentaire/link-rome", label: "LINK Rome", icon: MapPin },
          ],
        },
        {
          label: "Kinésithérapie",
          icon: Heart,
          basePath: "/admin/pages/formations/kinesitherapie",
          children: [
            { href: "/admin/pages/formations/kinesitherapie", label: "Vue d'ensemble", icon: Heart },
            { href: "/admin/pages/formations/kinesitherapie/ue-madrid", label: "UE Madrid (FR)", icon: MapPin },
            { href: "/admin/pages/formations/kinesitherapie/ue-malaga", label: "UE Málaga", icon: MapPin },
            { href: "/admin/pages/formations/kinesitherapie/ue-valence", label: "UE Valence", icon: MapPin },
            { href: "/admin/pages/formations/kinesitherapie/ue-alicante", label: "UE Alicante", icon: MapPin },
            { href: "/admin/pages/formations/kinesitherapie/ue-canaries", label: "UE Canaries", icon: MapPin },
            { href: "/admin/pages/formations/kinesitherapie/ucjc-madrid", label: "UCJC Madrid", icon: MapPin },
            { href: "/admin/pages/formations/kinesitherapie/link-rome", label: "LINK Rome", icon: MapPin },
          ],
        },
        {
          label: "Pharmacie",
          icon: Pill,
          basePath: "/admin/pages/formations/pharmacie",
          children: [
            { href: "/admin/pages/formations/pharmacie", label: "Vue d'ensemble", icon: Pill },
            { href: "/admin/pages/formations/pharmacie/ue-madrid", label: "UE Madrid", icon: MapPin },
            { href: "/admin/pages/formations/pharmacie/ucjc-madrid", label: "UCJC Madrid", icon: MapPin },
            { href: "/admin/pages/formations/pharmacie/link-rome", label: "LINK Rome", icon: MapPin },
          ],
        },
        {
          label: "Vétérinaire",
          icon: Dog,
          basePath: "/admin/pages/formations/veterinaire",
          children: [
            { href: "/admin/pages/formations/veterinaire", label: "Vue d'ensemble", icon: Dog },
            { href: "/admin/pages/formations/veterinaire/ue-madrid", label: "UE Madrid", icon: MapPin },
          ],
        },
        {
          label: "Prépa Dentaire",
          icon: FlaskConical,
          basePath: "/admin/pages/formations/prepa-dentaire",
          children: [
            { href: "/admin/pages/formations/prepa-dentaire", label: "Vue d'ensemble", icon: FlaskConical },
            { href: "/admin/pages/formations/prepa-dentaire/ue-alicante", label: "UE Alicante", icon: MapPin },
          ],
        },
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

export default function AdminSidebar() {
  const pathname = usePathname();
  const [pagesOpen, setPagesOpen] = useState(pathname.startsWith("/admin/pages"));
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  function isActive(href: string) {
    if (href === "/admin") return pathname === "/admin";
    return pathname === href;
  }

  function isGroupActive(basePath: string) {
    return pathname.startsWith(basePath);
  }

  function toggleGroup(key: string) {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function isGroupOpen(basePath: string) {
    return openGroups[basePath] ?? pathname.startsWith(basePath);
  }

  function renderEntry(entry: NavEntry, depth: number) {
    if (isGroup(entry)) {
      return renderGroup(entry, depth);
    }
    return renderItem(entry, depth);
  }

  function renderItem(item: NavItem, depth: number) {
    const active = isActive(item.href);
    const sizes = depth <= 1
      ? "px-3 py-2 text-xs"
      : "px-2.5 py-1.5 text-[11px]";
    const colors = active
      ? "bg-white/10 text-white"
      : depth <= 1
        ? "text-white/40 hover:text-white/70 hover:bg-white/5"
        : "text-white/35 hover:text-white/60 hover:bg-white/5";
    const iconSize = depth <= 1 ? "w-3.5 h-3.5" : "w-3 h-3";

    return (
      <Link
        key={item.href}
        href={item.href}
        className={`flex items-center gap-2 rounded-lg font-medium transition-all ${sizes} ${colors}`}
      >
        <item.icon className={iconSize} />
        {item.label}
      </Link>
    );
  }

  function renderGroup(group: NavGroup, depth: number) {
    const open = isGroupOpen(group.basePath);
    const active = isGroupActive(group.basePath);
    const sizes = depth <= 1
      ? "px-3 py-2 text-xs"
      : "px-2.5 py-1.5 text-[11px]";
    const colors = active
      ? "bg-white/10 text-white"
      : depth <= 1
        ? "text-white/40 hover:text-white/70 hover:bg-white/5"
        : "text-white/35 hover:text-white/60 hover:bg-white/5";
    const iconSize = depth <= 1 ? "w-3.5 h-3.5" : "w-3 h-3";
    const chevronSize = depth <= 1 ? "w-3 h-3" : "w-2.5 h-2.5";

    return (
      <div key={group.basePath}>
        <button
          onClick={() => toggleGroup(group.basePath)}
          className={`w-full flex items-center gap-2 rounded-lg font-medium transition-all ${sizes} ${colors}`}
        >
          <group.icon className={iconSize} />
          {group.label}
          <ChevronDown
            className={`${chevronSize} ml-auto transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="ml-3 pl-2 border-l border-white/5 space-y-0.5 mt-0.5">
            {group.children.map((child) => renderEntry(child, depth + 1))}
          </div>
        )}
      </div>
    );
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
        {/* Top nav */}
        {topNav.map((item) => {
          const active = isActive(item.href) || (item.href === "/admin/articles" && pathname.startsWith("/admin/articles"));
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
              {pagesConfig.children.map((entry) => renderEntry(entry, 0))}
            </div>
          )}
        </div>

        {/* Separator + GEDS */}
        <div className="pt-2 mt-2 border-t border-white/10">
          <Link
            href="/admin/import"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              pathname.startsWith("/admin/import")
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
