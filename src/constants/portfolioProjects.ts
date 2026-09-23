import personalAIAssistant from "../assets/images/projects/personalAIAssistant.png";
import growEasy from "../assets/images/projects/growEasy.png";
import imageCorruption from "../assets/images/projects/imageCorruption.webp";
import easyBill from "../assets/images/projects/easyBill.png";

export interface PortfolioProject {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  images?: string[];
  tags: string[];
  category: "web app" | "machine learning" | "mobile app";
  github?: string;
  webapp?: string;
  impact: string[];
  highlight?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 0,
    title: "Personal AI Assistant",
    date: "Dec 2023 – Mar 2024",
    description:
      "Production AI chatbot using Google AI Studio and Gemini with a deployable Next.js frontend.",
    image: personalAIAssistant,
    tags: ["Next.js", "Gemini", "React", "TypeScript"],
    category: "machine learning",
    github: "https://github.com/anshitashukla/Personal-AI-Chatbot",
    webapp: "https://anshitashuklapersonalaichatbot.netlify.app/",
    highlight: "Shipped live product with LLM integration",
    impact: [
      "End-to-end ownership from API design to deployed UI",
      "Demonstrates applied AI/ML product thinking",
    ],
  },
  {
    id: 1,
    title: "Easy Bill",
    date: "May 2025",
    description: "Invoice management SaaS with focused UX for creation, tracking, and workflows.",
    image: easyBill,
    tags: ["React", "Tailwind", "TypeScript"],
    category: "web app",
    github: "https://github.com/anshitashukla/Easy-Bill",
    webapp: "https://anshitashuklaeasybill.netlify.app/",
    highlight: "Full product loop — design to deployment",
    impact: [
      "Polished UI suitable for customer-facing demos",
      "Shows product sense and frontend craft",
    ],
  },
  {
    id: 2,
    title: "Grow Easy",
    date: "Jan 2025",
    description: "React Native micro-learning platform with an embedded AI tutoring experience.",
    image: growEasy,
    tags: ["React Native", "TypeScript", "AI"],
    category: "mobile app",
    github: "https://github.com/anshitashukla/Grow-Easy-AI-Micro-Learning-APP",
    impact: [
      "Cross-platform mobile architecture",
      "Combines education UX with conversational AI",
    ],
  },
  {
    id: 3,
    title: "ResNet50 Image Corruption Study",
    date: "Jan 2025",
    description:
      "PyTorch research pipeline evaluating ResNet50 robustness under structured corruption scenarios.",
    image: imageCorruption,
    tags: ["PyTorch", "Python", "Computer Vision"],
    category: "machine learning",
    github: "https://github.com/anshitashukla/ResNet50-PyTorch-ImageCorruption-Accuracy",
    highlight: "Research-grade ML experimentation",
    impact: [
      "Reproducible training and evaluation workflow",
      "Aligns with MS CS computer vision coursework",
    ],
  },
];
