import { BUTTON_STYLES } from "../../config/constants";

export default function Button({ variant = 'primary', children, className = '', ...props }) {
  const baseClasses = BUTTON_STYLES[variant] || BUTTON_STYLES.primary;
  
  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
