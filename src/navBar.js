// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="project-name">
        <span>E-Campus </span>
      </div>
      <ul>
        <li>
          <Link to="/">Tools</Link>
        </li>
        <li>
          <Link to="/about">Study</Link>
        </li>
        <li>
          <Link to="/contact">Sharing</Link>
        </li>
        <li>
          <Link to="/">Green</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
