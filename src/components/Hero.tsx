import { motion } from "framer-motion";
import { ArrowDown, ChevronRight, ExternalLink, FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import anshitaImage from "../assets/images/anshitashukla.jpeg";
import { profile } from "../constants/profile";
import MotionLink from "./ui/MotionLink";
import ColorIcon from "./ui/ColorIcon";
import {
  defaultTransition,
  fadeUpSoft,
  staggerContainer,
  EASE_SPRING_SOFT,
} from "../utils/motion";

const stats = [
  { value: "4+", label: "Years experience" },
  { value: "60%", label: "Revenue growth" },
  { value: "MS CS", label: "George Washington" },
];

const socialLinks = [
  { href: profile.github, brand: "github" as const, icon: Github },
  { href: profile.linkedin, brand: "linkedin" as const, icon: Linkedin },
  { href: `mailto:${profile.email}`, brand: "mail" as const, icon: Mail },
];

const Hero = () => (
  <section id="hero" className="hero relative">
    <div className="hero-inner">
      <motion.div
        className="hero-photo"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.03, y: -4 }}
      >
        <motion.img
          src={anshitaImage}
          alt={profile.name}
          width={220}
          height={220}
          loading="eager"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.1, 0.12)}
      >
        <motion.div className="hero-status" variants={fadeUpSoft} transition={defaultTransition}>
          <span className="hero-status-dot" />
          {profile.status}
        </motion.div>

        <motion.a
          href={profile.currentWork.url}
          className="hero-current-work"
          variants={fadeUpSoft}
          transition={defaultTransition}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hero-current-work-label">{profile.currentWork.label}</span>
          <span className="hero-current-work-title">{profile.currentWork.title}</span>
          <ColorIcon icon={ExternalLink} brand="external" className="h-3.5 w-3.5" />
        </motion.a>

        <motion.h1 className="hero-name" variants={fadeUpSoft} transition={defaultTransition}>
          {profile.name}
        </motion.h1>

        <motion.p className="hero-headline" variants={fadeUpSoft} transition={defaultTransition}>
          {profile.headline}
        </motion.p>

        <motion.p className="hero-location" variants={fadeUpSoft} transition={defaultTransition}>
          <ColorIcon icon={MapPin} brand="mapPin" className="h-3.5 w-3.5" />
          <span>{profile.location}</span>
          <span className="hero-location-sep">·</span>
          <strong>{profile.educationHighlight}</strong>
        </motion.p>

        <motion.p className="hero-lead" variants={fadeUpSoft} transition={defaultTransition}>
          {profile.elevator}
        </motion.p>

        <motion.div className="hero-actions" variants={fadeUpSoft} transition={defaultTransition}>
          <MotionLink href="#contact" variant="solid">
            Schedule a conversation
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={EASE_SPRING_SOFT}
              style={{ display: "inline-flex" }}
            >
              <ColorIcon icon={ChevronRight} brand="chevron" className="h-4 w-4" />
            </motion.span>
          </MotionLink>
          <MotionLink
            href={profile.resumeUrl}
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <ColorIcon icon={FileText} brand="file" className="h-4 w-4" />
            Download resume
          </MotionLink>
          <MotionLink href="#projects" variant="outline">
            View work
          </MotionLink>
          <div className="hero-social">
            {socialLinks.map(({ href, brand, icon: Icon }) => (
              <MotionLink
                key={href}
                href={href}
                variant="icon"
                className={`icon-link-brand icon-link-brand--${brand}`}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
              >
                <ColorIcon icon={Icon} brand={brand} className="h-4 w-4" />
              </MotionLink>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-stats"
          variants={staggerContainer(0.08, 0)}
          initial="hidden"
          animate="visible"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat"
              variants={fadeUpSoft}
              transition={{ ...defaultTransition, delay: 0.5 + i * 0.08 }}
              whileHover={{ y: -3 }}
            >
              <motion.span
                className="stat-value"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.1, duration: 0.5 }}
              >
                {s.value}
              </motion.span>
              <span className="stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>

    <motion.a
      href="#impact"
      className="scroll-hint"
      aria-label="Scroll to impact metrics"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
    >
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        Scroll
      </motion.span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ColorIcon icon={ArrowDown} brand="arrowDown" className="h-3 w-3" />
      </motion.div>
    </motion.a>
  </section>
);

export default Hero;
