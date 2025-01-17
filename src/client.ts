import "dotenv/config";

import { ActivityType, Client, EmbedBuilder, TextChannel } from "discord.js";
import { load as loadCommands } from "./utils/handler/command";
import { sep } from "path";
import { listener, register } from "./utils/handler/command/command";
import { CronJob } from "cron";
import { cachedMenu, updateMenuCache } from "./commands/menu/menu.command";
import * as cheerio from "cheerio";

// TODO: Refaire + proprement car la mdr ptdr xd faut aller se faire foutre

export const client = new Client({
  intents: [],
  partials: []
});

void client.login(process.env.BOT_TOKEN);

client.on("ready", async (c) => {
  const { commands, builders } = await loadCommands(`${__dirname}${sep}commands`);

  listener(c, commands);
  await register(c, builders);

  client.user?.setActivity("le planning", {
    type: ActivityType.Watching
  });

  const cronJob = new CronJob('0 10 * * *', async function () {
    console.log("Il est 10h, je vais chercher le menu du jour");
    updateMenuCache();

    const embed = new EmbedBuilder()
      .setTitle("🍽️ Menu du jour - Resto U de l'Illberg")
      .setDescription("Le tarif social est **3.30€**, et le tarif du menu brasserie est **4.70€** HT / (5.17€ TTC)")
      .setColor("#0099ff")
      .setTimestamp(new Date())

    client.channels.fetch("1329815012209987654")
      .then(async(channel) => {
        if (channel instanceof TextChannel) {
          try {
            if (!cachedMenu) {
              await updateMenuCache();
            }

            if (!cachedMenu || cachedMenu.length === 0) return;

            const embed = new EmbedBuilder()
              .setTitle("🍽️ Menu du jour - Resto U de l'Illberg")
              .setDescription("Le tarif social est **3.30€**, et le tarif du menu brasserie est **4.70€** HT / (5.17€ TTC)")
              .setColor("#0099ff")
              .setTimestamp(new Date())

            for (const item of cachedMenu) {
              embed.addFields({
                name: item.category,
                value: item.items.join('\n'),
                inline: false
              });
            }

            await channel.send({ embeds: [embed] });
          } catch (error) {
            console.error('Error while fetching menu:', error);
            return;
          } 
        }
      })
      .catch(console.error);
  }, null, null, "Europe/Paris");

  cronJob.start();

  updateMenuCache();

  console.log("Successfully registered application (/) commands");
});