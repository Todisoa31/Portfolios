"use client";

import { motion } from "framer-motion";

import { skills } from "@/src/data/skills";

import SkillCard from "./skillCard";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-16 sm:py-24 overflow-hidden"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-87.5
            h-87.5
            sm:w-175
            sm:h-175
            rounded-full
            bg-yellow-500/5
            blur-[100px]
            sm:blur-[150px]
          "
        />

      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Title */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .6,
          }}
          viewport={{
            once: true,
          }}
          className="text-center"
        >

          <span
            className="
              inline-block
              rounded-full
              border
              font-semibold
              mb-4
              border-yellow-500/30
              bg-yellow-500/10
              px-4
              py-1
              text-xs
              sm:text-sm
              tracking-widest
              uppercase
              text-yellow-400
            "
          >
            Technologies
          </span>


          <h2
            className="
              mt-5
              text-3xl
              sm:text-5xl
              font-bold
            "
          >
            Mes compétences
          </h2>


          <p
            className="
              mt-5
              max-w-3xl
              mx-auto
              text-sm
              sm:text-base
              text-gray-400
              leading-7
              sm:leading-8
            "
          >
            Plus de <strong>6 années d&apos;expérience</strong> dans le
            développement d&apos;applications web modernes, performantes et
            évolutives avec les technologies JavaScript et TypeScript.
            Passez votre souris sur une technologie pour découvrir mon
            expérience et les réalisations associées.
          </p>

        </motion.div>


        {/* Skills */}

        <div
          className="
            mt-12
            sm:mt-20
            grid
            grid-cols-2
            sm:grid-cols-2
            lg:grid-cols-4
            gap-2
            md:gap-8
            sm:gap-8
          "
        >

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
                duration: .5,
              }}
              viewport={{
                once: true,
              }}
            >
              <SkillCard
                skill={skill}
                index={index}
              />
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}