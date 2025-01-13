type Hour = "8h30 - 12h00" | "13h00 - 16h30";

type Hours = {
  MORNING: Hour;
  AFTERNOON: Hour;
};

type Room = "Room 3" | "Room 7" | "Room 9";

type Rooms = {
  [key in Room]: string;
};

type Teacher = "DOLL" | "AUER" | "AUER_TC" | "VETTER" | "REIN" | "NAAS" | "JURKIEWICZ" | "BENNIS" | "HABERMACHER" | "WERMELINGER";

type Teachers = {
  [key in Teacher]: string;
};

type ModuleName =
  "Culture informatique" |
  "Développement web" |
  "Communication" |
  "Gestion de projets" |
  "Sites web dynamiques"
;

type ModuleSubject =
  "RESEAUX" |
  "ALGO" |
  "CYBER" |
  "HTML" |
  "HTML_TC" |
  "JS" |
  "GRAPHISME" |
  "ANGLAIS" |
  "EXPR_ECRITE" |
  "FINANCE" |
  "PHP"
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
}

type Lesson = {
  name: ModuleName;
  id: string;

  module: Module;

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