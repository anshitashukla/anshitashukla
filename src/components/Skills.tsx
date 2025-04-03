// src/components/Skills.tsx
import React from "react";
import styled from "styled-components";

const SkillsContainer = styled.section`
  padding: 50px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
  color: var(--text-color);
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: var(--text-color);
  margin-bottom: 40px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  background: var(--card-bg);
  padding: 20px;
  border-radius: 10px;
  text-align: left;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: var(--text-color);
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  font-size: 16px;
  margin: 8px 0;
  color: var(--text-color);
`;

const Skills: React.FC = () => {
  return (
    <SkillsContainer id="skills">
      <Title>Skills</Title>
      <Subtitle>
        Here are some of my skills on which I have been working for the past 4
        years.
      </Subtitle>
      <SkillsGrid>
        <SkillCard>
          <SkillTitle>Programming Languages</SkillTitle>
          <SkillList>
            <SkillItem>JavaScript</SkillItem>
            <SkillItem>Python</SkillItem>
            <SkillItem>Java</SkillItem>
            <SkillItem>TypeScript</SkillItem>
            <SkillItem>C</SkillItem>
            <SkillItem>C++</SkillItem>
            <SkillItem>HTML</SkillItem>
            <SkillItem>CSS</SkillItem>
            <SkillItem>SCSS</SkillItem>
          </SkillList>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Frameworks & Libraries</SkillTitle>
          <SkillList>
            <SkillItem>React.js</SkillItem>
            <SkillItem>Node.js</SkillItem>
            <SkillItem>Redux</SkillItem>
            <SkillItem>Express.js</SkillItem>
            <SkillItem>React Native</SkillItem>
            <SkillItem>AngularJS</SkillItem>
            <SkillItem>Spring</SkillItem>
            <SkillItem>Hibernate</SkillItem>
            <SkillItem>Gatsby</SkillItem>
            <SkillItem>Jest</SkillItem>
            <SkillItem>MUI</SkillItem>
            <SkillItem>AntD</SkillItem>
            <SkillItem>Bootstrap</SkillItem>
            <SkillItem>React Bootstrap</SkillItem>
          </SkillList>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Cloud & Database</SkillTitle>
          <SkillList>
            <SkillItem>AWS Elastic Beanstalk</SkillItem>
            <SkillItem>Amazon Cognito</SkillItem>
            <SkillItem>Amazon EC2</SkillItem>
            <SkillItem>Elasticsearch</SkillItem>
            <SkillItem>MySQL</SkillItem>
            <SkillItem>MongoDB</SkillItem>
          </SkillList>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Tools</SkillTitle>
          <SkillList>
            <SkillItem>Git</SkillItem>
            <SkillItem>Postman</SkillItem>
            <SkillItem>MongoDB Compass</SkillItem>
            <SkillItem>JIRA</SkillItem>
            <SkillItem>CircleCI</SkillItem>
            <SkillItem>VS Code</SkillItem>
            <SkillItem>Asana</SkillItem>
            <SkillItem>Figma</SkillItem>
          </SkillList>
        </SkillCard>
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
