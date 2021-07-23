// Main file

// Imports

import { Bot } from "./packages/discord/classes/bot.js";
import { discordConfig } from "./packages/discord/util/config.js";

const bot: Bot = new Bot();

bot.client.on("message", (message) => {
  console.log("hello");
  if (message.content === `${discordConfig.prefix}ping`) {
    message.channel.send("Pong!");
  }
});
