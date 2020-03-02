import { Post } from "src/app/models/post/post";
import { PostActionTypes, All } from "../actions/post.actions";



export interface IPostState {
  posts: Post[];
}


export const initialState: IPostState = {
  posts: null
};



export function reducer(state = initialState, action: All): IPostState{
  switch (action.type) {
    case PostActionTypes.GET_POSTS_SUCCESS : {
      return {
        ...state,
        posts: action.payload
      }
    }
    default:
      return state;
  }
}

