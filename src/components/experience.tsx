// src/components/Experience.tsx
import React from "react";
import styled from "styled-components";

const ExperienceContainer = styled.section`
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

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

const SkillItem = styled.li`
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 5px 10px;
  border-radius: 15px;
  margin: 5px;
  font-size: 14px;
  color: white;
`;

const Experience: React.FC = () => {
  return (
    <ExperienceContainer id="experience">
      <Title>Experience</Title>
      <Subtitle>
        My work experience as a software engineer and full stack developer
        across various companies.
      </Subtitle>
      <Timeline>
        <TimelineItem side="left">
          <TimelineContent>
            <TimelineTitle>
              Full Stack Developer Intern - Eva Eco System Inc.
            </TimelineTitle>
            <TimelineDate>Feb 2025 - Mar 2025</TimelineDate>
            <TimelineDescription>
              Implemented GPS-based tracking using React Native Geolocation,
              Google Maps API, and Mapbox, enabling seamless valet dispatch and
              live tracking. Built authentication flow using Apple Login, Google
              OAuth, and JWT token-based authentication. Implemented a dynamic
              pricing algorithm for parking rates using Machine Learning and
              Time-Series Analysis, optimizing revenue and demand distribution.
              Integrated AI-powered chat support in Python using Dialogflow and
              OpenAI GPT API, enhancing customer interactions and automating
              responses.
            </TimelineDescription>
            <SkillsList>
              <SkillItem>React Native</SkillItem>
              <SkillItem>Google Maps API</SkillItem>
              <SkillItem>Mapbox</SkillItem>
              <SkillItem>Apple Login</SkillItem>
              <SkillItem>Google OAuth</SkillItem>
              <SkillItem>JWT</SkillItem>
              <SkillItem>Machine Learning</SkillItem>
              <SkillItem>Time-Series Analysis</SkillItem>
              <SkillItem>Python</SkillItem>
              <SkillItem>Dialogflow</SkillItem>
              <SkillItem>OpenAI GPT API</SkillItem>
            </SkillsList>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem side="right">
          <TimelineContent>
            <TimelineTitle>
              Software Engineer 3 - Scaler Technology Solutions LLP
            </TimelineTitle>
            <TimelineDate>Jul 2022 - Dec 2023</TimelineDate>
            <TimelineDescription>
              Led a team of 6 to build microservices using Node.js, Express.js,
              and TypeScript, automating 30% of carrier onboarding with REST
              APIs and MongoDB, scaling insurance quotes from $300k to $1M in 3
              months. Designed a micro-frontend architecture for a responsive
              React.js app, leveraging Ant Design and Redux, achieving 40%
              faster load times. Integrated Stripe and PayPal payment gateways,
              boosting revenue by 60% with a 35% increase in successful
              transactions. Implemented authentication using Amazon Cognito with
              OAuth2.0 support, integrated Amazon SNS for MFA and Amazon SES for
              email notifications, enhancing security and user experience.
              Improved user engagement by 35% through dynamic routing and web
              push notifications using Firebase. Enhanced user experience by
              building Socket.IO for real-time carrier quote generation, cutting
              latency by 15%. Enhanced search capabilities by integrating
              Elasticsearch, enabling fast and efficient search functionality
              for large datasets. Optimized application performance using
              Webpack, reducing bundle size by 20% and improving load times.
              Streamlined CI/CD with GitHub Actions, automating build, test, and
              deployment for faster, consistent releases.
            </TimelineDescription>
            <SkillsList>
              <SkillItem>Node.js</SkillItem>
              <SkillItem>Express.js</SkillItem>
              <SkillItem>TypeScript</SkillItem>
              <SkillItem>REST APIs</SkillItem>
              <SkillItem>MongoDB</SkillItem>
              <SkillItem>React.js</SkillItem>
              <SkillItem>Ant Design</SkillItem>
              <SkillItem>Redux</SkillItem>
              <SkillItem>Stripe</SkillItem>
              <SkillItem>PayPal</SkillItem>
              <SkillItem>Amazon Cognito</SkillItem>
              <SkillItem>OAuth2.0</SkillItem>
              <SkillItem>Amazon SNS</SkillItem>
              <SkillItem>Amazon SES</SkillItem>
              <SkillItem>Firebase</SkillItem>
              <SkillItem>Socket.IO</SkillItem>
              <SkillItem>Elasticsearch</SkillItem>
              <SkillItem>Webpack</SkillItem>
              <SkillItem>GitHub Actions</SkillItem>
            </SkillsList>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem side="left">
          <TimelineContent>
            <TimelineTitle>
              Software Engineer 2 - Scaler Technology Solutions LLP
            </TimelineTitle>
            <TimelineDate>Jul 2021 - Jun 2022</TimelineDate>
            <TimelineDescription>
              Integrated OAuth for login and sign-up with Google and Facebook in
              a React Native app, boosting 40% user registrations. Integrated
              video calling via Twilio SDK, enriching communication features and
              enhancing user experience. Enhanced app stability by integrating
              Firebase, achieving a 99% crash-free rate. Incorporated CleverTap
              for push notifications and analytics, resulting in a 25% increase
              in user engagement. Fortified security with a React Native
              Security Toolkit, reducing vulnerabilities by 60% and enhancing
              protection.
            </TimelineDescription>
            <SkillsList>
              <SkillItem>React Native</SkillItem>
              <SkillItem>OAuth</SkillItem>
              <SkillItem>Google</SkillItem>
              <SkillItem>Facebook</SkillItem>
              <SkillItem>Twilio SDK</SkillItem>
              <SkillItem>Firebase</SkillItem>
              <SkillItem>CleverTap</SkillItem>
              <SkillItem>React Native Security Toolkit</SkillItem>
            </SkillsList>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem side="right">
          <TimelineContent>
            <TimelineTitle>
              Software Engineer 1 - Scaler Technology Solutions LLP
            </TimelineTitle>
            <TimelineDate>Nov 2020 - Jun 2021</TimelineDate>
            <TimelineDescription>
              Migrated legacy frontend to a modern React.js, Redux, and SCSS
              stack, enhancing performance and maintainability. Integrated React
              Data Table Component for data management, editing, and
              visualization. Developed a web app MVP with multiple insurance
              carrier API integrations, enabling streamlined insurance data
              processing and securing client funding. Achieved 100% code
              coverage using Jest by writing extensive test cases, ensuring
              application reliability.
            </TimelineDescription>
            <SkillsList>
              <SkillItem>React.js</SkillItem>
              <SkillItem>Redux</SkillItem>
              <SkillItem>SCSS</SkillItem>
              <SkillItem>React Data Table</SkillItem>
              <SkillItem>API Integration</SkillItem>
              <SkillItem>Jest</SkillItem>
            </SkillsList>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem side="left">
          <TimelineContent>
            <TimelineTitle>
              Associate Software Engineer - Mphasis Ltd.
            </TimelineTitle>
            <TimelineDate>Sep 2019 - Feb 2020</TimelineDate>
            <TimelineDescription>
              Built a Java Spring Boot microservice, reducing redundant queries
              by 75% and improving data delivery speed. Developed RESTful APIs
              with versioning and security, enabling seamless communication
              between microservices. Optimized SQL queries with indexing and
              refactored joins, reducing Oracle query execution time by 30%.
              Wrote tests with JUnit and Mockito, achieving 90% coverage and
              reducing bugs by 25%. Integrated JSP and Servlets for dynamic web
              pages, improving usability for enterprise applications.
            </TimelineDescription>
            <SkillsList>
              <SkillItem>Java</SkillItem>
              <SkillItem>Spring Boot</SkillItem>
              <SkillItem>REST APIs</SkillItem>
              <SkillItem>SQL</SkillItem>
              <SkillItem>Oracle</SkillItem>
              <SkillItem>JUnit</SkillItem>
              <SkillItem>Mockito</SkillItem>
              <SkillItem>JSP</SkillItem>
              <SkillItem>Servlets</SkillItem>
            </SkillsList>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </ExperienceContainer>
  );
};

export default Experience;
