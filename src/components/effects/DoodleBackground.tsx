import FloatingDoodles from "../doodle/FloatingDoodles";

const DoodleBackground = () => (
  <div className="doodle-bg fixed inset-0 -z-10" aria-hidden>
    <div className="doodle-paper" />
    <div className="doodle-grid" />
    <svg className="doodle-scribbles" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
      <path
        className="scribble-line scribble-1"
        d="M50 120 Q200 80 350 130 T650 100 T950 140 T1350 90"
        fill="none"
        stroke="#FF6B9D"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="scribble-line scribble-2"
        d="M100 800 Q400 750 700 820 T1200 780"
        fill="none"
        stroke="#6C9EFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="scribble-line scribble-3"
        d="M1300 200 Q1200 350 1250 500 T1280 750"
        fill="none"
        stroke="#FFD93D"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="120" cy="400" r="40" fill="none" stroke="#6BCB77" strokeWidth="2.5" className="scribble-circle" />
      <circle cx="1280" cy="550" r="55" fill="none" stroke="#C77DFF" strokeWidth="2.5" className="scribble-circle" />
    </svg>
    <FloatingDoodles />
  </div>
);

export default DoodleBackground;
