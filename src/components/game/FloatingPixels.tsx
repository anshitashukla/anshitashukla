import { motion } from "framer-motion";

const FloatingPixels = ({ count = 12, color = "#8b5cf6" }: { count?: number; color?: string }) => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
    {Array.from({ length: count }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-1 w-1 rounded-sm"
        style={{
          background: color,
          left: `${(i * 17 + 7) % 100}%`,
          top: `${(i * 23 + 11) % 100}%`,
          boxShadow: `0 0 6px ${color}`,
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 3 + (i % 4),
          repeat: Infinity,
          delay: i * 0.2,
        }}
      />
    ))}
  </div>
);

export default FloatingPixels;
