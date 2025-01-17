import { type Client, Events, ActivityType } from "discord.js";
import { Event } from "#/utils/handler/event/event.type";
import { load as loadCommands } from "#/utils/handler/command";
import { listener, register } from "#/utils/handler/command/command";
import { sep } from "path";

const event: Event<Events.ClientReady> = {
  name: Events.ClientReady,
  once: true,
  execute: async (client: Client<true>) => {
    const { commands, builders } = await loadCommands(`${__dirname}${sep}..${sep}commands`);

    listener(client, commands);
    await register(client, builders);

    client.user.setActivity("le planning", {
      type: ActivityType.Watching
    });

    console.log("Successfully registered application (/) commands");
  }
};

export default event;
