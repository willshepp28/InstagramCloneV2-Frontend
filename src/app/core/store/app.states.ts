import * as authentication from "./reducers/authentication.reducers";
import * as posts from "./reducers/post.reducers";
import * as alert from "./reducers/alert.reducer";
import { Alert } from "../../models/alert/alert";
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { RouterStateUrl } from './reducers/router.reducer';
import { IPostState } from './reducers/post.reducers';


export interface AppState {
  authenticationState: authentication.State;
  postState: IPostState;
  alertState: Alert;
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers = {
  authentication: authentication.reducer,
  posts: posts.reducer,
  alert: alert.reducer,
  router: routerReducer
};

