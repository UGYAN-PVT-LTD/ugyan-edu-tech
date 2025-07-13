import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/why-choose-us">Why Choose Us</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section company-info">
          <h2 className="footer-logo">Ugyan Edutech</h2>
          <p>Empowering Learning, Empowering Lives</p>
          
          <h3 className="follow">Follow Us</h3>
        <div className="social-icons">
  <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
  <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
  <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
  <a href="#"><FontAwesomeIcon icon={faGlobe} /></a>
</div>

        </div>

        {/* Contact Info */}
<div className="footer-section">
  <h3>Contact Us</h3>
  <p>Email: support@ugyan.in</p>
  <p>Phone: +91 79751 65470</p>
  <p>
    Location: Seetharampalya, 
    <br>
    </br>
    Bangalore -India
    <a
      href="https://www.google.com/maps/search/?api=1&query=Seetharampalya+Bangalore"
      target="_blank"
      rel="noopener noreferrer"
      className="location-link"
    >
      <br/>
      Click to View on Map
    </a>
  </p>
</div>


      </div>

      <div className="footer-bottom">
  <p>&copy; {new Date().getFullYear()} Ugyan Tech Solutions. All rights reserved.</p>
  <div className="footer-legal-links">
    <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
  </div>
</div>
    </footer>
  );
};

export default Footer;
