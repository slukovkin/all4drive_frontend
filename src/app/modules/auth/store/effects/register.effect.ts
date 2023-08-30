import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { AuthService } from "../../services/auth.service";
import { createEffect } from "@ngrx/effects";
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from "../actions/register.action";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { UserInterface } from "../../interfaces/user.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable()
export class RegisterEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((user: UserInterface) => {
            return registerSuccessAction({ user });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(registerFailureAction({ message: errorResponse.error }));
          }),
        );
      }),
    );
  });
  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl("/login");
        }),
      ),
    { dispatch: false },
  );
}
