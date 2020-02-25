import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivateChild {

  constructor(
    public authentication: AuthenticationService,
    public location: Location,
  ) {}

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // if the user is already authenticated, they shouldnt be able to enter these routes
    console.log(`The route is ${state.url}`)
    if (this.authentication.checkIfTokenExists()) {
      // this.location.back();
      return false;
   }
    return true;
  }
}
