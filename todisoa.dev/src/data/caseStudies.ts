import { CaseStudy } from "../types/caseStudy";

export const caseStudies: CaseStudy[] = [
  {
    id: "mongodb-performance",

    title: "Optimisation des performances MongoDB",

    project: "Plateforme Assurance",

    challenge:
      "Certaines fonctionnalités métier manipulaient plusieurs milliers d'enregistrements. Les utilisateurs devaient parfois attendre plusieurs secondes avant d'obtenir les résultats.",

    solution:
      "Analyse des requêtes lentes, ajout d'index ciblés, optimisation des Aggregation Pipelines, réduction des données retournées par les API et amélioration des traitements Node.js.",

    result:
      "Réduction jusqu'à 40 % du temps de réponse des principales fonctionnalités tout en diminuant la charge des serveurs.",

    learnings: [
      "MongoDB Indexes",
      "Aggregation Pipeline",
      "Analyse des performances",
      "Optimisation Backend",
    ],

    technologies: [
      "MongoDB",
      "Node.js",
      "TypeScript",
    ],
  },

  {
    id: "migration",

    title: "Migration MongoDB v4 → v7",

    project: "Gestion documentaire",

    challenge:
      "Migrer une base de données contenant plusieurs années de documents tout en limitant les risques d'interruption et de perte de données.",

    solution:
      "Développement de scripts Node.js automatisés pour la migration des collections, validation des données et vérification de la compatibilité applicative.",

    result:
      "Migration réalisée avec succès tout en améliorant la stabilité et les performances globales de la plateforme.",

    learnings: [
      "Migration de données",
      "Automatisation",
      "Validation",
      "Maintenance",
    ],

    technologies: [
      "MongoDB",
      "Node.js",
      "TypeScript",
    ],
  },

  {
    id: "cee",

    title: "Architecture de gestion des dossiers CEE",

    project: "Plateforme CEE",

    challenge:
      "Les différents secteurs d'activité possédaient leurs propres règles métier, formulaires et processus de validation. L'application devait rester flexible sans dupliquer le code.",

    solution:
      "Création d'une architecture basée sur des composants React réutilisables, formulaires dynamiques et factorisation des traitements communs.",

    result:
      "Développement plus rapide des nouvelles fonctionnalités et amélioration de la productivité des équipes métier.",

    learnings: [
      "Architecture React",
      "Composants réutilisables",
      "UX métier",
      "Formulaires dynamiques",
    ],

    technologies: [
      "React",
      "Next.js",
      "JavaScript",
    ],
  },

  {
    id: "shopify",

    title: "Optimisation d'une boutique Shopify",

    project: "Optimisation Shopify",

    challenge:
      "Une boutique Shopify présentait un temps de chargement élevé causé par des scripts JavaScript inutiles, des images volumineuses et plusieurs ressources bloquantes.",

    solution:
      "Audit complet avec Lighthouse, suppression des scripts inutilisés, optimisation des images, lazy loading, optimisation du thème Shopify et réduction des ressources critiques.",

    result:
      "Amélioration sensible des performances de la boutique, meilleure expérience utilisateur et optimisation du référencement naturel.",

    learnings: [
      "Lighthouse",
      "Core Web Vitals",
      "Optimisation JavaScript",
      "Optimisation des images",
    ],

    technologies: [
      "Shopify",
      "JavaScript",
      "Liquid",
      "HTML",
      "CSS",
    ],
  },

  {
    id: "ecommerce",

    title: "Architecture d'une plateforme E-commerce",

    project: "Plateforme E-commerce",

    challenge:
      "Développer une plateforme capable de gérer un catalogue important de produits, les commandes et les échanges entre le frontend et le backend.",

    solution:
      "Développement du frontend React, création des API Node.js, intégration de GraphQL et modélisation de la base PostgreSQL avec Sequelize.",

    result:
      "Une plateforme performante offrant une navigation fluide et une architecture facilement maintenable.",

    learnings: [
      "GraphQL",
      "Sequelize",
      "PostgreSQL",
      "Architecture API",
    ],

    technologies: [
      "React",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "Sequelize",
    ],
  },

  {
    id: "ged",

    title: "Optimisation d'une plateforme GED",

    project: "Gestion documentaire",

    challenge:
      "Maintenir une plateforme manipulant plusieurs millions de documents tout en garantissant des temps de recherche et de traitement rapides.",

    solution:
      "Optimisation des traitements backend, amélioration des composants Angular, maintenance MongoDB et développement de scripts Node.js.",

    result:
      "Une plateforme plus stable, plus rapide et plus simple à maintenir.",

    learnings: [
      "Angular",
      "Maintenance",
      "Optimisation Backend",
      "MongoDB",
    ],

    technologies: [
      "Angular",
      "Node.js",
      "MongoDB",
    ],
  },

  {
    id: "accounting",

    title: "Évolution d'une plateforme de gestion comptable",

    project: "Gestion comptable",

    challenge:
      "Développer de nouvelles fonctionnalités sans interrompre les traitements comptables déjà utilisés par les équipes métier.",

    solution:
      "Développement de nouvelles fonctionnalités, optimisation des traitements Node.js et maintenance continue de la base MongoDB.",

    result:
      "Une plateforme plus performante, plus stable et plus simple à faire évoluer.",

    learnings: [
      "Architecture métier",
      "Maintenance évolutive",
      "Optimisation",
      "Développement Agile",
    ],

    technologies: [
      "Angular",
      "Node.js",
      "MongoDB",
    ],
  },

  {
    id: "frontend",

    title: "Création d'une architecture React réutilisable",

    project: "Plusieurs projets",

    challenge:
      "Plusieurs projets nécessitaient des composants similaires, entraînant de la duplication et un coût de maintenance élevé.",

    solution:
      "Mise en place de composants React réutilisables, standardisation des interfaces, amélioration de l'accessibilité et optimisation des performances de rendu.",

    result:
      "Réduction du temps de développement des nouveaux écrans et amélioration de la qualité globale des applications.",

    learnings: [
      "React",
      "Design System",
      "Responsive Design",
      "Accessibilité",
    ],

    technologies: [
      "React",
      "Material UI",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
];