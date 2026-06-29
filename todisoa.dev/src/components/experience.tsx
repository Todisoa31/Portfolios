"use client";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

import { experiences } from "../data/experiences";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto py-24"
    >
      <h2 className="text-center text-4xl font-bold mb-12">
        Expériences
      </h2>

      <Timeline>

        {experiences.map((item) => (
          <TimelineItem key={item.year}>
            <TimelineSeparator>
              <TimelineDot color="warning" />

              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-yellow-400">
                  {item.year}
                </h3>

                <h4 className="font-bold">
                  {item.company}
                </h4>

                <p>{item.title}</p>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}

      </Timeline>
    </section>
  );
}