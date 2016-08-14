import { combineReducers } from 'redux';

import PostReducer from './posts-reducer';
import AuthReducer from './auth_reducer';

const rootReducer = combineReducers({
  posts: PostReducer,
  auth: AuthReducer,
  error: '',
});

export default rootReducer;
