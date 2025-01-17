import { SlashCommandBuilder } from "discord.js";

export const slashCommand = new SlashCommandBuilder()
  .setName("planning")
  .setDescription("Afficher le cours d\"aujourd\"hui ou d\"une date précise.")
  .addStringOption(option =>
    option.
      setName("date")
      .setDescription("La date du cours à afficher (format: JJ/MM/AAAA)")
      .setRequired(false)
  )
  .addStringOption(option =>
    option
      .setName("next")
      .setDescription("Savoir quand est le prochain cours de cette matière.")
      .setRequired(false)
      .addChoices([
        { name: "Les réseaux d'entreprise", value: "1.2" },
        { name: "La cybersécurité", value: "1.3" },
        { name: "Algorithmique", value: "1.4" },
        { name: "HTML/CSS", value: "2.1" },
        { name: "Graphisme pour le web", value: "2.2" },
        { name: "JavaScript et JQuerry", value: "2.3" },
        { name: "Programmer en PHP", value: "3.1" },
        { name: "Conception et utilisation de bases de données MySQL", value: "3.2" },
        { name: "Méthodologie de gestion de projets", value: "4.1" },
        { name: "Éléments financiers du projet", value: "4.2" },
        { name: "Technique d'expression écrite", value: "5.1" },
        { name: "Expression orale", value: "5.2" },
        { name: "Anglais pour l'informatique", value: "5.4" },
        { name: "Projet fil rouge", value: "6.1" }
      ])
  );