import { ClientEvents } from "discord.js";
import { MaybePromise } from "#/types/promise";

export type EventExecute<K extends keyof ClientEvents> = (...args: ClientEvents[K]) => MaybePromise<void>;

export interface Event<K extends keyof ClientEvents> {
  name: K;
  once?: boolean;
  eventName?: string;
  description?: string;
  execute: EventExecute<K>;
}