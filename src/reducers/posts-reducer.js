import { ActionTypes } from '../actions';

// THIS THING LETS YOU RERENDER THE CC!!!!
const PostReducer = (state = { all: [], post: '', error: '' }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { ...state, all: action.posts };
    case ActionTypes.FETCH_POST:
      return { ...state, post: action.post };
    case ActionTypes.UPDATE_POST:
      return { ...state, post: action.post };
    case ActionTypes.DELETE_POST:
      return { ...state, post: action.post };
    case ActionTypes.ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default PostReducer;
