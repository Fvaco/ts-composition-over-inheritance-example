import { appState } from "../AppState.ts";
import { AppScreen } from "../enums.ts";
import { MainNavigationAware } from "./mixins/altImplementation/MainNavigationAware.ts";
import { applyMixins } from "./mixins/altImplementation/utils/applyMixins.ts";
import { Screen } from "./Screen.ts";

// Using alternative implementation of mixins
interface Messages extends Screen, MainNavigationAware {}
class Messages extends Screen {
  constructor() {
    super();
  }

  isDisplayed() {
    return appState.state.displayedScreen === AppScreen.Dashboard;
  }
}

applyMixins(Messages, [MainNavigationAware])
export default new Messages()
