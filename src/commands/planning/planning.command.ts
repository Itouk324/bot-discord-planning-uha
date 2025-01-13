import { ROOMS, TEACHERS } from "#/utils/consts";
import { CommandExecute } from "#/utils/handler/command";
import { JANUARY_LESSONS } from "#/utils/planning";
import { EmbedBuilder } from "discord.js";

export const execute: CommandExecute = async (command) => {
  let dateToShow: Date;
  const TestRegexDate = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
  
  const option = command.options.get("date");
  
  if (option && typeof option.value === "string" && TestRegexDate.test(option.value)) {
    const [day, month, year] = option.value.split('/').map(Number);
    dateToShow = new Date(year, month - 1, day);
  } else {
    dateToShow = new Date();
  }

  const formattedDate = `${dateToShow.getDate().toString().padStart(2, "0")}/${(dateToShow.getMonth() + 1).toString().padStart(2, "0")}/${dateToShow.getFullYear()}`;
  const lessons = JANUARY_LESSONS[formattedDate];

  if (!lessons || lessons.length === 0) {
    await command.reply({
      content: "Aucun cours n'est prévu pour cette date.",
      ephemeral: true
    });
    return;
  }

  const embed = new EmbedBuilder()
    .setTitle(`Cours du ${formattedDate}`)
    .setColor("#6347a0")
    .setTimestamp(new Date())
    .setAuthor({
      name: command.user.displayName,
      iconURL: command.user.displayAvatarURL()
    })
    .addFields(
      lessons.flatMap((lesson) => {
        let value = "";
        value += `Sujet: ${lesson.subject.name}\n`;
        value += `Professeur: ${TEACHERS[lesson.teacher]}\n`;
        value += `${ROOMS[lesson.room]}\n`;

        const [startHour, startMinute] = lesson.hour.split(" - ")[0].split("h").map(Number);
        const [endHour, endMinute] = lesson.hour.split(" - ")[1].split("h").map(Number);

        const startTimestamp = new Date(dateToShow);
        startTimestamp.setHours(startHour, startMinute, 0);

        const endTimestamp = new Date(dateToShow);
        endTimestamp.setHours(endHour, endMinute, 0);

        value += `Heure: <t:${Math.floor(startTimestamp.getTime() / 1000)}:R> à <t:${Math.floor(endTimestamp.getTime() / 1000)}:R>\n`;

        return [{
          name: `${lesson.name} (${lesson.id})`,
          value,
        }];
      })
    );

  await command.reply({
    embeds: [embed],
    flags: ["SuppressNotifications"]
  });
}