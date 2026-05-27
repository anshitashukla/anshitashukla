import { motion } from "framer-motion";
import { profile } from "../constants/profile";

const RecruiterBar = () => (
  <motion.aside
    className="recruiter-bar"
    style={{ left: "50%", x: "-50%" }}
    initial={{ y: 80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    aria-label="Hiring status"
  >
    <span className="recruiter-bar-dot" />
    <span className="recruiter-bar-text">{profile.status}</span>
    <span className="recruiter-bar-divider">·</span>
    <span className="recruiter-bar-muted">{profile.location}</span>
    <a href={`mailto:${profile.email}`} className="recruiter-bar-link">
      Contact
    </a>
  </motion.aside>
);

export default RecruiterBar;
