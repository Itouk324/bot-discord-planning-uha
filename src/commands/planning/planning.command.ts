import { ROOMS, TEACHERS } from "#/utils/consts";
import { CommandExecute } from "#/utils/handler/command";
import { JANUARY_LESSONS } from "#/utils/planning";
import { APIEmbedField, EmbedBuilder } from "discord.js";

export const execute: CommandExecute = async (command) => {
  let dateToCheck: Date;
  let date: string;
  console.log("dateToCheck");

  const option = command.options.get("date");
  if (!option) {
    dateToCheck = new Date();
    date = `${dateToCheck.getDate()}/${dateToCheck.getMonth() + 1}/${dateToCheck.getFullYear()}`;
  }

  const checkDateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (option && typeof option.value === 'string' && checkDateRegex.test(option.value)) {
    const [day, month, year] = option.value.split("/");
    dateToCheck = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    date = option.value;
  } else {
    command.reply({
      content: "La date doit être au format JJ/MM/AAAA.",
      ephemeral: true
    });
    return;
  }

  const lesson = JANUARY_LESSONS[date];
  if (!lesson) {
    console.log("lesson not found");
    command.reply({
      content: "Aucun cours n'est prévu pour cette date.",
      ephemeral: true
    });
    return;
  }

  const embed = new EmbedBuilder()
    .setTitle(`Cours du ${date}`)
    .setColor("#6347a0")
    .setTimestamp(new Date())
    .setAuthor({
      name: command.user.displayName,
      iconURL: command.user.displayAvatarURL()
    })
    .addFields(
      lesson.flatMap((lesson, index) => ([
        {
          name: `${lesson.hour} - ${lesson.name} (${lesson.id})`,
          value: `Professeur: ${TEACHERS[lesson.teacher]}\nSalle: ${ROOMS[lesson.room]}`
        }
      ])).filter((field): field is APIEmbedField => field !== null)
    );

  command.reply({
    embeds: [embed],
    flags: ["SuppressNotifications"]
  });
}