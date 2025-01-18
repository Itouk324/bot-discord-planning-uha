import { EmbedBuilder, Events, TextChannel } from "discord.js";
import { Event } from "#/utils/handler/event/event.type";
import { CronJob } from "cron";
import { dayJS } from "#/utils/day-js";

const event: Event<Events.ClientReady> = {
  name: Events.ClientReady,
  once: true,
  eventName: "Actualisation mensuelle",
  description: "Envoie un rappel mensuel pour les actualisations.",
  execute: async (client) => {
    const cronJob = new CronJob("0 0 26,28 * *", async () => {
      console.log("Sending monthly reminder");
      const isFebruary = dayJS().month() === 1;
      const is26th = dayJS().date() === 26;

      if (isFebruary && !is26th) {
        console.log("Not sending reminder because it's not the 26th of February");
        return;
      }

      const nextMonth = dayJS().add(1, "month").startOf("month");
      const reminderDate = nextMonth.date(15);    

      try {
        const channel = await client.channels.fetch("1316834470871175235");

        if (channel instanceof TextChannel) {
          const embed = new EmbedBuilder()
            .setTitle("Rappel d'actualisation")
            .setDescription("Pour les personnes inscrites à France Travail, n'oubliez pas de vous actualiser, vous avez jusqu'au 15 du mois prochain pour le faire. (<t:" + reminderDate.unix() + ":R>)")
            .setTimestamp(new Date())
            .setThumbnail("https://pbs.twimg.com/profile_images/1742090096478715904/NexyKCfv_400x400.jpg")
            .setColor("#ffffff");

          await channel.send({
            embeds: [embed],
            content: is26th ? "@everyone Les actualisations sont ouvertes, et bien plus tôt que d'habitude car le mois de février est plus court !" : "@everyone Les actualisations sont ouvertes !"
          });
        }
      } catch (error) {
        console.error("Error sending monthly reminder:", error);
      }
    }, null, null, "Europe/Paris");

    cronJob.start();
    console.log("Successfully registered monthly reminder");
  }
};

export default event;