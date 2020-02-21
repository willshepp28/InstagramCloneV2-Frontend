import { Injectable, Inject } from "@angular/core";
import { Action } from "@ngrx/store";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { tap, map, switchMap, catchError } from "rxjs/operators";

import { AuthenticationActionTypes,
  LogIn,
  LogInSuccess,
  LogInFailure,
  SignUp,
  SignUpSucess,
  SignUpFailure
} from "../actions/authentication.actions";
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
              console.log("User is logging in")
              localStorage.setItem("token", user.token);
              this.router.navigate(["/instagram-feed"]);
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
      this.router.navigateByUrl("/");
    })
  );


  @Effect()
  SignUp: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.SIGNUP),
    map((action: SignUp) => action.payload),
    switchMap(payload => {
      return this.authenticationService.registerUser(
        payload.email,
        payload.fullName,
        payload.username,
        payload.password
      )
      .pipe(
        map((user) => {
          console.log(user);
          return new SignUpSucess({ token: user.token, email: payload.email});
        }),
        catchError((error) => {
          console.log(error);
          return of(new SignUpFailure({ error }));
        })
      );
    })
  );


  @Effect({ dispatch: false })
  SignupSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.SIGNUP_SUCCESS),
    tap((user) => {
      this.router.navigateByUrl("/accounts/login");
    })
  );


  @Effect({ dispatch: false })
  SignUpFailure: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.SIGNUP_FAILURE)
  );

}
