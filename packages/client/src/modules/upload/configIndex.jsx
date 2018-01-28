import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { constructUploadOptions } from 'apollo-fetch-upload';
import { MenuItem } from '../../modules/common/components/web';

// Component and helpers
import Upload from './containers/Upload';
import reducers from './reducers';

import Feature from '../configConnector';

export default new Feature()
  .setConfig('routes', [<Route exact path="/upload" component={Upload} />])
  .setConfig('navItems', [
    <MenuItem key="/upload">
      <NavLink to="/upload" className="nav-link" activeClassName="active">
        Upload
      </NavLink>
    </MenuItem>
  ])
  .setConfig('reducers', [{ upload: reducers }])
  .setConfig('catalogInfo', [{ upload: true }])
  .setConfig('createFetchOptions', [constructUploadOptions]);
