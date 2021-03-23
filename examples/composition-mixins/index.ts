import Dashboard from "./screens/Dashboard.ts";
import Favorites from "./screens/Favorites.ts";
import Messages from "./screens/Messages.ts";
import { Screen } from "./screens/Screen.ts";
import { AppScreen } from "./enums.ts";
import { isMainNavigationScreen } from "./screens/utils/isMainNavigationScreen.ts";

const arrayOfScreens: Screen[] = [Dashboard, Favorites, Messages];

const useScreens = (): void => {
  console.log(Messages.tabNavigator);
  for (const aScreen of arrayOfScreens) {
    const screenClassName = aScreen.constructor.name || "an unknown";
    console.group(`🔎 Checking ${screenClassName} screen...`);
    if (isMainNavigationScreen(aScreen)) {
      console.log("🎉 Has tab navigator!");
      aScreen.tabNavigator.navigateTo(AppScreen.Messages);
      aScreen.tabNavigator.navigateTo(AppScreen.Dashboard);
    } else {
      console.log("🙁 Doesn't have tab navigator!");
    }
    console.groupEnd();
  }
};

useScreens();
