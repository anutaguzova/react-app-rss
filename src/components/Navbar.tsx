import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (): JSX.Element => (
  <header>
    <div className="navbar">
      <div className="navbar__items">
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  </header>
);

export default Navbar;
