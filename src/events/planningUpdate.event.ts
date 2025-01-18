import "dotenv/config";
import { Events, EmbedBuilder, TextChannel } from "discord.js";
import { Event } from "#/utils/handler/event/event.type";
import { CronJob } from "cron";
import { dayJS } from "#/utils/day-js";
import { AllLessons } from "#/utils/planning";
import { ROOMS, TEACHERS } from "#/utils/consts";
import { Lesson } from "#/utils/types";

const sendLessonsMessage = async (channel: TextChannel) => {
  try {
    const today = dayJS();
    const formattedDate = today.format("DD/MM/YYYY");
    const lessons = AllLessons[formattedDate];

    if (!lessons?.length) {
      await channel.send("Aucun cours n'est prévu pour aujourd'hui.");
      return;
    }

    const groupedLessons = new Map<string, Lesson>();
    lessons.forEach(lesson => {
      if (!lesson?.subject?.name || !lesson.teacher || !lesson.room) {
        console.warn("Invalid lesson data:", lesson);
        return;
      }

      const key = `${lesson.subject.name}-${lesson.teacher}-${lesson.room}`;
      if (groupedLessons.has(key)) {
        const existingLesson = groupedLessons.get(key)!;
        existingLesson.hour = "Toute la journée";
      } else {
        groupedLessons.set(key, {...lesson});
      }
    });

    const embed = new EmbedBuilder()
      .setTitle(`📚 Emploi du temps - ${formattedDate}`)
      .setColor("#4287f5")
      .setTimestamp(new Date())
      .setFooter({ text: "Planning automatique" });

    for (const lesson of groupedLessons.values()) {
      const timeDisplay = lesson.hour === "Toute la journée" 
        ? "Toute la journée"
        : `${lesson.hour}`;

      const lessonDetails = [
        `\`📚\` Matière » **${lesson.subject.name}**`,
        `\`👨‍🏫\` Professeur » **${TEACHERS[lesson.teacher] || lesson.teacher}**`,
        `\`🕒\` Heure » **${timeDisplay}**`,
        `\`🏢\` Salle » **${ROOMS[lesson.room] || lesson.room}**`,

        `\`📅\` Date » <t:${today
          .set("hour", parseInt(lesson.hour === "Toute la journée" ? "8" : lesson.hour.split("h")[0]))
          .set("minutes", parseInt(lesson.hour === "Toute la journée" ? "30" : lesson.hour.split("h")[1]))
          .unix()}:F>`,
      ].join("\n");

      embed.addFields({
        name: lesson.subject.name,
        value: lessonDetails,
        inline: false
      });
    }

    await channel.send({ embeds: [embed] });
  } catch (error) {
    console.error("Error while sending lessons:", error);
  }
};

const event: Event<Events.ClientReady> = {
  name: Events.ClientReady,
  once: true,
  eventName: "Emploi du temps",
  description: "Envoie l'emploi du temps du jour à 8h du matin (sauf le week-end).",
  execute: async (client) => {
    const cronJob = new CronJob("0 6 * * *", async () => {
      const isWeekend = [0, 6].includes(dayJS().day());
      if (isWeekend) return;

      const channel = await client.channels.fetch(process.env.LESSONS_CHANNEL_ID ?? "1328479405659394141");

      if (channel instanceof TextChannel) {
        await sendLessonsMessage(channel);
      }
    }, null, null, "Europe/Paris");

    cronJob.start();
    console.log("Successfully registered lessons notification system");
  }
};

export default event;