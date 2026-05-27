import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import MotionLink from "./ui/MotionLink";
import ColorIcon from "./ui/ColorIcon";
import { fadeUpSoft, staggerContainer } from "../utils/motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = ({ scrolled }: { scrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1));

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.35;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= marker) {
          current = id;
        }
      }

      setActiveSection(`#${current}`);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <motion.header
      className={`site-header ${scrolled ? "is-scrolled" : ""}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="header-inner">
        <motion.a
          href="#hero"
          className="logo"
          whileHover={{ opacity: 0.7 }}
          whileTap={{ scale: 0.98 }}
        >
          Anshita Shukla
        </motion.a>

        <motion.nav
          className="nav-links"
          aria-label="Main"
          variants={staggerContainer(0.05, 0.25)}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.href ? "is-active" : ""}`}
              variants={fadeUpSoft}
              whileHover={{ y: -1 }}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.span
                  className="nav-link-dot"
                  layoutId="nav-active"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </motion.nav>

        <MotionLink
          href="mailto:anshitashukla0102@gmail.com"
          variant="solid"
          className="header-cta !py-2 !px-4 text-sm"
        >
          Email me
        </MotionLink>

        <motion.button
          type="button"
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          whileTap={{ scale: 0.94 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <ColorIcon icon={X} brand="close" className="h-4 w-4" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <ColorIcon icon={Menu} brand="menu" className="h-4 w-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="mobile-nav md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="mobile-nav-inner"
              variants={staggerContainer(0.06, 0.05)}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  variants={fadeUpSoft}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div variants={fadeUpSoft}>
                <MotionLink
                  href="mailto:anshitashukla0102@gmail.com"
                  variant="solid"
                  className="w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Email me
                </MotionLink>
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
