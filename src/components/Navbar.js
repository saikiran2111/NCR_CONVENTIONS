import React from 'react';
import { Link } from 'react-scroll';  // Import Link from react-scroll
import '../styles/Navbar.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressCard, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="nav-bar">
      <h1 className="hotel-name">NCR Conventions</h1>
      <ul className="nav-links">
        <li>
          <FontAwesomeIcon icon={faHouse} style={{ color: '#000000' }} />
          <Link 
            activeClass="active" 
            to="home"   // Link to the home section
            spy={true} 
            smooth={true} 
            offset={-70}  // Adjust if you have a fixed navbar
            duration={100}
          >
            Home
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faAddressCard} style={{ color: '#000000' }} />
          <Link 
            activeClass="active" 
            to="about-us"   // Ensure you have an "about" section
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={100}
          >
            About
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faHandHoldingHeart} style={{ color: '#000000' }} />
          <Link 
            activeClass="active" 
            to="services"   // Ensure you have a "services" section
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={100}
          >
            Services
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faAddressCard} style={{ color: '#000000' }} />
          <Link 
            activeClass="active" 
            to="contact-us"  // Ensure you have a "contact" section
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={100}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
