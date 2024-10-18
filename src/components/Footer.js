import React from 'react';
import '../styles/Footer.css'; // Import the CSS for the Footer component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Import specific icons

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p><strong>Address:</strong> NCR Convention, Khallikote, Ganjam, Odisha, 761030</p>
                    <p><strong>Email:</strong> ncr@conventioncenter.com</p>
                    <div className="social-media">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} style={{ color: "#000000" }} /> Instagram
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} style={{ color: "#000000" }} /> Twitter
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} style={{ color: "#000000" }} /> Facebook
                        </a>
                    </div>
                </div>
                <div className="footer-right">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24005.528294965226!2d85.80435478070463!3d19.949888565669094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a21a8cbfd178153%3A0x239f3b0f8b9ef6e4!2sNCR%20Convention%2C%20Khallikote%2C%20Ganjam%2C%20Odisha%20761030!5e0!3m2!1sen!2sin!4v1693177929055!5m2!1sen!2sin"
                        width="400" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" title='hotel-location'></iframe>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 NCR Convention Center. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
