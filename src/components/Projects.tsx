import { projects } from "../constants/Projects";

const ProjectsSection: React.FC<{ projects: typeof projects }> = ({
  projects,
}) => {
  return (
    <section id="projects" className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {project.name}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <p className="mt-2 text-gray-700 font-medium">
                Tech Stack: {project.techStack.join(", ")}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
