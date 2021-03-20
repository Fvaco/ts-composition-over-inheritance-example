
export enum AppScreen {
  Favorites = "favorites",
  Dashboard = "dashboard"
}
export enum MainNavigationScreen {
  Favorites = AppScreen.Favorites,
  Dashboard = AppScreen.Dashboard
}

export type State = typeof INITIAL_STATE;

const INITIAL_STATE = {
  displayedScreen: AppScreen.Dashboard,
  touched: false
};
class AppState {
  private _state: State;
  
  constructor() {
    this._state = INITIAL_STATE;
  }

  set state(newState: State) {
    console.info("Updating state...")
    this._state = newState;
  }
  get state() {
    return this._state;
  }
}

export const appState = new AppState();