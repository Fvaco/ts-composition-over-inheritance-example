import { appState } from "../AppState.ts";
import { AppTabNavigator } from "../components/AppTabNavigator.ts";
import { AppScreen } from "../enums.ts";
import { IMainNavigationAware } from "../interfaces.ts";
import { MainNavigationAware } from "./mixins/regularImplementation/MainNavigationAware.ts";
import { Screen } from "./Screen.ts";

// Using regular implementation of mixins

class Dashboard extends Screen {
  constructor() {
    super();
  }
  isDisplayed() {
    return appState.state.displayedScreen === AppScreen.Dashboard;
  }
}

export default new (MainNavigationAware(Dashboard))();
