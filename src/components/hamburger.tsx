// import "@/assets/styles/hamburger.css"
import { motion } from "motion/react";

type HamburgerProps = {
  open: boolean;
}

function Hamburger({ open }: HamburgerProps) {
  return (
    <div className="relative w-8 h-6 cursor-pointer group">
      <motion.span
        className="absolute top-0 left-0 w-8 h-[2px] bg-[#e0e0e0] transition-colors group-hover:bg-[#aaa] rounded"
        animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute left-0 w-8 h-[2px] bg-[#e0e0e0] transition-colors group-hover:bg-[#aaa] rounded"
        initial={{ top: 0 }}
        animate={{
          top: 8,
          opacity: open ? 0 : 1,
          left: open ? -25 : 0
        }}
        transition={{ 
          duration: 0.3,
          top: { duration: 0.1 }
        }}
      />
      <motion.span
        className="absolute left-0 w-8 h-[2px] bg-[#e0e0e0] transition-colors group-hover:bg-[#aaa] rounded"
        initial={{ top: 0 }}
        animate={{
          top: 16,
          rotate: open ? -45 : 0,
          y: open ? -8 : 0 
        }}
        transition={{ 
          duration: 0.3, 
          top: { delay: 0.1, duration: 0.1 }
        }}
      />
    </div>
  );
}

export default Hamburger