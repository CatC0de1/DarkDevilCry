import { easeIn, easeInOut, easeOut } from "motion";

export const menuVariants = {
  hidden: {
    opacity: 0.8,
    y: -160,
    transition: { duration: 0.5 }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: 0.05,
    }
  },
  exit: {
    opacity: 0.8,
    y: -160,
    transition: { 
      duration: 0.2,
      when: "afterChildren",
      staggerDirection: -1,
      staggerChildren: 0.1
    }
  }
}

export const leftItemVariants = {
  hidden: { 
    opacity: 0, 
    x: -150
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.2,
      ease: easeOut
    }
  },
  exit: { 
    opacity: 0, 
    x: -150,
    transition: { 
      duration: 0.2,
      ease: easeIn
    } 
  },
};

export const rightItemVariants = {
  hidden: { 
    opacity: 0, 
    x: 150 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.2,
      ease: easeOut
    } 
  },
  exit: { 
    opacity: 0, 
    x: 150, 
    transition: { 
      duration: 0.1,
      ease: easeIn
    } 
  }
};

export const itemDesktopVariants = {
  hover: { 
    // scale: 1.1,
    color: "#fff",
    transition: { duration: 0.2 }
  },
  tap: { 
    // scale: 0.95,
    color: "#aaa",
    transition: { duration: 0.1 }
  }
}

export const underlineVariants = {
  initial: { 
    width: 0 
  },
  hover: { 
    width: "100%", 
    transition: { 
      duration: 0.3, 
      ease: easeInOut 
    } 
  },
  tap: { 
    width: "100%" 
  }
}