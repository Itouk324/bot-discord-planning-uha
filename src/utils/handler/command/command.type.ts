import { MaybePromise } from "#/types/promise";
import { ChatInputCommandInteraction, Collection, SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "discord.js";

export type SlashCommandDefinition = SlashCommandSubcommandsOnlyBuilder | Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand">;

export type CommandExecute = (command: ChatInputCommandInteraction) => MaybePromise<void>;

export type CommandsCollection = Collection<string, CommandExecute>;
export type BuildersCollection = Collection<string, SlashCommandDefinition>;

export type LoadedCommands = {
  commands: CommandsCollection;
  builders: BuildersCollection;
}