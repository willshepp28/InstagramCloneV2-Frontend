import { Post } from "src/app/models/post/post";
import { PostActionTypes, All } from "../actions/post.actions";



export interface IPostState {
  isLoading: boolean;
  isLoadingSuccess: boolean;
  posts: Post[];
}


export const initialState: IPostState = {
  isLoading: false,
  isLoadingSuccess: false,
  posts: []
};



export function reducer(state = initialState, action: All): IPostState{
  switch (action.type) {
    case PostActionTypes.LOAD_POSTS: {
      return {
        ...state,
        isLoading: true,
        isLoadingSuccess: false
      };
    }
    case PostActionTypes.LOAD_POSTS_SUCCESS : {
      return {
        ...state,
        isLoading: false,
        isLoadingSuccess: true,
        posts: action.payload.data

      };
    }
    case PostActionTypes.LOAD_POSTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isLoadingSuccess: false,
        posts: []
      }
    }
    default:
      return state;
  }
}

