import { motion } from "framer-motion";
import { defaultTransition, fadeUpSoft, staggerContainer, viewportOnce } from "../../utils/motion";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
}

const SectionTitle = ({ eyebrow, title, description }: SectionTitleProps) => (
  <motion.header
    className="section-title-block"
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    variants={staggerContainer(0.06, 0)}
  >
    <motion.p className="eyebrow" variants={fadeUpSoft} transition={defaultTransition}>
      {eyebrow}
    </motion.p>

    <h2 className="heading">
      {title.split(" ").map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="heading-word"
          variants={fadeUpSoft}
          transition={{ ...defaultTransition, delay: i * 0.04 }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
    </h2>

    {description && (
      <motion.p
        className="description"
        variants={fadeUpSoft}
        transition={{ ...defaultTransition, delay: 0.15 }}
      >
        {description}
      </motion.p>
    )}
  </motion.header>
);

export default SectionTitle;
