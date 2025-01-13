import { HOURS, MODULES } from "./consts";
import { Lesson } from "./types";

type DayLessons = {
  [key: string]: Lesson[];
};

const JANUARY_LESSONS: DayLessons = {
  "06/01/2025": [
    {
      name: MODULES.DEV_WEB.name,
      id: MODULES.DEV_WEB.subjects.HTML!.id,
      module: MODULES.DEV_WEB,
      teacher: "AUER",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.DEV_WEB.name,
      id: MODULES.DEV_WEB.subjects.HTML!.id,
      module: MODULES.DEV_WEB,
      teacher: "AUER",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "07/01/2025": [
    {
      name: MODULES.CULTURE_INFO.name,
      id: MODULES.CULTURE_INFO.subjects.RESEAUX!.id,
      module: MODULES.CULTURE_INFO,
      teacher: "DOLL",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.CULTURE_INFO.name,
      id: MODULES.CULTURE_INFO.subjects.RESEAUX!.id,
      module: MODULES.CULTURE_INFO,
      teacher: "DOLL",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "08/01/2025": [
    {
      name: MODULES.DEV_WEB.name,
      id: MODULES.DEV_WEB.subjects.GRAPHISME!.id,
      module: MODULES.DEV_WEB,
      teacher: "NAAS",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.DEV_WEB.name,
      id: MODULES.DEV_WEB.subjects.GRAPHISME!.id,
      module: MODULES.DEV_WEB,
      teacher: "NAAS",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "09/01/2025": [
    {
      name: MODULES.CULTURE_INFO.name,
      id: MODULES.CULTURE_INFO.subjects.RESEAUX!.id,
      module: MODULES.CULTURE_INFO,
      teacher: "DOLL",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.CULTURE_INFO.name,
      id: MODULES.CULTURE_INFO.subjects.RESEAUX!.id,
      module: MODULES.CULTURE_INFO,
      teacher: "DOLL",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "10/01/2025": [
    {
      name: MODULES.DEV_WEB.name,
      id: MODULES.DEV_WEB.subjects.JS!.id,
      module: MODULES.DEV_WEB,
      teacher: "AUER",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.DEV_WEB.name,
      id: MODULES.DEV_WEB.subjects.JS!.id,
      module: MODULES.DEV_WEB,
      teacher: "AUER",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "13/01/2025": [
    {
      name: MODULES.CULTURE_INFO.name,
      id: MODULES.CULTURE_INFO.subjects.RESEAUX!.id,
      module: MODULES.CULTURE_INFO,
      teacher: "DOLL",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.CULTURE_INFO.name,
      id: MODULES.CULTURE_INFO.subjects.RESEAUX!.id,
      module: MODULES.CULTURE_INFO,
      teacher: "DOLL",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "14/01/2025": [
    {
      name: MODULES.DEV_WEB.name,
      id: MODULES.DEV_WEB.subjects.HTML!.id,
      module: MODULES.DEV_WEB,
      teacher: "AUER",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.DEV_WEB.name,
      id: MODULES.DEV_WEB.subjects.HTML!.id,
      module: MODULES.DEV_WEB,
      teacher: "AUER",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "15/01/2025": [
    {
      name: MODULES.COMM.name,
      id: MODULES.COMM.subjects.ANGLAIS!.id,
      module: MODULES.COMM,
      teacher: "VETTER",
      room: "Room 9",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.COMM.name,
      id: MODULES.COMM.subjects.ANGLAIS!.id,
      module: MODULES.COMM,
      teacher: "VETTER",
      room: "Room 9",
      hour: HOURS.AFTERNOON
    }
  ],
  "16/01/2025": [
    {
      name: MODULES.COMM.name,
      id: MODULES.COMM.subjects.ANGLAIS!.id,
      module: MODULES.COMM,
      teacher: "VETTER",
      room: "Room 9",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.CULTURE_INFO.name,
      id: MODULES.CULTURE_INFO.subjects.ALGO!.id,
      module: MODULES.CULTURE_INFO,
      teacher: "REIN",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "17/01/2025": [
    {
      name: MODULES.WEB_DYN.name,
      id: MODULES.WEB_DYN.subjects.PHP!.id,
      module: MODULES.WEB_DYN,
      teacher: "JURKIEWICZ",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.WEB_DYN.name,
      id: MODULES.WEB_DYN.subjects.PHP!.id,
      module: MODULES.WEB_DYN,
      teacher: "JURKIEWICZ",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "20/01/2025": [
    {
      name: MODULES.DEV_WEB.name,
      id: MODULES.DEV_WEB.subjects.GRAPHISME!.id,
      module: MODULES.DEV_WEB,
      teacher: "NAAS",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.DEV_WEB.name,
      id: MODULES.DEV_WEB.subjects.GRAPHISME!.id,
      module: MODULES.DEV_WEB,
      teacher: "NAAS",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "21/01/2025": [
    {
      name: MODULES.CULTURE_INFO.name,
      id: MODULES.CULTURE_INFO.subjects.CYBER!.id,
      module: MODULES.CULTURE_INFO,
      teacher: "BENNIS",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.CULTURE_INFO.name,
      id: MODULES.CULTURE_INFO.subjects.CYBER!.id,
      module: MODULES.CULTURE_INFO,
      teacher: "BENNIS",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "22/01/2025": [
    {
      name: MODULES.GESTION.name,
      id: MODULES.GESTION.subjects.FINANCE!.id,
      module: MODULES.GESTION,
      teacher: "HABERMACHER",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.GESTION.name,
      id: MODULES.GESTION.subjects.FINANCE!.id,
      module: MODULES.GESTION,
      teacher: "HABERMACHER",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "23/01/2025": [
    {
      name: MODULES.GESTION.name,
      id: MODULES.GESTION.subjects.FINANCE!.id,
      module: MODULES.GESTION,
      teacher: "HABERMACHER",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.CULTURE_INFO.name,
      id: MODULES.CULTURE_INFO.subjects.ALGO!.id,
      module: MODULES.CULTURE_INFO,
      teacher: "REIN",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "24/01/2025": [
    {
      name: MODULES.DEV_WEB.name,
      id: MODULES.DEV_WEB.subjects.HTML!.id,
      module: MODULES.DEV_WEB,
      teacher: "AUER",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.DEV_WEB.name,
      id: MODULES.DEV_WEB.subjects.HTML!.id,
      module: MODULES.DEV_WEB,
      teacher: "AUER",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "27/01/2025": [
    {
      name: MODULES.DEV_WEB.name,
      id: MODULES.DEV_WEB.subjects.HTML!.id,
      module: MODULES.DEV_WEB,
      teacher: "AUER",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.DEV_WEB.name,
      id: MODULES.DEV_WEB.subjects.HTML_TC!.id,
      module: MODULES.DEV_WEB,
      teacher: "AUER_TC",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "28/01/2025": [
    {
      name: MODULES.DEV_WEB.name,
      id: MODULES.DEV_WEB.subjects.HTML_TC!.id,
      module: MODULES.DEV_WEB,
      teacher: "AUER_TC",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.COMM.name,
      id: MODULES.COMM.subjects.EXPR_ECRITE!.id,
      module: MODULES.COMM,
      teacher: "WERMELINGER",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "29/01/2025": [
    {
      name: MODULES.GESTION.name,
      id: MODULES.GESTION.subjects.FINANCE!.id,
      module: MODULES.GESTION,
      teacher: "HABERMACHER",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.GESTION.name,
      id: MODULES.GESTION.subjects.FINANCE!.id,
      module: MODULES.GESTION,
      teacher: "HABERMACHER",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "30/01/2025": [
    {
      name: MODULES.COMM.name,
      id: MODULES.COMM.subjects.ANGLAIS!.id,
      module: MODULES.COMM,
      teacher: "VETTER",
      room: "Room 9",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.CULTURE_INFO.name,
      id: MODULES.CULTURE_INFO.subjects.ALGO!.id,
      module: MODULES.CULTURE_INFO,
      teacher: "REIN",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "31/01/2025": [
    {
      name: MODULES.WEB_DYN.name,
      id: MODULES.WEB_DYN.subjects.PHP!.id,
      module: MODULES.WEB_DYN,
      teacher: "JURKIEWICZ",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.WEB_DYN.name,
      id: MODULES.WEB_DYN.subjects.PHP!.id,
      module: MODULES.WEB_DYN,
      teacher: "JURKIEWICZ",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ]
};

export { JANUARY_LESSONS };