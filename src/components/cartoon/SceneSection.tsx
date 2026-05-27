import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Scene = "hero" | "about" | "skills" | "experience" | "projects" | "education";

const sceneClass: Record<Scene, string> = {
  hero: "",
  about: "scene-about",
  skills: "scene-skills",
  experience: "scene-experience",
  projects: "scene-projects",
  education: "scene-education",
};

interface SceneSectionProps {
  id: string;
  scene: Scene;
  children: ReactNode;
  className?: string;
}

const SceneSection = ({ id, scene, children, className = "" }: SceneSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <section ref={ref} id={id} className={`scene-section ${sceneClass[scene]} ${className}`}>
      <motion.div style={{ opacity }} className="scene-content mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </motion.div>
    </section>
  );
};

export default SceneSection;
