import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '../../modules/common/components/web';
import Contact from './containers/Contact';

import Feature from '../configConnector';

export default new Feature()
  .setConfig('routes', [<Route exact path="/contact" component={Contact} />])
  .setConfig('navItems', [
    <MenuItem key="contact">
      <NavLink to="/contact" className="nav-link" activeClassName="active">
        Contact Us
      </NavLink>
    </MenuItem>
  ]);
