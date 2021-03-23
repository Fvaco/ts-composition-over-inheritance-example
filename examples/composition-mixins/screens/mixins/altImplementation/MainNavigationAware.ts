import { AppTabNavigator } from "../../../components/AppTabNavigator.ts";

export class MainNavigationAware {
  private _tabNavigator: AppTabNavigator;

  constructor() {
    this._tabNavigator = new AppTabNavigator();
  }

  get tabNavigator() {
    return this._tabNavigator;
  }
}
