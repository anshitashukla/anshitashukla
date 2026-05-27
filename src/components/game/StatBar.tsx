import { motion } from "framer-motion";

interface StatBarProps {
  label: string;
  value: number;
  max?: number;
  color: string;
  delay?: number;
}

const StatBar = ({ label, value, max = 100, color, delay = 0 }: StatBarProps) => (
  <div className="stat-row">
    {label && (
      <div className="flex justify-between font-mono text-xs">
        <span className="text-amber-200/80">{label}</span>
        <span className="text-slate-500">{value}/{max}</span>
      </div>
    )}
    <div className="stat-bar-track mt-1">
      <motion.div
        className="stat-bar-fill"
        style={{ background: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${(value / max) * 100}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  </div>
);

export default StatBar;
