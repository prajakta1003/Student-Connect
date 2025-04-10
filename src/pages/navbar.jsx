import React, { useRef } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuToggleRef = useRef(null);

  const handleLinkClick = () => {
    if (menuToggleRef.current) {
      menuToggleRef.current.checked = false; // ✅ close menu on link click
    }
  };

  return (
    <header className="navbar-container">
      {/* Logo */}
      <div className="logo-container">
        <img src="/studentconnect-logo-light.svg" alt="Logo" className="logo" />
      </div>

      {/* Hidden checkbox toggle */}
      <input type="checkbox" id="active" className="menu-toggle" ref={menuToggleRef} />

      {/* Menu Button */}
      <label htmlFor="active" className="menu-button" aria-label="Toggle menu">
        <i className="fas fa-bars menu-icon"></i>
      </label>

      {/* Overlay Navigation */}
      <div className="overlay">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link" onClick={handleLinkClick}>
              Home
              <span className="hover-background"></span>
            </Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link" onClick={handleLinkClick}>
              Blog
              <span className="hover-background"></span>
            </Link>
          </li>
          <li>
            <Link to="/docs" className="nav-link" onClick={handleLinkClick}>
              Docs
              <span className="hover-background"></span>
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-link" onClick={handleLinkClick}>
              Services
              <span className="hover-background"></span>
            </Link>
          </li>
          <li>
            <Link to="/features" className="nav-link" onClick={handleLinkClick}>
              Feature
              <span className="hover-background"></span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
