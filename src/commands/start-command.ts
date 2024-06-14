import { Telegraf } from "telegraf";
import { IBotContext } from "../context/context.interface";
import { Command } from "./command.abstract";

export class StartCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }

  handle(): void {
    this.bot.start(async (ctx) => {
      console.log(ctx)
      const userData = {
        userID: ctx.update.message.from.id,
        firstName: ctx.update.message.from.first_name || 'unknown',
        lastName: ctx.update.message.from.last_name || null,
      };

      // try {
      //   await telegramModel.addNewVisitor(userData)
      // } catch (error) {
      //   console.log(error)
      // }

      await ctx.reply(`Здравствуйте, ${userData.firstName}. Вас приветствует бот.`)
    })
  }

}
