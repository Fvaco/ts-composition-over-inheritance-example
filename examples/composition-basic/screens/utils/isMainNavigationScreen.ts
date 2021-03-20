import { AppTabNavigator } from "../../components/AppTabNavigator.ts";
import { IMainNavigationAware } from "../../interfaces.ts";
import { Screen } from "../Screen.ts";

export const isMainNavigationScreen = (
  screen: Screen | any,
): screen is IMainNavigationAware => {
  const hasTabNavigator = !!screen.tabNavigator &&
    screen.tabNavigator instanceof AppTabNavigator;
  const isAScreen = screen instanceof Screen;
  
  return hasTabNavigator && isAScreen;
}