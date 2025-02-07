export interface Experience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface ExperienceSectionProps {
  experiences: Experience[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export interface EducationSectionProps {
  education: Education[];
}

export interface Skill {
  name: string;
  iconClass: string;
}

export interface SkillSectionProps {
  skills: Skill[];
}
