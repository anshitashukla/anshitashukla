import { motion } from "framer-motion";
import { skills as allSkills } from "../constants/skills";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import StaggerChildren, { StaggerItem } from "./motion/StaggerChildren";
import { viewportOnce } from "../utils/motion";

const SkillsPage = () => (
  <Section id="skills">
    <SectionTitle
      eyebrow="Skills"
      title="Technical depth"
      description="Production stack across frontend, backend, cloud, and quality — aligned with large-scale product engineering."
    />

    <StaggerChildren
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      stagger={0.05}
    >
      {allSkills.map((skill, i) => (
        <StaggerItem key={skill.name}>
          <Card className="p-5" delay={i * 0.02}>
            <div className="skill-meta">
              <motion.i
                className={`skill-devicon ${skill.iconClass}`}
                aria-hidden
                whileHover={{ scale: 1.15, rotate: -6 }}
                transition={{ type: "spring", stiffness: 400, damping: 14 }}
              />
              <span className="skill-pct">{skill.percentage}%</span>
            </div>
            <p className="skill-name" style={{ marginTop: "0.75rem" }}>
              {skill.name}
            </p>
            <div className="skill-bar">
              <motion.div
                className="skill-bar-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={viewportOnce}
                transition={{ duration: 0.9, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </Card>
        </StaggerItem>
      ))}
    </StaggerChildren>
  </Section>
);

export default SkillsPage;
