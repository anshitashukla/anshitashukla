import { Education } from "../interfaces/experience.interface";
import gwu from "../assets/images/gw.png";
import technocrats from "../assets/images/technocrats.png";

export const education: Education[] = [
  {
    institution: "George Washington University",
    degree: "Master of Science, Computer Science",
    duration: "Jan. 2024 – Dec. 2025",
    image: gwu,
    description:
      "Pursuing an MS in Computer Science in Washington, D.C., with coursework in algorithms, computer systems, computer vision, security, databases, machine learning, and artificial intelligence.",
  },
  {
    institution: "Technocrats Institute of Technology and Science",
    degree: "Bachelor of Engineering, Computer Science",
    duration: "Aug. 2014 – May 2018",
    image: technocrats,
    description:
      "B.E. in Computer Science from Bhopal, India — foundations in DSA, OOP, OS, DBMS, networks, software engineering, ML, and AI.",
  },
];
