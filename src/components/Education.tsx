// src/components/Education.tsx
import React from "react";
import styled from "styled-components";

const EducationContainer = styled.section`
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  &:before {
    content: "";
    position: absolute;
    width: 4px;
    background: #ff00ff;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const TimelineItem = styled.div<{ side: "left" | "right" }>`
  display: flex;
  justify-content: ${({ side }) =>
    side === "left" ? "flex-end" : "flex-start"};
  padding: 20px;
  position: relative;
  width: 50%;
  ${({ side }) => (side === "left" ? "margin-left: 0;" : "margin-left: 50%;")}

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background: #ff00ff;
    border-radius: 50%;
    top: 30px;
    ${({ side }) => (side === "left" ? "right: -10px;" : "left: -10px;")}
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    justify-content: flex-start;
    &:before {
      left: -10px;
    }
  }
`;

const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  text-align: left;
  width: 90%;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const TimelineTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: white;
`;

const TimelineDate = styled.p`
  font-size: 16px;
  color: #ff00ff;
  margin-bottom: 10px;
`;

const TimelineDescription = styled.p`
  font-size: 16px;
  color: #d3d3d3;
`;

const Education: React.FC = () => {
  return (
    <EducationContainer id="education">
      <Title>Education</Title>
      <Subtitle>
        My education has been a journey of self-discovery and growth. My
        educational details are as follows.
      </Subtitle>
      <Timeline>
        <TimelineItem side="left">
          <TimelineContent>
            <TimelineTitle>
              George Washington University, Washington, DC
            </TimelineTitle>
            <TimelineDate>Jan 2024 - Dec 2025</TimelineDate>
            <TimelineDescription>
              Master of Science in Computer Science.
            </TimelineDescription>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem side="right">
          <TimelineContent>
            <TimelineTitle>
              Technocrats Institute of Technology and Science, Bhopal, MP, India
            </TimelineTitle>
            <TimelineDate>Aug 2014 - May 2018</TimelineDate>
            <TimelineDescription>Bachelor of Engineering.</TimelineDescription>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </EducationContainer>
  );
};

export default Education;
