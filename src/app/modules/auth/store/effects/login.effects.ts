import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { AuthService } from "../../services/auth.service";
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from "../actions/login.actions";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { UserInterface } from "../../interfaces/user.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable()
export class LoginEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((user: UserInterface) => {
            return loginSuccessAction({ user });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(loginFailureAction({ message: errorResponse.error }));
          }),
        );
      }),
    ),
  );
  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl("/dashboard");
        }),
      ),
    { dispatch: false },
  );
}
