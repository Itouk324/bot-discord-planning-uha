import { Client } from "discord.js";
import { readdirSync } from "fs";
import { Event } from "./event.type";
import { sep } from "path";
import { createTable } from "#/utils/console/tableFormatter";

export const loadEvents = async (client: Client, eventsFolder: string): Promise<void> => {
  const eventFiles = readdirSync(eventsFolder).filter(file => file.endsWith('.event.ts'));
  const table = createTable({ width: 64 });

  for (const file of eventFiles) {
    const eventModule = await import(`${eventsFolder}${sep}${file}`);
    const event = eventModule.default as Event<any>;

    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }

    table.drawTable([
      { label: 'Event: ', content: event.eventName || 'Unnamed' },
      { label: 'For  : ', content: event.description || 'No description' }
    ]);
  }
};