"use client";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { motion } from "framer-motion";
import { experiences } from "../data/experiences";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="text-center mb-16">
        <span className="text-red-500 uppercase tracking-widest">
          Mon parcours
        </span>

        <h2 className="text-5xl font-bold mt-3">
          Expériences professionnelles
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Plus de 6 ans d&apos;expérience dans le développement
          d&apos;applications web modernes, de plateformes métiers
          et de solutions Fullstack.
        </p>
      </div>

      <Timeline position="alternate">

        {experiences.map((experience, index) => (
          <TimelineItem key={experience.period}>

            <TimelineSeparator>

              <TimelineDot
                color="warning"
                sx={{
                  width: 18,
                  height: 18,
                }}
              />

              {index !== experiences.length - 1 && (
                <TimelineConnector />
              )}

            </TimelineSeparator>

            <TimelineContent>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: .5,
                }}
                className="
                    glass
                    rounded-3xl
                    p-8
                    border
                    border-gray-700
                    hover:border-yellow-400
                    transition-all
                    duration-300
                "
              >

                <div className="flex flex-wrap justify-between gap-3">

                  <div>

                    <h3 className="text-yellow-400 text-lg font-semibold">
                      {experience.period}
                    </h3>

                    <h2 className="text-2xl font-bold mt-1">
                      {experience.position}
                    </h2>

                    <p className="text-gray-300 mt-1">
                      {experience.company}
                    </p>

                  </div>

                  <div className="text-right">

                    <span className="inline-block px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm">
                      {experience.sector}
                    </span>

                  </div>

                </div>

                {/* <p className="mt-6 text-gray-400 leading-8">
                  {experience.description}
                </p> */}

                {/* <div className="mt-8">

                  <h4 className="font-semibold mb-4">
                    Réalisations
                  </h4>

                  <ul className="space-y-3">

                    {experience.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-3"
                      >
                        <span className="text-yellow-400">
                          ✓
                        </span>

                        <span className="text-gray-300">
                          {achievement}
                        </span>

                      </li>
                    ))}

                  </ul>

                </div> */}

                <div className="flex flex-wrap gap-3 mt-8">

                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-yellow-400/10
                        border
                        border-yellow-400/20
                        text-yellow-400
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </motion.div>

            </TimelineContent>

          </TimelineItem>
        ))}

      </Timeline>
    </section>
  );
}