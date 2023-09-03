import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { HttpErrorResponse } from "@angular/common/http";
import { ProductInterface } from "../../interfaces/product.interface";

export const productCreateAction = createAction(
  ActionTypes.CREATE,
  props<{ request: ProductInterface }>(),
);

export const productCreateSuccessAction = createAction(
  ActionTypes.CREATE_SUCCESS,
  props<{ product: ProductInterface }>(),
);

export const productCreateFailureAction = createAction(
  ActionTypes.CREATE_FAILURE,
  props<{ message: HttpErrorResponse }>(),
);
