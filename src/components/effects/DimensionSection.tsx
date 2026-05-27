import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Accent = "about" | "skills" | "experience" | "projects" | "education";

const washMap: Record<Accent, string> = {
  about: "section-wash-about",
  skills: "section-wash-skills",
  experience: "section-wash-experience",
  projects: "section-wash-projects",
  education: "section-wash-education",
};

interface DimensionSectionProps {
  id: string;
  accent: Accent;
  variant?: string;
  children: ReactNode;
  className?: string;
}

const DimensionSection = ({
  id,
  accent,
  children,
  className = "",
}: DimensionSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={ref}
      id={id}
      className={`dimension-section ${washMap[accent]} ${className}`}
    >
      <motion.div
        className="relative z-10"
        style={{ y }}
        initial={{ opacity: 0, rotate: -1 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default DimensionSection;
