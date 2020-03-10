import { Router } from "@angular/router";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';


import {
  PostActionTypes,
 LoadPosts,
 LoadPostsSuccess,
 LoadPostFailed
} from "../actions/post.actions";
import { PostService } from '../../services/post.service';
import * as PostActions from '../actions/post.actions';

@Injectable()
export class PostEffects {

  constructor(
    private actions: Actions,
    private router: Router,
    private postService$: PostService
  ) {}


  @Effect()
  LoadPosts: Observable<any> = this.actions
    .pipe(
      ofType(PostActionTypes.LOAD_POSTS),
      switchMap(() => {
        return this.postService$.loadPosts().pipe(
          map(posts =>  new PostActions.LoadPostsSuccess(posts)),
          catchError(error => of(new PostActions.LoadPostFailed({ error: error})))
        )
      })
    );



    @Effect({ dispatch: false })
    LoadPostsSuccess: Observable<any> = this.actions.pipe(
      ofType(PostActionTypes.LOAD_POSTS_SUCCESS),
      tap((post) => {
        console.log(post);
      })
    );



    @Effect({ dispatch: false})
    LoadPostsFailed: Observable<any> = this.actions.pipe(
      ofType(PostActionTypes.LOAD_POSTS_FAILURE),
      tap((error) => {
        console.log(error);
      })
    )

}


