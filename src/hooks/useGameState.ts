import { useEffect, useState } from "react";

export const SECTIONS = [
  { id: "hero", label: "Title", xp: 0 },
  { id: "about", label: "Character", xp: 150 },
  { id: "skills", label: "Inventory", xp: 300 },
  { id: "experience", label: "Quests", xp: 500 },
  { id: "projects", label: "Arcade", xp: 750 },
  { id: "education", label: "Trophies", xp: 950 },
] as const;

const MAX_XP = 1000;

export function useGameState() {
  const [xp, setXp] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [unlocked, setUnlocked] = useState<Set<string>>(new Set(["hero"]));
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setXp(Math.round(progress * MAX_XP));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
            setUnlocked((prev) => {
              if (prev.has(id)) return prev;
              const next = new Set(prev);
              next.add(id);
              const section = SECTIONS.find((s) => s.id === id);
              if (section && id !== "hero") {
                setToast(`🎮 Zone Unlocked: ${section.label}`);
                setTimeout(() => setToast(null), 2800);
              }
              return next;
            });
          }
        },
        { threshold: 0.25, rootMargin: "-10% 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const level = Math.floor(xp / 200) + 1;

  return { xp, level, activeSection, unlocked, toast, maxXp: MAX_XP };
}
