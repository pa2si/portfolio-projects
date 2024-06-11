import { Variants } from "framer-motion";

export const slideIn: Variants = {
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
