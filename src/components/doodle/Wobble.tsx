import { ReactNode } from "react";
import { motion } from "framer-motion";

const WOBBLE = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -3, 3, -2, 2, 0],
    scale: 1.04,
    transition: { duration: 0.5 },
  },
  tap: { scale: 0.94, rotate: -4 },
};

interface WobbleProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "button" | "a";
  onClick?: () => void;
  href?: string;
  color?: string;
}

const Wobble = ({
  children,
  className = "",
  as = "div",
  onClick,
  href,
  color,
}: WobbleProps) => {
  const style = color ? ({ "--wobble-accent": color } as React.CSSProperties) : undefined;
  const shared = {
    className: `wobble-wrap ${className}`,
    style,
    variants: WOBBLE,
    initial: "rest" as const,
    whileHover: "hover" as const,
    whileTap: "tap" as const,
  };

  if (as === "button") {
    return (
      <motion.button type="button" onClick={onClick} {...shared}>
        {children}
      </motion.button>
    );
  }

  if (as === "a" && href) {
    return (
      <motion.a href={href} {...shared}>
        {children}
      </motion.a>
    );
  }

  return <motion.div {...shared}>{children}</motion.div>;
};

export default Wobble;
