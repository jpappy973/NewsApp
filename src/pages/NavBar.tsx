import React from 'react';
import { Link } from 'react-router-dom';  // Import Link component from react-router-dom to handle navigation

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={liStyle}>
          <Link to="/news" style={linkStyle}>News</Link>
        </li>
        <li style={liStyle}>
          <Link to="/sport" style={linkStyle}>Sports</Link>
        </li>
        <li style={liStyle}>
          <Link to="/bussiness" style={linkStyle}>Bussiness</Link>
        </li>
        <li style={liStyle}>
          <Link to="/health" style={linkStyle}>Health</Link>
        </li>
      </ul>
    </nav>
  );
};

const navStyle = {
  backgroundColor: '#333',
  padding: '26px 0',
};

const ulStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

const liStyle = {
  margin: '0 15px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '18px',
};

export default Navbar;