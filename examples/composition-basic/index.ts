import { MainNavigationAppScreen } from "./enums.ts";
import Dashboard from "./screens/Dashboard.ts";
import Favorites from "./screens/Favorites.ts";
import { Screen } from "./screens/Screen.ts";
import { isMainNavigationScreen } from "./screens/utils/isMainNavigationScreen.ts";

const arrayOfScreens: Screen[] = [Dashboard, Favorites];

const useScreens = (): void => {
  for (const aScreen of arrayOfScreens) {
    const screenClassName = aScreen.constructor.name;
    console.group(`🔎 Checking ${screenClassName} screen...`);
    if (isMainNavigationScreen(aScreen)) {
      console.log("🎉 Has tab navigator!")
      aScreen.tabNavigator.navigateTo(MainNavigationAppScreen.Favorites);
      aScreen.tabNavigator.navigateTo(MainNavigationAppScreen.Dashboard);
    } else {
      console.log("🙁 Doesn't have tab navigator!")
    }
    console.groupEnd()
  }
};

useScreens();
