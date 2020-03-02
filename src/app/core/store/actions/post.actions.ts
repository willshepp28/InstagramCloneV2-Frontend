import { Action } from "@ngrx/store";
import { Post } from 'src/app/models/post/post';



export enum PostActionTypes {
  GET_POSTS = "[POST] Get Posts",
  GET_POSTS_SUCCESS = "[POST] Get Posts Successs"
}


export class GetPosts implements Action {
  readonly type = PostActionTypes.GET_POSTS;
  constructor(public payload: any) {}
}

export class GetPostsSuccess implements Action {
  readonly type = PostActionTypes.GET_POSTS_SUCCESS;
  constructor(public payload: any) {}
}



export type All =
| GetPosts
| GetPostsSuccess;
