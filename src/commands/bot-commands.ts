import { Telegraf } from "telegraf";
import { IBotContext } from "../context/context.interface";
import { Command } from "./command.abstract";

export class BotCommands extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }

  handle(): void {
    this.bot.start(async (ctx) => {

      await ctx.telegram.setMyCommands([
        {
          command: '/start',
          description: 'Запуск бота'
        },
        {
          command: '/help',
          description: 'Помощь'
        },
        {
          command: '/settings',
          description: 'Настройки'
        }
      ])


    })
  }

}
