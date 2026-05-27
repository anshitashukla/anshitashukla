import { motion } from "framer-motion";
import { impactMetrics } from "../constants/profile";
import StaggerChildren, { StaggerItem } from "./motion/StaggerChildren";

const ImpactStrip = () => (
  <section id="impact" className="impact-strip" aria-label="Key impact metrics">
    <div className="impact-strip-inner">
      <motion.p
        className="impact-strip-label"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Measurable impact
      </motion.p>
      <StaggerChildren className="impact-grid" stagger={0.06}>
        {impactMetrics.map((metric) => (
          <StaggerItem key={metric.label}>
            <motion.article
              className="impact-card"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            >
              <span className="impact-value">{metric.value}</span>
              <span className="impact-label">{metric.label}</span>
              <span className="impact-context">{metric.context}</span>
            </motion.article>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  </section>
);

export default ImpactStrip;
