import { useEffect, useState } from "react";
import { Menu, Github, Mail, Linkedin, X } from "lucide-react";
import ExperienceSection from "./components/ExperienceCard";
import EducationSection from "./components/Education";
import anshitaImage from "../src/assets/images/anshitashukla.jpeg";
import ProjectsSection from "./components/Projects";
import Preloader from "./components/preloader";
import "./index.css";
import { ReactTyped } from "react-typed";
import SkillsPage from "./components/Skills";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState<boolean>(true);

  // Hide preloader after a fixed 3-second delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {visible ? (
        <Preloader />
      ) : (
        <div className="min-h-screen from-blue-200 to-purple-300">
          <header className="bg-primary text-white shadow-sm fixed top-0 left-0 right-0 z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <h1 className="text-xl font-bold">Anshita Shukla</h1>
                <nav className="hidden md:flex space-x-8">
                  <a href="#about" className=" hover:text-gray-300">
                    About
                  </a>
                  <a href="#skills" className=" hover:text-gray-300">
                    Skills
                  </a>
                  <a href="#experience" className=" hover:text-gray-300">
                    Experience
                  </a>
                  <a href="#projects" className=" hover:text-gray-300">
                    Projects
                  </a>
                  <a href="#education" className=" hover:text-gray-300">
                    Education
                  </a>
                </nav>
                <button
                  className="md:hidden"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6 " />
                  ) : (
                    <Menu className="h-6 w-6 " />
                  )}
                </button>
              </div>
              {isMobileMenuOpen && (
                <nav className="md:hidden bg-white/90 text-gray-900 shadow-lg absolute top-full left-0 w-full flex flex-col space-y-4 py-4 px-4 z-20">
                  <a href="#about" className=" hover:text-primary">
                    About
                  </a>
                  <a href="#skills" className=" hover:text-primary">
                    Skills
                  </a>
                  <a href="#experience" className=" hover:text-primary">
                    Experience
                  </a>
                  <a href="#projects" className=" hover:text-primary">
                    Projects
                  </a>
                  <a href="#education" className=" hover:text-primary">
                    Education
                  </a>
                </nav>
              )}
            </div>
          </header>

          <section
            id="red"
            className="relative bg-primary text-center pb-24 overflow-hidden pt-40 md:mt-0"
          >
            {/* <HeroBackground /> */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <img
                src={anshitaImage}
                alt="Anshita Shukla"
                className="rounded-full w-32 h-32 mx-auto mb-6"
              />
              <p className="sm:text-2xl text-white">I am </p>
              <ReactTyped
                strings={[
                  "Fullstack Developer",
                  "Software Engineer",
                  "Web Developer",
                  "Mobile App Developer",
                ]}
                className="text-3xl text-white font-bold  sm:text-5xl"
                typeSpeed={60}
                backSpeed={30}
                loop={true}
              />
              <p className="mt-6 text-xl max-w-2xl mx-auto text-white">
                Passionate about building scalable applications and solving
                complex problems with clean, efficient code.
              </p>
              <div className="mt-8 flex justify-center space-x-6">
                {/* <button
                  type="button"
                  className="relative py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white border-2 border-white hover:text-purple-900 focus:outline-none focus:ring-2 focus:ring-white overflow-hidden group self-center"
                >
                  <span className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  <span className="relative z-10">Resume</span>
                </button> */}
                {/* <a
                  href="https://drive.google.com/file/d/1ssclFxwHlX724jugj0cFDP6dUwmj5WI7/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button
                    type="button"
                    className="relative py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white border-2 border-white hover:text-purple-900 focus:outline-none focus:ring-2 focus:ring-white overflow-hidden group self-center"
                  >
                    <span className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    <span className="relative z-10">Resume</span>
                  </button>
                </a> */}

                <a
                  href="https://github.com/anshitashukla"
                  className="text-white hover:text-gray-300 self-center"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/anshita-shukla"
                  className="text-white hover:text-gray-300 self-center"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:anshitashukla0102@gmail.com"
                  className="text-white hover:text-gray-300 self-center"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </section>

          {/* Skills */}
          <SkillsPage />

          {/* Experience */}
          <ExperienceSection />
          {/* <Timeline items={timelineItems} /> */}

          {/* Projects */}
          <ProjectsSection />

          {/* Education */}
          <EducationSection />

          <footer className="bg-gray-900 text-white py-2 text-center">
            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="https://github.com/anshitashukla"
                className="text-gray-500 hover:text-gray-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/anshita-shukla"
                className="text-gray-500 hover:text-gray-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:anshitashukla0102@gmail.com"
                className="text-gray-500 hover:text-gray-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p>© 2025 Anshita Shukla. All rights reserved.</p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default App;
