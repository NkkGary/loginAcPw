// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title"> </h1>

      {/* Hamburger icon for mobile */}
      <button className="menu-icon" onClick={toggleMobileMenu}>
        ☰
      </button>

      {/* Sidebar for mobile - now slides in from the right */}
      <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMobileMenu}>✕</button>
        <ul className="sidebar-links">
          <li><Link to="home" onClick={toggleMobileMenu}>Home</Link></li>
          <li><Link to="about" onClick={toggleMobileMenu}>About</Link></li>
          {/* <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li> */}
          <li><Link to="auth" onClick={toggleMobileMenu}>Auth</Link></li>
        </ul>
      </div>

      {/* Desktop navbar links */}
      <ul className="navbar-links">
        <li><Link to="home">Home</Link></li>
        <li><Link to="about">About</Link></li>
        {/* <li><Link to="contact">Contact</Link></li> */}
        <li><Link to="auth">Auth</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
