import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            
            <p className="footer-description">Empowering businesses with innovative solutions.</p>
            <div className="footer-contact">
              <p>Email: contact@company.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Business Ave</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              {["Home", "About Us", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h3 className="footer-heading">Connect</h3>
            <div className="social-icons">
              <a href="#">
                <FaFacebook className="social-icon facebook" />
              </a>
              <a href="#">
                <FaTwitter className="social-icon twitter" />
              </a>
              <a href="#">
                <FaLinkedin className="social-icon linkedin" />
              </a>
              <a href="#">
                <FaInstagram className="social-icon instagram" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3 className="footer-heading">Newsletter</h3>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="subscribe-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="#" className="legal-link">
                Privacy Policy
              </a>
              <a href="#" className="legal-link">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;