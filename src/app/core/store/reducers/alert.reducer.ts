import { Alert } from "../../../models/alert/alert";
import { AlertActionTypes, All } from "../actions/alert.actions";

export const initialState: Alert = {
  activated: true,
  status: "none",
  message: "This is a message"
};

export function reducer(state = initialState, action: All) {
  switch (action.type) {
    case AlertActionTypes.ALERT_UNACTIVE: {
      return {
        ...state,
        activated: false,
        status: "none",
        message: "none"
      };
    }
    case AlertActionTypes.ALERT_SUCCESS: {
      return {
        ...state,
        activated: true,
        status: action.payload.status,
        message: action.payload.message
      };
    }
    case AlertActionTypes.ALERT_ERROR: {
      return {
        ...state,
        activated: true,
        status: action.payload.status,
        message: action.payload.message
      };
    }
    default:
      return state;
  }

}
