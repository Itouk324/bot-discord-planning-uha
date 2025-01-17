import { SlashCommandBuilder } from "discord.js";

export const slashCommand = new SlashCommandBuilder()
  .setName("menu")
  .setDescription("Afficher le menu du jour au Resto U de l'Illberg");