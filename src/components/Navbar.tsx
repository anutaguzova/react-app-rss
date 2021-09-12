import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (): JSX.Element => (
  <header>
    <div className="navbar">
      <div className="navbar__items">
        <NavLink exact to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
      </div>
    </div>
  </header>
);

export default Navbar;
