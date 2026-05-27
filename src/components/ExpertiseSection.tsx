import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import StaggerChildren, { StaggerItem } from "./motion/StaggerChildren";
import { expertiseAreas, engineeringPrinciples } from "../constants/profile";

const ExpertiseSection = () => (
  <Section id="expertise">
    <SectionTitle
      eyebrow="Engineering focus"
      title="What I bring to a strong engineering team"
      description="Depth across backend systems, cloud delivery, and product-grade frontends — the blend top-tier product companies look for."
    />

    <StaggerChildren className="expertise-grid" stagger={0.08}>
      {expertiseAreas.map((area, i) => (
        <StaggerItem key={area.title}>
          <Card className="expertise-card p-6" delay={i * 0.04}>
            <h3 className="expertise-title">{area.title}</h3>
            <p className="expertise-desc">{area.description}</p>
            {"highlights" in area && area.highlights?.length ? (
              <ul className="expertise-highlights">
                {area.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
            <div className="chip-row" style={{ marginTop: "1rem" }}>
              {area.tags.map((tag) => (
                <span key={tag} className="tag tag-tech">
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        </StaggerItem>
      ))}
    </StaggerChildren>

    <Card className="principles-card p-8" style={{ marginTop: "1.5rem" }}>
      <h3 className="principles-heading">How I work</h3>
      <ul className="principles-list">
        {engineeringPrinciples.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </Card>
  </Section>
);

export default ExpertiseSection;
