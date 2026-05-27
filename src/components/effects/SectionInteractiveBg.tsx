import { useRef } from "react";

export type SectionVariant = "about" | "skills" | "experience" | "projects" | "education";

interface SectionInteractiveBgProps {
  variant: SectionVariant;
}

const SectionInteractiveBg = ({ variant }: SectionInteractiveBgProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    const glow = glowRef.current;
    if (!el || !glow) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    glow.style.left = `${x}%`;
    glow.style.top = `${y}%`;
  };

  return (
    <div
      ref={ref}
      className={`section-interactive-bg section-bg-${variant}`}
      onMouseMove={onMove}
      aria-hidden
    >
      {variant === "about" &&
        Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="about-orb"
            style={{
              left: `${8 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
          />
        ))}

      {variant === "skills" && (
        <div className="skills-hex-grid">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="skills-hex-cell" />
          ))}
        </div>
      )}

      {variant === "experience" && <div className="exp-data-stream" />}

      {variant === "projects" && <div className="projects-floor-grid" />}

      {variant === "education" && <div className="edu-rays" />}

      <div ref={glowRef} className="section-cursor-glow" style={{ left: "50%", top: "50%" }} />
    </div>
  );
};

export default SectionInteractiveBg;
