// src/components/Projects.tsx
import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  padding: 50px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #d3d3d3;
  margin-bottom: 40px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  text-align: left;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: white;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
  color: #d3d3d3;
`;

const Button = styled.a`
  background: #ff00ff;
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
  margin-right: 10px;
  &:hover {
    background: #e600e6;
  }
`;

const Projects: React.FC = () => {
  return (
    <ProjectsContainer id="projects">
      <Title>Projects</Title>
      <Subtitle>
        I have worked on a wide range of projects, from web apps to Android
        apps. Here are some of my projects.
      </Subtitle>
      <ProjectsGrid>
        <ProjectCard>
          <ProjectImage
            src="https://via.placeholder.com/300x150"
            alt="Project 1"
          />
          <ProjectTitle>Project 1</ProjectTitle>
          <ProjectDescription>
            A placeholder project description. Add your project details here.
          </ProjectDescription>
          <Button href="#">View Code</Button>
          <Button href="#">Visit Site</Button>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage
            src="https://via.placeholder.com/300x150"
            alt="Project 2"
          />
          <ProjectTitle>Project 2</ProjectTitle>
          <ProjectDescription>
            A placeholder project description. Add your project details here.
          </ProjectDescription>
          <Button href="#">View Code</Button>
          <Button href="#">Visit Site</Button>
        </ProjectCard>
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
