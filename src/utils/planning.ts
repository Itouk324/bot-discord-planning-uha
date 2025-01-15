import { HOURS, Lesson, MODULES } from "./consts";

type DayLessons = {
  [key: string]: Lesson[];
};

export const JANUARY_LESSONS: DayLessons = {
  "06/01/2025": [
    {
      name: MODULES.DEV_WEB.name,
      id: "2.1",
      subject: MODULES.DEV_WEB.subjects.HTML!,
      module: MODULES.DEV_WEB,
      teacher: "AUER",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.DEV_WEB.name,
      id: "2.1",
      subject: MODULES.DEV_WEB.subjects.HTML!,
      module: MODULES.DEV_WEB,
      teacher: "AUER",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "07/01/2025": [
    {
      name: MODULES.CULTURE_INFO.name,
      id: "1.2",
      subject: MODULES.CULTURE_INFO.subjects.RESEAUX!,
      module: MODULES.CULTURE_INFO,
      teacher: "DOLL",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.CULTURE_INFO.name,
      id: "1.2",
      subject: MODULES.CULTURE_INFO.subjects.RESEAUX!,
      module: MODULES.CULTURE_INFO,
      teacher: "DOLL",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "08/01/2025": [
    {
      name: MODULES.DEV_WEB.name,
      id: "2.2",
      subject: MODULES.DEV_WEB.subjects.GRAPHISME!,
      module: MODULES.DEV_WEB,
      teacher: "NAAS",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.DEV_WEB.name,
      id: "2.2",
      subject: MODULES.DEV_WEB.subjects.GRAPHISME!,
      module: MODULES.DEV_WEB,
      teacher: "NAAS",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "09/01/2025": [
    {
      name: MODULES.CULTURE_INFO.name,
      id: "1.2",
      subject: MODULES.CULTURE_INFO.subjects.RESEAUX!,
      module: MODULES.CULTURE_INFO,
      teacher: "DOLL",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.CULTURE_INFO.name,
      id: "1.2",
      subject: MODULES.CULTURE_INFO.subjects.RESEAUX!,
      module: MODULES.CULTURE_INFO,
      teacher: "DOLL",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "10/01/2025": [
    {
      name: MODULES.DEV_WEB.name,
      id: "2.3",
      subject: MODULES.DEV_WEB.subjects.JS!,
      module: MODULES.DEV_WEB,
      teacher: "AUER",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.DEV_WEB.name,
      id: "2.3",
      subject: MODULES.DEV_WEB.subjects.JS!,
      module: MODULES.DEV_WEB,
      teacher: "AUER",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "13/01/2025": [
    {
      name: MODULES.CULTURE_INFO.name,
      id: "1.2",
      subject: MODULES.CULTURE_INFO.subjects.RESEAUX!,
      module: MODULES.CULTURE_INFO,
      teacher: "DOLL",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.CULTURE_INFO.name,
      id: "1.2",
      subject: MODULES.CULTURE_INFO.subjects.RESEAUX!,
      module: MODULES.CULTURE_INFO,
      teacher: "DOLL",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "14/01/2025": [
    {
      name: MODULES.DEV_WEB.name,
      id: "2.1",
      subject: MODULES.DEV_WEB.subjects.HTML!,
      module: MODULES.DEV_WEB,
      teacher: "AUER",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.DEV_WEB.name,
      id: "2.1",
      subject: MODULES.DEV_WEB.subjects.HTML!,
      module: MODULES.DEV_WEB,
      teacher: "AUER",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "15/01/2025": [
    {
      name: MODULES.COMM.name,
      id: "5.4",
      subject: MODULES.COMM.subjects.ANGLAIS!,
      module: MODULES.COMM,
      teacher: "VETTER",
      room: "Room 9",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.COMM.name,
      id: "5.4",
      subject: MODULES.COMM.subjects.ANGLAIS!,
      module: MODULES.COMM,
      teacher: "VETTER",
      room: "Room 9",
      hour: HOURS.AFTERNOON
    }
  ],
  "16/01/2025": [
    {
      name: MODULES.COMM.name,
      id: "5.4",
      subject: MODULES.COMM.subjects.ANGLAIS!,
      module: MODULES.COMM,
      teacher: "VETTER",
      room: "Room 9",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.CULTURE_INFO.name,
      id: "1.4",
      subject: MODULES.CULTURE_INFO.subjects.ALGO!,
      module: MODULES.CULTURE_INFO,
      teacher: "REIN",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "17/01/2025": [
    {
      name: MODULES.WEB_DYN.name,
      id: "3.1",
      subject: MODULES.WEB_DYN.subjects.PHP!,
      module: MODULES.WEB_DYN,
      teacher: "JURKIEWICZ",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.WEB_DYN.name,
      id: "3.1",
      subject: MODULES.WEB_DYN.subjects.PHP!,
      module: MODULES.WEB_DYN,
      teacher: "JURKIEWICZ",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "20/01/2025": [
    {
      name: MODULES.DEV_WEB.name,
      id: "2.2",
      subject: MODULES.DEV_WEB.subjects.GRAPHISME!,
      module: MODULES.DEV_WEB,
      teacher: "NAAS",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.DEV_WEB.name,
      id: "2.2",
      subject: MODULES.DEV_WEB.subjects.GRAPHISME!,
      module: MODULES.DEV_WEB,
      teacher: "NAAS",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "21/01/2025": [
    {
      name: MODULES.CULTURE_INFO.name,
      id: "1.3",
      subject: MODULES.CULTURE_INFO.subjects.CYBER!,
      module: MODULES.CULTURE_INFO,
      teacher: "BENNIS",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.CULTURE_INFO.name,
      id: "1.3",
      subject: MODULES.CULTURE_INFO.subjects.CYBER!,
      module: MODULES.CULTURE_INFO,
      teacher: "BENNIS",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "22/01/2025": [
    {
      name: MODULES.GESTION.name,
      id: "4.2",
      subject: MODULES.GESTION.subjects.FINANCE!,
      module: MODULES.GESTION,
      teacher: "HABERMACHER",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.GESTION.name,
      id: "4.2",
      subject: MODULES.GESTION.subjects.FINANCE!,
      module: MODULES.GESTION,
      teacher: "HABERMACHER",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "23/01/2025": [
    {
      name: MODULES.GESTION.name,
      id: "4.2",
      subject: MODULES.GESTION.subjects.FINANCE!,
      module: MODULES.GESTION,
      teacher: "HABERMACHER",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.CULTURE_INFO.name,
      id: "1.4",
      subject: MODULES.CULTURE_INFO.subjects.ALGO!,
      module: MODULES.CULTURE_INFO,
      teacher: "REIN",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "24/01/2025": [
    {
      name: MODULES.DEV_WEB.name,
      id: "2.1",
      subject: MODULES.DEV_WEB.subjects.HTML!,
      module: MODULES.DEV_WEB,
      teacher: "AUER",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.DEV_WEB.name,
      id: "2.1",
      subject: MODULES.DEV_WEB.subjects.HTML!,
      module: MODULES.DEV_WEB,
      teacher: "AUER",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "27/01/2025": [
    {
      name: MODULES.DEV_WEB.name,
      id: "2.1",
      subject: MODULES.DEV_WEB.subjects.HTML!,
      module: MODULES.DEV_WEB,
      teacher: "AUER",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.DEV_WEB.name,
      id: "2.1",
      subject: MODULES.DEV_WEB.subjects.HTML_TC!,
      module: MODULES.DEV_WEB,
      teacher: "AUER_TC",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "28/01/2025": [
    {
      name: MODULES.DEV_WEB.name,
      id: "2.1",
      subject: MODULES.DEV_WEB.subjects.HTML_TC!,
      module: MODULES.DEV_WEB,
      teacher: "AUER_TC",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.COMM.name,
      id: "5.1",
      subject: MODULES.COMM.subjects.EXPR_ECRITE!,
      module: MODULES.COMM,
      teacher: "WERMELINGER",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "29/01/2025": [
    {
      name: MODULES.GESTION.name,
      id: "4.2",
      subject: MODULES.GESTION.subjects.FINANCE!,
      module: MODULES.GESTION,
      teacher: "HABERMACHER",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.GESTION.name,
      id: "4.2",
      subject: MODULES.GESTION.subjects.FINANCE!,
      module: MODULES.GESTION,
      teacher: "HABERMACHER",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "30/01/2025": [
    {
      name: MODULES.COMM.name,
      id: "5.4",
      subject: MODULES.COMM.subjects.ANGLAIS!,
      module: MODULES.COMM,
      teacher: "VETTER",
      room: "Room 9",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.CULTURE_INFO.name,
      id: "1.4",
      subject: MODULES.CULTURE_INFO.subjects.ALGO!,
      module: MODULES.CULTURE_INFO,
      teacher: "REIN",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ],
  "31/01/2025": [
    {
      name: MODULES.WEB_DYN.name,
      id: "3.1",
      subject: MODULES.WEB_DYN.subjects.PHP!,
      module: MODULES.WEB_DYN,
      teacher: "JURKIEWICZ",
      room: "Room 7",
      hour: HOURS.MORNING
    },
    {
      name: MODULES.WEB_DYN.name,
      id: "3.1",
      subject: MODULES.WEB_DYN.subjects.PHP!,
      module: MODULES.WEB_DYN,
      teacher: "JURKIEWICZ",
      room: "Room 7",
      hour: HOURS.AFTERNOON
    }
  ]
};

export const AllLessons = {
  ...JANUARY_LESSONS
};