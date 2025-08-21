"use client";
import { useState } from "react";

import { motion, AnimatePresence, } from "motion/react";
import { menuVariants, leftItemVariants, rightItemVariants, itemDesktopVariants, underlineVariants } from "@/assets/motion/navbar";

import Link from "next/link";
import { cinzelDecorative } from "@/assets/fonts";

import Hamburger from "./hamburger";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div 
        className="
          w-[85%] md:w-[60%] fixed top-0 left-1/2 -translate-x-1/2 z-10
          flex flex-row justify-evenly md:justify-around items-center 
          py-4 bg-black shadow-lg
        "
      >

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <Hamburger open={isOpen} />
        </button>

        {/* Menu dekstop (lg) */}
        <ul className="hidden lg:flex flex-row justify-between gap-5 xl:gap-10">
          <motion.li variants={itemDesktopVariants} whileHover="hover" whileTap="tap" className="relative">
            <Link href="/">Home</Link>
            <motion.span
              className="absolute z-20 left-0 -bottom-1 h-[2px] bg-[#B80B32]"
              variants={underlineVariants}
            />
          </motion.li>
          <motion.li variants={itemDesktopVariants} whileHover="hover" whileTap="tap" className="relative">
            <Link href="/gallery">Gallery</Link>
            <motion.span
              className="absolute left-0 -bottom-1 h-[2px] bg-[#B80B32]"
              variants={underlineVariants}
            />
          </motion.li>
          <motion.li variants={itemDesktopVariants} whileHover="hover" whileTap="tap" className="relative">
            <Link href="/about">About</Link>
            <motion.span
              className="absolute left-0 -bottom-1 h-[2px] bg-[#B80B32]"
              variants={underlineVariants}
            />
          </motion.li>
        </ul>

        <h1 className="">
          <Link href="/" onClick={() => setIsOpen(false)} className={`${cinzelDecorative.className} text-xl md:text-2xl`}>Dark Devil Cry</Link>
        </h1>

      </div>

      {/* Menu mobile (sm) */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul 
            className="
              flex lg:hidden flex-col items-center gap-4 
              w-[85%] md:w-[60%] top-0 left-1/2 -translate-x-1/2 fixed z-5 pb-6 pt-18 
              bg-linear-to-b from-black to-[#111] 
            "
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.li 
              variants={leftItemVariants} 
              whileHover={{ scale: 1.25, color: "#fff" }}
              whileTap={{ scale: 0.95, color: "#B80B32" }}
            >
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            </motion.li>
            <motion.li
              variants={rightItemVariants}
              whileHover={{ scale: 1.25, color: "#fff" }}
              whileTap={{ scale: 0.95, color: "#B80B32" }}
            >
              <Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
            </motion.li>
            <motion.li
              variants={leftItemVariants}
              whileHover={{ scale: 1.25, color: "#fff" }}
              whileTap={{ scale: 0.95, color: "#B80B32" }}
            >
              <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;