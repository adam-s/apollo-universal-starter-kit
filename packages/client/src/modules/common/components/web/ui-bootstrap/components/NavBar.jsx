import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, NavItem } from 'reactstrap';

import modules from '../../../../../../modules/configIndex.js';
import settings from '../../../../../../../../../settings';

// import { navItems, navItemsRight } from '../../../../config.js';

const NavBar = () => (
  <Navbar color="faded" light>
    <Container>
      <Nav>
        <NavLink to="/" className="navbar-brand">
          {settings.app.name}
        </NavLink>
        {modules.getConfig('navItems')}
      </Nav>

      <Nav className="ustify-content-end">
        {modules.getConfig('navItemsRight')}
        {(!__PERSIST_GQL__ || __DEV__) && (
          <NavItem>
            <a href="/graphiql" className="nav-link">
              GraphiQL
            </a>
          </NavItem>
        )}
      </Nav>
    </Container>
  </Navbar>
);

export default NavBar;
