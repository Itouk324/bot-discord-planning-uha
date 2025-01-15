import { ROOMS, TEACHERS } from "#/utils/consts";
import { Dayjs, dayJS } from "#/utils/day-js";
import { CommandExecute } from "#/utils/handler/command";
import { AllLessons } from "#/utils/planning";
import { Lesson } from "#/utils/types";
import { EmbedBuilder, User } from "discord.js";

export const execute: CommandExecute = async (command) => {
  await command.deferReply({ flags: ["SuppressNotifications"] });
  
  const next = command.options.get("next")?.value as string;
  if (next) {
    return handleNextLesson(command, next);
  }
  
  return handleDateLesson(command);
};

const handleNextLesson = async (command: any, subjectId: string) => {
  const now = dayJS();
  const sortedDates = getSortedDates();

  for (const [date, lessons] of sortedDates) {
    const lesson = lessons.find(lesson => lesson.subject.id === subjectId);
    if (!lesson) continue;

    const lessonDate = parseDate(date);
    if (isUpcomingLesson(lessonDate, lesson.hour, now)) {
      const embed = createLessonEmbed(
        `Prochain cours de ${lesson.subject.name}`,
        [lesson],
        lessonDate.toDate(),
        command.user
      );
      
      await command.editReply({ 
        embeds: [embed], 
        options: { flags: ["SuppressNotifications"] }
      });
      return;
    }
  }

  await command.editReply({ 
    content: "Aucun prochain cours n'est prévu pour cette matière.", 
    options: { flags: ["SuppressNotifications"] }
  });
};

const handleDateLesson = async (command: any) => {
  const dateStr = command.options.get("date")?.value as string;
  const now = dayJS();
  let date = getRequestedDate(dateStr);
  
  // Si après 16h30 et pas de date spécifiée, afficher les cours de demain
  const currentTime = now.hour() * 60 + now.minute();
  const threshold = 16 * 60 + 30; // 16h30 en minutes
  
  if (!dateStr && currentTime >= threshold) {
    date = now.add(1, 'day').toDate();
  }

  const formattedDate = dayJS(date).format('DD/MM/YYYY');
  const lessons = AllLessons[formattedDate];

  if (!lessons?.length) {
    await command.editReply({ 
      content: "Aucun cours n'est prévu pour cette date.", 
      options: { flags: ["SuppressNotifications"] }
    });
    return;
  }

  // Regrouper les cours identiques
  const groupedLessons = groupIdenticalLessons(lessons);

  const embed = createLessonEmbed(
    `Cours du ${formattedDate}`,
    groupedLessons,
    date,
    command.user
  );

  await command.editReply({ 
    embeds: [embed], 
    options: { flags: ["SuppressNotifications"] }
  });
};

const groupIdenticalLessons = (lessons: Lesson[]) => {
  const grouped = new Map<string, Lesson>();
  
  lessons.forEach(lesson => {
    const key = `${lesson.subject.id}-${lesson.teacher}-${lesson.room}`;
    if (grouped.has(key)) {
      const existingLesson = grouped.get(key)!;
      existingLesson.hour = "Toute la journée";
    } else {
      grouped.set(key, {...lesson});
    }
  });
  
  return Array.from(grouped.values());
};

const createLessonEmbed = (title: string, lessons: any[], date: Date, user: User) => {
  return new EmbedBuilder()
    .setTitle(title)
    .setColor("#ffffff")
    .setTimestamp(new Date())
    .setFooter({
      text: user.displayName,
      iconURL: user.displayAvatarURL()
    })
    .addFields(lessons.map(lesson => ({
      name: `${lesson.name} (${lesson.id})`,
      value: formatLessonDetails(lesson, date)
    })));
};

const formatLessonDetails = (lesson: Lesson, date: Date) => {
  const timeDisplay = lesson.hour === "Toute la journée" 
    ? "Toute la journée"
    : `${lesson.hour}`;

  return [
    `📚 Matière » **${lesson.subject.name}**`,
    `🧑‍🏫 Professeur » **${TEACHERS[lesson.teacher]}**`,
    `🕒 Heure » **${timeDisplay}**`,
    `🏢 Salle » **${ROOMS[lesson.room]}**`,
    `📅 Date » <t:${dayJS(date).set('hour', parseInt(lesson.hour === "Toute la journée" ? "8" : lesson.hour.split('h')[0])).unix()}:F>`
  ].join('\n');
};

const getSortedDates = () => {
  return Object.entries(AllLessons)
    .sort(([dateA], [dateB]) => {
      const dateObjA = parseDate(dateA);
      const dateObjB = parseDate(dateB);
      return dateObjA.valueOf() - dateObjB.valueOf();
    });
};

const parseDate = (date: string) => {
  const [day, month, year] = date.split('/').map(Number);
  return dayJS(`${year}-${month}-${day}`);
};

const getRequestedDate = (dateStr?: string) => {
  const dateRegex = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
  if (dateStr && dateRegex.test(dateStr)) {
    return parseDate(dateStr).toDate();
  }
  return dayJS().toDate();
};

const isUpcomingLesson = (lessonDate: Dayjs, hour: string, now: Dayjs): boolean => {
  const [, end] = hour.split(" - ");
  const [endHour, endMinute] = end.split("h").map(Number);
  const lessonEnd = now.hour(endHour).minute(endMinute);
  
  return lessonDate.isAfter(now, 'day') || 
         (lessonDate.isSame(now, 'day') && !now.isAfter(lessonEnd));
};