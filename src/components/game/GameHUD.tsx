import { motion, AnimatePresence } from "framer-motion";
import { SECTIONS } from "../../hooks/useGameState";

interface GameHUDProps {
  xp: number;
  level: number;
  activeSection: string;
  unlocked: Set<string>;
  toast: string | null;
  maxXp: number;
}

const GameHUD = ({ xp, level, activeSection, unlocked, toast, maxXp }: GameHUDProps) => {
  const current = SECTIONS.find((s) => s.id === activeSection);

  return (
    <>
      <div className="game-hud fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-lg md:left-auto md:right-6 md:max-w-xs">
        <div className="game-panel p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-amber-400">
              LVL {level}
            </span>
            <span className="font-mono text-[10px] text-cyan-300">
              {current?.label ?? "Exploring"}
            </span>
          </div>
          <div className="xp-bar-track">
            <motion.div
              className="xp-bar-fill"
              animate={{ width: `${(xp / maxXp) * 100}%` }}
              transition={{ type: "spring", stiffness: 80 }}
            />
          </div>
          <p className="mt-1 text-right font-mono text-[9px] text-slate-500">
            {xp} / {maxXp} XP
          </p>
          <div className="mt-2 flex justify-between gap-1">
            {SECTIONS.filter((s) => s.id !== "hero").map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                title={s.label}
                className={`h-2 flex-1 rounded-sm transition-all ${
                  unlocked.has(s.id)
                    ? activeSection === s.id
                      ? "bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
                      : "bg-violet-500/60"
                    : "bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="game-toast fixed bottom-28 left-1/2 z-[60] -translate-x-1/2 md:bottom-32"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GameHUD;
