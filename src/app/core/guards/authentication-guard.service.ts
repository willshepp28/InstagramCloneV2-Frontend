import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';



@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    public authentication: AuthenticationService,
    public router: Router
  ) {}
  canActivate(): boolean {
    if (!this.authentication.getToken()) {
      this.router.navigateByUrl('/accounts/login');
      return false;
    }
    return true;
  }
}
