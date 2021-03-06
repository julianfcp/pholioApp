export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren", //waits to animate the childrens
      staggerChildren: 0.25, // dalys animation
    },
  },
  exit: {
    // hides the page so when navigating others pages are visibles
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
export const lineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};
export const slider = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    transition: {
      duration: 0.75,
    },
    skew: "0deg",
  },
};
export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.075, ease: "easeOut" } },
};

export const toggleMotion = {
  hidden: { opacity: 1, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25,
    },
  },
};
export const scrollShow = {
  hidden: {
    opacity: 0,
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
export const MenuLine = {
  hidden: {
    width: 0,
  },
  show: {
    width: "50%",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
