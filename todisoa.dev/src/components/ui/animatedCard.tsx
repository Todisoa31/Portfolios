"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function AnimatedCard({
  children,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        bg-gray-800
        rounded-2xl
        border
        border-gray-700
        p-6
      "
    >
      {children}
    </motion.div>
  );
}