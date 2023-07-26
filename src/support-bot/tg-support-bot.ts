import { Telegraf } from "telegraf";
import { IConfigService } from "../../config-service/config.interface";
import { IBotContext } from "../context/context.interface";
import { Command } from "./commands/absract-command";
import { StartCommand } from "./commands/start-command";
import { BotCommands } from "./commands/bot-commands";

export default class TgSupportBot {
  bot: Telegraf<IBotContext>
  commands: Command[] = [];

  constructor(private readonly configService: IConfigService) {
    this.bot = new Telegraf<IBotContext>(this.configService.get('TG_SUPPORT_BOT_TOKEN'));
    //Here implements sessions
    // this.bot.use(session())
  }

  init() {
    this.commands = [new StartCommand(this.bot), new BotCommands(this.bot)]
    for (let command of this.commands) {
      command.handle();
    }

    this.bot.launch();
  }
}
