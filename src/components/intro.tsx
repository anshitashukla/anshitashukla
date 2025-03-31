// src/components/Intro.tsx
import React from "react";
import styled from "styled-components";

const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 0 20px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 3px solid #ff00ff;
`;

const Title = styled.h1`
  font-size: 48px;
  margin: 0;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 24px;
  margin: 10px 0;
  color: #ff00ff;
`;

const Description = styled.p`
  font-size: 16px;
  max-width: 600px;
  margin: 20px 0;
  color: #d3d3d3;
`;

const Button = styled.a`
  background: #ff00ff;
  color: white;
  padding: 10px 30px;
  border-radius: 25px;
  text-decoration: none;
  font-size: 18px;
  text-transform: uppercase;
  &:hover {
    background: #e600e6;
  }
`;

const Intro: React.FC = () => {
  return (
    <IntroContainer id="about">
      <ProfileImage src="https://via.placeholder.com/150" alt="Profile" />
      <Title>Hi, I am Anshita Shukla</Title>
      <Subtitle>Full Stack Developer & Software Engineer</Subtitle>
      <Description>
        I am a skilled Full Stack Developer and Software Engineer with over 4
        years of experience in building scalable web and mobile applications. I
        specialize in JavaScript, React.js, Node.js, and cloud technologies like
        AWS, with a strong focus on performance optimization, microservices, and
        AI integration. I am passionate about creating seamless user experiences
        and solving complex technical challenges. Reach me at 571-579-0839,
        anshitashukla0102@gmail.com, or connect with me on{" "}
        <a
          href="https://linkedin.com/in/anshita-shukla"
          style={{ color: "#ff00ff" }}
        >
          LinkedIn
        </a>
        . Check out my portfolio at{" "}
        <a
          href="https://anshitashukla.netlify.app"
          style={{ color: "#ff00ff" }}
        >
          anshitashukla.netlify.app
        </a>
        .
      </Description>
      <Button href="#">Check Resume</Button>
    </IntroContainer>
  );
};

export default Intro;
