import { User } from "../../../models/user/user";
import { AuthenticationActionTypes, All } from "../actions/authentication.actions";

export interface State {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};


export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case AuthenticationActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.email
        },
        errorMessage: null
      };
    }
    case AuthenticationActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: "Please enter the correct email and/or password"
      };
    }
    default: {
      return state;
    }
  }
}
