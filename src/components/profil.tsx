"use client";

import { motion, easeOut } from "motion/react";

import Image from "next/image";

type ProfilProps = {
  imageSrc: string;
  delay: number;
  ign: string;
  role: string;
}

function Profil({ imageSrc, delay, ign, role }: ProfilProps ) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay, ease: easeOut }}
      className="p-4 border-brand-white border-1 flex flex-col gap-1 items-center"
    >
      <Image
        src={imageSrc}
        alt={`Profile picture of ${ign} as ${role}`}
        width={300} height={400}
        className="mb-1"
      />
      <h3 className="text-brand-white text-lg font-bold">
        {ign}
      </h3>
      <h4 className="text-purple-primary text-base font-semibold">
        {role}
      </h4>
    </motion.div>
  );
}

export default Profil;