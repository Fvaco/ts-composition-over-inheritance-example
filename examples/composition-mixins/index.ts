import Dashboard from "./screens/Dashboard.ts";
import Favorites from "./screens/Favorites.ts";
import Messages from "./screens/Messages.ts";
import { Screen } from "./screens/Screen.ts";
import { AppScreen } from "./enums.ts";


const arrayOfScreens: Screen[] = [Dashboard, Favorites, Messages];

const useScreens = (): void => {
  Dashboard.tabNavigator.navigateTo(AppScreen.Messages)
};

useScreens();
