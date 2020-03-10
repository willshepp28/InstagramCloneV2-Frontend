import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private API_URL: any = environment.POST_API_URL;

  constructor(
    private http: HttpClient
  ) {}

  loadPosts() {
    return this.http.get<any>(this.API_URL + "getPosts");
  }
}
