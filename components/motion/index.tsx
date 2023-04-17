export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0,
    },
  },
};

export const animatedContent = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
    },
  },
};

export const animatedTitle = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export const animatedImg = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export const list1 = {
  hidden: { opacity: 0 },
  vissible: { opacity: 1 },
};

export const list2 = {
  vissible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

export const textSlideUP = {
  vissible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: "-50%",
  },
};

export const imgSlideRight = {
  vissible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stifness: 300,
      damping: 24,
      delay: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    x: -100,
  },
};

export const imgSlideLeft = {
  vissible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stifness: 300,
      damping: 24,
      delay: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    x: 100,
  },
};

export const textSlideLeft = {
  vissible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stifness: 300,
      damping: 24,
      delay: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    x: 100,
  },
};

export const textSlideRight = {
  vissible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stifness: 300,
      damping: 24,
      delay: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    x: -100,
  },
};

export const Popup = {
  vissible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },

  hidden: {
    opacity: 0,
    scale: 0,
  },
};

export const navAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      // delayChildren: 3.8,
      ease: "easeInOut",
    },
  },
};

export const navItem = {
  hidden: {
    opacity: 0,
    y: "-20px",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

