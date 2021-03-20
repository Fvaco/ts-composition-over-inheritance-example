import { appState } from "../AppState.ts";
import { AppTabNavigator } from "../components/AppTabNavigator.ts";
import { AppScreen } from "../enums.ts";
import { IMainNavigationAware } from "../interfaces.ts";
import { Screen } from "./Screen.ts";

class Messages extends Screen implements IMainNavigationAware {
  private _tabNavigator: AppTabNavigator;
  constructor() {
    super();
    this._tabNavigator = new AppTabNavigator();
  }
  get tabNavigator() {
    return this._tabNavigator;
  }

  isDisplayed() {
    return appState.state.displayedScreen === AppScreen.Dashboard;
  }
}

export default new Messages();
