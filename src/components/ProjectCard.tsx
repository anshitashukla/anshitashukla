import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import type { PortfolioProject } from "../constants/portfolioProjects";
import Card from "./ui/Card";
import MotionLink from "./ui/MotionLink";
import ColorIcon from "./ui/ColorIcon";
import { hoverLift } from "../utils/motion";

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const imageRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = imageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    el.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const onLeave = () => {
    if (imageRef.current) imageRef.current.style.transform = "";
  };

  return (
    <Card as="article" className="project-card" delay={index * 0.04}>
      <div
        ref={imageRef}
        className="project-image-wrap"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ transition: "transform 0.15s ease-out", transformStyle: "preserve-3d" }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
        {project.highlight && (
          <span className="project-badge">
            <ColorIcon icon={Sparkles} brand="sparkles" className="h-3 w-3" />
            {project.highlight}
          </span>
        )}
      </div>
      <div className="project-body">
        <div className="chip-row">
          {project.tags.slice(0, 4).map((tag) => (
            <motion.span key={tag} className="tag tag-tech" whileHover={hoverLift} whileTap={{ scale: 0.96 }}>
              {tag}
            </motion.span>
          ))}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-date">{project.date}</p>
        <p className="project-desc">{project.description}</p>
        <ul className="project-impact">
          {project.impact.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <div className="project-actions">
          <MotionLink
            href={project.github}
            variant="outline"
            className="flex-1 !py-2 text-xs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ColorIcon icon={Github} brand="github" className="h-3.5 w-3.5" /> Code
          </MotionLink>
          {project.webapp ? (
            <MotionLink
              href={project.webapp}
              variant="solid"
              className="flex-1 !py-2 text-xs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ColorIcon icon={ExternalLink} brand="external" className="h-3.5 w-3.5" /> Live demo
            </MotionLink>
          ) : null}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
