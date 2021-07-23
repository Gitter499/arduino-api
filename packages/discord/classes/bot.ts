
import Discord, {
  ChannelManager,
  Guild,
  GuildChannel,
  GuildManager,
  GuildMember,
  TextChannel,
} from "discord.js";
import { discordConfig } from "../util/config";
import { error, log } from "../util/log";

/**
 * @class Main bot class
 */
export class Bot {
  private client: Discord.Client = new Discord.Client();
  private guild: Guild = new Discord.Guild(this.client, {});
  readonly channels: ChannelManager;
  readonly guilds: GuildManager;
  readonly uptime: number | null;
  /**
   * @constructor Automatically logs in the client upon intialization, sets important class members
   */
  constructor() {
    this.client.login(discordConfig.TOKEN);
    this.channels = this.client.channels;
    this.guilds = this.client.guilds;
    this.uptime = this.client.uptime;
    this.client.on("ready", () => {
      log(`Logged in as ${this.client.user?.username}`, true);
    });
  }

  // Mapped methods
  /**
   *
   * @param reason Reason for killing client
   */
  public kill(reason: String) {
    this.client.destroy();
    log(`Client killed. Reason provided: ${reason}`);
  }
  /**
   *
   * @param guild - Set guild
   */
  private setGuild(guild: Guild): void {
    this.guild = guild;
  }
  /**
   *
   * @param message The message you want to display
   * @param channelName The name of the welcome channel
   * @param mentionUser Option for mentioning the user in the welcome message
   */
  public setJoinMessage(
    message: string,
    channelName: string | void,
    mentionUser: Boolean | undefined
  ): void {
    this.client.on("guildMemberAdd", async (member) => {
      const welcomeChannel: GuildChannel | undefined =
        this.guild?.channels.cache.find((ch) => ch.name === channelName);

      if (!welcomeChannel) {
        error("Channel does not exist");
        return;
      }

      if (welcomeChannel.isText()) {
        mentionUser
          ? welcomeChannel.send(`${message} ${member}`)
          : await welcomeChannel.send(message);
      }
    });
  }

  public onMessage() {
    this.client.on("message", (message) => {
      if (message.toString() === `${discordConfig.prefix}pong`) {
        message.reply("Ping!");
      }
    });
  }
}
