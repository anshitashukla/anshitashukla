import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { SkillSectionProps } from "../interfaces/experience.interface";
import { skills } from "../constants/skills";

// Color codes from the image
const primaryColor = "#3c0c99";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: "easeInOut",
    },
  }),
};

const SkillsSection: React.FC<SkillSectionProps> = ({ skills }) => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className=""
    >
      <h2
        className="text-3xl font-bold text-white mb-2 text-center sm:text-left"
        style={{ color: primaryColor }}
      >
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {skills.map((skill, index) => {
          return (
            <motion.div
              key={skill.name}
              variants={skillItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="bg-white/5 p-4"
            >
              <div className="flex items-center gap-4 mb-4">
                <i
                  className={`${skill.iconClass} text-3xl text-white `}
                  // style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}
                ></i>
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
              </div>
              {/* <div className="mb-2 text-sm text-gray-300">{skill.years}</div> */}
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className="h-2.5 rounded-full bg-gray-200"
                  style={{
                    width: `${skill.percentage}%`,
                    // backgroundColor: secondaryColor,
                  }}
                ></div>
              </div>
              <p className="text-right text-sm text-white mt-2">
                {skill.percentage}%
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

const SkillsPage = () => {
  return (
    <div className={cn("min-h-screen bg-primary", "p-8 sm:p-12 md:p-16")}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Skills
        </h1>
        <SkillsSection skills={skills} />
        {/* <SkillsSection title="Frontend" skills={frontendSkills} /> */}
      </div>
    </div>
  );
};

export default SkillsPage;
