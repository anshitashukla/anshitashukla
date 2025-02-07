export interface Experience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface ExperienceSectionProps {
  experiences: Experience[];
}
