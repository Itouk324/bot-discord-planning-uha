import { Client, Collection, SlashCommandSubcommandBuilder, SlashCommandSubcommandGroupBuilder } from "discord.js"
import { existsSync, readdirSync, statSync } from "fs";
import { sep } from "path";
import { haveSubcommands, serializeCommandName } from "./command.util";
import { BuildersCollection, CommandExecute, CommandsCollection, LoadedCommands } from "./command.type";
import { subCommandDirName, subCommandGroupDirNamePrefix } from "./command.const";

export const load = async (commandsFolder: string): Promise<LoadedCommands> => {
  const commands: CommandsCollection = new Collection();
  const commandsBuilders: BuildersCollection = new Collection();
  const folders = readdirSync(commandsFolder);

  for (const folder of folders) {
    const path = `${commandsFolder}${sep}${folder}${sep}`;

    if (!statSync(path).isDirectory()) {
      continue;
    }

    const builderFileName = `${folder}.builder.ts`;
    if (!existsSync(`${path}${builderFileName}`)) {
      throw new Error(`Builder file not found for command ${folder}`);
    }

    const dynamicBuilder = await import(`${path}${builderFileName}`);

    const builder = dynamicBuilder.slashCommand;
    if (!builder) {
      throw new Error(`Builder not found for command ${folder}`);
    }

    if (folder !== builder.name) {
      throw new Error(`Folder name and command name are different in ${path}`);
    }

    commandsBuilders.set(builder.name, builder);

    // Load simple commands
    if (!haveSubcommands(builder)) {
      const commandFileName = `${folder}.command.ts`;

      if (!existsSync(`${path}${commandFileName}`)) {
        throw new Error(`Command file not found for command ${folder}`);
      }

      const dynamicCommand = await import(`${path}${commandFileName}`);

      const execute: CommandExecute = dynamicCommand.execute;
      if (!execute) {
        throw new Error(`Execute function not found for command ${folder}`);
      }

      commands.set(serializeCommandName(builder.name), execute);
      continue;
    }

    // Load subcommands
    if (!existsSync(`${path}${subCommandDirName}`) || !statSync(`${path}${subCommandDirName}`).isDirectory()) {
      throw new Error(`Subcommands folder not found for command ${folder}`);
    }

    for (const commandOption of builder.options) {
      if (commandOption instanceof SlashCommandSubcommandGroupBuilder) {
        const subCommandGroupFolder = `${subCommandDirName}${sep}${subCommandGroupDirNamePrefix}${commandOption.name}${sep}`;

        if (!existsSync(`${path}${subCommandGroupFolder}`) || !statSync(`${path}${subCommandGroupFolder}`).isDirectory()) {
          throw new Error(`"${commandOption.name}" SubCommandGroup folder doesn"t exist`);
        }

        for (const subCommandGroupOption of commandOption.options) {
          const subCommandFileName = `${commandOption.name}-${subCommandGroupOption.name}.command.ts`;

          if (!existsSync(`${path}${builderFileName}`)) {
            throw new Error(`"${subCommandFileName}" file can"t be found in \`${subCommandGroupFolder}\``);
          }

          const dynamicSubCommand = await import(`${path}${subCommandGroupFolder}${subCommandFileName}`);

          const execute: CommandExecute = dynamicSubCommand.execute;
          if (!execute) {
            throw new Error(`${subCommandFileName} doesn"t have "execute" function`);
          }

          commands.set(serializeCommandName(builder.name, subCommandGroupOption.name, commandOption.name), execute);
          continue;
        }

        if (commandOption instanceof SlashCommandSubcommandBuilder) {
          const subCommandFileName = `${commandOption.name}.command.ts`;

          if (!existsSync(`${path}${subCommandDirName}${sep}${subCommandFileName}`)) {
            throw new Error(`"${subCommandFileName}" file can"t be found in \`${subCommandDirName}\``);
          }

          const dynamicCommandImport = await import(`${path}${subCommandDirName}${sep}${subCommandFileName}`);
          const execute: CommandExecute = dynamicCommandImport.execute;

          if (!execute) {
            throw new Error(`${subCommandFileName} doesn"t have "execute" function`);
          }

          commands.set(serializeCommandName(builder.name, commandOption.name), execute);
        }
      }
    }
  }

  return {
    commands,
    builders: commandsBuilders
  };
}

export const listener = (client: Client, commands: CommandsCollection): void => {
  client.on("interactionCreate", (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const commandExecute = commands.get(serializeCommandName(
      interaction.commandName,
      interaction.options.getSubcommand(false) ?? undefined,
      interaction.options.getSubcommandGroup(false) ?? undefined
    ));

    if (!commandExecute) return;

    void commandExecute(interaction);
  });
}

export const register = async (client: Client, commandsBuilders: BuildersCollection): Promise<void> => {
  await client.application?.commands.set(
    commandsBuilders.map((command) => command.toJSON())
  );
}