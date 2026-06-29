import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Plateforme Assurance",
    sector: "Assurance",
    description:
      "Optimisation des performances backend et refonte de l'interface utilisateur.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
    ],
  },

  {
    title: "Gestion des dossiers CEE",
    sector: "Énergie",
    description:
      "Plateforme de gestion et de traitement des certificats d'économie d'énergie.",
    technologies: [
      "Next.js",
      "React",
    ],
  },

  {
    title: "Gestion documentaire",
    sector: "Comptabilité",
    description:
      "Archivage numérique et gestion documentaire.",
    technologies: [
      "Angular",
      "Node.js",
      "MongoDB",
    ],
  },
];