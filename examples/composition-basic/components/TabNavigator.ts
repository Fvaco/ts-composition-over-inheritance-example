import { MainNavigationScreen } from "../AppState.ts";
import { Tab } from "./Tab.ts";

export type TabNavigatorTabs = {
  [key in MainNavigationScreen]?: Tab;
};

enum MainNavigationTabName {
  FavoritesTab = 'fav screen',
  DashboardTab = 'db screen'
}

export class TabNavigator {
  private tabs: TabNavigatorTabs;
  constructor() {
    this.tabs = {
      [MainNavigationScreen.Favorites]: new Tab(MainNavigationTabName.FavoritesTab),
      [MainNavigationScreen.Dashboard]: new Tab(MainNavigationTabName.DashboardTab),
    };
  }
  tapOn(tabName: MainNavigationScreen) {
    this.tabs[tabName]!.press();
  }
}
