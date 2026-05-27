import { Code2, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "../constants/profile";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import ColorIcon from "./ui/ColorIcon";
import StaggerChildren, { StaggerItem } from "./motion/StaggerChildren";
import { hoverLift } from "../utils/motion";
import { highlightIconStyles, type IconBrand } from "../utils/iconColors";

const highlights: {
  icon: typeof Rocket;
  brand: IconBrand;
  title: string;
  desc: string;
}[] = [
  {
    icon: Rocket,
    brand: "rocket",
    title: "Scale & business impact",
    desc: "60% revenue growth and 35% more successful transactions via Stripe & PayPal at Scalex.",
  },
  {
    icon: Code2,
    brand: "code",
    title: "Systems & product craft",
    desc: "MCP servers for LLM agents, micro-frontends (40% faster loads), and 20% smaller Webpack bundles.",
  },
  {
    icon: Users,
    brand: "users",
    title: "Technical leadership",
    desc: "Led 6 engineers across microservices, CI/CD, security hardening, and production delivery.",
  },
];

const tags = [
  "System Design",
  "Microservices",
  "React",
  "TypeScript",
  "Node.js",
  "AWS",
  "Python",
  "MongoDB",
];

const AboutSection = () => (
  <Section id="about" muted>
    <SectionTitle
      eyebrow="About"
      title="Engineer who ships at scale"
      description={`${profile.elevator.split(".")[0]}.`}
    />

    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
      <Card className="p-8">
        <p className="about-lead">
          I&apos;m targeting roles where strong fundamentals meet product velocity — the kind of
          work you see at top product-engineering organizations. My background combines
          <strong> hands-on IC delivery</strong>, <strong>team leadership</strong>, and an
          <strong> MS in Computer Science</strong> with coursework in algorithms, systems, ML, and
          security.
        </p>
        <p className="about-lead about-lead-second">
          This portfolio is built with React, TypeScript, and Framer Motion — the same attention to
          detail I bring to production codebases.
        </p>
        <StaggerChildren className="chip-row chip-row-spaced" stagger={0.05}>
          {tags.map((tag) => (
            <StaggerItem key={tag}>
              <motion.span className="tag tag-tech" whileHover={hoverLift} whileTap={{ scale: 0.96 }}>
                {tag}
              </motion.span>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Card>

      <StaggerChildren className="grid gap-4" stagger={0.1}>
        {highlights.map((item, i) => {
          const palette = highlightIconStyles[item.brand];
          return (
            <StaggerItem key={item.title}>
              <Card className="p-6" delay={i * 0.05}>
                <div className="highlight-row">
                  <motion.div
                    className="highlight-icon"
                    style={{
                      color: palette.color,
                      background: palette.background,
                      borderColor: palette.border,
                    }}
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ColorIcon icon={item.icon} brand={item.brand} className="h-5 w-5" />
                  </motion.div>
                  <div>
                    <h3 className="highlight-title">{item.title}</h3>
                    <p className="highlight-text">{item.desc}</p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </div>
  </Section>
);

export default AboutSection;
