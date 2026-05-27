import { useMousePosition } from "../../hooks/useMousePosition";

/** Unique hero-only 6D visual: tesseract + hex tunnel + 6 orbital axes */
const HeroDimensionPortal = () => {
  const mouse = useMousePosition();

  const px = (mouse.x - 0.5) * 40;
  const py = (mouse.y - 0.5) * 40;

  return (
    <div className="hero-portal absolute inset-0 overflow-hidden" aria-hidden>
      {/* Hex depth tunnel — different from section grids */}
      <div
        className="hero-hex-tunnel"
        style={{
          transform: `translate(${px * 0.3}px, ${py * 0.3}px) rotateX(55deg)`,
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="hero-hex-ring" style={{ animationDelay: `${i * -0.8}s` }} />
        ))}
      </div>

      {/* 6 dimension axes — orbital rings */}
      <div
        className="hero-axis-field"
        style={{
          transform: `translate(calc(-50% + ${px}px), calc(-50% + ${py}px))`,
        }}
      >
        {[0, 1, 2, 3, 4, 5].map((d) => (
          <div
            key={d}
            className="hero-axis-ring"
            style={{
              ["--axis-i" as string]: d,
              animationDelay: `${d * -1.2}s`,
              transform: `rotateX(${60 + d * 15}deg) rotateY(${d * 30}deg)`,
            }}
          />
        ))}
      </div>

      {/* Tesseract wireframe */}
      <div
        className="hero-tesseract-wrap"
        style={{
          transform: `translate(calc(-50% + ${px * 1.5}px), calc(-50% + ${py * 1.5}px)) rotateX(${-py * 20}deg) rotateY(${px * 20}deg)`,
        }}
      >
        <div className="hero-tesseract">
          <div className="tesseract-cube tesseract-outer">
            {["front", "back", "right", "left", "top", "bottom"].map((face) => (
              <div key={`o-${face}`} className={`tesseract-face tesseract-${face}`} />
            ))}
          </div>
          <div className="tesseract-cube tesseract-inner">
            {["front", "back", "right", "left", "top", "bottom"].map((face) => (
              <div key={`i-${face}`} className={`tesseract-face tesseract-${face}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Prismatic light beams */}
      <div className="hero-prism-rays" />
      <div className="hero-portal-glow" />
    </div>
  );
};

export default HeroDimensionPortal;
