import { motion } from "framer-motion";
import { companies } from "../constants/profile";

const CompanyStrip = () => (
  <section className="company-strip" aria-label="Experience at">
    <div className="company-strip-inner">
      <p className="company-strip-label">Experience & education</p>
      <div className="company-logos">
        {companies.map((company, i) => (
          <motion.div
            key={company.name}
            className="company-logo-item"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            title={`${company.name} — ${company.role}`}
          >
            <img src={company.logo} alt={company.name} loading="lazy" />
            <span className="company-logo-name">{company.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CompanyStrip;
