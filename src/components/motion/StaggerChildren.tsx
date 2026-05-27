import { ReactNode } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpSoft, defaultTransition, viewportOnce } from "../../utils/motion";

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export const StaggerItem = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    className={className}
    variants={fadeUpSoft}
    transition={defaultTransition}
  >
    {children}
  </motion.div>
);

const StaggerChildren = ({
  children,
  className = "",
  stagger = 0.08,
  delay = 0,
}: StaggerChildrenProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    variants={staggerContainer(stagger, delay)}
  >
    {children}
  </motion.div>
);

export default StaggerChildren;
