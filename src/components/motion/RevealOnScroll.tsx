import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { defaultTransition, viewportOnce } from "../../utils/motion";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
}

const directionVariants: Record<string, Variants> = {
  up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
  none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

const RevealOnScroll = ({
  children,
  className = "",
  variants,
  delay = 0,
  direction = "up",
}: RevealOnScrollProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    variants={variants ?? directionVariants[direction]}
    transition={{ ...defaultTransition, delay }}
  >
    {children}
  </motion.div>
);

export default RevealOnScroll;
