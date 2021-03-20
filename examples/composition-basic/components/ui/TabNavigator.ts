import { Tab } from "./Tab.ts";

type TabNavigatorTabs<T extends string> = {
  [key in T]: Tab;
};

export class TabNavigator<T extends string> {
  private _tabs: TabNavigatorTabs<T>;
  constructor(tabs: TabNavigatorTabs<T>) {
    this._tabs = tabs;
  }
  navigateTo(screenName: T) {
      this._tabs[screenName]!.press();
  }
}
