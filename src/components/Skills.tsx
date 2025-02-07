import { Skill, SkillSectionProps } from "../interfaces/experience.interface";

const SkillsSection: React.FC<SkillSectionProps> = ({ skills }) => {
  return (
    <section id="skills" className="bg-gray-900 py-16 text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <i className={`${skill.iconClass} text-4xl`}></i>
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
