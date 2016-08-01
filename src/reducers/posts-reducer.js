import { ActionTypes } from '../actions';

const PostReducer = (state = { all: [], post: null, error: '' }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { ...state, all: action.posts, error: action.error };
    case ActionTypes.FETCH_POST:
      return { ...state, post: action.post, error: action.error };
    case ActionTypes.CREATE_POST:
      return { ...state, post: action.post, error: action.error };
    case ActionTypes.UPDATE_POST:
      return { ...state, post: action.post, error: action.error };
    case ActionTypes.DELETE_POST:
      return { ...state, post: action.post, error: action.error };
    default:
      return state;
  }
};

export default PostReducer;
