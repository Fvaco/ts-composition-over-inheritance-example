import { AppScreen } from "./enums.ts";

export type State = typeof INITIAL_STATE;

const INITIAL_STATE = {
  displayedScreen: AppScreen.Dashboard,
  touched: false
};
class AppState {
  
  constructor(private _state: State = INITIAL_STATE) {}

  set state(newState: State) {
    console.info("Updating state...")
    this._state = {
      ...this.state,
      ...newState
    };
  }
  get state() {
    return this._state;
  }
}

export const appState = new AppState();
