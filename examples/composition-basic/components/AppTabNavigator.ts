import {AppScreen } from "../enums.ts";
import { MainNavigationAppScreen } from "../types.ts";
import { TabNavigator } from "./ui/TabNavigator.ts";
import { Tab } from "./ui/Tab.ts";

export type TabNavigatorTabs = {
  [key in MainNavigationAppScreen]: Tab;
};

enum MainNavigationTabName {
  DashboardTab = 'dashboard nav tab selector',
  MessagesTab = 'messages nav tab selector',

}

export class AppTabNavigator extends TabNavigator<MainNavigationAppScreen> {
  constructor() {
    const tabs = {
      [AppScreen.Dashboard]: new Tab(MainNavigationTabName.DashboardTab),
      [AppScreen.Messages]: new Tab(MainNavigationTabName.MessagesTab),
    };
    super(tabs);
  }
}
