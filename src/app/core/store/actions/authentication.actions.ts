import { Action } from "@ngrx/store";

export enum AuthenticationActionTypes {
  LOGIN = "[AUTHENTICATION] Login",
  LOGIN_SUCCESS = "[AUTHENTICATION] Login Success",
  LOGIN_FAILURE = "[AUTHENTICATION] Login Failure",
}

export class LogIn implements Action {
  readonly type = AuthenticationActionTypes.LOGIN;
  constructor(public payload: any) {}
}


export class LogInSuccess implements Action {
  readonly type = AuthenticationActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LogInFailure implements Action {
  readonly type = AuthenticationActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}


export type All = | LogIn | LogInSuccess | LogInFailure;
