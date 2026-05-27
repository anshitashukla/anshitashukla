import { motion, useScroll, useTransform } from "framer-motion";

const BrightBackdrop = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <div className="bright-backdrop fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="bright-base" />
      <motion.div style={{ y: y1 }} className="bright-blob bright-blob-1" />
      <motion.div style={{ y: y2 }} className="bright-blob bright-blob-2" />
      <motion.div style={{ y: y1 }} className="bright-blob bright-blob-3" />
      <motion.div style={{ y: y2 }} className="bright-blob bright-blob-4" />
      <div className="bright-grid" />
      <div className="bright-shine" />
    </div>
  );
};

export default BrightBackdrop;
