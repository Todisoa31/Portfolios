import {
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiRedis,
} from "react-icons/si";

import { Skill } from "@/src/types/skill";

export const skills: Skill[] = [
  {
    name: "React",
    icon: SiReact,
    stars: 5,
    color: "#61DAFB",
    experience: "6+ ans",
    details: [
      "12+ projets professionnels",
      "Architecture SPA",
      "Hooks avancés",
      "Context API",
      "Redux Toolkit",
      "TanStack Query",
      "React Hook Form",
      "Material UI",
      "Framer Motion",
      "Optimisation des performances",
    ],
  },

  {
    name: "Next.js",
    icon: SiNextdotjs,
    stars: 5,
    color: "#FFFFFF",
    experience: "3+ ans",
    details: [
      "SSR",
      "SSG",
      "App Router",
      "Server Components",
      "SEO",
      "Optimisation des images",
      "Portfolio",
      "Plateforme CEE",
    ],
  },

  {
    name: "NestJS",
    icon: SiNestjs,
    stars: 5,
    color: "#E0234E",
    experience: "3+ ans",
    details: [
      "API REST",
      "GraphQL",
      "JWT",
      "Architecture modulaire",
      "Prisma",
      "Microservices",
    ],
  },

  {
    name: "Node.js",
    icon: SiNodedotjs,
    stars: 5,
    color: "#5FA04E",
    experience: "6+ ans",
    details: [
      "API REST",
      "Microservices",
      "Scripts Node.js",
      "RabbitMQ",
      "Authentification JWT",
      "Optimisation backend",
    ],
  },

  {
    name: "MongoDB",
    icon: SiMongodb,
    stars: 5,
    color: "#47A248",
    experience: "6+ ans",
    details: [
      "Migration MongoDB v4 → v7",
      "Aggregation Pipeline",
      "Indexation",
      "Optimisation des requêtes",
      "Transactions",
      "Mongoose",
    ],
  },

  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    stars: 4,
    color: "#336791",
    experience: "3+ ans",
    details: [
      "Relations SQL",
      "Prisma ORM",
      "Indexation",
      "Optimisation",
      "Transactions",
    ],
  },

  {
    name: "Docker",
    icon: SiDocker,
    stars: 4,
    color: "#2496ED",
    experience: "2+ ans",
    details: [
      "Docker Compose",
      "Images",
      "Volumes",
      "Déploiement",
      "Multi-stage Build",
    ],
  },

  {
    name: "Redis",
    icon: SiRedis,
    stars: 3,
    color: "#DC382D",
    experience: "1+ an",
    details: [
      "Cache",
      "Sessions",
      "Rate Limiting",
      "Optimisation des performances",
    ],
  },
];