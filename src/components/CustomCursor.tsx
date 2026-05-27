import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const COLORS = ["#FF6B9D", "#FFD93D", "#6C9EFF", "#6BCB77", "#FF8C42", "#C77DFF"];

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [color] = useState(() => COLORS[Math.floor(Math.random() * COLORS.length)]);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const ringX = useSpring(cursorX, { stiffness: 150, damping: 18 });
  const ringY = useSpring(cursorY, { stiffness: 150, damping: 18 });
  const dotX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const dotY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    document.body.classList.add("doodle-cursor-active");

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [role='button'], .doodle-float-item"));
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.body.addEventListener("mouseleave", leave);
    return () => {
      document.body.classList.remove("doodle-cursor-active");
      window.removeEventListener("mousemove", move);
      document.body.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  const size = isPointer ? 48 : 32;

  return (
    <>
      <motion.div
        className="doodle-cursor-dot pointer-events-none fixed z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 14,
          height: 14,
          background: color,
        }}
        animate={{ scale: isPointer ? 1.4 : 1, rotate: isPointer ? 45 : 0 }}
        transition={{ type: "spring", stiffness: 400 }}
      />
      <motion.div
        className="doodle-cursor-ring pointer-events-none fixed z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: size,
          height: size,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </>
  );
};

export default CustomCursor;
