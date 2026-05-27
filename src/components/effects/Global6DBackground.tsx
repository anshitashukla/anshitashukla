import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HEX_RINGS = 48;

const Global6DBackground = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0.5, y: 0.5 });
  const current = useRef({ x: 0.5, y: 0.5 });
  const { scrollYProgress } = useScroll();
  const scrollShift = useTransform(scrollYProgress, [0, 1], [0, -500]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    let frame = 0;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.06;
      current.current.y += (target.current.y - current.current.y) * 0.06;

      const el = rootRef.current;
      if (el) {
        const mx = (current.current.x - 0.5) * 80;
        const my = (current.current.y - 0.5) * 50;
        el.style.setProperty("--mx", `${mx}px`);
        el.style.setProperty("--my", `${my}px`);
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
    <div ref={rootRef} className="global-6d" aria-hidden>
      <motion.div className="global-6d-viewport" style={{ y: scrollShift }}>
        <div className="global-6d-mesh" />

        <div className="global-stars global-stars-far" />
        <div className="global-stars global-stars-mid" />
        <div className="global-stars global-stars-near" />

        <div className="global-infinity-vanish" />
        <div className="global-infinity-tunnel-gradient" />

        <div className="global-floor global-floor-deep" />
        <div className="global-floor global-floor-mid" />
        <div className="global-floor global-floor-near" />

        <div className="global-hex-tunnel">
          {Array.from({ length: HEX_RINGS }).map((_, i) => (
            <div
              key={i}
              className="global-hex-ring"
              style={{ animationDelay: `${-(i * 32) / HEX_RINGS}s` }}
            />
          ))}
        </div>

        <div className="global-axis-field">
          {[0, 1, 2, 3, 4, 5].map((d) => (
            <div
              key={d}
              className="global-axis-ring"
              style={{
                ["--axis-i" as string]: d,
                animationDelay: `${-d * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="global-tesseract-wrap">
          <div className="global-tesseract">
            <div className="tesseract-cube tesseract-outer global-tesseract-size">
              {["front", "back", "right", "left", "top", "bottom"].map((face) => (
                <div key={`o-${face}`} className={`tesseract-face tesseract-${face}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="global-wall global-wall-left" />
        <div className="global-wall global-wall-right" />

        <div className="global-grid-layer global-grid-1" />
        <div className="global-grid-layer global-grid-2" />
        <div className="global-grid-layer global-grid-3" />

        <div className="global-prism global-prism-1" />

        <div className="global-aurora global-aurora-1" />
        <div className="global-aurora global-aurora-2" />

        <div className="global-depth-fog" />
        <div className="global-vignette" />
      </motion.div>
    </div>
  );
};

export default Global6DBackground;
