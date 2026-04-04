"use client";

import { usePathname } from "next/navigation";
import QuizBanner from "@/components/home/QuizBanner";

const EXCLUDED_PATHS = [
  "/quiz",
  "/blog/",
  "/mentions-legales",
  "/politique-de-confidentialite",
  "/plan-du-site",
  "/evenements/remerciement",
  "/presentation/",
];

export default function QuizBannerGlobal() {
  const pathname = usePathname();

  const isExcluded = EXCLUDED_PATHS.some((p) => pathname.startsWith(p));
  if (isExcluded) return null;

  return <QuizBanner />;
}
