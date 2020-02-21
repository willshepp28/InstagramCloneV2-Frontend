import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivateChild {

  constructor(
    public authentication: AuthenticationService
  ){}

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // if the user is already authenticated, they shouldnt be able to enter these routes
  //   if (this.authentication.getToken()) {
  //     return false;
  //  }
    return true;
  }
}
