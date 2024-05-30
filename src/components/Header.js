import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./img/dota2_logo_png.png"

const Header = () => (
  <header className="header">
    <Link to="/">
      <img src={Logo} alt="Dota 2 Logo" className="logo" />
    </Link>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;