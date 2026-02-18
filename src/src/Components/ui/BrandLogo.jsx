import { BRAND } from "../../config/constants";

export default function BrandLogo() {
  return (
    <div className="flex items-center gap-3.5">
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-amber-200/60 bg-gradient-to-br from-amber-100 via-amber-300 to-orange-300 shadow-[0_0_20px_rgba(251,191,36,0.35)]">
        <span className="absolute h-6 w-6 rotate-45 border border-slate-900/40" />
        <span className="heading-font text-base font-medium text-slate-950">A</span>
      </span>
      <div>
        <span className="block text-[9px] font-medium tracking-[0.3em] text-amber-100/80 uppercase">
          {BRAND.tagline}
        </span>
        <span className="heading-font block text-[1.6rem] leading-none text-white">
          {BRAND.name}
        </span>
      </div>
    </div>
  );
}
