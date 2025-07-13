import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/why-choose-us">Why Choose Us</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section company-info">
          <h2 className="footer-logo">Ugyan Edutech</h2>
          <p>Unleash your potential, conquer the real world</p>

          <h3 className="follow">Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/ugyan_edu?igsh=M2w0MGZ6dXM4MHRl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61558530543625">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.linkedin.com/company/ugyan-pvt-ltd/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://edu.ugyan.in/">
              <FontAwesomeIcon icon={faGlobe} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@ugyan.in</p>
          <p>Phone: +91 79751 65470</p>
          <p>Location: Sigma Tech Park, Whitefield Main Rd,</p>  <p>Bengaluru, Karnataka 560066</p>
            <p><a
              href="https://maps.app.goo.gl/rRayKuHqgwM2tw127"
              target="_blank"
              rel="noopener noreferrer"
              className="location-link"
            >
             
              Click to View on Map
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Ugyan Tech Solutions. All rights
          reserved.
        </p>
        <div className="footer-legal-links">
          <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
          <Link to="/terms-and-conditions">Terms & Conditions</Link> |{" "}
          <Link to="/refund-policy">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
