import { motion } from "framer-motion";
import { FileText, Linkedin, Mail } from "lucide-react";
import { profile, recruiterQuickFacts } from "../constants/profile";
import MotionLink from "./ui/MotionLink";
import ColorIcon from "./ui/ColorIcon";
import StaggerChildren, { StaggerItem } from "./motion/StaggerChildren";

const RecruiterCTA = () => (
  <section className="recruiter-cta" id="contact">
    <motion.div
      className="recruiter-cta-inner"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="recruiter-cta-copy">
        <p className="recruiter-cta-eyebrow">For recruiters & hiring managers</p>
        <h2 className="recruiter-cta-title">Let&apos;s talk about your next opening</h2>
        <p className="recruiter-cta-text">
          I&apos;m actively exploring Software Engineer opportunities where I can contribute to
          scalable systems, strong engineering culture, and user-facing products. Reach me at{" "}
          {profile.email} or {profile.phone}.
        </p>
        <StaggerChildren className="recruiter-facts" stagger={0.05}>
          {recruiterQuickFacts.map((fact) => (
            <StaggerItem key={fact}>
              <span className="recruiter-fact">{fact}</span>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>

      <div className="recruiter-cta-actions">
        <MotionLink href={`mailto:${profile.email}`} variant="solid" className="recruiter-btn">
          <ColorIcon icon={Mail} brand="mail" className="h-4 w-4" />
          Email me
        </MotionLink>
        <MotionLink
          href={profile.resumeUrl}
          variant="outline"
          className="recruiter-btn"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <ColorIcon icon={FileText} brand="file" className="h-4 w-4" />
          Download resume
        </MotionLink>
        <MotionLink
          href={profile.linkedin}
          variant="outline"
          className="recruiter-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ColorIcon icon={Linkedin} brand="linkedin" className="h-4 w-4" />
          LinkedIn
        </MotionLink>
      </div>
    </motion.div>
  </section>
);

export default RecruiterCTA;
