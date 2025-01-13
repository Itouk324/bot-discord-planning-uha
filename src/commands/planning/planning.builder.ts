import { SlashCommandBuilder } from "discord.js";

export const slashCommand = new SlashCommandBuilder()
  .setName("planning")
  .setDescription('Afficher le cours d\'aujourd\'hui ou d\'une date précise.')
  .addStringOption(option =>
    option.
      setName("date")
      .setDescription('La date du cours à afficher (format: JJ/MM/AAAA)')
      .setRequired(false)
  )