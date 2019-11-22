import * as authentication from "./reducers/authentication.reducers";
import * as alert from "./reducers/alert.reducer";
import { Alert } from "../../models/alert/alert";
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { RouterStateUrl } from './reducers/router.reducer';


export interface AppState {
  authenticationState: authentication.State;
  alertState: Alert;
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers = {
  authentication: authentication.reducer,
  alert: alert.reducer,
  router: routerReducer
};

