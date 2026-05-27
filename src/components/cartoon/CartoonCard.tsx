import { ReactNode } from "react";
import { motion } from "framer-motion";

const glowMap = {
  pink: "cartoon-card-glow-pink",
  blue: "cartoon-card-glow-blue",
  purple: "cartoon-card-glow-purple",
  orange: "cartoon-card-glow-orange",
  green: "cartoon-card-glow-green",
  yellow: "cartoon-card-glow-yellow",
};

type Glow = keyof typeof glowMap;

interface CartoonCardProps {
  children: ReactNode;
  className?: string;
  glow?: Glow;
  active?: boolean;
  onClick?: () => void;
  as?: "div" | "button";
  delay?: number;
}

const CartoonCard = ({
  children,
  className = "",
  glow = "blue",
  active = false,
  onClick,
  as = "div",
  delay = 0,
}: CartoonCardProps) => {
  const cls = `glass-card w-full ${glowMap[glow]} ${active ? "glass-card-active" : ""} ${className}`;

  const motionProps = {
    className: cls,
    initial: { opacity: 0, y: 40, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-40px" },
    transition: { type: "spring" as const, stiffness: 120, damping: 18, delay },
    whileHover: { y: -8, scale: 1.02, transition: { type: "spring" as const, stiffness: 300 } },
    whileTap: { scale: 0.98 },
  };

  if (as === "button") {
    return (
      <motion.button type="button" onClick={onClick} {...motionProps}>
        {children}
      </motion.button>
    );
  }

  return (
    <motion.div onClick={onClick} {...motionProps}>
      {children}
    </motion.div>
  );
};

export default CartoonCard;
