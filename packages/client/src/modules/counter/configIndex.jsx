import React from 'react';
import { Route } from 'react-router-dom';

import Counter from './containers/Counter';
import reducers from './reducers';

import Feature from '../configConnector';

export default new Feature()
  .setConfig('routes', [<Route exact path="/" component={Counter} />])
  .setConfig('reducers', [{ counter: reducers }]);
