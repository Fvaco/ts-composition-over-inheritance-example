import { appState } from "../AppState.ts";
import { AppScreen } from "../enums.ts";
import { Screen } from "./Screen.ts";

class Favorites extends Screen {
  constructor() {
    super();
  }
  isDisplayed() {
    return appState.state.displayedScreen === AppScreen.Favorites;
  }
}

export default new Favorites();
