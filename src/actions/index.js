import axios from 'axios';

const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = '?key=j_wang';
const fields = { title: '', contents: '', tags: '' };

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
};


export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
      dispatch({ type: ActionTypes.FETCH_POSTS, posts: response });
    }).catch(error => {
      dispatch({ error: 'error in fetching the posts' });
    });
  };
}

export function fetchPost() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`, fields).then(response => {
      dispatch({ type: ActionTypes.FETCH_POST, post: response });
    }).catch(error => {
      dispatch({ error: `error in fetching post with id ${fields.id}` });
    });
  };
}
export function createPost() {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, fields).then(response => {
      dispatch({ type: ActionTypes.CREATE_POST, post: response });
    }).catch(error => {
      dispatch({ error: 'error in creating post' });
    });
  };
}
export function updatePost() {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts${API_KEY}`, fields).then(response => {
      dispatch({ type: ActionTypes.UPDATE_POST, post: response });
    }).catch(error => {
      dispatch({ error: `error in updating post with id ${fields.id}` });
    });
  };
}
export function deletePost() {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts${API_KEY}`).then(response => {
      dispatch({ type: ActionTypes.DELETE_POST, post: response });
    }).catch(error => {
      dispatch({ error: `error in deleting post with id ${fields.id}` });
    });
  };
}
