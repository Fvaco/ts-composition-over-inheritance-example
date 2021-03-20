import { AppScreen, appState } from "../AppState.ts";
import { TabNavigator } from "../components/TabNavigator.ts";
import { IMainNavigationAware } from "../interfaces.ts";
import { Screen } from "./Screen.ts";

class Favorites extends Screen implements IMainNavigationAware {
  public tabNavigator: TabNavigator;
  
  constructor() {
    super();
    this.tabNavigator = new TabNavigator();
  }

  isDisplayed() {
    return appState.state.displayedScreen === AppScreen.Favorites;
  }
}

export default new Favorites();
