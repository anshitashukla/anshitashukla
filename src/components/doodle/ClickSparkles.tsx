import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DOODLE_COLORS = ["#FF6B9D", "#FFD93D", "#6C9EFF", "#6BCB77", "#FF8C42", "#C77DFF", "#FF4757"];

type Spark = { id: number; x: number; y: number; color: string; emoji: string; rot: number };

const EMOJIS = ["✨", "⭐", "💫", "🌟", "💖", "🎨", "✏️", "🖍️", "🌈", "💡"];

export const useClickSparkles = () => {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const idRef = useRef(0);

  const burst = useCallback((x: number, y: number) => {
    const count = 6 + Math.floor(Math.random() * 4);
    const newSparks: Spark[] = Array.from({ length: count }, () => ({
      id: idRef.current++,
      x: x + (Math.random() - 0.5) * 40,
      y: y + (Math.random() - 0.5) * 40,
      color: DOODLE_COLORS[Math.floor(Math.random() * DOODLE_COLORS.length)],
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      rot: Math.random() * 360,
    }));
    setSparks((prev) => [...prev, ...newSparks]);
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => !newSparks.find((n) => n.id === s.id)));
    }, 900);
  }, []);

  return { sparks, burst };
};

const ClickSparkles = ({ sparks }: { sparks: Spark[] }) => (
  <div className="pointer-events-none fixed inset-0 z-[9990] overflow-hidden">
    <AnimatePresence>
      {sparks.map((s) => (
        <motion.span
          key={s.id}
          className="absolute text-xl select-none"
          style={{ left: s.x, top: s.y, color: s.color }}
          initial={{ opacity: 1, scale: 0, rotate: s.rot }}
          animate={{
            opacity: 0,
            scale: 1.8,
            y: -60 - Math.random() * 40,
            x: (Math.random() - 0.5) * 80,
            rotate: s.rot + 180,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          {s.emoji}
        </motion.span>
      ))}
    </AnimatePresence>
  </div>
);

export const SparkleProvider = ({ children }: { children: React.ReactNode }) => {
  const { sparks, burst } = useClickSparkles();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-sparkle]")) {
        burst(e.clientX, e.clientY);
      }
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [burst]);

  return (
    <>
      {children}
      <ClickSparkles sparks={sparks} />
    </>
  );
};

export default ClickSparkles;
