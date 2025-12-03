import React, { useState, useEffect } from "react";
import "./NavBar.css";
import candyCaneBg from "../assets/images/candy-cane-border.png";


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">

          <span className="logo-text">SANTA</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="navbar-links desktop-nav">
          <a href="#tokenomics" className="nav-link">Tokenomics</a>
          <a href="#roadmap" className="nav-link">Roadmap</a>
          <a href="#creator-rewards" className="nav-link">Rewards</a>
          <a href="#real-santa" className="nav-link">Real Santa</a>
        </div>

        <button className="buy-now-btn desktop-only">Buy Now</button>
        
        {/* Mobile Menu Toggle */}
        <div className="hamburger-wrapper" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}>
          <div className="snow-falling-effect"></div>
          <div className="mobile-menu-content">
            <a href="#tokenomics" className="mobile-nav-link" onClick={toggleMenu}>
              <span className="link-icon">🎁</span> Tokenomics
            </a>
            <a href="#roadmap" className="mobile-nav-link" onClick={toggleMenu}>
              <span className="link-icon">🛷</span> Roadmap
            </a>
            <a href="#creator-rewards" className="mobile-nav-link" onClick={toggleMenu}>
              <span className="link-icon">💰</span> Rewards
            </a>
            <a href="#real-santa" className="mobile-nav-link" onClick={toggleMenu}>
              <span className="link-icon">🎅</span> Real Santa
            </a>
            <button className="buy-now-btn mobile-btn">Get Gifts Now</button>
            
            <div className="mobile-menu-decoration">
              <img src={candyCaneBg} alt="Candy Cane" className="decoration-img" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
