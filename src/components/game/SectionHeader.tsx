import { motion } from "framer-motion";

type Theme = "arcade" | "rpg" | "inventory" | "quest" | "trophy";

interface SectionHeaderProps {
  level: string;
  title: string;
  subtitle?: string;
  theme: Theme;
}

const themeStyles: Record<Theme, { label: string; border: string; title: string }> = {
  arcade: { label: "text-cyan-400", border: "border-cyan-500/40", title: "from-white to-cyan-300" },
  rpg: { label: "text-amber-400", border: "border-amber-500/40", title: "from-amber-100 to-amber-400" },
  inventory: { label: "text-emerald-400", border: "border-emerald-500/40", title: "from-emerald-100 to-emerald-400" },
  quest: { label: "text-orange-400", border: "border-orange-500/40", title: "from-orange-100 to-orange-400" },
  trophy: { label: "text-yellow-400", border: "border-yellow-500/40", title: "from-yellow-100 to-yellow-400" },
};

const SectionHeader = ({ level, title, subtitle, theme }: SectionHeaderProps) => {
  const s = themeStyles[theme];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-14 text-center ${s.border}`}
    >
      <div className={`game-level-badge inline-block ${s.label}`}>{level}</div>
      <h2 className={`game-section-title mt-4 bg-gradient-to-r ${s.title} bg-clip-text text-transparent`}>
        {title}
      </h2>
      {subtitle && <p className="mx-auto mt-4 max-w-xl text-slate-400">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeader;
