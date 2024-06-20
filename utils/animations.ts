import { Variants } from "framer-motion";

export const slideInY: Variants = {
  initial: {
    opacity: 0.3,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const slideInX: Variants = {
  initial: {
    opacity: 0.3,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.3,
    },
  },
};

export const staggeredAnimation = (delayMultiplier: number): Variants => ({
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: delayMultiplier * custom,
    },
  }),
});
