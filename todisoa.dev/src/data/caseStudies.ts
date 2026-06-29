export const caseStudies = [
  {
    title: "Optimisation des performances MongoDB",
    challenge:
      "Certaines pages métier nécessitaient plusieurs secondes pour charger les données.",

    solution:
      "Analyse des requêtes MongoDB, ajout d'index et optimisation des pipelines d'agrégation.",

    result:
      "Réduction jusqu'à 40% du temps de réponse.",

    technologies: [
      "MongoDB",
      "Node.js",
      "Aggregation Pipeline",
    ],
  },

  {
    title: "Migration MongoDB v4 → v7",

    challenge:
        "Maintenir la compatibilité applicative tout en améliorant la sécurité et les performances.",

    solution:
        "Création de scripts Node.js automatisés pour la migration des données.",

    result:
        "Migration réalisée sans interruption majeure de service.",

    technologies: [
        "MongoDB",
        "Node.js",
        "TypeScript",
    ],
  },

  {
    title: "Gestion de dossiers CEE",

    challenge:
        "Manipuler plusieurs types de dossiers avec des règles métiers différentes.",

    solution:
        "Création de composants React réutilisables et formulaires dynamiques.",

    result:
        "Amélioration de la productivité des utilisateurs.",

    technologies: [
        "Next.js",
        "React",
        "JavaScript",
    ],
  }
];