import type { LucideIcon } from "lucide-react";
import {
  Gauge,
  ShieldCheck,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import type { IconBrand } from "../utils/iconColors";
import scalex from "../assets/images/scalex.png";
import mphasis from "../assets/images/mphasis.png";
import gwu from "../assets/images/gw.png";
import cascovia from "../assets/images/cascovia.png";

export const profile = {
  name: "Anshita Shukla",
  phone: "571-579-0839",
  headline: "Software Engineer · Full-Stack & Distributed Systems",
  location: "United States",
  website: "https://anshitashukla.netlify.app",
  status: "Open to Software Engineer roles (Full-time)",
  email: "shuklaanshita113@gmail.com",
  linkedin: "https://linkedin.com/in/anshita-shukla",
  github: "https://github.com/anshitashukla",
  resumeUrl:
    "https://drive.google.com/file/d/12ad2kpErLXswkKuO139U0TeOH3ZO6qFn/view?usp=drive_link",
  educationHighlight: "MS Computer Science · George Washington University",
  elevator:
    "AI software engineer building high-scale insurance platforms — from generative AI workflows and RAG to microservices, carrier integrations, and production systems that move from hundreds of thousands to millions of requests.",
  currentWork: {
    label: "Currently building",
    title: "Cascovia",
    url: "https://cascovia.com/",
  },
};

export type ImpactMetric = {
  value: string;
  label: string;
  context: string;
  icon: LucideIcon;
  brand: IconBrand;
};

export const impactMetrics: ImpactMetric[] = [
  {
    value: "1M+",
    label: "Requests processed",
    context: "Cascovia · 300K → 1M+",
    icon: TrendingUp,
    brand: "external",
  },
  {
    value: "95%",
    label: "Doc extraction accuracy",
    context: "Textract · Pinecone",
    icon: ShieldCheck,
    brand: "linkedin",
  },
  {
    value: "12+",
    label: "Microservices shipped",
    context: "Insurance platform",
    icon: Workflow,
    brand: "file",
  },
  {
    value: "40%",
    label: "Less quoting effort",
    context: "Carrier automation",
    icon: Zap,
    brand: "code",
  },
  {
    value: "35%",
    label: "Higher checkout completion",
    context: "Stripe · PayPal",
    icon: Gauge,
    brand: "sparkles",
  },
  {
    value: "20%",
    label: "Smaller frontend bundles",
    context: "Webpack",
    icon: Users,
    brand: "users",
  },
];

export const companies = [
  { name: "Cascovia", logo: cascovia, role: "AI Software Engineer · Present" },
  { name: "George Washington University", logo: gwu, role: "MS Computer Science" },
  { name: "Scalex Technology", logo: scalex, role: "Software Engineer 3" },
  { name: "Mphasis", logo: mphasis, role: "Software Engineer" },
] as const;

export const expertiseAreas = [
  {
    title: "Distributed systems & APIs",
    description:
      "Node.js microservices, Kafka event flows, REST/OpenAPI, MongoDB, Elasticsearch, and carrier adapter frameworks.",
    tags: ["Microservices", "Node.js", "Kafka", "OpenAPI", "MongoDB"],
  },
  {
    title: "Cloud & production operations",
    description:
      "AWS Cognito, SNS, SES, ECR, CodeDeploy, CloudWatch, Secrets Manager; CI/CD with GitHub Actions; OAuth2 and MFA.",
    tags: ["AWS", "Cognito", "CI/CD", "GitHub Actions", "OAuth 2.0"],
  },
  {
    title: "Product engineering",
    description:
      "React, Redux, Ant Design, React Native, Stripe/PayPal, Webpack performance, and real-time Socket.IO / Redis systems.",
    tags: ["React", "Redux", "React Native", "Socket.IO", "Stripe"],
  },
  {
    title: "Generative AI development",
    description:
      "Shipped LLM-powered insurance products end-to-end — from prompt design and agent tooling through production APIs and agent-facing workflows.",
    highlights: [
      "Prompt engineering, structured outputs, and guardrails for reliable, on-brand responses",
      "RAG and context design so models answer from the right data — not hallucinated guesses",
      "Tool-calling & LangChain workflows for quoting, underwriting, and document reasoning",
      "Production chat UX: streaming, session memory, fallbacks, latency tuning, and cost-aware model routing",
      "Evaluation loops — test prompts, compare model versions, and iterate before shipping to users",
    ],
    tags: [
      "Claude",
      "LangChain",
      "Guardrails",
      "RAG",
      "Pinecone",
      "Amazon Textract",
      "LLM Function Calling",
    ],
  },
] as const;

export const engineeringPrinciples = [
  "Optimize for measurable outcomes — latency, revenue, reliability, and team velocity.",
  "Own problems end-to-end: design, implementation, testing, deployment, and iteration.",
  "Develop simple, maintainable architectures first — scale and refine as requirements prove it.",
  "Take accountability for delivery: clear communication, reliable estimates, and following through on commitments.",
  "Write code that the next engineer (and future you) can reason about quickly.",
] as const;

export const recruiterQuickFacts = [
  "Building Cascovia (cascovia.com)",
  "4+ years industry experience",
  "AI Software Engineer · insurance platforms",
  "MS CS @ George Washington University",
  "Full-stack · AI/ML Engineer",
  "United States · Open to opportunities",
] as const;
