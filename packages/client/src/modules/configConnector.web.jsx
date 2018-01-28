import React from 'react';

import { concat } from 'lodash';

import log from '../../../common/log';

export const featureCatalog = {};

export default class {
  constructor() {
    this.config = {};

    Object.values(arguments).forEach(feature => {
      for (const [key, value] of Object.entries(feature.config)) {
        if (Array.isArray(this.config[key])) {
          this.config[key] = concat(this.config[key], value);
        } else {
          this.config[key] = value;
        }
      }
    });

    return this;
  }

  setConfig(key, value) {
    this.config[key] = value;
    return this;
  }

  getConfig(key, transformer) {
    if (typeof transformer === 'function') {
      return transformer.call(this, this.config[key]);
    }
    return this.config[key];
  }
}
