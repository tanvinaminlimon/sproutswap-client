import React from 'react';
import { Link } from 'react-router-dom';
import '../Products/styles.css'

const Header = () => (
  <header>
    <div className="logo">SPROUTSWAP🌱<span className="leaf">🪴</span></div>
    <div className="header-right">
      <Link to="/plantsub">PLANT SUBSCRIPTION</Link>
      
      <Link to="/cart">CART (0)</Link>
    </div>
  </header>
);

export default Header;
