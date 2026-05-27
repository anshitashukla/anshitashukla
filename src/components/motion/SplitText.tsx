import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "../../utils/motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "span" | "p";
  by?: "char" | "word";
}

const SplitText = ({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
  by = "char",
}: SplitTextProps) => {
  const units = by === "word" ? text.split(" ") : text.split("");

  return (
    <Tag className={className} aria-label={text}>
      {units.map((unit, i) => {
        const content = by === "word" ? unit : unit === " " ? "\u00A0" : unit;
        const key = by === "word" ? `${unit}-${i}` : `${unit}-${i}`;

        return (
          <motion.span
            key={key}
            className="inline-block"
            initial={{ opacity: 0, y: by === "char" ? 48 : 24, rotateX: by === "char" ? -80 : 0 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: delay + i * (by === "char" ? 0.035 : 0.1),
              ease: EASE_OUT_EXPO,
            }}
            style={{ transformOrigin: "bottom center", transformStyle: "preserve-3d" }}
          >
            {content}
            {by === "word" && i < units.length - 1 ? "\u00A0" : null}
          </motion.span>
        );
      })}
    </Tag>
  );
};

export default SplitText;
