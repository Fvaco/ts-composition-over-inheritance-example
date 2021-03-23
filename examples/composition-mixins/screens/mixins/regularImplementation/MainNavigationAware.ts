import { AppTabNavigator } from "../../../components/AppTabNavigator.ts";
import { Constructor } from "../../../types.ts";

export function MainNavigationAware<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    private _tabNavigator: AppTabNavigator;

    constructor(...args: any[]) {
      super(...args);
      this._tabNavigator = new AppTabNavigator();
    }

    get tabNavigator() {
      return this._tabNavigator;
    }
  };
}
