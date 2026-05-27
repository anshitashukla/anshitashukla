import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticWrapProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

const MagneticWrap = ({ children, strength = 0.35, className = "" }: MagneticWrapProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setOffset({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    });
  };

  const onLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 280, damping: 20, mass: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrap;
