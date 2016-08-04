import { combineReducers } from 'redux';

import PostReducer from './posts-reducer';

const rootReducer = combineReducers({
  posts: PostReducer,
  error: '',
});

export default rootReducer;
