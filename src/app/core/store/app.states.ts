import * as authentication from "./reducers/authentication.reducers";


export interface AppState {
  authState: authentication.State;
}

export const reducers = {
  authentication: authentication.reducer
};
