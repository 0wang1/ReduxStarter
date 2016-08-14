import { ActionTypes } from '../actions';

// THIS THING LETS YOU RERENDER THE CC!!!!
const AuthReducer = (state = { authenticated: false, currentAuthor: '' }, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, authenticated: true };
    case ActionTypes.DEAUTH_USER:
      return { ...state, authenticated: false };
    case ActionTypes.AUTH_ERROR:
      return { ...state, authenticated: false };
    default:
      return state;
  }
};

export default AuthReducer;
