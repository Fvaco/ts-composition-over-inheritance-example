import { AppScreen } from "./enums.ts";
import { Screen } from "./screens/Screen.ts";

export type MainNavigationAppScreen = AppScreen.Dashboard | AppScreen.Messages;


export type Constructor = new (...args: any[]) => {};
