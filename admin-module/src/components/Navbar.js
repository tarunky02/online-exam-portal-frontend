import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Import a CSS file for styling

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;