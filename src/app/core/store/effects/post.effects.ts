import { Router } from "@angular/router";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';


import {
  PostActionTypes,
 GetPosts,
 GetPostsSuccess
} from "../actions/post.actions";
import { PostService } from '../../services/post.service';

@Injectable()
export class PostEffects {

  constructor(
    private actions: Actions,
    private router: Router,
    private postService$: PostService
  ) {}


  @Effect()
  GetPosts: Observable<any> = this.actions
    .pipe(
      ofType(PostActionTypes.GET_POSTS),
      map((action: GetPosts) => action.payload),
      switchMap(payload => {
        return this.postService$.getPosts()
          .pipe(
            map((posts) => {
              console.log(posts)
            }),
            catchError((error) => {
              console.log(error);
            })
          )
      })
    )

}


