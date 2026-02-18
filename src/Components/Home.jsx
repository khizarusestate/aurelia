import { motion as Motion } from "framer-motion";
import { BRAND, ANIMATIONS } from '../config/constants';
import NavLink from '../components/ui/NavLink';

export default function Home() {
  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-[100svh] w-full max-w-7xl items-center gap-10 px-6 pt-28 pb-12 sm:px-10 lg:grid-cols-2 overflow-hidden"
    >
      <Motion.div
        variants={ANIMATIONS.fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <p className="mb-4 inline-flex rounded-full border border-amber-300/30 bg-amber-200/10 px-4 py-1.5 text-[10px] font-medium tracking-[0.2em] text-amber-200 uppercase">
          {BRAND.subTagline}
        </p>

        <h1 className="heading-font text-3xl leading-tight font-medium sm:text-5xl">
          Experience Timeless Comfort At
          <span className="block bg-gradient-to-r from-amber-200 via-amber-400 to-orange-300 bg-clip-text text-transparent">
            {BRAND.name} Grand Hotel
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
          Stylish rooms, curated dining, and calm luxury in one place. Perfect for your next city
          escape or business stay.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <NavLink href="#contact" variant="primary" className="px-7 py-3 text-sm">
            Book Now
          </NavLink>
          <NavLink href="#rooms" variant="secondary" className="px-7 py-3 text-sm">
            View Rooms
          </NavLink>
        </div>
      </Motion.div>

      <Motion.div
        variants={ANIMATIONS.fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-2xl"
      >
        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-amber-300/30 via-orange-300/20 to-blue-300/20 blur-xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/5 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
          <Motion.img
            src="/assets/HomeImages.png"
            alt="Modern luxury hotel exterior"
            whileHover={{ scale: 1.02 }}
            className="h-[360px] w-full rounded-[1.5rem] border border-white/25 object-cover object-center sm:h-[450px]"
          />
        </div>
      </Motion.div>
    </section>
  );
}
