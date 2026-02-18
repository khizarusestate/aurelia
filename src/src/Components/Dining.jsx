import SectionReveal from "./SectionReveal";
import NavLink from './ui/NavLink';

export default function Dining() {
  return (
    <SectionReveal
      id="dining"
      className="relative mx-auto w-full max-w-7xl px-6 py-22 sm:px-10"
    >
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-md">
          <p className="text-[10px] tracking-[0.3em] text-amber-200/75 uppercase">Fine Dining</p>
          <h2 className="heading-font mt-2 text-3xl text-white sm:text-4xl">
            Culinary Experiences, Crafted Daily
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            From chef-curated tasting menus to rooftop signature drinks, every dining moment is
            built for a premium memory.
          </p>
        </div>
        <div className="rounded-3xl border border-amber-200/20 bg-gradient-to-br from-amber-200/10 via-orange-200/10 to-sky-300/10 p-8">
          <h3 className="text-xl text-white">Guest Favorite</h3>
          <p className="mt-3 text-sm text-slate-200">
            Candlelight terrace dinner with live music, seasonal menu, and skyline ambiance.
          </p>
          <NavLink href="#contact" variant="secondary" className="mt-6 inline-block px-6 py-2.5">
            Reserve Dining
          </NavLink>
        </div>
      </div>
    </SectionReveal>
  );
}
