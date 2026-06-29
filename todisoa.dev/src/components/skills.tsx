"use client";

import { skills } from "../data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        Technologies
      </h2>

      <div className="glass grid grid-cols-2 md:grid-cols-4 gap-6">

        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 flex flex-col items-center gap-4 hover:-translate-y-2 transition"
            >
              <Icon size={45} />

              <span>{skill.name}</span>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}