import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import './style.scss';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import thunk from 'redux-thunk';
import { ActionTypes } from './actions';


// this creates the store with the reducers, and does some other stuff to initialize devtools
const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: ActionTypes.AUTH_USER });
}
// note this uses the Router stuff from last week
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('main'));
