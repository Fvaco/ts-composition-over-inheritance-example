import {AppScreen, appState} from './AppState.ts'
import Dashboard from './screens/Dashboard.ts'
import Favorites from './screens/Favorites.ts'

const useScreens = (): void => {
  const oldState = appState.state;
  console.log('Dashboard is displayed', Dashboard.isDisplayed());
  console.log('Favorites is displayed', Favorites.isDisplayed());
  console.log('Dashboard is displayed', Dashboard.isDisplayed());
  console.log('Favorites is displayed', Favorites.isDisplayed());
  const newState = appState.state;
  console.log(oldState === newState);

};

useScreens();
