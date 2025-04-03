// src/App.tsx
import React from "react";
import "./App.css";
import Snowflakes from "./components/snowflakes";
import Intro from "./components/intro";
import Skills from "./components/skills";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Header from "./components/header";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default App;
