import Container from "./ui/container";
import SectionTitle from "./ui/sectionTitle";
import AnimatedCard from "./ui/animatedCard";

import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <Container>

        <SectionTitle
          subtitle="PORTFOLIO"
          title="Mes projets"
        />

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <AnimatedCard key={project.title}>

              <span className="text-red-400">
                {project.sector}
              </span>

              <h3 className="text-2xl font-bold mt-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">

                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-yellow-400/10
                      text-yellow-400
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </AnimatedCard>
          ))}
        </div>

      </Container>
    </section>
  );
}