import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {AuthService} from "../../services/auth.service";
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction
} from "../actions/login.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {UserInterface} from "../../interfaces/user.interface";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class LoginEffect {

  constructor(private actions$: Actions, private authService: AuthService) {
  }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request).pipe(
          map((user: UserInterface) => {
            return loginSuccessAction({user})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(loginFailureAction({message: errorResponse.error}))
          })
        )
      })
    )
  )
}