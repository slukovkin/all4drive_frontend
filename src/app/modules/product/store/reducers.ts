import { createReducer, on } from "@ngrx/store";
import { ProductStateInterface } from "../interfaces/productState.interface";
import {
  productCreateAction,
  productCreateFailureAction,
  productCreateSuccessAction,
} from "./actions/product.action";

const initialState: ProductStateInterface = {
  products: [],
  validationErrors: null,
};

export const productReducer = createReducer(
  initialState,
  on(productCreateAction, (state: ProductStateInterface) => ({
    ...state,
    validationErrors: null,
  })),
  on(productCreateSuccessAction, (state: ProductStateInterface, action) => ({
    ...state,
    product: action.product,
  })),
  on(productCreateFailureAction, (state: ProductStateInterface, action) => ({
    ...state,
    validationErrors: action.message.error,
  })),
);
