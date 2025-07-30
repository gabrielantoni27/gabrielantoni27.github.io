import React, { useState } from 'react';
import '../styles/navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to section smoothly
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after click
    }
  };

  // Handle home click: scroll or navigate
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Toni</div>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <a href="/" onClick={handleHomeClick}>HOME</a>
        </li>

        <li>
          {location.pathname === '/' ? (
            <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>SKILLS</a>
          ) : (
            <Link to="/#about">SKILLS</Link>
          )}
        </li>

        <li>
          {location.pathname === '/' ? (
            <a href="#works" onClick={(e) => { e.preventDefault(); handleScroll('works'); }}>WORKS</a>
          ) : (
            <Link to="/#works">WORKS</Link>
          )}
        </li>

        <li><Link to="/resume">RESUME</Link></li>

        <li>
          {location.pathname === '/' ? (
            <a href="#footer" onClick={(e) => { e.preventDefault(); handleScroll('footer'); }}>CONTACT</a>
          ) : (
            <Link to="/#footer">CONTACT</Link>
          )}
        </li>

        <li>
          {location.pathname === '/' ? (
            <a href="#contact" className="hire-me-button" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>
              HIRE ME!
            </a>
          ) : (
            <Link to="/#contact" className="hire-me-button">HIRE ME!</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
