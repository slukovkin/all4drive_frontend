import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { UserInterface } from "../../interfaces/user.interface";
import { HttpErrorResponse } from "@angular/common/http";

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: UserInterface }>(),
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ user: UserInterface }>(),
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ message: HttpErrorResponse }>(),
);
