import { combineReducers } from 'redux';

import PostReducer from './posts-reducer';

const rootReducer = combineReducers({
  post: PostReducer,
  error: '',
});

export default rootReducer;
