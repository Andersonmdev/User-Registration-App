import React from 'react';
import './Nav.css';

import NavItem from './NavItem';

export default () => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <NavItem href="/" icon="fa fa-home" text="Home" />
        <NavItem href="/users" icon="fa fa-users" text="Users" />
      </nav>
    </aside>
  );
}
