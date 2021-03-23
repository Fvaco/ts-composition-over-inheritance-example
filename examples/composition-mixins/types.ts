import { AppScreen } from "./enums.ts";
export type MainNavigationAppScreen = AppScreen.Dashboard | AppScreen.Messages;


export type Constructor = new (...args: any[]) => {};
