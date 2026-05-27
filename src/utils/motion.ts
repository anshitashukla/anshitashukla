import type { Variants, Transition } from "framer-motion";

export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

export const EASE_SPRING = {
  type: "spring" as const,
  stiffness: 380,
  damping: 28,
};

export const EASE_SPRING_SOFT = {
  type: "spring" as const,
  stiffness: 200,
  damping: 22,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeUpSoft: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

export const gridItem: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const defaultTransition: Transition = {
  duration: 0.55,
  ease: EASE_OUT_EXPO,
};

export const viewportOnce = { once: true, margin: "-60px" as const };

export const hoverLift = {
  y: -4,
  transition: EASE_SPRING_SOFT,
};

export const tapPress = { scale: 0.97 };

export const cardHover = {
  y: -6,
  boxShadow: "0 20px 40px -16px rgba(0, 0, 0, 0.12)",
  transition: EASE_SPRING_SOFT,
};
