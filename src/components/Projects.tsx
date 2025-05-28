import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import personalAIAssistant from "../assets/images/projects/personalAIAssistant.png";
import growEasy from "../assets/images/projects/growEasy.png";
import imageCorruption from "../assets/images/projects/imageCorruption.webp";
import easyBill from "../assets/images/projects/easyBill.png";

// Define the Project interface based on the expected structure
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  webapp: string;
  category: string;
}

// Mock data for projects (replace with actual import if available)
export const projects = [
  {
    id: 0,
    title: "Personal AI Assistant",
    date: "Dec 2023 - March 2024",
    description:
      "A personal AI chatbot powered by Google AI Studio and Gemini is a customizable, interactive tool designed to provide on-demand information about an individual (e.g., you) based on preloaded data or user queries.",
    image: personalAIAssistant,
    tags: ["Next.js", "React.js", "Tailwind CSS", "Google AI Studio", "Gemini"],
    category: "machine learning",
    github: "https://github.com/anshitashukla/Personal-AI-Chatbot",
    webapp: "https://anshitashuklapersonalaichatbot.netlify.app/",
    member: [
      {
        name: "Anshita Shukla",
        img: "https://avatars.githubusercontent.com/u/46316966?v=4",
        linkedin: "https://www.linkedin.com/in/anshita-shukla/",
        github: "https://github.com/anshitashukla",
      },
    ],
  },
  {
    id: 1,
    title: "Easy Bill",
    date: "May 2025",
    description:
      "Easy-Bill is a user-friendly billing application designed to streamline invoice creation and management. Built with modern web technologies, it offers an intuitive interface for generating professional invoices quickly.",
    image: easyBill,
    // image: "https://image.architonic.com/pro1-3/20182762/ps-1440-z-pro-sq-arcit18.jpg",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "React Bootstrap"],
    category: "web app",
    github: "https://github.com/anshitashukla/Easy-Bill",
    webapp: "https://anshitashuklaeasybill.netlify.app/",
    member: [
      {
        name: "Anshita Shukla",
        img: "https://avatars.githubusercontent.com/u/46316966?v=4",
        linkedin: "https://www.linkedin.com/in/anshita-shukla/",
        github: "https://github.com/anshitashukla",
      },
    ],
  },
  {
    id: 2,
    title: "Grow Easy",
    date: "Jan 2025",
    description:
      "The Grow Easy AI Micro-Learning App is a React Native-based mobile application that delivers bite-sized, interactive lessons through an AI-powered chatbot, enabling users to learn on the go with a seamless and engaging experience.",
    image: growEasy,
    // image: "https://image.architonic.com/pro1-3/20182762/ps-1440-z-pro-sq-arcit18.jpg",
    tags: [
      "React Native",
      "TypeScript",
      "npm",
      "Google AI Studio",
      "Node.js",
      "JavaScript",
    ],
    category: "mobile app",
    github: "https://github.com/anshitashukla/Grow-Easy-AI-Micro-Learning-APP",
    webapp: "",
    member: [
      {
        name: "Anshita Shukla",
        img: "https://avatars.githubusercontent.com/u/46316966?v=4",
        linkedin: "https://www.linkedin.com/in/anshita-shukla/",
        github: "https://github.com/anshitashukla",
      },
    ],
  },
  {
    id: 3,
    title: "ResNet50-PyTorch-ImageCorruption-Accuracy",
    date: "Jan 2025",
    description:
      "The ResNet50-PyTorch-ImageCorruption-Accuracy project is a Python-based implementation using PyTorch to evaluate the ResNet50 model's performance on image classification tasks under various image corruption scenarios, analyzing accuracy impacts with datasets processed through NumPy, Matplotlib, and PIL for robust computer vision research.",
    image: imageCorruption,
    // image: "https://image.architonic.com/pro1-3/20182762/ps-1440-z-pro-sq-arcit18.jpg",
    tags: [
      "PyTorch",
      "Python",
      "Jupyter Notebook",
      "NumPy",
      "Matplotlib",
      "PIL",
    ],
    category: "machine learning",
    github:
      "https://github.com/anshitashukla/ResNet50-PyTorch-ImageCorruption-Accuracy",
    webapp: "",
    member: [
      {
        name: "Anshita Shukla",
        img: "https://avatars.githubusercontent.com/u/46316966?v=4",
        linkedin: "https://www.linkedin.com/in/anshita-shukla/",
        github: "https://github.com/anshitashukla",
      },
    ],
  },
];

// Styled components with theme matching https://anshitashukla.netlify.app/
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  color: #ffffff; /* White text matching the site */
  font-family: "Poppins", sans-serif; /* Matching the site's font */
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 400;
  color: #a0aec0; /* Light gray text for description */
  font-family: "Poppins", sans-serif;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid #6b46c1; /* Purple accent from the site */
  color: rgb(255, 255, 255);
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  font-family: "Poppins", sans-serif;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div<{ active?: boolean }>`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition like the site */
  background-color: ${(props) => (props.active ? "#6b46c1" : "transparent")};
  color: ${(props) => (props.active ? "#ffffff" : "rgb(255, 255, 255)")};
  &:hover {
    background-color: #6b46c1; /* Purple on hover */
    color: #ffffff;
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
    font-size: 12px;
  }
  @media (max-width: 500px) {
    padding: 6px 8px;
    border-radius: 4px;
    font-size: 10px;
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background: #6b46c1;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects: React.FC = () => {
  const [toggle, setToggle] = useState<string>("all");

  const handleToggle = (category: string) => {
    setToggle(category);
  };

  return (
    <Container id="projects" className="bg-primary">
      <Wrapper>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Projects
        </h2>
        <Desc style={{ marginBottom: "10px" }}>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => handleToggle("all")}
          >
            ALL
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "web app"}
            onClick={() => handleToggle("web app")}
          >
            WEB APPS
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "machine learning"}
            onClick={() => handleToggle("machine learning")}
          >
            AI/MACHINE LEARNING
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "mobile app"}
            onClick={() => handleToggle("mobile app")}
          >
            MOBILE APP
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} project={project} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard key={`project-${index}`} project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
