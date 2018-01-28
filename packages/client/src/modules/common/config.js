import React from 'react';
import { merge } from 'lodash';

import config from '../../modules/configIndex.js';

const navItem = config.getConfig('navItems');
console.log(navItem);
export const navItems = navItem.map((component, idx) => {
  return React.cloneElement(component, {
    key: component.key ? component.key : idx + navItem.length
  });
});

export const navItemsRight = config.getConfig('navItemsRight', navItemsRight => {
  return navItemsRight.map((component, idx) => {
    return React.cloneElement(component, {
      key: component.key ? component.key : idx + navItemsRight.length
    });
  });
});
