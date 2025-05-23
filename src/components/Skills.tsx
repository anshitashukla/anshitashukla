// interface SkillsSectionProps {
//   skills: Skill[];
// }
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { cn } from "../utils/cn";
// import { Skill } from "../interfaces/experience.interface";
// import { skills as allSkills } from "../constants/skills"; // Renamed import for clarity

// // Color codes from the image
// const primaryColor = "#3c0c99";
// const showMoreColor = "#6b46c1"; // A slightly lighter shade for the button

// // Animation Variants
// const sectionVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1, ease: "easeInOut" },
//   },
// };

// const skillItemVariants = {
//   hidden: { opacity: 0, x: -20 },
//   visible: (i: number) => ({
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//     },
//   }),
// };

// interface SkillsSectionProps {
//   skills: Skill[];
//   showMore: boolean;
//   toggleShowMore: () => void;
// }

// const SkillsSection: React.FC<SkillsSectionProps> = ({
//   skills,
//   showMore,
//   toggleShowMore,
// }) => {
//   return (
//     <motion.section
//       variants={sectionVariants}
//       initial="visible"
//       whileInView="visible"
//       viewport={{ once: true }}
//       className=""
//     >
//       <h2
//         className="text-3xl font-bold text-white mb-2 text-center sm:text-left"
//         style={{ color: primaryColor }}
//       >
//         Skills
//       </h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5  xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-5 gap-2">
//         {skills.map((skill, index) => (
//           <motion.div
//             key={skill.name}
//             variants={skillItemVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             custom={index}
//             className="bg-white/5 p-4 rounded-md shadow-md"
//           >
//             <div className="flex items-center gap-4 mb-4">
//               <i className={`${skill.iconClass} text-3xl text-white`}></i>
//               <h3 className="text-md font-semibold text-white">{skill.name}</h3>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//       {allSkills.length > (isMobile() ? 6 : 10) && (
//         <div className="mt-4 text-center">
//           <button
//             onClick={toggleShowMore}
//             className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
//             style={{ backgroundColor: showMoreColor }}
//           >
//             {showMore ? "Show More" : "Show Less"}
//           </button>
//         </div>
//       )}
//     </motion.section>
//   );
// };

// const isMobile = (): boolean => {
//   return typeof window !== "undefined" && window.innerWidth < 768; // Adjust breakpoint as needed
// };

// const SkillsPage = () => {
//   const initialVisibleSkills = isMobile() ? 6 : 10;
//   const [showMore, setShowMore] = useState(
//     allSkills.length > initialVisibleSkills
//   );
//   const displayedSkills = showMore
//     ? allSkills.slice(0, initialVisibleSkills)
//     : allSkills;

//   const toggleShowMore = () => {
//     setShowMore(!showMore);
//   };

//   return (
//     <div className={cn("bg-primary", "p-8 sm:p-12 md:p-16")}>
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-white mb-8 text-center">
//           Skills
//         </h1>
//         <SkillsSection
//           skills={displayedSkills}
//           showMore={showMore}
//           toggleShowMore={toggleShowMore}
//         />
//       </div>
//     </div>
//   );
// };

// export default SkillsPage;
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { Skill } from "../interfaces/experience.interface";
import { skills as allSkills } from "../constants/skills"; // Renamed import for clarity

// Color codes from the image
const primaryColor = "#3c0c99";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="visible"
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
      <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5  xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-5 gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={skillItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            className="bg-white/5 p-4 rounded-md shadow-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <i className={`${skill.iconClass} text-3xl text-white`}></i>
              <h3 className="text-md font-semibold text-white">{skill.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const SkillsPage = () => {
  return (
    <div id="skills" className={cn("bg-primary", "p-8 sm:p-12 md:p-16")}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Skills
        </h1>
        <SkillsSection skills={allSkills} />
      </div>
    </div>
  );
};

export default SkillsPage;
