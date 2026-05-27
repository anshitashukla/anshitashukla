import { useEffect, useState } from "react";

export function useMousePosition(enabled = true) {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => {
      setPos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  return pos;
}
