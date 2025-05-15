export interface Experience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
  image: string;
  location: string;
  skills: string[];
}

export interface ExperienceSectionProps {
  experiences: Experience[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  image: string;
}

export interface EducationSectionProps {
  education: Education[];
}

export interface Skill {
  name: string;
  iconClass: string;
  percentage: number;
}

export interface SkillSectionProps {
  skills: Skill[];
}
