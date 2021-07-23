import dotenv from "dotenv";
dotenv.config();

export const discordConfig = {
  TOKEN: process.env.DISCORD_TOKEN,
  prefix: "?",
};

