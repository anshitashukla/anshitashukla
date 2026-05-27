import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education } from "../constants/Education";
import { Education as EducationType } from "../interfaces/experience.interface";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import { viewportOnce } from "../utils/motion";

const EducationSection = () => (
  <Section id="education">
    <SectionTitle
      eyebrow="Education"
      title="Academic background"
      description="Degrees and programs that shaped my engineering foundation."
    />

    <VerticalTimeline lineColor="#e4e4e7">
      {education.map((edu: EducationType, index) => (
        <VerticalTimelineElement
          key={index}
          date={edu.duration}
          iconStyle={{
            background: "#fafafa",
            border: "1px solid #e4e4e7",
            boxShadow: "none",
          }}
          icon={
            <motion.img
              src={edu.image}
              alt={edu.institution}
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
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ x: index % 2 === 0 ? 4 : -4 }}
          >
            <h3 className="timeline-role">{edu.institution}</h3>
            <p className="timeline-org">{edu.degree}</p>
            <p className="timeline-location">
              {index === 0 ? "Washington, D.C." : "Bhopal, MP, India"}
            </p>
            <p className="highlight-text" style={{ marginTop: "0.75rem" }}>
              {edu.description}
            </p>
          </motion.div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </Section>
);

export default EducationSection;
