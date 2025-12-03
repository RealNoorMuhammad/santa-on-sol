import React from "react";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";
import logoImg from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="bg-snow"></div>
      <div className="lights-decoration"></div>
      <div className="footer-container relative-content">
        <div className="footer-column logo-column">
          <div className="logo-img-container glow-effect">
            <img src={logoImg} alt="Santa Logo" className="logo-img" />
          </div>
          <span className="logo-text neon-text">SANTA</span>
        </div>
        
        <div className="footer-column links-column">
          <h3 className="footer-title">North Pole Links</h3>
          <div className="footer-links">
            <a href="#tokenomics" className="footer-link">Tokenomics</a>
            <a href="#roadmap" className="footer-link">Roadmap</a>
            <a href="#real-santa" className="footer-link">Real Santa</a>
          </div>
        </div>
        
        <div className="footer-column social-column">
          <h3 className="footer-title">Join the Party</h3>
          <div className="social-icons">
            <a href="#" className="social-btn glass-btn" aria-label="X (Twitter)">
                <FaXTwitter />
            </a>
            <a href="#" className="social-btn glass-btn" aria-label="Telegram">
                <FaTelegram />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-copyright relative-content">
        <p className="copyright-text">© 2025 Santa Token. All rights reserved. Made with ❤️ at the North Pole.</p>
      </div>
    </footer>
  );
};

export default Footer;
