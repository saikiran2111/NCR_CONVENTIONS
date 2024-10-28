import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressCard, faHandHoldingHeart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="nav-bar">
      <h1 className="hotel-name">NCR Conventions</h1>
      <div className="menu-container">
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <FontAwesomeIcon icon={faHouse} style={{ color: '#000000' }} />
            <Link 
              activeClass="active" 
              to="home"
              spy={true} 
              smooth={true} 
              offset={-70}  
              duration={100}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faAddressCard} style={{ color: '#000000' }} />
            <Link 
              activeClass="active" 
              to="about-us"  
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={100}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faHandHoldingHeart} style={{ color: '#000000' }} />
            <Link 
              activeClass="active" 
              to="services"  
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={100}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faAddressCard} style={{ color: '#000000' }} />
            <Link 
              activeClass="active" 
              to="contact-us"  
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={100}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
