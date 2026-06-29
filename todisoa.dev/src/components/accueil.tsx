"use client";

import { Button } from "@mui/material";
import { motion } from "framer-motion";

export default function Accueil() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold"
        >
          TODISOA
          <span className="text-yellow-400"> HERINJANAHARY</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-2xl text-gray-300"
        >
          Fullstack JavaScript Developer
        </motion.h2>

        <p className="mt-8 text-gray-400 max-w-2xl mx-auto">
          Plus de 6 ans d&rsquo;expérience dans le développement
          d&rsquo;applications web performantes avec React,
          Next.js, Node.js et NestJS.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button
            component="a"
            href="/cv/Todisoa-Herinjanahary.pdf"
            download
            variant="contained"
          >
            Télécharger mon CV
          </Button>
        </div>
      </div>
    </section>
  );
}