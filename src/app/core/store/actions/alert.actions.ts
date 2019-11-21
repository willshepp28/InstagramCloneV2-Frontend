import { Action } from "@ngrx/store";
import { Alert } from "../../../models/alert/alert";

export enum AlertActionTypes {
  ALERT_UNACTIVE = "[ALERT] Alert Unactive",
  ALERT_SUCCESS = "[ALERT] Alert Success",
  ALERT_ERROR = "[ALERT] Alert Error"
}


export class AlertUnactive implements Action {
  readonly type = AlertActionTypes.ALERT_UNACTIVE;
  constructor(public payload: Alert) {}
}

export class AlertSuccess implements Action {
  readonly type = AlertActionTypes.ALERT_SUCCESS;
  constructor(public payload: Alert) {}
}


export class AlertError implements Action {
  readonly type = AlertActionTypes.ALERT_ERROR;
  constructor(public payload: Alert) {}
}


export type All =
| AlertUnactive
| AlertSuccess
| AlertError;
