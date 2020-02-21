import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private API_URL = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  getToken(): string {
    return localStorage.getItem("token");
  }
  registerUser(email, fullName, username, password) {
    return this.http.post<any>( this.API_URL + "register", {email, fullName, username, password});
  }

  logIn(user) {
    return this.http.post<any>( this.API_URL + "login", user);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");

  }
}
