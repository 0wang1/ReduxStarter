import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://localhost:9090/api';
const API_KEY = '';
// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
// const API_KEY = '?key=j_wang';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  ERROR: 'ERROR',
};

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
      dispatch({ type: ActionTypes.FETCH_POSTS, posts: response.data });
    }).catch(error => {
      dispatch({ type: ActionTypes.ERROR, error: 'error in fetching the posts' });
    });
  };
}
export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      dispatch({ type: ActionTypes.FETCH_POST, post: response.data });
      browserHistory.push(`/posts/${id}${API_KEY}`);
    }).catch(error => {
      dispatch({ type: ActionTypes.ERROR, error: `error in fetching post with id: ${id}` });
    });
  };
}
export function createPost(fields) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, fields, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      dispatch({ type: ActionTypes.CREATE_POST, post: response.data });
      browserHistory.push('/');
    }).catch(error => {
      dispatch({ type: ActionTypes.ERROR, error: 'error in creating post' });
    });
  };
}
export function updatePost(fields) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${fields.id}${API_KEY}`, fields, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      console.log(response.data);
      dispatch({ type: ActionTypes.UPDATE_POST, post: response.data });
      browserHistory.push(`/posts/${fields.id}${API_KEY}`);
    }).catch(error => {
      dispatch({ type: ActionTypes.ERROR, error: `error in updating post with id ${fields.id}` });
    });
  };
}
export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      dispatch({ type: ActionTypes.DELETE_POST, post: response.data });
      browserHistory.push('/');
    }).catch(error => {
      dispatch({ type: ActionTypes.ERROR, error: 'error in deleting post' });
    });
  };
}

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinUser(fields) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, fields).then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    }).catch(error => {
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}

export function signupUser(fields) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, fields).then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    }).catch(error => {
      dispatch(authError(`Sign Up Failed: ${error.response.data}`));
    });
  };
}

export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    browserHistory.push('/');
  };
}
