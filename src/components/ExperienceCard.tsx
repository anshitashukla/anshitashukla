import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants/Experience";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import { viewportOnce } from "../utils/motion";

const ExperienceSection = () => (
  <Section id="experience" muted>
    <SectionTitle
      eyebrow="Experience"
      title="Where I've worked"
      description="Roles across product engineering, scale, and delivery."
    />

    <VerticalTimeline lineColor="#e4e4e7">
      {experiences.map((exp, index) => (
        <VerticalTimelineElement
          key={index}
          date={exp.duration}
          iconStyle={{
            background: "#fafafa",
            border: "1px solid #e4e4e7",
            boxShadow: "none",
          }}
          icon={
            <motion.img
              src={exp.image}
              alt={exp.company}
              style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            />
          }
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ x: index % 2 === 0 ? 4 : -4 }}
          >
            <h3 className="timeline-role">{exp.title}</h3>
            <p className="timeline-org">{exp.company}</p>
            <p className="timeline-location">{exp.location}</p>
            {index === 1 && (
              <p className="timeline-impact-badge">Leadership · 1M+ users · Payments & AWS</p>
            )}
            {index === 2 && (
              <p className="timeline-impact-badge">90% test coverage · 75% fewer redundant queries</p>
            )}
            <ul className="timeline-list">
              {exp.responsibilities.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
            <div className="chip-row" style={{ marginTop: "1rem" }}>
              {exp.skills.slice(0, 6).map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </Section>
);

export default ExperienceSection;
