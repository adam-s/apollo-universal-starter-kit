import React from 'react';
import { Route } from 'react-router-dom';

import PageNotFound from './containers/PageNotFound';
import Feature from '../configConnector';

export default new Feature().setConfig('routes', [<Route component={PageNotFound} />]);
