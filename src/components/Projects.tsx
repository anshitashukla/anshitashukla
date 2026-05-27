import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import FilterTabs from "./ui/FilterTabs";
import { portfolioProjects } from "../constants/portfolioProjects";
import { gridItem } from "../utils/motion";

const categories = [
  { id: "all", label: "All" },
  { id: "web app", label: "Web" },
  { id: "machine learning", label: "AI / ML" },
  { id: "mobile app", label: "Mobile" },
] as const;

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const filtered =
    filter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === filter);

  return (
    <Section id="projects" muted>
      <SectionTitle
        eyebrow="Projects"
        title="Case studies & shipped work"
        description="Selected projects with clear outcomes — how I think about product, systems, and execution."
      />

      <FilterTabs tabs={categories} active={filter} onChange={setFilter} />

      <motion.div className="projects-grid" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              variants={gridItem}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};

export default Projects;
export { portfolioProjects as projects };
