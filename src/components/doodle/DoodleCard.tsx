import { ReactNode } from "react";
import { motion } from "framer-motion";

const COLORS = {
  pink: "doodle-card-pink",
  yellow: "doodle-card-yellow",
  blue: "doodle-card-blue",
  green: "doodle-card-green",
  orange: "doodle-card-orange",
  purple: "doodle-card-purple",
  white: "doodle-card-white",
};

type DoodleColor = keyof typeof COLORS;

interface DoodleCardProps {
  children: ReactNode;
  className?: string;
  color?: DoodleColor;
  tilt?: number;
  active?: boolean;
  onClick?: () => void;
  as?: "div" | "button";
}

const DoodleCard = ({
  children,
  className = "",
  color = "white",
  tilt = 0,
  active = false,
  onClick,
  as = "div",
}: DoodleCardProps) => {
  const base = `doodle-card ${COLORS[color]} ${active ? "doodle-card-active" : ""} ${className}`;

  const motionProps = {
    className: base,
    style: { rotate: tilt },
    whileHover: {
      rotate: tilt + (Math.random() > 0.5 ? 2 : -2),
      y: -6,
      transition: { type: "spring" as const, stiffness: 400, damping: 15 },
    },
    whileTap: { scale: 0.97, rotate: tilt - 3 },
    layout: true,
  };

  if (as === "button") {
    return (
      <motion.button type="button" onClick={onClick} data-sparkle {...motionProps}>
        <div className="doodle-card-inner">{children}</div>
      </motion.button>
    );
  }

  return (
    <motion.div data-sparkle onClick={onClick} {...motionProps}>
      <div className="doodle-card-inner">{children}</div>
    </motion.div>
  );
};

export default DoodleCard;
