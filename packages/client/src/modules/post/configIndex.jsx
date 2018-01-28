import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '../../modules/common/components/web';

import Post from './containers/Post';
import PostEdit from './containers/PostEdit';

import reducers from './reducers';

import Feature from '../configConnector';

console.log('MenuItemOne: ', MenuItem);
setTimeout(() => {
  console.log('MenuItemTwo: ', MenuItem);
});
export default new Feature()
  .setConfig('routes', [
    <Route exact path="/posts" component={Post} />,
    <Route exact path="/post/:id" component={PostEdit} />
  ])
  .setConfig('navItems', [
    <MenuItem key="/posts">
      <NavLink to="/posts" className="nav-link" activeClassName="active">
        Posts
      </NavLink>
    </MenuItem>
  ])
  .setConfig('reducers', [{ post: reducers }]);
