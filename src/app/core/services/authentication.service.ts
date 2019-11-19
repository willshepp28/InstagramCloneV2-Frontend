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
  registerUser(user) {
    return this.http.post<any>("/api/authenticate/register", user);
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
