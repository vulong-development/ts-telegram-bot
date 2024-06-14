import { Telegraf, session } from "telegraf";

import { IBotContext } from "./context/context.interface";
import { Command } from './commands/command.abstract';
// import { Command } from "./support-bot/commands/absract-command";
// import { StartCommand } from "./support-bot/commands/start-command";
// import { BotCommands } from "./support-bot/commands/bot-commands";
import { IConfigService } from "./config/config.interface";
import { ConfigService } from "./config/config.service";
import { StartCommand } from "./commands/start-command";

export default class Bot {
  bot: Telegraf<IBotContext>
  commands: Command[] = [];

  constructor(private readonly configService: IConfigService) {
    this.bot = new Telegraf<IBotContext>(this.configService.get('TOKEN'));
    //Here implements sessions
    this.bot.use(session())
  }

  init() {
    this.commands = [new StartCommand(this.bot)]
    for (let command of this.commands) {
      command.handle();
    }

    this.bot.launch();
  }
}

const bot = new Bot(new ConfigService());
bot.init();
