import React from 'react';
import { merge } from 'lodash';

import modules from '../modules/configIndex.js';
import log from '../../../common/log';

export const middlewares = modules.getConfig('middlewares');

export const afterwares = modules.getConfig('afterwares');

export const connectionParams = modules.getConfig('connectionParams');

export const resolvers = modules.getConfig('resolvers', resolvers => merge(...resolvers));

export const routes = modules.getConfig('routes', routes => {
  return routes.map((component, idx) => React.cloneElement(component, { key: idx + routes.length }));
});

export const createFetchOptions = modules.getConfig('createFetchOptions');
export const constructFetchOptions = createFetchOptions.length
  ? (...args) => {
      try {
        let result = {};
        for (let func of createFetchOptions) {
          result = { ...result, ...func(...args) };
        }
        return result;
      } catch (e) {
        log.error(e.stack);
      }
    }
  : null;

export const rootComponentFactory = modules.getConfig('rootComponentFactory');
export const getWrappedRoot = (root, req) => {
  let nestedRoot = root;
  for (const componentFactory of rootComponentFactory) {
    nestedRoot = React.cloneElement(componentFactory(req), {}, nestedRoot);
  }
  return nestedRoot;
};
