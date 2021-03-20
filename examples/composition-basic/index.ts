import { MainNavigationAppScreen } from "./enums.ts";
import Dashboard from "./screens/Dashboard.ts";
import Favorites from "./screens/Favorites.ts";
import { Screen } from "./screens/Screen.ts";
import { isMainNavigationScreen } from "./screens/utils/isMainNavigationScreen.ts";

const arrayOfScreens: Screen[] = [Dashboard, Favorites];

const useScreens = (): void => {
  for (const aScreen of arrayOfScreens) {
    if (isMainNavigationScreen(aScreen)) {
      aScreen.tabNavigator.navigateTo(MainNavigationAppScreen.Dashboard);
    }
  }
};

useScreens();
