import scalex from "../assets/images/scalex.png";
import mphasis from "../assets/images/mphasis.png";
import evaeco from "../assets/images/evaeco.jpeg";
import gwu from "../assets/images/gw.png";

export const profile = {
  name: "Anshita Shukla",
  headline: "Software Engineer · Full-Stack & Distributed Systems",
  location: "Washington, D.C.",
  status: "Open to Software Engineer roles (Full-time)",
  email: "anshitashukla0102@gmail.com",
  linkedin: "https://linkedin.com/in/anshita-shukla",
  github: "https://github.com/anshitashukla",
  resumeMailto:
    "mailto:anshitashukla0102@gmail.com?subject=Resume%20Request%20%E2%80%94%20Anshita%20Shukla",
  educationHighlight: "MS Computer Science · George Washington University",
  elevator:
    "I build production systems that scale — microservices, cloud-native backends, and high-polish React products. Previously led a team of 6 shipping platforms to 1M+ users with measurable revenue and performance gains.",
};

export const impactMetrics = [
  { value: "1M+", label: "Users on platforms shipped", context: "Scalex" },
  { value: "60%", label: "Revenue growth via payments", context: "Stripe · PayPal" },
  { value: "40%", label: "Faster frontend load time", context: "Micro-frontend" },
  { value: "6", label: "Engineers led", context: "Scalex" },
  { value: "90%", label: "Test coverage achieved", context: "Mphasis · JUnit" },
  { value: "20%", label: "Bundle size reduction", context: "Webpack" },
] as const;

export const companies = [
  { name: "George Washington University", logo: gwu, role: "MS Computer Science" },
  { name: "Scalex Technology", logo: scalex, role: "Software Engineer 3" },
  { name: "Mphasis", logo: mphasis, role: "Associate Software Engineer" },
  { name: "Eva Eco System", logo: evaeco, role: "Full Stack Intern" },
] as const;

export const expertiseAreas = [
  {
    title: "Distributed systems & APIs",
    description:
      "Node.js microservices, REST design, MongoDB, ElasticSearch, real-time Socket.IO, and BFF patterns with Spring Boot.",
    tags: ["Microservices", "Node.js", "TypeScript", "MongoDB", "ElasticSearch"],
  },
  {
    title: "Cloud & production operations",
    description:
      "AWS Cognito, SNS, SES, Elastic Beanstalk; CI/CD with GitHub Actions and Jenkins; secure auth and observability-minded delivery.",
    tags: ["AWS", "Cognito", "CI/CD", "GitHub Actions", "OAuth 2.0"],
  },
  {
    title: "Product engineering",
    description:
      "React & React Native, Redux, micro-frontends, payments (Stripe/PayPal), and performance tuning that users feel.",
    tags: ["React", "React Native", "Redux", "Stripe", "Webpack"],
  },
  {
    title: "Quality & computer science depth",
    description:
      "MS CS coursework in algorithms, systems, ML, and security; Jest/JUnit testing culture and rigorous code review habits.",
    tags: ["Algorithms", "System Design", "Jest", "JUnit", "Machine Learning"],
  },
] as const;

export const engineeringPrinciples = [
  "Optimize for measurable outcomes — latency, revenue, reliability, and team velocity.",
  "Own problems end-to-end: design, implementation, testing, deployment, and iteration.",
  "Default to simple architectures that scale; add complexity only with data.",
  "Write code that the next engineer (and future you) can reason about quickly.",
] as const;

export const recruiterQuickFacts = [
  "5+ years industry experience",
  "Led team of 6 engineers",
  "MS CS @ George Washington University",
  "Full-stack · Backend-leaning",
  "US-based · Open to relocation discussions",
] as const;
