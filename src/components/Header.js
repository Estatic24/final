import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/catalog" className="nav-link">Catalog</Link>
        <Link to="/News" className="nav-link">News</Link>
        <Link to="/About_us" className="nav-link">About us</Link>
        <Link to="/arcana" className="nav-link">Arcana</Link>
      </nav>
    </header>
  );
}

export default Header;