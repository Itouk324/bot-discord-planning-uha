type Hour = "8h30 - 12h00" | "13h00 - 16h30" | "Toute la journée";

type Hours = {
  MORNING: Hour;
  AFTERNOON: Hour;
};

type Room = "Room 3" | "Room 7" | "Room 9" | "Room 4";

type Rooms = {
  [key in Room]: string;
};

type Teacher = "DOLL" | "AUER" | "AUER_TC" | "VETTER" | "REIN" | "REIN_TC" | "NAAS" | "NAAS_TC" | "JURKIEWICZ" | "BENNIS" | "HABERMACHER" | "WERMELINGER" | "FIMBEL" | "TAMAYO" | "EHRHART" | "EHRHART_TC" | "DESSAINT" | "SCHNEIDER_TC";

type Teachers = {
  [key in Teacher]: string;
};

type ModuleName =
  "Culture informatique" |
  "Développement web" |
  "Communication" |
  "Gestion de projets" |
  "Sites web dynamiques" |
  "Projet fîl rouge"
;

type ModuleSubject =
  "RESEAUX" |
  "ALGO" |
  "CYBER" |
  "HTML" |
  "HTML_TC" |
  "JS" |
  "JS_TC" |
  "GRAPHISME" |
  "GRAPHISME_TC" |
  "ANGLAIS" |
  "EXPR_ECRITE" |
  "FINANCE" |
  "PHP" |
  "EXPR_ORALE" |
  "METHODOLOGIE" |
  "FIL_ROUGE_TC" |
  "MYSQL" |
  "MYSQL_TC"
;

type Subject = {
  name: string;
  id: string;
};

type Module = {
  name: ModuleName;
  id: string;

  subjects: Partial<{
    [key in ModuleSubject]: Subject;
  }>;
};

type Modules = {
  CULTURE_INFO: Module;
  DEV_WEB: Module;
  COMM: Module;
  GESTION: Module;
  WEB_DYN: Module;
  PROJET: Module;
}

type Lesson = {
  name: ModuleName;
  id: string;

  module: Module;
  subject: Subject;

  teacher: Teacher;
  room: Room;
  hour: Hour;
};

export type {
  Hour, Hours,
  Room, Rooms,
  Teacher, Teachers,
  ModuleName, Module, ModuleSubject, Subject, Lesson, Modules
};