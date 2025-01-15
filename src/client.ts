import "dotenv/config";

import { ActivityType, Client } from "discord.js";
import { load as loadCommands } from "./utils/handler/command";
import { sep } from "path";
import { listener, register } from "./utils/handler/command/command";

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
  
  console.log("Successfully registered application (/) commands");
});