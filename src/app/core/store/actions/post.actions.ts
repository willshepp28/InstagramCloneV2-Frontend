import { Action } from "@ngrx/store";
import { Post } from 'src/app/models/post/post';



export enum PostActionTypes {
  LOAD_POSTS = "[POST] Load Posts",
  LOAD_POSTS_SUCCESS = "[POST] Load Posts Successs",
  LOAD_POSTS_FAILURE = "[POST] Load Posts Failed"
}


export class LoadPosts implements Action {
  readonly type = PostActionTypes.LOAD_POSTS;
}

export class LoadPostsSuccess implements Action {
  readonly type = PostActionTypes.LOAD_POSTS_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadPostFailed implements Action {
  readonly type = PostActionTypes.LOAD_POSTS_FAILURE;
  constructor(public payload: {error: any}) {}
}


export type All =
| LoadPosts
| LoadPostsSuccess
| LoadPostFailed;
