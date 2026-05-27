import { motion } from "framer-motion";

function Preloader() {
  return (
    <motion.div
      className="preloader"
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ margin: 0, fontWeight: 600, letterSpacing: "-0.02em" }}
      >
        Anshita Shukla
      </motion.p>
      <div className="preloader-bar">
        <motion.div
          className="preloader-fill"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default Preloader;
