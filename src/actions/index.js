import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = '?key=j_wang';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
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
    axios.post(`${ROOT_URL}/posts${API_KEY}`, fields).then(response => {
      dispatch({ type: ActionTypes.CREATE_POST, post: response.data });
      browserHistory.push('/');
    }).catch(error => {
      dispatch({ type: ActionTypes.ERROR, error: 'error in creating post' });
    });
  };
}
export function updatePost(fields) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${fields.id}${API_KEY}`, fields).then(response => {
      dispatch({ type: ActionTypes.UPDATE_POST, post: response.data });
    }).catch(error => {
      dispatch({ type: ActionTypes.ERROR, error: `error in updating post with id ${fields.id}` });
    });
  };
}
export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      dispatch({ type: ActionTypes.DELETE_POST, post: response.data });
      browserHistory.push('/');
    }).catch(error => {
      dispatch({ type: ActionTypes.ERROR, error: 'error in deleting post' });
    });
  };
}
