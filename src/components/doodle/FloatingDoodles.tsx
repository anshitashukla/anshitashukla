import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const DOODLE_SHAPES = [
  { type: "star", color: "#FFD93D" },
  { type: "heart", color: "#FF6B9D" },
  { type: "circle", color: "#6C9EFF" },
  { type: "zigzag", color: "#6BCB77" },
  { type: "arrow", color: "#FF8C42" },
  { type: "spiral", color: "#C77DFF" },
  { type: "star", color: "#FF4757" },
  { type: "heart", color: "#4ECDC4" },
];

function DoodleShape({ type, color }: { type: string; color: string }) {
  const stroke = color;
  const sw = 2.5;

  switch (type) {
    case "star":
      return (
        <svg viewBox="0 0 40 40" className="h-full w-full" fill="none">
          <path
            d="M20 2 L24 14 L37 14 L27 22 L31 36 L20 28 L9 36 L13 22 L3 14 L16 14 Z"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinejoin="round"
            fill={`${color}33`}
          />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 40 40" className="h-full w-full" fill="none">
          <path
            d="M20 34 C20 34 4 22 4 12 C4 6 10 4 14 8 C16 4 24 4 26 8 C30 4 36 6 36 12 C36 22 20 34 20 34Z"
            stroke={stroke}
            strokeWidth={sw}
            fill={`${color}33`}
          />
        </svg>
      );
    case "circle":
      return (
        <svg viewBox="0 0 40 40" className="h-full w-full" fill="none">
          <ellipse cx="20" cy="20" rx="16" ry="14" stroke={stroke} strokeWidth={sw} fill={`${color}22`} />
        </svg>
      );
    case "zigzag":
      return (
        <svg viewBox="0 0 60 30" className="h-full w-full" fill="none">
          <path
            d="M2 15 L12 5 L22 25 L32 5 L42 25 L52 5 L58 15"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "arrow":
      return (
        <svg viewBox="0 0 50 40" className="h-full w-full" fill="none">
          <path
            d="M5 20 L35 20 M28 10 L38 20 L28 30"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "spiral":
      return (
        <svg viewBox="0 0 40 40" className="h-full w-full" fill="none">
          <path
            d="M20 20 Q20 10 30 10 Q38 10 38 20 Q38 32 20 32 Q4 32 4 18 Q4 4 22 4"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      );
    default:
      return null;
  }
}

interface FloatingDoodle {
  id: number;
  x: number;
  y: number;
  size: number;
  shape: (typeof DOODLE_SHAPES)[0];
  rot: number;
  speed: number;
}

const FloatingDoodles = () => {
  const [doodles, setDoodles] = useState<FloatingDoodle[]>([]);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [popped, setPopped] = useState<Set<number>>(new Set());

  useEffect(() => {
    const items: FloatingDoodle[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      size: 28 + Math.random() * 36,
      shape: DOODLE_SHAPES[i % DOODLE_SHAPES.length],
      rot: Math.random() * 360,
      speed: 0.5 + Math.random() * 1.5,
    }));
    setDoodles(items);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const popDoodle = (id: number) => {
    setPopped((prev) => new Set(prev).add(id));
    setTimeout(() => {
      setPopped((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 600);
  };

  return (
    <div className="doodle-float-layer pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {doodles.map((d) => {
        const dx = (mouse.x - d.x / 100) * 30 * d.speed;
        const dy = (mouse.y - d.y / 100) * 30 * d.speed;
        const isPopped = popped.has(d.id);

        return (
          <motion.button
            key={d.id}
            type="button"
            className="doodle-float-item pointer-events-auto absolute cursor-pointer select-none border-0 bg-transparent p-0"
            style={{
              left: `${d.x}%`,
              top: `${d.y}%`,
              width: d.size,
              height: d.size,
            }}
            animate={{
              x: -dx,
              y: -dy,
              rotate: [d.rot, d.rot + 8, d.rot - 8, d.rot],
              scale: isPopped ? [1, 1.6, 0.8, 1] : 1,
            }}
            transition={{
              x: { type: "spring", stiffness: 40, damping: 20 },
              y: { type: "spring", stiffness: 40, damping: 20 },
              rotate: { duration: 4 + d.speed, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.5 },
            }}
            whileHover={{ scale: 1.3, rotate: d.rot + 20 }}
            onClick={() => popDoodle(d.id)}
            aria-label="Interactive doodle"
          >
            <DoodleShape type={d.shape.type} color={d.shape.color} />
          </motion.button>
        );
      })}
    </div>
  );
};

export default FloatingDoodles;
