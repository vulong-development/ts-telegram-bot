import { Context } from 'telegraf';

export interface SessionData {
  courseLike: boolean;
}

export interface IBotContext extends Context {
  sessoion: SessionData;
}
