import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { skills as allSkills } from "../constants/skills";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import { EASE_OUT_EXPO, fadeUpSoft, staggerContainer } from "../utils/motion";

const SkillsPage = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const skillsInView = useInView(gridRef, { once: true, amount: 0.12 });
  const showBars = reduceMotion || skillsInView;

  return (
    <Section id="skills">
      <SectionTitle
        eyebrow="Skills"
        title="Technical depth"
        description="Production stack across frontend, backend, cloud, and quality — aligned with large-scale product engineering."
      />

      <motion.div
        ref={gridRef}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        initial="hidden"
        animate={showBars ? "visible" : "hidden"}
        variants={staggerContainer(0.05)}
      >
        {allSkills.map((skill, i) => (
          <motion.div key={skill.name} className="card p-5" variants={fadeUpSoft}>
            <div className="skill-meta">
              <motion.i
                className={`skill-devicon ${skill.iconClass}`}
                aria-hidden
                whileHover={{ scale: 1.15, rotate: -6 }}
                transition={{ type: "spring", stiffness: 400, damping: 14 }}
              />
              <span className="skill-pct">{skill.percentage}%</span>
            </div>
            <p className="skill-name">{skill.name}</p>
            <div className="skill-bar">
              <motion.div
                className="skill-bar-fill"
                initial={false}
                animate={{ scaleX: showBars ? skill.percentage / 100 : 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.85,
                  delay: reduceMotion ? 0 : showBars ? i * 0.03 : 0,
                  ease: EASE_OUT_EXPO,
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default SkillsPage;
