import { BUTTON_STYLES } from "../../config/constants";

export default function NavLink({ href, children, className = '', variant = 'link' }) {
  const baseClasses = BUTTON_STYLES[variant] || BUTTON_STYLES.link;
  
  return (
    <a href={href} className={`${baseClasses} ${className}`}>
      {children}
    </a>
  );
}
