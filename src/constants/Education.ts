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
      "I am pursuing a Master's degree in Computer Science at The George Washington University, where I am actively engaged in both academic and project-based learning. I have completed courses in Design & Analysis of Algorithms, Computer System Architecture, Intro to Computer Vision, Computer Security, Database Management Systems, Machine Learning, and Artificial Intelligence. Throughout my coursework, I have developed strong problem-solving skills, built efficient algorithms, and gained hands-on experience with advanced software development practices.",
  },
  {
    institution: "Technocrats Institute of Technology and Science",
    degree: "Bachelor of Engineering, Computer Science",
    duration: "Aug. 2014 – May 2018",
    image: technocrats,
    description:
      "I completed my Bachelor of Engineering in Computer Science & Engineering from Technocrats Institute of Technology & Science. Throughout the program, I built a strong foundation in core technical subjects such as Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems,Machine Learning, Theory of Computation, Computer Networks, Software Engineering, and Web Technologies. My academic journey was marked by consistent performance and active participation in seminars and group discussions, enhancing both my technical acumen and communication skills. Additionally, I explored advanced topics like Artificial Intelligence and Network Security, which broadened my understanding of emerging technologies and real-world applications.",
  },
];
