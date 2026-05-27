import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticleCanvas from "../ParticleCanvas";

const ImmersiveWallpaper = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0.5, y: 0.5 });
  const current = useRef({ x: 0.5, y: 0.5 });
  const { scrollYProgress } = useScroll();
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -180]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    let frame = 0;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.05;
      current.current.y += (target.current.y - current.current.y) * 0.05;

      const el = rootRef.current;
      if (el) {
        const dx = (current.current.x - 0.5) * 2;
        const dy = (current.current.y - 0.5) * 2;
        el.style.setProperty("--px", String(dx));
        el.style.setProperty("--py", String(dy));
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div ref={rootRef} className="immersive-wallpaper" aria-hidden>
      <motion.div className="wallpaper-scroll-wrap" style={{ y: scrollY }}>
        <div className="wallpaper-base" />

        <div
          className="wallpaper-layer wallpaper-layer-deep"
          style={{
            transform:
              "translate(calc(var(--px, 0) * -12px), calc(var(--py, 0) * -8px))",
          }}
        />
        <div
          className="wallpaper-layer wallpaper-layer-mid"
          style={{
            transform:
              "translate(calc(var(--px, 0) * -28px), calc(var(--py, 0) * -18px))",
          }}
        />
        <div
          className="wallpaper-layer wallpaper-layer-bokeh"
          style={{
            transform:
              "translate(calc(var(--px, 0) * -42px), calc(var(--py, 0) * -26px))",
          }}
        />
        <div
          className="wallpaper-layer wallpaper-layer-foreground"
          style={{
            transform:
              "translate(calc(var(--px, 0) * -58px), calc(var(--py, 0) * -34px))",
          }}
        />

        <div className="wallpaper-light-rays" />
        <div className="wallpaper-vignette" />
        <div className="wallpaper-scrim" />
      </motion.div>

      <ParticleCanvas />
    </div>
  );
};

export default ImmersiveWallpaper;
