import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import New from './containers/new';
import Show from './containers/show';
import Index from './containers/index';
import SignIn from './containers/sign_in';
import SignUp from './containers/sign_up';
import RequireAuth from './containers/require-auth';


export default(
  <Route path="/" component={App}>
    <IndexRoute component={RequireAuth(Index)} />
    <Route path="posts/index" component={RequireAuth(Index)} />
    <Route path="posts/new" component={RequireAuth(New)} />
    <Route path="posts/:id" component={RequireAuth(Show)} />
    <Route path="signin" component={SignIn} />
    <Route path="signup" component={SignUp} />
  </Route>
);
