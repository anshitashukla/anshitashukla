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
import evaeco from "../assets/images/evaeco.jpeg";
import gwu from "../assets/images/gw.png";
import simplysponsor from "../assets/images/simplysponsor-logo.png";

export const profile = {
  name: "Anshita Shukla",
  phone: "571-579-0839",
  headline: "Software Engineer · Full-Stack & Distributed Systems",
  location: "United States",
  website: "https://anshitashukla.netlify.app",
  status: "Open to Software Engineer roles (Full-time)",
  email: "anshitashukla0102@gmail.com",
  linkedin: "https://linkedin.com/in/anshita-shukla",
  github: "https://github.com/anshitashukla",
  resumeUrl:
    "https://drive.google.com/uc?export=download&id=1Z_Xxnsdkhg7KzbdQFuqWvQSPEyyQcBap",
  educationHighlight: "MS Computer Science · George Washington University",
  elevator:
    "Full-stack engineer with experience leading teams, shipping microservices, and delivering measurable gains in revenue, performance, and reliability — from MCP/LLM integrations to React micro-frontends at Scalex.",
  currentWork: {
    label: "Currently building",
    title: "Simply Sponsor",
    url: "https://simplysponsor.com/",
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
    value: "60%",
    label: "Revenue growth via payments",
    context: "Stripe · PayPal",
    icon: TrendingUp,
    brand: "external",
  },
  {
    value: "40%",
    label: "Faster frontend load time",
    context: "Micro-frontend",
    icon: Zap,
    brand: "code",
  },
  {
    value: "6",
    label: "Engineers led",
    context: "Scalex",
    icon: Users,
    brand: "users",
  },
  {
    value: "35%",
    label: "User engagement lift",
    context: "Firebase · Push",
    icon: Gauge,
    brand: "sparkles",
  },
  {
    value: "90%",
    label: "Test coverage achieved",
    context: "JUnit · Mockito",
    icon: ShieldCheck,
    brand: "linkedin",
  },
  {
    value: "20%",
    label: "Bundle size reduction",
    context: "Webpack",
    icon: Workflow,
    brand: "file",
  },
];

export const companies = [
  { name: "Simply Sponsor", logo: simplysponsor, role: "Full Stack Developer · Present" },
  { name: "George Washington University", logo: gwu, role: "MS Computer Science" },
  { name: "Scalex Technology", logo: scalex, role: "Software Engineer 3" },
  { name: "Mphasis", logo: mphasis, role: "Associate Software Engineer" },
  { name: "Eva Eco System", logo: evaeco, role: "Full Stack Developer" },
] as const;

export const expertiseAreas = [
  {
    title: "Distributed systems & APIs",
    description:
      "Node.js microservices, MCP servers for LLM agents, REST APIs, MongoDB, ElasticSearch, and Spring Boot services.",
    tags: ["Microservices", "Node.js", "TypeScript", "MCP", "MongoDB"],
  },
  {
    title: "Cloud & production operations",
    description:
      "AWS Cognito, SNS, SES, Elastic Beanstalk; CI/CD with GitHub Actions; OAuth2, MFA, and secure notification flows.",
    tags: ["AWS", "Cognito", "CI/CD", "GitHub Actions", "OAuth 2.0"],
  },
  {
    title: "Product engineering",
    description:
      "React, Next.js, React Native, Redux, micro-frontends, Stripe/PayPal, and Webpack-driven performance wins.",
    tags: ["React", "Next.js", "React Native", "Redux", "Stripe"],
  },
  {
    title: "Generative AI development",
    description:
      "Shipped LLM-powered products end-to-end — from prompt design and agent tooling through production APIs and user-facing chat experiences.",
    highlights: [
      "Prompt engineering, structured outputs, and guardrails for reliable, on-brand responses",
      "RAG and context design so models answer from the right data — not hallucinated guesses",
      "Tool-calling & MCP servers exposing real APIs (policy lookup, quoting, payments) for agent workflows",
      "Production chat UX: streaming, session memory, fallbacks, latency tuning, and cost-aware model routing",
      "Evaluation loops — test prompts, compare model versions, and iterate before shipping to users",
    ],
    tags: [
      "OpenAI API",
      "Gemini",
      "LangChain",
      "MCP",
      "Dialogflow",
      "Google AI Studio",
      "RAG",
      "PyTorch",
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
  "Building Simply Sponsor (simplysponsor.com)",
  "4+ years industry experience",
  "Led team of 6 engineers",
  "MS CS @ George Washington University",
  "Full-stack · AI/ML Engineer",
  "United States · Open to opportunities",
] as const;
