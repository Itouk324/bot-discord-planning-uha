import { Hours, Lesson, Module, Modules, Rooms, Teachers } from "./types";

const HOURS: Hours = {
  MORNING: "8h30 - 12h00",
  AFTERNOON: "13h00 - 16h30",
};

const ROOMS: Rooms = {
  "Room 3": "Salle 3",
  "Room 4": "Salle 4",
  "Room 7": "Salle 7",
  "Room 9": "Salle 9"
};

const TEACHERS: Teachers = {
  DOLL: "Christophe DOLL",
  AUER: "Pascal AUER",
  AUER_TC: "Pascal AUER (TC)",
  VETTER: "Oriane VETTER",
  REIN: "Valentine REIN",
  REIN_TC: "Valentine REIN (TC)",
  NAAS: "Jonathan NAAS",
  NAAS_TC: "Jonathan NAAS (TC)",
  JURKIEWICZ: "Pierre JURKIEWICZ",
  BENNIS: "Ismail BENNIS",
  HABERMACHER: "Benjamin HABERMACHER",
  WERMELINGER: "Emmanuelle WERMELINGER",
  FIMBEL: "Sabrina FIMBEL",
  TAMAYO: "Carlos TAMAYO CAPILLAS",
  EHRHART: "Christel EHRHART",
  EHRHART_TC: "Christel EHRHART (TC)",
  DESSAINT: "Baptiste DESSAINT",
  SCHNEIDER_TC: "Grégory SCHNEIDER (TC)"
};

const MODULES: Modules = {
  "CULTURE_INFO": {
    name: "Culture informatique",
    id: "1",
    subjects: {
      "RESEAUX": { name: "Les réseaux d'entreprise", id: "1.2" },
      "CYBER": { name: "La cybersécurité", id: "1.3" },
      "ALGO": { name: "Algorithmique", id: "1.4" }
    }
  },
  "DEV_WEB": {
    name: "Développement web",
    id: "2",
    subjects: {
      HTML: { name: "HTML/CSS", id: "2.1" },
      HTML_TC: { name: "HTML/CSS (TC)", id: "2.1" },
      GRAPHISME: { name: "Graphisme pour le web", id: "2.2" },
      JS: { name: "JavaScript et JQuerry", id: "2.3" },
      JS_TC: { name: "JavaScript et JQuerry (TC)", id: "2.3" }
    }
  },
  COMM: {
    name: "Communication",
    id: "5",
    subjects: {
      ANGLAIS: { name: "Anglais pour l'informatique", id: "5.4" },
      EXPR_ECRITE: { name: "Technique d'expression écrite", id: "5.1" },
      EXPR_ORALE: { name: "Expression orale", id: "5.2" }
    }
  },
  GESTION: {
    name: "Gestion de projets",
    id: "4",
    subjects: {
      FINANCE: { name: "Éléments financiers du projet", id: "4.2" },
      METHODOLOGIE: { name: "Méthodologie de gestion de projets", id: "4.1" }
    }
  },
  WEB_DYN: {
    name: "Développement web",
    id: "2",
    subjects: {
      HTML: { name: "HTML/CSS", id: "2.1" },
      HTML_TC: { name: "HTML/CSS (TC)", id: "2.1" },
      GRAPHISME: { name: "Graphisme pour le web", id: "2.2" },
      GRAPHISME_TC: { name: "Graphisme pour le web (TC)", id: "2.2" },
      MYSQL: { name: "Conception et utilisation de bases de données MySQL", id: "3.2" },
      MYSQL_TC: { name: "Conception et utilisation de bases de données MySQL (TC)", id: "3.2" }
    }
  },
  PROJET: {
    name: "Projet fîl rouge",
    id: "6",
    subjects: {
      FIL_ROUGE_TC: { name: "Projet fil rouge (TC)", id: "6.1" }
    }
  }
};

export type { Lesson, Module, Modules, Rooms, Teachers };
export { HOURS, ROOMS, TEACHERS, MODULES };