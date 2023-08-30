import { createReducer, on } from "@ngrx/store";
import { UserInterface } from "../interfaces/user.interface";
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from "./actions/register.action";
import { AuthStateInterface } from "../interfaces/auth-state.interface";

const initialState: AuthStateInterface = {
  isLoggin: false,
  user: null,
  validationErrors: null,
};

export const authReducer = createReducer(
  initialState,
  on(registerAction, (state: AuthStateInterface) => ({
    ...state,
    validationErrors: null,
  })),
  on(registerSuccessAction, (state: AuthStateInterface, action) => ({
    ...state,
    isLoggin: true,
    user: action.user,
  })),
  on(registerFailureAction, (state: AuthStateInterface, action) => ({
    ...state,
    isLoggin: false,
    validationErrors: action.message.error,
  })),
);
