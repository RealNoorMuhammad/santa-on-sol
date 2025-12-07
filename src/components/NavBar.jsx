import React, { useState, useEffect } from "react";
import "./NavBar.css";
import candyCaneBg from "../assets/images/candy-cane-border.png";


const NavBar = ({ isSnowWhiteTheme = false, onToggleTheme = () => {} }) => {
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
          <a href="#creator-rewards" className="nav-link">Rewards</a>
          <a href="#real-santa" className="nav-link">Real Santa</a>
        </div>

        <div className="navbar-actions">
          <div className="theme-toggle desktop-only">
            <button
              type="button"
              className={`theme-ball ${isSnowWhiteTheme ? "is-snow" : "is-moon"}`}
              onClick={onToggleTheme}
              aria-label={isSnowWhiteTheme ? "Switch to night theme" : "Switch to Snow White theme"}
            >
              <span className="theme-ball__icon" aria-hidden="true">
                {isSnowWhiteTheme ? "❄" : "🌙"}
              </span>
            </button>
          </div>
          <a href="https://dexscreener.com/solana/3h3sQKtJvss3enWoqiucKXNDTGgHf1bGXC7mkmeWKiRM" target="_blank" rel="noopener noreferrer" className="buy-now-btn desktop-only">Buy Now</a>
        </div>
        
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
            <a href="#creator-rewards" className="mobile-nav-link" onClick={toggleMenu}>
              Rewards
            </a>
            <a href="#real-santa" className="mobile-nav-link" onClick={toggleMenu}>
            Real Santa
            </a>
            <a href="https://dexscreener.com/solana/3h3sQKtJvss3enWoqiucKXNDTGgHf1bGXC7mkmeWKiRM" target="_blank" rel="noopener noreferrer" className="buy-now-btn mobile-btn">BUY</a>
            <div className="theme-toggle mobile-theme-toggle">
              <button
                type="button"
                className={`theme-ball ${isSnowWhiteTheme ? "is-snow" : "is-moon"}`}
                onClick={onToggleTheme}
                aria-label={isSnowWhiteTheme ? "Switch to night theme" : "Switch to Snow White theme"}
              >
                <span className="theme-ball__icon" aria-hidden="true">
                  {isSnowWhiteTheme ? "❄" : "🌙"}
                </span>
              </button>
            </div>
            
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
