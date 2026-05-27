import { ReactNode } from "react";
import { motion } from "framer-motion";
import { hoverLift, tapPress } from "../../utils/motion";

type Variant = "solid" | "outline" | "icon";

interface MotionLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  onClick?: () => void;
}

const variantClass: Record<Variant, string> = {
  solid: "btn btn-solid",
  outline: "btn btn-outline",
  icon: "icon-link",
};

const MotionLink = ({
  href,
  children,
  variant = "solid",
  className = "",
  target,
  rel,
  download,
  onClick,
}: MotionLinkProps) => (
  <motion.a
    href={href}
    className={`${variantClass[variant]} ${className}`.trim()}
    target={target}
    rel={rel}
    download={download}
    onClick={onClick}
    whileHover={variant === "icon" ? { y: -2, scale: 1.04 } : hoverLift}
    whileTap={tapPress}
  >
    {children}
  </motion.a>
);

export default MotionLink;
