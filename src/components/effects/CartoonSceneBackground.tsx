import { motion, useScroll, useTransform } from "framer-motion";
import { useSmoothMouse } from "../../hooks/useSmoothMouse";

const Cloud = ({
  className,
  delay = 0,
  duration = 40,
}: {
  className?: string;
  delay?: number;
  duration?: number;
}) => (
  <motion.div
    className={`cartoon-cloud ${className ?? ""}`}
    animate={{ x: ["-10%", "110%"] }}
    transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
  >
    <svg viewBox="0 0 200 80" fill="white" className="h-full w-full drop-shadow-lg">
      <ellipse cx="60" cy="50" rx="50" ry="28" opacity="0.95" />
      <ellipse cx="110" cy="42" rx="45" ry="32" opacity="0.9" />
      <ellipse cx="155" cy="52" rx="40" ry="26" opacity="0.85" />
    </svg>
  </motion.div>
);

const CartoonSceneBackground = () => {
  const mouse = useSmoothMouse(0.04);
  const { scrollYProgress } = useScroll();
  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const cloudY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const hillY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  const mx = (mouse.x - 0.5) * 30;
  const my = (mouse.y - 0.5) * 20;

  return (
    <div className="cartoon-scene fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <motion.div className="cartoon-sky" style={{ y: skyY }}>
        <div className="cartoon-sky-gradient" />
        <motion.div
          className="cartoon-sun"
          animate={{ scale: [1, 1.08, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ x: mx * 0.3, y: my * 0.2 }}
        />
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="cartoon-star"
            style={{
              left: `${8 + (i * 7.5) % 90}%`,
              top: `${5 + (i * 11) % 35}%`,
              width: 2 + (i % 3),
              height: 2 + (i % 3),
            }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>

      <motion.div className="cartoon-cloud-layer" style={{ y: cloudY, x: mx * 0.5 }}>
        <Cloud className="cloud-1" duration={55} />
        <Cloud className="cloud-2" delay={-20} duration={70} />
        <Cloud className="cloud-3" delay={-35} duration={45} />
        <Cloud className="cloud-4" delay={-10} duration={60} />
      </motion.div>

      <motion.div className="cartoon-hills" style={{ y: hillY }}>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="hill-back">
          <path d="M0 120 Q360 60 720 100 T1440 80 L1440 200 L0 200 Z" fill="#5cb85c" opacity="0.5" />
        </svg>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="hill-front">
          <path d="M0 150 Q480 90 960 130 T1440 110 L1440 200 L0 200 Z" fill="#449d44" opacity="0.7" />
        </svg>
      </motion.div>

      <div className="cartoon-vignette" />
    </div>
  );
};

export default CartoonSceneBackground;
