import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  cardHover,
  defaultTransition,
  gridItem,
  tapPress,
  viewportOnce,
} from "../../utils/motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "button" | "article";
  onClick?: () => void;
  interactive?: boolean;
  delay?: number;
}

const Card = ({
  children,
  className = "",
  as = "div",
  onClick,
  interactive = true,
  delay = 0,
}: CardProps) => {
  const base = `card ${interactive ? "card-interactive" : ""} ${className}`.trim();

  const motionProps = {
    className: base,
    variants: gridItem,
    initial: "hidden",
    whileInView: "visible",
    viewport: viewportOnce,
    transition: { ...defaultTransition, delay },
    whileHover: interactive ? cardHover : undefined,
    whileTap: interactive && onClick ? tapPress : undefined,
  };

  if (as === "button") {
    return (
      <motion.button type="button" onClick={onClick} {...motionProps}>
        {children}
      </motion.button>
    );
  }

  if (as === "article") {
    return <motion.article {...motionProps}>{children}</motion.article>;
  }

  return (
    <motion.div onClick={onClick} {...motionProps}>
      {children}
    </motion.div>
  );
};

export default Card;
