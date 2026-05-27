import { motion } from "framer-motion";
import { tapPress } from "../../utils/motion";

interface Tab {
  id: string;
  label: string;
}

interface FilterTabsProps {
  tabs: readonly Tab[];
  active: string;
  onChange: (id: string) => void;
}

const FilterTabs = ({ tabs, active, onChange }: FilterTabsProps) => (
  <div className="filter-row">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        type="button"
        className={`filter-tab ${active === tab.id ? "is-active" : ""}`}
        onClick={() => onChange(tab.id)}
      >
        {active === tab.id && (
          <motion.span
            className="filter-tab-indicator"
            layoutId="project-filter"
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
          />
        )}
        <motion.span
          className="filter-tab-label"
          whileTap={tapPress}
        >
          {tab.label}
        </motion.span>
      </button>
    ))}
  </div>
);

export default FilterTabs;
