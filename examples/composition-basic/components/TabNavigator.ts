import { MainNavigationAppScreen } from "../enums.ts";
import { Tab } from "./Tab.ts";

export type TabNavigatorTabs = {
  [key in MainNavigationAppScreen]?: Tab;
};

enum MainNavigationTabName {
  FavoritesTab = 'fav screen',
  DashboardTab = 'db screen'
}

export class TabNavigator {
  private tabs: TabNavigatorTabs;
  constructor() {
    this.tabs = {
      [MainNavigationAppScreen.Favorites]: new Tab(MainNavigationTabName.FavoritesTab),
      [MainNavigationAppScreen.Dashboard]: new Tab(MainNavigationTabName.DashboardTab),
    };
  }
  navigateTo(tabName: MainNavigationAppScreen) {
    this.tabs[tabName]!.press();
  }
}
