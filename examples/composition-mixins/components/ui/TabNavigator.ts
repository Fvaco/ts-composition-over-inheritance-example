import { Tab } from "./Tab.ts";

type TabNavigatorTabs<T extends string> = {
  [key in T]: Tab;
};

export class TabNavigator<T extends string> {
  constructor(protected _tabs: TabNavigatorTabs<T>) {}
  navigateTo(screenName: T) {
      this._tabs[screenName]!.press();
  }
}
