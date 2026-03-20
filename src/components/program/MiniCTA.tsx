import { ArrowRight } from "lucide-react";

export default function MiniCTA({ align = "center" }: { align?: "center" | "left" }) {
  return (
    <div className={`flex ${align === "left" ? "justify-start mt-8" : "justify-center py-6"}`}>
      <a
        href="https://candidature.edumove.fr"
        className="group inline-flex items-center gap-2 bg-[#EC680A] hover:bg-[#D45E09] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#EC680A]/25 hover:gap-3"
      >
        Je candidate gratuitement
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
