import NavLink from "./NavLink";
import { NAVIGATION } from "../../config/constants";

export default function NavigationList({ className = '', variant = 'link' }) {
  return (
    <ul className={`hidden items-center gap-8 text-xs font-medium text-slate-200 md:flex ${className}`}>
      {NAVIGATION.map((item) => (
        <li key={item.name}>
          <NavLink href={item.href} variant={variant}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
