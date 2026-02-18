import { motion as Motion } from "framer-motion";
import BrandLogo from './ui/BrandLogo';
import NavigationList from './ui/NavigationList';
import NavLink from './ui/NavLink';
import { ANIMATIONS } from '../config/constants';

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 overflow-hidden">
      <nav className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-10">
        <Motion.div
          variants={ANIMATIONS.slideDown}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex items-center justify-between rounded-2xl border border-white/15 bg-slate-900/65 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-6"
        >
          <NavLink href="#home" className="flex items-center gap-3.5">
            <BrandLogo />
          </NavLink>

          <NavigationList />

          <div className="flex items-center gap-3">
            <NavLink href="#rooms" variant="secondary" className="hidden sm:block">
              View Rooms
            </NavLink>
            <NavLink href="#contact" variant="primary">
              Book Now
            </NavLink>
          </div>
        </Motion.div>
      </nav>
    </header>
  );
}
