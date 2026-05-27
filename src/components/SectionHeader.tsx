import { motion } from "framer-motion";
import { viewportOnce } from "../utils/motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ label, title, subtitle }: SectionHeaderProps) => (
  <motion.div
    className="mb-14 text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={viewportOnce}
    transition={{ type: "spring", stiffness: 80, damping: 16 }}
  >
    <motion.span
      className="section-label"
      whileHover={{ scale: 1.05 }}
    >
      {label}
    </motion.span>

    <h2 className="section-title mt-4">
      {title.split(" ").map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.1 + i * 0.08, type: "spring", stiffness: 120 }}
        >
          {word}{"\u00A0"}
        </motion.span>
      ))}
    </h2>

    {subtitle && (
      <motion.p
        className="mx-auto mt-4 max-w-2xl text-base text-pro-muted"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ delay: 0.4 }}
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

export default SectionHeader;
