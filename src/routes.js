import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import New from './containers/new';
import Show from './containers/show';
import Index from './containers/index';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="posts/index" component={Index} />
    <Route path="posts/new" component={New} />
    <Route path="posts/:id" component={Show} />
  </Route>
);
