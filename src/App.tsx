import React, { useState } from "react";
import { Menu, Github, Mail, Linkedin, X } from "lucide-react";
import ExperienceSection from "./components/ExperienceCard";
import { experiences } from "./constants/Experience";
import EducationSection from "./components/Education";
import { education } from "./constants/Education";
import SkillsSection from "./components/Skills";
import { skills } from "./constants/skills";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-300">
      <header className="bg-white shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold text-gray-900">Anshita Shukla</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900">
                About
              </a>
              <a
                href="#experience"
                className="text-gray-700 hover:text-gray-900"
              >
                Experience
              </a>
              <a href="#skills" className="text-gray-700 hover:text-gray-900">
                Skills
              </a>
              <a
                href="#education"
                className="text-gray-700 hover:text-gray-900"
              >
                Education
              </a>
            </nav>
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </header>
      <section className="bg-white">
        <img
          src="src/assets/images/anshitashukla.jpeg"
          alt="Anshita Shukla"
          className="rounded-full w-32 h-32 mx-auto "
        />
      </section>

      <section className="bg-white text-center py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Software Engineer
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about building scalable applications and solving complex
            problems with clean, efficient code.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://github.com/anshitashukla"
              className="text-gray-500 hover:text-gray-900"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/anshita-shukla"
              className="text-gray-500 hover:text-gray-900"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:anshitashukla0102@gmail.com"
              className="text-gray-500 hover:text-gray-900"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <SkillsSection skills={skills} />

      {/* Experience */}
      <ExperienceSection experiences={experiences} />

      {/* Education */}
      <EducationSection education={education} />

      <footer className="bg-gray-900 text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© 2025 Anshita Shukla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
