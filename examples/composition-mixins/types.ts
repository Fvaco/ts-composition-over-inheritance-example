import { AppScreen } from "./enums.ts";
import { Screen } from "./screens/Screen.ts";

export type MainNavigationAppScreen = AppScreen.Dashboard | AppScreen.Messages;


export type Constructor<T = {}> = new (...args: any[]) => T;

export type HasTabNavigator = Constructor<Screen>;
