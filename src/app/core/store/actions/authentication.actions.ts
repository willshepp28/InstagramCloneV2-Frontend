import { Action } from "@ngrx/store";

export enum AuthenticationActionTypes {
  LOGIN = "[AUTHENTICATION] Login",
  LOGIN_SUCCESS = "[AUTHENTICATION] Login Success",
  LOGIN_FAILURE = "[AUTHENTICATION] Login Failure",
  SIGNUP = "[AUTHENTICATION] Signup",
  SIGNUP_SUCCESS = "[AUTHENTICATION] Signup Success",
  SIGNUP_FAILURE = "[AUTHENTICATION] Signup Failure"
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

export class SignUp implements Action {
  readonly type = AuthenticationActionTypes.SIGNUP;
  constructor(public payload: any) {}
}

export class SignUpSucess implements Action {
  readonly type = AuthenticationActionTypes.SIGNUP_SUCCESS;
  constructor(public payload: any) {}
}

export class SignUpFailure implements Action {
  readonly type = AuthenticationActionTypes.SIGNUP_FAILURE;
  constructor(public payload: any) {}
}


export type All =
| LogIn
| LogInSuccess
| LogInFailure
| SignUp
| SignUpSucess
| SignUpFailure;
