"use client";

import { motion, useScroll, useTransform, easeOut } from "motion/react";

import Image from "next/image";

import { cinzelDecorative } from "@/assets/fonts";

type ParallaxProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

// Parallax reveal
function Parallax({ title, imageSrc, imageAlt }: ParallaxProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -500]);  // add transformation, if scroll 0 to 1000, move 0 to 200px

  return (
    <div className="parallax relative h-100 w-full overflow-hidden border-b-2 border-b-brand-white">
      <motion.div 
        className="relative w-full min-h-200 inset-0"
        style={{ y }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: easeOut }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          // width={900} height={500}
          fill
          className="object-cover object-top"
        />
      </motion.div>
      <motion.h1 
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: easeOut }}
        className=
          {`
            ${cinzelDecorative.className} 
            absolute bottom-0 left-1/2 -translate-x-1/2
            drop-shadow-2xl px-6 py-2 bg-[rgba(222,222,222,0.7)]
            text-[#171717] text-2xl
            border-2 border-b-0 border-brand-white
          `}
      >
        {title}
      </motion.h1>
    </div>
  );
}

export default Parallax;