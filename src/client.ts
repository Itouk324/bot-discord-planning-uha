import "dotenv/config";

import { Client } from "discord.js";
import { sep } from "path";
import { loadEvents } from "./utils/handler/event/event";

export const client = new Client({
  intents: [],
  partials: []
});

void client.login(process.env.BOT_TOKEN);

void loadEvents(client, `${__dirname}${sep}events`);