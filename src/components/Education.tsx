import { EducationSectionProps } from "../interfaces/experience.interface";

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section id="education" className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Education
        </h2>
        {education.map((edu, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6 mb-2">
            <h3 className="text-xl font-semibold text-gray-900">
              {edu.institution}
            </h3>
            <p className="text-gray-600">
              {edu.degree} ({edu.duration})
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
