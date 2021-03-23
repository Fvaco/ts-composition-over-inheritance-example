import { AppTabNavigator } from "../../../components/AppTabNavigator.ts";
import { MainNavigationAppScreen } from "../../../types.ts";

export class MainNavigationAware {
  get tabNavigator() {
    return new AppTabNavigator();
  }

  // you could implement/overwrite other methods such as...
  navigateTo(mainScreen: MainNavigationAppScreen) {
    return this.tabNavigator.navigateTo(mainScreen);
  }
}
