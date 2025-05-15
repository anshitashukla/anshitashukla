// import { projects } from "../constants/Projects";

// const ProjectsSection: React.FC<{ projects: typeof projects }> = ({
//   projects,
// }) => {
//   return (
//     <section id="projects" className="bg-primary py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-white mb-8 text-center">
//           Projects
//         </h2>
//         <div className="space-y-6">
//           {projects.map((project, index) => (
//             <div key={index} className="bg-white shadow rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-gray-900">
//                 {project.name}
//               </h3>
//               <p className="text-gray-600 mt-2">{project.description}</p>
//               <p className="mt-2 text-gray-700 font-medium">
//                 Tech Stack: {project.techStack.join(", ")}
//               </p>
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-4 inline-block text-blue-600 hover:underline"
//               >
//                 View Project
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;

// import React, { useState } from "react";
// import styled from "styled-components";

// // Define the Project interface based on the expected structure
// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   github: string;
//   webapp: string;
//   category: string;
// }

// // Mock data for projects (replace with actual import if available)
// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Project 1",
//     description: "Description 1",
//     image: "",
//     github: "",
//     webapp: "",
//     category: "web app",
//   },
//   {
//     id: 2,
//     title: "Project 2",
//     description: "Description 2",
//     image: "",
//     github: "",
//     webapp: "",
//     category: "machine learning",
//   },
// ];

// // Styled components with theme matching https://anshitashukla.netlify.app/
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 0 16px;
//   position: relative;
//   z-index: 1;
//   align-items: center;
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1100px;
//   gap: 12px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

// const Title = styled.div`
//   font-size: 52px;
//   text-align: center;
//   font-weight: 600;
//   color: #ffffff; /* White text matching the site */
//   font-family: "Poppins", sans-serif; /* Matching the site's font */
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 32px;
//   }
// `;

// const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   font-weight: 400;
//   color: #a0aec0; /* Light gray text for description */
//   font-family: "Poppins", sans-serif;
//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const ToggleButtonGroup = styled.div`
//   display: flex;
//   border: 1.5px solid #6b46c1; /* Purple accent from the site */
//   color: rgb(255, 255, 255);
//   font-size: 16px;
//   border-radius: 12px;
//   font-weight: 500;
//   margin: 22px 0;
//   font-family: "Poppins", sans-serif;
//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const ToggleButton = styled.div`
//   padding: 8px 18px;
//   border-radius: 6px;
//   cursor: pointer;
//   transition: background-color 0.3s ease; /* Smooth transition like the site */
//   &:hover {
//     background-color: #6b46c1; /* Purple on hover */
//     color: #ffffff;
//   }
//   @media (max-width: 768px) {
//     padding: 6px 8px;
//     border-radius: 4px;
//   }
// `;

// const Divider = styled.div`
//   width: 1.5px;
//   background: #6b46c1;
// `;

// const CardContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 28px;
//   flex-wrap: wrap;
// `;

// // ProjectCard component (simplified mock)
// const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
//   <div
//     style={{
//       background: "#2D3748",
//       padding: "20px",
//       borderRadius: "8px",
//       color: "#FFFFFF",
//       fontFamily: "Poppins, sans-serif",
//     }}
//   >
//     {project.title}
//   </div>
// );

// const Projects: React.FC = () => {
//   const [toggle, setToggle] = useState<string>("all");

//   const handleToggle = (category: string) => {
//     setToggle(category);
//   };

//   return (
//     <Container id="Projects" className="bg-primary">
//       <Wrapper>
//         <h2 className="text-3xl font-bold text-white mb-8 text-center">
//           Projects
//         </h2>
//         <Desc style={{ marginBottom: "10px" }}>
//           I have worked on a wide range of projects. From web apps to android
//           apps. Here are some of my projects.
//         </Desc>
//         <ToggleButtonGroup>
//           <ToggleButton onClick={() => handleToggle("all")}>ALL</ToggleButton>
//           <Divider />
//           <ToggleButton onClick={() => handleToggle("web app")}>
//             WEB APPS
//           </ToggleButton>
//           <Divider />
//           <ToggleButton onClick={() => handleToggle("machine learning")}>
//             MACHINE LEARNING
//           </ToggleButton>
//         </ToggleButtonGroup>
//         <CardContainer>
//           {toggle === "all" &&
//             projects.map((project, index) => (
//               <ProjectCard key={`project-${index}`} project={project} />
//             ))}
//           {projects
//             .filter((item) => item.category === toggle)
//             .map((project, index) => (
//               <ProjectCard key={`project-${index}`} project={project} />
//             ))}
//         </CardContainer>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Projects;

