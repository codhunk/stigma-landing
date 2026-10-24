import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { siteConfig } from "@/config/site";

export function BrandLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0">
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-md shadow-slate-900/20 group-hover:bg-blue-600 transition-colors duration-200 shrink-0">
        <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
          {siteConfig.name}
        </span>
        <span className="text-[9px] sm:text-[10px] font-bold text-blue-600 uppercase mt-0.5 tracking-wider">
          {siteConfig.badge}
        </span>
      </div>
    </Link>
  );
}
