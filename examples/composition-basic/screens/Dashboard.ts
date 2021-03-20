import { appState } from "../AppState.ts";
import { TabNavigator } from "../components/TabNavigator.ts";
import { AppScreen } from "../enums.ts";
import { IMainNavigationAware } from "../interfaces.ts";
import { Screen } from "./Screen.ts";

class Dashboard extends Screen implements IMainNavigationAware {
  private _tabNavigator: TabNavigator;
  constructor() {
    super();
    this._tabNavigator = new TabNavigator();
  }
  get tabNavigator() {
    return this._tabNavigator;
  }

  isDisplayed() {
    return appState.state.displayedScreen === AppScreen.Dashboard;
  }
}

export default new Dashboard();
