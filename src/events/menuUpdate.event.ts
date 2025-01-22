import "dotenv/config";

import { Events, EmbedBuilder, TextChannel } from "discord.js";
import { Event } from "#/utils/handler/event/event.type";
import { CronJob } from "cron";
import { cachedMenu, updateMenuCache } from "#/commands/menu/menu.utils";
import { dayJS } from "#/utils/day-js";

const sendMenuMessage = async (channel: TextChannel) => {
  try {
    if (!cachedMenu) {
      await updateMenuCache();
    }

    if (!cachedMenu || cachedMenu.length === 0) return;

    const embed = new EmbedBuilder()
      .setTitle("🍽️ Menu du jour - Resto U de l'Illberg")
      .setDescription("Le tarif social est **3.30€**, et le tarif du menu brasserie est **4.70€ HT** / (5.17€ TTC)")
      .setColor("#e01021")
      .setTimestamp(new Date())
      .setThumbnail("https://cdn.discordapp.com/emojis/1329888316488941640.webp?size=128&quality=lossless")
      .setFooter({ text: "Crous Strasbourg" });

    for (const item of cachedMenu) {
      embed.addFields({
        name: item.category,
        value: item.items.join("\n"),
        inline: false
      });
    }

    await channel.send({ embeds: [embed] });
  } catch (error) {
    console.error("Error while sending menu:", error);
  }
};

const event: Event<Events.ClientReady> = {
  name: Events.ClientReady,
  once: true,
  eventName: "Menu du jour",
  description: "Envoie le menu du jour à 10h du matin (sauf le week-end).",
  execute: async (client) => {
    const cronJob = new CronJob("0 8 * * *", async () => {
      const isWeekend = [0, 6].includes(dayJS().day());
      if (isWeekend) return;
      
      await updateMenuCache();
      const channel = await client.channels.fetch(process.env.MEAL_CHANNEL_ID ?? "1328479405659394141");
      
      if (channel instanceof TextChannel) {
        await sendMenuMessage(channel);
      }
    }, null, null, "Europe/Paris");

    cronJob.start();

    console.log("Successfully registered menu notification system");
  }
};

export default event;