import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

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
    title: "Evently",
    date: "Dec 2023 - March 2024",
    description:
      "A full-stack event management platform with Clerk authentication and Stripe payments for seamless event creation and engagement.",
    image: "https://alpha-stark.github.io/images/Evently.png",
    tags: [
      "Next.js",
      "React.js",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Stripe",
      "Tailwind CSS",
    ],
    category: "web app",
    github: "https://github.com/Alpha-Stark/Evently",
    webapp: "https://alpha-evently.vercel.app/",
    member: [
      {
        name: "Mann Savani",
        img: "https://alpha-stark.github.io/images/MannSavani.jpg",
        linkedin: "https://www.linkedin.com/in/mann-savani/",
        github: "https://github.com/Alpha-Stark",
      },
      {
        name: "Hardi Virani",
        img: "https://alpha-stark.github.io/images/Hardi1a.jpg",
        linkedin: "https://www.linkedin.com/in/hardi-virani/",
        github: "https://github.com/hardi-virani",
      },
    ],
  },
  /* {
      id: 1,
      title: "Atreus",
      date: "Aug 2023",
      description: "A social media platform built using Spring Boot and Next.js, supporting real-time posting, AWS S3 media storage, and interactive feeds.",
      tags: ["Spring Boot", "Next.js", "MySQL", "NextAuth", "AWS S3"],
      github: "https://github.com/Alpha-Stark/Atreus",
  }, */
  {
    id: 2,
    title: "Data Fort",
    date: "Aug 2023",
    description:
      "A secure Ethereum-based storage solution for drone images, integrating blockchain for data integrity and ML models for image processing.",
    image: "https://alpha-stark.github.io/images/DataFort.png",
    // image: "https://image.architonic.com/pro1-3/20182762/ps-1440-z-pro-sq-arcit18.jpg",
    tags: ["Next.js", "React.js", "Solidity", "Tailwind CSS", "Pinata"],
    category: "machine learning",
    github: "https://github.com/Alpha-Stark/DataFort",
    webapp: "https://datafort-1761ff.spheron.app/",
    member: [
      {
        name: "Mann Savani",
        img: "https://alpha-stark.github.io/images/MannSavani.jpg",
        linkedin: "https://www.linkedin.com/in/mann-savani/",
        github: "https://github.com/Alpha-Stark",
      },
      {
        name: "Hardi Virani",
        img: "https://alpha-stark.github.io/images/Hardi1a.jpg",
        linkedin: "https://www.linkedin.com/in/hardi-virani/",
        github: "https://github.com/hardi-virani",
      },
    ],
  },
  {
    id: 2,
    title: "Promptopia",
    date: "Nov 2023 - Dec 2023",
    description:
      "Promptopia serves as an open-source prompting tool, enabling users to discover, craft, and share creative prompts effortlessly.",
    image: "https://alpha-stark.github.io/images/Promptopia.png",
    tags: [
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
      "Tailwind CSS",
    ],
    category: "web app",
    github: "https://github.com/Alpha-Stark/Promptopia",
    webapp: "https://alpha-promptopia.vercel.app/",
  },
  {
    id: 3,
    title: "GitHub Profile Finder",
    date: "Oct 2023 - Nov 2023",
    description:
      "App to explore GitHub users & their profiles for efficient searches & info display.",
    image: "https://alpha-stark.github.io/images/GitHubFinder.png",
    tags: ["React Js", "Node Js", "Express Js", "GitHub API", "Tailwind CSS"],
    category: "web app",
    github: "https://github.com/Alpha-Stark/github-finder-app",
    webapp: "https://alpha-github-finder.vercel.app/",
  },
  {
    id: 4,
    title: "Yelp Camp",
    date: "May 2023 - Sep 2023",
    description:
      "YelpCamp, a full-stack website, allows users to create, review campgrounds, featuring map integration for exploring campground clusters. Built with Node.js, Express, MongoDB, Bootstrap, and Passport.js for authentication.",
    image: "https://alpha-stark.github.io/images/YelpCamp.png",
    tags: ["MongoDb", "Node Js", "Express Js", "Tailwind CSS"],
    category: "web app",
    github: "https://github.com/Alpha-Stark/YelpCamp",
    webapp: "",
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
    <Container id="Projects" className="bg-primary">
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
