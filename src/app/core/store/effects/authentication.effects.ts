import { Injectable, Inject } from "@angular/core";
import { Action } from "@ngrx/store";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { tap, map, switchMap, catchError } from "rxjs/operators";

import { AuthenticationActionTypes, LogIn, LogInSuccess, LogInFailure} from "../actions/authentication.actions";
import { AuthenticationService } from "../../services/authentication.service";
import { Observable, of } from 'rxjs';



@Injectable()
export class AuthenticationEffects {

  constructor(
    private actions: Actions,
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {}


  @Effect()
  LogIn: Observable<any> = this.actions
    .pipe(
      ofType(AuthenticationActionTypes.LOGIN),
      map((action: LogIn) => action.payload),
      switchMap(payload => {
        return this.authenticationService.logIn({email: payload.email, password: payload.password})
          .pipe(
            map((user) => {
              return new LogInSuccess({ token: user.token, email: payload.email});
            }),
            catchError((error) => {
              console.log(error);
              return of(new LogInFailure({ error }));
            })
          );
      })
    );


  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      localStorage.setItem("token", user.payload.token);
      this.router.navigateByUrl("/");
    })
  );
}
