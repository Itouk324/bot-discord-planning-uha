import { CommandExecute } from "#/utils/handler/command";
import { EmbedBuilder } from "discord.js";
import { CronJob } from "cron";

import * as cheerio from "cheerio";

interface MenuItem {
  category: string;
  items: string[];
}

let cachedMenu: MenuItem[] | null = null;
let lastFetchDate: string | null = null;

const extractMenu = (html: string): MenuItem[] => {
  const $ = cheerio.load(html);
  const menu: MenuItem[] = [];
  
  const firstMenu = $('.meal_foodies').first();
  
  firstMenu.children('li').each((_, element) => {
    const category = $(element).clone().children().remove().end().text().trim();
    const items: string[] = [];
    
    $(element).find('ul li').each((_, item) => {
      const text = $(item).text().trim();
      if (text === "OU") {
        items.push("\nOu bien:");
        return;
      }

      items.push("- " + $(item).text().trim());
    });
    
    if (category && items.length > 0) {
      menu.push({ category, items });
    }
  });
  
  return menu;
};

const fetchMenu = async (): Promise<MenuItem[]> => {
  try {
    const response = await fetch('https://www.crous-strasbourg.fr/restaurant/resto-u-de-lillberg-2/');
    const html = await response.text();
    return extractMenu(html);
  } catch (error) {
    console.error('Error while fetching menu:', error);
    throw new Error('Impossible de récupérer le menu');
  }
};

const updateMenuCache = async () => {
  try {
    const currentDate = new Date().toDateString();
    if (currentDate !== lastFetchDate) {
      cachedMenu = await fetchMenu();
      lastFetchDate = currentDate;
      console.log('Menu mis à jour:', new Date().toISOString());
    }
  } catch (error) {
    console.error('Erreur lors de la mise à jour du cache:', error);
  }
};

const cronJob = new CronJob('0 0 * * *', updateMenuCache);
cronJob.start();

updateMenuCache();

export const execute: CommandExecute = async (command) => {
  await command.deferReply({
    flags: ["Ephemeral"]
  });

  try {
    if (!cachedMenu) {
      await updateMenuCache();
    }

    if (!cachedMenu || cachedMenu.length === 0) {
      await command.editReply("Désolé, je n'ai pas pu récupérer le menu du jour.");
      return;
    }

    const embed = new EmbedBuilder()
      .setTitle("🍽️ Menu du jour - Resto U de l'Illberg")
      .setDescription("Le tarif social est **3.30€**, et le tarif du menu brasserie est **4.70€** HT / (5.17€ TTC)")
      .setColor("#0099ff")
      .setTimestamp(new Date())
      .setFooter({
        text: command.user.displayName,
        iconURL: command.user.displayAvatarURL()
      });

    for (const item of cachedMenu) {
      embed.addFields({
        name: item.category,
        value: item.items.join('\n'),
        inline: false
      });
    }

    await command.editReply({ embeds: [embed] });
  } catch (error) {
    console.error('Error while fetching menu:', error);
    await command.editReply("Une erreur est survenue lors de la récupération du menu.");
  }
};