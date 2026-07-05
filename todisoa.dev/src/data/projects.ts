import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "cee",

    title: "Plateforme de gestion des dossiers CEE",

    company: "Freelance",

    sector: "Énergie • Transition énergétique",

    period: "Mars 2025 - Aujourd'hui",

    status: "NDA",

    thumbnail: "images/software.jpg",

    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "Git",
    ],

    shortDescription:
      "Plateforme de gestion et de traitement des Certificats d'Économies d'Énergie.",

    overview:
      "Développement d'une plateforme web destinée à la gestion et au traitement des dossiers CEE classés par secteur d'activité.",

    challenge:
      "Développer une interface permettant la gestion de nombreux types de dossiers avec des règles métiers spécifiques.",

    solution:
      "Développement d'interfaces avec React et Next.js, création de composants dynamiques et collaboration avec l'équipe backend.",

    result:
      "Une plateforme performante offrant une navigation fluide et une meilleure expérience utilisateur.",

    responsibilities: [
      "Conception des interfaces utilisateur",
      "Développement de composants React réutilisables",
      "Optimisation de l'expérience utilisateur",
      "Collaboration avec les développeurs backend",
    ],

    screenshots: [],

    featured: true,
  },

  {
    id: "assurance",

    title: "Plateforme Assurance",

    company: "Mada ITLab",

    sector: "Assurance • Réassurance",

    period: "Novembre 2024 - Février 2025",

    status: "NDA",

    thumbnail: "/images/software.jpg",

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "TypeScript",
    ],

    shortDescription:
      "Modernisation d'une application métier destinée au secteur de l'assurance.",

    overview:
      "Intervention sur une application métier afin d'améliorer les performances backend et de moderniser l'interface utilisateur.",

    challenge:
      "Optimiser les performances de l'application tout en améliorant l'ergonomie de l'interface.",

    solution:
      "Optimisation des requêtes MongoDB, création de scripts Node.js, refonte des composants React et amélioration de l'accessibilité.",

    result:
      "Réduction des temps de réponse jusqu'à 40 % et amélioration de l'expérience utilisateur.",

    responsibilities: [
      "Optimisation des requêtes MongoDB",
      "Création de scripts de migration Node.js",
      "Refonte de composants React",
      "Ajout de nouveaux écrans",
      "Responsive Design",
      "Accessibilité ARIA",
    ],

    screenshots: [],

    featured: true,
  },

  {
    id: "ong",

    title: "Plateforme ONG",

    company: "Indépendant",

    sector: "ONG",

    period: "2020 - 2021",

    status: "Public",

    thumbnail: "/images/software.jpg",

    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Sequelize",
    ],

    shortDescription:
      "Application web pour promouvoir les activités d'une ONG et faciliter les dons.",

    overview:
      "Création d'une plateforme permettant de présenter les activités d'une ONG et de faciliter les dons.",

    challenge:
      "Concevoir une plateforme simple permettant de valoriser les actions de l'organisation.",

    solution:
      "Développement complet de l'application en collaboration avec le client.",

    result:
      "Une plateforme facilitant la communication et les dons.",

    responsibilities: [
      "Développement Fullstack",
      "Analyse des besoins",
      "Échanges avec le client",
    ],

    screenshots: [],
  },

  {
    id: "ecommerce",

    title: "Location d'engins & E-commerce",

    company: "Indépendant",

    sector: "Location d'engins • E-commerce",

    period: "2020 - 2021",

    status: "NDA",

    thumbnail: "images/software.jpg",

    technologies: [
      "React",
      "React Native",
      "Shopify",
      "MongoDB",
    ],

    shortDescription:
      "Maintenance, optimisation et évolution de plateformes e-commerce.",

    overview:
      "Intervention sur plusieurs plateformes de location d'engins et e-commerce.",

    challenge:
      "Optimiser les performances, corriger les anomalies et faire évoluer les applications.",

    solution:
      "Migration MongoDB, optimisation des performances et développement de nouvelles fonctionnalités.",

    result:
      "Applications plus performantes et sécurisées.",

    responsibilities: [
      "Migration MongoDB v4 → v5",
      "Optimisation des performances",
      "Correction de bugs",
      "Développement de fonctionnalités",
      "Intégration de contenu",
    ],

    screenshots: [],
  },

  {
    id: "ged",

    title: "Plateforme de gestion documentaire",

    company: "NUMEN Madagascar",

    sector: "Gestion documentaire",

    period: "2021 - 2024",

    status: "NDA",

    thumbnail: "/images/software.jpg",

    technologies: [
      "Angular",
      "Node.js",
      "MongoDB",
      "TypeScript",
    ],

    shortDescription:
      "Plateforme d'archivage numérique et de gestion documentaire.",

    overview:
      "Conception et maintenance d'une plateforme de gestion documentaire et de processus comptables.",

    challenge:
      "Améliorer la maintenance, les performances et accompagner l'évolution de la plateforme.",

    solution:
      "Développement de nouvelles fonctionnalités, maintenance de la base de données et migrations MongoDB.",

    result:
      "Une plateforme documentaire robuste et évolutive.",

    responsibilities: [
      "Développement Fullstack",
      "Migration MongoDB v4 → v7",
      "Optimisation backend",
      "Maintenance de la base de données",
      "Création de scripts Node.js",
    ],

    screenshots: [],

    featured: true,
  },

  {
    id: "restaurant",

    title: "Application Restaurant",

    company: "NOGAE Développement",

    sector: "Restauration",

    period: "2018 - 2020",

    status: "NDA",

    thumbnail: "images/software.jpg",

    technologies: [
      "React",
      "Node.js",
      "TypeScript",
    ],

    shortDescription:
      "Application de commande en ligne avec suivi en temps réel.",

    overview:
      "Développement d'une plateforme permettant aux clients de commander en ligne et de suivre leurs commandes.",

    challenge:
      "Créer un système de gestion des commandes simple et fiable.",

    solution:
      "Développement des fonctionnalités de commande, menus et notifications.",

    result:
      "Une plateforme facilitant les commandes et le suivi des clients.",

    responsibilities: [
      "Développement Fullstack",
      "Gestion des commandes",
      "Notifications",
    ],

    screenshots: [],
  },

  {
    id: "tourisme",

    title: "Application Tourisme",

    company: "NOGAE Développement",

    sector: "Tourisme",

    period: "2018 - 2020",

    status: "NDA",

    thumbnail: "/images/software.jpg",

    technologies: [
      "React",
      "Node.js",
      "Sequelize",
      "TypeScript",
    ],

    shortDescription:
      "Application d'aide aux voyageurs avec carte interactive.",

    overview:
      "Développement d'une application permettant de localiser les banques et hôpitaux.",

    challenge:
      "Faciliter l'accès aux services essentiels pour les touristes.",

    solution:
      "Intégration d'une carte interactive et d'un système de filtres.",

    result:
      "Recherche simplifiée des services essentiels.",

    responsibilities: [
      "Développement React",
      "Intégration de cartes",
      "Développement backend",
    ],

    screenshots: [],
  },

  {
    id: "event",

    title: "Application de réservation événementielle",

    company: "NOGAE Développement",

    sector: "Événementiel",

    period: "2018 - 2020",

    status: "NDA",

    thumbnail: "/images/software.jpg",

    technologies: [
      "React",
      "Node.js",
      "GraphQL",
      "TypeScript",
    ],

    shortDescription:
      "Plateforme de gestion des réservations pour un événement annuel.",

    overview:
      "Développement d'une application de réservation destinée à un événement médical organisé en Guadeloupe.",

    challenge:
      "Gérer les réservations et les disponibilités des participants.",

    solution:
      "Développement d'un système de réservation avec gestion des disponibilités et notifications.",

    result:
      "Une gestion simplifiée des réservations pour les organisateurs et les participants.",

    responsibilities: [
      "Développement Fullstack",
      "Gestion des réservations",
      "Notifications",
    ],

    screenshots: [],
  },
];