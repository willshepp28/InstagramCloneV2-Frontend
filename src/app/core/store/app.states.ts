import * as authentication from "./reducers/authentication.reducers";
import * as alert from "./reducers/alert.reducer";
import { Alert } from "../../models/alert/alert";


export interface AppState {
  authenticationState: authentication.State;
  alertState: Alert;
}

export const reducers = {
  authentication: authentication.reducer,
  alert: alert.reducer
};

