import React from 'react';
import './Header.css'; // Import CSS for Header

const Header = () => {
  return (
    <header className="navbar">
      <h1 className="logo">Jeevaas Hospital</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
