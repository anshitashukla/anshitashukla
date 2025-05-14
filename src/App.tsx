import { useEffect, useState } from "react";
import { Menu, Github, Mail, Linkedin, X } from "lucide-react";
import ExperienceSection from "./components/ExperienceCard";
import EducationSection from "./components/Education";
import { education } from "./constants/Education";
import anshitaImage from "../src/assets/images/anshitashukla.jpeg";
import ProjectsSection from "./components/Projects";
import { projects } from "./constants/Projects";
import Preloader from "./components/preloader";
import "./index.css";
import { ReactTyped } from "react-typed";
import SkillsPage from "./components/Skills";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState<boolean>(true);
  const [currentText, setCurrentText] = useState("");

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
          <header className="bg-primary text-white shadow-sm relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <h1 className="text-xl font-bold">Anshita Shukla</h1>
                <nav className="hidden md:flex space-x-8">
                  <a href="#about" className=" hover:">
                    About
                  </a>
                  <a href="#skills" className=" hover:">
                    Skills
                  </a>
                  <a href="#experience" className=" hover:">
                    Experience
                  </a>
                  <a href="#projects" className=" hover:">
                    Projects
                  </a>
                  <a href="#education" className=" hover:">
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
                <nav className="md:hidden bg-white/90 text-gray-900 shadow-lg absolute top-full left-0 w-full flex flex-col space-y-4 py-4 z-20">
                  <a href="#about" className=" hover:">
                    About
                  </a>
                  <a href="#skills" className=" hover:">
                    Skills
                  </a>
                  <a href="#experience" className=" hover:">
                    Experience
                  </a>
                  <a href="#education" className=" hover:">
                    Education
                  </a>
                </nav>
              )}
            </div>
          </header>

          <section
            id="red"
            className="relative bg-primary text-center py-24 overflow-hidden"
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
                <a
                  href="https://github.com/anshitashukla"
                  className="text-white hover:"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/anshita-shukla"
                  className="text-white hover:"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:anshitashukla0102@gmail.com"
                  className="text-white hover:"
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
          <ProjectsSection projects={projects} />

          {/* Education */}
          <EducationSection education={education} />

          <footer className="bg-gray-900 text-white py-2 text-center">
            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="https://github.com/anshitashukla"
                className="text-gray-500 hover:"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/anshita-shukla"
                className="text-gray-500 hover:"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:anshitashukla0102@gmail.com"
                className="text-gray-500 hover:"
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
