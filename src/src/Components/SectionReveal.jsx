import { motion as Motion } from "framer-motion";
import { ANIMATIONS } from '../config/constants';

export default function SectionReveal({ id, className, children }) {
  return (
    <Motion.section
      id={id}
      variants={ANIMATIONS.fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Motion.section>
  );
}
