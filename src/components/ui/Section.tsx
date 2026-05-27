import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  muted?: boolean;
}

const Section = ({ id, children, className = "", muted = false }: SectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [fadeOnScroll, setFadeOnScroll] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px) and (prefers-reduced-motion: no-preference)");
    const update = () => setFadeOnScroll(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0.55, 1, 1, 0.55]);

  return (
    <section
      ref={ref}
      id={id}
      className={`section ${muted ? "section-muted" : ""} ${className}`.trim()}
    >
      <motion.div
        className="section-inner"
        style={fadeOnScroll ? { opacity } : undefined}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
