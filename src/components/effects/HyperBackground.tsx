import { motion, useScroll, useTransform } from "framer-motion";

const HyperBackground = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className="hyper-bg fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="hyper-mesh absolute inset-0" />
      <motion.div style={{ y: y1, rotate }} className="hyper-grid-layer hyper-grid-1" />
      <motion.div style={{ y: y2 }} className="hyper-grid-layer hyper-grid-2" />
      <div className="hyper-aurora hyper-aurora-1" />
      <div className="hyper-aurora hyper-aurora-2" />
      <div className="hyper-aurora hyper-aurora-3" />
      <div className="hyper-vignette absolute inset-0" />
    </div>
  );
};

export default HyperBackground;
