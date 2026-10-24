import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { siteConfig } from "@/config/site";

export function BrandLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group focus:outline-none shrink-0">
      <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-md shadow-slate-900/20 group-hover:bg-blue-600 transition-colors duration-200">
        <GraduationCap className="h-5 w-5 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="font-extrabold text-lg text-slate-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
          {siteConfig.name}
        </span>
        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-0.5">
          {siteConfig.badge}
        </span>
      </div>
    </Link>
  );
}
