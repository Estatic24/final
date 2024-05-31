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
        <li><Link to="/final">Home</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/aboutUs">About Us</Link></li>
        <li><Link to="/arcana">Arcana</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;