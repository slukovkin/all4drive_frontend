import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { UserInterface } from "../../interfaces/user.interface";
import { HttpErrorResponse } from "@angular/common/http";

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: UserInterface }>(),
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ user: UserInterface }>(),
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ message: HttpErrorResponse }>(),
);
