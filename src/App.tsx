import { useEffect, useState } from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import ColorIcon from "./components/ui/ColorIcon";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceSection from "./components/ExperienceCard";
import EducationSection from "./components/Education";
import ProjectsSection from "./components/Projects";
import Preloader from "./components/preloader";
import SkillsPage from "./components/Skills";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ImpactStrip from "./components/ImpactStrip";
import CompanyStrip from "./components/CompanyStrip";
import ExpertiseSection from "./components/ExpertiseSection";
import RecruiterCTA from "./components/RecruiterCTA";
import RecruiterBar from "./components/RecruiterBar";
import ScrollProgress from "./components/ScrollProgress";
import { profile } from "./constants/profile";
import "./index.css";

const App = () => {
  const [ready, setReady] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {!ready && <Preloader key="preloader" />}
      </AnimatePresence>

      {ready && (
        <motion.div
          className="site"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ScrollProgress />
          <Navbar scrolled={scrolled} />

          <RecruiterBar />

          <main>
            <Hero />
            <ImpactStrip />
            <CompanyStrip />
            <AboutSection />
            <ExpertiseSection />
            <SkillsPage />
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <RecruiterCTA />
          </main>

          <motion.footer
            className="site-footer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              className="footer-title"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              {profile.name} — ready for your team
            </motion.p>
            <motion.div
              className="footer-social"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
              }}
            >
              {[
                { href: profile.github, brand: "github" as const, icon: Github },
                { href: profile.linkedin, brand: "linkedin" as const, icon: Linkedin },
                { href: `mailto:${profile.email}`, brand: "mail" as const, icon: Mail },
              ].map(({ href, brand, icon: Icon }) => (
                <motion.a
                  key={href}
                  href={href}
                  className={`icon-link icon-link-brand icon-link-brand--${brand}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <ColorIcon icon={Icon} brand={brand} className="h-4 w-4" />
                </motion.a>
              ))}
            </motion.div>
            <p className="footer-copy">
              © 2025 {profile.name} · Built with React, TypeScript & Framer Motion
            </p>
          </motion.footer>
        </motion.div>
      )}
    </>
  );
};

export default App;
