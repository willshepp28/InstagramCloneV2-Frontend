import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  getToken(): string {
    return localStorage.getItem("token");
  }
  registerUser(email, fullName, username, password) {
    return this.http.post<any>("/api/authenticate/register", {email, fullName, username, password});
  }

  logIn(user) {
    return this.http.post<any>("/api/authenticate/login", user);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");

  }
}
